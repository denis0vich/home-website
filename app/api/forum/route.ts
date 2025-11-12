import { NextResponse } from 'next/server'
import {
  createForumPost,
  readInteractionData,
  writeInteractionData,
} from '@/lib/interactionsStore'

export const dynamic = 'force-dynamic'

export async function GET() {
  const data = await readInteractionData()
  return NextResponse.json({ posts: data.forumPosts })
}

export async function POST(request: Request) {
  const data = await readInteractionData()
  const payload = await request.json().catch(() => ({}))

  const message = typeof payload.message === 'string' ? payload.message.trim() : ''
  if (!message) {
    return NextResponse.json({ error: 'Message is required.' }, { status: 400 })
  }

  const post = await createForumPost({
    name: typeof payload.name === 'string' ? payload.name : 'Anonymous',
    message,
  })

  const nextPosts = [post, ...data.forumPosts].slice(0, 100)
  await writeInteractionData({
    ...data,
    forumPosts: nextPosts,
  })

  return NextResponse.json(post, { status: 201 })
}


