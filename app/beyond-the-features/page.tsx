'use client'

import Navigation from '@/components/Navigation'
import TransitionLink from '@/components/TransitionLink'

const FEATURES = [
  {
    id: 'information-design',
    eyebrow: 'Digital Autonomy',
    title: 'Information Design & Mood Boards',
    summary:
      'How Gen Z prototypes a dream home through Pinterest, TikTok, and Notion—and why curation is an act of self-protection.',
    href: '/beyond-the-features/information-design',
    gradient: 'from-[#213885] via-[#5F3475] to-[#ECDFD2]',
  },
  {
    id: 'sustainable-living',
    eyebrow: 'Biophilia',
    title: 'Sustainable Living in the Concrete Jungle',
    summary:
      'Exploring the psychological payoff of plants, natural light, and borrowed landscapes in high-density housing.',
    href: '/beyond-the-features/sustainable-living',
    gradient: 'from-[#5F3475] via-[#893172] to-[#213885]',
  },
  {
    id: 'financial-liberation',
    eyebrow: 'Money & Space',
    title: 'Financial Liberation: Renting as Strategy',
    summary:
      'What financial peace looks like when ownership is out of reach—and how Gen Z reframes flexibility as freedom.',
    href: '/beyond-the-features/financial-liberation',
    gradient: 'from-[#081849] via-[#213885] to-[#5F3475]',
  },
]

const TAKEAWAYS = [
  {
    title: 'Design choices as coping mechanisms',
    body:
      'Digital mood boards, sustainable swaps, and flexible leases are emotional strategies as much as aesthetic ones.',
  },
  {
    title: 'The thesis behind the essays',
    body:
      'Each feature extends a strand from Blair, Elijah, and Lala—translating personal testimony into actionable design, wellness, and financial advice.',
  },
  {
    title: 'For readers & practitioners alike',
    body:
      'Use these essays to support your own planning, or to inform how you guide clients toward spaces that actually soothe.',
  },
]

export default function BeyondFeaturesPage() {
  return (
    <div className="relative min-h-screen bg-[#faf8f5] text-gray-800">
      <Navigation />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-40 pb-24">
        <header className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-gray-600">
            Supporting Essays
          </p>
          <h1 className="mb-5 font-bella-queta text-5xl md:text-6xl lg:text-7xl text-gray-800">
            Beyond the Features
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-700 md:text-xl">
            Three longform essays extend The Haven's core stories. Move from personal testimony into the
            frameworks—digital autonomy, sustainability, and finance—that shape the Gen Z sanctuary.
          </p>
        </header>

        <section className="mt-16 grid gap-8 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <TransitionLink
              key={feature.id}
              href={feature.href}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition transform-gpu hover:-translate-y-1.5"
            >
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.4em] text-gray-600">
                    {feature.eyebrow}
                  </span>
                  <h2 className="mt-3 font-bella-queta text-2xl text-gray-800">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-gray-700">
                    {feature.summary}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-[#BE8CC1]">
                  Read essay
                  <svg
                    className="h-3.5 w-3.5 transition group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </TransitionLink>
          ))}
        </section>

        <section className="mt-24 rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-600">Why it matters</p>
            <h2 className="mt-3 font-bella-queta text-3xl md:text-4xl text-gray-800">
              How to use these features
            </h2>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {TAKEAWAYS.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white/60 p-6 text-sm leading-relaxed text-gray-700"
              >
                <h3 className="font-bella-queta text-xl text-gray-800">{item.title}</h3>
                <p className="mt-3">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

