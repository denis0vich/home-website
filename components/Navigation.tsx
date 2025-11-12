'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useMemo, useState, useEffect } from 'react'
import TransitionLink from './TransitionLink'

const NAV_ITEMS = [
  { label: 'HOME', href: '/' },
  { label: 'ARTICLES', href: '/stories' },
  { label: 'SECTIONS', href: '/beyond-the-features' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [mousePositions, setMousePositions] = useState<
    Record<string, { x: number; y: number }>
  >({})
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const activeMap = useMemo(() => {
    return NAV_ITEMS.reduce<Record<string, boolean>>((acc, item) => {
      if (item.href === '/') {
        acc[item.href] = pathname === '/'
      } else {
        acc[item.href] = pathname?.startsWith(item.href) ?? false
      }
      return acc
    }, {})
  }, [pathname])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const renderNavItem = (item: typeof NAV_ITEMS[0], isMobile = false) => {
    const active = activeMap[item.href]
    const hovered = hoveredItem === item.href
    const mousePos = mousePositions[item.href] || { x: 0, y: 0 }
    const offsetX = mousePos.x * -0.15
    const offsetY = mousePos.y * -0.15

    const highlightBaseClasses =
      'absolute left-1/2 top-1/2 z-0 h-[calc(100%+0.75rem)] w-[calc(100%-0.75rem)] rounded-full transition-all duration-75 ease-out'
    const highlightStateClasses = active
      ? 'bg-[#909FF0]/85 shadow-[0_8px_24px_rgba(144,159,240,0.35)]'
      : 'bg-gradient-to-r from-white/50 via-white/25 to-white/50'

    return (
      <TransitionLink
        key={item.href}
        href={item.href}
        className={`relative inline-flex items-center justify-center px-3 py-2 font-bella-queta font-bold tracking-[0.15em] text-white transition-colors hover:text-white ${
          isMobile ? 'text-base w-full justify-start' : 'text-lg'
        }`}
        style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
        onClick={() => isMobile && setMobileMenuOpen(false)}
        onMouseEnter={() => !isMobile && setHoveredItem(item.href)}
        onMouseLeave={() => {
          if (!isMobile) {
            setHoveredItem(null)
            setMousePositions((prev) => ({ ...prev, [item.href]: { x: 0, y: 0 } }))
          }
        }}
        onMouseMove={(event) => {
          if (!isMobile) {
            const rect = event.currentTarget.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2
            const x = (event.clientX - centerX) / rect.width
            const y = (event.clientY - centerY) / rect.height
            setMousePositions((prev) => ({ ...prev, [item.href]: { x, y } }))
          }
        }}
      >
        {!isMobile && (active || hovered) && (
          <span
            aria-hidden="true"
            className={`${highlightBaseClasses} ${highlightStateClasses}`}
            style={{
              transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`,
            }}
          />
        )}
        <span className={`relative z-10 inline-flex items-center ${isMobile ? 'px-2 py-1' : 'px-2 py-1'}`}>
          {item.label}
        </span>
      </TransitionLink>
    )
  }

  return (
    <nav className="absolute left-0 right-0 top-0 z-50 px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Image
          src="/pennywise-logo-2-4-2-38.png"
          alt="The Haven Logo"
          width={120}
          height={40}
          priority
          className="h-auto w-auto"
        />
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => renderNavItem(item, false))}
        </div>

        {/* Mobile Burger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative z-50 flex flex-col items-center justify-center w-10 h-10 space-y-1.5 text-white focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#050b22]/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start justify-start pt-24 px-8 space-y-6">
          {NAV_ITEMS.map((item) => renderNavItem(item, true))}
        </div>
      </div>
    </nav>
  )
}

