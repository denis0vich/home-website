'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

interface ScrollSnapCarouselProps<T> {
  items: T[]
  renderItem: (item: T, index: number, isActive: boolean) => React.ReactNode
  className?: string
  itemClassName?: string
  onActiveChange?: (index: number) => void
  onItemClick?: (item: T, index: number) => void
  ariaLabel?: string
}

export default function ScrollSnapCarousel<T>({
  items,
  renderItem,
  className = '',
  itemClassName = '',
  onActiveChange,
  onItemClick,
  ariaLabel,
}: ScrollSnapCarouselProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const activeIndexRef = useRef(0)
  const [activeIndexState, setActiveIndexState] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(items.length > 1)

  const setActiveIndex = useCallback(
    (next: number) => {
      if (next === activeIndexRef.current) return
      activeIndexRef.current = next
      setActiveIndexState(next)
      onActiveChange?.(next)
    },
    [onActiveChange]
  )

  const updateState = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    const { scrollLeft, scrollWidth, clientWidth } = container
    setCanPrev(scrollLeft > 4)
    setCanNext(scrollLeft + clientWidth < scrollWidth - 4)

    if (!itemRefs.current.length) return
    const viewportCenter = scrollLeft + clientWidth / 2
    let nearestIndex = 0
    let smallestDistance = Number.POSITIVE_INFINITY

    itemRefs.current.forEach((el, idx) => {
      if (!el) return
      const itemCenter = el.offsetLeft + el.offsetWidth / 2
      const distance = Math.abs(itemCenter - viewportCenter)
      if (distance < smallestDistance) {
        smallestDistance = distance
        nearestIndex = idx
      }
    })

    if (nearestIndex !== activeIndexRef.current) {
      setActiveIndex(nearestIndex)
    }
  }, [setActiveIndex])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    updateState()

    let rafId: number | null = null
    const handleScroll = () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        updateState()
        rafId = null
      })
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateState)

    return () => {
      container.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateState)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [updateState])

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, items.length)
    activeIndexRef.current = 0
    setActiveIndexState(0)
    onActiveChange?.(0)
    const container = containerRef.current
    if (container) {
      container.scrollTo({ left: 0 })
      updateState()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (event: WheelEvent) => {
      const target = containerRef.current
      if (!target) return

      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return
      }

      if (!event.cancelable) {
        return
      }

      event.preventDefault()
      target.scrollBy({
        left: event.deltaY,
        behavior: 'auto',
      })
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [])

  const scrollToIndex = useCallback((index: number) => {
    const container = containerRef.current
    const target = itemRefs.current[index]
    if (!container || !target) return

    const offset =
      target.offsetLeft - (container.clientWidth - target.offsetWidth) / 2
    container.scrollTo({ left: offset, behavior: 'smooth' })
  }, [])

  const handlePrev = useCallback(() => {
    if (!canPrev) return
    scrollToIndex(Math.max(0, activeIndexRef.current - 1))
  }, [canPrev, scrollToIndex])

  const handleNext = useCallback(() => {
    if (!canNext) return
    scrollToIndex(Math.min(items.length - 1, activeIndexRef.current + 1))
  }, [canNext, items.length, scrollToIndex])

  const indicatorArray = useMemo(() => items.map((_, idx) => idx), [items])

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          type="button"
          onClick={handlePrev}
          disabled={!canPrev}
          className="group rounded-full bg-white/10 p-3 text-white shadow-lg transition hover:bg-white/25 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Scroll previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition group-hover:-translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.6}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          type="button"
          onClick={handleNext}
          disabled={!canNext}
          className="group rounded-full bg-white/10 p-3 text-white shadow-lg transition hover:bg-white/25 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Scroll next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.6}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div
        ref={containerRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pt-2"
        role="group"
        aria-label={ariaLabel}
      >
        {items.map((item, index) => (
          <div
            key={index}
            ref={node => {
              itemRefs.current[index] = node
            }}
            className={`relative flex-shrink-0 snap-center ${itemClassName}`}
            style={{ minWidth: 'min(320px, 72vw)' }}
            onClick={() => onItemClick?.(item, index)}
          >
            {renderItem(item, index, activeIndexState === index)}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {indicatorArray.map((idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${
              activeIndexState === idx
                ? 'w-10 bg-white'
                : 'w-3 bg-white/35'
            }`}
          />
        ))}
      </div>
    </div>
  )
}


