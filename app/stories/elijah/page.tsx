'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import StoryImage from '@/components/StoryImage'
import StoryAudio from '@/components/StoryAudio'
import StoryVideo from '@/components/StoryVideo'
import StoryParagraph from '@/components/StoryParagraph'
import StorySection from '@/components/StorySection'

const SECTION_CHROME =
  'rounded-[2.75rem] border border-white/12 backdrop-blur-sm overflow-hidden shadow-[0_28px_90px_rgba(5,11,34,0.45)]'

export default function ElijahStoryPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050b22] text-white">
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(120%_140%_at_0%_-20%,rgba(163,208,255,0.18),rgba(8,24,73,0))]" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(120%_140%_at_90%_-10%,rgba(33,56,133,0.22),rgba(8,24,73,0))]" />

      <div className="relative z-[5]">
        <Navigation />
        <main className="relative w-full pt-36 pb-28">
          <div className="mx-auto w-full max-w-5xl px-6">
            <ScrollAnimation direction="fadeInUp" duration={1200}>
              <header className="rounded-3xl border border-white/15 bg-white/10 p-10 text-center shadow-[0_24px_70px_rgba(5,11,34,0.55)] backdrop-blur">
                <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.35em] text-white/70">
                  <span className="rounded-full border border-white/25 px-4 py-2">Subject: Elijah</span>
                  <span className="rounded-full border border-white/25 px-4 py-2">Mental Health · Financial Precarity</span>
                  <span className="rounded-full border border-white/25 px-4 py-2">Blues &amp; Golds</span>
                </div>
                <h1 className="text-5xl font-bella-queta text-white md:text-6xl lg:text-7xl">
                  The Vantage Point
                </h1>
                <p className="mt-6 text-lg text-white/80 md:text-xl">
                  Elijah longs for quiet while Manila’s debt and noise press in. Follow his climb from restless nights to a horizon of peace.
                </p>
              </header>
            </ScrollAnimation>
          </div>

          <section className="mt-16 space-y-12">
            <StorySection
              sectionId="elijah-dream"
              backgroundColor="#e3f2fd"
              particleEffect="sparkles"
              particleColors={['#64b5f6', '#90caf9', '#bbdefb']}
              particleIntensity={0.6}
              floatingText={['STILLNESS', 'REST', 'QUIET', 'BREATHE']}
              floatingTextIntensity={0.4}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <ScrollAnimation direction="fadeIn">
                <p className="mb-20 text-center text-3xl font-light italic leading-relaxed md:text-4xl lg:text-5xl" style={{ lineHeight: '1.6', fontSize: 'clamp(1.75rem,4vw,3rem)', color: '#ffffff', textShadow: '0 1px 3px rgba(0, 0, 0, 0.8), 0 0 2px rgba(0, 0, 0, 0.9)' }}>
                  Elijah imagines a place where the only sound is the one he allows. In that solitude his heart could finally rest.
                </p>
              </ScrollAnimation>

              <StoryParagraph>
                He could almost hear the stillness.
              </StoryParagraph>

              <StoryParagraph>
                In another life, another version of him was living it now.
              </StoryParagraph>

              <ScrollAnimation direction="fadeIn">
                <p className="mb-8 text-center text-xl font-light leading-relaxed" style={{ color: '#ffffff', textShadow: '0 1px 3px rgba(0, 0, 0, 0.8), 0 0 2px rgba(0, 0, 0, 0.9)' }}>
                  He closed his eyes.
                </p>
              </ScrollAnimation>

              <StoryImage src="/stories-assets/FOR ETHAN.jpg" alt="Open Eyes to Closed Eyes" />
              <div className="my-20">
                <StoryVideo
                  src="/stories-assets/EYES.mov"
                  autoPlay
                  muted
                  loop
                />
              </div>
              <StoryAudio src="/audio/Elijah - panalangin piano.mp3" loop volume={0.5} />
              <StoryImage src="/stories-assets/FOR ETHAN(1).jpg" alt="Illustration of Elijah's story" />

              <StoryParagraph>
                &quot;Mahal! I&apos;m home!&quot; His wife&apos;s voice settled over the rooms as she closed the door.
              </StoryParagraph>

              <StoryParagraph>
                She placed her keys beside the pristine sofa. Elijah rolled dough on the marble island. Every surface felt intentional, effortless.
              </StoryParagraph>

              <StoryParagraph>
                He loved cooking for the people he adored. Apo Hiking Society&apos;s &quot;Panalangin&quot; drifted from the ceiling speakers.
              </StoryParagraph>

              <StoryParagraph>
                She hugged him from behind. He spun her, laughing. Cold air brushed his arms. The life he wanted sparkled around them.
              </StoryParagraph>

              <ScrollAnimation direction="fadeIn">
                <p className="mb-12 text-center text-2xl font-medium leading-relaxed md:text-3xl lg:text-4xl" style={{ fontSize: 'clamp(1.5rem,3.5vw,2.25rem)', color: '#ffffff', textShadow: '0 1px 3px rgba(0, 0, 0, 0.8), 0 0 2px rgba(0, 0, 0, 0.9)' }}>
                  But reality was brighter than the sun.
                </p>
              </ScrollAnimation>
            </StorySection>

            <StorySection
              sectionId="elijah-reality"
              backgroundColor="#424242"
              particleEffect="none"
              floatingText={['MANILA', 'NOISE', 'HEAT', 'KARAOKE']}
              floatingTextIntensity={0.6}
              floatingTextDirection="chaotic"
              className={SECTION_CHROME}
            >
              <StoryAudio src="/audio/Elijah_ Streets of Manila.mp3" loop volume={0.5} />
              <StoryParagraph useTextReveal revealType="word" textRevealDelay={30}>
                He opened his eyes. The dream collapsed into chipped counters and a wobbling electric kettle.
              </StoryParagraph>

              <StoryParagraph>
                Jeepneys screamed below, karaoke blared, curses ricocheted. Every sound hammered into his small room.
              </StoryParagraph>

              <StoryImage src="/stories-assets/FOR ETHAN(2).jpg" alt="Illustration of Elijah's story" />

              <StoryParagraph>
                Inside, his mother's voice blended with TV static. Heat clung to his skin. This was the rhythm he couldn't escape.
              </StoryParagraph>
            </StorySection>

            <StorySection
              sectionId="elijah-anxiety"
              backgroundColor="#1a237e"
              particleEffect="none"
              floatingText={['WORRY', 'DEBT', 'FEAR', 'ANXIETY', 'STRESS', 'PRESSURE', 'INSOMNIA', 'EXHAUSTION', 'WHAT IF', 'BILLS', 'TUITION', 'RENT', 'WORRY', 'FEAR', 'ANXIETY']}
              floatingTextIntensity={0.8}
              floatingTextDirection="chaotic"
              className={SECTION_CHROME}
            >
              <StoryParagraph>
                Elijah reminded himself he was lucky to have food. Yet exhaustion grew like a shadow. Life felt like a circus and everyone wanted to watch.
              </StoryParagraph>

              <StoryParagraph>
                At night he found his mother sorting bills under phone light. Tuition. Groceries. Rent. Each word tightened around his chest.
              </StoryParagraph>

              <StoryParagraph>
                &quot;Tignan mo si Sevi, naka-abroad na,&quot; she sighed. Pressure thumped like a drum.
              </StoryParagraph>

              <StoryParagraph>
                Some mornings he couldn't open his banking app without his heart racing. He clung to his dream as the only quiet left.
              </StoryParagraph>

              <ScrollAnimation direction="fadeIn">
                <p className="mb-12 text-center text-2xl font-light leading-relaxed md:text-3xl" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', color: 'inherit', textShadow: '0 1px 3px rgba(0, 0, 0, 0.8), 0 0 2px rgba(0, 0, 0, 0.9)' }}>
                  When the noise became too much, he clung to his dreams.
                </p>
              </ScrollAnimation>
            </StorySection>

            <StorySection
              sectionId="elijah-beach"
              backgroundColor="#0277bd"
              particleEffect="sparkles"
              particleColors={['#03a9f4', '#29b6f6', '#4fc3f7', '#81d4fa']}
              particleIntensity={0.7}
              floatingText={['SEA', 'FLOAT', 'CALM', 'BLUE']}
              floatingTextIntensity={0.55}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <StoryAudio src="/audio/Elijah - sea waves.mp3" loop volume={0.5} />
              <StoryImage src="/stories-assets/Sailing sea.jpg" alt="Sailing at sea" />

              <StoryParagraph>
                The sea welcomed him. Waves crashed, salt filled the air. For a moment he belonged to nothing but water and sky.
              </StoryParagraph>

              <StoryParagraph>
                Friends laughed nearby. Side hustles had paid for this trip. The water felt like a secret he could afford.
              </StoryParagraph>

              <StoryParagraph>
                Seagulls squabbled above. Elijah stared at the sun, letting himself feel something beyond worry.
              </StoryParagraph>
            </StorySection>

            <StorySection
              sectionId="elijah-drowning"
              backgroundColor="#000051"
              particleEffect="strobe"
              particleColors={['#01579b', '#0277bd', '#0288d1', '#039be5']}
              particleIntensity={1.2}
              floatingText={['DROWN', 'SUFFOCATE', 'DARK', 'VOID', 'ABYSS', 'DEEP']}
              floatingTextIntensity={1}
              floatingTextDirection="down"
              className={SECTION_CHROME}
            >
              <StoryParagraph>
                He swam farther. Water filled his lungs. Darkness bloomed. The void tugged him under.
              </StoryParagraph>

              <StoryParagraph>
                A grip yanked him back. John dragged him upward. The ocean spit him into breath.
              </StoryParagraph>

              <StoryParagraph>
                Sometimes he wonders if life should have ended there. A bitter thought lingers: Bakit hindi mo na lang ako iniwan doon?
              </StoryParagraph>
            </StorySection>

            <StorySection
              sectionId="elijah-dating"
              backgroundColor="#2c2c2c"
              particleEffect="none"
              floatingText={['GHOSTED', 'CAFE', 'QUIET', 'MASK']}
              floatingTextIntensity={0.55}
              floatingTextDirection="chaotic"
              className={SECTION_CHROME}
            >
              <StoryParagraph>
                Cafés were his sanctuary. Minimalist, quiet, controlled. None of the girls he met there ever saw his home.
              </StoryParagraph>

              <StoryImage src="/stories-assets/FOR ETHAN(1).jpg" alt="Illustration of Elijah's story" />

              <StoryParagraph>
                He cooked sinigang for someone he liked. Karaoke creaked through the floorboards. Days later, she ghosted him.
              </StoryParagraph>

              <StoryParagraph>
                When panic rose, he tapped the meridian points of his body and reminded himself to breathe.
              </StoryParagraph>
            </StorySection>

            <StorySection
              sectionId="elijah-mother"
              backgroundColor="#fff8e1"
              particleEffect="sparkles"
              particleColors={['#ffd700', '#ffeb3b', '#fff59d']}
              particleIntensity={0.6}
              floatingText={['CARE', 'HOME', 'MOTHER', 'WARMTH']}
              floatingTextIntensity={0.5}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <StoryParagraph>
                His mother loved him without question. She slid a plate of rice toward him. &quot;Kahit wala pa tayong ipon, may lakas ka pa rin dapat.&quot;
              </StoryParagraph>

              <StoryAudio src="/audio/Elijah - Gentle Heartbeat Fading In.mp3" loop volume={0.4} />
              <StoryImage src="/stories-assets/FOR ETHAN(2).jpg" alt="Illustration of Elijah's story" />

              <StoryParagraph>
                He bought them a new pillow with tutoring money. He placed it beside his sleeping parents and promised they would rest easier soon.
              </StoryParagraph>

              <StoryParagraph>
                Science and math became his lifeline. He wanted to give his mother the home she deserved.
              </StoryParagraph>
            </StorySection>

            <StorySection
              sectionId="elijah-dream-home"
              backgroundColor="#e1f5fe"
              particleEffect="sparkles"
              particleColors={['#03a9f4', '#29b6f6', '#4fc3f7', '#81d4fa']}
              particleIntensity={0.7}
              floatingText={['MINIMAL', 'LIGHT', 'CALM', 'ZEN']}
              floatingTextIntensity={0.55}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <StoryParagraph>
                Sleepless in Seattle taught him to keep breathing. He clung to that line as a promise.
              </StoryParagraph>

              <ScrollAnimation direction="fadeIn">
                <p className="mb-12 border-l-4 border-cyan-300 pl-6 text-2xl italic leading-relaxed md:text-3xl" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', color: '#ffd700', textShadow: '0 2px 8px rgba(255, 215, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.8), 0 0 3px rgba(255, 215, 0, 0.6)' }}>
                  &quot;I&apos;m gonna get out of bed every morning... and breathe in and out.&quot;
                </p>
              </ScrollAnimation>

              <StoryParagraph>
                He memorized the way cafés felt, the minimal lines he loved. He imagined his children running in a backyard made of sunlight.
              </StoryParagraph>

              <StoryParagraph>
                He wanted a home shaped by Zen simplicity—clean, disciplined, enough.
              </StoryParagraph>
            </StorySection>

            <StorySection
              sectionId="elijah-hope"
              backgroundColor="#fffde7"
              particleEffect="sparkles"
              particleColors={['#ffd700', '#ffeb3b', '#fff59d', '#ffc107']}
              particleIntensity={0.8}
              floatingText={['CLIMB', 'SUNRISE', 'VOW', 'FREEDOM']}
              floatingTextIntensity={0.6}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <StoryParagraph>
                Elijah understood the weight wasn’t his alone. His mother had carried it long before him. His education was their ticket out.
              </StoryParagraph>

              <StoryAudio src="/audio/Elijah_ Peaceful.mp3" loop volume={0.5} />
              <StoryParagraph>
                On the mountain, dawn painted the city gold. He vowed to keep climbing, one tired, tenacious step at a time.
              </StoryParagraph>
              <StoryImage src="/stories-assets/Elijah_ Field.jpg" alt="Field" />

              <div className="my-20">
                <StoryVideo
                  src="/videos/elijah-dream-home.mp4"
                  controls
                />
              </div>
            </StorySection>
          </section>
        </main>
      </div>
    </div>
  )
}
