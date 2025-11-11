'use client'

import {
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  createContext,
  useContext,
} from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

interface LightboxImage {
  src: string
  alt?: string
  description?: string
  width?: number
  height?: number
}

interface ImageLightboxContextValue {
  open: (image: LightboxImage) => void
}

const ImageLightboxContext = createContext<ImageLightboxContextValue | null>(null)

export function useImageLightbox() {
  const ctx = useContext(ImageLightboxContext)
  if (!ctx) {
    throw new Error('useImageLightbox must be used within <ImageLightboxProvider>.')
  }
  return ctx
}

export function ImageLightboxProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<LightboxImage | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [viewport, setViewport] = useState({ width: 0, height: 0 })
  const lastFocusRef = useRef<HTMLElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)

  const open = useCallback((nextImage: LightboxImage) => {
    if (!lastFocusRef.current && typeof document !== 'undefined') {
      lastFocusRef.current = document.activeElement as HTMLElement
    }
    setImage(nextImage)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      if (lastFocusRef.current) {
        lastFocusRef.current.focus({ preventScroll: true })
        lastFocusRef.current = null
      }
      setImage(null)
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
      }
      if (event.key === 'Tab' && overlayRef.current && closeButtonRef.current) {
        const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey) {
          if (document.activeElement === first) {
            event.preventDefault()
            last.focus()
          }
        } else if (document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight })
    }

    document.addEventListener('keydown', onKeyDown)
    updateViewport()
    window.addEventListener('resize', updateViewport)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus({ preventScroll: true })

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', updateViewport)
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen, close])

  const contextValue = useMemo(() => ({ open }), [open])

  const fallbackViewport = { width: 1280, height: 720 }
  const view = isOpen && viewport.width && viewport.height ? viewport : fallbackViewport
  const maxWidth = view.width * 0.9
  const maxHeight = view.height * 0.85
  const hasAspect = image?.width && image?.height
  const aspectRatio = hasAspect ? (image!.width as number) / (image!.height as number) : null
  let displayWidth = maxWidth
  let displayHeight = maxHeight
  if (aspectRatio) {
    displayWidth = Math.min(maxWidth, maxHeight * aspectRatio)
    displayHeight = displayWidth / aspectRatio
  } else {
    displayHeight = Math.min(maxHeight, displayHeight)
  }

  return (
    <ImageLightboxContext.Provider value={contextValue}>
      {children}
      {typeof document !== 'undefined' && createPortal(
        <Fragment>
          {isOpen && image && (
            <div
              ref={overlayRef}
              className="pointer-events-auto fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(5,11,34,0.85)] backdrop-blur-md transition-opacity"
            >
              <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(137,49,114,0.35),rgba(5,11,34,0))]" />
              <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(33,56,133,0.35),rgba(5,11,34,0))]" />
              <div className="relative z-10 flex w-full max-w-[90vw] flex-col gap-6 px-6 text-white">
                <header className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.4em] text-white/65">
                    Preview
                  </span>
                  <button
                    ref={closeButtonRef}
                    onClick={close}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white transition hover:bg-white/25"
                  >
                    Close
                    <svg
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </header>

                <div
                  className="relative mx-auto overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-[0_30px_80px_rgba(5,11,34,0.65)]"
                  style={{
                    width: Math.max(240, displayWidth),
                    height: Math.max(240, displayHeight),
                    transition: 'width 120ms ease, height 120ms ease',
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt ?? ''}
                    width={image.width ?? Math.round(displayWidth)}
                    height={image.height ?? Math.round(displayHeight)}
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>

                {image.description && (
                  <p className="rounded-2xl border border-white/25 bg-white/10 p-4 text-sm leading-relaxed text-white/75">
                    {image.description}
                  </p>
                )}
              </div>
            </div>
          )}
        </Fragment>,
        document.body
      )}
    </ImageLightboxContext.Provider>
  )
}

interface LightboxImageProps {
  src: string
  alt?: string
  description?: string
  width?: number
  height?: number
  className?: string
  onClick?: () => void
  renderOverlay?: ReactNode
  priority?: boolean
  sizes?: string
}

export function LightboxImage({
  src,
  alt,
  description,
  width,
  height,
  className,
  onClick,
  renderOverlay,
  priority,
  sizes,
}: LightboxImageProps) {
  const { open } = useImageLightbox()

  const handleOpen = useCallback(() => {
    onClick?.()

    if (typeof window !== 'undefined' && (!width || !height)) {
      open({ src, alt, description })
      const preload = new window.Image()
      preload.src = src
      preload.onload = () => {
        open({
          src,
          alt,
          description,
          width: preload.naturalWidth,
          height: preload.naturalHeight,
        })
      }
      preload.onerror = () => {
        open({ src, alt, description })
      }
      return
    }

    open({ src, alt, description, width, height })
  }, [open, src, alt, description, width, height, onClick])

  return (
    <button
      type="button"
      onClick={handleOpen}
      className={`relative block cursor-zoom-in overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ECDFD2] focus-visible:ring-offset-transparent ${className ?? ''}`}
    >
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt ?? ''}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          sizes={sizes}
          priority={priority}
        />
        {renderOverlay}
      </div>
      <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),rgba(137,49,114,0.2),rgba(5,11,34,0.6))]" />
      </span>
    </button>
  )
}


