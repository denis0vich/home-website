'use client'

import { useEffect, useRef, useState, ReactNode, useMemo } from 'react'
import ParticleEffects from './ParticleEffects'
import FloatingTextEffect from './FloatingTextEffect'

interface StorySectionProps {
  children: ReactNode
  sectionId: string
  backgroundColor?: string
  particleEffect?: 'sparkles' | 'strobe' | 'none'
  particleColors?: string[]
  particleIntensity?: number
  floatingText?: string[]
  floatingTextIntensity?: number
  floatingTextDirection?: 'up' | 'down' | 'left' | 'right' | 'chaotic'
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
  floatingText,
  floatingTextIntensity = 0.6,
  floatingTextDirection = 'chaotic',
  className = '',
  onEnter,
  onExit
}: StorySectionProps) {
  const [isActive, setIsActive] = useState(false)
  const [backgroundOpacity, setBackgroundOpacity] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Compute contrast-aware text color based on background luminance
  const textColor = useMemo(() => {
    // Parse hex like #rrggbb
    const hex = backgroundColor.trim()
    const match = /^#?([a-fA-F0-9]{6})$/.exec(hex)
    if (!match) return undefined
    const intVal = parseInt(match[1], 16)
    const r = (intVal >> 16) & 255
    const g = (intVal >> 8) & 255
    const b = intVal & 255
    // Relative luminance
    const srgb = [r, g, b].map(v => {
      const c = v / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })
    const luminance = 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2]
    // Threshold ~0.5 for switching white/black text
    return luminance < 0.5 ? '#ffffff' : '#111111'
  }, [backgroundColor])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const progress = entry.intersectionRatio
        const isIntersecting = entry.isIntersecting
        
        if (isIntersecting && progress > 0.35) {
          setIsActive(true)
          setBackgroundOpacity(Math.min(1, progress * 2))
          if (onEnter && progress > 0.4) {
            onEnter()
          }
        } else {
          if (progress < 0.2 || !isIntersecting) {
            setIsActive(false)
          }
          setBackgroundOpacity(0)
          if (onExit) {
            onExit()
          }
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1.0],
        rootMargin: '-10% 0px -10% 0px'
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
    <section
      ref={sectionRef}
      id={sectionId}
      className={`relative min-h-screen py-32 transition-all duration-1000 overflow-hidden ${className}`}
      data-section-id={sectionId}
      style={{
        color: textColor,
        scrollMarginTop: '12vh'
      }}
    >
      {/* Background color overlay within section bounds */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-1000 ease-out"
        style={{
          zIndex: -3,
          backgroundColor,
          opacity: isActive ? Math.min(0.25, backgroundOpacity * 0.25) : 0,
          mixBlendMode: 'normal'
        }}
      />

      {/* Particle effects anchored to section */}
      {isActive && particleEffect !== 'none' && (
        <ParticleEffects
          type={particleEffect}
          colors={particleColors}
          intensity={particleIntensity}
          className="absolute inset-0"
          style={{ zIndex: -4 }}
        />
      )}

      {/* Floating text effects */}
      {isActive && floatingText && floatingText.length > 0 && (
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ zIndex: -2 }}
        >
          <FloatingTextEffect
            words={floatingText}
            intensity={floatingTextIntensity}
            direction={floatingTextDirection}
          />
        </div>
      )}

      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}

