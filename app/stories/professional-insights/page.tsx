'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import PageTransition from '@/components/PageTransition'
import ScrollAnimation from '@/components/ScrollAnimation'

interface InsightCard {
  id: string
  title: string
  subtitle: string
  description: string
  href: string
  color: string
}

export default function ProfessionalInsightsPage() {
  const router = useRouter()
  const [transitioning, setTransitioning] = useState(false)
  const [clickedCard, setClickedCard] = useState<{ x: number; y: number } | null>(null)
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  const insights: InsightCard[] = [
    {
      id: 'architect-engineer',
      title: 'Architect & Engineer',
      subtitle: 'The Strategic Blueprint: The True Cost of the Filipino Dream Home',
      description: 'Insights from Engr. John Kelly Josue and Architect Tanya Kriselle S. Chua on engineering solutions and design principles that address emotional needs.',
      href: '/stories/professional-insights/architect-engineer',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 'interior-designer',
      title: 'Interior Designer & Psychometrician',
      subtitle: 'How Interior Design and Psychology Transform Pain into Peace',
      description: 'Expert analysis from Interior Designer Lucia Da Silva and Psychometrician Gabrielle Zambrano on the psychological impact of space.',
      href: '/stories/professional-insights/interior-designer',
      color: 'from-purple-500 to-purple-700'
    }
  ]

  const handleCardClick = (insight: InsightCard, event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    
    setSelectedCard(insight.id)
    setClickedCard({ x, y })
    setTransitioning(true)
  }

  const handleTransitionComplete = () => {
    if (selectedCard) {
      const insight = insights.find(i => i.id === selectedCard)
      if (insight) {
        router.push(insight.href)
      }
    }
  }

  return (
    <div className="story-page-wrapper">
      <div className="story-background" />
      
      <div className="story-nav-overlay">
        <Navigation />
      </div>

      <PageTransition
        show={transitioning}
        onComplete={handleTransitionComplete}
        direction="from"
        position={clickedCard || undefined}
        useStarfield={true}
      />

      <div className="story-content-area">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <ScrollAnimation direction="fadeInUp" delay={100} duration={1200}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bella-queta text-gray-900 mb-6 text-center leading-tight">
              Professional Insights
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation direction="fadeInUp" delay={200} duration={1000}>
            <p className="text-xl font-bella-queta text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              Expert perspectives from architects, engineers, interior designers, and psychologists on how emotional needs translate into physical spaces.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {insights.map((insight, index) => (
              <ScrollAnimation key={insight.id} direction="zoomIn" delay={300 + (index * 150)} duration={1000}>
                <div
                  onClick={(e) => handleCardClick(insight, e)}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full border-2 border-transparent hover:border-gray-300 transform hover:-translate-y-2">
                    <h2 className={`text-3xl font-bella-queta font-bold text-gray-900 mb-4 transition-colors duration-300 ${insight.id === 'architect-engineer' ? 'group-hover:text-blue-600' : 'group-hover:text-purple-600'}`}>
                      {insight.title}
                    </h2>
                    <p className="text-lg font-bella-queta text-gray-700 mb-4">
                      {insight.subtitle}
                    </p>
                    <p className="text-sm font-bella-queta text-gray-600">
                      {insight.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

