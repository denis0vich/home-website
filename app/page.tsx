'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FeaturedStories from '@/components/FeaturedStories'
import BeyondFeaturesPreview from '@/components/BeyondFeaturesPreview'
import Image from 'next/image'
import Link from 'next/link'
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
    <main className="relative min-h-screen overflow-hidden bg-[#050b22]">
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

      {/* Content */}
      <div className="relative z-[3]">
        <Navigation />
        <div className="pointer-events-none flex justify-center py-6">
          <span className="inline-flex items-center overflow-hidden rounded-full">
            <span className="relative flex items-center bg-white/12 px-6 pt-3 pb-1 shadow-[0_12px_35px_rgba(5,11,34,0.35)]">
              <img
                src="/color-paleutte-1-1-34.png"
                alt="Decorative divider with lotus symbol"
                className="h-auto w-full max-w-[520px] opacity-90"
              />
            </span>
          </span>
        </div>
        <Hero />
        
        {/* Brief Introduction */}
        <section className="relative z-20 py-16">
          <div className="relative mx-auto max-w-6xl overflow-hidden border border-white/20 bg-white/10 p-10 shadow-[0_35px_90px_rgba(5,11,34,0.55)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(160%_140%_at_10%_-20%,rgba(137,49,114,0.45),rgba(8,24,73,0))]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(160%_140%_at_90%_-10%,rgba(33,56,133,0.4),rgba(8,24,73,0))]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(236,223,210,0.12)_0%,rgba(8,24,73,0.85)_50%,rgba(137,49,114,0.12)_100%)]" />
            <p className="relative z-10 text-white text-lg md:text-xl font-bella-queta leading-relaxed text-center drop-shadow-[0_10px_30px_rgba(5,11,34,0.55)]">
              The constant noise of the city, financial pressure, and the struggle to define personal identity make the simple act of "going home" feel incredibly complex. Welcome to The Haven, an exploration of how our deepest emotional wells, forged by anxiety, trauma, and aspiration, become the true foundation of our perfect sanctuary. Here, we analyze how mindful design combats sensory overload, how financial clarity engineers inner peace, and how architecture can be a powerful act of self-reclamation. Join us as we move beyond superficial features and floor plans to discover the true, psychological meaning of being home.
            </p>
          </div>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
            style={{
              background:
                'linear-gradient(180deg, rgba(5,11,34,0) 0%, rgba(5,11,34,0.55) 50%, rgba(5,11,34,1) 100%)',
            }}
          />
        </section>

        <div className="relative z-10">
          <div className="bg-[#050b22]">
            <FeaturedStories />
            <BeyondFeaturesPreview />
          </div>
        </div>

        <div className="relative z-10 bg-[#050b22]">
        {/* CTA Section */}
        <section className="relative z-20 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Link
              href="/entertainment"
              className="inline-block px-8 py-4 bg-white rounded-[118px] text-[#BE8CC1] font-bella-queta font-bold text-xl md:text-2xl tracking-[0.04em] leading-[108%] border-2 border-white/50 shadow-lg hover:bg-white/90 transition-colors"
            >
              TAKE OUR QUIZ
            </Link>
            <div>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-[#BE8CC1] rounded-[81px] text-white font-bella-queta font-bold text-xl md:text-2xl tracking-[0.04em] leading-[108%] shadow-lg hover:bg-[#a87bac] transition-colors"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </section>
        </div>
      </div>
    </main>
  )
}
