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
  const [isPlaying, setIsPlaying] = useState(false)
  const hasPlayedRef = useRef<boolean>(false) // Track if non-looping sounds have played
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
    
    if (!audioRef.current) {
      console.log('[StoryAudio] Missing audio ref:', { hasAudioRef: !!audioRef.current })
      return
    }

    const audio = audioRef.current
    let isMounted = true
    
    console.log('[StoryAudio] Setting up audio:', src, { audioEnabled, shouldAutoPlay })

    // Update volume based on scroll position
    const updateVolume = () => {
      if (!isMounted || !audioRef.current) return
      
      // Don't update if paused (unless it's a looping sound that should be playing)
      if (audio.paused && (!loop || !isPlaying)) return

      // Use parent element for position calculation (the visible StorySection)
      const parentElement = audioRef.current.parentElement
      if (!parentElement) return
      
      const rect = parentElement.getBoundingClientRect()
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
        // For looped audio, fade from 80% to full volume
        const minVolume = loop ? volume * 0.8 : 0
        const fadeRange = volume - minVolume
        targetVolume = Math.min(targetVolume, minVolume + (fadeProgress * fadeRange))
        
        if (fadeProgress >= 1) {
          fadeStartTimeRef.current = null
        }
      }
      
      // For looped audio, ensure minimum volume (80% of base volume)
      // This is CRITICAL - looped audio should always be audible
      if (loop) {
        const minVolume = volume * 0.8
        targetVolume = Math.max(targetVolume, minVolume)
        // Force minimum volume immediately if it's too low
        if (audio.volume < minVolume * 0.9) {
          audio.volume = minVolume
          console.log('[StoryAudio] Enforcing minimum volume for loop:', src, { enforcedVolume: minVolume, was: audio.volume })
        }
      }
      
      // Smooth volume transition (but don't reduce looped audio below minimum)
      const currentVolume = audio.volume
      if (loop) {
        const minVolume = volume * 0.8
        targetVolume = Math.max(targetVolume, minVolume)
      }
      
      if (Math.abs(currentVolume - targetVolume) > 0.01) {
        audio.volume = currentVolume + (targetVolume - currentVolume) * 0.1
      } else {
        audio.volume = targetVolume
      }
      
      // Log if volume is suspiciously low
      if (loop && audio.volume < 0.1 && isPlaying) {
        console.error('[StoryAudio] Volume very low for looped audio!', src, { 
          volume: audio.volume, 
          targetVolume, 
          distanceFromCenter,
          minExpected: volume * 0.8
        })
        // Force it back up
        audio.volume = volume * 0.8
      }

      // Pause sounds when far away from viewport
      if (targetVolume < 0.01 && distanceFromCenter > viewportHeight * 1.5) {
        if (!loop) {
          // Non-looping: stop when far away
          audio.pause()
          setIsPlaying(false)
          if (rafIdRef.current) {
            cancelAnimationFrame(rafIdRef.current)
            rafIdRef.current = null
          }
        } else {
          // Looping: pause when far away, but keep ready to resume
          if (!audio.paused) {
            audio.pause()
          }
        }
      } else if (loop && audio.paused && isPlaying && targetVolume > 0.01) {
        // Resume looping audio if it was paused but should be playing
        audio.play().catch(err => console.error('[StoryAudio] Resume failed:', err))
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
            audio.volume = volume * 0.8 // Start at 80% for loops
          } else {
            audio.volume = 0
          }
        } else {
          const parentElement = audioRef.current.parentElement
          if (parentElement) {
            const rect = parentElement.getBoundingClientRect()
            const viewportHeight = window.innerHeight
            const viewportCenter = viewportHeight / 2
            const elementCenter = rect.top + rect.height / 2
            const distanceFromCenter = Math.abs(elementCenter - viewportCenter)
            const calculatedVol = calculateVolume(distanceFromCenter, viewportHeight)
            // For looped audio, ensure minimum volume (80% of base)
            audio.volume = loop ? Math.max(calculatedVol, volume * 0.8) : calculatedVol
          } else {
            // For looped audio without rect, use 80% minimum
            audio.volume = loop ? volume * 0.8 : volume
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

        // Try playing - handle browser quirks where play() resolves but doesn't actually start
        const tryPlay = async () => {
          try {
            // Ensure audio is ready
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
            }
            
            // Wait a moment for audio to actually start progressing
            await new Promise(resolve => setTimeout(resolve, 100))
            
            // Check if it's actually playing now
            if (!audio.paused) {
              console.log('[StoryAudio] Successfully started playing:', src, {
                paused: audio.paused,
                readyState: audio.readyState,
                volume: audio.volume,
                currentTime: audio.currentTime,
                muted: audio.muted,
                src: audio.src,
                duration: audio.duration
              })
              
              // Double-check volume is set correctly
              if (loop && audio.volume < volume * 0.8) {
                audio.volume = volume * 0.8
                console.log('[StoryAudio] Adjusted volume to minimum:', audio.volume)
              }
              
              setIsPlaying(true)
              startVolumeTracking()
              
              // Verify it's still playing after a moment
              setTimeout(() => {
                if (audioRef.current) {
                  const stillPlaying = !audioRef.current.paused && audioRef.current.currentTime > 0
                  console.log('[StoryAudio] Playback verification:', src, {
                    paused: audioRef.current.paused,
                    volume: audioRef.current.volume,
                    currentTime: audioRef.current.currentTime,
                    muted: audioRef.current.muted,
                    stillPlaying
                  })
                  if (!stillPlaying && audioRef.current.paused) {
                    console.error('[StoryAudio] Audio paused unexpectedly, attempting to resume:', src)
                    audioRef.current.play().catch(err => console.error('[StoryAudio] Resume failed:', err))
                  } else if (!stillPlaying) {
                    // Audio says it's playing but currentTime isn't progressing - force restart
                    console.warn('[StoryAudio] Audio not progressing, forcing restart:', src)
                    audioRef.current.currentTime = 0
                    audioRef.current.play().catch(err => console.error('[StoryAudio] Restart failed:', err))
                  }
                }
              }, 500)
            } else {
              throw new Error('Audio play() resolved but audio is still paused')
            }
          } catch (playError: any) {
            // If autoplay is blocked, try muted first then unmute
            if (playError.name === 'NotAllowedError') {
              console.log('[StoryAudio] Autoplay blocked, trying muted first:', src)
              audio.muted = true
              await audio.play()
              // Wait a moment then unmute
              setTimeout(() => {
                if (audioRef.current) {
                  audioRef.current.muted = false
                  console.log('[StoryAudio] Unmuted audio:', src)
                }
              }, 200)
              setIsPlaying(true)
              startVolumeTracking()
            } else {
              console.error('[StoryAudio] Playback failed:', src, playError)
              throw playError
            }
          }
        }
        
        await tryPlay()
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
        console.log('[StoryAudio] Stopping audio:', src)
        audio.pause()
        // Only reset currentTime for looping sounds (non-looping should stay at end)
        if (loop) {
          audio.currentTime = 0
        }
        setIsPlaying(false)
        fadeStartTimeRef.current = null
      }
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
        rafIdRef.current = null
      }
    }

    // Intersection Observer for scroll-based triggering
    // Observe the parent element (the visible StorySection) instead of a hidden container
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

        const isVisible = entry.isIntersecting && entry.intersectionRatio > threshold

        if (isVisible && shouldAutoPlay && audioEnabled) {
          if (!loop && hasPlayedRef.current) {
            // Non-looping sounds: only play once, don't replay
            return
          }
          if (!isPlaying) {
            console.log('[StoryAudio] Triggering playback:', src, { isVisible, shouldAutoPlay, audioEnabled, isPlaying, hasPlayed: hasPlayedRef.current })
            playAudio()
            if (!loop) {
              hasPlayedRef.current = true
            }
          }
        } else if (!isVisible && isPlaying) {
          // Stop audio when section is no longer visible
          if (!loop) {
            // Non-looping sounds: stop immediately when out of view
            console.log('[StoryAudio] Section out of view, stopping non-looping audio:', src)
            stopAudio()
          } else {
            // Looping sounds: stop when completely out of view (intersectionRatio is 0)
            if (entry.intersectionRatio === 0) {
              console.log('[StoryAudio] Section completely out of view, stopping looping audio:', src)
              stopAudio()
            }
          }
        }
      },
      { threshold: threshold, rootMargin: rootMargin }
    )

    // Observe the parent element (the StorySection) instead of a hidden container
    const parentElement = audioRef.current?.parentElement
    if (parentElement) {
      console.log('[StoryAudio] Observing parent element:', src, parentElement)
      observer.observe(parentElement)
    } else {
      console.log('[StoryAudio] No parent element to observe:', src)
    }

    // Handle audio enable/disable events
    const handleAudioEnable = () => {
      console.log('[StoryAudio] Audio enabled event received:', src)
      if (shouldAutoPlay && audioRef.current) {
        const parentElement = audioRef.current.parentElement
        if (!parentElement) return
        
        const rect = parentElement.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const viewportWidth = window.innerWidth
        const isInView = rect.top < viewportHeight && rect.bottom > 0 && rect.left < viewportWidth && rect.right > 0
        
        console.log('[StoryAudio] Audio enable check:', src, { isInView, isPlaying, rect: { top: rect.top, bottom: rect.bottom } })
        
        if (isInView && !isPlaying) {
          const visibleTop = Math.max(rect.top, 0)
          const visibleBottom = Math.min(rect.bottom, viewportHeight)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          const intersectionRatio = rect.height > 0 ? visibleHeight / rect.height : 0
          
          console.log('[StoryAudio] Audio enable intersection:', src, { intersectionRatio, threshold })
          
          if (intersectionRatio > threshold) {
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
      if (!audioRef.current) {
        console.log('[StoryAudio] No audio ref for initial check:', src)
        return
      }
      
      const parentElement = audioRef.current.parentElement
      if (!parentElement) {
        console.log('[StoryAudio] No parent element for initial check:', src)
        return
      }
      
      const rect = parentElement.getBoundingClientRect()
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
        
        console.log('[StoryAudio] Calculated intersection ratio:', src, { intersectionRatio, threshold })
        
        if (intersectionRatio > threshold) {
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
            const parentElement = audioRef.current?.parentElement
            if (parentElement) {
              observer.unobserve(parentElement)
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
    <audio
      ref={audioRef}
      src={src}
      loop={loop}
      preload="auto"
      crossOrigin="anonymous"
      className="hidden"
      style={{ display: 'none' }}
    />
  )
}
