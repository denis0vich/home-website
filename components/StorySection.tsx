'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'
import ParticleEffects from './ParticleEffects'

interface StorySectionProps {
  children: ReactNode
  sectionId: string
  backgroundColor?: string
  particleEffect?: 'sparkles' | 'strobe' | 'none'
  particleColors?: string[]
  particleIntensity?: number
  className?: string
  onEnter?: () => void
  onExit?: () => void
}

export default function StorySection({
  children,
  sectionId,
  backgroundColor = '#ffffff',
  particleEffect = 'none',
  particleColors,
  particleIntensity = 1,
  className = '',
  onEnter,
  onExit
}: StorySectionProps) {
  const [isActive, setIsActive] = useState(false)
  const [backgroundOpacity, setBackgroundOpacity] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const progress = entry.intersectionRatio
        const isIntersecting = entry.isIntersecting
        
        if (isIntersecting && progress > 0.1) {
          setIsActive(true)
          setBackgroundOpacity(Math.min(1, progress * 2))
          if (onEnter && progress > 0.3) {
            onEnter()
          }
        } else {
          setIsActive(false)
          setBackgroundOpacity(0)
          if (onExit) {
            onExit()
          }
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '-100px 0px -100px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [onEnter, onExit])

  return (
    <>
      {/* Background color overlay */}
      <div
        className="fixed inset-0 z-0 transition-opacity duration-1500 ease-out pointer-events-none"
        style={{
          backgroundColor,
          opacity: backgroundOpacity * 0.4,
          mixBlendMode: backgroundColor === '#000000' || backgroundColor === '#1a1a1a' || backgroundColor === '#2c2c2c' || backgroundColor === '#3d0000' || backgroundColor === '#0a1929'
            ? 'normal'
            : 'multiply'
        }}
      />
      
      {/* Particle effects */}
      {isActive && (
        <ParticleEffects
          type={particleEffect}
          colors={particleColors}
          intensity={particleIntensity}
        />
      )}

      {/* Section content */}
      <section
        ref={sectionRef}
        id={sectionId}
        className={`relative z-10 min-h-screen py-20 transition-all duration-1000 ${className}`}
        data-section-id={sectionId}
        style={{
          color: backgroundColor === '#000000' || backgroundColor === '#1a1a1a' || backgroundColor === '#2c2c2c' || backgroundColor === '#3d0000' || backgroundColor === '#0a1929'
            ? '#ffffff'
            : undefined
        }}
      >
        {children}
      </section>
    </>
  )
}

