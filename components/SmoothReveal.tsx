'use client'

import { useEffect, useRef, useState } from 'react'

interface SmoothRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  speed?: 'slow' | 'normal' | 'fast'
  stagger?: number
}

export default function SmoothReveal({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  speed = 'normal',
  stagger = 0
}: SmoothRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const speedMap = {
    slow: 'duration-[1500ms]',
    normal: 'duration-[1000ms]',
    fast: 'duration-[600ms]'
  }

  const directionMap = {
    up: { initial: 'translate-y-16', final: 'translate-y-0' },
    down: { initial: '-translate-y-16', final: 'translate-y-0' },
    left: { initial: '-translate-x-16', final: 'translate-x-0' },
    right: { initial: 'translate-x-16', final: 'translate-x-0' },
    fade: { initial: '', final: '' }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay + stagger)
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
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
  }, [delay, stagger])

  const dir = directionMap[direction]

  return (
    <div
      ref={ref}
      className={`
        transition-all ${speedMap[speed]} 
        ease-[cubic-bezier(0.16,1,0.3,1)]
        will-change-transform
        ${isVisible 
          ? `opacity-100 ${dir.final}` 
          : `opacity-0 ${dir.initial}`
        }
        ${className}
      `}
    >
      {children}
    </div>
  )
}

