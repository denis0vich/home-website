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

  // Check if we're on an individual story page (blair, elijah, lala)
  const isStoryPage = useMemo(() => {
    return pathname?.match(/^\/stories\/(blair|elijah|lala)$/) !== null
  }, [pathname])

  useEffect(() => {
    // Don't show on individual story pages
    if (isStoryPage) {
      setIsVisible(false)
      return
    }

    const checkMainNavVisibility = () => {
      const mainNav = document.querySelector('nav[data-main-nav]')
      
      if (!mainNav) {
        // If main nav doesn't exist, show sticky nav
        setIsVisible(true)
        return
      }

      const navRect = mainNav.getBoundingClientRect()
      // Check if main nav is visible in viewport (with some threshold)
      const isMainNavVisible = navRect.bottom > 0 && navRect.top < window.innerHeight
      
      // Show sticky nav only when main nav is scrolled out of view
      setIsVisible(!isMainNavVisible)
    }

    // Check on mount and scroll
    checkMainNavVisibility()
    window.addEventListener('scroll', checkMainNavVisibility, { passive: true })
    window.addEventListener('resize', checkMainNavVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', checkMainNavVisibility)
      window.removeEventListener('resize', checkMainNavVisibility)
    }
  }, [pathname, isStoryPage])

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

    return (
      <TransitionLink
        key={item.href}
        href={item.href}
        className={`relative inline-flex items-center justify-center px-2 py-1 font-bella-queta font-bold tracking-[0.15em] text-white transition-colors hover:text-white ${
          isMobile ? 'text-[11px] w-full justify-start py-1.5 px-2.5' : 'text-xs'
        } ${active ? 'text-white' : 'text-white/80'}`}
        onClick={() => isMobile && setMobileMenuOpen(false)}
      >
        <span className="relative z-10">{item.label}</span>
      </TransitionLink>
    )
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] border-b border-white/10 bg-[#050b22]/95 backdrop-blur-md shadow-lg transition-all duration-500 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2.5 md:px-4 py-1 md:py-2 min-h-[44px] md:min-h-0">
        <TransitionLink href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/pennywise-logo-2-4-2-38.png"
            alt="The Haven Logo"
            width={80}
            height={26}
            priority
            className="h-5 w-auto md:h-auto md:scale-100 origin-left"
          />
        </TransitionLink>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {NAV_ITEMS.map((item) => renderNavItem(item, false))}
        </div>

        {/* Mobile Burger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative z-50 flex flex-col items-center justify-center w-7 h-7 flex-shrink-0 text-white focus:outline-none touch-manipulation"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-1' : ''
            }`}
          />
          <span
            className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`border-t border-white/10 bg-[#050b22]/98 backdrop-blur-md transition-all duration-300 md:hidden overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-start justify-start px-3 py-1.5 space-y-0.5">
          {NAV_ITEMS.map((item) => renderNavItem(item, true))}
        </div>
      </div>
    </nav>
  )
}

