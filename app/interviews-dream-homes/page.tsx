'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import Image from 'next/image'
import { useState, useRef } from 'react'

interface InterviewClip {
  id: string
  subject: string
  title: string
  description: string
  audioSrc: string
  duration?: string
  thumbnail?: string
}

interface DreamHome {
  id: string
  subject: string
  title: string
  description: string
  images: string[]
  colorPalette: string[]
}

export default function InterviewsDreamHomesPage() {
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({})

  const interviewClips: InterviewClip[] = [
    {
      id: 'blair-interview',
      subject: 'Blair',
      title: 'The Architecture of Moving',
      description: 'Blair discusses her journey through multiple homes and the search for belonging.',
      audioSrc: '/audio/Blair - Cold, High-Pitched Piano Chord .mp3',
    },
    {
      id: 'elijah-interview',
      subject: 'Elijah',
      title: 'The Vantage Point',
      description: 'Elijah shares his vision of a quiet sanctuary away from the city noise.',
      audioSrc: '/audio/Elijah - panalangin piano.mp3',
    },
    {
      id: 'lala-interview',
      subject: 'Lala',
      title: 'The Sculpture of Faith',
      description: 'Lala explores how her identity shapes her dream home.',
      audioSrc: '/audio/Lala - Gentle Ambient Piano.mp3',
    },
  ]

  const dreamHomes: DreamHome[] = [
    {
      id: 'blair-dream',
      subject: 'Blair',
      title: 'Maximalist Sanctuary',
      description: 'A vibrant space filled with color, pattern, and life—a rejection of the sterile perfection that once confined her.',
      images: ['/stories-assets/FOR BLAIR.jpg', '/stories-assets/FOR BLAIR 2.jpg'],
      colorPalette: ['#000000', '#FF6B35', '#FF8C42', '#FFA07A'],
    },
    {
      id: 'elijah-dream',
      subject: 'Elijah',
      title: 'Minimalist Retreat',
      description: 'A clean, white space with natural light, designed for silence and peace—the opposite of his current reality.',
      images: ['/stories-assets/FOR ETHAN.jpg', '/stories-assets/FOR ETHAN(1).jpg', '/stories-assets/FOR ETHAN(2).jpg'],
      colorPalette: ['#E8F4F8', '#B8D4E3', '#4A90A4', '#2C5F72'],
    },
    {
      id: 'lala-dream',
      subject: 'Lala',
      title: 'Private Sanctuary',
      description: 'A condo in the city with white walls, dark furniture, and complete privacy—a space where she can be herself.',
      images: ['/stories-assets/FOR LALA 2.webp', '/stories-assets/FOR LALA 3.webp', '/stories-assets/FOR LALA 4.webp'],
      colorPalette: ['#8B7355', '#A0826D', '#6B8E23', '#F5DEB3'],
    },
  ]

  const handlePlayPause = (id: string, audioSrc: string) => {
    const audio = audioRefs.current[id]
    
    if (!audio) {
      // Create audio element if it doesn't exist
      const newAudio = new Audio(audioSrc)
      audioRefs.current[id] = newAudio
      newAudio.play()
      setPlayingAudio(id)
      
      newAudio.onended = () => {
        setPlayingAudio(null)
      }
      return
    }

    if (playingAudio === id) {
      // Pause current audio
      audio.pause()
      setPlayingAudio(null)
    } else {
      // Stop any other playing audio
      Object.values(audioRefs.current).forEach(a => {
        if (a && a !== audio) {
          a.pause()
          a.currentTime = 0
        }
      })
      // Play this audio
      audio.play()
      setPlayingAudio(id)
    }
  }

  return (
    <div className="story-page-wrapper">
      <div className="story-background" />
      
      <div className="story-nav-overlay">
        <Navigation />
      </div>

      <div className="story-content-area">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <ScrollAnimation direction="fadeInUp" delay={100} duration={1200}>
            <header className="mb-16 text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bella-queta text-gray-900 mb-6 leading-tight">
                Interviews & Dream Homes
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Listen to intimate conversations with our subjects and explore visualizations of their dream homes. Each audio clip reveals the emotional journey behind their vision, while the dream home showcases bring their aspirations to life.
              </p>
            </header>
          </ScrollAnimation>

          {/* Interview Audio Clips Section */}
          <section className="mb-20">
            <ScrollAnimation direction="fadeInUp" delay={200} duration={1000}>
              <h2 className="text-4xl font-bella-queta font-bold text-gray-900 mb-8 text-center">
                Interview Audio Clips
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {interviewClips.map((clip, index) => (
                <ScrollAnimation key={clip.id} direction="zoomIn" delay={300 + index * 150} duration={1000}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    {/* Thumbnail or placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                      {clip.thumbnail ? (
                        <Image
                          src={clip.thumbnail}
                          alt={clip.subject}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="text-center">
                          <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center mb-3 mx-auto">
                            <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                            </svg>
                          </div>
                          <p className="text-gray-700 font-bella-queta font-bold text-lg">{clip.subject}</p>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bella-queta font-bold text-gray-900 mb-2">
                        {clip.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {clip.description}
                      </p>

                      {/* Audio Player */}
                      <button
                        onClick={() => handlePlayPause(clip.id, clip.audioSrc)}
                        className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-bella-queta font-bold"
                      >
                        {playingAudio === clip.id ? (
                          <>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <span>Pause</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            <span>Play Interview</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </section>

          {/* Dream Homes Showcase Section */}
          <section>
            <ScrollAnimation direction="fadeInUp" delay={600} duration={1000}>
              <h2 className="text-4xl font-bella-queta font-bold text-gray-900 mb-8 text-center">
                Dream Home Showcases
              </h2>
            </ScrollAnimation>

            <div className="space-y-16">
              {dreamHomes.map((home, index) => (
                <ScrollAnimation key={home.id} direction="zoomIn" delay={700 + index * 200} duration={1000}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <h3 className="text-3xl font-bella-queta font-bold text-gray-900 mb-2">
                            {home.title}
                          </h3>
                          <p className="text-gray-600 font-bella-queta">
                            {home.subject}'s Vision
                          </p>
                        </div>
                        {/* Color Palette */}
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600 font-bella-queta mr-2">Palette:</span>
                          {home.colorPalette.map((color, i) => (
                            <div
                              key={i}
                              className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                              style={{ backgroundColor: color }}
                              title={color}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="px-8 py-6">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {home.description}
                      </p>

                      {/* Image Gallery - Horizontal Carousel */}
                      <div className="relative">
                        <div className="overflow-x-auto scrollbar-hide scroll-smooth pb-4">
                          <div className="flex gap-4" style={{ width: 'max-content' }}>
                            {home.images.map((imgSrc, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="relative w-[400px] h-[300px] flex-shrink-0 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                              >
                                <Image
                                  src={imgSrc}
                                  alt={`${home.subject}'s dream home ${imgIndex + 1}`}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                  sizes="400px"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Scroll indicator */}
                        <div className="flex items-center justify-center mt-4 gap-2">
                          <div className="text-sm text-gray-500 font-bella-queta">
                            Scroll horizontally to view all images →
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

