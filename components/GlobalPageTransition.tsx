'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import ParticleEffects from './ParticleEffects'

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value))
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
const easeInCubic = (t: number) => t * t * t
const easeInOutQuart = (t: number) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2
const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5)

export default function GlobalPageTransition() {
  const pathname = usePathname()
  const prevPathRef = useRef<string | null>(null)
  const rafRef = useRef<number | null>(null)
  const timeoutRef = useRef<number | null>(null)
  const animationStartRef = useRef<number | null>(null)
  const pendingNavigateRef = useRef<(() => void) | null>(null)
  const navigateExecutedRef = useRef(false)
  const skipNextPathTransitionRef = useRef(false)

  const [isActive, setIsActive] = useState(false)
  const [progress, setProgress] = useState(0)

  const cancelAnimation = () => {
    if (rafRef.current !== null) {
      window.cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    pendingNavigateRef.current = null
    navigateExecutedRef.current = false
  }

  const step = (timestamp: number) => {
    const duration = 1850
    if (animationStartRef.current === null) {
      animationStartRef.current = timestamp
    }
    const elapsed = timestamp - animationStartRef.current
    const t = Math.min(1, elapsed / duration)
    setProgress(t)

    if (pendingNavigateRef.current && !navigateExecutedRef.current && t >= 0.38) {
      navigateExecutedRef.current = true
      const navigate = pendingNavigateRef.current
      pendingNavigateRef.current = null
      navigate?.()
    }

    if (t < 1) {
      rafRef.current = window.requestAnimationFrame(step)
    } else {
      rafRef.current = null
      timeoutRef.current = window.setTimeout(() => {
        setIsActive(false)
      }, 150)
    }
  }

  const startAnimation = (navigate?: () => void, markManual = false) => {
    cancelAnimation()
    animationStartRef.current = null
    setProgress(0)
    setIsActive(true)
    pendingNavigateRef.current = navigate ?? null
    navigateExecutedRef.current = false
    if (markManual) {
      skipNextPathTransitionRef.current = true
    }
    rafRef.current = window.requestAnimationFrame(step)
  }

  useEffect(() => {
    return () => cancelAnimation()
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

  if (!isActive) return null

  const entry = easeOutCubic(clamp(progress / 0.28))
  const mid = easeInOutQuart(clamp((progress - 0.18) / 0.5))
  const float = easeOutQuint(clamp((progress - 0.35) / 0.4))
  const exit = easeInCubic(clamp((progress - 0.68) / 0.32))

  const veilOpacity = clamp(entry * (1 - exit), 0, 1)
  const glowWave = Math.sin(Math.PI * clamp((progress - 0.08) / 0.68, 0, 1))
  const glowOpacity = clamp(glowWave * (1 - exit), 0, 1)
  const glowScale = 0.82 + 0.28 * easeOutCubic(clamp((progress - 0.08) / 0.55, 0, 1))
  const sheenOpacity = clamp(mid * (1 - exit), 0, 1) * 0.38
  const horizonOpacity = clamp(float * (1 - exit), 0, 1) * 0.28
  const curtainOpacity = clamp(mid * (1 - exit), 0, 1) * 0.2
  const embersOpacity = clamp(float * (1 - exit), 0, 1) * 0.16
  const sparklesOpacity = clamp((entry * 0.6 + mid * 0.4) * (1 - exit), 0, 1)
  const sparkleIntensity = 0.16 + 0.22 * mid
  const curtainShift = (0.5 - progress) * 26

  return (
    <div className="fixed inset-0 z-[70] pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          opacity: veilOpacity * 0.92,
          background:
            'linear-gradient(145deg, rgba(8, 24, 73, 0.72) 0%, rgba(33, 56, 133, 0.58) 16%, rgba(236, 223, 210, 0.55) 55%, rgba(137, 49, 114, 0.42) 100%)',
          mixBlendMode: 'screen',
          transition: 'none',
        }}
      />

      <div
        className="absolute left-1/2 top-1/2"
        style={{
          opacity: glowOpacity * 0.82,
          transform: `translate(-50%, -50%) scale(${glowScale})`,
          width: '64vw',
          height: '64vw',
          maxWidth: 760,
          maxHeight: 760,
          borderRadius: '50%',
          background:
            'radial-gradient(circle at center, rgba(255, 249, 240, 0.95) 0%, rgba(236, 223, 210, 0.6) 35%, rgba(137, 49, 114, 0.28) 58%, rgba(33, 56, 133, 0.05) 100%)',
          boxShadow:
            '0 0 120px rgba(236, 223, 210, 0.35), 0 0 220px rgba(33, 56, 133, 0.25), inset 0 0 160px rgba(255, 255, 255, 0.45)',
          transition: 'none',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          opacity: sheenOpacity,
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(236, 223, 210, 0.0) 55%, rgba(8, 24, 73, 0.3) 100%)',
          mixBlendMode: 'soft-light',
          backdropFilter: `blur(${1 + mid * 2.4}px)`,
          transition: 'none',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          opacity: curtainOpacity,
          transform: `translate3d(${curtainShift}px, 0, 0)`,
          background:
            'linear-gradient(90deg, rgba(255, 246, 235, 0.18) 0%, rgba(236, 223, 210, 0.08) 15%, rgba(137, 49, 114, 0.0) 50%, rgba(33, 56, 133, 0.14) 85%, rgba(255, 246, 235, 0.18) 100%)',
          mixBlendMode: 'screen',
          transition: 'none',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          opacity: horizonOpacity,
          background:
            'radial-gradient(80% 70% at 50% 82%, rgba(255, 228, 206, 0.38) 0%, rgba(255, 228, 206, 0.0) 70%)',
          mixBlendMode: 'screen',
          transition: 'none',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          opacity: embersOpacity,
          background:
            'radial-gradient(65% 60% at 82% 12%, rgba(137, 49, 114, 0.22) 0%, rgba(137, 49, 114, 0.0) 65%), radial-gradient(60% 55% at 18% 88%, rgba(33, 56, 133, 0.24) 0%, rgba(33, 56, 133, 0.0) 70%)',
          mixBlendMode: 'screen',
          transition: 'none',
        }}
      />

      <ParticleEffects
        type="sparkles"
        colors={['#ECDFD2', '#F1E7D9', '#CCCACC', '#893172', '#5F3475', '#213885']}
        intensity={sparkleIntensity}
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: sparklesOpacity,
          filter: 'saturate(1.15)',
          transition: 'none',
        }}
      />
    </div>
  )
}
