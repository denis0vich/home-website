'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'zoomIn'
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'fadeInUp' 
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'fadeIn':
          return 'opacity-0'
        case 'fadeInUp':
          return 'opacity-0 translate-y-8'
        case 'fadeInDown':
          return 'opacity-0 -translate-y-8'
        case 'zoomIn':
          return 'opacity-0 scale-95'
        default:
          return 'opacity-0 translate-y-8'
      }
    }
    
    switch (direction) {
      case 'fadeIn':
        return 'opacity-100'
      case 'fadeInUp':
        return 'opacity-100 translate-y-0'
      case 'fadeInDown':
        return 'opacity-100 translate-y-0'
      case 'zoomIn':
        return 'opacity-100 scale-100'
      default:
        return 'opacity-100 translate-y-0'
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  )
}

