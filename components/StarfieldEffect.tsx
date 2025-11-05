'use client'

import { useEffect, useRef } from 'react'

interface StarfieldEffectProps {
  show: boolean
  position: { x: number; y: number }
  onComplete?: () => void
}

export default function StarfieldEffect({ show, position, onComplete }: StarfieldEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!show) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Starfield particles - they'll zoom toward the camera
    const stars: Array<{
      x: number
      y: number
      z: number // depth (0 = far, 1 = close)
      speed: number
      size: number
    }> = []

    // Create stars positioned around the click point
    // Start with fewer stars, spawn more over time
    const maxStars = 400
    const centerX = position.x
    const centerY = position.y
    let activeStarCount = 0
    const spawnRate = 25 // Stars per second
    let lastSpawnTime = Date.now()

    // Initialize with a few stars to start (build-up effect)
    const initialStars = 30
    for (let i = 0; i < initialStars; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = Math.random() * Math.min(window.innerWidth, window.innerHeight) * 0.5
      
      stars.push({
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        z: 0.5 + Math.random() * 0.5,
        speed: 0.03 + Math.random() * 0.05,
        size: 0.5 + Math.random() * 1.5
      })
      activeStarCount++
    }

    let animationFrame: number
    const startTime = Date.now()
    const duration = 2000 // 2 seconds
    const fadeStart = 0.7 // Start fading at 70% progress

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = elapsed / duration

      if (progress >= 1) {
        if (onComplete) {
          onComplete()
        }
        return
      }

      // NO background - transparent canvas so stars appear over current page
      // Stars stay at full brightness - white overlay handles the fade transition
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Spawn new stars gradually (build-up effect)
      const currentTime = Date.now()
      const timeSinceLastSpawn = currentTime - lastSpawnTime
      const starsToSpawn = Math.floor((timeSinceLastSpawn / 1000) * spawnRate)
      
      if (activeStarCount < maxStars && starsToSpawn > 0) {
        for (let i = 0; i < starsToSpawn && activeStarCount < maxStars; i++) {
          const angle = Math.random() * Math.PI * 2
          const radius = Math.random() * Math.min(window.innerWidth, window.innerHeight) * 0.5
          
          stars.push({
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
            z: 0.5 + Math.random() * 0.5, // Start at random depths (0.5 to 1.0)
            speed: 0.03 + Math.random() * 0.05, // Speed varies
            size: 0.5 + Math.random() * 1.5
          })
          activeStarCount++
        }
        lastSpawnTime = currentTime
      }

      // Update and draw stars
      stars.forEach((star) => {
        // Move star toward camera (z decreases)
        star.z -= star.speed
        
        // If star passes camera, reset it to back
        if (star.z <= 0.1) {
          star.z = 0.5 + Math.random() * 0.5
          // Reset position around center with some randomness
          const angle = Math.random() * Math.PI * 2
          const radius = Math.random() * Math.min(window.innerWidth, window.innerHeight) * 0.5
          star.x = centerX + Math.cos(angle) * radius
          star.y = centerY + Math.sin(angle) * radius
        }

        // Calculate 2D position (perspective projection)
        // Stars closer to camera (lower z) appear larger and move faster
        const scale = 1 / star.z // Further = smaller scale, closer = larger scale
        const x = (star.x - centerX) * scale + centerX
        const y = (star.y - centerY) * scale + centerY
        const size = star.size * scale * 0.5

        // Only draw if on screen
        if (x >= -50 && x <= canvas.width + 50 && y >= -50 && y <= canvas.height + 50) {
          // Draw star with trail effect
          ctx.save()
          
          // Calculate opacity based on distance (closer = brighter)
          // Stars stay at full brightness - white overlay handles fade
          const opacity = Math.min(1, (1 - star.z) * 2)
          ctx.globalAlpha = opacity
          
          // Star color - full white, no fading
          ctx.fillStyle = '#ffffff'
          
          // Draw star
          ctx.beginPath()
          ctx.arc(x, y, Math.max(0.5, size), 0, Math.PI * 2)
          ctx.fill()
          
          // Add motion trail for fast-moving close stars
          if (star.z < 0.3 && star.speed > 0.05) {
            ctx.globalAlpha = opacity * 0.3
            ctx.beginPath()
            ctx.moveTo(x, y)
            // Trail in opposite direction of movement
            const trailLength = size * 3
            ctx.lineTo(x - (x - centerX) * 0.1, y - (y - centerY) * 0.1)
            ctx.lineWidth = size
            ctx.strokeStyle = '#ffffff'
            ctx.stroke()
          }
          
          // Add glow for very close stars
          if (star.z < 0.2) {
            ctx.globalAlpha = (1 - star.z / 0.2) * 0.4
            ctx.fillStyle = '#ffffff'
            ctx.beginPath()
            ctx.arc(x, y, size * 3, 0, Math.PI * 2)
            ctx.fill()
          }
          
          ctx.restore()
        }
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [show, position, onComplete])

  if (!show) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[100] pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}

