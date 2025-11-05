'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import PageTransition from './PageTransition'

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [mousePositions, setMousePositions] = useState<{ [key: string]: { x: number; y: number } }>({})
  const [transitioning, setTransitioning] = useState(false)

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ARTICLES', href: '/stories' },
    { label: 'SECTIONS', href: '/beyond-the-features' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'ABOUT', href: '/about' },
    { label: 'CONTACT', href: '/contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(href)
  }

  const handleStoriesClick = (e: React.MouseEvent) => {
    if (pathname === '/stories') return
    
    e.preventDefault()
    setTransitioning(true)
  }

  const handleTransitionComplete = () => {
    router.push('/stories')
    setTransitioning(false)
  }

  return (
    <>
      <PageTransition
        show={transitioning}
        onComplete={handleTransitionComplete}
        direction="towards"
      />
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image
            src="/pennywise-logo-2-4-2-38.png"
            alt="The Haven Logo"
            width={120}
            height={40}
            className="h-auto"
          />
        </div>
        
        <div className="flex items-center space-x-8">
          {navItems.map((item) => {
            const active = isActive(item.href)
            const hovered = hoveredItem === item.href
            
            const mousePos = mousePositions[item.href] || { x: 0, y: 0 }
            const offsetX = mousePos.x * -0.15 // Inverse parallax - moves opposite direction
            const offsetY = mousePos.y * -0.15
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-white font-bella-queta font-bold text-lg tracking-[0.15em] transition-colors hover:text-white px-4 py-2"
                style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
                onClick={item.href === '/stories' ? handleStoriesClick : undefined}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => {
                  setHoveredItem(null)
                  setMousePositions(prev => ({ ...prev, [item.href]: { x: 0, y: 0 } }))
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const centerX = rect.left + rect.width / 2
                  const centerY = rect.top + rect.height / 2
                  const x = (e.clientX - centerX) / rect.width
                  const y = (e.clientY - centerY) / rect.height
                  setMousePositions(prev => ({ ...prev, [item.href]: { x, y } }))
                }}
              >
                {(active || hovered) && (
                  <div 
                    className="absolute left-1/2 top-1/2 z-0 transition-transform duration-75 ease-out"
                    style={{
                      transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`
                    }}
                  >
                    <Image
                      src="/line-22-15.svg"
                      alt="Indicator"
                      width={350}
                      height={60}
                      className="h-auto w-auto"
                      unoptimized
                    />
                  </div>
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
    </>
  )
}
