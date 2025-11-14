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

export default function LalaStoryPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050b22] text-white">
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(130%_160%_at_0%_-10%,rgba(245,237,220,0.18),rgba(8,24,73,0))]" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(120%_150%_at_90%_-15%,rgba(200,230,201,0.16),rgba(8,24,73,0))]" />
      
      <div className="relative z-[5]">
        <Navigation />
        <main className="relative w-full pt-36 pb-28">
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
                  The road back home is well-traveled, though the wheel drifts elsewhere. In places, people, and fleeting moments, she leaves traces where the search never quite ends. For Lala, home was never a finished book. It was a map still being written, filled with people and places she has yet to love, and be loved by.
              </p>
            </header>
          </ScrollAnimation>
          </div>

          <section className="mt-16 space-y-12">
            {/* Opening Section */}
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
              <StoryParagraph useTextReveal revealType="word" textRevealDelay={30}>
                The cathedral across the trees came to light, its imposing brown and orange hues complementing the greenery of the town. In daylight, it was a symbol of devotion. At night, it looked unorthodox. The house of faith turned into something hollow, its white cross shining above like an eye that watched but never wept. Women in ivory dresses walked inside carrying candles and baskets of flowers. Another feast, another celebration. Catholic churches loved their saints. Lala looked away. She preferred All Souls&apos; Day.
                </StoryParagraph>

                <StoryParagraph>
                Día de los Muertos. In Mexico, her family once joined the celebration for the dead. The streets pulsed with color and sound. Faces painted like skulls, marigolds blooming in every corner, and children dancing with paper lanterns were found in every corner. Her parents said they were there to honor their ancestors. Lala lit her candle for someone else. The version of herself that had died too soon. The one she still wasn&apos;t allowed to name.
                </StoryParagraph>
            </StorySection>

            {/* Judgment Section */}
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
                &quot;There&apos;s never been anything normal about us,&quot; said a character from the show she was watching. Lala sat on the couch, eating chips, amused. The teenage boy on screen was an alien, trying to survive high school. He looked human, but he knew he wasn&apos;t. Lala understood that feeling. Her mother, Kristine, passed by just as two characters were about to kiss. &quot;Can you stop watching that?&quot; she said. &quot;Watch something decent. Not shows about immorality.&quot; Glancing at Lala, Kristine rolled her eyes, &quot;And close your legs when you sit. You look like a slut.&quot;
                </StoryParagraph>

                <StoryParagraph>
                Lala turned off the TV. Her mother&apos;s footsteps echoed across the room, heavy and final. To others, her life might look perfect. Having a nice house, good grades, and a mother who prayed fervently for her daughter might give the impression of fulfillment in her hands. Fulfillment was a beautiful illusion that only Lala could unmask, eventually revealing the absolute truth.
                </StoryParagraph>
            </StorySection>

            {/* Friends Section */}
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
                One weekend, she went to an amusement park with her friends. They screamed as the roller coaster dropped from its peak, the wind against their faces. For those few minutes, she felt light, untethered. But when the ride stopped, the feeling vanished. Grief returned as quietly as breath.
                </StoryParagraph>

                <StoryParagraph>
                Later, at a nearby coffee shop, Lala smiled, grateful for the laughter that kept her from dwelling too much on her thoughts. Rina rummaged through her bag and handed out movie tickets to everyone. Lala accepted hers, touched by her friends&apos; thoughtfulness. She knew it was inevitable that her mother wouldn&apos;t allow her to go. Even so, the scent of coffee between them was enough to feel like freedom.
                </StoryParagraph>
            </StorySection>

            {/* New Lala Illustration after 3 sections */}
            <div className="mt-12">
              <StoryImage src="/stories-assets/Lala-new.JPG" alt="Lala's story illustration" />
            </div>

            {/* Rejection Section */}
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
              <StoryAudio src="/audio/Lala - Heavy Door Slam .mp3" volume={0.6} fadeIn={false} />
                <StoryParagraph>
                A knock on her door woke her the next morning. Ten a.m. She was supposed to join her family for a trip. &quot;You won&apos;t come with us anymore,&quot; her mother said from the doorway. Lala blinked, half-asleep. &quot;If you can&apos;t follow rules, then stay here.&quot; The door slammed.
                </StoryParagraph>

                <StoryParagraph>
                She pressed her forehead to the wood. Lala had studied all night for an exam she was meticulously preparing for. Good morning. Always a good morning in this house.
                </StoryParagraph>
            </StorySection>

            {/* Faith History Section */}
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
                In Aqaba, Jordan, an ancient church once stood, built around the year 300. Long before marble cathedrals, early believers gathered in open spaces: courtyards, gardens, and rooftops. There were no walls to define their faith. It was not where they prayed that mattered, but how they did.
                </StoryParagraph>

                <StoryParagraph>
                Lala read about it once and thought of her own home. A place filled with crucifixes, holy water, and prayers said before meals. Nevertheless, she felt the greatest proximity to God when she prayed in places that allowed her to speak her heart&apos;s true desires.
                </StoryParagraph>
            </StorySection>

            {/* Play Section */}
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
                In high school, their school held a play about King Henry VIII and his wives. Lala was assigned the role of Anne Boleyn. She wore a velvet, medieval gown that her mother bought from Quiapo, paired with an intricate pearl necklace. Her line, which she practiced all night was, &quot;I will be your Queen, Your Majesty.&quot; The boy playing Henry smirked beneath the dim stage lights and declared, &quot;So it is with our love, for by absence we are parted, yet nevertheless it keeps its fervour.&quot; Everyone clapped. No one bothered to include the part where Anne was beheaded.
                </StoryParagraph>

                <StoryParagraph>
                After the play was finished, everyone applauded Lala for her outstanding performance. When Lala got home, she searched for the real story of the woman whose life she played. Anne Boleyn was more than a queen, for she was a woman killed for loving a man who rewrote God&apos;s laws just to have her. But as it is with men maneuvering religion to their own agenda, he discarded her when her love no longer served him. No woman deserved to be treated like one of Henry VIII&apos;s wives. Used as a pawn in a game on the board of religion. Though even if Lala despised Henry, she still envied him. He broke a church for love. She could not even speak hers out loud.
                </StoryParagraph>

                <ScrollAnimation direction="fadeIn">
                <p className="mb-12 text-center text-xl font-light italic leading-relaxed" style={{ color: 'inherit', opacity: 0.9, textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(255, 255, 255, 0.2)' }}>
                  If a king could defy God for the woman he wanted, why was she taught to fear hell for simply wanting to love? She would&apos;ve never fit in God&apos;s image. What a shame.
                  </p>
                </ScrollAnimation>
            </StorySection>

            {/* Beggar Section */}
            <StorySection 
              sectionId="lala-beggar"
              backgroundColor="#fff8e1"
              particleEffect="sparkles"
              particleColors={['#ffd700', '#ffeb3b', '#fff59d']}
              particleIntensity={0.4}
              floatingText={['STREET', 'COMPASSION', 'DREAM', 'REAL']}
              floatingTextIntensity={0.4}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
                <StoryParagraph>
                The last day of school brought a strange lightness. Tomorrow would be summer. She imagined dyeing her hair blue, the way her strict school forbade. As she walked home, traffic moved like a slow current. Vendors shouted, children played, the air thick with heat and dust. She saw a woman crossing the street with a baby in her arms, holding out a half-cut bottle filled with coins. Her eyes pleaded silently.
                </StoryParagraph>

                <StoryParagraph>
                Lala remembered her mother&apos;s voice: Don&apos;t give money to beggars. They should work for it. Thou shall not tolerate nor help &quot;adiks&quot; and &quot;squatters,&quot; that is the lesson taught to them at home. Against her mother&apos;s judgment, she hands a 500-peso bill to the woman. The woman whispered, &quot;God bless you.&quot; Lala smiled faintly. She did it not out of duty, but because she couldn&apos;t stand the ache of helplessness. It wasn&apos;t her objective to go to heaven just because she helped a beggar. If she had the means to change the world, she would gladly do so in a heartbeat.
                </StoryParagraph>

                <StoryParagraph>
                That same peculiar emotion followed Lala through her dreams. Her phantasy started out in a presidential mansion. A Vienna 24 Light K9 Crystal chandelier hung over her head, and silk sheets wrapped around her. Beside her lay a topless man she didn&apos;t recognize. Her hand touched the swell of her stomach. &quot;I can&apos;t wait to meet her,&quot; he whispered, kissing her belly. A stroke of red paint crossed a white canvas. She woke up. It was just a dream. It wasn&apos;t real, and it never will be.
                </StoryParagraph>

                <StoryParagraph>
                A faint thud landed on her desk. Christa stood before her, smiling, holding a cup of coffee. Lala instantly discerned what was real. &quot;You were out cold again,&quot; she teased. &quot;Stop sleeping in the cafeteria.&quot; Lala laughed softly. &quot;Thanks,&quot; she said. Christa left soon after, and Lala watched her go, her heart calm and restless all at once. Christa was a friend who always made sure she ate at the right times, cheering her up in the worst moments of her life.
                </StoryParagraph>
            </StorySection>

            {/* Prayer Group Section */}
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
                In her room, Lala crocheted a small cross. Her hands moved in rhythm, yarn looping between her fingers. She brought the basket full of cross crochets in grey and yellow  to her mother&apos;s prayer group. The women sat around the living room, rosaries clinking softly as they prayed. &quot;You&apos;re really talented,&quot; one said. Another laughed, &quot;But don&apos;t cut your hair too short. You&apos;ll look like a boy.&quot; Lala smiled politely. Her mother would often invite her friends for a prayer night. &quot;And look at what she&apos;s wearing, Magda! She looks like a boy with those ripped jeans! I told her we should go shopping for better clothing.&quot; The women sipped their coffee, pearls shining against modest dresses. Their laughs reverberated in the room. After begging all the saints for their desires, her mother and her friends would start to gossip. Their prayers reeked of perfume and judgment.
                </StoryParagraph>

                <ScrollAnimation direction="fadeIn">
                <p className="mb-16 text-center text-2xl font-light italic leading-relaxed" style={{ fontSize: 'clamp(1.5rem,3.5vw,2.25rem)', color: 'inherit', opacity: 0.9, textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(255, 255, 255, 0.2)' }}>
                  It was as if they were trying to hide something. After all, a wicked heart, no matter how elusive, stands out in the ordinary.
                  </p>
                </ScrollAnimation>
            </StorySection>

            {/* Jacob Section */}
            <StorySection 
              sectionId="lala-jacob"
              backgroundColor="#e8f5e9"
              particleEffect="sparkles"
              particleColors={['#4caf50', '#81c784', '#a5d6a7']}
              particleIntensity={0.5}
              floatingText={['CROCHET', 'COMFORT', 'COFFEE', 'ROSE']}
              floatingTextIntensity={0.4}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
                <StoryParagraph>
                Lala had learned to crochet from Jacob, her childhood friend. Everyone thought they&apos;d end up together. Most of the people she knew were into dating. First loves, first crushes. For her friends, living life to the fullest meant having boyfriends and sneaking out of classrooms to kiss and make out. What she remembered most was the comfort of making something with her hands. The feeling of inserting the needle into different textiles and creating a small or big pattern allowed her to create her own story. When Jacob asked her out at sixteen, she said yes because it seemed easier than saying no.
                </StoryParagraph>

                <StoryParagraph>
                As the new day unfolded, the sun cast its golden light upon the towering skyscrapers. They sat beneath the shade of a tree. Lala inhaled the aroma of freshly brewed coffee drifting from the nearby cafés. The soft, floral scent of the rose bouquet carried a faint sweetness, almost like fruit. A mother and her teenage daughter passed by, laughing softly, and Lala suddenly remembered her own mother&apos;s haunting words: &quot;You need to have children. Because if you don&apos;t, that&apos;s selfish. You became a woman for a reason, to bring life into this world, just like I did when I gave birth to you.&quot;
                </StoryParagraph>

                <StoryParagraph>
                &quot;Do you think I&apos;m selfish?&quot; she asked. &quot;Never,&quot; he said. But her first heartbreak wasn&apos;t him. It was her mother who taught her that love was only real if it followed rules.
                </StoryParagraph>
            </StorySection>

            {/* Library Section */}
            <StorySection 
              sectionId="lala-library"
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
                Later that night, Lala read The Lady&apos;s Guide to Celestial Mechanics by Olivia Waite. Christa was the one who lent it to her. The story of Lucy, an astronomer who found love in another woman, felt both foreign and familiar. When the characters kissed, something inside her stirred.
                </StoryParagraph>

              <StoryParagraph useTextReveal revealType="word" textRevealDelay={25}>
                She read the page again and again, until she could almost see herself in it. Her hand reached for Christa&apos;s in the quiet of the library. Christa pushed her into a corner between the shelves, their lips meeting as if it were their salvation.
                </StoryParagraph>

                <StoryParagraph>
                She immediately closed the book. Some things were better left imagined.
                </StoryParagraph>
            </StorySection>

            {/* Confession Section */}
            <StorySection 
              sectionId="lala-confession"
              backgroundColor="#000000"
              particleEffect="none"
              floatingText={['SIN', 'SHAME', 'EVIL', 'UNWORTHY', 'DISGUSTING', 'HELL', 'SIN', 'SHAME', 'EVIL', 'UNWORTHY', 'DISGUSTING']}
              floatingTextIntensity={0.8}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <StoryAudio src="/audio/Lala - confession.mp3" volume={0.6} fadeIn={false} />
              <StoryParagraph useTextReveal revealType="word" textRevealDelay={30}>
                &quot;Bless me, Father, for I have sinned.&quot; The words trembled as they left her mouth. Between her and the priest stood a brown wooden grate, separating sinner from savior. Lala&apos;s hands were shaking in a prayer position. Beads of sweat formed on her forehead. The dark, guarded atmosphere of the confessional made her want to puke. &quot;I&apos;ve desired a woman,&quot; she whispered. She confessed her most shameful secret. She had fantasized about a woman. She had touched herself while thinking about one.
                </StoryParagraph>

                <StoryParagraph>
                &quot;Disgusting,&quot; the priest muttered. &quot;I&apos;m sorry, my child, but you must repent, or the depths of hell will be waiting for you.&quot;
                </StoryParagraph>

                <StoryParagraph>
                Tears welled in Lala&apos;s eyes. She thought of all the sinners who had once stood in this same room, breathing the same air, fearing the same God. Their sins remained alive in the silence of the confessional. Thieves, liars, adulterers, the bitter, the cruel—she was one of them now. Who knows if their sins were greater, perhaps lesser, yet all of them had knelt under the same gaze of judgment.
                </StoryParagraph>

                <StoryParagraph>
                She wished them peace, and perchance a season to begin again. A quiet hope rose in her chest that forgiveness might find them, even if it no longer came for her. The idea of being unworthy of God&apos;s love pressed heavily against her ribs. Was she not worthy of God&apos;s love because she loved differently?
                </StoryParagraph>
            </StorySection>

            {/* Lotus Section */}
            <StorySection 
              sectionId="lala-lotus"
              backgroundColor="#1a1a1a"
              particleEffect="none"
              floatingText={['PRAYER', 'EVIL', 'UNWORTHY', 'SHADOW']}
              floatingTextIntensity={0.5}
              floatingTextDirection="chaotic"
              className={SECTION_CHROME}
            >
              <StoryImage src="/stories-assets/FOR LALA 2.webp" alt="Lotus flower growing from mud" />
                <StoryParagraph>
                Lala bowed her head and obeyed, folding her hands tightly as the priest instructed her to pray like her life depended on it. She was unworthy, and no prayer could change that. Lead us not into temptation, but deliver us from evil. Amen.
                </StoryParagraph>

                <StoryParagraph>
                Evil.
                </StoryParagraph>

                <StoryParagraph>
                The word was stuck in her head, like a voice. People were not moral. They were not just tested in the same way. Her mother&apos;s best friend&apos;s husband, a volunteer at church, had a mistress. Her sister, training to be a nun, cursed behind closed doors. And her mother, her holy, devout mother, once had an affair with their pastor. The family bought their silence. If Lala were going to hell, she wouldn&apos;t be alone.
                </StoryParagraph>

                <StoryParagraph>
                Wherever she went, her sin trailed behind her like a shadow. She stopped trying to fit herself into names. Gay, bisexual, non-binary, and all the other labels. She was simply Lala. Someone who loved. Someone who prayed. Someone still trying to hold both worlds steady in her trembling hands.
                </StoryParagraph>
            </StorySection>

            {/* Shackles Section */}
            <StorySection 
              sectionId="lala-shackles"
              backgroundColor="#2c2c2c"
              particleEffect="none"
              floatingText={['LAW', 'LABELS', 'SHADOW', 'VOICE']}
              floatingTextIntensity={0.55}
              floatingTextDirection="up"
              className={SECTION_CHROME}
            >
              <StoryImage src="/stories-assets/FOR LALA 3.webp" alt="Shackles" />
                <StoryParagraph>
                In the Philippines, faith runs thicker than blood. The country has drastically changed since the 1990s, when the first LGBTQ+ voices began to rise and demand to be seen. Progress, once applauded for, is now stagnant. The weight of colonization and capitalism still holds the nation and its people&apos;s lives. So, it is no surprise that many still call love like hers unnatural.
                </StoryParagraph>

                <StoryParagraph>
                Unlike in other countries, like the United States, homophobia exists, but people are allowed more room to breathe, to exist as they are. Across the Philippine landscape, love between two women is not a crime. However, it continues to face widespread discouragement. Same-sex marriage remains unrecognized. And the irony persists. Spain, the very nation that once conquered this land, has long granted the rights that the Philippines still withholds.
                </StoryParagraph>

                <StoryParagraph>
                Now, Lala lives in a condo in the city. From her window, skyscrapers glow like candles in the dusk. The walls are painted white, her guitar leans against the black couch, and her records line the shelves. Her dark furniture is a bold pattern she has committed to. She spreads her curtains open, and privacy finally feels divine.
                </StoryParagraph>

                <StoryParagraph>
                The minimalist space, softened by touches of darkness, reflects how Lala sees herself. Others may never see her as pure. She sculpts the shape of purity on her own terms. Faith lives in her spirit, soul, and body. Her haven, painted in alabaster, stands as a temple filled with grace.
                </StoryParagraph>
            </StorySection>

            {/* Freedom Section */}
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
              <StoryImage src="/stories-assets/FOR LALA 4.webp" alt="Dove to symbolize freedom" />
              <StoryParagraph useTextReveal revealType="word" textRevealDelay={30}>
                She crochets again, a peach flower pattern resting in her lap. It was meant for Christa. A woman who made her see herself through the lies.
                </StoryParagraph>

                <ScrollAnimation direction="fadeIn">
                <p className="mb-20 text-center text-3xl font-light italic leading-relaxed md:text-4xl lg:text-5xl" style={{ lineHeight: '1.6', fontSize: 'clamp(1.75rem,4vw,3rem)', color: '#ffffff', textShadow: '0 1px 3px rgba(0, 0, 0, 0.8), 0 0 2px rgba(0, 0, 0, 0.9)' }}>
                  The sculpture of faith lives on in the beauty and sorrow of the people, and places that we continue to love.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation direction="fadeInUp">
                <p className="mb-8 text-center text-2xl leading-relaxed md:text-3xl" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', color: '#ffffff', textShadow: '0 1px 3px rgba(0, 0, 0, 0.8), 0 0 2px rgba(0, 0, 0, 0.9)' }}>
                  And when Lala comes home to His arms one day, home will no longer be a prayer. She will be forgiven.
                </p>
              </ScrollAnimation>

                <div className="my-20">
                  <StoryVideo
                    src="/videos/lala-dream-home.mp4"
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
