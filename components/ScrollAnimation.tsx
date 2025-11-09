'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  direction?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'zoomIn' | 'scaleIn'
  duration?: number
  threshold?: number
  rootMargin?: string
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  direction = 'fadeInUp',
  duration = 1500,
  threshold = 0.2,
  rootMargin = '0px 0px -300px 0px'
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Track scroll for truly scroll-progress-based animation
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height
      
      // Calculate scroll progress: 0 = below viewport, 1 = fully past viewport
      // Start calculating when element is 400px before entering viewport
      const triggerStart = viewportHeight + 400
      const triggerEnd = -elementHeight
      
      // Progress from 0 to 1 as element moves through viewport
      const rawProgress = (triggerStart - elementTop) / (triggerStart - triggerEnd)
      const progress = Math.max(0, Math.min(1, rawProgress))
      
      setScrollProgress(progress)
      
      // Trigger animation based on scroll progress, not just intersection
      // Start animating at 15% progress (when element is approaching viewport)
      if (progress > 0.15) {
        setIsVisible(true)
        if (progress > 0.15 && !hasAnimated) {
          setHasAnimated(true)
        }
      } else if (progress < 0.05) {
        // Reset if scrolled back up
        setIsVisible(false)
        setHasAnimated(false)
      }
    }

    // Use requestAnimationFrame for smooth scroll tracking
    let rafId: number
    const rafScroll = () => {
      handleScroll()
      rafId = requestAnimationFrame(rafScroll)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          rafScroll() // Start smooth tracking when in view
        } else {
          if (rafId) cancelAnimationFrame(rafId)
        }
        handleScroll() // Also check immediately
      },
      { 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: '-200px 0px -200px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
      window.addEventListener('scroll', handleScroll, { passive: true })
      window.addEventListener('resize', handleScroll, { passive: true })
      handleScroll() // Initial check
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      if (ref.current) {
        observer.unobserve(ref.current)
      }
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [threshold, rootMargin, hasAnimated])

  const getDurationClass = () => {
    if (duration <= 700) return 'duration-700'
    if (duration <= 800) return 'duration-800'
    if (duration <= 900) return 'duration-900'
    if (duration <= 1000) return 'duration-1000'
    if (duration <= 1200) return 'duration-[1200ms]'
    if (duration <= 1500) return 'duration-[1500ms]'
    if (duration <= 2000) return 'duration-[2000ms]'
    return 'duration-[1500ms]'
  }

  // Calculate animation values based on scroll progress for truly scroll-based animation
  const getAnimationStyle = () => {
    // Use scroll progress to directly control animation (0 to 1)
    const easedProgress = scrollProgress < 0.15 
      ? 0 
      : Math.min(1, Math.pow((scrollProgress - 0.15) / 0.85, 0.6)) // Ease in
    
    const opacity = easedProgress
    const translateY = 24 * (1 - easedProgress)
    const translateX = 24 * (1 - easedProgress)
    const scale = 0.9 + (0.1 * easedProgress)

    switch (direction) {
      case 'fadeIn':
        return { opacity }
      case 'fadeInUp':
        return { opacity, transform: `translateY(${translateY}px)` }
      case 'fadeInDown':
        return { opacity, transform: `translateY(${-translateY}px)` }
      case 'fadeInLeft':
        return { opacity, transform: `translateX(${-translateX}px)` }
      case 'fadeInRight':
        return { opacity, transform: `translateX(${translateX}px)` }
      case 'zoomIn':
        return { opacity, transform: `scale(${0.88 + (0.12 * easedProgress)})` }
      case 'scaleIn':
        return { opacity, transform: `scale(${0.92 + (0.08 * easedProgress)})` }
      default:
        return { opacity, transform: `translateY(${translateY}px)` }
    }
  }

  const animationStyle = getAnimationStyle()

  return (
    <div
      ref={ref}
      className={`will-change-[opacity,transform] ${className}`}
      style={{
        ...animationStyle,
        transition: 'none' // No CSS transitions - pure scroll-based
      }}
    >
      {children}
    </div>
  )
}

