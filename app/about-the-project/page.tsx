'use client'

import Navigation from '@/components/Navigation'
import TransitionLink from '@/components/TransitionLink'

const HIGHLIGHTS = [
  {
    eyebrow: 'Abstract',
    title: 'Dream homes as emotional architecture',
    copy: [
      'This production thesis explores how Generation Z in Metro Manila conceptualizes the “dream home” as a sanctuary for liberation, healing, and identity.',
      'Rather than treating housing purely as economics or aesthetics, the project maps lived experiences and aspirational ideals into multimedia storytelling. Each article, interview, and visual treatment is designed for digital-native readers who expect interactivity and depth.',
    ],
  },
  {
    eyebrow: 'Design Intent',
    title: 'A multimedia magazine for digital natives',
    copy: [
      'The Haven is a web-native magazine crafted to feel tactile, cinematic, and deeply human. Animation, ambient audio, and scroll-based reveals amplify the internal worlds we document.',
      'Our north star: honor every testimony with a container that is as intentional as the design choices we advocate for.',
    ],
  },
]

const FRAMEWORKS = [
  {
    name: 'Affordance Theory',
    attribution: 'Gibson · Norman',
    description:
      'Guides how the interface invites participation. Every interaction is designed to make the reader feel that “dreaming” is something they can do actively, not passively consume.',
  },
  {
    name: 'Sense of Place',
    attribution: 'Dai & Liu · Raymond et al.',
    description:
      'Illuminates how memories, trauma, and aspiration transform a structure into “home.” The framework informs both narrative structure and visual storytelling.',
  },
]

const PARTICIPANTS = [
  {
    name: 'Blair',
    age: '21',
    theme: 'Abuse · Repressed Personal Identity',
  },
  {
    name: 'Lala',
    age: '22',
    theme: 'Religion · Homophobia',
  },
  {
    name: 'Elijah',
    age: '20',
    theme: 'Mental Health · Financial Precarity',
  },
]

const EXPERTS = [
  'Engr. John Kelly Josue · Civil Engineer & Project Manager',
  'Arch. Tanya Kriselle S. Chua · Architect',
  'Interior Designer Lucia Da Silva · SoFA Design Institute',
  'Psychometrician Gabrielle B. Zambrano · Guidance Counselor',
]

const AUTHORS = [
  {
    name: 'Kirsten Jewel C. Garcia',
    role: 'Bachelor of Arts · Communication Arts',
  },
  {
    name: 'Anne Nicole B. Zambrano',
    role: 'Bachelor of Arts · Communication Arts',
  },
]

const STORY_LINKS = [
  {
    name: 'Blair',
    subtitle: 'The Architecture of Moving',
    href: '/stories/blair',
    gradient: 'from-[#000000] via-[#893172] to-[#ECDFD2]',
  },
  {
    name: 'Lala',
    subtitle: 'The Sculpture of Faith',
    href: '/stories/lala',
    gradient: 'from-[#5F3475] via-[#893172] to-[#213885]',
  },
  {
    name: 'Elijah',
    subtitle: 'The Vantage Point',
    href: '/stories/elijah',
    gradient: 'from-[#213885] via-[#081849] to-[#5F3475]',
  },
]

export default function AboutTheProjectPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#ECDFD2] text-[#111827]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_10%_5%,rgba(33,56,133,0.12),rgba(236,223,210,0))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_65%_at_90%_10%,rgba(137,49,114,0.12),rgba(236,223,210,0))]" />

      <Navigation />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-36 pb-24">
        <header className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#5F3475]">
            Production Thesis · DLSU Manila · 2025
          </p>
          <h1 className="mb-4 font-bella-queta text-5xl md:text-6xl lg:text-7xl text-[#081849]">
            About The Project
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[#2f2f3a]/80 md:text-xl">
            Generation Z’s conceptualization of the dream home told through creative nonfiction,
            expert insight, and interactive design. The Haven is a living archive of what comfort,
            privacy, and aspiration mean when you are negotiating adulthood in Metro Manila.
          </p>
        </header>

        <section className="mt-16 grid gap-8 md:grid-cols-2">
          {HIGHLIGHTS.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-white/35 bg-white/70 p-8 shadow-[0_20px_50px_rgba(137,49,114,0.12)] backdrop-blur"
            >
              <span className="text-xs uppercase tracking-[0.4em] text-[#5F3475]">
                {section.eyebrow}
              </span>
              <h2 className="mt-3 font-bella-queta text-3xl text-[#081849]">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4 text-[#2f2f3a]/85">
                {section.copy.map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-20 rounded-3xl border border-white/35 bg-white/60 p-8 shadow-[0_16px_45px_rgba(33,56,133,0.12)] backdrop-blur">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#5F3475]">Guiding Theories</p>
            <h2 className="mt-3 font-bella-queta text-3xl text-[#081849]">
              Theoretical Framework
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {FRAMEWORKS.map((framework) => (
              <div
                key={framework.name}
                className="rounded-2xl border border-white/40 bg-white/70 p-6 shadow-[0_12px_30px_rgba(8,24,73,0.08)]"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-bella-queta text-2xl text-[#081849]">
                    {framework.name}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.3em] text-[#5F3475]">
                    {framework.attribution}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#2f2f3a]/80">
                  {framework.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-white/30 bg-white/65 p-8 shadow-[0_20px_40px_rgba(8,24,73,0.15)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.35em] text-[#5F3475]">Methodology</p>
            <h2 className="mt-3 font-bella-queta text-3xl text-[#081849]">
              Three lives, three in-depth interviews
            </h2>
            <p className="mt-4 text-[#2f2f3a]/80">
              We conducted purposive interviews (45–60 minutes) via Zoom with Gen Z individuals
              whose home lives reflect the spectrum of instability, ritual, and identity work present
              in the Philippines today.
            </p>

            <ul className="mt-6 grid gap-4 rounded-2xl border border-white/40 bg-white/70 p-6 text-sm text-[#2f2f3a]/90 md:grid-cols-3">
              {PARTICIPANTS.map((participant) => (
                <li key={participant.name}>
                  <p className="font-bella-queta text-lg text-[#081849]">
                    {participant.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#5F3475]">
                    {participant.age} · Gen Z
                  </p>
                  <p className="mt-2 leading-relaxed">{participant.theme}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-white/35 bg-white/75 p-6 text-sm leading-relaxed text-[#2f2f3a]/80">
              Each creative nonfiction story is paired with expert commentary from civil engineering,
              architecture, interior design, and psychology professionals to ground emotional needs in
              actionable design insights.
            </div>
          </article>

          <aside className="rounded-3xl border border-white/30 bg-white/60 p-8 shadow-[0_20px_40px_rgba(137,49,114,0.18)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.35em] text-[#5F3475]">Expert Board</p>
            <h3 className="mt-3 font-bella-queta text-2xl text-[#081849]">Advisory Voices</h3>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-[#2f2f3a]/80">
              {EXPERTS.map((expert) => (
                <li key={expert}>{expert}</li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-white/40 bg-white/70 p-6 text-sm text-[#2f2f3a]/80">
              <p className="font-bella-queta text-lg text-[#081849]">Authors</p>
              <ul className="mt-3 space-y-3">
                {AUTHORS.map((author) => (
                  <li key={author.name}>
                    <p className="text-[#081849] font-medium">{author.name}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#5F3475]">
                      {author.role}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#5F3475]/70">
                College of Liberal Arts · Term 3 · AY 2024-2025
              </p>
            </div>
          </aside>
        </section>

        <section className="mt-24 rounded-3xl border border-white/35 bg-white/55 p-8 shadow-[0_18px_35px_rgba(8,24,73,0.25)] backdrop-blur">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#5F3475]">Explore</p>
            <h2 className="mt-3 font-bella-queta text-3xl text-[#081849]">
              Step through each narrative portal
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#2f2f3a]/80">
              Follow Blair, Lala, and Elijah as they translate pain, devotion, and longing into
              architecture. Every story is designed to be read alongside the corresponding audio and
              dream home visualizations.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STORY_LINKS.map((story) => (
              <TransitionLink
                key={story.name}
                href={story.href}
                className={`group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br ${story.gradient} p-8 shadow-[0_16px_35px_rgba(8,24,73,0.3)] transition transform-gpu hover:-translate-y-1`}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.35em] text-white/70">Story</p>
                  <h3 className="mt-4 font-bella-queta text-3xl text-white">{story.name}</h3>
                  <p className="mt-3 text-sm text-white/85">{story.subtitle}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-white">
                    Enter Story
                    <svg
                      className="h-4 w-4 transition group-hover:translate-x-1"
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
      </main>
    </div>
  )
}


