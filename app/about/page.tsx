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
      'Document and narrativize the emotional architecture of the Filipino home—moving past square footage to reveal how memory, aspiration, and routine shape belonging.',
  },
  {
    title: 'Vision',
    body:
      'Build a digital sanctuary where “home” is defined by peace, autonomy, and emotional stability. The Haven invites shared vulnerability so we can design futures together.',
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
            The Haven is a living archive of dream homes imagined by Gen Z in Metro Manila. We weave
            together journalism, creative nonfiction, and experiential design to honor how young people seek
            safety, autonomy, and gentleness in the spaces they inhabit.
          </p>
        </header>

        <section className="mt-16 grid gap-8 md:grid-cols-[1.4fr_0.8fr]">
          <article className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-[0_20px_50px_rgba(137,49,114,0.12)] backdrop-blur">
            <h2 className="font-bella-queta text-3xl text-[#081849]">Project Overview</h2>
            <div className="mt-5 space-y-4 text-[#2f2f3a]/85">
              <p>
                The Haven builds a community of dreamers where anyone can imagine their own sanctuary. It is an
                ongoing digital space that collects testimony, design insight, and emotional artifacts so readers can
                see themselves reflected and feel less alone in the process of building a home.
              </p>
              <p>
                Conceived by Communication Arts students Anne Nicole Zambrano and Kirsten Jewel Garcia, the project
                merges rigorous research with sensorial storytelling. Each narrative is paired with expert guidance so
                that the dream feels actionable.
              </p>
              <p>
                We believe that documenting the dream makes the future tangible. By archiving how a generation
                defines safety and belonging, The Haven invites readers to co-design what comes next.
              </p>
            </div>
          </article>

          <aside className="grid gap-4 rounded-3xl border border-white/35 bg-white/65 p-6 text-sm text-[#2f2f3a]/75 shadow-[0_16px_40px_rgba(33,56,133,0.14)] backdrop-blur">
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
          <h2 className="mt-3 font-bella-queta text-3xl text-[#081849]">Dive deeper into the thesis</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#2f2f3a]/80">
            Explore the full production blueprint—frameworks, methodologies, and advisory voices—in the project hub.
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

