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

export default function StickyNav() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
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
    // Only show on homepage
    if (pathname !== '/') {
      setIsVisible(false)
      return
    }

    const handleScroll = () => {
      // Show sticky nav when hero section is scrolled past
      const heroSection = document.querySelector('section[data-hero]') || 
                         document.querySelector('.hero-section') ||
                         document.querySelector('main > div:first-of-type')
      
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        setIsVisible(rect.bottom < 100) // Show when hero is 100px above viewport
      } else {
        // Fallback: show after scrolling 600px
        setIsVisible(window.scrollY > 600)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
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

  if (!isVisible) return null

  const renderNavItem = (item: typeof NAV_ITEMS[0], isMobile = false) => {
    const active = activeMap[item.href]

    return (
      <TransitionLink
        key={item.href}
        href={item.href}
        className={`relative inline-flex items-center justify-center px-3 py-2 font-bella-queta font-bold tracking-[0.15em] text-white transition-colors hover:text-white ${
          isMobile ? 'text-base w-full justify-start' : 'text-sm'
        } ${active ? 'text-white' : 'text-white/80'}`}
        onClick={() => isMobile && setMobileMenuOpen(false)}
      >
        <span className="relative z-10">{item.label}</span>
      </TransitionLink>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/10 bg-[#050b22]/95 backdrop-blur-md shadow-lg transition-transform duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <TransitionLink href="/" className="flex items-center">
          <Image
            src="/pennywise-logo-2-4-2-38.png"
            alt="The Haven Logo"
            width={100}
            height={33}
            priority
            className="h-auto w-auto"
          />
        </TransitionLink>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item) => renderNavItem(item, false))}
        </div>

        {/* Mobile Burger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative z-50 flex flex-col items-center justify-center w-8 h-8 space-y-1 text-white focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`border-t border-white/10 bg-[#050b22]/98 backdrop-blur-md transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start justify-start px-6 py-4 space-y-3">
          {NAV_ITEMS.map((item) => renderNavItem(item, true))}
        </div>
      </div>
    </nav>
  )
}

