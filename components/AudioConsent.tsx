'use client'

import { useMemo } from 'react'
import { useAudioExperience } from './AudioExperienceProvider'

export default function AudioConsent() {
  const {
    audioEnabled,
    promptVisible,
    enableAudio,
    disableAudio,
    dismissPrompt,
  } = useAudioExperience()

  const cueSummary = useMemo(
    () =>
      'Cold piano chords · Club pulse · Shattering glass · Melancholic ballad',
    []
  )

  if (promptVisible) {
    return (
      <div className="fixed bottom-6 right-6 z-[60] w-[320px] max-w-[90vw] rounded-3xl border border-white/25 bg-[#050b22]/90 p-6 text-white shadow-[0_18px_60px_rgba(5,11,34,0.65)] backdrop-blur">
        <p className="font-bella-queta text-lg tracking-[0.12em]">
          Enable immersive sound?
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/75">
          Scroll with Blair to hear every cue from the piano’s first chill to
          the club beat, shattering glass, and final Filipino ballad.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            onClick={enableAudio}
            className="flex-1 rounded-full bg-white px-4 py-2 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#050b22] shadow-md transition hover:bg-white/90"
            aria-label="Enable immersive sound"
          >
            Enable Sound
          </button>
          <button
            onClick={dismissPrompt}
            className="flex-1 rounded-full border border-white/30 px-4 py-2 text-center text-sm uppercase tracking-[0.18em] text-white/70 transition hover:bg-white/10"
            aria-label="Dismiss sound prompt"
          >
            Maybe Later
          </button>
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/50">
          {cueSummary}
        </p>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-2 text-white">
      <button
        onClick={audioEnabled ? disableAudio : enableAudio}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm uppercase tracking-[0.18em] shadow-lg backdrop-blur transition 
          ${
            audioEnabled
              ? 'border-white/20 bg-white/90 text-[#050b22] hover:bg-white'
              : 'border-white/30 bg-black/65 text-white hover:bg-black/80'
          }`}
        aria-label={audioEnabled ? 'Disable immersive sound' : 'Enable immersive sound'}
      >
        {audioEnabled ? 'Sound On · Tap to Mute' : 'Sound Off · Tap to Enable'}
      </button>
      {!audioEnabled && (
        <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.4em] text-white/60 backdrop-blur">
          {cueSummary}
        </span>
      )}
    </div>
  )
}
