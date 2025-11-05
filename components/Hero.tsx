'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Decorative lines on the right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col space-y-4">
          <Image
            src="/line-25-32.svg"
            alt=""
            width={100}
            height={200}
            className="opacity-30"
            unoptimized
          />
          <Image
            src="/line-26-33.svg"
            alt=""
            width={100}
            height={200}
            className="opacity-20"
            unoptimized
          />
        </div>
      </div>

      {/* Main Content - moves slightly */}
      <div 
        className="relative z-20 text-center px-6 max-w-5xl mx-auto pt-20"
        style={{
          transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl lg:text-[140px] font-bella-queta font-normal text-white leading-[108%] tracking-[0.04em] mb-6 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}>
          Where Dreams Meet Home
        </h1>

        {/* Subtitle */}
        <p className="text-white text-xl md:text-2xl font-bella-queta font-normal leading-relaxed max-w-4xl mx-auto mb-10 drop-shadow-2xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.3)' }}>
          Discover inspiring stories of real homes, expert insights, and practical wisdom for creating your perfect living.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/stories"
            className="px-8 py-4 bg-[#BE8CC1] rounded-[81px] text-white font-bella-queta font-bold text-xl md:text-2xl tracking-[0.04em] leading-[108%] shadow-lg hover:bg-[#a87bac] transition-colors"
          >
            EXPLORE STORIES
          </Link>
          <Link
            href="/entertainment"
            className="px-8 py-4 bg-white rounded-[118px] text-[#BE8CC1] font-bella-queta font-bold text-xl md:text-2xl tracking-[0.04em] leading-[108%] border-2 border-white/50 shadow-lg hover:bg-white/90 transition-colors"
          >
            TAKE OUR QUIZ
          </Link>
        </div>
      </div>
    </section>
  )
}
