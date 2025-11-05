import Link from 'next/link'
import Image from 'next/image'

export default function FeaturedStories() {
  const stories = [
    {
      name: 'Blair',
      topic: 'Abuse, Repressed Personal Identity',
      color: 'from-black to-orange-500',
      image: '/stories/blair.jpg',
      slug: '/stories/blair'
    },
    {
      name: 'Elijah',
      topic: 'Mental Health, Financial Precarity',
      color: 'from-blue-400 to-blue-600',
      image: '/stories/elijah.jpg',
      slug: '/stories/elijah'
    },
    {
      name: 'Lala',
      topic: 'Religion, Homophobia',
      color: 'from-green-600 to-amber-600',
      image: '/stories/lala.jpg',
      slug: '/stories/lala'
    }
  ]

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Stories</h2>
          <p className="mt-4 text-lg text-gray-600">
            This section features the heart of our exploration, with deeply personal narratives alongside expert analysis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={story.slug}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${story.color} relative`}>
                {/* Story image would go here */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{story.name}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{story.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{story.topic}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/stories"
            className="inline-block rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800"
          >
            View All Stories
          </Link>
        </div>
      </div>
    </section>
  )
}

