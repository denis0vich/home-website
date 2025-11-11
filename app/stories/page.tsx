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
    title: 'Interviews & Dream Homes',
    subtitle: 'Audio portraits with ambient renderings',
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
    <div className="relative min-h-screen overflow-x-hidden bg-[#050b22] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(140%_120%_at_10%_5%,rgba(137,49,114,0.42),rgba(5,11,34,0.92))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_95%_0%,rgba(33,56,133,0.45),rgba(5,11,34,0.9))]" />

      <Navigation />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-40 pb-24">
        <header className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-white/55">Story Collection</p>
          <h1 className="mb-5 font-bella-queta text-5xl md:text-6xl lg:text-7xl">Stories</h1>
          <p className="mx-auto max-w-3xl text-lg text-white/75 md:text-xl">
            The Haven’s core narratives live here. Walk through the emotional architecture of Blair,
            Elijah, and Lala—then extend each story through expert insight, interviews, and dream home
            visualizations.
          </p>
        </header>

        <section className="mt-16 rounded-3xl border border-white/15 bg-white/10 p-8 shadow-[0_28px_70px_rgba(5,11,34,0.45)] backdrop-blur">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">
              Scroll inside · tap a card to enter
            </p>
            <h2 className="mt-3 font-bella-queta text-3xl md:text-4xl">Narrative Portals</h2>
          </div>

          <div className="mt-10">
            <ScrollSnapCarousel
              ariaLabel="Story portals"
              items={STORY_PORTALS}
              renderItem={(portal) => (
                <article
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.6rem] border border-white/15 bg-gradient-to-br ${portal.gradient} p-8`}
                >
                  <div className="relative z-10">
                    <span className="text-xs uppercase tracking-[0.4em] text-white/70">
                      {portal.theme}
                    </span>
                    <h3 className="mt-4 font-bella-queta text-3xl text-white">{portal.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/85">
                      {portal.summary}
                    </p>
                  </div>
                  <button
                    onClick={() => triggerTransition(portal.href)}
                    className="relative z-10 mt-8 inline-flex items-center gap-3 self-start rounded-full border border-white/40 px-6 py-3 text-xs uppercase tracking-[0.4em] text-white transition hover:border-white hover:bg-white/10"
                  >
                    Enter Story
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
                  </button>
                  <div className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-15" />
                </article>
              )}
            />
          </div>
        </section>

        <section className="mt-24 space-y-10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-white/55">
              Extend Each Narrative
            </p>
            <h2 className="mt-3 font-bella-queta text-3xl md:text-4xl">
              Supporting Chapters
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {RESOURCE_LINKS.map((resource) => (
              <TransitionLink
                key={resource.href}
                href={resource.href}
                className={`group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br ${resource.gradient} p-8 shadow-[0_24px_60px_rgba(5,11,34,0.45)] transition transform-gpu hover:-translate-y-1`}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/70">Resource</p>
                  <h3 className="mt-4 font-bella-queta text-3xl text-white">{resource.title}</h3>
                  <p className="mt-3 text-sm text-white/85">{resource.subtitle}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-white">
                    Open
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
        </section>

        <section className="mt-24 rounded-3xl border border-white/15 bg-white/10 p-8 shadow-[0_24px_70px_rgba(5,11,34,0.4)] backdrop-blur">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-white/55">
              How to Navigate
            </p>
            <h2 className="mt-3 font-bella-queta text-3xl md:text-4xl">A reader’s flow</h2>
          </div>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Choose a story portal',
                body:
                  'Begin with Blair, Elijah, or Lala. Scroll or tap into the narrative that resonates today.',
              },
              {
                step: '02',
                title: 'Listen & visualize',
                body:
                  'Pair each story with its interview and dream home showcase for a sensory reading experience.',
              },
              {
                step: '03',
                title: 'Reflect with experts',
                body:
                  'Visit Professional Insights to see how design, engineering, and psychology interpret the needs revealed.',
              },
            ].map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/12 p-6 text-sm leading-relaxed text-white/75"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-white/55">
                  Step {item.step}
                </p>
                <h3 className="mt-3 font-bella-queta text-xl text-white">{item.title}</h3>
                <p className="mt-3">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

