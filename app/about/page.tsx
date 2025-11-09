'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="story-page-wrapper">
      <div className="story-background" />
      
      <div className="story-nav-overlay">
        <Navigation />
      </div>

      <div className="story-content-area">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <ScrollAnimation direction="fadeInUp" delay={100} duration={1200}>
            <header className="mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bella-queta text-gray-900 mb-6 text-center leading-tight">
                About The Haven
              </h1>
            </header>
          </ScrollAnimation>

          <div className="prose prose-lg max-w-none">
            {/* Project Overview */}
            <ScrollAnimation direction="fadeInUp" delay={300}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  Project Overview
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  The Haven builds a community of dreamers where anyone, no matter their background, can imagine their own dream home. It starts with a digital space that collects and shares these stories, creating a place where people can see themselves, connect through their experiences, and find inspiration in the way others define home.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  The Haven is a passion project conceived and executed by Communication Arts students from De La Salle University: Anne Nicole Zambrano and Kirsten Jewel Garcia.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  This project is a journalistic investigation into the emotional, financial, and psychological landscape of modern Filipino living, committed to blending academic theory with authentic, raw narrative nonfiction. The creators believe that by documenting the dream, we help make the future possible.
                </p>
                <p className="text-sm text-gray-500 italic">
                  Date of publication: November 2025. Conceptualized in June 2025.
                </p>
              </section>
            </ScrollAnimation>

            {/* Team Members */}
            <ScrollAnimation direction="fadeInUp" delay={400}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  The Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="mb-4">
                      <Image
                        src="/about/Anne Nicole Zambrano.jpeg"
                        alt="Anne Nicole Zambrano"
                        width={200}
                        height={200}
                        className="rounded-lg mx-auto object-cover"
                        unoptimized
                      />
                    </div>
                    <h3 className="text-xl font-bella-queta font-bold text-gray-900 mb-2 text-center">
                      Anne Nicole Zambrano
                    </h3>
                    <p className="text-gray-700 text-center text-sm">
                      Communication Arts Student<br />
                      De La Salle University - Manila
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="mb-4">
                      <Image
                        src="/about/Jewel Garcia.png"
                        alt="Kirsten Jewel Garcia"
                        width={200}
                        height={200}
                        className="rounded-lg mx-auto object-cover"
                        unoptimized
                      />
                    </div>
                    <h3 className="text-xl font-bella-queta font-bold text-gray-900 mb-2 text-center">
                      Kirsten Jewel Garcia
                    </h3>
                    <p className="text-gray-700 text-center text-sm">
                      Communication Arts Student<br />
                      De La Salle University - Manila
                    </p>
                  </div>
                </div>
              </section>
            </ScrollAnimation>

            {/* Mission */}
            <ScrollAnimation direction="fadeInUp" delay={500}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  Mission
                </h2>
                <p className="leading-relaxed text-gray-700">
                  To document and narrativize the emotional architecture of the Filipino home, moving beyond physical structure to explore how memory, aspiration, and everyday life shape our sense of belonging. We aim to leverage immersive storytelling to bridge the gap between the design of spaces and lived experience, making personal struggles for autonomy and control universally relatable.
                </p>
              </section>
            </ScrollAnimation>

            {/* Vision */}
            <ScrollAnimation direction="fadeInUp" delay={600}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  Vision
                </h2>
                <p className="leading-relaxed text-gray-700">
                  To be the digital sanctuary where Filipinos redefine the meaning of 'home', a space that prioritizes peace, self-definition, and emotional stability over financial metrics. Our vision is to create an online community built on shared vulnerability that empowers every individual to see their living space not just as a structure but as a blueprint for their desired future self.
                </p>
              </section>
            </ScrollAnimation>

            {/* Link to About The Project */}
            <ScrollAnimation direction="fadeInUp" delay={700}>
              <div className="text-center mt-12">
                <Link
                  href="/about-the-project"
                  className="inline-block px-8 py-4 bg-[#BE8CC1] rounded-[81px] text-white font-bella-queta font-bold text-xl tracking-[0.04em] hover:bg-[#a87bac] transition-colors"
                >
                  Learn More About The Project
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  )
}

