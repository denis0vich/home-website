'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import StoryImage from '@/components/StoryImage'
import StoryParagraph from '@/components/StoryParagraph'

export default function InformationDesignPage() {
  return (
    <div className="story-page-wrapper">
      <div className="story-background" />
      
      <div className="story-nav-overlay">
        <Navigation />
      </div>

      <div className="story-content-area">
        <article className="max-w-4xl mx-auto px-6 py-20">
          <ScrollAnimation direction="fadeInUp" duration={1200}>
            <header className="mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bella-queta text-gray-900 mb-6 leading-tight">
                Information Design & Autonomy
              </h1>
              <p className="text-xl font-bella-queta text-gray-600">
                The Psychology of the Digital Mood Board
              </p>
            </header>
          </ScrollAnimation>

          <div className="prose prose-lg max-w-none">
            <ScrollAnimation direction="fadeIn" duration={1200}>
              <p className="text-2xl md:text-3xl leading-relaxed text-gray-700 mb-16 italic font-light text-center max-w-3xl mx-auto">
                Information Design & Autonomy explores the digital landscape where the modern dream home is first conceived. This section analyzes how the architecture of online platforms gives Gen Z a crucial sense of control and self-definition, making the act of curating digital aesthetics an essential part of shaping their identity and future aspirations.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" duration={1000}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  The Promise Pins
                </h2>
                <StoryParagraph>
                  Everyone has been there. It&apos;s midnight, the city noise is too loud, and one&apos;s small apartment feels like it&apos;s shrinking. So, people open Pinterest. They scroll through an endless feed of homes, minimalist concrete walls, and organized, professionally decorated offices. They tap &apos;Save,&apos; &apos;Pin,&apos; or &apos;Add to Collection.&apos; They aren&apos;t just looking at decoration or designs, they are constructing a world that, right now, feels utterly unattainable.
                </StoryParagraph>
                <StoryParagraph>
                  But what if that digital mood board, that collection of saved images on Instagram, that detailed Notion dashboard, or that secret board of Scandinavian furniture, isn&apos;t just a fantasy? What if it is, in fact, one of the most powerful, serious tools you possess for identity formation and achieving future stability?
                </StoryParagraph>
                <StoryImage 
                  src="/beyond-the-features/pinterest board.png" 
                  alt="Pinterest mood board example" 
                />
                <ScrollAnimation direction="fadeIn" duration={800}>
                  <p className="mb-8 text-center text-2xl leading-relaxed text-gray-900 font-bold">
                    These digital mood boards are people&apos;s first piece of real estate. It&apos;s the blueprint of their future self.
                  </p>
                </ScrollAnimation>
              </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" duration={1000}>
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  Curation as Control
                </h2>
                <StoryParagraph>
                  In a hyper-urbanized environment like Metro Manila, Gen Z faces an overwhelming lack of control. You can&apos;t control traffic, you can&apos;t control rent prices, and you certainly can&apos;t control how quickly you climb the career ladder. This immense, external pressure creates a deep psychological need for internal autonomy.
                </StoryParagraph>
                <StoryParagraph>
                  This is where the mood board steps in. It gives you immediate, low-stakes control over your entire aesthetic future.
                </StoryParagraph>
                <StoryParagraph>
                  Design experts Nada Endrissat, Gazi Islam, and Claus Noppeney describe the physical mood board&apos;s power in their research on design coordination, but the concept translates perfectly to the digital space. They found that these aesthetic objects, even when just visual, act as a coordination tool. They can direct and align independent actors (in your case, the disparate parts of your own life: your job, your saving habits, your aesthetic taste) while still maintaining creative freedom.
                </StoryParagraph>
                <ScrollAnimation direction="fadeIn" duration={800}>
                  <p className="mb-8 text-center text-xl leading-relaxed text-gray-900 font-bold">
                    Your board isn&apos;t just a collection of wishes, it&apos;s a non-verbal contract with yourself, a balance between the dream life with the resources you currently have.
                  </p>
                </ScrollAnimation>
                <StoryParagraph>
                  By constantly refining this digital blueprint, you are practicing decision-making. You are deciding: Do I prefer the curved chair or the straight one? Do I value natural light or high technology? These low-pressure choices are a dress rehearsal for the high-stakes decisions you will eventually make when you finally buy that first appliance or sign that first lease. It&apos;s a way to train the brain to know what it truly wants, establishing a visual language that it can carry with it every day.
                </StoryParagraph>
              </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp">
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  Value-tagging your goals
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  According to neuroscientist Dr. Tara Swart, as explained in a Medium piece by Sasha Pham, the simple act of looking at images on a vision board &quot;primes the brain to grasp opportunities that may otherwise have gone unnoticed.&quot; This is because the brain employs a process called &apos;value-tagging.&apos;
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Think of the brain as a hyper-efficient filter: it constantly prioritizes what&apos;s important to your survival and goals, and filters out the rest. Dr. Swart notes that the brain assigns a higher &apos;value&apos; to images than it does to plain written words on a to-do list. The more you look at those saved pins of the perfect office or the quiet bedroom, the more those images move up in value in people&apos;s subconscious. They become critical data points.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  This phenomenon is sometimes compared to the &apos;Tetris Effect&apos;: after playing the game for too long, people start seeing falling blocks in their everyday environment. Similarly, after repeatedly &quot;seeing&quot; their dream home on a screen, their brain starts noticing real-world opportunities, a sale on that specific texture of linen, a job opening that could fund that dream kitchen, or a small apartment listing with the exact window shape they pinned. The dream stops being an abstract fantasy and starts becoming a set of tangible clues.
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp">
              <section className="mb-12">
                <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                  From Pixel to Plan
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Perhaps the most potent function of the digital mood board is its power to create self-efficacy and enhance self-definition.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  For young professionals, especially those from underrepresented or low socioeconomic status (SES) backgrounds who face systemic barriers, the vision board serves as a crucial tool for aspirational growth. In Vision Boards and Adolescent Career Counseling: A Culturally Responsive Approach, researchers Waalkes, Gonzalez, and Brunson described vision boards as a &quot;creative tool that counselors and clients can use to promote communication and identification of future goals&quot; in a way that is strengths-based and solution-focused.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  When financial or educational goals feel impossibly distant, the ability to visualize and articulate desired future space gives one a tangible sense of what they are fighting for. The board encourages:
                </p>
                <ul className="list-disc pl-8 mb-6 space-y-4 text-gray-700">
                  <li><strong>Identity exploration:</strong> By designing your future home, you are deciding who you need to be to live there.</li>
                  <li><strong>Enhances self-efficacy:</strong> You stop thinking, &quot;I can&apos;t afford that,&quot; and start thinking, &quot;What are the specific, actionable steps I need to take to earn that?&quot;</li>
                  <li><strong>Develops your aspirations:</strong> It provides a clear, attractive target that motivates you to persevere through challenges.</li>
                </ul>
                <p className="mb-6 leading-relaxed text-gray-700 font-bold text-lg">
                  The digital mood board proves that people have the clarity, the taste, and the ambition to design a life of comfort and peace. It&apos;s their declaration that they deserve a sanctuary for themselves.
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

