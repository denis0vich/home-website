'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import StoryParagraph from '@/components/StoryParagraph'

export default function InteriorDesignerPage() {
  return (
    <div className="story-page-wrapper">
      <div className="story-background" />
      
      <div className="story-nav-overlay">
        <Navigation />
      </div>

      <div className="story-content-area">
        <article className="max-w-4xl mx-auto px-6 py-12 pb-20">
          {/* Header */}
          <ScrollAnimation direction="fadeInUp" duration={1200}>
            <header className="mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bella-queta text-gray-900 mb-6 leading-tight">
                How Interior Design and Psychology Transform Pain Into Peace
              </h1>
              <p className="text-xl font-bella-queta text-gray-600 mb-6">
                This article is based on original interviews conducted by the authors with Interior Designer Lucia Da Silva and Psychometrician Gabrielle Zambrano, who provided expert insight into the relationship between mental health, identity, and physical space.
              </p>
            </header>
          </ScrollAnimation>

          {/* Story Content */}
          <div className="prose prose-lg max-w-none">
            <ScrollAnimation direction="fadeIn" duration={1200}>
              <p className="text-2xl md:text-3xl leading-relaxed text-gray-700 mb-16 italic font-light text-center max-w-3xl mx-auto">
                Psychometrician Gabrielle Zambrano defines the critical difference: &quot;A house is the physical structure. A home is the meaning we give to that structure.&quot; This meaning, she explains, is rooted in providing &quot;a sense of safety, belonging, love, memories, and identity.&quot;
              </p>
            </ScrollAnimation>

            <p className="mb-6 leading-relaxed text-gray-900" style={{ color: '#000000', textShadow: 'none' }}>
              The process of designing this mental refuge falls to experts like Interior Designer Lucia Da Silva. She asserts, &quot;A home is the personality in the house, the way that the designer and the client collaborate to make it seem or give the personality of the client.&quot; For the young Filipino facing chronic stress from traffic, noise, and the high cost of living, the design process itself becomes a form of therapy, a structured way to turn anxiety and past trauma into a deliberate, supportive environment.
            </p>

            <ScrollAnimation direction="fadeInUp">
            <section className="my-12">
              <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                Elijah and Anxiety Reduction
              </h2>

              <p className="mb-6 leading-relaxed text-gray-700">
                Interior design must first address the micro stressors that contribute to Elijah&apos;s daily anxiety. Da Silva explains that the right use of color is a powerful psychological tool. &quot;When you use darker colors, a space seems and feels smaller. When you use white, it feels bigger.&quot; For someone seeking escape from cramped, crowded conditions, light colors are immediately liberating.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Beyond color, the design must promote a clean mental slate. Zambrano highlights that &quot;clean spaces can rewire the brain to be calm and reduce micro stressors.&quot; Elijah&apos;s obsession with a spotless sink and organized surfaces is a direct psychological response to the competing necessity of clutter and delayed chores in his current life. A functional, well-designed space removes those small daily irritations, allowing the brain to feel safe enough to rest. The placement of a study desk near a window for natural view, for example, is a simple design choice that can &quot;fuel motivation and creativity,&quot; Zambrano notes.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Da Silva suggests designing core elements, like flooring, to be &quot;timeless&quot; so they don&apos;t require expensive, large scale replacement. This stability in the foundation allows the client to rearrange the more visible, changeable elements, like furniture or wall coverings, to achieve a sense of freedom without major financial outlay. This  approach ensures the space remains financially and emotionally manageable while the client works toward that stable future self.
              </p>
            </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp">
            <section className="my-12">
              <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                Blair and Identity Liberation
              </h2>

              <p className="mb-6 leading-relaxed text-gray-700">
                The home is where identity formation and self actualization occur. Zambrano states that a supportive living environment can create a strong sense of self, while the opposite can create &quot;doubts, insecurity and hindrance to a person&apos;s full potential.&quot; For Blair, design is an act of attachment reparation, healing what was painful in the past environment by building a space that prioritizes stability and belonging.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Since Blair&apos;s identity is fluid and continually evolving after years of repression, the space itself must be adaptable. Da Silva highlights the need for flexibility. She designs spaces that allow clients to rearrange furniture to make it &quot;seem like a new space, but at the same time it&apos;s not, to give them a sense of freedom.&quot;
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                This freedom is structural. By using open layouts, Blair can continually redefine the function of the space without costly renovations. The home becomes a collaborative partner in self discovery, where the physical environment is always ready to align with the client&apos;s shifting needs and preferences. Da Silva notes that the definition of liberation is highly personal, depending on whether the client desires a minimalist calm or a bold, expressive style. Ultimately, the design must ensure that Blair feels liberated to express themselves freely, rejecting the need to seek outside approval.
              </p>
            </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp">
            <section className="my-12">
              <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                Lala and Emotional Safety
              </h2>

              <p className="mb-6 leading-relaxed text-gray-700">
                Lala&apos;s journey is defined by the need to escape the judgment and boundary violations inherent in a multi-generational, traditional household. For her, the home must be a controlled retreat that supports her true self away from the eyes of society and family pressure.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Zambrano provides critical context on the multi-generational household structure common in the Philippines. While it offers shared support, it also results in &quot;little to no privacy, unclear boundaries and limited control over one&apos;s decision making.&quot; Lala&apos;s intense desire for a single-person condo, far from her family&apos;s province, is a direct psychological rejection of this environment. She is seeking the &quot;self discovery and independence&quot; that Zambrano associates with single-person living, which contributes to a healthier, more stable self-image.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                The interior designer acts as a translator between Lala&apos;s emotional need for liberation and the practical constraints of budget and condo regulations. Da Silva understands that clients&apos; social media aspirations often clash with reality. &quot;As a designer,&quot; she says, &quot;the clients are not designers, so sometimes they don&apos;t know it&apos;s not practical or possible.&quot;
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Da Silva&apos;s role is to ensure the core value, autonomy, remains intact even when sacrifices must be made. She explains she will tell clients upfront about the budget limitations but still find a way to make the space look &quot;similar, or inspired by&quot; the dream.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                The constant exposure to idealized images on social media, while motivating, can also be mentally taxing. Zambrano warns that it can increase comparison and a feeling of being left behind. Da Silva&apos;s expertise is essential in navigating this gap. She helps clients maintain the same vibe or similar elements of their inspiration while respecting reality.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Ultimately, the process of defining the dream home, its aesthetics, its colors, its organization, is an act of self worth. It gives the young professional a specific, compelling target to work toward, acting as an anchor in a chaotic world. Zambrano advises, &quot;Always have specific, manageable, attainable, realistic and timely goals. Do not compare your life to someone else&apos;s because your situation is not the same with other people.&quot;
              </p>
            </section>
            </ScrollAnimation>
          </div>
        </article>
      </div>
    </div>
  )
}
