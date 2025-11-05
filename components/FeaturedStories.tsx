'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PageTransition from './PageTransition'

export default function FeaturedStories() {
  const router = useRouter()
  const [transitioning, setTransitioning] = useState(false)

  const handleStoriesClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setTransitioning(true)
  }

  const handleTransitionComplete = () => {
    router.push('/stories')
    setTransitioning(false)
  }

  return (
    <>
      <PageTransition
        show={transitioning}
        onComplete={handleTransitionComplete}
        direction="towards"
      />
      <section className="relative z-20 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bella-queta text-white text-center mb-6 drop-shadow-2xl">
            Featured Stories
          </h2>
          <p className="text-white/90 text-center max-w-3xl mx-auto mb-12 text-lg font-bella-queta drop-shadow-lg">
            This section features the heart of our exploration, with deeply personal narratives alongside expert analysis. Dive into the lives of individuals like Elijah, Blair, and Lala to understand how past trauma, financial anxiety, and identity struggles are translated into the blueprint of their dream home.
          </p>
          <div className="text-center">
            <Link
              href="/stories"
              onClick={handleStoriesClick}
              className="inline-block px-8 py-4 bg-[#BE8CC1] rounded-[81px] text-white font-bella-queta font-bold text-xl md:text-2xl tracking-[0.04em] leading-[108%] shadow-lg hover:bg-[#a87bac] transition-colors"
            >
              EXPLORE STORIES
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
