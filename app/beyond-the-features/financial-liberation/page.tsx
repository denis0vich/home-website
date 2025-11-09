'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import StoryParagraph from '@/components/StoryParagraph'

export default function FinancialLiberationPage() {
  return (
    <div className="story-page-wrapper">
      <div className="story-background" />
      
      <div className="story-nav-overlay">
        <Navigation />
      </div>

      <div className="story-content-area">
        <article className="max-w-4xl mx-auto px-6 py-20">
          <ScrollAnimation direction="fadeInUp" delay={100} duration={1200}>
            <header className="mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bella-queta text-gray-900 mb-6 leading-tight">
                Financial Liberation
              </h1>
              <p className="text-xl font-bella-queta text-gray-600">
                Rethinking Ownership: The Renting Mindset
              </p>
            </header>
          </ScrollAnimation>

          <div className="prose prose-lg max-w-none">
            <ScrollAnimation direction="fadeIn" delay={300} duration={1200}>
              <p className="text-2xl md:text-3xl leading-relaxed text-gray-700 mb-16 italic font-light text-center max-w-3xl mx-auto">
                Financial Liberation is the generation's survival strategy in one of the world's most competitive and costly urban centers. This section unpacks the financial anxiety of the urban struggle and explores how Gen Z is redefining value, prioritizing time, convenience, and psychological peace over expensive, traditional metrics of homeownership.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={400}>
              <section className="mb-12">
                <p className="mb-6 leading-relaxed text-gray-700">
                  For everyone's entire life, everyone has heard one financial truth repeated at every family gathering: "Rent is wasted money." It's a generational mantra, a belief that every peso spent on housing that one doesn't own is money someone is simply throwing away.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  But as people look at the cost of living in Metro Manila today, everyone realizes that for this generation, the generation starting out, that old belief has become a form of financial repression. They're not throwing money away when they rent, they're buying themselves time, flexibility, and genuine peace of mind.
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={500}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  The Weight of Tradition
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  The pressure to buy isn't just financial, it's deeply cultural. In the Philippines, owning a home isn't just about having a house to live in, it's the ultimate measure of success, stability, and love for your family. It's the physical proof that you've "made it" and can provide a permanent legacy.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Generation Z constantly feels the weight of this tradition. Lolas (grandmother) and parents often talk about the security of lupa (land) and how renting means one will always be at the mercy of a landlord. When people choose to rent, they often feel like they have to justify their decision, explaining that they're not being lazy or frivolous, but simply being realistic about the current economy.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  This cultural pressure, while rooted in genuine care and a desire for stability, clashes violently with today's prices. The down payment alone for a decent starter home or condo can wipe out years of savings, forcing most into crippling debt right when they need capital the most. People have realized that for many, the path to their "dream home" can't start with the anxiety of a massive, long-term loan.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700 font-bold text-lg">
                  People's choice to embrace the renting mindset is their personal act of financial liberation. It's not the passive choice most parents imagine, it's a proactive strategy to protect capital and mental health.
                </p>
              </section>
            </ScrollAnimation>
          </div>
        </article>
      </div>
    </div>
  )
}

