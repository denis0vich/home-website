'use client'

import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'

interface ParticleEffectsProps {
  type: 'sparkles' | 'strobe' | 'none'
  intensity?: number
  colors?: string[]
  className?: string
  style?: CSSProperties
}

export default function ParticleEffects({ 
  type, 
  intensity = 1, 
  colors = ['#ffffff', '#ffd700', '#ff6b6b'],
  className = '',
  style
}: ParticleEffectsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    if (type === 'none' || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.style.position = 'absolute'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width || window.innerWidth
      canvas.height = rect.height || window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    if (type === 'sparkles') {
      // Twinkling sparkles effect
      const sparkles: Array<{
        x: number
        y: number
        size: number
        opacity: number
        speed: number
        color: string
        twinkle: number
      }> = []

      // Create sparkles
      for (let i = 0; i < 30 * intensity; i++) {
        sparkles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          opacity: Math.random(),
          speed: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          twinkle: Math.random() * Math.PI * 2
        })
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        sparkles.forEach(sparkle => {
          sparkle.twinkle += 0.05
          sparkle.opacity = (Math.sin(sparkle.twinkle) + 1) / 2
          sparkle.y -= sparkle.speed
          
          if (sparkle.y < 0) {
            sparkle.y = canvas.height
            sparkle.x = Math.random() * canvas.width
          }

          ctx.save()
          ctx.globalAlpha = sparkle.opacity * 0.8
          ctx.fillStyle = sparkle.color
          ctx.beginPath()
          ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2)
          ctx.fill()
          
          // Add glow effect
          ctx.shadowBlur = 10
          ctx.shadowColor = sparkle.color
          ctx.fill()
          ctx.restore()
        })

        animationFrameRef.current = requestAnimationFrame(animate)
      }

      animate()
    } else if (type === 'strobe') {
      // Strobing color effect for intense scenes
      let strobePhase = 0
      const strobeColors = colors.length > 0 ? colors : ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff6b9d']
      
      const animate = () => {
        strobePhase += 0.1 * intensity
        
        const colorIndex = Math.floor(strobePhase) % strobeColors.length
        const alpha = (Math.sin(strobePhase) + 1) / 2 * 0.15
        
        ctx.fillStyle = strobeColors[colorIndex]
        ctx.globalAlpha = alpha
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        
        animationFrameRef.current = requestAnimationFrame(animate)
      }

      animate()
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [type, intensity, colors])

  if (type === 'none') return null

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{ mixBlendMode: 'screen', ...style }}
    />
  )
}

