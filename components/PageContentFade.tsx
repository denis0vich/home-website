'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

type Phase = 'init' | 'in' | 'out'

export default function PageContentFade({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [phase, setPhase] = useState<Phase>('init')
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const handleTransition = () => {
      setPhase('out')
    }

    window.addEventListener('global-page-transition', handleTransition as EventListener)
    return () => {
      window.removeEventListener('global-page-transition', handleTransition as EventListener)
    }
  }, [])

  useEffect(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current)
    }
    frameRef.current = requestAnimationFrame(() => {
      setPhase('in')
      frameRef.current = null
    })

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }
  }, [pathname])

  const dataPhase = phase === 'out' ? 'out' : 'in'

  return (
    <div className="page-fade-shell" data-phase={dataPhase}>
      <div className="page-fade-inner">{children}</div>
    </div>
  )
}


