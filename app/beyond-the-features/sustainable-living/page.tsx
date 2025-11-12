'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import StoryImage from '@/components/StoryImage'
import StoryParagraph from '@/components/StoryParagraph'

export default function SustainableLivingPage() {
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
                Sustainable Living
              </h1>
              <p className="text-xl font-bella-queta text-gray-600">
                Biophilia: Nature in the Concrete Jungle
              </p>
            </header>
          </ScrollAnimation>

          <div className="prose prose-lg max-w-none">
            <ScrollAnimation direction="fadeIn" delay={300} duration={1200}>
              <p className="text-2xl md:text-3xl leading-relaxed text-gray-700 mb-16 italic font-light text-center max-w-3xl mx-auto">
                Sustainable Living is about building a future that gives back. We explore the critical, often psychological, link between environmental responsibility and personal well-being, showing how small design and lifestyle choices can transform a mere dwelling into an ethical, nature-connected sanctuary in the midst of the concrete jungle.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={400}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  The Need for Green
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Living in the hyper-dense, often sensory-overloaded environment of Metro Manila, the pursuit of an ideal space often boils down to a single, essential need: peace. While we typically think of peace in financial or personal terms, science suggests a far deeper, more ancient longing is at work.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  The term biophilia, coined by psychologist Erich Fromm in 1964, refers to people&apos;s innate, evolutionary drive to connect with life and natural systems. Stemming from the Greek words for &quot;life&quot; and &quot;love&quot;, this concept explains why a walk through a forest or the sound of the ocean waves can instantly soothe and recenter us. When we cannot escape to nature, the solution is to bring nature into our refuge.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Architects and designers have formalized this need into biophilic design, which actively integrates nature into the built environment. As Stephen Kellert, a prominent advocate, wrote, this practice is crucial because it offers profound psychological benefits, including reduced stress and improved cognitive function. Biophilic spaces are not just aesthetically pleasing, they are fundamental to human well-being.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Kellert established six key elements of biophilic design that inform this practice:
                </p>
                <ul className="list-disc pl-8 mb-6 space-y-4 text-gray-700">
                  <li><strong>Environmental Features:</strong> Direct connections to nature, such as using natural materials (wood, stone), ensuring access to sunlight, incorporating water features, and prioritizing well-ventilated spaces.</li>
                  <li><strong>Natural Shapes and Forms:</strong> Incorporating the patterns and motifs found in nature, like the structure of a beehive, the curve of a tree, or the organic shape of leaves.</li>
                  <li><strong>Natural Patterns and Processes:</strong> Focusing on variations and richness, such as the interplay of light and shadow, the way materials age and change over time, and focal points that offer visual contrast and complexity.</li>
                  <li><strong>Light and Space:</strong> Using both natural light and filtered daylight, while also manipulating light to create reflective surfaces and visual shapes that bring movement to the space.</li>
                  <li><strong>Place-Based Relationships:</strong> Linking the space to the local culture and ecology. This is why people feel a strong connection to local materials and geographical features, leading to the feeling of &quot;homesickness&quot; when away.</li>
                  <li><strong>Evolved Human-Nature Relationships:</strong> Recreating the evolutionary benefits of nature, such as creating a sense of protection and refuge, or fostering feelings of awe and exploration, within the building&apos;s design.</li>
                </ul>
              </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={500}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  Sanctuary Through the Senses
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  For Gen Z battling the intense pressures of adulthood and urban life, embracing biophilic design is a powerful, direct path to building your psychological sanctuary. The benefits of having this design aren&apos;t abstract, it&apos;s how you feel when you wake up each morning.
                </p>
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl font-bella-queta font-bold text-gray-900 mb-3">
                      Natural light for a much happier day.
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      Sunlight is a critical regulator for your mood. When your space is flooded with natural light, you&apos;re helping your body manage its own clock. Studies show exposure to daylight actually helps lower cortisol (that annoying stress hormone), making your apartment a place of true restoration instead of chronic anxiety.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bella-queta font-bold text-gray-900 mb-3">
                      Indoor plants clean the air (and the vibe).
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      They help filter the air in dense urban areas where quality is a concern, which immediately builds a sense of physical safety. But the very presence of life is also directly linked to lower stress and better focus. A little green goes a long way toward quietening the noise in your mind.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bella-queta font-bold text-gray-900 mb-3">
                      Natural textures ground us.
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      Have you ever noticed how calming it feels to touch raw wood or smooth stone? Materials like unfinished rattan, cozy linen, or exposed brick genuinely activate your senses. These natural textures act as grounding anchors that remind your system of the outdoors, helping to mute the relentless buzz of the city. The simplicity and warmth stand in stark contrast to the cold, impersonal structures of concrete, truly reinforcing your space as a refuge.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={600}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  How can I apply this?
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700 font-bold">
                  You don&apos;t need a big budget or a huge space, you just need to be intentional.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bella-queta font-bold text-gray-900 mb-3">
                      1. Maximize vertical green space
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      Look up! If floor space is a luxury right now, start maximizing the vertical plane. Use hanging planters near windows or tiered shelves against walls. Every inch of vertical space you dedicate to greens is an inch that amplifies the biophilic benefits without eating up your limited floor area.
                    </p>
                    <StoryImage 
                      src="/gallery/feels-like-home/1.png" 
                      alt="Hanging plants" 
                      delay={100}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bella-queta font-bold text-gray-900 mb-3">
                      2. Passive cooling
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      Stop relying so heavily on expensive, energy-guzzling air conditioning. This is a crucial step towards both environmental and financial liberation. Focus on cross-ventilation, and ensure air can flow freely across the room. Use sheer curtains to filter harsh sun while maintaining air movement, and never block windows or vents with furniture.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bella-queta font-bold text-gray-900 mb-3">
                      3. Choose air-purifying allies.
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      Invest in plants that pull double duty. Go for species like Snake Plants, Spider Plants, or Peace Lilies. Placing these in your work zone or bedroom gives you both beautiful aesthetics and a quantifiable improvement in the air quality of your personal space.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <StoryImage 
                        src="/gallery/feels-like-home/2.png" 
                        alt="Snake plants" 
                        delay={200}
                      />
                      <StoryImage 
                        src="/gallery/feels-like-home/3.png" 
                        alt="Peace lilies" 
                        delay={300}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bella-queta font-bold text-gray-900 mb-3">
                      4. Mirror the outdoors AKA trick the brain
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      Use reflective surfaces and mirrors, placing them strategically near light sources to bounce natural light deeper into the room. This technique mimics the dynamic movement of light in nature and creates an instant illusion of openness and spaciousness, which helps to fight that claustrophobic urban feeling.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bella-queta font-bold text-gray-900 mb-3">
                      5. Embrace imperfection
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      When choosing furniture or small accents, look for local, raw materials. The visible grain of wood or the texture of woven rattan brings the natural element indoors, connecting your sanctuary to the local environment and making your home feel authentic and ethically grounded.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollAnimation>
          </div>
        </article>
      </div>
    </div>
  )
}

