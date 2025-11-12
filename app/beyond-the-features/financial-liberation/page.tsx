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
          <ScrollAnimation direction="fadeInUp" duration={1200}>
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
            <ScrollAnimation direction="fadeIn" duration={1200}>
              <p className="text-2xl md:text-3xl leading-relaxed text-gray-700 mb-16 italic font-light text-center max-w-3xl mx-auto">
                Financial Liberation is the generation&apos;s survival strategy in one of the world&apos;s most competitive and costly urban centers. This section unpacks the financial anxiety of the urban struggle and explores how Gen Z is redefining value, prioritizing time, convenience, and psychological peace over expensive, traditional metrics of homeownership.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp">
              <section className="mb-12">
                <p className="mb-6 leading-relaxed text-gray-700">
                  For everyone&apos;s entire life, everyone has heard one financial truth repeated at every family gathering: &quot;Rent is wasted money.&quot; It&apos;s a generational mantra, a belief that every peso spent on housing that one doesn&apos;t own is money someone is simply throwing away.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  But as people look at the cost of living in Metro Manila today, everyone realizes that for this generation, the generation starting out, that old belief has become a form of financial repression. They&apos;re not throwing money away when they rent, they&apos;re buying themselves time, flexibility, and genuine peace of mind.
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp">
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  The Weight of Tradition
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  The pressure to buy isn&apos;t just financial, it&apos;s deeply cultural. In the Philippines, owning a home isn&apos;t just about having a house to live in, it&apos;s the ultimate measure of success, stability, and love for your family. It&apos;s the physical proof that you&apos;ve &quot;made it&quot; and can provide a permanent legacy.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Generation Z constantly feels the weight of this tradition. Lolas (grandmother) and parents often talk about the security of lupa (land) and how renting means one will always be at the mercy of a landlord. When people choose to rent, they often feel like they have to justify their decision, explaining that they&apos;re not being lazy or frivolous, but simply being realistic about the current economy.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  This cultural pressure, while rooted in genuine care and a desire for stability, clashes violently with today&apos;s prices. The down payment alone for a decent starter home or condo can wipe out years of savings, forcing most into crippling debt right when they need capital the most. People have realized that for many, the path to their &quot;dream home&quot; can&apos;t start with the anxiety of a massive, long-term loan.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700 font-bold text-lg">
                  People&apos;s choice to embrace the renting mindset is their personal act of financial liberation. It&apos;s not the passive choice most parents imagine, it&apos;s a proactive strategy to protect capital and mental health.
                </p>
              </section>
            </ScrollAnimation>
          </div>
        </article>
      </div>
    </div>
  )
}

