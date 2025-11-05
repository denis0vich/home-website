'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import StoryImage from '@/components/StoryImage'
import StoryAudio from '@/components/StoryAudio'
import Image from 'next/image'

export default function LalaStoryPage() {
  return (
    <div className="story-page-wrapper">
      <div className="story-background" />
      
      <div className="story-nav-overlay">
        <Navigation />
      </div>

      <div className="story-content-area">
        <article className="max-w-4xl mx-auto px-6 py-20">
          {/* Header */}
          <header className="mb-12">
            <div className="mb-4">
              <span className="text-sm font-bella-queta text-gray-500 uppercase tracking-wider">Subject: Lala</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bella-queta text-gray-900 mb-4">
              The Sculpture of Faith
            </h1>
            <p className="text-lg font-bella-queta text-gray-600">
              Topic: Religion, Homophobia
            </p>
            <p className="text-sm font-bella-queta text-gray-500 mt-2">
              Color Palette: Warm Green/Brown
            </p>
          </header>

          {/* Story Content */}
          <div className="prose prose-lg max-w-none font-bella-queta">
            <ScrollAnimation direction="fadeIn" delay={200}>
              <p className="text-xl leading-relaxed text-gray-700 mb-8 italic">
                The road back home is well-traveled, though the wheel drifts elsewhere. In places, people, and fleeting moments, she leaves traces where the search never quite ends. For Lala, home was never a finished book. It was a map still being written, filled with people and places she has yet to love, and be loved by.
              </p>
            </ScrollAnimation>

            <p className="mb-6 leading-relaxed text-gray-700">
              The cathedral across the trees came to light, its imposing brown and orange hues complementing the greenery of the town. In daylight, it was a symbol of devotion. At night, it looked unorthodox. The house of faith turned into something hollow, its white cross shining above like an eye that watched but never wept. Women in ivory dresses walked inside carrying candles and baskets of flowers. Another feast, another celebration. Catholic churches loved their saints. Lala looked away. She preferred All Souls' Day.
            </p>

            <ScrollAnimation direction="fadeInUp" delay={400}>
              <p className="mb-6 leading-relaxed text-gray-700">
                Día de los Muertos. In Mexico, her family once joined the celebration for the dead. The streets pulsed with color and sound. Faces painted like skulls, marigolds blooming in every corner, and children dancing with paper lanterns were found in every corner. Her parents said they were there to honor their ancestors. Lala lit her candle for someone else. The version of herself that had died too soon. The one she still wasn't allowed to name.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={500}>
              <p className="mb-6 leading-relaxed text-gray-700">
                "There's never been anything normal about us," said a character from the show she was watching. Lala sat on the couch, eating chips, amused. The teenage boy on screen was an alien, trying to survive high school. He looked human, but he knew he wasn't. Lala understood that feeling. Her mother, Kristine, passed by just as two characters were about to kiss. "Can you stop watching that?" she said. "Watch something decent. Not shows about immorality." Glancing at Lala, Kristine rolled her eyes, "And close your legs when you sit. You look like a slut."
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={600}>
              <p className="mb-6 leading-relaxed text-gray-700">
                Lala turned off the TV. Her mother's footsteps echoed across the room, heavy and final. To others, her life might look perfect. Having a nice house, good grades, and a mother who prayed fervently for her daughter might give the impression of fulfillment in her hands. Fulfillment was a beautiful illusion that only Lala could unmask, eventually revealing the absolute truth.
              </p>
            </ScrollAnimation>

            <p className="mb-6 leading-relaxed text-gray-700">
              One weekend, she went to an amusement park with her friends. They screamed as the roller coaster dropped from its peak, the wind against their faces. For those few minutes, she felt light, untethered. But when the ride stopped, the feeling vanished. Grief returned as quietly as breath. She smiled at her friends, grateful for the laughter that kept her from dwelling too much on her thoughts. Rina, one of her friends, rummaged through her bag to retrieve the movie tickets. She gave one to each of them in their group.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Lala smiled, grateful for her friends' thoughtfulness. It was inevitable that her mother would not allow her to go. But for a moment, the scent of coffee between them was enough to feel like freedom.
            </p>

            <ScrollAnimation direction="fadeInUp" delay={100}>
              <p className="mb-6 leading-relaxed text-gray-700">
                A knock on her door woke her the next morning. Ten a.m. She was supposed to join her family for a trip. "You won't come with us anymore," her mother said from the doorway. Lala blinked, half-asleep. "If you can't follow rules, then stay here." The door slammed.
              </p>
            </ScrollAnimation>

            <StoryAudio src="/audio/Lala - Heavy Door Slam .mp3" delay={300} />

            <p className="mb-6 leading-relaxed text-gray-700">
              She pressed her forehead to the wood. Lala had studied all night for an exam she was meticulously preparing for. Good morning. Always a good morning in this house.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              In Aqaba, Jordan, an ancient church once stood, built around the year 300. Long before marble cathedrals, early believers gathered in open spaces: courtyards, gardens, and rooftops. There were no walls to define their faith. It was not where they prayed that mattered, but how they did.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Lala read about it once and thought of her own home. A place filled with crucifixes, holy water, and prayers said before meals. Nevertheless, she felt the greatest proximity to God when she prayed in places that allowed her to speak her heart's true desires.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              In high school, their school held a play about King Henry VIII and his wives. Lala was assigned Anne Boleyn. She wore a velvet, medieval gown that her mother bought from Quiapo, paired with an intricate pearl necklace. Her line, which she practiced all night was, "I will be your Queen, Your Majesty." The boy playing Henry smirked beneath the dim stage lights and declared, "So it is with our love, for by absence we are parted, yet nevertheless it keeps its fervour." Everyone clapped. No one bothered to include the part where Anne was beheaded.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              After the play was finished, everyone applauded Lala for her outstanding performance. When Lala got home, she searched for the real story of the woman whose life she played. Anne Boleyn was more than a queen, for she was a woman killed for loving a man who rewrote God's laws just to have her. But as it is with men maneuvering religion to their own agenda, he discarded her when her love no longer served him. No woman deserved to be treated like one of Henry VIII's wives. Used as a pawn in a game on the board of religion. Though even if Lala despised Henry, she still envied him. He broke a church for love. She could not even speak hers out loud.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              If a king could defy God for the woman he wanted, why was she taught to fear hell for simply wanting to love? She would've never fit in God's image. What a shame.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              The last day of school brought a strange lightness. Tomorrow would be summer. She imagined dyeing her hair blue, the way her strict school forbade. As she walked home, traffic moved like a slow current. Vendors shouted, children played, the air thick with heat and dust. She saw a woman crossing the street with a baby in her arms, holding out a half-cut bottle filled with coins. Her eyes pleaded silently.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Lala remembered her mother's voice: Don't give money to beggars. They should work for it. Thou shall not tolerate nor help "adiks" and "squatters," that is the lesson taught to them at home. Against her mother's judgment, she hands a 500-peso bill to the woman. The woman whispered, "God bless you." Lala smiled faintly. She did it not out of duty, but because she couldn't stand the ache of helplessness. It wasn't her objective to go to heaven just because she helped a beggar. If she had the means to change the world, she would gladly do so in a heartbeat.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              That same peculiar emotion followed Lala through her dreams. Her phantasy started out in a presidential mansion. A Vienna 24 Light K9 Crystal chandelier hung over her head, and silk sheets wrapped around her. Beside her lay a topless man she didn't recognize. Her hand touched the swell of her stomach. "I can't wait to meet her," he whispered, kissing her belly. A stroke of red paint crossed a white canvas. She woke up. It was just a dream. It wasn't real, and it never will be.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              A faint thud landed on her desk. Christa stood before her, smiling, holding a cup of coffee. Lala instantly discerned what was real. "You were out cold again," she teased. "Stop sleeping in the cafeteria." Lala laughed softly. "Thanks," she said. Christa left soon after, and Lala watched her go, her heart calm and restless all at once. Christa was a friend who always made sure she ate at the right times, cheering her up in the worst moments of her life.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              In her room, Lala crocheted a small cross. Her hands moved in rhythm, yarn looping between her fingers. She brought the basket full of cross crochets in grey and yellow to her mother's prayer group. The women sat around the living room, rosaries clinking softly as they prayed. "You're really talented," one said. Another laughed, "But don't cut your hair too short. You'll look like a boy." Lala smiled politely. Her mother would often invite her friends for a prayer night. "And look at what she's wearing, Magda! She looks like a boy with those ripped jeans! I told her we should go shopping for better clothing." The women sipped their coffee, pearls shining against modest dresses. Their laughs reverberated in the room. After begging all the saints for their desires, her mother and her friends would start to gossip. Their prayers reeked of perfume and judgment.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              It was as if they were trying to hide something. After all, a wicked heart, no matter how elusive, stands out in the ordinary.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Lala had learned to crochet from Jacob, her childhood friend. Everyone thought they'd end up together. Everyone Lala knew was into dating. First loves, first crushes. For her friends, living life to the fullest meant having boyfriends and sneaking out of classrooms to kiss and make out. What she remembered most was the comfort of making something with her hands. The feeling of inserting the needle into different textiles and creating a small or big pattern allowed her to create her own story. When Jacob asked her out at sixteen, she said yes because it seemed easier than saying no. As the new day unfolded, the sun cast its golden light upon the towering skyscrapers. They sat beneath the shade of a tree. Lala inhaled the aroma of freshly brewed coffee drifting from the nearby cafés. The soft, floral scent of the rose bouquet carried a faint sweetness, almost like fruit. A mother and her teenage daughter passed by, laughing softly, and Lala suddenly remembered her own mother's haunting words: "You need to have children. Because if you don't, that's selfish. You became a woman for a reason, to bring life into this world, just like I did when I gave birth to you."
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              "Do you think I'm selfish?" she asked. "Never," he said. But her first heartbreak wasn't him. It was her mother who taught her that love was only real if it followed rules.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Later that night, Lala read The Lady's Guide to Celestial Mechanics by Olivia Waite. Christa was the one who lent it to her. The story of Lucy, an astronomer who found love in another woman, felt both foreign and familiar. When the characters kissed, something inside her stirred.
            </p>

            <StoryAudio src="/audio/Lala - Flipping page on book.mp3" delay={100} />

            <p className="mb-6 leading-relaxed text-gray-700">
              She read the page again and again, until she could almost see herself in it. Her hand reached for Christa's in the quiet of the library. Christa pushed her into a corner between the shelves, their lips meeting as if it were their salvation.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              She immediately closed the book. Some things were better left imagined.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              "Bless me, Father, for I have sinned." The words trembled as they left her mouth. Between her and the priest stood a brown wooden grate, separating sinner from savior. Lala's hands were shaking in a prayer position. Beads of sweat formed on her forehead. The dark, guarded atmosphere of the confessional made her want to puke. "I've desired a woman," she whispered. She confessed her most shameful secret. She had fantasized about a woman. She had touched herself while thinking about one.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              "Disgusting," the priest muttered. "I'm sorry, my child, but you must repent, or the depths of hell will be waiting for you."
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Tears welled in Lala's eyes. She thought of all the sinners who had once stood in this same room, breathing the same air, fearing the same God. Their sins remained alive in the silence of the confessional. Thieves, liars, adulterers, the bitter, the cruel—she was one of them now. Who knows if their sins were greater, perhaps lesser, yet all of them had knelt under the same gaze of judgment.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              She wished them peace, and perchance a season to begin again. A quiet hope rose in her chest that forgiveness might find them, even if it no longer came for her. The idea of being unworthy of God's love pressed heavily against her ribs. Was she not worthy of God's love because she loved differently?
            </p>

            <StoryImage 
              src="/stories-assets/FOR LALA 2.webp" 
              alt="Lotus flower growing from mud" 
              delay={200}
            />

            <p className="mb-6 leading-relaxed text-gray-700">
              Lala bowed her head and obeyed, folding her hands tightly as the priest instructed her to pray like her life depended on it. She was unworthy, and no prayer could change that. Lead us not into temptation, but deliver us from evil. Amen.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Evil.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              The word was stuck in her head, like a voice. People weren't moral. They were not just tested in the same way. Her mother's best friend's husband, a volunteer at church, had a mistress. Her sister, training to be a nun, cursed behind closed doors. And her mother, her holy, devout mother, once had an affair with their pastor. The family bought their silence. If Lala were going to hell, she wouldn't be alone.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Wherever she went, her sin trailed behind her like a shadow. She stopped trying to fit herself into names. Gay, bisexual, non-binary, and all the other labels. She was simply Lala. Someone who loved. Someone who prayed. Someone still trying to hold both worlds steady in her trembling hands.
            </p>

            <StoryImage 
              src="/stories-assets/FOR LALA 3.webp" 
              alt="Shackles" 
              delay={200}
            />

            <p className="mb-6 leading-relaxed text-gray-700">
              In the Philippines, faith runs thicker than blood. The country has drastically changed since the 1990s, when the first LGBTQ+ voices began to rise and demand to be seen. Progress, once applauded for, is now stagnant. The weight of colonization and capitalism still holds the nation and its people's lives. So, it is no surprise that many still call love like hers unnatural.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Unlike in other countries, like the United States, homophobia exists, but people are allowed more room to breathe, to exist as they are. Here, love between two women is still forbidden by law. Same-sex marriage remains unrecognized. And the irony persists. Spain, the very nation that once conquered this land, has long granted the rights that the Philippines still withholds.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Now, Lala lives in a condo in the city. From her window, skyscrapers glow like candles in the dusk. The walls are painted white, her guitar leans against the black couch, and her records line the shelves. Her dark furniture is a bold pattern she has committed to. She spreads her curtains open, and Privacy finally feels divine.
            </p>

            <StoryAudio src="/audio/Lala - Gentle Ambient Piano.mp3" delay={200} loop={true} />
            <StoryImage 
              src="/stories-assets/FOR LALA 4.webp" 
              alt="Dove to symbolize freedom" 
              delay={400}
            />

            <p className="mb-6 leading-relaxed text-gray-700">
              She crochets again, a peach flower pattern resting in her lap. It was meant for Christa. A woman who made her see herself through the lies.
            </p>

            <p className="mb-12 text-xl leading-relaxed text-gray-700 font-medium italic">
              The sculpture of faith lives on in the beauty and sorrow of the people and places that we continue to love.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              And when Lala comes home to His arms one day, home will no longer be a prayer. She will be forgiven.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
