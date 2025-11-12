'use client'

import Navigation from '@/components/Navigation'
import ScrollSnapCarousel from '@/components/ScrollSnapCarousel'
import StoryVideo from '@/components/StoryVideo'
import { LightboxImage } from '@/components/ImageLightbox'

interface DreamHome {
  id: string
  subject: string
  title: string
  description: string
  images: string[]
  palette: string[]
  video?: string
}

const DREAM_HOMES: DreamHome[] = [
  {
    id: 'blair-dream',
    subject: 'Blair',
    title: 'Maximalist Sanctuary',
    description:
      'Color, texture, and found objects collide. Blair&apos;s dream is a layered apartment that rejects minimalism and celebrates the people she lets in.',
    images: ['/stories-assets/FOR BLAIR.jpg', '/stories-assets/FOR BLAIR 2.jpg'],
    palette: ['#893172', '#FF8C42', '#213885', '#ECDFD2'],
    video: '/videos/blair-dream-home.mp4',
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
    video: '/videos/elijah-dream-home.mp4',
  },
  {
    id: 'lala-dream',
    subject: 'Lala',
    title: 'Private Sanctuary',
    description:
      'Lala&apos;s dream condo is soft green and gold by day, deep charcoal at night. It&apos;s a place where she can close the door and be wholly herself.',
    images: [
      '/stories-assets/FOR LALA 2.webp',
      '/stories-assets/FOR LALA 3.webp',
      '/stories-assets/FOR LALA 4.webp',
    ],
    palette: ['#081849', '#213885', '#5F3475', '#ECDFD2'],
    video: '/videos/lala-dream-home.mp4',
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
            <p className="mx-auto mt-3 text-xs text-white/50">
              3D Renders by Julian Beatriz Vargas
            </p>
          </div>

          <ScrollSnapCarousel
            ariaLabel="Dream home highlights"
            items={DREAM_HOMES}
            itemClassName="min-w-[min(400px,85vw)]"
            renderItem={(home, _index, isActive) => (
              <article className="group h-full overflow-hidden rounded-xl border border-white/20 bg-white/12 shadow-[0_16px_40px_rgba(8,12,40,0.3)] backdrop-blur">
                <header className="border-b border-white/15 bg-white/10 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/55">
                    {home.subject}&rsquo;s Vision
                  </p>
                  <h3 className="mt-1 font-bella-queta text-lg text-white">{home.title}</h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-white/70">{home.description}</p>
                  <div className="mt-2.5 flex items-center gap-1.5">
                    {home.palette.map((color) => (
                      <span
                        key={color}
                        className="h-4 w-4 rounded-full border border-white/40 shadow"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </header>

                <div className="flex flex-col gap-3 p-4">
                  {/* Big 3D Render Video */}
                  {home.video && (
                    <div className="w-full">
                      <div className="mb-2 flex items-center justify-between">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                          3D Render
                        </p>
                        <p className="text-[10px] text-white/50">
                          by Julian Beatriz Vargas
                        </p>
                      </div>
                      <div className="w-full">
                        <StoryVideo
                          src={home.video}
                          controls
                          loop
                          className="shadow-xl w-full"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Small Static Images Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {home.images.map((image, idx) => (
                      <div key={image} className="relative w-full" style={{ aspectRatio: '4/3' }}>
                        <LightboxImage
                          src={image}
                          alt={`${home.subject} dream home ${idx + 1}`}
                          description={`${home.subject}&apos;s dream home visualization - ${home.title}`}
                          className="h-full w-full"
                          sizes="(max-width: 768px) 40vw, 180px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            )}
          />
        </section>
      </main>
    </div>
  )
}

