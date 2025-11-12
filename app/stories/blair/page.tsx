'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import StoryImage from '@/components/StoryImage'
import StoryAudio from '@/components/StoryAudio'
import StoryVideo from '@/components/StoryVideo'
import StoryParagraph from '@/components/StoryParagraph'
import StorySection from '@/components/StorySection'
import TransitionLink from '@/components/TransitionLink'

export default function BlairStoryPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050b22] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(130%_110%_at_0%_-10%,rgba(137,49,114,0.45),rgba(5,11,34,0.9))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(33,56,133,0.4),rgba(5,11,34,0.92))]" />

      <Navigation />

      <main className="relative z-10 w-full pt-40 pb-32">
        <div className="mx-auto w-full max-w-5xl px-6">
        <header className="rounded-3xl border border-white/15 bg-white/10 p-10 text-center shadow-[0_24px_70px_rgba(5,11,34,0.55)] backdrop-blur">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.35em] text-white/65">
            <span className="rounded-full border border-white/25 px-4 py-2">Subject: Blair</span>
            <span className="rounded-full border border-white/25 px-4 py-2">Abuse · Repressed Identity</span>
            <span className="rounded-full border border-white/25 px-4 py-2">Maximalist Sanctuary</span>
          </div>
          <h1 className="font-bella-queta text-5xl md:text-6xl lg:text-7xl">The Architecture of Moving</h1>
          <p className="mt-6 text-lg text-white/80 md:text-xl">
            What does it say about home when you inherit many houses yet never feel rooted? Blair moves
            through sanctuaries built by others as she searches for one she can finally claim.
          </p>
        </header>
        </div>

        {/* New Blair Illustration at the Start */}
        <div className="mt-16">
          <StoryImage src="/stories-assets/Blair-new.JPG" alt="Blair's story illustration" />
        </div>

        <section className="mt-16">
          <StorySection
            sectionId="blair-opening"
            backgroundColor="#130618"
            particleEffect="sparkles"
            particleColors={['#ECDFD2', '#893172', '#FF8C42']}
            particleIntensity={0.45}
            floatingText={['MOVE', 'BELONG', 'HOME', 'SEARCH']}
            floatingTextIntensity={0.35}
            floatingTextDirection="up"
          >
              <ScrollAnimation direction="fadeIn">
                <p className="mb-20 text-center text-3xl md:text-4xl lg:text-5xl font-light italic leading-relaxed" style={{ lineHeight: '1.6', fontSize: 'clamp(1.75rem,4vw,3rem)' }}>
                  What does it say about a home when you have more than one house, and yet, the feeling of
                  belonging is still out of reach?
                </p>
              </ScrollAnimation>

              <StoryParagraph useTextReveal revealType="word" textRevealDelay={30}>
                Blair seems to have it all. Staring at herself in the mirror, she adjusts the sleeves of her
                white school uniform. She turns once, noticing the wrinkles of her skirt that graze her toes.
                The light from her stained-glass window passes over the silver cross on her bedside table. She
                glances at it, grabs her school bag, and leaves her room.
              </StoryParagraph>

              <StoryParagraph>
                The loud honk of a car snaps her out of her thoughts. She smiles at her father, waving. His face
                is a permanent frown. The grey Land Rover tells a story of its own. As Blair slides into the
                backseat, the smell of lavender lingers. She looks at her father&apos;s indifferent eyes and reminds
                herself: this is what it looks like to have everything.
              </StoryParagraph>

              <StoryImage src="/stories-assets/FOR BLAIR.jpg" alt="Blair's story illustration" />
          </StorySection>

          <StorySection
            sectionId="blair-school"
            backgroundColor="#2b0f2b"
            particleEffect="sparkles"
            particleColors={['#ff9e45', '#ffcd80', '#ffe0b2']}
            particleIntensity={0.4}
          >
              <StoryParagraph>
                Blair believes that true success is immeasurable. But when the report card lands on her desk, the
                numbers feel divine. Sparks flood her eyes. Later that day, at school, she passes a group of med
                students in white coats, their laughter bright and confident. The stethoscopes around their
                necks glint under the light. She smiles, remembering how her mother once dreamed of being one of
                them.
              </StoryParagraph>

              <StoryParagraph>
                Every evening after school, Blair would peek into her mother&apos;s room. &quot;Are you ready to go to the
                grocery?&quot; she&apos;d ask. Her mother would nod, already holding a list. They&apos;d walk the aisles
                together, their small rituals anchoring them: the debate over which brand of rice to buy, the
                smell of bread rising from the bakery section, the soft clatter of cans being placed in the cart.
                For Blair, it didn&apos;t matter where they shopped. What mattered was her mother&apos;s genuine joy in
                spending time with Blair, and the way it restored her sense of purpose as a wife and mother.
              </StoryParagraph>
          </StorySection>

          <StorySection
            sectionId="blair-church"
            backgroundColor="#181a2a"
            particleEffect="sparkles"
            particleColors={['#ECDFD2', '#5F3475']}
            particleIntensity={0.2}
          >
              <StoryParagraph>
                When she opened her eyes, she was no longer in the club. The scent of incense replaced the haze of
                smoke. Wooden pews creaked beneath her as the church bells tolled. A priest&apos;s voice echoed through
                the hall. &quot;If you love me, keep my commandments,&quot; he read from John 14:15. Around her, women
                nodded. The husbands intertwine their fingers with their wives. Each grip was tight. As if they
                would never let go.
              </StoryParagraph>

              <StoryParagraph>
                Blair looked at her parents in front of her. Her father bowed his head; her mother smiled at him
                with the kind of love that forgives too much. Blair felt nauseous. A woman beside her leaned in
                and said, &quot;Father&apos;s sermon is so moving today.&quot; Blair smiled faintly and accepted a napkin. If
                only she knew, Blair thought, how the cross in front of me brings fear, never peace.
              </StoryParagraph>
          </StorySection>

          <StorySection
            sectionId="blair-mansion"
            backgroundColor="#1b1f3d"
            particleEffect="sparkles"
            particleColors={['#CCE0FF', '#ECDFD2', '#5F3475']}
            particleIntensity={0.35}
          >
              <StoryParagraph>
                Their home in Antipolo was a dream others might envy. A six-bedroom mansion perched on a hill,
                surrounded by tall trees and guarded gates. The neighborhood was peaceful, detached, and safe.
                Every morning, sunlight poured through glass walls. Chandeliers glimmered above the dining table,
                and the air always smelled faintly of clean linen and pastries. Somehow, in all that brightness,
                Blair felt a heaviness she could never name.
              </StoryParagraph>

              <StoryAudio src="/audio/Blair - Cold, High-Pitched Piano Chord .mp3" volume={0.5} fadeIn={false} />
              <StoryParagraph useTextReveal revealType="word" textRevealDelay={40}>
                Blair knew of opulence. She lived inside it, breathed it. Every wish, every comfort, within
                reach. Her world was a gilded cage, a constraining piece of gold strapped around her neck.
              </StoryParagraph>

              <StoryParagraph>
                What she longed for was not another room, not another house. She desired a space that held love,
                permanently. When a child grows up craving affection, that hunger doesn&apos;t fade with age. It
                transforms, showing up as longing, as rebellion, as the desire to be seen.
              </StoryParagraph>
          </StorySection>

          <StorySection
            sectionId="blair-club"
            backgroundColor="#05010a"
            particleEffect="strobe"
            particleColors={['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff6b9d', '#a8e6cf']}
            particleIntensity={2.2}
            floatingText={['ESCAPE', 'FREEDOM', 'DANCE', 'ALIVE', 'ESCAPE', 'FEEL', 'BREATH']}
            floatingTextIntensity={1.4}
            floatingTextDirection="chaotic"
          >
              <StoryAudio src="/audio/Blair - club music .mp3" loop volume={0.5} />
              <StoryParagraph>
                Blair chased that feeling wherever she could find it. The blinding lights of a club, the pulsing
                beat of a song, the blur of strangers dancing too close. The music filled the hollow places her
                home could not. &quot;Let&apos;s smoke,&quot; her friend Yanna said once, pulling her into the bathroom. Yanna
                laid out a small bag of white powder beside a pack of cigarettes. &quot;Silly, this club&apos;s exclusive.
                No one will care.&quot;
              </StoryParagraph>
              <StoryImage src="/stories-assets/DISCO BALL.jpg" alt="Disco Ball" />
              <StoryImage src="/stories-assets/FOR BLAIR 2.jpg" alt="Illustration of Blair's story" />

              <StoryParagraph>
                Blair hesitated, her pulse racing. Then she took a breath. The air burned as it entered her lungs.
                She coughed, then laughed, dizzy and alive. She could finally breathe. The irony wasn&apos;t lost on
                her. Inside her own home, every breath felt monitored. Here, in the chaos of strangers, in the
                strange smell of bliss, she tasted liberation.
              </StoryParagraph>

              <StoryParagraph>
                Humans have always questioned their freedom. Bioavailability. A process that shows how the body
                absorbs substances faster through the nose. How grief, too, finds its way in through the breath.
                The same air that carries euphoria can also carry sorrow. For Blair, each inhale was temporary
                relief; each exhale, a release of everything she could not control.
              </StoryParagraph>
          </StorySection>

          <StorySection
            sectionId="blair-church"
            backgroundColor="#181a2a"
            particleEffect="sparkles"
            particleColors={['#ECDFD2', '#5F3475']}
            particleIntensity={0.2}
          >
              <StoryParagraph>
                When she opened her eyes, she was no longer in the club. The scent of incense replaced the haze of
                smoke. Wooden pews creaked beneath her as the church bells tolled. A priest&apos;s voice echoed through
                the hall. &quot;If you love me, keep my commandments,&quot; he read from John 14:15. Around her, women
                nodded. The husbands intertwine their fingers with their wives. Each grip was tight. As if they
                would never let go.
              </StoryParagraph>

              <StoryParagraph>
                Blair looked at her parents in front of her. Her father bowed his head; her mother smiled at him
                with the kind of love that forgives too much. Blair felt nauseous. A woman beside her leaned in
                and said, &quot;Father&apos;s sermon is so moving today.&quot; Blair smiled faintly and accepted a napkin. If
                only she knew, Blair thought, how the cross in front of me brings fear, never peace.
              </StoryParagraph>
          </StorySection>

          <StorySection
            sectionId="blair-religion"
            backgroundColor="#23132d"
            particleEffect="none"
          >
              <StoryParagraph>
                C.S. Lewis, a British author and theologian, once wrote about theologians who believed that things
                are right only because God commanded them, not because they are inherently good. He found belief to
                be dangerous, perceiving the possibility that God could be a tyrant.
              </StoryParagraph>

              <StoryParagraph>
                Blair loathed the very idea that everything built in this world existed because of patriarchy. It
                was always a man who started something revolutionary, while the intellect and wisdom of women who
                did just as much remained only as a brief echo. God, perhaps, has no defined gender, but the
                scriptures and the Catholic community as a whole thrive on patriarchal concepts that persist to
                this day, where women will forever be subordinate to men, and the very God we worship follows the
                same principles of masculine authority. Lewis corroborated this by arguing that God, being the
                instigator and origin of all things,                 can be understood as the &quot;infinite masculine.&quot; Even if
                canonically God is spiritually beyond human concepts such as gender, the very idea that drives the
                Catholic institution is based on His image.
              </StoryParagraph>

              <StoryImage src="/stories-assets/FOR BLAIR.jpg" alt="Blair's story illustration" />

              <StoryParagraph>
                She grew up in a household where the father was head of everything: the house, the family, the
                faith. Her mother&apos;s devotion was measured in sacrifice, her silence mistaken for virtue. In the
                Philippines, religion and family connect so closely that obedience is worshipped. The home becomes
                a church, the father its priest. And so, even as women suffer, they are told it is holy to endure.
              </StoryParagraph>

              <StoryParagraph useTextReveal revealType="word" textRevealDelay={35}>
                Blair closed her Bible that night. Her prayers no longer reached the same God she grew up believing
                in. She wanted to believe in something kinder, something that didn&apos;t ask her to stay small.
              </StoryParagraph>
          </StorySection>

          <StorySection
            sectionId="blair-abuse"
            backgroundColor="#3d0000"
            particleEffect="strobe"
            particleColors={['#ff0000', '#8b0000', '#dc143c']}
            particleIntensity={1.5}
            floatingText={['FEAR', 'ANGER', 'HURT', 'PAIN', 'ABUSE', 'DANGER', 'CRY']}
            floatingTextIntensity={1.2}
            floatingTextDirection="chaotic"
          >
              <StoryParagraph>
                Blair&apos;s father, a surgeon, was rarely home. When he was, the air thickened with his presence. His
                voice, once a melodic hymn to Blair&apos;s ears, grew sharp with exhaustion. Alcohol became his reprieve.
                Her mother, a girl once, just like Blair, also dreamed.. &quot;You don&apos;t need to work,&quot; her father had
                told her years ago. &quot;I&apos;ll take care of you.&quot; She believed him. Blair&apos;s mother did not pursue the
                medical boards anymore, pregnant with her first child. Unfortunately, she miscarried and opted to
                pursue marriage with Blair&apos;s father. It was the practical thing to do. Was it love that bound them
                together? Blair is still unsure.
              </StoryParagraph>

              <StoryAudio src="/audio/Blair - Shattering Sound.mp3" volume={0.5} fadeIn={false} />
              <StoryParagraph useTextReveal revealType="word" textRevealDelay={25}>
                As the night settled in, Blair followed her mother into the dirty kitchen, the only part of the
                house that felt alive. The air smelled of garlic and oil. Pans hung unevenly on the tiled wall. A
                shoe flew past them, hitting the counter. Her father stood there, brimming with anger. &quot;You brat,&quot;
                he said. &quot;You haven&apos;t done anything right.&quot; He lunged, but her mother stepped in front of her
                instinctively. His voice reeked of liquor. Liquor was his God now.
              </StoryParagraph>

              <StoryParagraph>
                Blair froze. She wanted to scream, to run, to disappear.
              </StoryParagraph>

              <StoryParagraph>
                Every time her father exploded, they fled to Pasay. A cycle of leaving and returning. The same
                houses, the same fears. Her body learned to live in halves, never settled, always waiting.
              </StoryParagraph>

              <StoryImage src="/stories-assets/FOR BLAIR 3.jpg" alt="Illustration of Blair's story" />

              <StoryParagraph>
                Blair sat behind the grand staircase, its marble curve cold beneath her palms. From there, she could
                see her father&apos;s hand strike, her mother&apos;s body falter. She stayed hidden, small enough to be
                forgotten. Each time her mother emerged, bruises bloomed on her skin. Each time, Blair told herself
                she would do something next time. But she never did.
              </StoryParagraph>

              <StoryParagraph>
                Once upon a time, her mother waited for her prince charming in a tall, gleaming tower. The knight
                climbed the tower and declared his eternal love for her. A rainbow arched across the sky as they
                rode toward their happily ever after. It broke Blair to see her mother&apos;s fairy tale collapse. Maybe
                fairy tales were never meant for them.
              </StoryParagraph>
          </StorySection>

          <StorySection
            sectionId="blair-isolation"
            backgroundColor="#0b1c2f"
            particleEffect="sparkles"
            particleColors={['#5F3475', '#213885']}
            particleIntensity={0.25}
          >
              <StoryParagraph>
                Then came a time for isolation. A much bigger isolation held the whole world still. Her father,
                working at the hospital, always came home by midnight. The smell of antiseptic clung to his clothes.
                He drank more, and spoke less. &quot;He&apos;s saving lives,&quot; her mother would say. &quot;He&apos;s tired.&quot; But Blair
                saw the truth between his eyes. He was slipping away from the father she knew when she was a babe.
                The man who once carried her on his shoulders was surrendering to an irreparable darkness.
              </StoryParagraph>

              <StoryParagraph>
                Every night, she pressed play on a film by Yorgos Lanthimos. His absurd worlds felt familiar, his
                humor dark and cold. It was easier to live inside them than in her own. She tried to save her father
                with love, but love could not cure what had already consumed him. So she kept watching, letting the
                film&apos;s chaos blur into her own life until it became indistinguishable.
              </StoryParagraph>

              <ScrollAnimation direction="fadeIn">
                <p className="mb-12 text-center text-lg font-light italic leading-relaxed" style={{ opacity: 0.8 }}>
                  Press play. Press stop. The end.
                </p>
              </ScrollAnimation>
          </StorySection>

          <StorySection
            sectionId="blair-death"
            backgroundColor="#08060f"
            particleEffect="none"
          >
              <StoryParagraph useTextReveal revealType="word" textRevealDelay={30}>
                It was a Sunday morning when Blair and her family returned from Pasay to Antipolo. Dark clouds hung
                low, unmoving. The moment they opened the door, a putrid smell filled the air. Blair&apos;s stomach
                twisted. Near the staircase lay a hand, gray and still. Her father. He had been dead for three weeks.
              </StoryParagraph>

              <StoryParagraph>
                Does God only take away good people? She wondered. Or even the broken ones? Her father was both. His
                death did not feel like absolution. Wherever he was now, heaven or hell, a part of her went with him
                and never found its way back.
              </StoryParagraph>

              <ScrollAnimation direction="fadeIn">
                <p className="mb-20 mx-auto max-w-3xl text-center text-3xl font-medium leading-relaxed" style={{ lineHeight: '1.6', fontSize: 'clamp(1.75rem,4vw,3rem)' }}>
                  A house is a house. A house is not a home.
                </p>
              </ScrollAnimation>
          </StorySection>

          <StorySection
            sectionId="blair-hope"
            backgroundColor="#452031"
            particleEffect="sparkles"
            particleColors={['#FF8C42', '#ECDFD2', '#5F3475']}
            particleIntensity={0.5}
          >
              <StoryParagraph>
                Months passed. The mansion remained spotless, haunted by what was gone. The walls gleamed, the air
                unmoving. In the silence of moving forward, Blair began to rebuild her sense of home. For staying in
                the past meant never being home.
              </StoryParagraph>

              <StoryParagraph>
                In the 1970s, maximalism emerged as a rejection of minimalism&apos;s sterile perfection. Bold colors,
                layered textures, inherited furniture, rooms that felt alive with history. It celebrated personality
                over polish, a home that told a story rather than hid it.
              </StoryParagraph>

              <StoryParagraph>
                Alidad Mahloudji, a London-based interior designer, championed his maximalist philosophy. He believed
                that beauty lives in balance, that true calm arises when all the senses are alive. Maximalism, he
                said, is not clutter. It is a collection of memories made visible. Alidad asserts that the idea of
                putting items or decor is alluring as it creates that &quot;timeless&quot; look. In contrast to a minimalist
                design, the maximalist is not afraid of color or life.
              </StoryParagraph>

              <StoryParagraph>
                Blair imagined creating such a home for herself. One that did not pretend to be pure, one that
                embraced the chaos she came from.
              </StoryParagraph>

              <StoryParagraph>
                When she looked in the mirror now, she saw someone she recognized. The circles under her eyes no
                longer made her flinch. The face staring back wasn&apos;t her mother&apos;s, or the child who hid under the
                staircase. It was her own. Tired, sad, happy—but finally hers.
              </StoryParagraph>

              <StoryParagraph>
                She pictured a space where warmth replaced control. A vibrant couch, patterned rugs, the loud rhythm
                of retro music playing. A room where she could breathe freely, surrounded by reminders of life rather
                than its absence.
              </StoryParagraph>
          </StorySection>

          <StorySection
            sectionId="blair-conclusion"
            backgroundColor="#552637"
            particleEffect="sparkles"
            particleColors={['#ffd700', '#ffeb3b', '#fff59d', '#ffc107']}
            particleIntensity={0.6}
          >
              <StoryParagraph>
                In spite of this, as she imagined it, she knew she could not leave. Her mother and brother still
                lived in the old house, carrying what remained. Blair felt indebted to them, tied by something
                deeper than love. Utang na loob. An invisible thread that binds Filipino families, a debt of care
                that cannot be repaid.
              </StoryParagraph>

              <StoryParagraph>
                In this country, family is both sanctuary and sentence. To stay is loyalty. To leave is betrayal.
                Blair knows this contradiction too well. Her longing for freedom must live beside duty, faith, and
                grief.
              </StoryParagraph>

              <StoryParagraph useTextReveal revealType="word" textRevealDelay={35}>
                She still moves between Pasay and Antipolo, moving between spaces that once confined her.
                Nonetheless, she feels different now. Hopeful. To be home is no longer a dream. To be home is to have
                the ability to choose.
              </StoryParagraph>

              <StoryImage src="/stories-assets/LAMP.jpg" alt="Lamp" />

              <ScrollAnimation direction="fadeIn">
                <p className="mb-20 mx-auto max-w-4xl text-center text-3xl font-light italic leading-relaxed" style={{ lineHeight: '1.6', fontSize: 'clamp(1.75rem,4vw,3rem)' }}>
                  The whimsical lamp beside her, nestled in silky yellow sheets, waits for its owner. She reaches for
                  the switch, and for the first time, she feels herself moving toward tomorrow.
                </p>
              </ScrollAnimation>

              <div className="my-20">
                <StoryVideo
                  src="/videos/blair-dream-home.mp4"
                  controls
                />
              </div>
          </StorySection>
        </section>

        <div className="mx-auto w-full max-w-5xl px-6">
        <section className="mt-28 rounded-3xl border border-white/15 bg-white/10 p-8 shadow-[0_28px_70px_rgba(5,11,34,0.55)] backdrop-blur">
          <h2 className="text-center font-bella-queta text-3xl text-white">Continue the journey</h2>
          <p className="mt-3 text-center text-white/75">
            Follow the rest of the trilogy to understand how religion, finances, and identity shape the haven each
            protagonist longs for.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <TransitionLink
              href="/stories/elijah"
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#213885] via-[#081849] to-[#5F3475] p-6 shadow-[0_20px_50px_rgba(5,11,34,0.55)] transition hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-20" />
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">Next</p>
                <h3 className="mt-3 font-bella-queta text-2xl text-white">Elijah · The Vantage Point</h3>
                <p className="mt-2 text-sm text-white/80">Longing for quiet, mapping a minimalist retreat in the city.</p>
              </div>
            </TransitionLink>
            <TransitionLink
              href="/stories/lala"
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#5F3475] via-[#893172] to-[#ECDFD2] p-6 shadow-[0_20px_50px_rgba(5,11,34,0.55)] transition hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-20" />
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">Also read</p>
                <h3 className="mt-3 font-bella-queta text-2xl text-white">Lala · The Sculpture of Faith</h3>
                <p className="mt-2 text-sm text-white/80">Rewriting devotion with privacy, softness, and chosen family.</p>
              </div>
            </TransitionLink>
          </div>
        </section>
        </div>
      </main>
    </div>
  )
}
