'use client'

import Image from 'next/image'
import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import { useEffect, useMemo, useState } from 'react'

interface ColorRound {
  id: number
  palette: string[]
  image: string
  answer: string
  aliases: string[]
  description: string
  why: string
  emotion: string
}

interface ColorEntryState {
  value: string
  selectedOption: string | null
  status: 'idle' | 'correct' | 'incorrect'
  showFeedback: boolean
  error: string | null
}

const COLOR_OPTIONS = ['Retro', 'Modern Minimalist', 'Japandi', 'Earth-core', 'Luxury', 'Cyberpunk']

const COLOR_ROUNDS: ColorRound[] = [
  {
    id: 1,
    palette: ['Sage Green', 'Terracotta', 'Cream', 'Earth Brown'],
    image: '/quizzes/color/1.png',
    answer: 'Earth-Core',
    aliases: ['earth-core', 'earth core', 'earthcore', 'earth-core aesthetic'],
    description: 'Nature-inspired palette using muted greens, browns, and clay hues.',
    why: 'Brings warmth and eco-conscious design indoors, ideal for relaxing, nature-themed spaces.',
    emotion: 'Earth tones feel grounding and safe, like being embraced by nature.',
  },
  {
    id: 2,
    palette: ['Beige', 'White', 'Soft Gray', 'Warm Wood Tone'],
    image: '/quizzes/color/2.png',
    answer: 'Japandi',
    aliases: ['japandi', 'modern japandi', 'minimalist japandi'],
    description:
      'Clean lines, neutral colors, and functional simplicity inspired by Scandinavian + Japanese design.',
    why: 'Makes small spaces feel open, calm, and uncluttered.',
    emotion: 'Soft neutrals evoke peace, clarity, and mental rest.',
  },
  {
    id: 3,
    palette: ['Neon Pink', 'Electric Blue', 'Black'],
    image: '/quizzes/color/3.png',
    answer: 'Cyberpunk',
    aliases: ['cyberpunk', 'vaporwave', 'neon cyberpunk'],
    description: 'Futuristic, neon-lit vibe mixed with digital nostalgia.',
    why: 'Adds bold, immersive personality, mostly used in gaming rooms or modern studio setups.',
    emotion: 'Neon against dark tones creates excitement, energy, and overstimulation.',
  },
  {
    id: 4,
    palette: ['Mustard Yellow', 'Brick Red', 'Sea Blue', 'Cream', 'Bright Pink'],
    image: '/quizzes/color/4.png',
    answer: 'Retro (70s Revival)',
    aliases: ['retro', '70s retro', 'retro 70s revival'],
    description: 'Warm, nostalgic color combinations often seen in mid-century design, diners, and vintage posters.',
    why: 'Adds playful character and nostalgia without feeling childish.',
    emotion: 'Evokes comfort, familiarity, and playful warmth.',
  },
  {
    id: 5,
    palette: ['Soft Warm Browns', 'Black', 'White'],
    image: '/quizzes/color/5.png',
    answer: 'Modern Minimalist',
    aliases: ['modern minimalist', 'minimalist', 'minimalist modern'],
    description:
      'An interior design style focused on simplicity, functionality, and clean lines—with every element intentional.',
    why: 'Creates a serene, restful sanctuary by removing visual noise and letting smaller spaces breathe.',
    emotion: 'Calm, serene, disciplined, orderly, restful.',
  },
]

const INITIAL_COLOR_STATE: ColorEntryState[] = COLOR_ROUNDS.map(() => ({
  value: '',
  selectedOption: null,
  status: 'idle',
  showFeedback: false,
  error: null,
}))

function normalizeAnswer(value: string) {
  return value.trim().replace(/\s+/g, ' ').replace(/[^a-z0-9\s]/gi, '').toLowerCase()
}

export default function QuizzesPage() {
  const [colorEntries, setColorEntries] = useState<ColorEntryState[]>(INITIAL_COLOR_STATE)
  const [colorSummary, setColorSummary] = useState<Record<string, number>>({})
  const [colorSummaryError, setColorSummaryError] = useState<string | null>(null)
  const [totalColorResponses, setTotalColorResponses] = useState(0)

  const paletteBreakdown = useMemo(
    () => Object.entries(colorSummary).sort((a, b) => b[1] - a[1]),
    [colorSummary]
  )

  const recordColorResponse = async (palette: string, guess: string) => {
    try {
      const response = await fetch('/api/quiz-responses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ colorPalette: palette, guess }),
      })

      if (!response.ok) {
        return
      }

      const saved = await response.json()
      if (saved?.colorPalette) {
        setColorSummary((prev) => ({
          ...prev,
          [saved.colorPalette]: (prev[saved.colorPalette] ?? 0) + 1,
        }))
        setTotalColorResponses((prev) => prev + 1)
      }
    } catch {
      // swallow silently; summary fetch will refresh on next load
    }
  }

  const handleColorOptionSelect = (index: number, option: string) => {
    setColorEntries((prev) =>
      prev.map((entry, idx) =>
        idx === index
          ? {
              ...entry,
              value: option,
              selectedOption: option,
              error: null,
              status: 'idle',
              showFeedback: false,
            }
          : entry
      )
    )
  }

  const handleColorInputChange = (index: number, value: string) => {
    setColorEntries((prev) =>
      prev.map((entry, idx) =>
        idx === index
          ? {
              ...entry,
              value,
              selectedOption: entry.selectedOption && entry.selectedOption !== value ? null : entry.selectedOption,
              error: null,
              status: 'idle',
              showFeedback: false,
            }
          : entry
      )
    )
  }

  const handleColorQuizSubmit = async (index: number) => {
    const entry = COLOR_ROUNDS[index]
    const state = colorEntries[index]
    const guess = state.value.trim()

    if (!guess) {
      setColorEntries((prev) =>
        prev.map((item, idx) =>
          idx === index ? { ...item, error: 'Type (or tap) an answer before checking.' } : item
        )
      )
      return
    }

    const normalizedGuess = normalizeAnswer(guess)
    const accepted = [entry.answer, ...entry.aliases]
      .map(normalizeAnswer)
      .filter(Boolean)

    const isCorrect = accepted.includes(normalizedGuess)

    setColorEntries((prev) =>
      prev.map((item, idx) =>
        idx === index
          ? {
              ...item,
              status: isCorrect ? 'correct' : 'incorrect',
              showFeedback: true,
              error: null,
            }
          : item
      )
    )

    await recordColorResponse(entry.answer, guess)
  }

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const quizRes = await fetch('/api/quiz-responses', { cache: 'no-store' })
        const quizData = quizRes.ok ? await quizRes.json() : null

        if (cancelled) return

        if (quizRes.ok && quizData) {
          setColorSummary(quizData.paletteTally ?? {})
          const responsesWithPalette = Array.isArray(quizData.responses)
            ? quizData.responses.filter((item: { colorPalette?: string | null }) => !!item.colorPalette)
            : []
          setTotalColorResponses(responsesWithPalette.length)
        } else {
          setColorSummaryError('Unable to load quiz stats right now.')
        }
      } catch {
        if (!cancelled) {
          setColorSummaryError((prev) => prev ?? 'Unable to load quiz stats right now.')
        }
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050b22] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_130%_at_5%_-10%,rgba(236,223,210,0.28),rgba(5,11,34,0.75))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_95%_0%,rgba(95,52,117,0.32),rgba(5,11,34,0.8))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_140%_at_50%_120%,rgba(33,56,133,0.25),rgba(5,11,34,0.9))]" />

      <Navigation />

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-32">
        <ScrollAnimation direction="fadeIn" delay={200}>
          <h1 className="mb-4 text-center font-bella-queta text-5xl text-white md:text-6xl">Quizzes</h1>
        </ScrollAnimation>

        <ScrollAnimation direction="fadeInUp" delay={300}>
          <p className="mx-auto mb-16 max-w-3xl text-center font-bella-queta text-xl text-white/80">
            Take our quizzes to reveal the core psychological drivers that are shaping your personal
            sanctuary, and learn what your needs for Silence or Expression truly mean for your ideal living
            space.
          </p>
        </ScrollAnimation>

        <ScrollAnimation direction="fadeInUp" delay={400}>
          <section className="mb-20">
            <div className="mb-12">
              <h2 className="text-center font-bella-queta text-2xl font-bold text-white">
                Choose Your Color
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center font-bella-queta text-sm uppercase tracking-[0.35em] text-white/45">
                “What aesthetic or style does this palette represent?”
              </p>
              <div className="mx-auto mt-6 max-w-4xl rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_26px_80px_rgba(5,11,34,0.45)] backdrop-blur">
                <p className="text-center font-bella-queta text-sm text-white/75">
                  Quiz mechanics: tap a palette, pick from the answer bank, then type or tweak before submitting.
                  After every guess we reveal the correct profile so you can learn on the spot.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {COLOR_OPTIONS.map((option) => (
                    <span
                      key={option}
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bella-queta uppercase tracking-[0.3em] text-white/70"
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {COLOR_ROUNDS.map((round, index) => {
                  const state = colorEntries[index]
                  const isCorrect = state.status === 'correct'
                  return (
                    <article
                      key={round.id}
                      className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/10 p-6 shadow-[0_24px_70px_rgba(5,11,34,0.5)] backdrop-blur"
                    >
                      <span className="absolute right-6 top-6 text-xs font-bella-queta uppercase tracking-[0.35em] text-white/40">
                        #{index + 1}
                      </span>
                      <div className="flex flex-col gap-4">
                        <div className="relative overflow-hidden rounded-2xl border border-white/15">
                          <Image
                            src={round.image}
                            alt={`Color palette ${index + 1}`}
                            width={640}
                            height={360}
                            className="h-full w-full object-cover"
                            priority={index < 2}
                            sizes="(max-width: 768px) 90vw, 420px"
                          />
                        </div>
                        <div>
                          <p className="font-bella-queta text-sm uppercase tracking-[0.35em] text-white/45">
                            Palette
                          </p>
                          <p className="mt-1 font-bella-queta text-base text-white">
                            {round.palette.join(' • ')}
                          </p>
                        </div>
                        <div>
                          <p className="font-bella-queta text-sm uppercase tracking-[0.35em] text-white/45">
                            Possible Answers
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {COLOR_OPTIONS.map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => handleColorOptionSelect(index, option)}
                                className={`rounded-full border px-4 py-1 text-xs font-bella-queta transition ${
                                  state.selectedOption === option
                                    ? 'border-[#BE8CC1] bg-[#BE8CC1]/20 text-white'
                                    : 'border-white/10 text-white/65 hover:border-[#BE8CC1] hover:bg-[#BE8CC1]/15 hover:text-white'
                                }`}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-bella-queta text-white/60">
                            Type your answer
                          </label>
                          <input
                            value={state.value}
                            onChange={(event) => handleColorInputChange(index, event.target.value)}
                            placeholder="e.g., Japandi"
                            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-bella-queta text-white placeholder-white/40 focus:border-[#909FF0] focus:outline-none"
                          />
                          {state.error && (
                            <p className="mt-2 text-xs font-bella-queta text-red-300">{state.error}</p>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => handleColorQuizSubmit(index)}
                          className="rounded-full bg-[#BE8CC1] px-6 py-3 text-sm font-bella-queta font-bold uppercase tracking-[0.3em] text-white transition hover:bg-[#a87bac]"
                        >
                          Reveal Answer
                        </button>
                        {state.showFeedback && (
                          <div className="space-y-3 rounded-2xl border border-white/15 bg-white/10 p-5 font-bella-queta text-sm text-white/80">
                            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                              {isCorrect ? 'Correct!' : 'Here's the correct profile'}
                            </p>
                            <p className="text-lg font-semibold text-white">Right Answer: {round.answer}</p>
                            <p className="text-white/80">{round.description}</p>
                            <p className="text-white/80">
                              <strong>Why it's used:</strong> {round.why}
                            </p>
                            <p className="text-white/80">
                              <strong>Emotion:</strong> {round.emotion}
                            </p>
                          </div>
                        )}
                      </div>
                    </article>
                  )
                })}
              </div>

              <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/12 bg-white/10 p-6 text-center shadow-[0_20px_70px_rgba(5,11,34,0.45)] backdrop-blur">
                <p className="text-sm font-bella-queta uppercase tracking-[0.35em] text-white/50">
                  Community Picks
                </p>
                {colorSummaryError && (
                  <p className="mt-4 text-xs font-bella-queta text-red-300">{colorSummaryError}</p>
                )}
                {!colorSummaryError && paletteBreakdown.length === 0 ? (
                  <p className="mt-4 font-bella-queta text-sm text-white/60">
                    Be the first to submit—your guesses will light up the leaderboard.
                  </p>
                ) : (
                  <div className="mt-4 space-y-2">
                    {paletteBreakdown.slice(0, 5).map(([palette, count], idx) => (
                      <p key={`${palette}-${idx}`} className="font-bella-queta text-white/80">
                        <span className="font-semibold text-white">{palette}</span>{' '}
                        <span className="text-sm text-white/55">
                          · {count} {count === 1 ? 'vote' : 'votes'}
                        </span>
                      </p>
                    ))}
                  </div>
                )}
                <p className="mt-4 text-xs font-bella-queta uppercase tracking-[0.35em] text-white/45">
                  {totalColorResponses} {totalColorResponses === 1 ? 'color entry logged' : 'color entries logged'}
                </p>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>
    </div>
  )
}

