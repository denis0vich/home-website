import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stories - The Haven',
  description: 'Explore immersive stories about home and belonging.',
}

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="stories-canvas">
      {children}
    </div>
  )
}

