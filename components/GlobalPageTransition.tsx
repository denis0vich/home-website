'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function GlobalPageTransition() {
  const pathname = usePathname()
  const prevPathRef = useRef<string | null>(null)
  const timeoutRef = useRef<number | null>(null)
  const pendingNavigateRef = useRef<(() => void) | null>(null)
  const navigateExecutedRef = useRef(false)
  const skipNextPathTransitionRef = useRef(false)

  const [isVisible, setIsVisible] = useState(false)

  const startAnimation = (navigate?: () => void, markManual = false) => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current)
    }
    
    setIsVisible(true)
    pendingNavigateRef.current = navigate ?? null
    navigateExecutedRef.current = false
    
    if (markManual) {
      skipNextPathTransitionRef.current = true
    }

    // Execute navigation halfway through fade
    if (navigate && !navigateExecutedRef.current) {
      navigateExecutedRef.current = true
      navigate()
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsVisible(false)
      pendingNavigateRef.current = null
    }, 300)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (prevPathRef.current === null) {
      prevPathRef.current = pathname
      return
    }

    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname
      if (skipNextPathTransitionRef.current) {
        skipNextPathTransitionRef.current = false
        return
      }
      startAnimation()
    }
  }, [pathname])

  useEffect(() => {
    const handleGlobalTransition = (event: Event) => {
      const detail = (event as CustomEvent<{ navigate?: () => void }>).detail
      const navigate = detail?.navigate
      startAnimation(navigate, !!navigate)
    }

    window.addEventListener('global-page-transition', handleGlobalTransition as EventListener)

    return () => {
      window.removeEventListener(
        'global-page-transition',
        handleGlobalTransition as EventListener
      )
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 z-[70] pointer-events-none bg-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 300ms ease-in-out',
      }}
    />
  )
}
