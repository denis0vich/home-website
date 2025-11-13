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
                  When does the road to quietude begin to appear? Follow Ethan&apos;s climb from restless nights toward a horizon of peace.
                </p>
              </header>
            </ScrollAnimation>
          </div>

          <section className="mt-16 space-y-12">
            {/* Opening Section */}
            <StorySection
              sectionId="elijah-opening"
              backgroundColor="#e3f2fd"
              particleEffect="sparkles"
              particleColors={['#64b5f6', '#90caf9', '#bbdefb']}
              particleIntensity={0.6}
              floatingText={['STILLNESS', 'REST', 'QUIET', 'BREATHE']}
              floatingTextIntensity={0.4}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <StoryParagraph>
                Elijah doesn&apos;t recall a time when he wasn&apos;t longing to be somewhere else. He imagined a quiet place, where the only sound was the one he allowed. A world where his only companion was silence. In that place, his heart could finally rest, no longer thrumming with the constant hum of worry beneath his skin. No demands. No responsibilities. He was alone, and in that solitude, he believed he could conquer the world.
              </StoryParagraph>

              <StoryParagraph>
                He could almost hear the stillness.
              </StoryParagraph>

              <StoryParagraph>
                In another life, another version of him was living it now.
              </StoryParagraph>

              <ScrollAnimation direction="fadeIn">
                <p className="mb-8 text-center text-xl font-light leading-relaxed" style={{ color: '#ffffff', textShadow: '0 1px 3px rgba(0, 0, 0, 0.8), 0 0 2px rgba(0, 0, 0, 0.9)' }}>
                  He closes his eyes.
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
            </StorySection>

            {/* Dream Section */}
            <StorySection
              sectionId="elijah-dream"
              backgroundColor="#e3f2fd"
              particleEffect="sparkles"
              particleColors={['#64b5f6', '#90caf9', '#bbdefb']}
              particleIntensity={0.6}
              floatingText={['DREAM', 'HOME', 'LOVE', 'PEACE']}
              floatingTextIntensity={0.4}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <StoryAudio src="/audio/Elijah - panalangin piano.mp3" loop volume={0.5} />
              <StoryImage src="/stories-assets/FOR ETHAN(1).jpg" alt="Illustration of Elijah's story" />

              <StoryParagraph>
                &quot;Mahal! I&apos;m home!&quot; The sound of his wife&apos;s voice settled over the rooms as she closed the door.
              </StoryParagraph>

              <StoryParagraph>
                She placed her car keys on the glass side table beside the white, pristine sofa. Elijah was in the kitchen when he heard her, rolling dough on top of the marble kitchen island. Every surface of his home was sleek. This was an area that only required simple maintenance, where every swipe of the hand left no trace of dirt or dust.
              </StoryParagraph>

              <StoryParagraph>
                He loved cooking and baking for his loved ones, especially his wife. It was a therapeutic activity, where each dish he made spoke of his love. Apo Hiking Society&apos;s song Panalangin, his favorite, played softly through the built-in speakers he had installed in the ceiling.
              </StoryParagraph>

              <StoryParagraph>
                She hugged him from behind, her weight an everlasting comfort to his presence. He turned around to spin her in a quick, bright circle as he belted out the lyrics, laughing at the sound of his own voice. Cold air seeping from the air conditioner brushed against his arms, making his skin tingle. His feet settled into the ornate, marble tiles under his bare feet. Spending a lifetime with his wife and the family they were building was more than enough. Everything was where it should be, held in perfect, intentional order.
              </StoryParagraph>

              <ScrollAnimation direction="fadeIn">
                <p className="mb-12 text-center text-2xl font-medium leading-relaxed md:text-3xl lg:text-4xl" style={{ fontSize: 'clamp(1.5rem,3.5vw,2.25rem)', color: '#ffffff', textShadow: '0 1px 3px rgba(0, 0, 0, 0.8), 0 0 2px rgba(0, 0, 0, 0.9)' }}>
                  But reality was brighter than the sun.
                </p>
              </ScrollAnimation>
            </StorySection>

            {/* Reality Section */}
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
                He opened his eyes. The sharp white of his dream dissolved into the chipped melamine countertop, the single, stained electric kettle wobbling on the edge. His kitchen island was a small plastic table, its legs uneven, where he rested his weary elbows. He tore open a packet of instant noodles. The kettle rattled as it boiled.
              </StoryParagraph>

              <StoryParagraph>
                The bustling street of Paco was the only home he had ever known. When he opened their dingy, dusty window, the strident spirit of Manila came to life. He heard the wheels of the jeepneys, accompanied by the metallic clang of passing tricycles. The blaring, distorted vocals from a neighbor&apos;s karaoke machine at two in the afternoon—always two in the afternoon—were always followed by the piercing curse: &quot;Putangina mo!&quot; from the tambays down the street. The melodies he would often hear formed a rhythm that made him wish he were deaf.
              </StoryParagraph>

              <StoryParagraph>
                Inside, his mother&apos;s voice blended with the TV&apos;s static. Even in his room, the noise found him. He peeled off his shirt, but the heat refused to leave his skin. This was the repeating tune he danced to within the thin walls of his space.
              </StoryParagraph>

              <StoryImage src="/stories-assets/FOR ETHAN(2).jpg" alt="Illustration of Elijah's story" />
            </StorySection>

            {/* Anxiety Section */}
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
                Elijah reminded himself he was luckier than those who had nothing to eat. His family was there, holding his hand through it all. But the exhaustion that came with having no say in his own life grew steadily. It was as if life had turned into a circus. And, the worst part was that everyone wanted to be part of the show.
              </StoryParagraph>

              <StoryParagraph>
                Every night, when insomnia took hold of him, he would slip downstairs to get a glass of milk. His mother would still be there, sorting papers by the glow of her phone. Bills, he assumed. Even in the dim light, the worry on her face was clear. Tuition. Groceries. Rent.
              </StoryParagraph>

              <StoryParagraph>
                &quot;Tignan mo si Sevi, naka-abroad na oh,&quot; she said once, scrolling through Facebook. His cousin, their family&apos;s pride. The pressure pressed on his chest like a command.
              </StoryParagraph>

              <StoryParagraph>
                Some mornings, his heart pounded just from opening his banking app. He never knew if he had enough for lunch. In economics class, as the professor explained the sunk cost fallacy, his mind drifted. His parents had invested everything in his education. Some neighbors said it was foolish to let him study instead of work. But Elijah fought for it. He had to believe it would pay off. Elijah feels like he&apos;s cutting his losses early, praying that the climb ahead will lead to something worth all this.
              </StoryParagraph>

              <StoryParagraph>
                When Elijah would get home from school, the voice in his head did not stop. What if they couldn&apos;t pay his tuition? What if the lights went out? What if. What if.
              </StoryParagraph>

              <StoryParagraph>
                His friend once told him he might be depressed. But Elijah didn&apos;t think he had the right to be. Depression was for people who could afford to stop. He had to keep going.
              </StoryParagraph>

              <ScrollAnimation direction="fadeIn">
                <p className="mb-12 text-center text-2xl font-light leading-relaxed md:text-3xl" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', color: 'inherit', textShadow: '0 1px 3px rgba(0, 0, 0, 0.8), 0 0 2px rgba(0, 0, 0, 0.9)' }}>
                  When the noise became too much, he clung to his dreams.
                </p>
              </ScrollAnimation>
            </StorySection>

            {/* Sea Section */}
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
                It&apos;s not often that Elijah gets to savor the beauty of the wild, blue seas. The sound of the waves crashing on the shore, and the rocks pushing against his feet, made him smile at the serenity. He had always been fascinated with water—how it flows, how it goes, not caring what others would think of it. The saline tang of the sea was prominent in the air. He touched the cold water. It was magic, time travel even, knowing how many had walked in this sea before he was born, and how many would witness its beauty for generations to come.
              </StoryParagraph>

              <StoryParagraph>
                He heard his friends laughing as they took pictures. His little secret was that John, his classmate, helped him with a side hustle. They did the homework of their lazy classmates. With the money he earned from completing full-blown research papers and science assignments, he was able to give his sister Maya an allowance and pay for his field trip to Batangas.
              </StoryParagraph>

              <StoryParagraph>
                The seagulls were squawking overhead, squabbling for bread from their classmates&apos; food. Elijah was brave enough to look at the sun straight on. His eyes burned, but he chose to feel something for today.
              </StoryParagraph>

              <StoryParagraph>
                They visited a few historical locations in Batangas. When they had free time, Elijah dipped his toes into the water and swam, far, far away from the shore. He never had a vacation. Even during summer break, he had to find odd jobs just to help out at home. Here, while he floated in the depths of the ocean, he stared at the vast skies, wondering if he&apos;d ever get to see bioluminescent algae in the sea. Granted, it was still day, so the sunlight would make it hard to see the cerulean glow of the organisms. Perhaps one day, when he learns to free dive in the islands of Palawan. No worry came to mind. His heart was steady. Until the water began to fill his lungs.
              </StoryParagraph>
            </StorySection>

            {/* Ocean Calm Section */}
            <StorySection
              sectionId="elijah-ocean"
              backgroundColor="#01579b"
              particleEffect="sparkles"
              particleColors={['#0277bd', '#0288d1', '#039be5']}
              particleIntensity={0.6}
              floatingText={['INFINITE', 'UNIVERSE', 'CALM', 'PEACE']}
              floatingTextIntensity={0.5}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <StoryParagraph>
                The voices in his head were hard to cure. He had no adequate money to book a consultation. Moments like this were what kept him at peace. Being human in the ocean reminded him that the universe is infinite, forever expanding. His place in it was like that of an ant under a microscope. The ocean welcomed him with open arms; his problems did not matter when he swam with fish or tasted the salty water beneath his tongue. He knew that his cortisol levels were decreasing, his blood pressure normal. The water was calming, unlike the land where he lived.
              </StoryParagraph>
            </StorySection>

            {/* Drowning Section */}
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
                Inhaling the tides, he sank underwater, blowing bubbles through his mouth. He must have reached the deeper side of the beach. He coughed, then saw pitch black through his eyes. He was coughing profusely, and for a moment, he wanted to succumb to the abyss. He heard his name echoing through the reef far below. There was a suffocating absence of light. The void had called him, and he almost answered. A sudden grip caught his shoulders, dragging him out of the dark. His friend, John, had jumped into the water and saved him.
              </StoryParagraph>

              <StoryParagraph>
                Sometimes, Elijah would think of that accident, of how his life could&apos;ve ended. Even now, he couldn&apos;t shake the sensation of being dragged back. And in the hollow space where true relief should have found him, there bloomed a bitter, instantaneous thought: Bakit hindi mo na lang ako iniwan doon? He didn&apos;t know whether he was talking to himself, God, or the voices in his head.
              </StoryParagraph>
            </StorySection>

            {/* Cafe/Dating Section */}
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
                When the world became too loud, Elijah scrolled through photos of minimalist cafes. He liked their stillness, their curated environment. Cafes were clean, controlled, and safe. Outside, the curses and clatter of the street no longer startled him. His skin was used to the heat, the press of strangers&apos; shoulders inside the jeep. His eyes stayed vigilant, wary of what waited beyond each corner.
              </StoryParagraph>

              <StoryParagraph>
                None of the girls he met there ever saw his home. He didn&apos;t want them to.
              </StoryParagraph>

              <StoryParagraph>
                Until one day, he let someone in. Cooking was his love language, his small rebellion against the chaos. He made his special sinigang, the broth rich and sour. She smiled when he served her, though he missed the faint grimace as she crossed the threshold. That night, the neighbors sang louder than usual. It was karaoke night, apparently, and the floorboards joined in, creaking to the beat.
              </StoryParagraph>

              <StoryParagraph>
                A few days later, she ghosted him. He replayed the night, asking himself, May ipis ba na gumapang sa lamesa? Longing for love as a poor man was death sentence. He replayed the night, asking himself, May ipis ba na gumapang sa lamesa?
              </StoryParagraph>

              <StoryParagraph>
                When the panic rose, Elijah started tapping the meridian points of his body. He began with tapping the sides of his hands, under his arms, then areas around his face. According to Chinese beliefs, energy flows in the meridian points in the body. Now, he breathed slowly coming back to the world.
              </StoryParagraph>

              <StoryImage src="/stories-assets/FOR ETHAN(1).jpg" alt="Illustration of Elijah's story" />
            </StorySection>

            {/* Mother Section */}
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
                His identity was defined by his environment, and he couldn&apos;t blame the girls for wanting to pursue men with better prospects. In contrast, his mother, Maricel, had loved him without question. On his first day of college, she&apos;d sewn a loose button onto his polo.
              </StoryParagraph>

              <StoryParagraph>
                &quot;Kumain ka na,&quot; she murmured, pushing a plate of fried egg and rice toward him, despite her weariness. &quot;Kahit wala pa tayong ipon, may lakas ka pa rin dapat.&quot;
              </StoryParagraph>

              <StoryParagraph>
                Elijah remembers buying a soft pillow with the money he earned from tutoring his classmates. It wasn&apos;t much, just a clean square of comfort, still smelling faintly of detergent. He thought it might replace the tired pillows his parents had long slept on. When he opened their bedroom door, they were already asleep. His father&apos;s arm draped over his mother&apos;s side, the electric fan humming low. He placed the pillow beside them, careful not to wake them, as he lingered in the doorway. When the stars finally aligned for him, his parents would no longer have to sleep on worn-out mattresses. He kept their pictures in his wallet to inspire him during exam season.
              </StoryParagraph>

              <StoryAudio src="/audio/Elijah - Gentle Heartbeat Fading In.mp3" loop volume={0.4} />
              <StoryImage src="/stories-assets/FOR ETHAN(2).jpg" alt="Illustration of Elijah's story" />

              <StoryParagraph>
                As a nursing student, science and math became his lifeline. His mastery of numbers, paired with an almost stubborn curiosity about how life worked, placed him among the best in class. All he wanted was to give his mother the home she deserved. And in his mother&apos;s own little way, he realized, this was her first time living, too.
              </StoryParagraph>
            </StorySection>

            {/* Dream Home/Library Section */}
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
                At night, he sometimes stayed in the library, watching old American movies on the PC. Sleepless in Seattle was his favorite. A film about longing and beginning again. He held onto one line from Tom Hanks&apos; character:
              </StoryParagraph>

              <ScrollAnimation direction="fadeIn">
                <p className="mb-12 border-l-4 border-cyan-300 pl-6 text-2xl italic leading-relaxed md:text-3xl" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', color: '#ffd700', textShadow: '0 2px 8px rgba(255, 215, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.8), 0 0 3px rgba(255, 215, 0, 0.6)' }}>
                  &quot;I&apos;m gonna get out of bed every morning... and breathe in and out all day long. And then after a while I won&apos;t have to remind myself to get out of bed in the morning and breathe in and out.&quot;
                </p>
              </ScrollAnimation>

              <StoryParagraph>
                The grand interiors of their school library and the cozy cafés in the evening gave him solace. He mentally took note of the interiors she admired, details he would someday incorporate into his dream home. It wasn&apos;t about just obtaining luxury, but about the freedom and time that came with stability. When he finally had his dream home, he wanted a proper backyard. Like the ones he saw in Stranger Things on Netflix, where the characters could run and lounge freely. He imagined his children playing in the grass, soaking in the sun. To raise a family in these suffocatingly urban, tiny spaces was, somehow, an act against nature. He needed room for them to simply be.
              </StoryParagraph>

              <StoryParagraph>
                Back in high school, Elijah had turned to Zen Buddhism to calm his restless mind. Should he win the lottery, he would buy a large, minimalist house. The foundation of minimalist design emerged from Eastern cultures, drawing deeply from Zen Buddhism. This design and philosophy principle was strongly influenced by Taoism, embracing a disciplined simplicity that sought the clean and the harmonious.
              </StoryParagraph>

              <StoryParagraph>
                His home was painted in black and white, its lines sharp and deliberate. It was the opposite of the noise that defined his present.
              </StoryParagraph>

              <StoryParagraph>
                The contemporary house now prioritizes comfort. Dieter Rams is a German designer who once said that &quot;good design is as little design as possible&quot;. In focusing on the essential aspects of a home, it returns to state of purity. And Elijah, so badly wanted a fresh start, where his new story can unravel.
              </StoryParagraph>
            </StorySection>

            {/* Understanding Section */}
            <StorySection
              sectionId="elijah-understanding"
              backgroundColor="#fff3e0"
              particleEffect="sparkles"
              particleColors={['#ffd700', '#ffeb3b', '#fff59d', '#ffc107']}
              particleIntensity={0.7}
              floatingText={['TRUTH', 'BURDEN', 'EDUCATION', 'TICKET']}
              floatingTextIntensity={0.6}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <StoryParagraph>
                Elijah felt a sudden ache in his feet. The tiles. In that moment, the exhaustion of his own long commute and late-night studying felt selfish. He saw the truth clearly. It wasn&apos;t just him carrying the burden. His mother had been making these agonizing choices for years. His education was a means to an end. It will be his golden ticket to freedom. His love for the irrefutable logic of the universe brought him to the top. He graduated from college with honors and ranked as a topnotcher in the nursing boards. He remembered, then, that what makes humans different from animals is their wisdom. Elijah may be human, but his animalistic hunger to get out of the ghetto was something science could not explain.
              </StoryParagraph>
            </StorySection>

            {/* Conclusion Section */}
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
                Now, standing at the mountain&apos;s edge, the cities below gleamed in the sunrise. His friends forced him to go hiking with them. Elijah, looking ahead, understood his true vantage point. His hurdles in his house in Paco were only steps that he needed to surpass. Out of his love for his family and his dreams, he declared a vow. He would keep climbing, one tired, tenacious step at a time.
              </StoryParagraph>

              <StoryAudio src="/audio/Elijah_ Peaceful.mp3" loop volume={0.5} />
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
