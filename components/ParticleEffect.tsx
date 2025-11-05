'use client'

import { useEffect, useRef } from 'react'

interface ParticleEffectProps {
  direction: 'towards' | 'from'
  position?: { x: number; y: number }
  onComplete?: () => void
}

export default function ParticleEffect({ direction, position, onComplete }: ParticleEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    const centerX = position?.x ?? window.innerWidth / 2
    const centerY = position?.y ?? window.innerHeight / 2

    // Create particles
    for (let i = 0; i < 100; i++) {
      const angle = (Math.PI * 2 * i) / 100
      const speed = 2 + Math.random() * 3
      
      if (direction === 'towards') {
        // Particles start from edges, move towards center
        const startX = centerX + Math.cos(angle) * (window.innerWidth * 0.8)
        const startY = centerY + Math.sin(angle) * (window.innerHeight * 0.8)
        particles.push({
          x: startX,
          y: startY,
          vx: (centerX - startX) * 0.05,
          vy: (centerY - startY) * 0.05,
          size: 2 + Math.random() * 3,
          opacity: 1
        })
      } else {
        // Particles start from center, move outwards
        particles.push({
          x: centerX,
          y: centerY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 2 + Math.random() * 3,
          opacity: 1
        })
      }
    }

    let animationFrame: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      let activeParticles = 0
      
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        
        if (direction === 'towards') {
          particle.opacity -= 0.02
        } else {
          particle.opacity -= 0.015
        }
        
        if (particle.opacity > 0) {
          activeParticles++
          ctx.save()
          ctx.globalAlpha = particle.opacity
          ctx.fillStyle = '#ffffff'
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }
      })

      if (activeParticles > 0) {
        animationFrame = requestAnimationFrame(animate)
      } else if (onComplete) {
        onComplete()
      }
    }

    animate()

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [direction, position, onComplete])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[100] pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}

