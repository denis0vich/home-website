'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import StoryImage from '@/components/StoryImage'
import StoryAudio from '@/components/StoryAudio'
import StoryParagraph from '@/components/StoryParagraph'
import StorySection from '@/components/StorySection'
import Image from 'next/image'
import AudioConsent from '@/components/AudioConsent'

export default function LalaStoryPage() {
  return (
    <div className="story-page-wrapper">
      <div className="story-background" />
      
      <div className="story-nav-overlay">
        <Navigation />
      </div>

      <div className="story-content-area">
        <AudioConsent />
        <article className="max-w-4xl mx-auto px-6 py-20">
          {/* Header */}
          <ScrollAnimation direction="fadeInUp" duration={2000}>
            <header className="mb-24">
              <div className="mb-6">
                <span className="text-base md:text-lg font-bella-queta text-gray-500 uppercase tracking-wider">Subject: Lala</span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bella-queta text-gray-900 mb-8 leading-tight">
                The Sculpture of Faith
              </h1>
              <p className="text-2xl md:text-3xl font-bella-queta text-gray-600 mb-3">
                Topic: Religion, Homophobia
              </p>
              <p className="text-base md:text-lg font-bella-queta text-gray-500">
                Color Palette: Warm Green/Brown
              </p>
            </header>
          </ScrollAnimation>

          {/* Story Content */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1: Opening - Cathedral/Faith */}
            <StorySection 
              sectionId="lala-opening"
              backgroundColor="#f5f1e8"
              particleEffect="none"
            >
              <div className="max-w-5xl mx-auto px-6">
                <ScrollAnimation direction="fadeIn">
                  <p className="text-3xl md:text-4xl lg:text-5xl leading-relaxed mb-20 italic font-light text-center max-w-4xl mx-auto" style={{ lineHeight: '1.6', color: 'inherit', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
                    The road back home is well-traveled, though the wheel drifts elsewhere. In places, people, and fleeting moments, she leaves traces where the search never quite ends. For Lala, home was never a finished book. It was a map still being written, filled with people and places she has yet to love, and be loved by.
                  </p>
                </ScrollAnimation>

                <StoryParagraph useTextReveal={true} revealType="word" textRevealDelay={30}>
                  The cathedral across the trees came to light, its imposing brown and orange hues complementing the greenery of the town. In daylight, it was a symbol of devotion. At night, it looked unorthodox. The house of faith turned into something hollow, its white cross shining above like an eye that watched but never wept. Women in ivory dresses walked inside carrying candles and baskets of flowers. Another feast, another celebration. Catholic churches loved their saints. Lala looked away. She preferred All Souls' Day.
                </StoryParagraph>

                <StoryParagraph>
                  Día de los Muertos. In Mexico, her family once joined the celebration for the dead. The streets pulsed with color and sound. Faces painted like skulls, marigolds blooming in every corner, and children dancing with paper lanterns were found in every corner. Her parents said they were there to honor their ancestors. Lala lit her candle for someone else. The version of herself that had died too soon. The one she still wasn't allowed to name.
                </StoryParagraph>
              </div>
            </StorySection>

            {/* Section 2: Mother's Judgment - Dark/Heavy */}
            <StorySection 
              sectionId="lala-judgment"
              backgroundColor="#2c2c2c"
              particleEffect="none"
            >
              <div className="max-w-5xl mx-auto px-6">
                <StoryParagraph>
                  "There's never been anything normal about us," said a character from the show she was watching. Lala sat on the couch, eating chips, amused. The teenage boy on screen was an alien, trying to survive high school. He looked human, but he knew he wasn't. Lala understood that feeling. Her mother, Kristine, passed by just as two characters were about to kiss. "Can you stop watching that?" she said. "Watch something decent. Not shows about immorality." Glancing at Lala, Kristine rolled her eyes, "And close your legs when you sit. You look like a slut."
                </StoryParagraph>

                <StoryParagraph>
                  Lala turned off the TV. Her mother's footsteps echoed across the room, heavy and final. To others, her life might look perfect. Having a nice house, good grades, and a mother who prayed fervently for her daughter might give the impression of fulfillment in her hands. Fulfillment was a beautiful illusion that only Lala could unmask, eventually revealing the absolute truth.
                </StoryParagraph>
              </div>
            </StorySection>

            {/* Section 3: Amusement Park/Friends - Warm/Yellow */}
            <StorySection 
              sectionId="lala-friends"
              backgroundColor="#fff8e1"
              particleEffect="sparkles"
              particleColors={['#ffd700', '#ffeb3b', '#fff59d']}
              particleIntensity={0.5}
            >
              <div className="max-w-5xl mx-auto px-6">
                <StoryParagraph>
                  One weekend, she went to an amusement park with her friends. They screamed as the roller coaster dropped from its peak, the wind against their faces. For those few minutes, she felt light, untethered. But when the ride stopped, the feeling vanished. Grief returned as quietly as breath. She smiled at her friends, grateful for the laughter that kept her from dwelling too much on her thoughts. Rina, one of her friends, rummaged through her bag to retrieve the movie tickets. She gave one to each of them in their group.
                </StoryParagraph>

                <StoryParagraph>
                  Lala smiled, grateful for her friends' thoughtfulness. It was inevitable that her mother would not allow her to go. But for a moment, the scent of coffee between them was enough to feel like freedom.
                </StoryParagraph>
              </div>
            </StorySection>

            {/* Section 4: Mother's Rejection - INTENSE RED */}
            <StorySection 
              sectionId="lala-rejection"
              backgroundColor="#3d0000"
              particleEffect="strobe"
              particleColors={['#ff0000', '#8b0000', '#dc143c']}
              particleIntensity={1.5}
              floatingText={['REJECTED', 'ALONE', 'HURT', 'REJECTED', 'SHAME', 'ALONE', 'REJECTED', 'HURT', 'SHAME']}
              floatingTextIntensity={1}
              floatingTextDirection="chaotic"
            >
              <div className="max-w-5xl mx-auto px-6">
                <ScrollAnimation direction="fadeIn">
                  <p className="mb-16 text-center text-2xl md:text-3xl lg:text-4xl leading-relaxed font-medium" style={{ color: 'inherit', fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', lineHeight: '1.7' }}>
                    A knock on her door woke her the next morning. Ten a.m. She was supposed to join her family for a trip. "You won't come with us anymore," her mother said from the doorway. Lala blinked, half-asleep. "If you can't follow rules, then stay here." The door slammed.
                  </p>
                </ScrollAnimation>

                <StoryAudio src="/audio/Lala - Heavy Door Slam .mp3" volume={0.25} fadeIn={false} />

                <StoryParagraph>
                  She pressed her forehead to the wood. Lala had studied all night for an exam she was meticulously preparing for. Good morning. Always a good morning in this house.
                </StoryParagraph>
              </div>
            </StorySection>

            {/* Section 5: Ancient Church/Faith History - Warm Brown */}
            <StorySection 
              sectionId="lala-faith-history"
              backgroundColor="#efebe9"
              particleEffect="none"
            >
              <div className="max-w-5xl mx-auto px-6">
                <StoryParagraph>
                  In Aqaba, Jordan, an ancient church once stood, built around the year 300. Long before marble cathedrals, early believers gathered in open spaces: courtyards, gardens, and rooftops. There were no walls to define their faith. It was not where they prayed that mattered, but how they did.
                </StoryParagraph>

                <StoryParagraph>
                  Lala read about it once and thought of her own home. A place filled with crucifixes, holy water, and prayers said before meals. Nevertheless, she felt the greatest proximity to God when she prayed in places that allowed her to speak her heart's true desires.
                </StoryParagraph>
              </div>
            </StorySection>

            {/* Section 6: School Play/Anne Boleyn - Warm/Orange */}
            <StorySection 
              sectionId="lala-play"
              backgroundColor="#fff3e0"
              particleEffect="sparkles"
              particleColors={['#ff9800', '#ffb74d', '#ffcc80']}
              particleIntensity={0.4}
            >
              <div className="max-w-5xl mx-auto px-6">
                <StoryParagraph>
                  In high school, their school held a play about King Henry VIII and his wives. Lala was assigned Anne Boleyn. She wore a velvet, medieval gown that her mother bought from Quiapo, paired with an intricate pearl necklace. Her line, which she practiced all night was, "I will be your Queen, Your Majesty." The boy playing Henry smirked beneath the dim stage lights and declared, "So it is with our love, for by absence we are parted, yet nevertheless it keeps its fervour." Everyone clapped. No one bothered to include the part where Anne was beheaded.
                </StoryParagraph>

                <StoryParagraph>
                  After the play was finished, everyone applauded Lala for her outstanding performance. When Lala got home, she searched for the real story of the woman whose life she played. Anne Boleyn was more than a queen, for she was a woman killed for loving a man who rewrote God's laws just to have her. But as it is with men maneuvering religion to their own agenda, he discarded her when her love no longer served him. No woman deserved to be treated like one of Henry VIII's wives. Used as a pawn in a game on the board of religion. Though even if Lala despised Henry, she still envied him. He broke a church for love. She could not even speak hers out loud.
                </StoryParagraph>

                <ScrollAnimation direction="fadeIn">
                  <p className="mb-12 text-center text-xl leading-relaxed font-light italic" style={{ color: 'inherit' }}>
                    If a king could defy God for the woman he wanted, why was she taught to fear hell for simply wanting to love? She would've never fit in God's image. What a shame.
                  </p>
                </ScrollAnimation>
              </div>
            </StorySection>

            {/* Section 7: Confession Scene - Darkest/Black */}
            <StorySection 
              sectionId="lala-confession"
              backgroundColor="#000000"
              particleEffect="none"
              floatingText={['SIN', 'SHAME', 'EVIL', 'UNWORTHY', 'DISGUSTING', 'HELL', 'SIN', 'SHAME', 'EVIL', 'UNWORTHY', 'DISGUSTING']}
              floatingTextIntensity={0.8}
              floatingTextDirection="up"
            >
              <div className="max-w-5xl mx-auto px-6">
                <StoryParagraph useTextReveal={true} revealType="word" textRevealDelay={30}>
                  "Bless me, Father, for I have sinned." The words trembled as they left her mouth. Between her and the priest stood a brown wooden grate, separating sinner from savior. Lala's hands were shaking in a prayer position. Beads of sweat formed on her forehead. The dark, guarded atmosphere of the confessional made her want to puke. "I've desired a woman," she whispered. She confessed her most shameful secret. She had fantasized about a woman. She had touched herself while thinking about one.
                </StoryParagraph>

                <StoryParagraph>
                  "Disgusting," the priest muttered. "I'm sorry, my child, but you must repent, or the depths of hell will be waiting for you."
                </StoryParagraph>

                <StoryParagraph>
                  Tears welled in Lala's eyes. She thought of all the sinners who had once stood in this same room, breathing the same air, fearing the same God. Their sins remained alive in the silence of the confessional. Thieves, liars, adulterers, the bitter, the cruel—she was one of them now. Who knows if their sins were greater, perhaps lesser, yet all of them had knelt under the same gaze of judgment.
                </StoryParagraph>

                <StoryParagraph>
                  She wished them peace, and perchance a season to begin again. A quiet hope rose in her chest that forgiveness might find them, even if it no longer came for her. The idea of being unworthy of God's love pressed heavily against her ribs. Was she not worthy of God's love because she loved differently?
                </StoryParagraph>

                <StoryImage 
                  src="/stories-assets/FOR LALA 2.webp" 
                  alt="Lotus flower growing from mud" 
                />

                <StoryParagraph>
                  Lala bowed her head and obeyed, folding her hands tightly as the priest instructed her to pray like her life depended on it. She was unworthy, and no prayer could change that. Lead us not into temptation, but deliver us from evil. Amen.
                </StoryParagraph>

                <ScrollAnimation direction="fadeIn">
                  <p className="mb-20 text-5xl md:text-6xl lg:text-7xl leading-relaxed font-medium text-center" style={{ color: 'inherit', fontSize: 'clamp(3rem, 8vw, 5rem)' }}>
                    Evil.
                  </p>
                </ScrollAnimation>
              </div>
            </StorySection>

            {/* Section 8: Prayer Group Judgment - Dark Gray */}
            <StorySection 
              sectionId="lala-prayer-group"
              backgroundColor="#1a1a1a"
              particleEffect="none"
            >
              <div className="max-w-5xl mx-auto px-6">
                <StoryParagraph>
                  The word was stuck in her head, like a voice. People weren't moral. They were not just tested in the same way. Her mother's best friend's husband, a volunteer at church, had a mistress. Her sister, training to be a nun, cursed behind closed doors. And her mother, her holy, devout mother, once had an affair with their pastor. The family bought their silence. If Lala were going to hell, she wouldn't be alone.
                </StoryParagraph>

                <StoryParagraph>
                  In her room, Lala crocheted a small cross. Her hands moved in rhythm, yarn looping between her fingers. She brought the basket full of cross crochets in grey and yellow to her mother's prayer group. The women sat around the living room, rosaries clinking softly as they prayed. "You're really talented," one said. Another laughed, "But don't cut your hair too short. You'll look like a boy." Lala smiled politely. Her mother would often invite her friends for a prayer night. "And look at what she's wearing, Magda! She looks like a boy with those ripped jeans! I told her we should go shopping for better clothing." The women sipped their coffee, pearls shining against modest dresses. Their laughs reverberated in the room. After begging all the saints for their desires, her mother and her friends would start to gossip. Their prayers reeked of perfume and judgment.
                </StoryParagraph>

                <ScrollAnimation direction="fadeIn">
                  <p className="mb-16 text-center text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light italic" style={{ color: 'inherit', fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', lineHeight: '1.7' }}>
                    It was as if they were trying to hide something. After all, a wicked heart, no matter how elusive, stands out in the ordinary.
                  </p>
                </ScrollAnimation>
              </div>
            </StorySection>

            {/* Section 9: Christa/Library Scene - Warm/Green */}
            <StorySection 
              sectionId="lala-christa"
              backgroundColor="#e8f5e9"
              particleEffect="sparkles"
              particleColors={['#4caf50', '#81c784', '#a5d6a7']}
              particleIntensity={0.6}
            >
              <div className="max-w-5xl mx-auto px-6">
                <StoryParagraph>
                  Lala had learned to crochet from Jacob, her childhood friend. Everyone thought they'd end up together. Everyone Lala knew was into dating. First loves, first crushes. For her friends, living life to the fullest meant having boyfriends and sneaking out of classrooms to kiss and make out. What she remembered most was the comfort of making something with her hands. The feeling of inserting the needle into different textiles and creating a small or big pattern allowed her to create her own story. When Jacob asked her out at sixteen, she said yes because it seemed easier than saying no. As the new day unfolded, the sun cast its golden light upon the towering skyscrapers. They sat beneath the shade of a tree. Lala inhaled the aroma of freshly brewed coffee drifting from the nearby cafés. The soft, floral scent of the rose bouquet carried a faint sweetness, almost like fruit. A mother and her teenage daughter passed by, laughing softly, and Lala suddenly remembered her own mother's haunting words: "You need to have children. Because if you don't, that's selfish. You became a woman for a reason, to bring life into this world, just like I did when I gave birth to you."
                </StoryParagraph>

                <StoryParagraph>
                  "Do you think I'm selfish?" she asked. "Never," he said. But her first heartbreak wasn't him. It was her mother who taught her that love was only real if it followed rules.
                </StoryParagraph>

                <StoryParagraph useTextReveal={true} revealType="word" textRevealDelay={30}>
                  Later that night, Lala read The Lady's Guide to Celestial Mechanics by Olivia Waite. Christa was the one who lent it to her. The story of Lucy, an astronomer who found love in another woman, felt both foreign and familiar. When the characters kissed, something inside her stirred.
                </StoryParagraph>

                <StoryAudio src="/audio/Lala - Flipping page on book.mp3" volume={0.15} fadeIn={false} />

                <StoryParagraph useTextReveal={true} revealType="word" textRevealDelay={25}>
                  She read the page again and again, until she could almost see herself in it. Her hand reached for Christa's in the quiet of the library. Christa pushed her into a corner between the shelves, their lips meeting as if it were their salvation.
                </StoryParagraph>

                <ScrollAnimation direction="fadeIn">
                  <p className="mb-16 text-center text-xl md:text-2xl lg:text-3xl leading-relaxed font-light italic" style={{ color: 'inherit', fontSize: 'clamp(1.25rem, 3vw, 2rem)', lineHeight: '1.7' }}>
                    She immediately closed the book. Some things were better left imagined.
                  </p>
                </ScrollAnimation>
              </div>
            </StorySection>

            {/* Section 10: Philippines/Homophobia Context - Dark Gray */}
            <StorySection 
              sectionId="lala-context"
              backgroundColor="#2c2c2c"
              particleEffect="none"
            >
              <div className="max-w-5xl mx-auto px-6">
                <StoryParagraph useTextReveal={true} revealType="word" textRevealDelay={35}>
                  Wherever she went, her sin trailed behind her like a shadow. She stopped trying to fit herself into names. Gay, bisexual, non-binary, and all the other labels. She was simply Lala. Someone who loved. Someone who prayed. Someone still trying to hold both worlds steady in her trembling hands.
                </StoryParagraph>

                <StoryImage 
                  src="/stories-assets/FOR LALA 3.webp" 
                  alt="Shackles" 
                />

                <StoryParagraph>
                  In the Philippines, faith runs thicker than blood. The country has drastically changed since the 1990s, when the first LGBTQ+ voices began to rise and demand to be seen. Progress, once applauded for, is now stagnant. The weight of colonization and capitalism still holds the nation and its people's lives. So, it is no surprise that many still call love like hers unnatural.
                </StoryParagraph>

                <StoryParagraph>
                  Unlike in other countries, like the United States, homophobia exists, but people are allowed more room to breathe, to exist as they are. Here, love between two women is still forbidden by law. Same-sex marriage remains unrecognized. And the irony persists. Spain, the very nation that once conquered this land, has long granted the rights that the Philippines still withholds.
                </StoryParagraph>
              </div>
            </StorySection>

            {/* Section 11: Her Condo/Freedom - Warm Green/Yellow */}
            <StorySection 
              sectionId="lala-freedom"
              backgroundColor="#f1f8e9"
              particleEffect="sparkles"
              particleColors={['#8bc34a', '#aed581', '#c5e1a5', '#dcedc8']}
              particleIntensity={0.7}
            >
              <div className="max-w-5xl mx-auto px-6">
                <StoryParagraph useTextReveal={true} revealType="word" textRevealDelay={30}>
                  Now, Lala lives in a condo in the city. From her window, skyscrapers glow like candles in the dusk. The walls are painted white, her guitar leans against the black couch, and her records line the shelves. Her dark furniture is a bold pattern she has committed to. She spreads her curtains open, and Privacy finally feels divine.
                </StoryParagraph>

                <StoryAudio src="/audio/Lala - Gentle Ambient Piano.mp3" loop={true} volume={0.25} />
                <StoryImage 
                  src="/stories-assets/FOR LALA 4.webp" 
                  alt="Dove to symbolize freedom" 
                />

                <StoryParagraph>
                  She crochets again, a peach flower pattern resting in her lap. It was meant for Christa. A woman who made her see herself through the lies.
                </StoryParagraph>

                <ScrollAnimation direction="fadeIn">
                  <p className="mb-20 text-3xl md:text-4xl lg:text-5xl leading-relaxed font-light text-center max-w-4xl mx-auto italic" style={{ lineHeight: '1.6', color: 'inherit', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
                    The sculpture of faith lives on in the beauty and sorrow of the people and places that we continue to love.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation direction="fadeInUp">
                  <p className="mb-8 text-2xl md:text-3xl leading-relaxed text-center" style={{ color: 'inherit', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                    And when Lala comes home to His arms one day, home will no longer be a prayer. She will be forgiven.
                  </p>
                </ScrollAnimation>
              </div>
            </StorySection>
          </div>
        </article>
      </div>
    </div>
  )
}
