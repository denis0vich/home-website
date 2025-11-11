'use client'

import Navigation from '@/components/Navigation'
import ScrollSnapCarousel from '@/components/ScrollSnapCarousel'
import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'

interface InterviewClip {
  id: string
  subject: string
  title: string
  description: string
  audioSrc: string
}

interface DreamHome {
  id: string
  subject: string
  title: string
  description: string
  images: string[]
  palette: string[]
}

const INTERVIEW_CLIPS: InterviewClip[] = [
  {
    id: 'blair-interview',
    subject: 'Blair',
    title: 'The Architecture of Moving',
    description:
      'Blair reflects on shedding the idea that a home must be pristine to be safe. Hear how she imagines warmth and maximalism as protection.',
    audioSrc: '/audio/Blair - Cold, High-Pitched Piano Chord .mp3',
  },
  {
    id: 'elijah-interview',
    subject: 'Elijah',
    title: 'The Vantage Point',
    description:
      'Elijah shares his blueprint for silence: a home with crisp light, minimal clutter, and room to breathe away from the bustle.',
    audioSrc: '/audio/Elijah - panalangin piano.mp3',
  },
  {
    id: 'lala-interview',
    subject: 'Lala',
    title: 'The Sculpture of Faith',
    description:
      'Lala traces how privacy, soft light, and ritual reconnect her to a self that was once obscured by scrutiny.',
    audioSrc: '/audio/Lala - Gentle Ambient Piano.mp3',
  },
]

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
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({})

  const handlePlayPause = useCallback((clip: InterviewClip) => {
    let audio = audioRefs.current[clip.id]

    if (!audio) {
      audio = new Audio(clip.audioSrc)
      audioRefs.current[clip.id] = audio
      audio.onended = () => setPlayingAudio(null)
    }

    if (playingAudio === clip.id) {
      audio.pause()
      setPlayingAudio(null)
      return
    }

    Object.entries(audioRefs.current).forEach(([id, element]) => {
      if (element && id !== clip.id) {
        element.pause()
        element.currentTime = 0
      }
    })

    audio.play()
    setPlayingAudio(clip.id)
  }, [playingAudio])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#081849] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_120%_at_0%_0%,rgba(137,49,114,0.25),rgba(8,24,73,0.85))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_95%_0%,rgba(33,56,133,0.35),rgba(8,24,73,0.85))]" />

      <Navigation />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-36 pb-24">
        <header className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/55">
            Audio Portraits & Visualizations
          </p>
          <h1 className="mb-4 font-bella-queta text-5xl md:text-6xl lg:text-7xl">
            Interviews & Dream Homes
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white/75 md:text-xl">
            Hear each subject describe the emotional scaffolding of their dream home, then drift
            through the imagined rooms rendered in light, palette, and texture.
          </p>
        </header>

        <section className="mt-16 rounded-3xl border border-white/15 bg-white/8 p-8 shadow-[0_24px_60px_rgba(8,12,40,0.35)] backdrop-blur">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-white/55">
              Scroll inside · use arrow controls · tap to play
            </p>
            <h2 className="mt-3 font-bella-queta text-3xl md:text-4xl">Interview Audio Clips</h2>
          </div>

          <div className="mt-10">
            <ScrollSnapCarousel
              ariaLabel="Interview audio clips"
              items={INTERVIEW_CLIPS}
              renderItem={(clip, _index, isActive) => (
                <article className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 p-6 backdrop-blur">
                  <div className="flex flex-1 flex-col">
                    <span className="text-xs uppercase tracking-[0.35em] text-white/55">
                      {clip.subject}
                    </span>
                    <h3 className="mt-3 font-bella-queta text-2xl text-white">
                      {clip.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-white/75">
                      {clip.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handlePlayPause(clip)}
                    className={`mt-6 inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm uppercase tracking-[0.35em] transition ${
                      playingAudio === clip.id
                        ? 'bg-white text-[#081849]'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {playingAudio === clip.id ? (
                      <>
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <rect x="7" y="5" width="3" height="14" rx="1" />
                          <rect x="14" y="5" width="3" height="14" rx="1" />
                        </svg>
                        Pause
                      </>
                    ) : (
                      <>
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M7 4l12 8-12 8V4z" />
                        </svg>
                        Play
                      </>
                    )}
                  </button>
                  <div
                    className={`mt-4 h-1 rounded-full transition ${
                      isActive ? 'bg-white' : 'bg-white/25'
                    }`}
                  />
                </article>
              )}
            />
          </div>
        </section>

        <section className="mt-24 space-y-16">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-white/55">Rendered Intentions</p>
            <h2 className="mt-3 font-bella-queta text-3xl md:text-4xl">Dream Home Showcases</h2>
            <p className="mx-auto mt-4 max-w-3xl text-white/70">
              Each visualization is a collaborative translation of interviews into light, texture,
              and layout. Glide through the renderings and notice how the palette echoes the subject’s
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

