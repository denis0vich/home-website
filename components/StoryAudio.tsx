'use client'

import { useEffect, useRef, useState } from 'react'
import { useAudioExperience } from './AudioExperienceProvider'

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
  autoPlay = true, 
  loop = false,
  volume = 0.5,
  fadeIn = true,
  threshold = 0.2,
  rootMargin = '0px 0px -150px 0px'
}: StoryAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const rafIdRef = useRef<number | null>(null)
  const fadeStartTimeRef = useRef<number | null>(null)
  const { audioEnabled } = useAudioExperience()

  const shouldAutoPlay = autoPlay || loop

  // Calculate volume based on distance from viewport center
  const calculateVolume = (distanceFromCenter: number, viewportHeight: number) => {
    const maxDistance = viewportHeight * 1.2
    const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1)
    const volumeMultiplier = Math.pow(1 - normalizedDistance, 2.5)
    return Math.max(0, Math.min(1, volumeMultiplier * volume))
  }

  useEffect(() => {
    if (!audioRef.current || !containerRef.current) return

    const audio = audioRef.current
    let isMounted = true

    // Update volume based on scroll position
    const updateVolume = () => {
      if (!isMounted || !audioRef.current || !containerRef.current || audio.paused) return

      const rect = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const viewportCenter = viewportHeight / 2
      const elementCenter = rect.top + (rect.height / 2)
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter)
      
      let targetVolume = calculateVolume(distanceFromCenter, viewportHeight)
      
      // Apply fade-in if needed
      if (fadeIn && fadeStartTimeRef.current !== null) {
        const fadeDuration = 2000
        const elapsed = Date.now() - fadeStartTimeRef.current
        const fadeProgress = Math.min(elapsed / fadeDuration, 1)
        targetVolume = Math.min(targetVolume, fadeProgress * volume)
        
        if (fadeProgress >= 1) {
          fadeStartTimeRef.current = null
        }
      }
      
      // Smooth volume transition
      const currentVolume = audio.volume
      if (Math.abs(currentVolume - targetVolume) > 0.01) {
        audio.volume = currentVolume + (targetVolume - currentVolume) * 0.1
      } else {
        audio.volume = targetVolume
      }

      // Pause non-looping sounds when far away
      if (!loop && targetVolume < 0.01 && distanceFromCenter > viewportHeight * 1.5) {
        audio.pause()
        setIsPlaying(false)
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current)
          rafIdRef.current = null
        }
      }
    }

    const startVolumeTracking = () => {
      if (rafIdRef.current) return
      
      const rafUpdate = () => {
        if (!isMounted) return
        updateVolume()
        if (audioRef.current && !audioRef.current.paused) {
          rafIdRef.current = requestAnimationFrame(rafUpdate)
        } else {
          rafIdRef.current = null
        }
      }
      rafIdRef.current = requestAnimationFrame(rafUpdate)
    }

    const playAudio = async () => {
      if (!audioRef.current || !audioEnabled || isPlaying) return

      try {
        if (fadeIn) {
          fadeStartTimeRef.current = Date.now()
          audio.volume = 0
        } else {
          const rect = containerRef.current?.getBoundingClientRect()
          if (rect) {
            const viewportHeight = window.innerHeight
            const viewportCenter = viewportHeight / 2
            const elementCenter = rect.top + rect.height / 2
            const distanceFromCenter = Math.abs(elementCenter - viewportCenter)
            audio.volume = calculateVolume(distanceFromCenter, viewportHeight)
          } else {
            audio.volume = volume
          }
        }

        // Ensure audio is loaded
        if (audio.readyState < 2) {
          await new Promise<void>((resolve) => {
            const handleCanPlay = () => {
              audio.removeEventListener('canplay', handleCanPlay)
              resolve()
            }
            audio.addEventListener('canplay', handleCanPlay)
            audio.load()
          })
        }

        await audio.play()
        setIsPlaying(true)
        startVolumeTracking()
      } catch (err) {
        console.debug('Audio playback failed:', err)
      }
    }

    const stopAudio = () => {
      if (audioRef.current) {
        audio.pause()
        audio.currentTime = 0
        setIsPlaying(false)
      }
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
        rafIdRef.current = null
      }
    }

    // Intersection Observer for scroll-based triggering
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        const isVisible = entry.isIntersecting && entry.intersectionRatio > threshold

        if (isVisible && shouldAutoPlay && audioEnabled && !isPlaying) {
          playAudio()
        } else if (!entry.isIntersecting && !loop && isPlaying) {
          // Let volume fade naturally, don't stop immediately
        }
      },
      { threshold, rootMargin }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    // Handle audio enable/disable events
    const handleAudioEnable = () => {
      if (shouldAutoPlay && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const isInView = rect.top < viewportHeight && rect.bottom > 0
        
        if (isInView && !isPlaying) {
          const visibleTop = Math.max(rect.top, 0)
          const visibleBottom = Math.min(rect.bottom, viewportHeight)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          const intersectionRatio = visibleHeight / rect.height
          
          if (intersectionRatio > threshold) {
            setTimeout(() => playAudio(), 100)
          }
        }
      }
    }

    const handleAudioDisable = () => {
      stopAudio()
    }

    window.addEventListener('audio:enable', handleAudioEnable)
    window.addEventListener('audio:disable', handleAudioDisable)

    // Initial check if audio is already enabled and element is visible
    if (audioEnabled && shouldAutoPlay && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const isInView = rect.top < viewportHeight && rect.bottom > 0
      
      if (isInView) {
        const visibleTop = Math.max(rect.top, 0)
        const visibleBottom = Math.min(rect.bottom, viewportHeight)
        const visibleHeight = Math.max(0, visibleBottom - visibleTop)
        const intersectionRatio = visibleHeight / rect.height
        
        if (intersectionRatio > threshold) {
          setTimeout(() => playAudio(), 300)
        }
      }
    }

    // Scroll listener for volume updates
    const handleScroll = () => {
      if (isPlaying) {
        updateVolume()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      isMounted = false
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
      window.removeEventListener('audio:enable', handleAudioEnable)
      window.removeEventListener('audio:disable', handleAudioDisable)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }
    }
  }, [audioEnabled, shouldAutoPlay, loop, volume, fadeIn, threshold, rootMargin, isPlaying])

  return (
    <div
      ref={containerRef}
      className="sr-only"
      aria-hidden="true"
    >
      <audio
        ref={audioRef}
        src={src}
        loop={loop}
        preload="auto"
      />
    </div>
  )
}
