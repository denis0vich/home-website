'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function ArchitectEngineerPage() {
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
            <h1 className="text-5xl md:text-6xl font-bella-queta text-gray-900 mb-4">
              The Strategic Blueprint: The True Cost of the Filipino Dream Home
            </h1>
            <p className="text-lg font-bella-queta text-gray-600 mb-6">
              This article is based on interviews conducted by The Haven's authors with Engr. John Kelly Josue and Architect Tanya Kriselle S. Chua, who provided the technical and design expertise used throughout this analysis. This content aligns with the production thesis "Generation Z's Conceptualization of the 'Dream Home'" by Garcia and Zambrano (De La Salle University - Manila, 2025).
            </p>
          </header>

          {/* Story Content */}
          <div className="prose prose-lg max-w-none font-bella-queta">
            <ScrollAnimation direction="fadeIn" delay={200}>
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                The fast-paced routine, accompanied by financial worries of living in Metro Manila, encourages young Filipinos to seek refuge in the promise of the future, away from their existing homes. These scrupulous visions of the future, whether saved on a phone or kept as a constant dream, are much more than just enticing photos. It has saved souls by making people continue to hope.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={300}>
              <p className="mb-6 leading-relaxed text-gray-700 font-medium">
                They represent the primary goal in a life full of chaos: controlling one's narrative.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={400}>
              <p className="mb-6 leading-relaxed text-gray-700">
                The Haven traverses how people build their sense of home, revealing that fantasizing about having a dream home is less about its actual size and more about its power to act as a mentally safe space. As Architect Tanya Kriselle S. Chua explains, a house is simply "a structure that shelters people from the elements," giving basic privacy. In complete contrast, a home is "where people live, grow, and fulfill the human needs that are above mere survival and security. Home is where people find belongingness and self-actualization."
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={500}>
              <p className="mb-6 leading-relaxed text-gray-700">
                Engineers and architects today are trying to mitigate the rising costs of land and crowding in the city. With this, people in the housing industry including developers must try to address if their consumers' emotional needs are being satisfied by the walls they continuously create. It is not enough to just plaster money, and hope that it maybe adequate to alleviate distress among different homes. The following stories of three individuals —Elijah, who yearns for silence to escape financial problems; Blair, who tries to find a home in the wrong places; and Lala, who needs privacy to escape societal judgment, show how each construction carries a meaning. As true passion for design, architecture, and engineering starts with understanding the heart and soul of every concrete.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={600}>
            <section className="my-12">
              <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                Silence and Security: Elijah's Dream Home
              </h2>

              <p className="mb-6 leading-relaxed text-gray-700">
                Engr. John Kelly Josue stresses that his work is guided by the goal of making a home that focuses on "comfort, privacy, and well-being so that even a small space can truly feel like a home."
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                The main engineering solution to Elijah's anxiety is noise reduction. Josue specifically suggests using double-glazed windows and wall insulation to "minimize outside noise". These barriers operate as a psychological protection from the city's overwhelming noise, beyond their material form.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Additionally, his desire for spotless white couches and clean, modern sinks conveys the need for order and efficiency in his current house. Architect Chua's ideas on handling small spaces offer a design remedy: useful decorations and furniture that is has the correct sizes. By adding storage that serves multiple functions and choosing sleek, smaller pieces, Elijah's future place can feel bigger, more organized, and less burdened by the physical and mental chaos he encounters.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Ultimately, Elijah's dream home must be thoughtfully curated, where every piece of furniture is intentional. It proves Josue's belief that natural ventilation and lighting are the most often forgotten engineering parts of a home. These elements, the complete opposite of his dark, noisy reality, are the foundation upon which Elijah plans to build his "stable future self."
              </p>
            </section>

            <section className="my-12">
              <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                The Design of Freedom: Blair's Reminder of Self
              </h2>

              <p className="mb-6 leading-relaxed text-gray-700">
                The main emotional need for someone like Blair, who wants to escape a past marked by abuse and limited identity, is to create a space that is unquestionably theirs. The home must serve as a constant signal of their independence and strength, rejecting outside approval and past memories of oppression.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Chua tackles this need issue directly when talking hypothetically about a client with a difficult past.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700 italic pl-6 border-l-4 border-orange-400">
                She states that the design must be a "reminder of the struggles that they have conquered." It must be personally tailored that the space persistently reminds them "how strong they truly are to have made it this far." More importantly, the home "would not be stuck on what is trendy, on what impresses others."
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                The design lifts the home beyond a mere physical shelter, transforming it into a sanctuary of freedom. Every design choice is an act of self-preservation, putting the client's personality and needs before any global trend seen on social media. As Chua states, personalization is key, as it is what "distinguishes an architect from a standard property developer."
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Josue argues that open layouts allow Gen Z to "plan their homes based on their personality and preferences, since most no longer follow the traditional distribution of a house but adapt it to their lifestyle and work." For Blair, this ability to change ensures that as their identity grows. When the house has the capacity to be changed, it supports the long-term engineering considerations of modular systems.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Blair's dream home is, therefore, the true expression of autonomy. It is a space that physically confirms the right to change, grow, and reject the past, making sure the physical environment is always in line with their true, realized self.
              </p>
            </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={700}>
            <section className="my-12">
              <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                Proximity and Privacy: Lala's Search for Belonging
              </h2>

              <p className="mb-6 leading-relaxed text-gray-700">
                For Lala, whose personal life requires boundaries due to issues like homophobia and religious family pressure, the dream home functions as a controlled, private fortress. The space must offer both physical safety and liberating relief from external scrutiny, allowing her to live without the need to pretend to be someone she is not.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Chua explains that a client's main values are reflected in space programming and planning.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                A client who values privacy or is more introverted will naturally choose a plan that manifests in smaller, separate dining and living areas, and larger bedrooms.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                This design choice, the deliberate separation of public and private zones, is a strong act of setting boundaries. It is very different from the popular open-plan designs meant for hosting many guests. For Lala, the home is not designed to entertain or impress; it is built for inner work of the self.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Critically, this need for mental separation is a direct answer to the sensory congestion of highly urbanized cities. The interior design of Lala's home is clearly meant to "insulate themselves from the chaos of the outside," viewing the public world as simply a "passing space" that must be endured.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Lala's choices are also influenced by the movement towards nuclear and single-person households, a design reality Chua has navigated throughout her career. The modern Filipino home, particularly in urban areas, functions as a space for the individual or chosen nuclear family. Consequently, the home's structure must actively facilitate this major change from the traditional, open, extended family arrangement.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                The dream home for Lala signifies emotional growth. It is an expanse that actively fosters her development and shields her from influences that obstruct it.
              </p>
            </section>
            </ScrollAnimation>

            <ScrollAnimation direction="fadeInUp" delay={800}>
            <section className="my-12">
              <h2 className="text-3xl font-bella-queta font-bold text-gray-900 mb-6">
                The New Definition of Home
              </h2>

              <p className="mb-6 leading-relaxed text-gray-700">
                The narratives of Elijah, Blair, and Lala clearly unveil a vital truth in the modern housing situation in the Philippines. The real purpose of the dream home is to reclaim personal authority as a response to capitalism and societal collapse. Wealth and opulence may appear to be the definitive solution. On the contrary, having a place that empowers you to seek peace and prosperity, away from the shadows of adversity, is the true success.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                As Engr. Josue notes that while the engineering problems of Metro Manila are dominated by high land prices and crowding, the most practical solution for Gen Z is to "buy a condo unit and renovate it to fit your dream home." The work of the professional, then, is no longer about building large houses; it's about carefully designing small, dense spaces for the greatest mental benefits.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                Creatives and intellectuals, such as architects and engineers became partners in turning the occupant's deepest needs into a physical reality. Self-fulfillment is no longer unattainable with turning traditional design principles into environments that bring color to life.                 For the Filipino generation facing the "Jarring Present," the home is the culmination of self-worth: a strategic blueprint for surviving the current moment while building a stable, calm future.
              </p>
            </section>
            </ScrollAnimation>
          </div>
        </article>
      </div>
    </div>
  )
}

