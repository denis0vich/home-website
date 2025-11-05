'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import { useState } from 'react'

interface ColorQuiz {
  colors: string[]
  aesthetic: string
  description: string
  why: string
  emotion: string
}

interface PictureQuiz {
  images: string[]
  answer: string
  description: string
}

export default function EntertainmentPage() {
  const [selectedColor, setSelectedColor] = useState<number | null>(null)
  const [quizAnswer, setQuizAnswer] = useState('')
  const [showQuizResult, setShowQuizResult] = useState(false)

  const colorQuizzes: ColorQuiz[] = [
    {
      colors: ['Beige', 'White', 'Soft Gray', 'Warm Wood Tone'],
      aesthetic: 'Minimalist / Japandi',
      description: 'Clean lines, neutral colors, and functional simplicity inspired by Scandinavian + Japanese design.',
      why: 'Makes small spaces feel open, calm, and uncluttered.',
      emotion: 'Soft neutrals evoke peace, clarity, and mental rest.'
    },
    {
      colors: ['Neon Pink', 'Electric Blue', 'Black'],
      aesthetic: 'Cyberpunk / Vaporwave',
      description: 'Futuristic, neon-lit vibe mixed with digital nostalgia.',
      why: 'Adds bold, immersive personality, mostly used in gaming rooms or modern studio setups.',
      emotion: 'Neon against dark tones creates excitement, energy, and overstimulation.'
    },
    {
      colors: ['Sage Green', 'Terracotta', 'Cream', 'Earth Brown'],
      aesthetic: 'Earth-Core / Organic Modern',
      description: 'Nature-inspired palette using muted greens, browns, and clay hues.',
      why: 'Brings warmth and eco-conscious design indoors, ideal for relaxing, nature-themed spaces.',
      emotion: 'Earth tones feel grounding and safe, like being embraced by nature.'
    },
    {
      colors: ['Mustard Yellow', 'Brick Red', 'Sea Blue', 'Cream', 'Bright Pink'],
      aesthetic: 'Retro (70s Revival)',
      description: 'Warm, nostalgic color combinations often seen in mid-century design, diners, and vintage posters.',
      why: 'Adds playful character and nostalgia without feeling childish.',
      emotion: 'Evokes comfort, familiarity, and playful warmth.'
    },
    {
      colors: ['Black', 'Deep Burgundy', 'Gold'],
      aesthetic: 'Luxury / Gothic Baroque',
      description: 'Dark, dramatic tones paired with metallics and rich textures.',
      why: 'Creates a mood of elegance, mystery, and high drama, common in sophisticated or artistic interiors.',
      emotion: 'Deep colors feel powerful and intense, evoking grandeur, secrecy, or passion.'
    }
  ]

  const pictureQuizzes: PictureQuiz[] = [
    {
      images: ['minimalist', 'scandinavian'],
      answer: 'Minimalist / Scandinavian',
      description: 'Functional, airy, neutral'
    },
    {
      images: ['industrial', 'loft'],
      answer: 'Industrial',
      description: 'Raw, urban loft, utilitarian'
    },
    {
      images: ['boho', 'artistic'],
      answer: 'Boho',
      description: 'Earthy, artistic, relaxed'
    },
    {
      images: ['brutalist', 'concrete'],
      answer: 'Brutalist',
      description: 'Heavy, geometric, raw materials'
    }
  ]

  return (
    <div className="story-page-wrapper">
      <div className="story-background" />
      
      <div className="story-nav-overlay">
        <Navigation />
      </div>

      <div className="story-content-area">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <ScrollAnimation direction="fadeIn" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bella-queta text-gray-900 mb-4 text-center">
              Entertainment & User Interaction
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation direction="fadeInUp" delay={300}>
            <p className="text-xl font-bella-queta text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              Engage with others in the Community Forum to share your own struggles, dream home blueprints, and cost-saving strategies for urban living. Take our Quizzes to reveal the core psychological drivers that are shaping your personal sanctuary, and learn what your needs for Silence or Expression truly mean for your ideal living space.
            </p>
          </ScrollAnimation>

          {/* Community Forum */}
          <ScrollAnimation direction="fadeInUp" delay={400}>
            <section className="mb-20">
              <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6 text-center">
                Community Forum
              </h2>
              <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg">
                <p className="text-gray-700 font-bella-queta mb-6 text-center">
                  Share your thoughts and experiences with our community:
                </p>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#BE8CC1] pl-4">
                    <p className="text-gray-900 font-bella-queta font-bold mb-2">
                      What spaces, whether physical or online, make you feel like you have control over your environment?
                    </p>
                  </div>
                  <div className="border-l-4 border-[#BE8CC1] pl-4">
                    <p className="text-gray-900 font-bella-queta font-bold mb-2">
                      What does your home give you that no other place can?
                    </p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-500 font-bella-queta">
                    Community forum features coming soon. Check back for interactive discussions!
                  </p>
                </div>
              </div>
            </section>
          </ScrollAnimation>

          {/* Quizzes */}
          <ScrollAnimation direction="fadeInUp" delay={500}>
            <section className="mb-20">
              <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6 text-center">
                Quizzes
              </h2>
              
              {/* Choose Your Color Quiz */}
              <div className="mb-12">
                <h3 className="text-2xl font-bella-queta font-bold text-gray-900 mb-6 text-center">
                  Choose Your Color
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {colorQuizzes.map((quiz, index) => (
                    <ScrollAnimation key={index} direction="zoomIn" delay={600 + (index * 100)}>
                      <div
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-[#BE8CC1]"
                        onClick={() => setSelectedColor(selectedColor === index ? null : index)}
                      >
                        <div className="flex gap-2 mb-4 flex-wrap">
                          {quiz.colors.map((color, i) => (
                            <div
                              key={i}
                              className="px-3 py-1 text-xs font-bella-queta rounded-full bg-gray-100 text-gray-700"
                            >
                              {color}
                            </div>
                          ))}
                        </div>
                        {selectedColor === index && (
                          <div className="mt-4 space-y-2">
                            <p className="font-bella-queta font-bold text-gray-900">
                              {quiz.aesthetic}
                            </p>
                            <p className="text-sm text-gray-700 font-bella-queta">
                              {quiz.description}
                            </p>
                            <p className="text-sm text-gray-600 font-bella-queta">
                              <strong>Why:</strong> {quiz.why}
                            </p>
                            <p className="text-sm text-gray-600 font-bella-queta">
                              <strong>Emotion:</strong> {quiz.emotion}
                            </p>
                          </div>
                        )}
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>

              {/* 4 Pics, 1 Home Quiz */}
              <div>
                <h3 className="text-2xl font-bella-queta font-bold text-gray-900 mb-6 text-center">
                  4 Pics, 1 Home
                </h3>
                <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg">
                  <p className="text-gray-700 font-bella-queta mb-6 text-center">
                    Show 4 photos forming a moodboard (same vibe/theme). Guess the single word or concept.
                  </p>
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={quizAnswer}
                      onChange={(e) => setQuizAnswer(e.target.value)}
                      placeholder="Enter your answer..."
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-bella-queta focus:border-[#BE8CC1] focus:outline-none"
                    />
                    <button
                      onClick={() => setShowQuizResult(true)}
                      className="w-full px-6 py-3 bg-[#BE8CC1] text-white font-bella-queta font-bold rounded-lg hover:bg-[#a87bac] transition-colors"
                    >
                      Submit Answer
                    </button>
                    {showQuizResult && (
                      <div className="mt-4 p-4 bg-green-50 rounded-lg">
                        <p className="text-gray-700 font-bella-queta">
                          Thank you for participating! Quiz results and detailed explanations coming soon.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

