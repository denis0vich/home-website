'use client'

import Image from 'next/image'
import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'

interface StoryImageProps {
  src: string
  alt: string
  className?: string
  delay?: number
  caption?: string
}

export default function StoryImage({ src, alt, className = '', delay = 0, caption }: StoryImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <ScrollAnimation direction="zoomIn" delay={delay}>
      <figure className="my-12">
        <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-2xl">
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
            onLoad={() => setLoaded(true)}
            unoptimized
          />
        </div>
        {caption && (
          <figcaption className="text-center text-sm font-bella-queta text-gray-500 mt-4 italic">
            {caption}
          </figcaption>
        )}
      </figure>
    </ScrollAnimation>
  )
}

