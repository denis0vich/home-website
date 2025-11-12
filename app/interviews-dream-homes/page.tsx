'use client'

import Navigation from '@/components/Navigation'
import ScrollSnapCarousel from '@/components/ScrollSnapCarousel'
import Image from 'next/image'

interface DreamHome {
  id: string
  subject: string
  title: string
  description: string
  images: string[]
  palette: string[]
}

const DREAM_HOMES: DreamHome[] = [
  {
    id: 'blair-dream',
    subject: 'Blair',
    title: 'Maximalist Sanctuary',
    description:
      'Color, texture, and found objects collide. Blair’s dream is a layered apartment that rejects minimalism and celebrates the people she lets in.',
    images: ['/stories-assets/FOR BLAIR.jpg', '/stories-assets/FOR BLAIR 2.jpg'],
    palette: ['#893172', '#FF8C42', '#213885', '#ECDFD2'],
  },
  {
    id: 'elijah-dream',
    subject: 'Elijah',
    title: 'Minimalist Retreat',
    description:
      'A white-on-white refuge with gentle blues and soft shadows. Elijah imagines a studio where morning light and silence are the primary materials.',
    images: [
      '/stories-assets/FOR ETHAN.jpg',
      '/stories-assets/FOR ETHAN(1).jpg',
      '/stories-assets/FOR ETHAN(2).jpg',
    ],
    palette: ['#ECDFD2', '#CCCACC', '#5F3475', '#213885'],
  },
  {
    id: 'lala-dream',
    subject: 'Lala',
    title: 'Private Sanctuary',
    description:
      'Lala’s dream condo is soft green and gold by day, deep charcoal at night. It’s a place where she can close the door and be wholly herself.',
    images: [
      '/stories-assets/FOR LALA 2.webp',
      '/stories-assets/FOR LALA 3.webp',
      '/stories-assets/FOR LALA 4.webp',
    ],
    palette: ['#081849', '#213885', '#5F3475', '#ECDFD2'],
  },
]

export default function InterviewsDreamHomesPage() {

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#081849] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_120%_at_0%_0%,rgba(137,49,114,0.25),rgba(8,24,73,0.85))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_95%_0%,rgba(33,56,133,0.35),rgba(8,24,73,0.85))]" />

      <Navigation />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-36 pb-24">
        <header className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/55">
            Visualizations
          </p>
          <h1 className="mb-4 font-bella-queta text-5xl md:text-6xl lg:text-7xl">
            Dream Homes
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white/75 md:text-xl">
            Drift through the imagined rooms rendered in light, palette, and texture.
          </p>
        </header>

        <section className="mt-16 space-y-16">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-white/55">Rendered Intentions</p>
            <h2 className="mt-3 font-bella-queta text-3xl md:text-4xl">Dream Home Showcases</h2>
            <p className="mx-auto mt-4 max-w-3xl text-white/70">
              Each visualization is a collaborative translation of stories into light, texture,
              and layout. Glide through the renderings and notice how the palette echoes the subject's
              psychological needs.
            </p>
          </div>

          <ScrollSnapCarousel
            ariaLabel="Dream home highlights"
            items={DREAM_HOMES}
            itemClassName="min-w-[min(420px,85vw)]"
            renderItem={(home, _index, isActive) => (
              <article className="group h-full overflow-hidden rounded-[2.6rem] border border-white/20 bg-white/12 shadow-[0_28px_60px_rgba(8,12,40,0.4)] backdrop-blur">
                <header className="border-b border-white/15 bg-white/10 px-7 py-6">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/55">
                    {home.subject}&rsquo;s Vision
                  </p>
                  <h3 className="mt-2 font-bella-queta text-2xl text-white">{home.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{home.description}</p>
                  <div className="mt-4 flex items-center gap-2">
                    {home.palette.map((color) => (
                      <span
                        key={color}
                        className="h-6 w-6 rounded-full border border-white/40 shadow"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </header>

                <div className="grid gap-4 p-7">
                  {home.images.map((image, idx) => (
                    <figure
                      key={image}
                      className="relative h-56 overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-lg"
                    >
                      <Image
                        src={image}
                        alt={`${home.subject} dream home ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 80vw, 420px"
                        unoptimized
                      />
                    </figure>
                  ))}
                </div>

                <footer
                  className={`px-7 pb-7 ${
                    isActive ? 'opacity-100' : 'opacity-70'
                  } text-xs uppercase tracking-[0.4em] text-white/45 transition`}
                >
                  Swipe or use the arrows to explore the full dream.
                </footer>
              </article>
            )}
          />
        </section>
      </main>
    </div>
  )
}

