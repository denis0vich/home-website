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
    <div className="relative min-h-screen overflow-x-hidden bg-[#050b22] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(130%_110%_at_0%_-10%,rgba(137,49,114,0.35),rgba(5,11,34,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_-5%,rgba(33,56,133,0.32),rgba(5,11,34,0.95))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(236,223,210,0.12)_0%,rgba(8,24,73,0.65)_55%,rgba(5,11,34,0.9)_100%)] mix-blend-soft-light opacity-90" />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

