'use client'

import React, { useEffect, useState, useRef } from 'react'

interface FloatingTextEffectProps {
  words: string[]
  intensity?: number // 0-1, controls speed and density
  direction?: 'up' | 'down' | 'left' | 'right' | 'chaotic'
  className?: string
}

const FloatingTextEffect: React.FC<FloatingTextEffectProps> = ({
  words,
  intensity = 0.5,
  direction = 'chaotic',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [elements, setElements] = useState<Array<{
    id: number
    word: string
    x: number
    y: number
    speed: number
    opacity: number
    fontSize: number
  }>>([])
  const elementIdRef = useRef(0)

  useEffect(() => {
    if (!containerRef.current || words.length === 0) return

    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()
    
    // Generate initial floating elements
    const generateElement = () => {
      const word = words[Math.floor(Math.random() * words.length)]
      const speed = (0.2 + Math.random() * 0.8) * (0.5 + intensity * 0.5)
      const opacity = 0.1 + Math.random() * 0.15 // Very subtle
      const fontSize = 12 + Math.random() * 24
      
      let x, y, vx, vy
      
      switch (direction) {
        case 'up':
          x = Math.random() * containerRect.width
          y = containerRect.height + 50
          vx = (Math.random() - 0.5) * 0.2
          vy = -speed
          break
        case 'down':
          x = Math.random() * containerRect.width
          y = -50
          vx = (Math.random() - 0.5) * 0.2
          vy = speed
          break
        case 'left':
          x = containerRect.width + 50
          y = Math.random() * containerRect.height
          vx = -speed
          vy = (Math.random() - 0.5) * 0.2
          break
        case 'right':
          x = -50
          y = Math.random() * containerRect.height
          vx = speed
          vy = (Math.random() - 0.5) * 0.2
          break
        case 'chaotic':
        default:
          x = Math.random() * containerRect.width
          y = Math.random() * containerRect.height
          vx = (Math.random() - 0.5) * speed * 0.5
          vy = (Math.random() - 0.5) * speed * 0.5
          break
      }

      elementIdRef.current += 1
      return {
        id: elementIdRef.current,
        word,
        x,
        y,
        speed,
        opacity,
        fontSize,
        vx,
        vy
      }
    }

    // Initialize with some elements
    const initialElements: any[] = []
    const elementCount = Math.floor(15 + intensity * 25)
    for (let i = 0; i < elementCount; i++) {
      initialElements.push(generateElement())
    }
    setElements(initialElements)

    // Animation loop
    let animationFrame: number
    const animate = () => {
      setElements(prev => {
        return prev.map(el => {
          let newX = el.x + (el as any).vx
          let newY = el.y + (el as any).vy
          
          // Wrap around edges
          if (newX < -100) newX = containerRect.width + 100
          if (newX > containerRect.width + 100) newX = -100
          if (newY < -100) newY = containerRect.height + 100
          if (newY > containerRect.height + 100) newY = -100
          
          return {
            ...el,
            x: newX,
            y: newY
          }
        })
      })
      
      animationFrame = requestAnimationFrame(animate)
    }
    
    animate()

    // Add new elements periodically
    const addInterval = setInterval(() => {
      setElements(prev => {
        if (prev.length < elementCount * 1.5) {
          return [...prev, generateElement()]
        }
        return prev
      })
    }, 2000 / (1 + intensity))

    // Handle resize
    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        containerRect.width = rect.width
        containerRect.height = rect.height
      }
    }
    
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrame)
      clearInterval(addInterval)
      window.removeEventListener('resize', handleResize)
    }
  }, [words, intensity, direction])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
      style={{ mixBlendMode: 'overlay' }}
    >
      {elements.map(el => (
        <div
          key={el.id}
          className="absolute select-none"
          style={{
            left: `${el.x}px`,
            top: `${el.y}px`,
            fontSize: `${el.fontSize}px`,
            opacity: el.opacity,
            color: 'inherit',
            fontWeight: Math.random() > 0.7 ? 600 : 400,
            transform: `rotate(${(Math.random() - 0.5) * 15}deg)`,
            whiteSpace: 'nowrap',
            userSelect: 'none'
          }}
        >
          {el.word}
        </div>
      ))}
    </div>
  )
}

export default FloatingTextEffect

