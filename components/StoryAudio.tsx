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
  volume = 0.5,
  fadeIn = true,
  threshold = 0.25,
  rootMargin = '0px 0px -400px 0px'
}: StoryAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [hasPlayed, setHasPlayed] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-play ambient sounds (when loop is true) or when autoPlay is explicitly set
  const shouldAutoPlay = autoPlay || loop

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger audio immediately when scrolled into view (scroll-based, not time-based)
        if (entry.isIntersecting && !hasPlayed && shouldAutoPlay && audioRef.current) {
          const audio = audioRef.current
          
          // Set volume
          audio.volume = volume
          
          // Fade in if requested
          if (fadeIn) {
            audio.volume = 0
            audio.play().catch(() => {
              // Auto-play might be blocked, that's okay
            })
            
            // Fade in over 2 seconds
            const fadeInterval = setInterval(() => {
              if (audio.volume < volume) {
                audio.volume = Math.min(audio.volume + 0.05, volume)
              } else {
                clearInterval(fadeInterval)
              }
            }, 100)
          } else {
            audio.play().catch(() => {
              // Auto-play might be blocked, that's okay
            })
          }
          
          setHasPlayed(true)
        }
        
        // Stop audio when scrolled out of view (for non-looping sounds)
        if (!entry.isIntersecting && audioRef.current && !loop) {
          audioRef.current.pause()
        }
      },
      { threshold, rootMargin }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
      // Cleanup: stop audio when component unmounts
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [shouldAutoPlay, hasPlayed, loop, volume, fadeIn, threshold, rootMargin])

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

