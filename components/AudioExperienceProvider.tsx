'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

interface AudioExperienceContextValue {
  audioEnabled: boolean
  promptVisible: boolean
  enableAudio: () => void
  disableAudio: () => void
  dismissPrompt: () => void
}

const AudioExperienceContext = createContext<
  AudioExperienceContextValue | undefined
>(undefined)

export function AudioExperienceProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [promptVisible, setPromptVisible] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Auto-enable audio - no prompt needed
    try {
      window.sessionStorage.setItem('audioConsent', 'granted')
      window.sessionStorage.setItem('audioEnabled', 'true')
    } catch (e) {
      console.error('[AudioExperienceProvider] Failed to save to sessionStorage:', e)
    }
    setAudioEnabled(true)
    setPromptVisible(false)
    setReady(true)
    // Dispatch enable event immediately
    const event = new Event('audio:enable')
    window.dispatchEvent(event)
  }, [])

  const enableAudio = useCallback(() => {
    console.log('[AudioExperienceProvider] Enabling audio')
    try {
      window.sessionStorage.setItem('audioConsent', 'granted')
      window.sessionStorage.setItem('audioEnabled', 'true')
    } catch (e) {
      console.error('[AudioExperienceProvider] Failed to save to sessionStorage:', e)
    }
    setAudioEnabled(true)
    setPromptVisible(false)
    const event = new Event('audio:enable')
    window.dispatchEvent(event)
    console.log('[AudioExperienceProvider] Dispatched audio:enable event')
  }, [])

  const disableAudio = useCallback(() => {
    console.log('[AudioExperienceProvider] Disabling audio')
    try {
      window.sessionStorage.setItem('audioConsent', 'denied')
      window.sessionStorage.setItem('audioEnabled', 'false')
    } catch (e) {
      console.error('[AudioExperienceProvider] Failed to save to sessionStorage:', e)
    }
    setAudioEnabled(false)
    const event = new Event('audio:disable')
    window.dispatchEvent(event)
    console.log('[AudioExperienceProvider] Dispatched audio:disable event')
  }, [])

  const dismissPrompt = useCallback(() => {
    setPromptVisible(false)
    try {
      window.sessionStorage.setItem('audioConsent', 'dismissed')
    } catch {}
  }, [])

  const value = useMemo(
    () => ({
      audioEnabled,
      promptVisible,
      enableAudio,
      disableAudio,
      dismissPrompt,
    }),
    [audioEnabled, promptVisible, enableAudio, disableAudio, dismissPrompt]
  )

  if (!ready) {
    return null
  }

  return (
    <AudioExperienceContext.Provider value={value}>
      {children}
    </AudioExperienceContext.Provider>
  )
}

export function useAudioExperience() {
  const context = useContext(AudioExperienceContext)
  if (!context) {
    throw new Error(
      'useAudioExperience must be used within an AudioExperienceProvider'
    )
  }
  return context
}

