'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import { useEffect, useState } from 'react'

export default function ForumPage() {
  const [forumPosts, setForumPosts] = useState<
    { id: string; name: string; message: string; createdAt: string }[]
  >([])
  const [forumForm, setForumForm] = useState({ name: '', message: '' })
  const [isForumSubmitting, setIsForumSubmitting] = useState(false)
  const [forumMessage, setForumMessage] = useState<string | null>(null)
  const [forumError, setForumError] = useState<string | null>(null)
  const [isForumLoading, setIsForumLoading] = useState(true)

  const formatTimestamp = (iso: string) => {
    if (!iso) {
      return 'Just now'
    }
    const date = new Date(iso)
    if (Number.isNaN(date.getTime())) {
      return 'Just now'
    }
    try {
      return new Intl.DateTimeFormat(undefined, {
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(date)
    } catch {
      return date.toLocaleString()
    }
  }

  const handleForumSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!forumForm.message.trim()) {
      setForumError('Please share a thought before posting.')
      return
    }

    setIsForumSubmitting(true)
    setForumError(null)
    setForumMessage(null)

    try {
      const response = await fetch('/api/forum', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: forumForm.name,
          message: forumForm.message,
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data?.error ?? 'Unable to post right now.')
      }

      const post = await response.json()
      setForumPosts((prev) => [post, ...prev])
      setForumForm({ name: '', message: '' })
      setForumMessage('Thanks for adding your voice to the community.')
    } catch (error) {
      setForumError(
        error instanceof Error ? error.message : 'Unable to post right now. Please try again later.'
      )
    } finally {
      setIsForumSubmitting(false)
    }
  }

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const forumRes = await fetch('/api/forum', { cache: 'no-store' })
        const forumData = forumRes.ok ? await forumRes.json() : null

        if (cancelled) return

        if (forumRes.ok && forumData?.posts) {
          setForumPosts(Array.isArray(forumData.posts) ? forumData.posts : [])
        } else {
          setForumError('Unable to load community posts right now.')
        }
      } catch {
        if (!cancelled) {
          setForumError((prev) => prev ?? 'Unable to load community posts right now.')
        }
      } finally {
        if (!cancelled) {
          setIsForumLoading(false)
        }
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#faf8f5] text-gray-800">
      <Navigation />

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-32">
        <ScrollAnimation direction="fadeIn" duration={500}>
          <h1 className="mb-4 text-center font-bella-queta text-5xl text-gray-800 md:text-6xl">
            Community Forum
          </h1>
        </ScrollAnimation>

        <ScrollAnimation direction="fadeIn" duration={500}>
          <p className="mx-auto mb-16 max-w-3xl text-center font-bella-queta text-xl text-gray-700">
            Share your story with the community—every note helps someone else feel less alone. Connect
            through shared struggles, dream home blueprints, and cost-saving strategies for urban living.
          </p>
        </ScrollAnimation>

        <ScrollAnimation direction="fadeIn" duration={500}>
          <section className="mb-20">
            <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white/80 p-10 shadow-sm backdrop-blur-sm">
              <form onSubmit={handleForumSubmit} className="space-y-6">
                <div className="space-y-4">
                  <p className="text-center font-bella-queta text-lg text-gray-800">
                    Choose a question to answer:
                  </p>
                  <div className="space-y-3 rounded-2xl border border-gray-200 bg-white/60 p-4">
                    <p className="font-bella-queta text-gray-700">
                      <span className="font-semibold text-gray-800">1.</span> What spaces, whether physical or online, make you feel like you have control over your environment?
                    </p>
                    <p className="font-bella-queta text-gray-700">
                      <span className="font-semibold text-gray-800">2.</span> What does your home give you that no other place can?
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="md:col-span-1">
                    <label className="mb-2 block text-sm font-bella-queta text-gray-700">
                      Your name (optional)
                    </label>
                    <input
                      type="text"
                      value={forumForm.name}
                      onChange={(event) => {
                        setForumForm((prev) => ({ ...prev, name: event.target.value }))
                        setForumMessage(null)
                        setForumError(null)
                      }}
                      placeholder="Anonymous"
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-bella-queta text-gray-800 placeholder-gray-400 focus:border-[#BE8CC1] focus:outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-bella-queta text-gray-700">
                      Share your thoughts
                    </label>
                    <textarea
                      value={forumForm.message}
                      onChange={(event) => {
                        setForumForm((prev) => ({ ...prev, message: event.target.value }))
                        setForumMessage(null)
                        setForumError(null)
                      }}
                      rows={4}
                      maxLength={800}
                      placeholder="Answer either question above. Share your experiences, thoughts, or reflections..."
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-bella-queta text-gray-800 placeholder-gray-400 focus:border-[#BE8CC1] focus:outline-none"
                    />
                  </div>
                </div>
                {forumError && (
                  <p className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm font-bella-queta text-red-700">
                    {forumError}
                  </p>
                )}
                {forumMessage && (
                  <p className="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm font-bella-queta text-emerald-700">
                    {forumMessage}
                  </p>
                )}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isForumSubmitting}
                    className="inline-flex items-center gap-2 rounded-full bg-[#BE8CC1] px-6 py-3 text-sm font-bella-queta font-bold uppercase tracking-[0.3em] text-white transition hover:bg-[#a87bac] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isForumSubmitting ? 'Posting…' : 'Share'}
                  </button>
                </div>
              </form>

              <div className="mt-10 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-bella-queta text-xl text-gray-800">Latest Voices</h3>
                {isForumLoading ? (
                  <p className="text-sm font-bella-queta text-gray-600">Loading conversations…</p>
                ) : forumPosts.length === 0 ? (
                  <p className="text-sm font-bella-queta text-gray-600">
                    No entries yet—be the first to sketch what home feels like.
                  </p>
                ) : (
                  <ul className="space-y-4">
                    {forumPosts.map((post, idx) => (
                      <li
                        key={`${post.id ?? 'post'}-${idx}`}
                        className="rounded-2xl border border-gray-200 bg-white/60 p-5 shadow-sm backdrop-blur-sm"
                      >
                        <div className="mb-2 flex items-center justify-between gap-4">
                          <p className="font-bella-queta font-semibold text-gray-800">
                            {post.name || 'Anonymous'}
                          </p>
                          <p className="text-xs font-bella-queta uppercase tracking-[0.25em] text-gray-500">
                            {formatTimestamp(post.createdAt)}
                          </p>
                        </div>
                        <p className="font-bella-queta leading-relaxed text-gray-700">{post.message}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>
    </div>
  )
}

