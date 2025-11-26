'use client'

import Navigation from '@/components/Navigation'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2400)
  }

  return (
    <div className="relative min-h-screen bg-[#faf8f5] text-gray-800">
      <Navigation />

      <main className="relative z-10 mx-auto max-w-4xl px-6 pt-40 pb-24">
        <header className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-gray-600">
            Say hello
          </p>
          <h1 className="mb-5 font-bella-queta text-5xl md:text-6xl text-gray-800">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Reach out if you'd like to collaborate, feature the project, or share how these stories
            resonate with your own dream home.
          </p>
        </header>

        <div className="mt-14 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="text-sm uppercase tracking-[0.35em] text-gray-600">Message Us</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6 text-sm">
              <div className="space-y-2">
                <label htmlFor="name" className="font-bella-queta text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, name: event.target.value }))
                  }
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#BE8CC1]"
                  placeholder="What should we call you?"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-bella-queta text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, email: event.target.value }))
                  }
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#BE8CC1]"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-bella-queta text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, message: event.target.value }))
                  }
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#BE8CC1]"
                  placeholder="Share your thoughts here…"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#BE8CC1] px-6 py-3 text-xs uppercase tracking-[0.4em] text-white transition hover:bg-[#a87bac]"
              >
                Send message
              </button>

              {submitted && (
                <p className="rounded-2xl bg-pink-50 px-4 py-3 text-center text-xs uppercase tracking-[0.35em] text-gray-700">
                  Message received. We'll write back soon.
                </p>
              )}
            </form>
          </section>

          <aside className="flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-600">Email</p>
              <a
                href="mailto:kirsten_garcia@dlsu.edu.ph"
                className="mt-3 block font-bella-queta text-lg text-gray-800 transition hover:text-[#BE8CC1]"
              >
                kirsten_garcia@dlsu.edu.ph
              </a>
              <a
                href="mailto:anne_zambrano@dlsu.edu.ph"
                className="mt-2 block font-bella-queta text-lg text-gray-800 transition hover:text-[#BE8CC1]"
              >
                anne_zambrano@dlsu.edu.ph
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/60 p-6 text-sm text-gray-700">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-600">Social</p>
              <p className="mt-3">
                We're preparing to launch social accounts alongside the magazine release. Stay tuned.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/60 p-6 text-sm text-gray-700">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-600">Disclaimer</p>
              <p className="mt-3 leading-relaxed">
                The Haven is a production thesis by Communication Arts students from De La Salle
                University—Manila. Stories, interviews, and visuals stem from original research and
                are published for educational storytelling.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

