'use client'

import ScrollAnimation from './ScrollAnimation'
import TextReveal from './TextReveal'
import { ReactNode } from 'react'

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
  
  return (
    <ScrollAnimation 
      direction="fadeInUp" 
      duration={duration}
      threshold={threshold}
      rootMargin="0px 0px -250px 0px"
    >
      <p className={`mb-12 leading-relaxed text-lg ${className}`} style={{ lineHeight: '1.9', color: 'inherit' }}>
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

