import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Story - The Haven',
  description: 'An immersive storytelling experience.',
}

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="story-page-isolated">
      {children}
    </div>
  )
}

