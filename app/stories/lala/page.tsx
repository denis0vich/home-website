'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import StoryImage from '@/components/StoryImage'
import StoryAudio from '@/components/StoryAudio'
import StoryParagraph from '@/components/StoryParagraph'
import StorySection from '@/components/StorySection'
import AudioConsent from '@/components/AudioConsent'

const SECTION_CHROME =
  'rounded-[2.75rem] border border-white/12 backdrop-blur-sm overflow-hidden shadow-[0_28px_90px_rgba(5,11,34,0.45)]'

export default function LalaStoryPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050b22] text-white">
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(130%_160%_at_0%_-10%,rgba(245,237,220,0.18),rgba(8,24,73,0))]" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(120%_150%_at_90%_-15%,rgba(200,230,201,0.16),rgba(8,24,73,0))]" />

      <div className="relative z-[5]">
        <Navigation />
        <main className="relative w-full pt-36 pb-28">
          <AudioConsent />

          <div className="mx-auto w-full max-w-5xl px-6">
            <ScrollAnimation direction="fadeInUp" duration={1800}>
              <header className="rounded-3xl border border-white/15 bg-white/10 p-10 text-center shadow-[0_24px_70px_rgba(5,11,34,0.55)] backdrop-blur">
                <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.35em] text-white/70">
                  <span className="rounded-full border border-white/25 px-4 py-2">Subject: Lala</span>
                  <span className="rounded-full border border-white/25 px-4 py-2">Religion · Homophobia</span>
                  <span className="rounded-full border border-white/25 px-4 py-2">Warm Greens &amp; Browns</span>
                </div>
                <h1 className="text-5xl font-bella-queta text-white md:text-6xl lg:text-7xl">
                  The Sculpture of Faith
                </h1>
                <p className="mt-6 text-lg text-white/80 md:text-xl">
                  Lala carves space for herself through cathedrals, confessionals, and chosen family. Walk through the colors of her faith, fear, and freedom.
                </p>
              </header>
            </ScrollAnimation>
          </div>

          <section className="mt-16 space-y-12">
            <StorySection
              sectionId="lala-opening"
              backgroundColor="#f5f1e8"
              particleEffect="sparkles"
              particleColors={['#d6c7aa', '#f7e4c3', '#b39374']}
              particleIntensity={0.45}
              floatingText={['DEVOTION', 'PROCESSION', 'CANDLE', 'PRAYER']}
              floatingTextIntensity={0.35}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <ScrollAnimation direction="fadeIn">
                <p className="mb-20 text-center text-3xl font-light italic leading-relaxed text-white md:text-4xl lg:text-5xl" style={{ lineHeight: '1.6', fontSize: 'clamp(1.75rem,4vw,3rem)' }}>
                  The road back home is well-traveled, though the wheel drifts elsewhere. For Lala, home is a map still being written.
                </p>
              </ScrollAnimation>

              <StoryParagraph useTextReveal revealType="word" textRevealDelay={30}>
                The cathedral across the trees glowed in brown and amber hues. By night it turned hollow, the white cross watching like an unblinking eye. Lala looked away. She preferred All Souls’ Day.
              </StoryParagraph>

              <StoryParagraph>
                Día de los Muertos once took her family to Mexico. Faces were painted, marigolds bloomed, lanterns floated. Her parents honored their ancestors. Lala lit a candle for the version of herself she still wasn’t allowed to name.
              </StoryParagraph>
            </StorySection>

            <StorySection
              sectionId="lala-judgment"
              backgroundColor="#2c2c2c"
              particleEffect="none"
              floatingText={['JUDGMENT', 'CONTROL', 'IMAGE', 'RULES']}
              floatingTextIntensity={0.55}
              floatingTextDirection="chaotic"
              className={SECTION_CHROME}
            >
              <StoryParagraph>
                "There’s never been anything normal about us," said the boy on TV. Lala smirked. Her mother passed by just as two girls nearly kissed. "Watch something decent," she snapped. "Close your legs—you look like a slut."
              </StoryParagraph>

              <StoryParagraph>
                Lala turned off the TV. Her mother’s footsteps echoed, heavy and final. From the outside their life looked perfect. Fulfillment was an illusion only Lala could strip away.
              </StoryParagraph>
            </StorySection>

            <StorySection
              sectionId="lala-friends"
              backgroundColor="#fff8e1"
              particleEffect="sparkles"
              particleColors={['#ffd700', '#ffeb3b', '#fff59d']}
              particleIntensity={0.5}
              floatingText={['JOY', 'LAUGHTER', 'ESCAPE', 'BRIEF']}
              floatingTextIntensity={0.45}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <StoryParagraph>
                At the amusement park the roller coaster dropped. For a few minutes she felt untethered. When the ride stopped, grief returned as quietly as breath.
              </StoryParagraph>

              <StoryParagraph>
                Her friends passed out movie tickets, knowing her mother would never allow her to go. For a moment, the scent of coffee between them felt like freedom.
              </StoryParagraph>
            </StorySection>

            <StorySection
              sectionId="lala-rejection"
              backgroundColor="#3d0000"
              particleEffect="strobe"
              particleColors={['#ff0000', '#8b0000', '#dc143c']}
              particleIntensity={1.5}
              floatingText={['REJECTED', 'ALONE', 'HURT', 'SHAME']}
              floatingTextIntensity={1}
              floatingTextDirection="chaotic"
              className={SECTION_CHROME}
            >
              <ScrollAnimation direction="fadeIn">
                <p className="mb-16 text-center text-2xl font-medium leading-relaxed text-white md:text-3xl lg:text-4xl" style={{ fontSize: 'clamp(1.5rem,3.5vw,2.25rem)' }}>
                  A knock came at ten a.m. "You won’t come with us anymore," her mother said. "If you can’t follow rules, stay here." The door slammed.
                </p>
              </ScrollAnimation>

              <StoryAudio src="/audio/Lala - Heavy Door Slam .mp3" volume={0.6} fadeIn={false} />

              <StoryParagraph>
                Lala pressed her forehead to the wood. She’d studied all night. Good morning. Always a good morning in this house.
              </StoryParagraph>
            </StorySection>

            <StorySection
              sectionId="lala-faith-history"
              backgroundColor="#efebe9"
              particleEffect="none"
              floatingText={['HERITAGE', 'STONE', 'RITUAL', 'HISTORY']}
              floatingTextIntensity={0.35}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <StoryParagraph>
                In Aqaba, an ancient church was built around year 300. Before cathedrals, believers gathered in courtyards and gardens. No walls defined their faith.
              </StoryParagraph>

              <StoryParagraph>
                Lala thought of her home filled with crucifixes and holy water. She felt closest to God when she prayed in spaces that let her heart speak truth.
              </StoryParagraph>
            </StorySection>

            <StorySection
              sectionId="lala-play"
              backgroundColor="#fff3e0"
              particleEffect="sparkles"
              particleColors={['#ff9800', '#ffb74d', '#ffcc80']}
              particleIntensity={0.4}
              floatingText={['STAGE', 'ROLE', 'CROWN', 'VOICE']}
              floatingTextIntensity={0.4}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <StoryParagraph>
                In high school she played Anne Boleyn. She practiced the line all night: "I will be your Queen, Your Majesty."
              </StoryParagraph>

              <StoryParagraph>
                After the play she read Anne’s true story—a woman killed for a man who rewrote God’s laws. Lala envied that power. He broke a church for love. She couldn’t even whisper hers.
              </StoryParagraph>

              <ScrollAnimation direction="fadeIn">
                <p className="mb-12 text-center text-xl font-light italic leading-relaxed text-white/85">
                  If a king could defy God for the woman he wanted, why must she fear hell for simply wanting to love?
                </p>
              </ScrollAnimation>
            </StorySection>

            <StorySection
              sectionId="lala-confession"
              backgroundColor="#000000"
              particleEffect="none"
              floatingText={['SIN', 'SHAME', 'EVIL', 'UNWORTHY', 'DISGUSTING', 'HELL', 'SIN', 'SHAME', 'EVIL', 'UNWORTHY', 'DISGUSTING']}
              floatingTextIntensity={0.8}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <StoryParagraph useTextReveal revealType="word" textRevealDelay={30}>
                "Bless me, Father, for I have sinned." Between her and the priest stood a wooden grate. "I’ve desired a woman," she whispered.
              </StoryParagraph>

              <StoryParagraph>
                "Disgusting," the priest muttered. "Repent, or hell waits for you."
              </StoryParagraph>

              <StoryParagraph>
                Tears welled. She thought of every sinner who had breathed that same air, their sins lingering in the silence.
              </StoryParagraph>

              <StoryParagraph>
                She wished them peace. She wondered if forgiveness might find them, even if it no longer came for her.
              </StoryParagraph>

              <StoryImage src="/stories-assets/FOR LALA 2.webp" alt="Lotus flower growing from mud" />
            </StorySection>

            <StorySection
              sectionId="lala-prayer-group"
              backgroundColor="#1a1a1a"
              particleEffect="none"
              floatingText={['ROSARY', 'GOSSIP', 'PERFUME', 'MASK']}
              floatingTextIntensity={0.5}
              floatingTextDirection="chaotic"
              className={SECTION_CHROME}
            >
              <StoryParagraph>
                The word "evil" clung to her thoughts. Her mother’s friends prayed with pearls and perfume, hiding secrets behind gentle smiles.
              </StoryParagraph>

              <StoryParagraph>
                Lala crocheted crosses for them. "You’re talented," one said. Another mocked her jeans. Their prayers reeked of judgment.
              </StoryParagraph>

              <ScrollAnimation direction="fadeIn">
                <p className="mb-16 text-center text-2xl font-light italic leading-relaxed text-white/85" style={{ fontSize: 'clamp(1.5rem,3.5vw,2.25rem)' }}>
                  A wicked heart, no matter how elusive, always stands out in the ordinary.
                </p>
              </ScrollAnimation>
            </StorySection>

            <StorySection
              sectionId="lala-christa"
              backgroundColor="#e8f5e9"
              particleEffect="sparkles"
              particleColors={['#4caf50', '#81c784', '#a5d6a7']}
              particleIntensity={0.6}
              floatingText={['DISCOVERY', 'SOFTNESS', 'HOPE', 'GENTLE']}
              floatingTextIntensity={0.45}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <StoryParagraph>
                Jacob taught her to crochet. She said yes to him because it was easier than saying no.
              </StoryParagraph>

              <StoryParagraph>
                Later she read The Lady’s Guide to Celestial Mechanics. Christa lent it to her. When the characters kissed, something inside her stirred.
              </StoryParagraph>

              <StoryParagraph useTextReveal revealType="word" textRevealDelay={25}>
                She read the page again and again until she could see herself in it. Christa pressed her into the library’s quiet corner. Their lips met like salvation.
              </StoryParagraph>

              <ScrollAnimation direction="fadeIn">
                <p className="mb-16 text-center text-xl font-light italic leading-relaxed text-white/85" style={{ fontSize: 'clamp(1.25rem,3vw,2rem)' }}>
                  She closed the book. Some things were safer left imagined.
                </p>
              </ScrollAnimation>
            </StorySection>

            <StorySection
              sectionId="lala-context"
              backgroundColor="#2c2c2c"
              particleEffect="none"
              floatingText={['LAW', 'LABELS', 'SHADOW', 'VOICE']}
              floatingTextIntensity={0.55}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <StoryParagraph useTextReveal revealType="word" textRevealDelay={35}>
                Wherever she went, her sin trailed behind her like a shadow. She was simply Lala—someone who loved, someone who prayed.
              </StoryParagraph>

              <StoryImage src="/stories-assets/FOR LALA 3.webp" alt="Shackles" />

              <StoryParagraph>
                In the Philippines, faith runs thicker than blood. Progress stalls. Love like hers is still called unnatural.
              </StoryParagraph>

              <StoryParagraph>
                Unlike elsewhere, same-sex marriage remains unrecognized. The irony lingers: the nation that colonized them grants the rights this country still withholds.
              </StoryParagraph>
            </StorySection>

            <StorySection
              sectionId="lala-freedom"
              backgroundColor="#f1f8e9"
              particleEffect="sparkles"
              particleColors={['#8bc34a', '#aed581', '#c5e1a5', '#dcedc8']}
              particleIntensity={0.7}
              floatingText={['PRIVACY', 'CHOICE', 'FREEDOM', 'LIGHT']}
              floatingTextIntensity={0.55}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <StoryParagraph useTextReveal revealType="word" textRevealDelay={30}>
                Now Lala lives in a condo. Skyscrapers glow like candles at dusk. Her furniture is bold and hers to claim. Privacy finally feels divine.
              </StoryParagraph>

              <StoryImage src="/stories-assets/FOR LALA 4.webp" alt="Dove to symbolize freedom" />

              <StoryParagraph>
                She crochets again, peach yarn looping between her fingers. The pattern is for Christa—the woman who helped her see herself through the lies.
              </StoryParagraph>

              <ScrollAnimation direction="fadeIn">
                <p className="mb-20 text-center text-3xl font-light italic leading-relaxed text-white md:text-4xl lg:text-5xl" style={{ lineHeight: '1.6', fontSize: 'clamp(1.75rem,4vw,3rem)' }}>
                  The sculpture of faith lives on in the beauty and sorrow of the people we continue to love.
                </p>
              </ScrollAnimation>

              <ScrollAnimation direction="fadeInUp">
                <p className="mb-8 text-center text-2xl leading-relaxed text-white/90 md:text-3xl" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}>
                  When Lala comes home to His arms one day, home will no longer be a prayer. She will be forgiven.
                </p>
              </ScrollAnimation>
            </StorySection>
          </section>
        </main>
      </div>
    </div>
  )
}
