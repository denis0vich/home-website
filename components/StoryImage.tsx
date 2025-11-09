'use client'

import Image from 'next/image'
import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'

interface StoryImageProps {
  src: string
  alt: string
  className?: string
  caption?: string
  fullWidth?: boolean
  threshold?: number
}

export default function StoryImage({ 
  src, 
  alt, 
  className = '', 
  caption,
  fullWidth = false,
  threshold = 0.25
}: StoryImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <ScrollAnimation direction="zoomIn" duration={2000} threshold={threshold} rootMargin="0px 0px -300px 0px">
      <figure className={`my-20 ${fullWidth ? 'w-full -mx-6 md:-mx-12' : ''} ${className}`}>
        <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-1000 ease-out hover:scale-[1.02]">
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-110 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            unoptimized
          />
        </div>
        {caption && (
          <ScrollAnimation direction="fadeIn" duration={1200} threshold={0.2} rootMargin="0px 0px -150px 0px">
            <figcaption className="text-center text-sm font-light text-gray-600 mt-8 italic leading-relaxed">
              {caption}
            </figcaption>
          </ScrollAnimation>
        )}
      </figure>
    </ScrollAnimation>
  )
}

