'use client'

import { useEffect, useState } from 'react'
import ParticleEffect from './ParticleEffect'
import StarfieldEffect from './StarfieldEffect'

interface PageTransitionProps {
  show: boolean
  onComplete: () => void
  direction?: 'towards' | 'from'
  position?: { x: number; y: number }
  useStarfield?: boolean
}

export default function PageTransition({ show, onComplete, direction = 'towards', position, useStarfield = false }: PageTransitionProps) {
  const [phase, setPhase] = useState<'particles' | 'zoom' | 'white' | 'complete'>('particles')

  useEffect(() => {
    if (!show) {
      setPhase('particles')
      return
    }

    // Phase 1: Starfield rushing toward camera (no background, just stars)
    const timer1 = setTimeout(() => {
      setPhase('zoom')
    }, useStarfield ? 1800 : 800)

    // Phase 2: Fade to white (starfield fades out, white overlay fades in)
    const timer2 = setTimeout(() => {
      setPhase('white')
    }, useStarfield ? 2800 : 1200)

    // Phase 3: Complete white, then navigate
    const timer3 = setTimeout(() => {
      setPhase('complete')
      onComplete()
    }, useStarfield ? 3200 : 1800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [show, onComplete])

  if (!show) return null

  const centerX = position?.x ?? (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)
  const centerY = position?.y ?? (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1920
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 1080

  return (
    <>
      {phase === 'particles' && useStarfield && position && (
        <StarfieldEffect 
          show={true} 
          position={position}
          onComplete={() => {
            // Starfield completes, continue to zoom phase
          }}
        />
      )}
      {phase === 'particles' && !useStarfield && (
        <ParticleEffect direction={direction} position={position} />
      )}
      {/* White overlay that fades in smoothly after starfield */}
      <div
        className="fixed inset-0 z-[99] pointer-events-none"
        style={{
          background: phase === 'white' || phase === 'complete' 
            ? 'rgba(255, 255, 255, 1)' 
            : phase === 'zoom' && useStarfield
            ? 'rgba(255, 255, 255, 0.3)' // Start fading during zoom phase
            : 'rgba(255, 255, 255, 0)',
          transition: useStarfield 
            ? 'background 1s ease-out' 
            : 'background 0.4s ease-in-out',
        }}
      />
      
      {/* Zoom overlay that scales the entire viewport - creates the zoom effect */}
      <div
        className="fixed inset-0 z-[98] pointer-events-none"
        style={{
          transform: phase === 'zoom' || phase === 'white' || phase === 'complete'
            ? `scale(0.05)`
            : 'scale(1)',
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          transformOrigin: `${centerX}px ${centerY}px`,
          background: 'transparent',
        }}
      />
    </>
  )
}

