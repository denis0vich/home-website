'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import Link from 'next/link'

export default function BeyondFeaturesPage() {
  const features = [
    {
      id: 'information-design',
      title: 'Information Design & Autonomy',
      subtitle: 'The Psychology of the Digital Mood Board',
      href: '/beyond-the-features/information-design',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'sustainable-living',
      title: 'Sustainable Living',
      subtitle: 'Biophilia: Nature in the Concrete Jungle',
      href: '/beyond-the-features/sustainable-living',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 'financial-liberation',
      title: 'Financial Liberation',
      subtitle: 'Rethinking Ownership: The Renting Mindset',
      href: '/beyond-the-features/financial-liberation',
      gradient: 'from-orange-500 to-red-600'
    }
  ]

  return (
    <div className="story-page-wrapper">
      <div className="story-background" />
      
      <div className="story-nav-overlay">
        <Navigation />
      </div>

      <div className="story-content-area">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <ScrollAnimation direction="fadeInUp" delay={100} duration={1200}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bella-queta text-gray-900 mb-6 text-center leading-tight">
              Beyond the Features
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation direction="fadeInUp" delay={200} duration={1000}>
            <p className="text-xl font-bella-queta text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              In this section, we look Beyond the Features to explore the three main forces shaping the modern Gen Z sanctuary: how we use the digital world to plan our future, why sustainable design is a moral choice, and the hard financial realities of living in the city. Dive into our supporting essays to gain the practical insights needed to turn your anxiety about identity, money, and environment into a clear blueprint for peace.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <ScrollAnimation key={feature.id} direction="zoomIn" delay={300 + (index * 150)} duration={1000}>
                <Link href={feature.href}>
                  <div className={`bg-gradient-to-br ${feature.gradient} rounded-xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer`}>
                    <h2 className="text-2xl font-bella-queta font-bold text-white mb-3">
                      {feature.title}
                    </h2>
                    <p className="text-white/90 font-bella-queta text-sm">
                      {feature.subtitle}
                    </p>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

