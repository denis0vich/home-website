'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import ScrollSnapCarousel from '@/components/ScrollSnapCarousel'
import TransitionLink from '@/components/TransitionLink'

interface StoryPortal {
  id: string
  name: string
  theme: string
  summary: string
  gradient: string
  href: string
}

const STORY_PORTALS: StoryPortal[] = [
  {
    id: 'blair',
    name: 'Blair',
    theme: 'Abuse · Repressed Personal Identity',
    summary:
      'A maximalist visual essay about refusing perfection and building a home that feels lived-in, messy, and wholly hers.',
    gradient: 'from-[#000000] via-[#893172] to-[#ECDFD2]',
    href: '/stories/blair',
  },
  {
    id: 'elijah',
    name: 'Elijah',
    theme: 'Mental Health · Financial Precarity',
    summary:
      'An intimate vantage point into a boy who longs for silence. Follow the architectural sketch of a retreat he can finally afford.',
    gradient: 'from-[#213885] via-[#081849] to-[#5F3475]',
    href: '/stories/elijah',
  },
  {
    id: 'lala',
    name: 'Lala',
    theme: 'Religion · Homophobia',
    summary:
      'A sculpted narrative about privacy, faith, and the right to claim space in a city that sees too much.',
    gradient: 'from-[#5F3475] via-[#893172] to-[#ECDFD2]',
    href: '/stories/lala',
  },
]

const RESOURCE_LINKS = [
  {
    title: 'View Professional Insights',
    subtitle: 'Architects · Designers · Psychologists',
    href: '/stories/professional-insights',
    gradient: 'from-[#213885] via-[#5F3475] to-[#ECDFD2]',
  },
  {
    title: 'Dream Homes',
    subtitle: 'Visual renderings of imagined spaces',
    href: '/interviews-dream-homes',
    gradient: 'from-[#893172] via-[#213885] to-[#081849]',
  },
]


export default function StoriesPage() {
  const router = useRouter()

  const triggerTransition = useCallback(
    (href: string) => {
      const navigate = () => router.push(href)
      const event = new CustomEvent('global-page-transition', { detail: { navigate } })
      window.dispatchEvent(event)
    },
    [router]
  )

  return (
    <div className="relative min-h-screen bg-[#faf8f5] text-gray-800">
      <Navigation />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-40 pb-28">
        {/* Hero */}
        <section className="text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-gray-300 bg-pink-50 px-6 py-2 text-xs uppercase tracking-[0.45em] text-gray-600 backdrop-blur-sm">
            <span>Story Collection</span>
          </div>
          <h1 className="mt-6 font-bella-queta text-5xl md:text-6xl lg:text-7xl text-gray-800">
            Stories That Build Sanctuary
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700 md:text-xl">
            Enter the immersive trilogy of Blair, Elijah, and Lala—three dream homes imagined from
            trauma, longing, and faith. Each portal leads to scroll-triggered soundscapes, particle-driven
            atmospheres, and companion interviews that extend their worlds.
          </p>
        </section>

        {/* Narrative portals */}
        <section className="relative mt-20 rounded-[2.75rem] border border-gray-200 bg-white/80 p-12 md:p-16 shadow-sm backdrop-blur-sm">
          <div className="pointer-events-none absolute -top-24 right-10 hidden h-[220px] w-[220px] rotate-12 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22),transparent_65%)] blur-3xl md:block" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 hidden h-[220px] w-[220px] -rotate-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_65%)] blur-3xl md:block" />

          <div className="text-center mb-16">
            <h2 className="font-bella-queta text-3xl md:text-4xl">Narrative Portals</h2>
          </div>

          <div className="mt-8">
            <ScrollSnapCarousel
              ariaLabel="Story portals"
              items={STORY_PORTALS}
              className="[&_.scrollbar-hide]:overflow-x-hidden"
              itemClassName="min-w-[min(320px,80vw)] max-w-[min(380px,85vw)]"
              renderItem={(portal) => (
                <article className={`group relative flex h-[500px] md:h-[550px] flex-col justify-between overflow-hidden rounded-[2.8rem] border border-white/15 bg-gradient-to-br ${portal.gradient} p-10 md:p-12 transition-transform duration-500 ease-out hover:-translate-y-1.5`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.24),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-15" />

                  <div className="relative z-10">
                    <span className="text-xs uppercase tracking-[0.4em] text-white/70">{portal.theme}</span>
                    <h3 className="mt-5 font-bella-queta text-3xl text-white">{portal.name}</h3>
                    <p className="mt-5 text-sm leading-relaxed text-white/85">{portal.summary}</p>
                  </div>

                  <button
                    onClick={() => triggerTransition(portal.href)}
                    className="relative z-10 mt-10 inline-flex items-center gap-3 self-start rounded-full border border-white/40 px-6 py-3 text-xs uppercase tracking-[0.4em] text-white transition hover:border-white hover:bg-white/10"
                  >
                    Enter Story
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </article>
              )}
            />
          </div>
        </section>

        {/* Audio & visual note */}
        <section className="mt-24 grid gap-8 lg:grid-cols-[1fr_380px] lg:items-center">
          <div className="rounded-[2.5rem] border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-600">Immersive Design</p>
            <h2 className="mt-3 font-bella-queta text-3xl md:text-4xl text-gray-800">Sound, light, and motion</h2>
            <p className="mt-4 text-sm text-gray-700 md:text-base">
              Every narrative uses scroll-triggered audio, gradient-driven atmospheres, and particle systems tuned to its emotional arc.
              Custom cues—cold piano chords, club pulses, shattering glass, and gentle heartbeats fade in as you
              progress.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#ffd54f]" />
                Blair: maximalist gradients shift from black cosmos to club neon and hopeful golds.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#81d4fa]" />
                Elijah: deep blues pulse with city noise, then open to sea foam turquoise and sunrise amber.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#c5e1a5]" />
                Lala: cathedral ambers slide into scarlet confessionals before softening into botanical greens.
              </li>
            </ul>
          </div>

        </section>

        {/* Supporting resources */}
        <section className="mt-24 space-y-10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-600">Extend Each Narrative</p>
            <h2 className="mt-3 font-bella-queta text-3xl md:text-4xl text-gray-800">Supporting Chapters</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {RESOURCE_LINKS.map((resource) => (
              <TransitionLink
                key={resource.href}
                href={resource.href}
                className={`group relative overflow-hidden rounded-[2.6rem] border border-white/15 bg-gradient-to-br ${resource.gradient} p-8 shadow-[0_24px_60px_rgba(5,11,34,0.45)] transition-transform duration-500 hover:-translate-y-1`}
              >
                <div className="absolute inset-0 bg-white/12 opacity-0 transition duration-500 group-hover:opacity-20" />
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/70">Resource</p>
                  <h3 className="mt-4 font-bella-queta text-3xl text-white">{resource.title}</h3>
                  <p className="mt-3 text-sm text-white/85">{resource.subtitle}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-white">
                    Open
                    <svg className="h-3.5 w-3.5 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </TransitionLink>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}

