'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import StoryParagraph from '@/components/StoryParagraph'

export default function ArchitectEngineerPage() {
  return (
    <div className="story-page-wrapper">
      <div className="story-background" />
      
      <div className="story-nav-overlay">
        <Navigation />
      </div>

      <div className="story-content-area">
        <article className="max-w-4xl mx-auto px-6 py-12 pb-20">
          {/* Header */}
          <ScrollAnimation direction="fadeInUp" duration={1200}>
            <header className="mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bella-queta text-gray-900 mb-6 leading-tight">
                The Strategic Blueprint: The True Cost of the Filipino Dream Home
              </h1>
              <p className="text-xl font-bella-queta text-gray-600 mb-6">
                This article is based on interviews conducted by The Haven&apos;s authors with Engr. John Kelly Josue and Architect Tanya Kriselle S. Chua, who provided the technical and design expertise used throughout this analysis.
              </p>
            </header>
          </ScrollAnimation>

          {/* Story Content */}
          <div className="prose prose-lg max-w-none">
            <ScrollAnimation direction="fadeIn" duration={1200}>
              <p className="text-2xl md:text-3xl leading-relaxed text-gray-700 mb-16 italic font-light text-center max-w-3xl mx-auto">
                The fast-paced routine, accompanied by financial worries of living in Metro Manila, encourages young Filipinos to seek refuge in the promise of the future, away from their existing homes. These scrupulous visions of the future, whether saved on a phone or kept as a constant dream, are much more than just enticing photos. It has saved souls by making people continue to hope.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeIn" duration={800}>
              <p className="mb-12 text-center text-2xl leading-relaxed text-gray-900 font-medium">
                They represent the primary goal in a life full of chaos: controlling one&apos;s narrative.
              </p>
            </ScrollAnimation>

            <p className="mb-6 leading-relaxed text-gray-900" style={{ color: '#000000', textShadow: 'none' }}>
              The Haven traverses how people build their sense of home, revealing that fantasizing about having a dream home is less about its actual size and more about its power to act as a mentally safe space. As Architect Tanya Kriselle S. Chua explains, a house is simply &quot;a structure that shelters people from the elements,&quot; giving basic privacy. In complete contrast, a home is &quot;where people live, grow, and fulfill the human needs that are above mere survival and security. Home is where people find belongingness and self-actualization.&quot;
            </p>

            <p className="mb-6 leading-relaxed text-gray-900" style={{ color: '#000000', textShadow: 'none' }}>
              Engineers and architects today are trying to mitigate the rising costs of land and crowding in the city. With this, people in the housing industry including developers must try to address if their consumers&apos; emotional needs are being statisfied by the walls they continuously create. It is not enough to just plaster money, and hope that it maybe adequate to alleviate distress among different homes. The following stories of three individuals —Elijah, who yearns for silence to escape financial problems; Blair, who tries to find a home in the wrong places; and Lala, who needs privacy to escape societal judgment, show how each construction carries a meaning. As true passion for design, architecture, and engineering starts with understanding the heart and soul of every concrete.
            </p>

            <ScrollAnimation direction="fadeInUp">
            <section className="my-12">
              <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                Silence and Security: Elijah&apos;s Dream Home
              </h2>

              <p className="mb-6 leading-relaxed text-gray-700">
                Engr. John Kelly Josue stresses that his work is guided by the goal of making a home that focuses on &quot;comfort, privacy, and well-being so that even a small space can truly feel like a home.&quot;
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                The main engineering solution to Elijah&apos;s anxiety is noise reduction. Josue specifically suggests using double-glazed windows and wall insulation to &quot;minimize outside noise&quot;. These barriers operate as a psychological protection from the city&apos;s overwhelming noise, beyond their material form.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Additionally, his desire for spotless white couches and clean, modern sinks conveys the need for order and efficiency in his current house. Architect Chua&apos;s ideas on handling small spaces offer a design remedy: useful decorations and furniture that is has the correct sizes. By adding storage that serves multiple functions and choosing sleek, smaller pieces, Elijah&apos;s future place can feel bigger, more organized, and less burdened by the physical and mental chaos he encounters.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Ultimately, Elijah&apos;s dream home must be thoughtfully curated, where every piece of furniture is intentional. It proves Josue&apos;s belief that natural ventilation and lighting are the most often forgotten engineering parts of a home. These elements, the complete opposite of his dark, noisy reality, are the foundation upon which Elijah plans to build his &quot;stable future self.&quot;
              </p>
            </section>

            <section className="my-12">
              <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                The Design of Freedom: Blair&apos;s Reminder of Self
              </h2>

              <p className="mb-6 leading-relaxed text-gray-700">
                The main emotional need for someone like Blair, who wants to escape a past marked by abuse and limited identity, is to create a space that is unquestionably theirs. The home must serve as a constant signal of their independence and strength, rejecting outside approval and past memories of oppression.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Chua tackles this need issue directly when talking hypothetically about a client with a difficult past.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700 italic pl-6 border-l-4 border-orange-400">
                She states that the design must be a &quot;reminder of the struggles that they have conquered.&quot; It must be personally tailored that the space persistently reminds them &quot;how strong they truly are to have made it this far.&quot; More importantly, the home &quot;would not be stuck on what is trendy, on what impresses others.&quot;
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                The design lifts the home beyond a mere physical shelter, transforming it into a sanctuary of freedom. Every design choice is an act of self-preservation, putting the client&apos;s personality and needs before any global trend seen on social media. As Chua states, personalization is key, as it is what &quot;distinguishes an architect from a standard property developer.&quot;
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Josue argues that open layouts allow Gen Z to &quot;plan their homes based on their personality and preferences, since most no longer follow the traditional distribution of a house but adapt it to their lifestyle and work.&quot; For Blair, this ability to change ensures that as their identity grows. When the house has the capacity to be changed, it supports the long-term engineering considerations of modular systems.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Blair&apos;s dream home is, therefore, the true expression of autonomy. It is a space that physically confirms the right to change, grow, and reject the past, making sure the physical environment is always in line with their true, realized self.
              </p>
            </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp">
            <section className="my-12">
              <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                Proximity and Privacy: Lala&apos;s Search for Belonging
              </h2>

              <p className="mb-6 leading-relaxed text-gray-700">
                For Lala, whose personal life requires boundaries due to issues like homophobia and religious family pressure, the dream home functions as a controlled, private fortress. The space must offer both physical safety and liberating relief from external scrutiny, allowing her to live without the need to pretend to be someone she is not.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Chua explains that a client&apos;s main values are reflected in space programming and planning.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                A client who values privacy or is more introverted will naturally choose a plan that manifests in smaller, separate dining and living areas, and larger bedrooms.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                This design choice, the deliberate separation of public and private zones, is a strong act of setting boundaries. It is very different from the popular open-plan designs meant for hosting many guests. For Lala, the home is not designed to entertain or impress; it is built for inner work of the self.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Critically, this need for mental separation is a direct answer to the sensory congestion of highly urbanized cities. The interior design of Lala&apos;s home is clearly meant to &quot;insulate themselves from the chaos of the outside,&quot; viewing the public world as simply a &quot;passing space&quot; that must be endured.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Lala&apos;s choices are also influenced by the movement towards nuclear and single-person households, a design reality Chua has navigated throughout her career. The modern Filipino home, particularly in urban areas, functions as a space for the individual or chosen nuclear family. Consequently, the home&apos;s structure must actively facilitate this major change from the traditional, open, extended family arrangement.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                The dream home for Lala signifies emotional growth. It is an expanse that actively fosters her development and shields her from influences that obstruct it.
              </p>
            </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp">
            <section className="my-12">
              <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                The New Definition of Home
              </h2>

              <p className="mb-6 leading-relaxed text-gray-700">
                The narratives of Elijah, Blair, and Lala clearly unveil a vital truth in the modern housing situation in the Philippines. The real purpose of the dream home is to reclaim personal authority as a response to capitalism and societal collapse. Wealth and opulence may appear to be the definitive solution. On the contrary, having a place that empowers you to seek peace and prosperity, away from the shadows of adversity, is the true success.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                As Engr. Josue notes that while the engineering problems of Metro Manila are dominated by high land prices and crowding, the most practical solution for Gen Z is to &quot;buy a condo unit and renovate it to fit your dream home.&quot; The work of the professional, then, is no longer about building large houses; it&apos;s about carefully designing small, dense spaces for the greatest mental benefits.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Creatives and intellectuals, such as architects and engineers became partners in turning the occupant&apos;s deepest needs into a physical reality. Self-fulfillment is no longer unattainable with turning traditional design principles into environments that bring color to life. For the Filipino generation facing the &quot;Jarring Present,&quot; the home is the culmination of self-worth: a strategic blueprint for surviving the current moment while building a stable, calm future.
              </p>
            </section>
            </ScrollAnimation>
          </div>
        </article>
      </div>
    </div>
  )
}
