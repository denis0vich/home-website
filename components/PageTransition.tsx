'use client'

import { useEffect, useState } from 'react'

interface PageTransitionProps {
  show: boolean
  onComplete: () => void
  direction?: 'towards' | 'from'
  position?: { x: number; y: number }
  useStarfield?: boolean
}

export default function PageTransition({
  show,
  onComplete,
  direction = 'towards',
  position,
  useStarfield = false,
}: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!show) {
      setIsVisible(false)
      return
    }

    setIsVisible(true)
    const timer = setTimeout(() => {
      onComplete()
      setIsVisible(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [show, onComplete])

  if (!show) return null

  return (
    <div
      className="fixed inset-0 z-[99] pointer-events-none bg-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 300ms ease-in-out',
      }}
    />
  )
}
