import { NextResponse } from 'next/server'
import {
  createQuizResponse,
  readInteractionData,
  writeInteractionData,
} from '@/lib/interactionsStore'

export const dynamic = 'force-dynamic'

export async function GET() {
  const data = await readInteractionData()

  const tally = data.quizResponses.reduce<Record<string, number>>((acc, response) => {
    if (!response.colorPalette) return acc
    acc[response.colorPalette] = (acc[response.colorPalette] ?? 0) + 1
    return acc
  }, {})

  return NextResponse.json({
    responses: data.quizResponses,
    paletteTally: tally,
  })
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}))

  const response = await createQuizResponse({
    colorPalette:
      typeof payload.colorPalette === 'string' && payload.colorPalette.trim()
        ? payload.colorPalette
        : null,
    guess: typeof payload.guess === 'string' ? payload.guess : '',
  })

  const data = await readInteractionData()
  const nextResponses = [response, ...data.quizResponses].slice(0, 200)
  await writeInteractionData({
    ...data,
    quizResponses: nextResponses,
  })

  return NextResponse.json(response, { status: 201 })
}


