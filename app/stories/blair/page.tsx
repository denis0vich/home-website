'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import StoryImage from '@/components/StoryImage'
import StoryAudio from '@/components/StoryAudio'

export default function BlairStoryPage() {
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
              <span className="text-sm font-bella-queta text-gray-500 uppercase tracking-wider">Subject: Blair</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bella-queta text-gray-900 mb-4">
              The Architecture of Moving
            </h1>
            <p className="text-lg font-bella-queta text-gray-600">
              Topic: Abuse, Repressed Personal Identity
            </p>
            <p className="text-sm font-bella-queta text-gray-500 mt-2">
              Color Palette: Black to Vibrant Orange Colors
            </p>
          </header>

          {/* Story Content */}
          <div className="prose prose-lg max-w-none font-bella-queta">
            <ScrollAnimation direction="fadeIn" delay={200}>
              <p className="text-xl leading-relaxed text-gray-700 mb-8 italic">
                What does it say about a home when you have more than one house, and yet, the feeling of belonging is still out of reach?
              </p>
            </ScrollAnimation>

            <p className="mb-6 leading-relaxed text-gray-700">
              Blair seems to have it all. Staring at herself in the mirror, she adjusts the sleeves of her white school uniform. She turns once, noticing the wrinkles of her skirt that graze her toes. The light from her stained-glass window passes over the silver cross on her bedside table. She glances at it, grabs her school bag, and leaves her room.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              The loud honk of a car snaps her out of her thoughts. She smiles at her father, waving. His face is a permanent frown. The grey Land Rover tells a story of its own. As Blair slides into the backseat, the smell of lavender lingers. She looks at her father's indifferent eyes and reminds herself: this is what it looks like to have everything.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Blair believes that true success is immeasurable. But when the report card lands on her desk, the numbers feel divine. Sparks flood her eyes. Later that day, at school, she passes a group of med students in white coats, their laughter bright and confident. The stethoscopes around their necks glint under the light. She smiles, remembering how her mother once dreamed of being one of them.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Every evening after school, Blair would peek into her mother's room. "Are you ready to go to the grocery?" she'd ask. Her mother would nod, already holding a list. They'd walk the aisles together, their small rituals anchoring them: the debate over which brand of rice to buy, the smell of bread rising from the bakery section, the soft clatter of cans being placed in the cart. For Blair, it didn't matter where they shopped. What mattered was her mother's genuine joy in spending time with Blair, and the way it restored her sense of purpose as a wife and mother.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Their home in Antipolo was a dream others might envy. A six-bedroom mansion perched on a hill, surrounded by tall trees and guarded gates. The neighborhood was peaceful, detached, and safe. Every morning, sunlight poured through glass walls. Chandeliers glimmered above the dining table, and the air always smelled faintly of clean linen and pastries. Somehow, in all that brightness, Blair felt a heaviness she could never name.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Blair knew of opulence. She lived inside it, breathed it. Every wish, every comfort, within reach. Her world was a gilded cage, a constraining piece of gold strapped around her neck.
            </p>

            <StoryAudio src="/audio/Blair - Cold, High-Pitched Piano Chord .mp3" delay={100} />

            <p className="mb-6 leading-relaxed text-gray-700">
              What she longed for was not another room, not another house. She desired a space that held love, permanently. When a child grows up craving affection, that hunger doesn't fade with age. It transforms, showing up as longing, as rebellion, as the desire to be seen.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Blair chased that feeling wherever she could find it. The blinding lights of a club, the pulsing beat of a song, the blur of strangers dancing too close. The music filled the hollow places her home could not. "Let's smoke," her friend Yanna said once, pulling her into the bathroom. Yanna laid out a small bag of white powder beside a pack of cigarettes. "Silly, this club's exclusive. No one will care."
            </p>

            <StoryAudio src="/audio/Blair - club music .mp3" delay={100} loop={true} />
            <StoryImage 
              src="/stories-assets/FOR BLAIR.jpg" 
              alt="Disco Ball" 
              delay={300}
            />

            <p className="mb-6 leading-relaxed text-gray-700">
              Blair hesitated, her pulse racing. Then she took a breath. The air burned as it entered her lungs. She coughed, then laughed, dizzy and alive. She could finally breathe. The irony wasn't lost on her. Inside her own home, every breath felt monitored. Here, in the chaos of strangers, in the strange smell of bliss, she tasted liberation.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Humans have always questioned their freedom. Bioavailability. A process that shows how the body absorbs substances faster through the nose. How grief, too, finds its way in through the breath. The same air that carries euphoria can also carry sorrow. For Blair, each inhale was temporary relief; each exhale, a release of everything she could not control.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              When she opened her eyes, she was no longer in the club. The scent of incense replaced the haze of smoke. Wooden pews creaked beneath her as the church bells tolled. A priest's voice echoed through the hall. "If you love me, keep my commandments," he read from John 14:15. Around her, women nodded. The husbands intertwine their fingers with their wives. Each grip was tight. As if they would never let go.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Blair looked at her parents in front of her. Her father bowed his head; her mother smiled at him with the kind of love that forgives too much. Blair felt nauseous. A woman beside her leaned in and said, "Father's sermon is so moving today." Blair smiled faintly and accepted a napkin. If only she knew, Blair thought, how the cross in front of me brings fear, never peace.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              C.S. Lewis, a British author and theologian, once wrote about theologians who believed that things are right only because God commanded them, not because they are inherently good. He found belief to be dangerous, perceiving the possibility that God could be a tyrant.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Blair loathed the very idea that everything built in this world existed because of patriarchy. It was always a man who started something revolutionary, while the intellect and wisdom of women who did just as much remained only as a brief echo. God, perhaps, has no defined gender, but the scriptures and the Catholic community as a whole thrive on patriarchal concepts that persist to this day, where women will forever be subordinate to men, and the very God we worship follows the same principles of masculine authority. Lewis corroborated this by arguing that God, being the instigator and origin of all things, can be understood as the "infinite masculine." Even if canonically God is spiritually beyond human concepts such as gender, the very idea that drives the Catholic institution is based on His image.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              She grew up in a household where the father was head of everything: the house, the family, the faith. Her mother's devotion was measured in sacrifice, her silence mistaken for virtue. In the Philippines, religion and family connect so closely that obedience is worshipped. The home becomes a church, the father its priest. And so, even as women suffer, they are told it is holy to endure.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Blair closed her Bible that night. Her prayers no longer reached the same God she grew up believing in. She wanted to believe in something kinder, something that didn't ask her to stay small.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              In the quiet of her room, she turned instead to film. She opened Sculpting in Time by Andrei Tarkovsky, tracing her fingers along its worn spine. Cinema became her new religion. The act of watching, a daily ritual. To transform pain into image, to build worlds from memory and sound, was the closest she came to prayer. The characters she indulged in became her family. She laughed, cried, and fought with them, alongside the demons they battled. When the hero reached rock bottom, Blair imagined herself in their place, wondering if life would still be a worthy opponent or if she, too, would surrender to the villain's embrace. God knows how many villains she'd face in this lifetime.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              She thought of the homes she'd lived in. Pasay, where their first apartment was warm and noisy, had an industrial-chic design, as her mother called it. The space was lined with exposed concrete walls, black steel beams, and low-hanging bulbs. Her mother called it beautifully imperfect. In a way, it felt like a community. Her mother's relatives lived nearby, forming a compound of familiar faces. Luxurious still, but not as luxurious as what was to come.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              When they moved to Antipolo, everything changed.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              The new house was larger, whiter, quieter. Its minimalist design was meant to signify success. Clean lines, glass walls, and polished marble floors. Her mother filled it with expensive furniture: Italian sofas, mirrored tables, porcelain vases. It was perfect, almost too perfect. A house curated like a showroom, not lived in.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Yet the longer they stayed, the more it resembled a shrine to what they'd lost.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Blair's father, a surgeon, was rarely home. When he was, the air thickened with his presence. His voice, once a melodic hymn to Blair's ears, grew sharp with exhaustion. Alcohol became his reprieve. Her mother, a girl once, just like Blair, also dreamed.. "You don't need to work," her father had told her years ago. "I'll take care of you." She believed him. Blair's mother did not pursue the medical boards anymore, pregnant with her first child. Unfortunately, she miscarried and opted to pursue marriage with Blair's father. It was the practical thing to do. Was it love that bound them together? Blair is still unsure.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              As the night settled in, Blair followed her mother into the dirty kitchen, the only part of the house that felt alive. The air smelled of garlic and oil. Pans hung unevenly on the tiled wall. A shoe flew past them, hitting the counter. Her father stood there, brimming with anger. "You brat," he said. "You haven't done anything right." He lunged, but her mother stepped in front of her instinctively. His voice reeked of liquor. Liquor was his God now.
            </p>

            <StoryAudio src="/audio/Blair - Shattering Sound.mp3" delay={100} />

            <p className="mb-6 leading-relaxed text-gray-700">
              Blair froze. She wanted to scream, to run, to disappear.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Every time her father exploded, they fled to Pasay. A cycle of leaving and returning. The same houses, the same fears. Her body learned to live in halves, never settled, always waiting.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Blair sat behind the grand staircase, its marble curve cold beneath her palms. From there, she could see her father's hand strike, her mother's body falter. She stayed hidden, small enough to be forgotten. Each time her mother emerged, bruises bloomed on her skin. Each time, Blair told herself she would do something next time. But she never did.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Once upon a time, her mother waited for her prince charming in a tall, gleaming tower. The knight climbed the tower and declared his eternal love for her. A rainbow arched across the sky as they rode toward their happily ever after. It broke Blair to see her mother's fairy tale collapse. Maybe fairy tales were never meant for them.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Then came a time for isolation. A much bigger isolation held the whole world still. Her father, working at the hospital, always came home by midnight. The smell of antiseptic clung to his clothes. He drank more, and spoke less. "He's saving lives," her mother would say. "He's tired." But Blair saw the truth between his eyes. He was slipping away from the father she knew when she was a babe. The man who once carried her on his shoulders was surrendering to an irreparable darkness.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Every night, she pressed play on a film by Yorgos Lanthimos. His absurd worlds felt familiar, his humor dark and cold. It was easier to live inside them than in her own. She tried to save her father with love, but love could not cure what had already consumed him. So she kept watching, letting the film's chaos blur into her own life until it became indistinguishable.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Press play. Press stop. The end.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              It was a Sunday morning when Blair and her family returned from Pasay to Antipolo. Dark clouds hung low, unmoving. The moment they opened the door, a putrid smell filled the air. Blair's stomach twisted. Near the staircase lay a hand, gray and still. Her father. He had been dead for three weeks.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Does God only take away good people? She wondered. Or even the broken ones? Her father was both. His death did not feel like absolution. Wherever he was now, heaven or hell, a part of her went with him and never found its way back.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700 font-medium">
              A house is a house. A house is not a home.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Months passed. The mansion remained spotless, haunted by what was gone. The walls gleamed, the air unmoving. In the silence of moving forward, Blair began to rebuild her sense of home. For staying in the past meant never being home.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              In the 1970s, maximalism emerged as a rejection of minimalism's sterile perfection. Bold colors, layered textures, inherited furniture, rooms that felt alive with history. It celebrated personality over polish, a home that told a story rather than hid it.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Alidad Mahloudji, a London-based interior designer, championed his maximalist philosophy. He believed that beauty lives in balance, that true calm arises when all the senses are alive. Maximalism, he said, is not clutter. It is a collection of memories made visible. Alidad asserts that the idea of putting items or decor is alluring as it creates that "timeless" look. In contrast to a minimalist design, the maximalist is not afraid of color or life.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Blair imagined creating such a home for herself. One that did not pretend to be pure, one that embraced the chaos she came from.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              When she looked in the mirror now, she saw someone she recognized. The circles under her eyes no longer made her flinch. The face staring back wasn't her mother's, or the child who hid under the staircase. It was her own. Tired, sad, happy—but finally hers.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              She pictured a space where warmth replaced control. A vibrant couch, patterned rugs, the loud rhythm of retro music playing. A room where she could breathe freely, surrounded by reminders of life rather than its absence.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              In spite of this, as she imagined it, she knew she could not leave. Her mother and brother still lived in the old house, carrying what remained. Blair felt indebted to them, tied by something deeper than love. Utang na loob. An invisible thread that binds Filipino families, a debt of care that cannot be repaid.
            </p>

            <StoryAudio src="/audio/Blair - Melancholic Filipino Ballad.mp3" delay={100} loop={true} />

            <p className="mb-6 leading-relaxed text-gray-700">
              In this country, family is both sanctuary and sentence. To stay is loyalty. To leave is betrayal. Blair knows this contradiction too well. Her longing for freedom must live beside duty, faith, and grief.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              She still moves between Pasay and Antipolo, moving between spaces that once confined her. Nonetheless, she feels different now. Hopeful. To be home is no longer a dream. To be home is to have the ability to choose.
            </p>

            <StoryImage 
              src="/stories-assets/FOR BLAIR 2.jpg" 
              alt="Lamp" 
              delay={200}
            />

            <ScrollAnimation direction="fadeInUp" delay={300}>
              <p className="mb-12 text-xl leading-relaxed text-gray-700 font-medium">
                The whimsical lamp beside her, nestled in silky yellow sheets, waits for its owner. She reaches for the switch, and for the first time, she feels herself moving toward tomorrow.
              </p>
            </ScrollAnimation>
          </div>
        </article>
      </div>
    </div>
  )
}
