'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import Image from 'next/image'
import { useState } from 'react'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Gallery captions from the docx
  const galleryCaptions = [
    "This three-story house in Quezon City uses height for privacy, keeping family life separated and quiet from the street.",
    "This white kitchen in Rizal uses white and wood cabinets to create a clean, comfortable cooking space.",
    "This all-white room in Quezon provides a blank slate designed for quiet focus and personal ideas.",
    "This single-story home in Parañaque provides easy access and flow, connecting all rooms on one level.",
    "This condo living room in Quezon uses bright orange to feel energetic and unique, showing the owner's style.",
    "These modern apartments in Cavite use wood and lighting to create a calm, lit-up refuge at night.",
    "This modern house in Quezon uses glass walls to connect the indoor space to the pool's calming view.",
    "This modern dining room in Cavite uses an all-white theme to make food and conversation the main focus.",
    "This living room in Parañaque uses black furniture and blinds to create a dark, private place to relax.",
    "This outdoor seating area in Cavite uses wooden touches to create a spot for relaxing together and connecting outside.",
    "This wooden house in Cavite uses wood and small lights to give a strong feeling of warmth and security.",
    "This two-story house in Cavite provides a modern, beige exterior that looks stable and simple.",
    "These airy apartments in Cavite feel open and bright in the daytime, welcoming the morning light.",
    "This apartment complex in Sta. Mesa uses small windows and no balconies to keep the building private and secure.",
    "This internal courtyard in Sta. Mesa makes the area feel tight and enclosed due to the tall walls limiting air.",
    "This apartment building in BGC provides big windows that connect residents directly to city life.",
    "This apartment building in Sta. Mesa uses small windows that make the space strictly functional over scenic.",
    "This gated house in Pandacan provides a strong gate and many plants to be both safe and full of life.",
    "This gated house in Pandacan uses an outdoor altar to make faith a visible part of the home.",
    "This Brutalist apartment in Pandacan uses heavy concrete to feel strong and secure, prioritizing durability.",
    "This townhouse design in Pandacan provides many separate, compact homes attached within one larger building.",
    "This home in Pandacan uses red gates and no ground-floor windows to ensure maximum privacy and street-level security.",
    "This home in Pandacan provides fences for security, but bright decorations show personality shining through.",
    "This house in Pandacan uses bright, unusual colors to make it stand out and show bold personal style.",
    "This home's hidden location in Pandacan makes an extremely private atmosphere, away from the neighborhood's noise.",
    "This street view in Pandacan shows the community is tightly packed, with busy, overlapping lives.",
    "This classic Filipino style house in Pandacan is painted blue and gives a feeling of history and tradition.",
    "This classic house in Pandacan uses no ground-floor windows and many plants to create a private, green escape.",
    "This four-story apartment in Pandacan uses fenced windows and no terraces to maximize secure living space.",
    "This two-story house in Pandacan uses fenced windows and no ground-floor windows to make the home a secure vault.",
    "This three-story house in Pandacan provides fences and gates to confirm it is highly secured.",
    "This condo skyscraper in Makati provides a tall, quiet view that is far away from the street noise and crowds.",
    "This glass building in BGC overlooks a park to offer city life with a beautiful view of nature.",
    "This condo's view in BGC is mostly of other towers, defining a life lived among high-rise buildings.",
    "This apartment in BGC provides a balcony and view of trees to create a balanced city life with fresh air.",
    "This apartment's location in BGC is close to trees which act as a natural break that calms the city environment.",
    "This apartment in BGC provides a large balcony making private outdoor living a key luxury feature of the home.",
    "This beach house in Batangas uses big windows and balconies facing the sea for escape and enjoying nature.",
    "This condo in Pasay provides a view of the clean, large pool, giving the space a resort-like feel inside the city.",
    "This subdivision in Nueva Ecija provides a large park and space between homes designed for stress-free family life."
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
              Gallery
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation direction="fadeInUp" delay={300}>
            <p className="text-xl font-bella-queta text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              Experience the concept of home through the lens of those who live it every day. Our "Feels Like Home" Photo Carousel is a heartfelt collection of intimate moments captured by users, proving that home is truly defined by memory and presence, not perfection or price tag. Contrast these personal reflections with Our Gallery of homes across Metro Manila, where you can link specific architectural features to the psychological needs we've explored throughout the magazine.
            </p>
          </ScrollAnimation>

          {/* Feels Like Home Carousel */}
          <ScrollAnimation direction="fadeInUp" delay={400}>
            <section className="mb-20">
              <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6 text-center">
                Feels Like Home
              </h2>
              <p className="text-gray-700 font-bella-queta text-center mb-8 max-w-2xl mx-auto leading-relaxed">
                Home is a collection of stories, carried by memory and presence, by the living and those who came before. It is where souls rest, heal, and learn to begin again. Feels Like Home gathers these small, honest moments through a series of selfies taken by people in the spaces they call home. Each face holds a history they choose to honor.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <div key={num} className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={`/gallery/feels-like-home/${num}.png`}
                      alt={`Feels like home ${num}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </section>
          </ScrollAnimation>

          {/* Our Gallery */}
          <ScrollAnimation direction="fadeInUp" delay={500}>
            <section className="mb-20">
              <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6 text-center">
                Our Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 40 }, (_, i) => i + 1).map((num) => (
                  <ScrollAnimation key={num} direction="zoomIn" delay={600 + (num * 10)}>
                    <div 
                      className="relative aspect-video overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all group"
                      onClick={() => setSelectedImage(selectedImage === num ? null : num)}
                    >
                      <Image
                        src={`/gallery/our-gallery/house${num}.jpg`}
                        alt={`House ${num}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                      {selectedImage === num && (
                        <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-4">
                          <p className="text-white font-bella-queta text-sm text-center">
                            {galleryCaptions[num - 1]}
                          </p>
                        </div>
                      )}
                    </div>
                    {selectedImage !== num && (
                      <p className="text-sm text-gray-600 font-bella-queta mt-2 text-center">
                        {galleryCaptions[num - 1].substring(0, 60)}...
                      </p>
                    )}
                  </ScrollAnimation>
                ))}
              </div>
            </section>
          </ScrollAnimation>

          {/* Video Reel */}
          <ScrollAnimation direction="fadeInUp" delay={700}>
            <section className="mb-12">
              <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6 text-center">
                Life in the Dream Home
              </h2>
              <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
                <video
                  src="/videos/life-in-the-dream-home.mov"
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

