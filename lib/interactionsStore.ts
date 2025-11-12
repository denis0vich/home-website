'use server'

import { promises as fs } from 'fs'
import path from 'path'
import { randomUUID } from 'crypto'

export interface ForumPost {
  id: string
  name: string
  message: string
  createdAt: string
}

export interface QuizResponse {
  id: string
  colorPalette: string | null
  guess: string
  createdAt: string
}

export interface InteractionData {
  forumPosts: ForumPost[]
  quizResponses: QuizResponse[]
}

const DATA_DIR = path.join(process.cwd(), 'data')
const DATA_FILE = path.join(DATA_DIR, 'interactions.json')

const DEFAULT_DATA: InteractionData = {
  forumPosts: [],
  quizResponses: [],
}

async function ensureStore() {
  await fs.mkdir(DATA_DIR, { recursive: true })
  try {
    await fs.access(DATA_FILE)
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify(DEFAULT_DATA, null, 2), 'utf8')
  }
}

function sanitizeForumPosts(list: unknown[]): ForumPost[] {
  if (!Array.isArray(list)) return []
  return list
    .map((item) => {
      if (!item || typeof item !== 'object') return null
      const raw = item as Partial<ForumPost>
      const message = typeof raw.message === 'string' ? raw.message.trim() : ''
      if (!message) return null
      const name = typeof raw.name === 'string' && raw.name.trim() ? raw.name.trim() : 'Anonymous'
      const createdAt =
        typeof raw.createdAt === 'string' && !Number.isNaN(new Date(raw.createdAt).getTime())
          ? new Date(raw.createdAt).toISOString()
          : new Date().toISOString()
      const id = typeof raw.id === 'string' && raw.id.trim() ? raw.id : randomUUID()
      return {
        id,
        name: name.slice(0, 80),
        message: message.slice(0, 800),
        createdAt,
      }
    })
    .filter(Boolean) as ForumPost[]
}

function sanitizeQuizResponses(list: unknown[]): QuizResponse[] {
  if (!Array.isArray(list)) return []
  return list
    .map((item) => {
      if (!item || typeof item !== 'object') return null
      const raw = item as Partial<QuizResponse>
      const guess =
        typeof raw.guess === 'string' && raw.guess.trim() ? raw.guess.trim().slice(0, 240) : ''
      const colorPalette =
        typeof raw.colorPalette === 'string' && raw.colorPalette.trim()
          ? raw.colorPalette.trim().slice(0, 120)
          : null
      const createdAt =
        typeof raw.createdAt === 'string' && !Number.isNaN(new Date(raw.createdAt).getTime())
          ? new Date(raw.createdAt).toISOString()
          : new Date().toISOString()
      const id = typeof raw.id === 'string' && raw.id.trim() ? raw.id : randomUUID()
      return {
        id,
        colorPalette,
        guess,
        createdAt,
      }
    })
    .filter(Boolean) as QuizResponse[]
}

export async function readInteractionData(): Promise<InteractionData> {
  await ensureStore()
  try {
    const file = await fs.readFile(DATA_FILE, 'utf8')
    const parsed = JSON.parse(file) as Partial<InteractionData>
    const forumPosts = sanitizeForumPosts(parsed.forumPosts ?? [])
    const quizResponses = sanitizeQuizResponses(parsed.quizResponses ?? [])

    const rawForumLen = Array.isArray(parsed.forumPosts) ? parsed.forumPosts.length : 0
    const rawQuizLen = Array.isArray(parsed.quizResponses) ? parsed.quizResponses.length : 0
    if (forumPosts.length !== rawForumLen || quizResponses.length !== rawQuizLen) {
      await fs.writeFile(
        DATA_FILE,
        JSON.stringify({ forumPosts, quizResponses }, null, 2),
        'utf8'
      )
    }
    return { forumPosts, quizResponses }
  } catch {
    return { ...DEFAULT_DATA }
  }
}

export async function writeInteractionData(data: InteractionData) {
  await ensureStore()
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf8')
}

export async function createForumPost(input: { name?: string; message: string }): Promise<ForumPost> {
  const name = input.name?.trim() || 'Anonymous'
  const message = input.message.trim()
  return {
    id: randomUUID(),
    name: name.slice(0, 80),
    message: message.slice(0, 800),
    createdAt: new Date().toISOString(),
  }
}

export async function createQuizResponse(input: {
  colorPalette?: string | null
  guess?: string
}): Promise<QuizResponse> {
  return {
    id: randomUUID(),
    colorPalette: input.colorPalette?.trim()?.slice(0, 120) ?? null,
    guess: input.guess?.trim()?.slice(0, 240) ?? '',
    createdAt: new Date().toISOString(),
  }
}


