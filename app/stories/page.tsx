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

const FLOW_STEPS = [
  {
    step: '01',
    title: 'Choose a story portal',
    body: 'Begin with Blair, Elijah, or Lala. Scroll or tap into the narrative that resonates today.',
  },
  {
    step: '02',
    title: 'Listen & visualize',
    body: 'Pair each story with its interview and dream home showcase for a sensory reading experience.',
  },
  {
    step: '03',
    title: 'Reflect with experts',
    body: 'Visit Professional Insights to see how design, engineering, and psychology interpret the needs revealed.',
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
    <div className="relative min-h-screen overflow-hidden bg-[#050b22] text-white">
      {/* Global atmospheric layers */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(160%_140%_at_8%_-20%,rgba(137,49,114,0.45),rgba(5,11,34,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(140%_140%_at_92%_-10%,rgba(33,56,133,0.42),rgba(5,11,34,0.9))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(236,223,210,0.18)_0%,rgba(8,24,73,0.72)_55%,rgba(5,11,34,0.95)_100%)] mix-blend-soft-light" />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_55%)]" />
        <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_80%_15%,rgba(255,169,224,0.18),transparent_58%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_40%)]" />
      </div>

      <Navigation />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-40 pb-28">
        {/* Hero */}
        <section className="text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-2 text-xs uppercase tracking-[0.45em] text-white/70 backdrop-blur">
            <span>Story Collection</span>
          </div>
          <h1 className="mt-6 font-bella-queta text-5xl md:text-6xl lg:text-7xl">
            Stories That Build Sanctuary
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 md:text-xl">
            Enter the immersive trilogy of Blair, Elijah, and Lala—three dream homes imagined from
            trauma, longing, and faith. Each portal leads to scroll-triggered soundscapes, particle-driven
            atmospheres, and companion interviews that extend their worlds.
          </p>
        </section>

        {/* Narrative portals */}
        <section className="relative mt-20 rounded-[2.75rem] border border-white/12 bg-white/8 p-10 shadow-[0_30px_120px_rgba(5,11,34,0.55)] backdrop-blur">
          <div className="pointer-events-none absolute -top-24 right-10 hidden h-[220px] w-[220px] rotate-12 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22),transparent_65%)] blur-3xl md:block" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 hidden h-[220px] w-[220px] -rotate-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_65%)] blur-3xl md:block" />

          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Scroll inside · tap a card to enter</p>
            <h2 className="mt-3 font-bella-queta text-3xl md:text-4xl">Narrative Portals</h2>
          </div>

          <div className="mt-12">
            <ScrollSnapCarousel
              ariaLabel="Story portals"
              items={STORY_PORTALS}
              renderItem={(portal) => (
                <article className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.8rem] border border-white/15 bg-gradient-to-br ${portal.gradient} p-9 shadow-[0_24px_60px_rgba(5,11,34,0.6)] transition-transform duration-500 ease-out hover:-translate-y-1.5`}>
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
          <div className="rounded-[2.5rem] border border-white/15 bg-white/10 p-8 shadow-[0_24px_70px_rgba(5,11,34,0.45)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.4em] text-white/55">Immersive Design</p>
            <h2 className="mt-3 font-bella-queta text-3xl md:text-4xl">Sound, light, and motion</h2>
            <p className="mt-4 text-sm text-white/80 md:text-base">
              Every narrative uses scroll-triggered audio, gradient-driven atmospheres, and particle systems tuned to its emotional arc.
              Enable sound to hear custom cues—cold piano chords, club pulses, shattering glass, and gentle heartbeats fade in as you
              progress.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
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

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 p-8 text-sm text-white/80 shadow-[0_24px_70px_rgba(5,11,34,0.45)] backdrop-blur">
            <div className="pointer-events-none absolute -right-16 top-1/2 hidden h-60 w-60 -translate-y-1/2 rotate-12 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_60%)] blur-3xl lg:block" />
            <p className="text-xs uppercase tracking-[0.4em] text-white/55">When visiting a story</p>
            <ul className="mt-5 space-y-4">
              <li>
                <span className="font-semibold text-white">Enable sound</span> using the floating toggle on first entry.
              </li>
              <li>
                <span className="font-semibold text-white">Scroll steadily</span>—animations and audio cues are tied to intersection thresholds.
              </li>
              <li>
                <span className="font-semibold text-white">Tap images</span> to open the lightbox, and follow portal prompts to explore interviews and dream homes.
              </li>
            </ul>
          </div>
        </section>

        {/* Supporting resources */}
        <section className="mt-24 space-y-10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-white/55">Extend Each Narrative</p>
            <h2 className="mt-3 font-bella-queta text-3xl md:text-4xl">Supporting Chapters</h2>
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

        {/* Reader flow */}
        <section className="mt-24 rounded-[2.75rem] border border-white/12 bg-white/8 p-10 shadow-[0_24px_90px_rgba(5,11,34,0.45)] backdrop-blur">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-white/55">How to Navigate</p>
            <h2 className="mt-3 font-bella-queta text-3xl md:text-4xl">A Reader’s Flow</h2>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {FLOW_STEPS.map((item) => (
              <li key={item.step} className="rounded-2xl border border-white/10 bg-white/12 p-6 text-sm leading-relaxed text-white/75">
                <p className="text-xs uppercase tracking-[0.4em] text-white/55">Step {item.step}</p>
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

