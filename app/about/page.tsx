'use client'

import Image from 'next/image'
import Navigation from '@/components/Navigation'
import TransitionLink from '@/components/TransitionLink'

const TEAM = [
  {
    name: 'Anne Nicole Zambrano',
    role: 'Communication Arts · De La Salle University',
    photo: '/about/Anne Nicole Zambrano.jpeg',
  },
  {
    name: 'Kirsten Jewel Garcia',
    role: 'Communication Arts · De La Salle University',
    photo: '/about/Jewel Garcia.png',
  },
]

const VALUES = [
  {
    title: 'Mission',
    body:
      'To listen, to narrate, and to reveal how Filipinos build homes through imagination before they build them in the world, uncovering the hopes, pressures, and social realities that guide these dreams. Through these stories, The Haven seeks to spark awareness and inspire futures where belonging is possible for everyone.',
  },
  {
    title: 'Vision',
    body:
      'The Haven builds a community of dreamers where anyone, no matter their background, can imagine their own dream home. It starts with a digital space that collects and shares these stories, creating a place where people can see themselves, connect through their experiences, and find inspiration in the way others define home.',
  },
]

const TIMELINE = [
  { label: 'Conceptualized', value: 'June 2025' },
  { label: 'Published', value: 'November 2025' },
  { label: 'Discipline', value: 'Production Thesis · Communication Arts' },
]

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#ECDFD2] text-[#111827]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_5%_0%,rgba(33,56,133,0.18),rgba(236,223,210,0))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_95%_-10%,rgba(137,49,114,0.18),rgba(236,223,210,0))]" />

      <Navigation />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-40 pb-24">
        <header className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#5F3475]">
            Production Thesis · De La Salle University
          </p>
          <h1 className="mb-4 font-bella-queta text-5xl md:text-6xl lg:text-7xl text-[#081849]">
            About The Haven
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[#2f2f3a]/80 md:text-xl">
            The Haven is a living archive of dream homes imagined by Gen Z in Metro Manila.
          </p>
        </header>

        <section className="mt-16">
          <aside className="grid gap-4 rounded-3xl border border-white/35 bg-white/65 p-6 text-sm text-[#2f2f3a]/75 shadow-[0_16px_40px_rgba(33,56,133,0.14)] backdrop-blur max-w-2xl mx-auto">
            {TIMELINE.map((entry) => (
              <div key={entry.label} className="rounded-2xl border border-white/40 bg-white/70 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-[#5F3475]">{entry.label}</p>
                <p className="mt-2 font-bella-queta text-lg text-[#081849]">{entry.value}</p>
              </div>
            ))}
          </aside>
        </section>

        <section className="mt-20 rounded-3xl border border-white/35 bg-white/60 p-8 shadow-[0_24px_50px_rgba(33,56,133,0.16)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.35em] text-[#5F3475]">Team</p>
          <h2 className="mt-3 font-bella-queta text-3xl text-[#081849]">The people behind The Haven</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center gap-4 rounded-2xl border border-white/40 bg-white/75 p-6 text-center shadow-[0_16px_35px_rgba(8,24,73,0.12)]"
              >
                <div className="relative h-36 w-36 overflow-hidden rounded-2xl border border-white/40">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-bella-queta text-xl text-[#081849]">{member.name}</p>
                  <p className="mt-2 text-sm text-[#2f2f3a]/75">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-2">
          {VALUES.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-[0_18px_40px_rgba(137,49,114,0.14)] backdrop-blur"
            >
              <h3 className="font-bella-queta text-3xl text-[#081849]">{item.title}</h3>
              <p className="mt-4 text-[#2f2f3a]/80">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-24 rounded-3xl border border-white/35 bg-white/55 p-8 text-center shadow-[0_24px_60px_rgba(8,24,73,0.2)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.35em] text-[#5F3475]">Next step</p>
          <h2 className="font-bella-queta text-3xl text-[#081849]">Dive deeper into The Haven</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#2f2f3a]/80">
            Trace the lines that bring your future home to life.
          </p>
          <TransitionLink
            href="/about-the-project"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#5F3475]/30 bg-[#5F3475]/20 px-6 py-3 text-xs uppercase tracking-[0.4em] text-[#5F3475] transition hover:bg-[#5F3475]/30"
          >
            Learn more about the project
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
        </section>
      </main>
    </div>
  )
}

