'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2 // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2 // -1 to 1
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Base background - house illustration - moves slowest */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          transform: `translate(${mousePosition.x * -3}px, ${mousePosition.y * -3}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <Image
          src="/image-1-2.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
          unoptimized
        />
      </div>

      {/* Gradient overlay on top of background - blended - moves medium */}
      <div 
        className="fixed inset-0 z-[1] mix-blend-soft-light" 
        style={{
          background: 'linear-gradient(to bottom, rgba(240, 230, 250, 0.6), rgba(255, 220, 240, 0.55), rgba(230, 200, 250, 0.6))',
          transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        {/* Gradient overlay */}
      </div>

      {/* Paper flap - subtle top right corner - moves faster */}
      <div 
        className="fixed top-0 right-0 z-[3] pointer-events-none w-[150px] h-[200px] overflow-hidden opacity-60"
        style={{
          transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <Image
          src="/color-paleutte-1-37.png"
          alt="Paper flap overlay"
          fill
          className="object-cover object-top object-right mix-blend-soft-light"
          priority
          unoptimized
        />
      </div>

      {/* Divider - Decorative line with lotus symbol below navigation */}
      <div className="fixed top-[80px] left-0 right-0 z-[10] pointer-events-none flex justify-center">
        <div className="w-full max-w-2xl h-auto relative">
          <img 
            src="/color-paleutte-1-1-34.png" 
            alt="Decorative divider with lotus symbol" 
            className="w-full h-auto object-contain max-w-[600px] mx-auto"
            style={{ display: 'block', width: '60%' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-[3]">
        <Navigation />
        <Hero />
      </div>
    </main>
  )
}
