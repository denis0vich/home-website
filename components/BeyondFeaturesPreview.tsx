'use client'

import TransitionLink from '@/components/TransitionLink'

interface FeatureCard {
  id: string
  eyebrow: string
  title: string
  subtitle: string
  description: string
  highlights: string[]
  href: string
  gradient: string
}

const FEATURES: FeatureCard[] = [
  {
    id: 'information-design',
    eyebrow: 'Digital Autonomy',
    title: 'Information Design & Mood Boards',
    subtitle: 'How online curation becomes emotional architecture.',
    description:
      'Gen Z prototypes home through Pinterest, TikTok, and collaborative docs. Information design is not just aesthetic—it is control, rehearsal, and a safe rehearsal of the future.',
    highlights: [
      'Curation as self-preservation',
      'Algorithms shaping sanctuary',
      'Templates for emotional clarity',
    ],
    href: '/beyond-the-features/information-design',
    gradient: 'from-[#213885] via-[#5F3475] to-[#ECDFD2]',
  },
  {
    id: 'sustainable-living',
    eyebrow: 'Biophilia',
    title: 'Sustainable Living in the Concrete Jungle',
    subtitle: 'Why tending to plants and light is a moral choice.',
    description:
      'From borrowed balconies to indoor jungles, this essay explores how nature-neutral homes soothe overstimulated bodies, turning small rituals into ethical resistance.',
    highlights: [
      'Borrowed landscapes',
      'Low-impact, high-comfort swaps',
      'Sensory relief in dense cities',
    ],
    href: '/beyond-the-features/sustainable-living',
    gradient: 'from-[#5F3475] via-[#893172] to-[#213885]',
  },
  {
    id: 'financial-liberation',
    eyebrow: 'Money & Space',
    title: 'Financial Liberation · Renting as Strategy',
    subtitle: 'Redefining stability when ownership is out of reach.',
    description:
      'Financial anxiety is part of every dream-home conversation. Learn how Gen Z reframes renting as autonomy, building psychological peace without a title deed.',
    highlights: [
      'Budgets as boundary-making',
      'Micro-upgrades that feel permanent',
      'Freedom metrics beyond mortgages',
    ],
    href: '/beyond-the-features/financial-liberation',
    gradient: 'from-[#081849] via-[#213885] to-[#5F3475]',
  },
]

export default function BeyondFeaturesPreview() {
  return (
    <section className="relative z-20 px-6 py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_10%_-20%,rgba(137,49,114,0.35),rgba(8,24,73,0))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_90%_-10%,rgba(33,56,133,0.35),rgba(8,24,73,0))]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/55">Reference Layer</p>
          <h2 className="mt-4 font-bella-queta text-4xl md:text-5xl text-white drop-shadow-[0_10px_35px_rgba(5,11,34,0.45)]">
            Beyond the Features
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-white/75 md:text-lg">
            The Haven’s essays turn insights into handrails. Move from personal narrative into frameworks that help
            you plan, heal, and design with intention.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[3rem] border border-white/10 bg-white/5 blur-3xl" />
          {FEATURES.map((feature, index) => (
            <TransitionLink
              key={feature.id}
              href={feature.href}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[2.25rem] border border-white/15 bg-gradient-to-br ${feature.gradient} p-8 shadow-[0_26px_60px_rgba(5,11,34,0.45)] transition-transform duration-300 hover:-translate-y-2`}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 transition duration-500 group-hover:opacity-15" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                    {String(index + 1).padStart(2, '0')} · {feature.eyebrow}
                  </p>
                  <h3 className="mt-3 font-bella-queta text-2xl text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{feature.subtitle}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">{feature.description}</p>
                </div>

                <ul className="mt-6 space-y-2 text-xs uppercase tracking-[0.35em] text-white/65">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <span className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-white">
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
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 text-center text-sm text-white/70 md:flex-row md:justify-between">
          <p className="font-bella-queta text-white/75">
            Designed for readers who want research-backed, heart-forward guidance for building a sanctuary.
          </p>
          <TransitionLink
            href="/beyond-the-features"
            className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/15 px-6 py-3 text-xs uppercase tracking-[0.4em] text-white transition hover:bg-white/25"
          >
            Explore all features
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </TransitionLink>
        </div>
      </div>
    </section>
  )
}

