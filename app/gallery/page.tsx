'use client'

import Navigation from '@/components/Navigation'
import ScrollSnapCarousel from '@/components/ScrollSnapCarousel'
import StoryVideo from '@/components/StoryVideo'
import TransitionLink from '@/components/TransitionLink'
import { LightboxImage } from '@/components/ImageLightbox'
import { useCallback, useState } from 'react'

const FEELS_LIKE_HOME_ITEMS = Array.from({ length: 8 }, (_, idx) => ({
  id: idx + 1,
  src: `/gallery/feels-like-home/${idx + 1}.png`,
  alt: `Feels like home portrait ${idx + 1}`,
}))

const GALLERY_CAPTIONS = [
  "This three-story house in Quezon City uses height for privacy, keeping family life separated and quiet from the street.",
  "This white kitchen in Rizal uses white and wood cabinets to create a clean, comfortable cooking space.",
  "This all-white room in Quezon provides a blank slate designed for quiet focus and personal ideas.",
  "This single-story home in Parañaque provides easy access and flow, connecting all rooms on one level.",
  "This condo living room in Quezon uses bright orange to feel energetic and unique, showing the owner's style.",
  "These modern apartments in Cavite use wood and lighting to create a calm, lit-up refuge at night.",
  "This modern house in Quezon uses glass walls to connect the indoor space to the pool's calming view.",
  "This modern dining room in Cavite uses an all-white theme to make food and conversation the main focus.",
  "This living room in Parañaque uses black furniture and blinds to create a dark, private place to relax.",
  "This outdoor seating area in Cavite uses wooden touches to create a spot for relaxing together and connecting outside.",
  "This wooden house in Cavite uses wood and small lights to give a strong feeling of warmth and security.",
  "This two-story house in Cavite provides a modern, beige exterior that looks stable and simple.",
  "These airy apartments in Cavite feel open and bright in the daytime, welcoming the morning light.",
  "This apartment complex in Sta. Mesa uses small windows and no balconies to keep the building private and secure.",
  "This internal courtyard in Sta. Mesa makes the area feel tight and enclosed due to the tall walls limiting air.",
  "This apartment building in BGC provides big windows that connect residents directly to city life.",
  "This apartment building in Sta. Mesa uses small windows that make the space strictly functional over scenic.",
  "This gated house in Pandacan provides a strong gate and many plants to be both safe and full of life.",
  "This gated house in Pandacan uses an outdoor altar to make faith a visible part of the home.",
  "This Brutalist apartment in Pandacan uses heavy concrete to feel strong and secure, prioritizing durability.",
  "This townhouse design in Pandacan provides many separate, compact homes attached within one larger building.",
  "This home in Pandacan uses red gates and no ground-floor windows to ensure maximum privacy and street-level security.",
  "This home in Pandacan provides fences for security, but bright decorations show personality shining through.",
  "This house in Pandacan uses bright, unusual colors to make it stand out and show bold personal style.",
  "This home's hidden location in Pandacan makes an extremely private atmosphere, away from the neighborhood's noise.",
  "This street view in Pandacan shows the community is tightly packed, with busy, overlapping lives.",
  "This classic Filipino style house in Pandacan is painted blue and gives a feeling of history and tradition.",
  "This classic house in Pandacan uses no ground-floor windows and many plants to create a private, green escape.",
  "This four-story apartment in Pandacan uses fenced windows and no terraces to maximize secure living space.",
  "This two-story house in Pandacan uses fenced windows and no ground-floor windows to make the home a secure vault.",
  "This three-story house in Pandacan provides fences and gates to confirm it is highly secured.",
  "This condo skyscraper in Makati provides a tall, quiet view that is far away from the street noise and crowds.",
  "This glass building in BGC overlooks a park to offer city life with a beautiful view of nature.",
  "This condo's view in BGC is mostly of other towers, defining a life lived among high-rise buildings.",
  "This apartment in BGC provides a balcony and view of trees to create a balanced city life with fresh air.",
  "This apartment's location in BGC is close to trees which act as a natural break that calms the city environment.",
  "This apartment in BGC provides a large balcony making private outdoor living a key luxury feature of the home.",
  "This beach house in Batangas uses big windows and balconies facing the sea for escape and enjoying nature.",
  "This condo in Pasay provides a view of the clean, large pool, giving the space a resort-like feel inside the city.",
  "This subdivision in Nueva Ecija provides a large park and space between homes designed for stress-free family life.",
]

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, idx) => start + idx)

const GALLERY_GROUPS = [
  {
    id: 'sanctuary',
    title: 'Sanctuary Within Walls',
    description:
      'We begin inside: quiet kitchens, open living rooms, and carefully lit corners where daily rituals breathe. Each frame is tender evidence that comfort can be curated, even when space is tight.',
    items: range(1, 10),
  },
  {
    id: 'community',
    title: 'Communities After Dark',
    description:
      'Step outside into streets and courtyards awash with sodium lights. These homes glow against the night, holding families close and turning watchfulness into an act of care.',
    items: range(11, 20),
  },
  {
    id: 'guarded',
    title: 'Guarded Thresholds',
    description:
      'Walls, gates, and bold colors tell stories about protection and identity. Here, architecture becomes armor—sometimes soft, sometimes sharp, always deeply personal.',
    items: range(21, 30),
  },
  {
    id: 'horizons',
    title: 'Horizons & Escapes',
    description:
      'Finally, we look outward—toward skylines, balconies, open water, and borrowed green. These frames stretch the idea of home into views, air, and imagined futures.',
    items: range(31, 40),
  },
] as const

export default function GalleryPage() {
  const [activeFeelsIndex, setActiveFeelsIndex] = useState(0)
  const [activeGroupIndices, setActiveGroupIndices] = useState<Record<string, number>>({})

  const getCaptionFor = useCallback((itemNumber: number) => {
    const caption = GALLERY_CAPTIONS[itemNumber - 1]
    return caption ?? ''
  }, [])

  const handleGroupActiveChange = useCallback((groupId: string, index: number) => {
    setActiveGroupIndices((prev) => ({
      ...prev,
      [groupId]: index,
    }))
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#081849] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_10%_10%,rgba(95,52,117,0.28),rgba(8,24,73,0.65))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_80%_0%,rgba(236,223,210,0.25),rgba(8,24,73,0.0))]" />

      <Navigation />

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24">
        <header className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/55">VISUAL ARCHIVE</p>
          <h1 className="mb-6 font-bella-queta text-5xl md:text-6xl lg:text-7xl">Gallery</h1>
          <p className="mx-auto max-w-3xl text-lg text-white/75 md:text-xl">
            How do we see “home” when we freeze it in time? This gallery threads together portraits,
            facades, and vantage points from Metro Manila—each frame a clue to how we build refuge,
            perform identity, and carve out breath in dense cities.
          </p>
        </header>

        <section className="mt-20 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-[0_20px_60px_rgba(8,24,73,0.35)] backdrop-blur">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-bella-queta text-3xl md:text-4xl">Video Reel</h2>
            <p className="mt-4 text-white/70">
              Moments from Life in the Dream Home
            </p>
          </div>

          <div className="mt-10">
            <StoryVideo
              src="/videos/gallery-reel.mov"
              controls
            />
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-[0_20px_60px_rgba(8,24,73,0.35)] backdrop-blur">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-bella-queta text-3xl md:text-4xl">Feels Like Home</h2>
            <p className="mt-4 text-white/70">
              A portrait series crowdsourced from friends of The Haven. Every gaze, grin, and soft
              shadow hints at the emotional architecture that makes a place livable.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.4em] text-white/40">
              Scroll inside the ribbon · tap a card for a closer look
            </p>
          </div>

          <div className="mt-10">
            <ScrollSnapCarousel
              ariaLabel="Feels like home portraits"
              items={FEELS_LIKE_HOME_ITEMS}
              onActiveChange={setActiveFeelsIndex}
              renderItem={(item, index, isActive) => (
                <LightboxImage
                  src={item.src}
                  alt={item.alt}
                  description={item.alt}
                  priority={index < 3}
                  sizes="(max-width: 768px) 80vw, 420px"
                  className={`group relative h-[420px] w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur transition ${
                    isActive ? 'ring-1 ring-white/60' : ''
                  }`}
                  renderOverlay={
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#081849]/80 via-[#081849]/30 to-transparent transition-opacity">
                      <div className="p-6">
                        <p className="font-bella-queta text-lg uppercase tracking-[0.35em] text-white/70">
                          HOME {index + 1}
                        </p>
                        <p className="mt-2 text-sm text-white/60">
                          One face, one room—held softly in the light they call their own.
                        </p>
                      </div>
                    </div>
                  }
                />
              )}
            />
          </div>

          <div className="mt-6 text-center text-sm text-white/60">
            Portrait {activeFeelsIndex + 1} of {FEELS_LIKE_HOME_ITEMS.length}
          </div>
        </section>

        <section className="mt-24 space-y-20">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-white/45">HOMES ACROSS METRO MANILA</p>
            <h2 className="mt-3 font-bella-queta text-3xl md:text-4xl">Our Gallery</h2>
            <p className="mx-auto mt-4 max-w-3xl text-white/75">
              Move through the chapters below to follow how home shifts—from rooms of ritual to guarded streets,
              and finally to balconies that drink the skyline.
            </p>
          </div>

          {GALLERY_GROUPS.map((group) => {
            const activeIndex = activeGroupIndices[group.id] ?? 0
            const activeNumber = group.items[activeIndex]
            const activeCaption = getCaptionFor(activeNumber)

            return (
              <section
                key={group.id}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 p-8 shadow-[0_20px_60px_rgba(8,24,73,0.45)] backdrop-blur"
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 55%), radial-gradient(120% 140% at 10% 10%, rgba(95,52,117,0.25) 0%, rgba(95,52,117,0) 55%), radial-gradient(120% 140% at 90% 0%, rgba(33,56,133,0.22) 0%, rgba(33,56,133,0) 55%)',
                    mixBlendMode: 'screen',
                  }}
                />

                <div className="relative z-10">
                  <div className="mx-auto mb-8 max-w-4xl text-center">
                    <h3 className="font-bella-queta text-2xl md:text-3xl">{group.title}</h3>
                    <p className="mt-3 text-white/70">{group.description}</p>
                  </div>

                  <ScrollSnapCarousel
                    ariaLabel={`${group.title} carousel`}
                    items={group.items}
                    onActiveChange={(index) => handleGroupActiveChange(group.id, index)}
                    itemClassName="min-w-[min(360px,80vw)]"
                    renderItem={(itemNumber, index, isActive) => (
                      <LightboxImage
                        key={itemNumber}
                        src={`/gallery/our-gallery/house${itemNumber}.jpg`}
                        alt={`Home ${itemNumber} from Our Gallery`}
                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 360px, 440px"
                        description={GALLERY_CAPTIONS[itemNumber - 1]}
                        className={`group relative h-[340px] w-full overflow-hidden rounded-[2.2rem] border border-white/12 bg-white/5 transition ${
                          isActive ? 'ring-1 ring-white/60' : ''
                        }`}
                        renderOverlay={
                          <div
                            className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081849]/85 via-[#081849]/45 to-transparent px-6 pb-6 pt-12 transition-opacity ${
                              isActive ? 'opacity-100' : 'opacity-70'
                            }`}
                          >
                            <p className="text-sm text-white/80">
                              {GALLERY_CAPTIONS[itemNumber - 1]?.substring(0, 98)}…
                            </p>
                          </div>
                        }
                      />
                    )}
                  />

                  <div className="mt-8 flex flex-col items-center gap-4 text-center">
                    <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/6 px-6 py-5 text-white/80">
                      <p className="text-sm leading-relaxed">{activeCaption}</p>
                    </div>
                    <p className="text-xs uppercase tracking-[0.4em] text-white/45">
                      {activeIndex + 1} / {group.items.length}
                    </p>
                  </div>
                </div>
              </section>
            )
          })}
        </section>

        <section className="mt-24 rounded-3xl border border-white/10 bg-[#050f2f]/60 p-10 shadow-[0_20px_60px_rgba(8,24,73,0.45)] backdrop-blur">
          <div className="mx-auto flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
            <div className="flex-1 space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-white/45">MICRO DOCU</p>
              <h2 className="font-bella-queta text-3xl md:text-4xl">Life in the Dream Home</h2>
              <p className="text-white/75">
                A short visual essay about rituals, light, and the way sound travels through a space we love.
                Keep the volume low and let the ambient track sit with you.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <TransitionLink
                  href="/entertainment"
                  className="rounded-full border border-white/30 px-6 py-2 text-sm uppercase tracking-[0.3em] text-white transition hover:border-white hover:bg-white/10"
                >
                  Take the home quiz
                </TransitionLink>
                <TransitionLink
                  href="/contact"
                  className="rounded-full bg-white/90 px-6 py-2 text-sm uppercase tracking-[0.3em] text-[#5F3475] transition hover:bg-white"
                >
                  Tell us your story
                </TransitionLink>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative">
                <StoryVideo
                  src="/videos/life-in-the-dream-home.mov"
                  autoPlay
                  muted
                  loop
                />
                <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black/55 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/80 backdrop-blur z-10">
                  <span>Ambient on</span>
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ECDFD2]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

