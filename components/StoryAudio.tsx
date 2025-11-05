'use client'

import { useEffect, useRef, useState } from 'react'
import ScrollAnimation from './ScrollAnimation'

interface StoryAudioProps {
  src: string
  delay?: number
  autoPlay?: boolean
  loop?: boolean
}

export default function StoryAudio({ src, delay = 0, autoPlay = false, loop = false }: StoryAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          if (autoPlay && audioRef.current) {
            audioRef.current.play().catch(() => {
              // Auto-play might be blocked, that's okay
            })
          }
        }
      },
      { threshold: 0.3 }
    )

    if (audioRef.current) {
      observer.observe(audioRef.current.parentElement || document.body)
    }

    return () => {
      if (audioRef.current) {
        observer.unobserve(audioRef.current.parentElement || document.body)
      }
    }
  }, [autoPlay, isVisible])

  return (
    <ScrollAnimation delay={delay}>
      <audio
        ref={audioRef}
        src={src}
        loop={loop}
        className="hidden"
        preload="auto"
      />
    </ScrollAnimation>
  )
}

