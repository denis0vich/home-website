'use client'

import ScrollAnimation from './ScrollAnimation'
import TextReveal from './TextReveal'
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
  duration = 1800,
  threshold = 0.25,
  useTextReveal = false,
  revealType = 'word',
  textRevealDelay = 20
}: StoryParagraphProps) {
  // Check if children is a string
  const isString = typeof children === 'string'
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const [textShadow, setTextShadow] = useState<string>('')
  const [textColor, setTextColor] = useState<string>('inherit')

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
      
      // If inherited color is dark (on light background), use white instead
      if (luminance < 0.5) {
        // Dark text on light background - force white text
        setTextColor('#ffffff')
        setTextShadow('0 1px 3px rgba(0, 0, 0, 0.8), 0 0 2px rgba(0, 0, 0, 0.9)')
      } else {
        // Light text on dark background - keep inherited color
        setTextColor('inherit')
        setTextShadow('0 1px 3px rgba(0, 0, 0, 0.8), 0 0 2px rgba(0, 0, 0, 0.9)')
      }
    } else {
      // Fallback: assume dark background with light text
      setTextColor('inherit')
      setTextShadow('0 2px 10px rgba(255, 255, 255, 0.4), 0 1px 4px rgba(0, 0, 0, 0.6), 0 0 2px rgba(0, 0, 0, 0.8)')
    }
  }, [])
  
  return (
        <ScrollAnimation 
          direction="fadeInUp" 
          duration={duration}
          threshold={threshold}
          rootMargin="0px 0px -250px 0px"
        >
          <p 
            ref={paragraphRef}
            className={`mb-16 leading-relaxed text-lg md:text-xl lg:text-2xl ${className}`} 
            style={{ 
              lineHeight: '2', 
              color: textColor,
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', 
              textShadow: textShadow || '0 2px 10px rgba(255, 255, 255, 0.4), 0 1px 4px rgba(0, 0, 0, 0.6), 0 0 2px rgba(0, 0, 0, 0.8)'
            }}
          >
            {useTextReveal && isString ? (
              <TextReveal 
                revealType={revealType} 
                delay={textRevealDelay}
                duration={textRevealDelay}
                threshold={0.15}
                rootMargin="0px 0px -200px 0px"
              >
                {children as string}
              </TextReveal>
            ) : (
              children
            )}
          </p>
        </ScrollAnimation>
  )
}

