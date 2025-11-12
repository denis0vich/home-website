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
    console.log('[StoryAudio] Component mounted/updated:', src, { audioEnabled, shouldAutoPlay, isPlaying })
    
    if (!audioRef.current || !containerRef.current) {
      console.log('[StoryAudio] Missing refs:', { hasAudioRef: !!audioRef.current, hasContainerRef: !!containerRef.current })
      return
    }

    const audio = audioRef.current
    let isMounted = true
    
    console.log('[StoryAudio] Setting up audio:', src, { audioEnabled, shouldAutoPlay })

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
        // For looped audio, fade from 60% to full volume
        const minVolume = loop ? volume * 0.6 : 0
        const fadeRange = volume - minVolume
        targetVolume = Math.min(targetVolume, minVolume + (fadeProgress * fadeRange))
        
        if (fadeProgress >= 1) {
          fadeStartTimeRef.current = null
        }
      }
      
      // For looped audio, ensure minimum volume (60% of base volume)
      if (loop) {
        targetVolume = Math.max(targetVolume, volume * 0.6)
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
      if (!audioRef.current) {
        console.log('[StoryAudio] No audio ref:', src)
        return
      }
      if (!audioEnabled) {
        console.log('[StoryAudio] Audio not enabled:', src)
        return
      }
      if (isPlaying) {
        console.log('[StoryAudio] Already playing:', src)
        return
      }

      console.log('[StoryAudio] Attempting to play:', src)
      try {
        if (fadeIn) {
          fadeStartTimeRef.current = Date.now()
          // For looped audio, start with a minimum volume, then fade in
          if (loop) {
            audio.volume = volume * 0.6 // Start at 60% for loops
          } else {
            audio.volume = 0
          }
        } else {
          const rect = containerRef.current?.getBoundingClientRect()
          if (rect) {
            const viewportHeight = window.innerHeight
            const viewportCenter = viewportHeight / 2
            const elementCenter = rect.top + rect.height / 2
            const distanceFromCenter = Math.abs(elementCenter - viewportCenter)
            const calculatedVol = calculateVolume(distanceFromCenter, viewportHeight)
            // For looped audio, ensure minimum volume
            audio.volume = loop ? Math.max(calculatedVol, volume * 0.6) : calculatedVol
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

        const playPromise = audio.play()
        if (playPromise !== undefined) {
          await playPromise
          console.log('[StoryAudio] Successfully started playing:', src, {
            paused: audio.paused,
            readyState: audio.readyState,
            volume: audio.volume,
            currentTime: audio.currentTime
          })
          setIsPlaying(true)
          startVolumeTracking()
        }
      } catch (err: any) {
        console.error('[StoryAudio] Playback failed:', src, err, {
          name: err?.name,
          message: err?.message,
          audioState: {
            paused: audio.paused,
            readyState: audio.readyState,
            src: audio.src,
            networkState: audio.networkState
          }
        })
        // Try again after a short delay with user interaction simulation
        setTimeout(() => {
          if (audioRef.current && !isPlaying) {
            console.log('[StoryAudio] Retrying playback:', src)
            audioRef.current.play()
              .then(() => {
                console.log('[StoryAudio] Retry successful:', src)
                setIsPlaying(true)
                startVolumeTracking()
              })
              .catch(e => {
                console.error('[StoryAudio] Retry failed:', src, e)
                // Last resort: try with muted first (browsers allow this)
                if (audioRef.current) {
                  audioRef.current.muted = true
                  audioRef.current.play()
                    .then(() => {
                      console.log('[StoryAudio] Muted playback successful, unmuting:', src)
                      audioRef.current!.muted = false
                      setIsPlaying(true)
                      startVolumeTracking()
                    })
                    .catch(e2 => console.error('[StoryAudio] Muted playback also failed:', src, e2))
                }
              })
          }
        }, 500)
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

        console.log('[StoryAudio] IntersectionObserver fired:', src, {
          isIntersecting: entry.isIntersecting,
          intersectionRatio: entry.intersectionRatio,
          threshold,
          shouldAutoPlay,
          audioEnabled,
          isPlaying
        })

        const isVisible = entry.isIntersecting && entry.intersectionRatio > Math.min(threshold, 0.05)

        if (isVisible && shouldAutoPlay && audioEnabled && !isPlaying) {
          console.log('[StoryAudio] Triggering playback:', src, { isVisible, shouldAutoPlay, audioEnabled, isPlaying })
          playAudio()
        } else if (!entry.isIntersecting && !loop && isPlaying) {
          // Let volume fade naturally, don't stop immediately
        }
      },
      { threshold: [0, 0.05, 0.1, 0.2, 0.5, 1.0], rootMargin: '0px 0px 0px 0px' }
    )

    if (containerRef.current) {
      console.log('[StoryAudio] Observing container:', src, containerRef.current)
      observer.observe(containerRef.current)
    } else {
      console.log('[StoryAudio] No container to observe:', src)
    }

    // Handle audio enable/disable events
    const handleAudioEnable = () => {
      console.log('[StoryAudio] Audio enabled event received:', src)
      if (shouldAutoPlay && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const viewportWidth = window.innerWidth
        const isInView = rect.top < viewportHeight && rect.bottom > 0 && rect.left < viewportWidth && rect.right > 0
        
        console.log('[StoryAudio] Audio enable check:', src, { isInView, isPlaying, rect: { top: rect.top, bottom: rect.bottom } })
        
        if (isInView && !isPlaying) {
          const visibleTop = Math.max(rect.top, 0)
          const visibleBottom = Math.min(rect.bottom, viewportHeight)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          const intersectionRatio = rect.height > 0 ? visibleHeight / rect.height : 0
          
          console.log('[StoryAudio] Audio enable intersection:', src, { intersectionRatio, threshold: Math.min(threshold, 0.05) })
          
          if (intersectionRatio > Math.min(threshold, 0.05)) {
            console.log('[StoryAudio] Audio enable passed, playing:', src)
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
    const checkInitialVisibility = () => {
      if (!containerRef.current) {
        console.log('[StoryAudio] No container for initial check:', src)
        return
      }
      
      const rect = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const viewportWidth = window.innerWidth
      const isInView = rect.top < viewportHeight && rect.bottom > 0 && rect.left < viewportWidth && rect.right > 0
      
      console.log('[StoryAudio] Initial visibility check:', src, {
        rect: { top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right, width: rect.width, height: rect.height },
        viewport: { height: viewportHeight, width: viewportWidth },
        isInView,
        audioEnabled,
        shouldAutoPlay
      })
      
      if (isInView && audioEnabled && shouldAutoPlay) {
        const visibleTop = Math.max(rect.top, 0)
        const visibleBottom = Math.min(rect.bottom, viewportHeight)
        const visibleHeight = Math.max(0, visibleBottom - visibleTop)
        const intersectionRatio = rect.height > 0 ? visibleHeight / rect.height : 0
        
        console.log('[StoryAudio] Calculated intersection ratio:', src, { intersectionRatio, threshold: Math.min(threshold, 0.05) })
        
        if (intersectionRatio > Math.min(threshold, 0.05)) {
          console.log('[StoryAudio] Initial visibility passed, playing:', src)
          setTimeout(() => playAudio(), 100)
        }
      }
    }
    
    // Check after a delay to ensure everything is mounted
    setTimeout(checkInitialVisibility, 500)
    // Also check when audio is enabled
    if (audioEnabled) {
      setTimeout(checkInitialVisibility, 1000)
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
      style={{ 
        position: 'relative',
        width: '100%',
        height: '100px',
        pointerEvents: 'none',
        visibility: 'hidden',
        overflow: 'hidden'
      }}
    >
      <audio
        ref={audioRef}
        src={src}
        loop={loop}
        preload="auto"
        crossOrigin="anonymous"
      />
    </div>
  )
}
