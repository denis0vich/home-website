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
        // Calculate height based on 16:9 aspect ratio
        const height = (rect.width * 9) / 16
        setDimensions({ width: rect.width, height })
        
        // Force video to have explicit dimensions
        video.style.width = `${rect.width}px`
        video.style.height = `${height}px`
        video.style.minWidth = `${rect.width}px`
        video.style.minHeight = `${height}px`
      }
    }

    // Initial calculation
    updateDimensions()

    // Handle video metadata loaded
    const handleLoadedMetadata = () => {
      updateDimensions()
      // Ensure video is visible
      if (video.videoWidth > 0 && video.videoHeight > 0) {
        video.style.display = 'block'
        video.style.visibility = 'visible'
      }
    }

    const handleLoadedData = () => {
      updateDimensions()
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('loadeddata', handleLoadedData)
    
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
    }
  }, [src])

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-2xl border border-white/15 bg-black/40 ${className}`}
      style={{ 
        aspectRatio: '16/9',
        minHeight: '300px',
        position: 'relative',
        display: 'block'
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
