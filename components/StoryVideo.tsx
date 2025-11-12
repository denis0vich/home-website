'use client'

import { useEffect, useRef } from 'react'

interface StoryVideoProps {
  src: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  className?: string
}

export default function StoryVideo({
  src,
  autoPlay = false,
  muted = false,
  loop = false,
  controls = false,
  className = ''
}: StoryVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    // Force video to be visible and properly sized
    const ensureVideoVisible = () => {
      const rect = container.getBoundingClientRect()
      if (rect.width > 0 && rect.height > 0) {
        // Ensure video fills container
        video.style.position = 'absolute'
        video.style.top = '0'
        video.style.left = '0'
        video.style.width = '100%'
        video.style.height = '100%'
        video.style.objectFit = 'cover'
        video.style.display = 'block'
        video.style.visibility = 'visible'
        video.style.opacity = '1'
      }
    }

    ensureVideoVisible()
    
    // Handle video loading events
    const handleLoadedMetadata = () => {
      ensureVideoVisible()
    }

    const handleCanPlay = () => {
      ensureVideoVisible()
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('canplay', handleCanPlay)
    
    // Also check periodically
    const checkInterval = setInterval(ensureVideoVisible, 100)

    // Update on resize
    window.addEventListener('resize', ensureVideoVisible)

    return () => {
      clearInterval(checkInterval)
      window.removeEventListener('resize', ensureVideoVisible)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [src])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl border border-white/15 bg-black/40"
      style={{ 
        aspectRatio: '16/9', 
        minHeight: '200px',
        position: 'relative'
      }}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        className={`${className}`}
        preload={autoPlay ? 'auto' : 'metadata'}
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          visibility: 'visible',
          opacity: 1
        }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

