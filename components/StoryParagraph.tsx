'use client'

import ScrollAnimation from './ScrollAnimation'
import { ReactNode, useEffect, useRef, useState } from 'react'

interface StoryParagraphProps {
  children: ReactNode
  className?: string
  duration?: number
  threshold?: number
  useTextReveal?: boolean
  revealType?: 'word' | 'letter' | 'line'
  textRevealDelay?: number
}

export default function StoryParagraph({ 
  children, 
  className = '',
  duration = 500,
  threshold = 0.2,
  useTextReveal = false,
  revealType = 'word',
  textRevealDelay = 20
}: StoryParagraphProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  
  // Always use dark text for readability on light backgrounds
  const textColor = '#1f2937' // gray-800
  
  return (
    <ScrollAnimation 
      direction="fadeIn" 
      duration={duration}
      threshold={threshold}
      rootMargin="0px 0px -100px 0px"
    >
      <p 
        ref={paragraphRef}
        className={`mb-16 leading-relaxed text-lg md:text-xl lg:text-2xl ${className}`} 
        style={{ 
          lineHeight: '2', 
          color: textColor,
          fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)'
        }}
      >
        {children}
      </p>
    </ScrollAnimation>
  )
}

