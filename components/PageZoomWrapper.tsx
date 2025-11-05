'use client'

import { useEffect, useState } from 'react'

interface PageZoomWrapperProps {
  children: React.ReactNode
  zoomScale: number
  zoomOrigin: { x: number; y: number } | null
}

export default function PageZoomWrapper({ children, zoomScale, zoomOrigin }: PageZoomWrapperProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  const centerX = zoomOrigin?.x ?? (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)
  const centerY = zoomOrigin?.y ?? (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)

  return (
    <div
      style={{
        transform: zoomScale !== 1 
          ? `scale(${zoomScale}) translate(${(centerX - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * (1 - zoomScale)}px, ${(centerY - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * (1 - zoomScale)}px)`
          : 'none',
        transformOrigin: `${centerX}px ${centerY}px`,
        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  )
}

