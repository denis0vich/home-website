'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function InformationDesignPage() {
  return (
    <div className="story-page-wrapper">
      <div className="story-background" />
      
      <div className="story-nav-overlay">
        <Navigation />
      </div>

      <div className="story-content-area">
        <article className="max-w-4xl mx-auto px-6 py-20">
          <ScrollAnimation direction="fadeIn" delay={200}>
            <header className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bella-queta text-gray-900 mb-4">
                Information Design & Autonomy
              </h1>
              <p className="text-lg font-bella-queta text-gray-600">
                The Psychology of the Digital Mood Board
              </p>
            </header>
          </ScrollAnimation>

          <div className="prose prose-lg max-w-none font-bella-queta">
            <ScrollAnimation direction="fadeInUp" delay={300}>
              <p className="text-xl leading-relaxed text-gray-700 mb-8 italic">
                Information Design & Autonomy explores the digital landscape where the modern dream home is first conceived. This section analyzes how the architecture of online platforms gives Gen Z a crucial sense of control and self-definition, making the act of curating digital aesthetics an essential part of shaping their identity and future aspirations.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={400}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  The Promise Pins
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Everyone has been there. It's midnight, the city noise is too loud, and one's small apartment feels like it's shrinking. So, people open Pinterest. They scroll through an endless feed of homes, minimalist concrete walls, and organized, professionally decorated offices. They tap 'Save,' 'Pin,' or 'Add to Collection.' They aren't just looking at decoration or designs, they are constructing a world that, right now, feels utterly unattainable.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  But what if that digital mood board, that collection of saved images on Instagram, that detailed Notion dashboard, or that secret board of Scandinavian furniture, isn't just a fantasy? What if it is, in fact, one of the most powerful, serious tools you possess for identity formation and achieving future stability?
                </p>
                <p className="mb-6 leading-relaxed text-gray-700 font-bold text-lg">
                  These digital mood boards are people's first piece of real estate. It's the blueprint of their future self.
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={500}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  Curation as Control
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  In a hyper-urbanized environment like Metro Manila, Gen Z faces an overwhelming lack of control. You can't control traffic, you can't control rent prices, and you certainly can't control how quickly you climb the career ladder. This immense, external pressure creates a deep psychological need for internal autonomy.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  This is where the mood board steps in. It gives you immediate, low-stakes control over your entire aesthetic future.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Design experts Nada Endrissat, Gazi Islam, and Claus Noppeney describe the physical mood board's power in their research on design coordination, but the concept translates perfectly to the digital space. They found that these aesthetic objects, even when just visual, act as a coordination tool. They can direct and align independent actors (in your case, the disparate parts of your own life: your job, your saving habits, your aesthetic taste) while still maintaining creative freedom.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700 font-bold">
                  Your board isn't just a collection of wishes, it's a non-verbal contract with yourself, a balance between the dream life with the resources you currently have.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  By constantly refining this digital blueprint, you are practicing decision-making. You are deciding: Do I prefer the curved chair or the straight one? Do I value natural light or high technology? These low-pressure choices are a dress rehearsal for the high-stakes decisions you will eventually make when you finally buy that first appliance or sign that first lease. It's a way to train the brain to know what it truly wants, establishing a visual language that it can carry with it every day.
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={600}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  Value-tagging your goals
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  According to neuroscientist Dr. Tara Swart, as explained in a Medium piece by Sasha Pham, the simple act of looking at images on a vision board "primes the brain to grasp opportunities that may otherwise have gone unnoticed." This is because the brain employs a process called 'value-tagging.'
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Think of the brain as a hyper-efficient filter: it constantly prioritizes what's important to your survival and goals, and filters out the rest. Dr. Swart notes that the brain assigns a higher 'value' to images than it does to plain written words on a to-do list. The more you look at those saved pins of the perfect office or the quiet bedroom, the more those images move up in value in people's subconscious. They become critical data points.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  This phenomenon is sometimes compared to the 'Tetris Effect': after playing the game for too long, people start seeing falling blocks in their everyday environment. Similarly, after repeatedly "seeing" their dream home on a screen, their brain starts noticing real-world opportunities, a sale on that specific texture of linen, a job opening that could fund that dream kitchen, or a small apartment listing with the exact window shape they pinned. The dream stops being an abstract fantasy and starts becoming a set of tangible clues.
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={700}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  From Pixel to Plan
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Perhaps the most potent function of the digital mood board is its power to create self-efficacy and enhance self-definition.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  For young professionals, especially those from underrepresented or low socioeconomic status (SES) backgrounds who face systemic barriers, the vision board serves as a crucial tool for aspirational growth. In Vision Boards and Adolescent Career Counseling: A Culturally Responsive Approach, researchers Waalkes, Gonzalez, and Brunson described vision boards as a "creative tool that counselors and clients can use to promote communication and identification of future goals" in a way that is strengths-based and solution-focused.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  When financial or educational goals feel impossibly distant, the ability to visualize and articulate desired future space gives one a tangible sense of what they are fighting for. The board encourages:
                </p>
                <ul className="list-disc pl-8 mb-6 space-y-4 text-gray-700">
                  <li><strong>Identity exploration:</strong> By designing your future home, you are deciding who you need to be to live there.</li>
                  <li><strong>Enhances self-efficacy:</strong> You stop thinking, "I can't afford that," and start thinking, "What are the specific, actionable steps I need to take to earn that?"</li>
                  <li><strong>Develops your aspirations:</strong> It provides a clear, attractive target that motivates you to persevere through challenges.</li>
                </ul>
                <p className="mb-6 leading-relaxed text-gray-700 font-bold text-lg">
                  The digital mood board proves that people have the clarity, the taste, and the ambition to design a life of comfort and peace. It's their declaration that they deserve a sanctuary for themselves.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700 font-bold text-lg">
                  So stop calling it a silly obsession. It is, in fact, the essential first step toward reclaiming autonomy in a world that tries to stifle potential.
                </p>
              </section>
            </ScrollAnimation>
          </div>
        </article>
      </div>
    </div>
  )
}

