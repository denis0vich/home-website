'use client'

import { useEffect, useRef, useState } from 'react'

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
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    // Calculate and set container dimensions
    const updateDimensions = () => {
      const rect = container.getBoundingClientRect()
      if (rect.width > 0) {
        // Calculate height based on 16:9 aspect ratio, but respect max height
        const calculatedHeight = (rect.width * 9) / 16
        const maxHeight = 500 // Max height constraint
        const height = Math.min(calculatedHeight, maxHeight)
        const constrainedWidth = height < calculatedHeight ? (height * 16) / 9 : rect.width
        
        setDimensions({ width: constrainedWidth, height })
        
        // Force video to have explicit dimensions, but don't exceed container
        video.style.width = `${Math.min(constrainedWidth, rect.width)}px`
        video.style.height = `${height}px`
        video.style.maxWidth = `${rect.width}px`
        video.style.maxHeight = `${maxHeight}px`
        video.style.minWidth = '0'
        video.style.minHeight = '0'
      }
    }

    // Initial calculation
    updateDimensions()

    // Handle video metadata loaded
    const handleLoadedMetadata = () => {
      console.log('[StoryVideo] Metadata loaded:', src, {
        videoWidth: video.videoWidth,
        videoHeight: video.videoHeight,
        readyState: video.readyState,
        networkState: video.networkState
      })
      updateDimensions()
      // Ensure video is visible
      if (video.videoWidth > 0 && video.videoHeight > 0) {
        video.style.display = 'block'
        video.style.visibility = 'visible'
        video.style.opacity = '1'
      }
    }

    const handleLoadedData = () => {
      console.log('[StoryVideo] Data loaded:', src)
      updateDimensions()
    }

    const handleError = (e: Event) => {
      console.error('[StoryVideo] Video error:', src, {
        error: video.error,
        code: video.error?.code,
        message: video.error?.message,
        networkState: video.networkState,
        readyState: video.readyState
      })
    }

    const handleCanPlay = () => {
      console.log('[StoryVideo] Can play:', src)
      updateDimensions()
      video.style.display = 'block'
      video.style.visibility = 'visible'
      video.style.opacity = '1'
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('error', handleError)
    video.addEventListener('canplay', handleCanPlay)
    
    // Update on resize
    const resizeObserver = new ResizeObserver(() => {
      updateDimensions()
    })
    resizeObserver.observe(container)

    window.addEventListener('resize', updateDimensions)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateDimensions)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('error', handleError)
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [src])

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-full overflow-hidden rounded-2xl border border-white/15 bg-black/40 ${className}`}
      style={{ 
        aspectRatio: '16/9',
        minHeight: '300px',
        maxHeight: '500px',
        position: 'relative',
        display: 'block',
        width: '100%'
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
        preload={autoPlay ? 'auto' : 'metadata'}
        style={{ 
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
          visibility: 'visible',
          opacity: 1,
          backgroundColor: '#000',
          position: 'relative',
          zIndex: 1
        }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
