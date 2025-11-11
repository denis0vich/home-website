'use client'

import { useEffect, useState } from 'react'

export default function AudioConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Respect prior consent this session
    const enabled = sessionStorage.getItem('audioEnabled') === 'true'
    if (enabled) {
      window.dispatchEvent(new CustomEvent('audio:enable'))
    }
    setVisible(!enabled)
  }, [])

  const enableAudio = () => {
    try {
      sessionStorage.setItem('audioEnabled', 'true')
    } catch {}
    // Broadcast to all StoryAudio instances
    window.dispatchEvent(new CustomEvent('audio:enable'))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <button
      onClick={enableAudio}
      className="fixed bottom-6 right-6 z-[60] rounded-full bg-black/80 text-white px-4 py-2 text-sm backdrop-blur hover:bg-black transition-colors"
      aria-label="Enable page sounds"
    >
      Enable sound
    </button>
  )
}


