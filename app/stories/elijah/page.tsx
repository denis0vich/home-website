'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import StoryImage from '@/components/StoryImage'
import StoryAudio from '@/components/StoryAudio'

export default function ElijahStoryPage() {
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
              <span className="text-sm font-bella-queta text-gray-500 uppercase tracking-wider">Subject: Elijah</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bella-queta text-gray-900 mb-4">
              The Vantage Point
            </h1>
            <p className="text-lg font-bella-queta text-gray-600">
              Topic: Mental Health, Financial Precarity
            </p>
            <p className="text-sm font-bella-queta text-gray-500 mt-2">
              Color Palette: Blue colors
            </p>
          </header>

          {/* Story Content */}
          <div className="prose prose-lg max-w-none font-bella-queta">
            <ScrollAnimation direction="fadeIn" delay={200}>
              <p className="text-xl leading-relaxed text-gray-700 mb-8 italic">
                Elijah doesn't recall a time when he wasn't longing to be somewhere else. He imagined a quiet place, where the only sound was the one he allowed. A world where his only companion was silence. In that place, his heart could finally rest, no longer thrumming with the constant hum of worry beneath his skin. No demands. No responsibilities. He was alone, and in that solitude, he believed he could conquer the world.
              </p>
            </ScrollAnimation>

            <p className="mb-6 leading-relaxed text-gray-700">
              He could almost hear the stillness.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              In another life, another version of him was living it now.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              He closed his eyes.
            </p>

            <StoryImage 
              src="/stories-assets/FOR ETHAN.jpg" 
              alt="Open Eyes to Closed Eyes" 
              delay={200}
            />
            <StoryAudio src="/audio/Elijah - panalangin piano.mp3" delay={300} loop={true} />

            <p className="mb-6 leading-relaxed text-gray-700">
              "Mahal! I'm home!" The sound of his wife's voice settled over the rooms as she closed the door.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              She placed her car keys on the glass side table beside the white, pristine sofa. Elijah was in the kitchen when he heard her, rolling dough on top of the marble kitchen island. Every surface of his home was sleek. This was an area that only required simple maintenance, where every swipe of the hand left no trace of dirt or dust.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              He loved cooking and baking for his loved ones, especially his wife. It was a therapeutic activity, where each dish he made spoke of his love. Apo Hiking Society's song Panalangin, his favorite, played softly through the built-in speakers he had installed in the ceiling.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              She hugged him from behind, her weight an everlasting comfort to his presence. He turned around to spin her in a quick, bright circle as he belted out the lyrics, laughing at the sound of his own voice. Cold air seeping from the air conditioner brushed against his arms, making his skin tingle. His feet settled into the ornate, marble tiles under his bare feet. Spending a lifetime with his wife and the family they were building was more than enough. Everything was where it should be, held in perfect, intentional order.
            </p>

            <StoryAudio src="/audio/Elijah_ Streets of Manila.mp3" delay={100} loop={true} />

            <p className="mb-6 leading-relaxed text-gray-700 font-medium">
              But reality was brighter than the sun.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              He opened his eyes. The sharp white of his dream dissolved into the chipped melamine countertop, the single, stained electric kettle wobbling on the edge. His kitchen island was a small plastic table, its legs uneven, where he rested his weary elbows. He tore open a packet of instant noodles. The kettle rattled as it boiled.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              The bustling street of Paco was the only home he had ever known. When he opened their dingy, dusty window, the strident spirit of Manila came to life. He heard the wheels of the jeepneys, accompanied by the metallic clang of passing tricycles. The blaring, distorted vocals from a neighbor's karaoke machine at two in the afternoon—always two in the afternoon—were always followed by the piercing curse: "Putangina mo!" from the tambays down the street. The melodies he would often hear formed a rhythm that made him wish he were deaf.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Inside, his mother's voice blended with the TV's static. Even in his room, the noise found him. He peeled off his shirt, but the heat refused to leave his skin. This was the repeating tune he danced to within the thin walls of his space.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Elijah reminded himself he was luckier than those who had nothing to eat. His family was there, holding his hand through it all. But the exhaustion that came with having no say in his own life grew steadily. It was as if life had turned into a circus. And, the worst part was that everyone wanted to be part of the show.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Every night, when insomnia took hold of him, he would slip downstairs to get a glass of milk. His mother would still be there, sorting papers by the glow of her phone. Bills, he assumed. Even in the dim light, the worry on her face was clear. Tuition. Groceries. Rent.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              "Tignan mo si Sevi, naka-abroad na oh," she said once, scrolling through Facebook. His cousin, their family's pride. The pressure pressed on his chest like a command.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Some mornings, his heart pounded just from opening his banking app. He never knew if he had enough for lunch. In economics class, as the professor explained the sunk cost fallacy, his mind drifted. His parents had invested everything in his education. Some neighbors said it was foolish to let him study instead of work. But Elijah fought for it. He had to believe it would pay off. Elijah feels like he's cutting his losses early, praying that the climb ahead will lead to something worth all this.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              When Elijah would get home from school, the voice in his head did not stop. What if they couldn't pay his tuition? What if the lights went out? What if. What if.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              His friend once told him he might be depressed. But Elijah didn't think he had the right to be. Depression was for people who could afford to stop. He had to keep going.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              When the noise became too much, he clung to his dreams.
            </p>

            <StoryImage 
              src="/stories-assets/FOR ETHAN(1).jpg" 
              alt="Sailing at sea" 
              delay={200}
            />
            <StoryAudio src="/audio/Elijah - sea waves.mp3" delay={300} loop={true} />

            <p className="mb-6 leading-relaxed text-gray-700">
              It's not often that Elijah gets to savor the beauty of the wild, blue seas. The sound of the waves crashing on the shore, and the rocks pushing against his feet, made him smile at the serenity. He had always been fascinated with water—how it flows, how it goes, not caring what others would think of it. The saline tang of the sea was prominent in the air. He touched the cold water. It was magic, time travel even, knowing how many had walked in this sea before he was born, and how many would witness its beauty for generations to come.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              He heard his friends laughing while taking pictures. His little secret was that John, his classmate, helped him with a side hustle. They did the homework of their lazy classmates. With the money he made from doing full-blown research papers and science assignments, he managed to give his sister Maya an allowance and pay for his field trip to Batangas.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              The seagulls were squawking overhead, squabbling for bread from their classmates' food. Elijah was brave enough to look at the sun straight on. His eyes burned, but he chose to feel something for today.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              They visited a few historical locations in Batangas. When they had free time, Elijah dipped his toes into the water and swam, far, far away from the shore. He never had a vacation. Even during summer break, he had to find odd jobs just to help out at home. Here, while he floated in the depths of the ocean, he stared at the vast skies, wondering if he'd ever get to see bioluminescent algae in the sea. Granted, it was still day, so the sunlight would make it hard to see the cerulean glow of the organisms. Perhaps one day, when he learns to free dive in the islands of Palawan. No worry came to mind. His heart was steady. Until the water began to fill his lungs.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              The voices in his head were hard to cure. He had no adequate money to book a consultation. Moments like this were what kept him at peace. Being human in the ocean reminded him that the universe is infinite, forever expanding. His place in it was like that of an ant under a microscope. The ocean welcomed him with open arms; his problems did not matter when he swam with fish or tasted the salty water beneath his tongue. He knew that his cortisol levels were decreasing, his blood pressure normal. The water was calming, unlike the land where he lived.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Inhaling the tides, he sank underwater, blowing bubbles through his mouth. He must have reached the deeper side of the beach. He coughed, then saw pitch black through his eyes. He was coughing profusely, and for a moment, he wanted to succumb to the abyss. He heard his name echoing through the reef far below. There was a suffocating absence of light. The void had called him, and he almost answered. A sudden grip caught his shoulders, dragging him out of the dark. His friend, John, had jumped into the water and saved him.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Sometimes, Elijah would think of that accident, of how his life could've ended. Even now, he couldn't shake the sensation of being dragged back. And in the hollow space where true relief should have found him, there bloomed a bitter, instantaneous thought: Bakit hindi mo na lang ako iniwan doon? He didn't know whether he was talking to himself, God, or the voices in his head.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              When the world became too loud, Elijah scrolled through photos of minimalist cafes. He liked their stillness, their curated environment. Cafes were clean, controlled, and safe. Outside, the curses and clatter of the street no longer startled him. His skin was used to the heat, the press of strangers' shoulders inside the jeep. His eyes stayed vigilant, wary of what waited beyond each corner.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              None of the girls he met there ever saw his home. He didn't want them to.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Until one day, he let someone in. Cooking was his love language, his small rebellion against the chaos. He made his special sinigang, the broth rich and sour. She smiled when he served her, though he missed the faint grimace as she crossed the threshold. That night, the neighbors sang louder than usual. It was karaoke night, apparently, and the floorboards joined in, creaking to the beat.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              A few days later, she ghosted him. He replayed the night, asking himself, May ipis ba na gumapang sa lamesa? Longing for love as a poor man was death sentence. He replayed the night, asking himself, May ipis ba na gumapang sa lamesa?
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              When the panic rose, Elijah started tapping the meridian points of his body. He began with tapping the sides of his hands, under his arms, then areas around his face. According to Chinese beliefs, energy flows in the meridian points in the body. Now, he breathed slowly coming back to the world.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              His identity was defined by his environment, and he couldn't blame the girls for wanting to pursue men with better prospects. In contrast, his mother, Maricel, had loved him without question. On his first day of college, she'd sewn a loose button onto his polo.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              "Kumain ka na," she murmured, pushing a plate of fried egg and rice toward him, despite her weariness. "Kahit wala pa tayong ipon, may lakas ka pa rin dapat."
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Elijah remembers buying a soft pillow with the money he earned from tutoring his classmates. It wasn't much, just a clean square of comfort, still smelling faintly of detergent. He thought it might replace the tired pillows his parents had long slept on. When he opened their bedroom door, they were already asleep. His father's arm draped over his mother's side, the electric fan humming low. He placed the pillow beside them, careful not to wake them, as he lingered in the doorway. When the stars finally aligned for him, his parents would no longer have to sleep on worn-out mattresses. He kept their pictures in his wallet to inspire him during exam season.
            </p>

            <StoryAudio src="/audio/Elijah - Gentle Heartbeat Fading In.mp3" delay={100} loop={true} />

            <p className="mb-6 leading-relaxed text-gray-700">
              As a nursing student, science and math became his lifeline. His mastery of numbers, paired with an almost stubborn curiosity about how life worked, placed him among the best in class. All he wanted was to give his mother the home she deserved. And in his mother's own little way, he realized, this was her first time living, too.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              At night, he sometimes stayed in the library, watching old American movies on the PC. Sleepless in Seattle was his favorite. A film about longing and beginning again. He held onto one line from Tom Hanks' character:
            </p>

            <p className="mb-6 leading-relaxed text-gray-700 italic pl-6 border-l-4 border-blue-400">
              "I'm gonna get out of bed every morning... and breathe in and out all day long. And then after a while I won't have to remind myself to get out of bed in the morning and breathe in and out."
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              The grand interiors of their school library and the cozy cafés in the evening gave him solace. He mentally took note of the interiors she admired, details he would someday incorporate into his dream home. It wasn't about just obtaining luxury, but about the freedom and time that came with stability. When he finally had his dream home, he wanted a proper backyard. Like the ones he saw in Stranger Things on Netflix, where the characters could run and lounge freely. He imagined his children playing in the grass, soaking in the sun. To raise a family in these suffocatingly urban, tiny spaces was, somehow, an act against nature. He needed room for them to simply be.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Back in high school, Elijah had turned to Zen Buddhism to calm his restless mind. Should he win the lottery, he would buy a large, minimalist house. The foundation of minimalist design emerged from Eastern cultures, drawing deeply from Zen Buddhism. This design and philosophy principle was strongly influenced by Taoism, embracing a disciplined simplicity that sought the clean and the harmonious.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              His home was painted in black and white, its lines sharp and deliberate. It was the opposite of the noise that defined his present.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              The contemporary house now prioritizes comfort. Dieter Rams is a German designer who once said that "good design is as little design as possible". In focusing on the essential aspects of a home, it returns to state of purity. And Elijah, so badly wanted a fresh start, where his new story can unravel.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Elijah felt a sudden ache in his feet. The tiles. In that moment, the exhaustion of his own long commute and late-night studying felt selfish. He saw the truth clearly. It wasn't just him carrying the burden. His mother had been making these agonizing choices for years. His education was a means to an end. It will be his golden ticket to freedom. His love for the irrefutable logic of the universe brought him to the top. He graduated from college with honors and ranked as a topnotcher in the nursing boards. He remembered, then, that what makes humans different from animals is their wisdom. Elijah may be human, but his animalistic hunger to get out of the ghetto was something science could not explain.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              Now, standing at the mountain's edge, the cities below gleamed in the sunrise. His friends forced him to go hiking with them. Elijah, looking ahead, understood his true vantage point. His hurdles in his house in Paco were only steps that he needed to surpass. Out of his love for his family and his dreams, he declared a vow. He would keep climbing, one tired, tenacious step at a time.
            </p>

            <StoryAudio src="/audio/Elijah_ Peaceful.mp3" delay={200} loop={true} />
            <StoryImage 
              src="/stories-assets/FOR ETHAN(2).jpg" 
              alt="Field" 
              delay={400}
            />
          </div>
        </article>
      </div>
    </div>
  )
}
