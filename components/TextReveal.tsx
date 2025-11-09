'use client'

import { useEffect, useRef, useState } from 'react'

interface TextRevealProps {
  children: string
  className?: string
  revealType?: 'word' | 'letter' | 'line'
  delay?: number
  duration?: number
  threshold?: number
  rootMargin?: string
}

export default function TextReveal({ 
  children, 
  className = '',
  revealType = 'word',
  delay = 0,
  duration = 50,
  threshold = 0.2,
  rootMargin = '0px 0px -200px 0px'
}: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [revealedText, setRevealedText] = useState('')
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { 
        threshold,
        rootMargin
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin, isVisible])

  useEffect(() => {
    if (!isVisible) {
      setRevealedText('')
      return
    }

    let intervalId: NodeJS.Timeout | null = null
    let timeoutId: NodeJS.Timeout | null = null

    if (revealType === 'word') {
      const words = children.split(' ')
      let currentIndex = 0

      timeoutId = setTimeout(() => {
        intervalId = setInterval(() => {
          if (currentIndex < words.length) {
            setRevealedText(words.slice(0, currentIndex + 1).join(' '))
            currentIndex++
          } else {
            if (intervalId) clearInterval(intervalId)
          }
        }, duration)
      }, delay)
    } else if (revealType === 'letter') {
      let currentIndex = 0

      timeoutId = setTimeout(() => {
        intervalId = setInterval(() => {
          if (currentIndex < children.length) {
            setRevealedText(children.slice(0, currentIndex + 1))
            currentIndex++
          } else {
            if (intervalId) clearInterval(intervalId)
          }
        }, duration)
      }, delay)
    } else {
      // line by line - show immediately
      setRevealedText(children)
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [isVisible, children, revealType, delay, duration])

  return (
    <span 
      ref={ref} 
      className={`inline-block ${className}`}
      style={{ minHeight: '1.2em' }}
    >
      {revealedText}
      {!isVisible && <span className="opacity-0">{children}</span>}
      {isVisible && revealType !== 'line' && revealedText !== children && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}

