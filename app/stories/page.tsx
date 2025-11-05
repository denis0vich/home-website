'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'
import Navigation from '@/components/Navigation'

interface Portal {
  id: string
  name: string
  topic: string
  color: string
  summary: string
  href: string
}

export default function StoriesPage() {
  const router = useRouter()
  const [transitioning, setTransitioning] = useState(false)
  const [clickedPortal, setClickedPortal] = useState<{ x: number; y: number } | null>(null)

  const portals: Portal[] = [
    {
      id: 'blair',
      name: 'Blair',
      topic: 'Abuse, Repressed Personal Identity',
      color: 'from-black via-orange-600 to-orange-400',
      summary: 'What does it say about a home when you have more than one house, and yet, the feeling of belonging is still out of reach?',
      href: '/stories/blair'
    },
    {
      id: 'elijah',
      name: 'Elijah',
      topic: 'Mental Health, Financial Precarity',
      color: 'from-blue-500 via-blue-400 to-blue-600',
      summary: 'Elijah doesn\'t recall a time when he wasn\'t longing to be somewhere else. He imagined a quiet place, where the only sound was the one he allowed.',
      href: '/stories/elijah'
    },
    {
      id: 'lala',
      name: 'Lala',
      topic: 'Religion, Homophobia',
      color: 'from-green-700 via-amber-600 to-green-500',
      summary: 'For Lala, home was never a finished book. It was a map still being written, filled with people and places she has yet to love, and be loved by.',
      href: '/stories/lala'
    }
  ]

  const [selectedPortal, setSelectedPortal] = useState<Portal | null>(null)

  const handlePortalClick = (portal: Portal, event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    
    setSelectedPortal(portal)
    setClickedPortal({ x, y })
    setTransitioning(true)
  }

  const handleTransitionComplete = () => {
    if (selectedPortal) {
      router.push(selectedPortal.href)
    }
  }

  return (
    <div className="stories-page-wrapper">
      {/* Full-screen storytelling canvas - separate from main site */}
      <div className="stories-canvas-container">
        {/* Background layer for storytelling */}
        <div className="stories-background" />
        
        {/* Navigation overlay */}
        <div className="stories-nav-overlay">
          <Navigation />
        </div>
      
      <PageTransition
        show={transitioning}
        onComplete={handleTransitionComplete}
        direction="from"
        position={clickedPortal || undefined}
        useStarfield={true}
      />

        {/* Main storytelling content area */}
        <div className="stories-content">
          <div className="stories-portal-section">
            <h1 className="stories-title">
              Choose Your Story
            </h1>
            <p className="stories-subtitle">
              Each portal leads to a unique journey. Hover to explore, click to enter.
            </p>

            {/* Professional Insights Link */}
            <div className="mb-16 text-center">
              <Link 
                href="/stories/professional-insights"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bella-queta font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                View Professional Insights
              </Link>
            </div>

            <div className="stories-portals-grid">
          {portals.map((portal) => (
            <div
              key={portal.id}
              className="portal-card-wrapper"
              onClick={(e) => handlePortalClick(portal, e)}
            >
              <div 
                className="portal-card-inner"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotateY(180deg)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotateY(0deg)'
                }}
              >
                {/* Front of card */}
                <div className="portal-card-front">
                  <div className={`w-full h-full bg-gradient-to-br ${portal.color} flex items-center justify-center relative`}>
                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="text-center p-6 relative z-10">
                      <h2 className="text-4xl font-bella-queta font-bold text-white mb-4 drop-shadow-lg">
                        {portal.name}
                      </h2>
                      <p className="text-white/90 text-sm font-bella-queta font-medium">
                        {portal.topic}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Back of card (summary) */}
                <div className="portal-card-back">
                  <div className="text-center">
                    <h3 className="text-3xl font-bella-queta font-bold text-gray-900 mb-4">
                      {portal.name}
                    </h3>
                    <p className="text-gray-700 font-bella-queta leading-relaxed text-base mb-6">
                      {portal.summary}
                    </p>
                    <div className="px-6 py-3 bg-[#BE8CC1] text-white rounded-full font-bella-queta font-bold inline-block hover:bg-[#a87bac] transition-colors cursor-pointer">
                      Enter Story
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

