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
  const [textColor, setTextColor] = useState<string>('#333333')

  useEffect(() => {
    if (!paragraphRef.current) return

    // Get computed text color from parent section
    const computedColor = window.getComputedStyle(paragraphRef.current).color
    const rgbMatch = computedColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
    
    if (rgbMatch) {
      const r = parseInt(rgbMatch[1])
      const g = parseInt(rgbMatch[2])
      const b = parseInt(rgbMatch[3])
      
      // Calculate luminance
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
      
      // Set appropriate text color based on background
      if (luminance < 0.5) {
        // Dark background - use light text
        setTextColor('#ffffff')
      } else {
        // Light background - use dark text
        setTextColor('#333333')
      }
    }
  }, [])
  
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

