'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import Link from 'next/link'

export default function AboutTheProjectPage() {
  return (
    <div className="story-page-wrapper">
      <div className="story-background" />
      
      <div className="story-nav-overlay">
        <Navigation />
      </div>

      <div className="story-content-area">
        <article className="max-w-4xl mx-auto px-6 py-20">
          <ScrollAnimation direction="fadeIn" delay={200}>
            <header className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bella-queta text-gray-900 mb-4">
                About The Project
              </h1>
              <p className="text-lg font-bella-queta text-gray-600">
                Generation Z's Conceptualization of the "Dream Home"
              </p>
              <p className="text-sm font-bella-queta text-gray-500 mt-2">
                A Production Thesis | De La Salle University - Manila | 2025
              </p>
            </header>
          </ScrollAnimation>

          <div className="prose prose-lg max-w-none font-bella-queta">
            <ScrollAnimation direction="fadeInUp" delay={300}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  Abstract
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  This production thesis explores how Generation Z (Gen Z) in Metro Manila conceptualizes the "dream home" as a profound symbol of liberation, psychological sanctuary, and identity. The project addresses a critical gap in existing housing discourse, which predominantly focuses on pragmatic concerns like economics and physical aesthetics, by instead delving into the deeply personal and emotional meanings Gen Z attaches to their ideal dwelling.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  It asserts that for this generation, a home is not merely a tangible structure but a subjectively constructed space shaped by lived experiences and aspirational ideals. The primary output of this project is a multimedia-rich web magazine featuring three creative nonfiction articles. These articles are the result of in-depth interviews with Gen Z individuals and are designed to be a human-centered and nuanced exploration of the topic.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  The magazine's format is deliberately chosen to align with the digital native sensibilities of its target audience, utilizing interactive and dynamic elements for engagement. Key theoretical frameworks, namely Affordance Theory and the Sense of Place framework, guide the project's creative direction.
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={400}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  Theoretical Framework
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  <strong>Affordance Theory</strong> (James Gibson & Don Norman): This framework guides how the digital magazine platform invites Gen Z users to engage with and shape their conceptualizations of a dream home, creating emotional connection and direct participation rather than passive consumption. The platform's design actively invites user participation through interactive elements, feedback mechanisms, and emotional identification.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  <strong>Sense of Place Framework</strong> (Dai & Liu, 2024; Raymond, Kytta & Stedman, 2020): This framework explores how individuals form profound meanings about spaces, whether physical or virtual. It examines how Gen Z's "dream home" transcends mere physical structure, becoming an emotional and aspirational entity shaped by their lived experiences and digital interactions.
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={500}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  Methodology
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  This qualitative study employs purposive sampling to select three Gen Z individuals from Metro Manila, each with distinct lived experiences that inform their conceptualization of a "dream home":
                </p>
                <ul className="list-disc pl-8 mb-6 space-y-4 text-gray-700">
                  <li><strong>Blair</strong> (21 years old): Abuse, Repressed Personal Identity</li>
                  <li><strong>Lala</strong> (22 years old): Religion, Homophobia</li>
                  <li><strong>Elijah</strong> (20 years old): Mental Health, Financial Precarity</li>
                </ul>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Each participant underwent in-depth interviews (45-60 minutes) via Zoom, with their stories transformed into creative nonfiction articles. The articles are supplemented by expert insights from:
                </p>
                <ul className="list-disc pl-8 mb-6 space-y-4 text-gray-700">
                  <li><strong>Engr. John Kelly Josue</strong> - Civil Engineer & Project Manager</li>
                  <li><strong>Architect Tanya Kriselle S. Chua</strong> - Architect</li>
                  <li><strong>Interior Designer Lucia Da Silva</strong> - BS in Interior Design, SoFa Design Institute</li>
                  <li><strong>Psychometrician Gabrielle B. Zambrano</strong> - Registered Psychometrician & OIC Guidance Counselor</li>
                </ul>
              </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={600}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  Authors
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bella-queta font-bold text-gray-900 mb-2">
                      Kirsten Jewel C. Garcia
                    </h3>
                    <p className="text-gray-700">
                      Bachelor of Arts Major in Communication Arts
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bella-queta font-bold text-gray-900 mb-2">
                      Anne Nicole B. Zambrano
                    </h3>
                    <p className="text-gray-700">
                      Bachelor of Arts Major in Communication Arts
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  Department of Communication, College of Liberal Arts<br />
                  De La Salle University - Manila<br />
                  Term 3, A.Y. 2024-2025
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={700}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  Explore the Stories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link href="/stories/blair" className="bg-gradient-to-br from-black via-orange-600 to-orange-400 rounded-lg p-6 text-white hover:shadow-xl transition-all">
                    <h3 className="text-2xl font-bella-queta font-bold mb-2">Blair</h3>
                    <p className="text-sm opacity-90">The Architecture of Moving</p>
                  </Link>
                  <Link href="/stories/lala" className="bg-gradient-to-br from-green-700 via-amber-600 to-green-500 rounded-lg p-6 text-white hover:shadow-xl transition-all">
                    <h3 className="text-2xl font-bella-queta font-bold mb-2">Lala</h3>
                    <p className="text-sm opacity-90">The Sculpture of Faith</p>
                  </Link>
                  <Link href="/stories/elijah" className="bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 rounded-lg p-6 text-white hover:shadow-xl transition-all">
                    <h3 className="text-2xl font-bella-queta font-bold mb-2">Elijah</h3>
                    <p className="text-sm opacity-90">The Vantage Point</p>
                  </Link>
                </div>
              </section>
            </ScrollAnimation>
          </div>
        </article>
      </div>
    </div>
  )
}

