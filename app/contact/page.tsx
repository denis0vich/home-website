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
    <div className="relative min-h-screen overflow-x-hidden bg-[#050b22] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_10%_-5%,rgba(137,49,114,0.45),rgba(5,11,34,0.92))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_110%_at_90%_0%,rgba(33,56,133,0.5),rgba(5,11,34,0.95))]" />

      <Navigation />

      <main className="relative z-10 mx-auto max-w-4xl px-6 pt-40 pb-24">
        <header className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-white/55">
            Say hello
          </p>
          <h1 className="mb-5 font-bella-queta text-5xl md:text-6xl">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/75">
            Reach out if you’d like to collaborate, feature the project, or share how these stories
            resonate with your own dream home.
          </p>
        </header>

        <div className="mt-14 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-[0_30px_70px_rgba(5,11,34,0.4)] backdrop-blur">
            <h2 className="text-sm uppercase tracking-[0.35em] text-white/55">Message Us</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6 text-sm">
              <div className="space-y-2">
                <label htmlFor="name" className="font-bella-queta text-white/80">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, name: event.target.value }))
                  }
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/60"
                  placeholder="What should we call you?"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-bella-queta text-white/80">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, email: event.target.value }))
                  }
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/60"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-bella-queta text-white/80">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, message: event.target.value }))
                  }
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/60"
                  placeholder="Share your thoughts here…"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full border border-white/40 bg-white/20 px-6 py-3 text-xs uppercase tracking-[0.4em] text-white transition hover:bg-white/30"
              >
                Send message
              </button>

              {submitted && (
                <p className="rounded-2xl bg-white/15 px-4 py-3 text-center text-xs uppercase tracking-[0.35em] text-white/70">
                  Message received. We’ll write back soon.
                </p>
              )}
            </form>
          </section>

          <aside className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/8 p-8 shadow-[0_28px_60px_rgba(5,11,34,0.42)] backdrop-blur">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/55">Email</p>
              <a
                href="mailto:kirsten_garcia@dlsu.edu.ph"
                className="mt-3 block font-bella-queta text-lg text-white transition hover:text-white/80"
              >
                kirsten_garcia@dlsu.edu.ph
              </a>
              <a
                href="mailto:anne_zambrano@dlsu.edu.ph"
                className="mt-2 block font-bella-queta text-lg text-white transition hover:text-white/80"
              >
                anne_zambrano@dlsu.edu.ph
              </a>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/12 p-6 text-sm text-white/75">
              <p className="text-xs uppercase tracking-[0.4em] text-white/55">Social</p>
              <p className="mt-3">
                We’re preparing to launch social accounts alongside the magazine release. Stay tuned.
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/12 p-6 text-sm text-white/75">
              <p className="text-xs uppercase tracking-[0.4em] text-white/55">Disclaimer</p>
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

