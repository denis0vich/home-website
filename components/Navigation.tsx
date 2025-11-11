'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'
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

  return (
    <nav className="absolute left-0 right-0 top-0 z-50 px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Image
          src="/pennywise-logo-2-4-2-38.png"
          alt="The Haven Logo"
          width={120}
          height={40}
          className="h-auto"
        />
        <div className="flex items-center space-x-8">
          {NAV_ITEMS.map((item) => {
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
                className="relative inline-flex items-center justify-center px-3 py-2 font-bella-queta text-lg font-bold tracking-[0.15em] text-white transition-colors hover:text-white"
                style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => {
                  setHoveredItem(null)
                  setMousePositions((prev) => ({ ...prev, [item.href]: { x: 0, y: 0 } }))
                }}
                onMouseMove={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect()
                  const centerX = rect.left + rect.width / 2
                  const centerY = rect.top + rect.height / 2
                  const x = (event.clientX - centerX) / rect.width
                  const y = (event.clientY - centerY) / rect.height
                  setMousePositions((prev) => ({ ...prev, [item.href]: { x, y } }))
                }}
              >
                {(active || hovered) && (
                  <span
                    aria-hidden="true"
                    className={`${highlightBaseClasses} ${highlightStateClasses}`}
                    style={{
                      transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`,
                    }}
                  />
                )}
                <span className="relative z-10 inline-flex items-center justify-center px-2 py-1">
                  {item.label}
                </span>
              </TransitionLink>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

