'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import TransitionLink from '@/components/TransitionLink'

export default function EntertainmentPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050b22] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_130%_at_5%_-10%,rgba(236,223,210,0.28),rgba(5,11,34,0.75))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_95%_0%,rgba(95,52,117,0.32),rgba(5,11,34,0.8))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_140%_at_50%_120%,rgba(33,56,133,0.25),rgba(5,11,34,0.9))]" />

      <Navigation />

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-32">
        <ScrollAnimation direction="fadeIn" delay={200}>
          <h1 className="mb-4 text-center font-bella-queta text-5xl text-white md:text-6xl">
            Entertainment & User Interaction
          </h1>
        </ScrollAnimation>

        <ScrollAnimation direction="fadeInUp" delay={300}>
          <p className="mx-auto mb-16 max-w-3xl text-center font-bella-queta text-xl text-white/80">
            Engage with others in the Community Forum to share your own struggles, dream home blueprints, and
            cost-saving strategies for urban living. Take our Quizzes to reveal the core psychological drivers that are
            shaping your personal sanctuary, and learn what your needs for Silence or Expression truly mean for your
            ideal living space.
          </p>
        </ScrollAnimation>

        <div className="grid gap-8 md:grid-cols-2">
          <ScrollAnimation direction="fadeInUp" delay={400}>
            <TransitionLink
              href="/entertainment/forum"
              className="group block rounded-3xl border border-white/10 bg-white/10 p-10 shadow-[0_28px_90px_rgba(5,11,34,0.45)] backdrop-blur-md transition-all hover:border-[#BE8CC1]/50 hover:bg-white/15"
            >
              <h2 className="mb-4 font-bella-queta text-3xl font-bold text-white">Community Forum</h2>
              <p className="mb-6 font-bella-queta text-white/80">
                Share your story with the community—every note helps someone else feel less alone. Connect
                through shared struggles, dream home blueprints, and cost-saving strategies for urban living.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#BE8CC1] px-6 py-3 text-sm font-bella-queta font-bold uppercase tracking-[0.3em] text-white transition group-hover:bg-[#a87bac]">
                Join the Conversation
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </TransitionLink>
          </ScrollAnimation>

          <ScrollAnimation direction="fadeInUp" delay={500}>
            <TransitionLink
              href="/entertainment/quizzes"
              className="group block rounded-3xl border border-white/10 bg-white/10 p-10 shadow-[0_28px_90px_rgba(5,11,34,0.45)] backdrop-blur-md transition-all hover:border-[#BE8CC1]/50 hover:bg-white/15"
            >
              <h2 className="mb-4 font-bella-queta text-3xl font-bold text-white">Quizzes</h2>
              <p className="mb-6 font-bella-queta text-white/80">
                Take our quizzes to reveal the core psychological drivers that are shaping your personal
                sanctuary, and learn what your needs for Silence or Expression truly mean for your ideal living
                space.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#BE8CC1] px-6 py-3 text-sm font-bella-queta font-bold uppercase tracking-[0.3em] text-white transition group-hover:bg-[#a87bac]">
                Start Quiz
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </TransitionLink>
          </ScrollAnimation>
        </div>
      </main>
    </div>
  )
}
