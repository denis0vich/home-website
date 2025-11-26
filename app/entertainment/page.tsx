'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import TransitionLink from '@/components/TransitionLink'

export default function EntertainmentPage() {
  return (
    <div className="relative min-h-screen bg-[#faf8f5] text-gray-800">
      <Navigation />

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-32">
        <ScrollAnimation direction="fadeIn" duration={500}>
          <h1 className="mb-4 text-center font-bella-queta text-5xl text-gray-800 md:text-6xl">
            Entertainment & User Interaction
          </h1>
        </ScrollAnimation>

        <ScrollAnimation direction="fadeIn" duration={500}>
          <p className="mx-auto mb-16 max-w-3xl text-center font-bella-queta text-xl text-gray-700">
            Engage with others in the Community Forum to share your own struggles, dream home blueprints, and
            cost-saving strategies for urban living. Take our Quizzes to reveal the core psychological drivers that are
            shaping your personal sanctuary, and learn what your needs for Silence or Expression truly mean for your
            ideal living space.
          </p>
        </ScrollAnimation>

        <div className="grid gap-8 md:grid-cols-2">
          <ScrollAnimation direction="fadeIn" duration={500}>
            <TransitionLink
              href="/entertainment/forum"
              className="group block rounded-3xl border border-gray-200 bg-white/80 p-10 shadow-sm backdrop-blur-sm transition-all hover:border-[#BE8CC1]/50 hover:bg-white/90"
            >
              <h2 className="mb-4 font-bella-queta text-3xl font-bold text-gray-800">Community Forum</h2>
              <p className="mb-6 font-bella-queta text-gray-700">
                Share your story with the community—every note helps someone else feel less alone. Connect
                through shared struggles, dream home blueprints, and cost-saving strategies for urban living.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#BE8CC1] px-6 py-3 text-sm font-bella-queta font-bold uppercase tracking-[0.3em] text-white transition group-hover:bg-[#a87bac]">
                Join the Conversation
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </TransitionLink>
          </ScrollAnimation>

          <ScrollAnimation direction="fadeIn" duration={500}>
            <TransitionLink
              href="/entertainment/quizzes"
              className="group block rounded-3xl border border-gray-200 bg-white/80 p-10 shadow-sm backdrop-blur-sm transition-all hover:border-[#BE8CC1]/50 hover:bg-white/90"
            >
              <h2 className="mb-4 font-bella-queta text-3xl font-bold text-gray-800">Quizzes</h2>
              <p className="mb-6 font-bella-queta text-gray-700">
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
