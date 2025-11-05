'use client'

import Link from 'next/link'

interface FeatureCard {
  id: string
  title: string
  subtitle: string
  description: string
  href: string
  gradient: string
}

export default function BeyondFeaturesPreview() {
  const features: FeatureCard[] = [
    {
      id: 'information-design',
      title: 'Information Design & Autonomy',
      subtitle: 'The Psychology of the Digital Mood Board',
      description: 'Explore how the architecture of online platforms gives Gen Z a crucial sense of control and self-definition.',
      href: '/beyond-the-features/information-design',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'sustainable-living',
      title: 'Sustainable Living',
      subtitle: 'Biophilia: Nature in the Concrete Jungle',
      description: 'Discover how small design and lifestyle choices can transform a dwelling into an ethical, nature-connected sanctuary.',
      href: '/beyond-the-features/sustainable-living',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 'financial-liberation',
      title: 'Financial Liberation',
      subtitle: 'Rethinking Ownership: The Renting Mindset',
      description: 'Unpack the financial anxiety of urban struggle and explore how Gen Z redefines value and psychological peace.',
      href: '/beyond-the-features/financial-liberation',
      gradient: 'from-orange-500 to-red-600'
    }
  ]

  return (
    <section className="relative z-20 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bella-queta text-white text-center mb-6 drop-shadow-2xl">
          Beyond the Features
        </h2>
        <p className="text-white/90 text-center max-w-3xl mx-auto mb-12 text-lg font-bella-queta drop-shadow-lg">
          In this section, we look Beyond the Features to explore the three main forces shaping the modern Gen Z sanctuary: how we use the digital world to plan our future, why sustainable design is a moral choice, and the hard financial realities of living in the city.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <Link
              key={feature.id}
              href={feature.href}
              className="group"
            >
              <div className={`bg-gradient-to-br ${feature.gradient} rounded-xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                <h3 className="text-2xl font-bella-queta font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/90 font-bella-queta text-sm mb-4">
                  {feature.subtitle}
                </p>
                <p className="text-white/80 font-bella-queta text-sm">
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

