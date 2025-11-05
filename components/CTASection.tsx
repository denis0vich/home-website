import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white">Ready to Explore?</h2>
        <p className="mt-4 text-lg text-gray-300">
          Take our quiz to discover what your dream home says about you, or join our community forum.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/entertainment"
            className="inline-block rounded-md bg-white px-6 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Take the Quiz
          </Link>
          <Link
            href="/contact"
            className="inline-block rounded-md border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-white hover:text-gray-900"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

