import Link from 'next/link'

export default function BeyondFeatures() {
  const features = [
    {
      title: 'Information Design & Autonomy',
      subtitle: 'The Psychology of the Digital Mood Board',
      description: 'Explore the digital landscape where the modern dream home is first conceived.',
      slug: '/beyond-the-features/information-design'
    },
    {
      title: 'Sustainable Living',
      subtitle: 'Biophilia: Nature in the Concrete Jungle',
      description: 'Build a future that gives back through environmental responsibility and personal well-being.',
      slug: '/beyond-the-features/sustainable-living'
    },
    {
      title: 'Financial Liberation',
      subtitle: 'Rethinking Ownership: The Renting Mindset',
      description: 'Redefine value, prioritizing time, convenience, and psychological peace.',
      slug: '/beyond-the-features/financial-liberation'
    }
  ]

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Beyond the Features</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            In this section, we look Beyond the Features to explore the three main forces shaping the modern Gen Z sanctuary: how we use the digital world to plan our future, why sustainable design is a moral choice, and the hard financial realities of living in the city.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Link
              key={feature.slug}
              href={feature.slug}
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm font-medium text-gray-600">{feature.subtitle}</p>
              <p className="mt-4 text-sm text-gray-500">{feature.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-gray-900 group-hover:text-gray-600">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/beyond-the-features"
            className="inline-block rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800"
          >
            Explore All Features
          </Link>
        </div>
      </div>
    </section>
  )
}

