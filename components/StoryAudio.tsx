'use client'

import { useEffect, useRef, useState } from 'react'

interface StoryAudioProps {
  src: string
  autoPlay?: boolean
  loop?: boolean
  volume?: number
  fadeIn?: boolean
  threshold?: number
  rootMargin?: string
}

export default function StoryAudio({ 
  src, 
  autoPlay = false, 
  loop = false,
  volume = 0.25, // Reduced default volume (was 0.5) - quieter overall
  fadeIn = true,
  threshold = 0.25,
  rootMargin = '0px 0px -400px 0px'
}: StoryAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [hasStarted, setHasStarted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const rafIdRef = useRef<number | null>(null)
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const isActiveRef = useRef<boolean>(false)
  const fadeInStartTimeRef = useRef<number | null>(null)
  const fadeInCompleteRef = useRef<boolean>(false)

  // Auto-play ambient sounds (when loop is true) or when autoPlay is explicitly set
  const shouldAutoPlay = autoPlay || loop

  // Handle global audio consent event to re-attempt playback
  useEffect(() => {
    const handler = () => {
      if (!audioRef.current) return
      // Attempt to (re)play and mark as started so scroll-based volume can take over
      audioRef.current.play().catch(() => {})
      setHasStarted(true)
    }
    window.addEventListener('audio:enable', handler)
    return () => window.removeEventListener('audio:enable', handler)
  }, [])

  // Calculate volume based on distance from viewport center
  // Volume decreases as you scroll away from the audio source
  const calculateVolume = (distanceFromCenter: number, viewportHeight: number) => {
    // Maximum distance for any volume (1.2x viewport height)
    const maxDistance = viewportHeight * 1.2
    // Calculate normalized distance (0 = at center, 1 = at maxDistance)
    const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1)
    // Use exponential falloff for smoother, more natural fade
    // This creates a curve: loud at center, fades smoothly as you move away
    const volumeMultiplier = Math.pow(1 - normalizedDistance, 2.5)
    // Apply base volume and ensure it's between 0 and 1
    return Math.max(0, Math.min(1, volumeMultiplier * volume))
  }

  useEffect(() => {
    if (!audioRef.current || !containerRef.current) return

    const audio = audioRef.current

    const updateVolume = () => {
      if (!audioRef.current || !containerRef.current) return
      if (audio.paused && !hasStarted) return // Don't update if not started

      const rect = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const viewportCenter = viewportHeight / 2
      
      // Calculate distance from viewport center to audio element
      const elementCenter = rect.top + (rect.height / 2)
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter)
      
      // Calculate target volume based on scroll distance
      let targetVolume = calculateVolume(distanceFromCenter, viewportHeight)
      
      // Apply fade-in progress if still fading in
      if (!fadeInCompleteRef.current && fadeIn && fadeInStartTimeRef.current !== null) {
        // Fade in progress (0 to 1 over 1.5 seconds)
        const fadeDuration = 1500
        const elapsed = Date.now() - fadeInStartTimeRef.current
        const fadeProgress = Math.min(elapsed / fadeDuration, 1)
        targetVolume = Math.min(targetVolume, fadeProgress * volume)
        
        if (fadeProgress >= 1) {
          fadeInCompleteRef.current = true
        }
      }
      
      // Smoothly adjust volume (avoid rapid changes)
      const currentVolume = audio.volume
      if (Math.abs(currentVolume - targetVolume) > 0.005) {
        // Smooth interpolation for volume changes
        const smoothing = 0.15
        audio.volume = currentVolume + (targetVolume - currentVolume) * smoothing
      } else {
        audio.volume = targetVolume
      }

      // For non-looping sounds, pause if completely faded out and far away
      if (!loop && targetVolume < 0.02 && distanceFromCenter > viewportHeight * 1.5) {
        audio.pause()
        isActiveRef.current = false
      }
    }

    const startVolumeTracking = () => {
      if (rafIdRef.current) return // Already tracking
      
      isActiveRef.current = true
      const rafUpdate = () => {
        updateVolume()
        // Continue tracking if audio is playing
        if (isActiveRef.current && audioRef.current && !audioRef.current.paused) {
          rafIdRef.current = requestAnimationFrame(rafUpdate)
        } else {
          rafIdRef.current = null
        }
      }
      rafIdRef.current = requestAnimationFrame(rafUpdate)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Start audio when scrolled into view
        if (entry.isIntersecting && !hasStarted && shouldAutoPlay) {
          if (fadeIn) {
            fadeInStartTimeRef.current = Date.now()
            fadeInCompleteRef.current = false
            audio.volume = 0
          } else {
            fadeInCompleteRef.current = true // Skip fade-in
            // Set initial volume based on current scroll position
            const rect = containerRef.current?.getBoundingClientRect()
            if (rect) {
              const viewportHeight = window.innerHeight
              const viewportCenter = viewportHeight / 2
              const elementCenter = rect.top + (rect.height / 2)
              const distanceFromCenter = Math.abs(elementCenter - viewportCenter)
              audio.volume = calculateVolume(distanceFromCenter, viewportHeight)
            } else {
              audio.volume = volume * 0.5 // Default to half volume if position unknown
            }
          }
          
          // Start playing
          audio.play().catch(() => {
            // Auto-play might be blocked, that's okay
          })
          
          setHasStarted(true)
          startVolumeTracking() // Start continuous volume tracking
        }
        
        // Handle when scrolling out of view
        if (!entry.isIntersecting && hasStarted && !loop) {
          // Volume will fade out naturally via scroll distance calculation
          // Audio will pause when volume reaches near-zero and far from viewport
        }
      },
      { threshold, rootMargin }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    // Listen to scroll/resize for responsive volume updates
    const handleScroll = () => {
      if (hasStarted) {
        updateVolume()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current)
      }
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      // Cleanup: stop audio when component unmounts
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }
    }
  }, [shouldAutoPlay, hasStarted, loop, volume, fadeIn, threshold, rootMargin])

  return (
    <div ref={containerRef} className="hidden">
      <audio
        ref={audioRef}
        src={src}
        loop={loop}
        preload="auto"
      />
    </div>
  )
}

