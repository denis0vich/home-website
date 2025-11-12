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
    try {
      const storedConsent = window.sessionStorage.getItem('audioConsent')
      const legacyFlag = window.sessionStorage.getItem('audioEnabled')
      if (storedConsent === 'granted' || legacyFlag === 'true') {
        setAudioEnabled(true)
        setPromptVisible(false)
      } else {
        setPromptVisible(true)
      }
    } catch {
      setPromptVisible(true)
    } finally {
      setReady(true)
    }
  }, [])

  const enableAudio = useCallback(() => {
    try {
      window.sessionStorage.setItem('audioConsent', 'granted')
      window.sessionStorage.setItem('audioEnabled', 'true')
    } catch {}
    setAudioEnabled(true)
    setPromptVisible(false)
    window.dispatchEvent(new Event('audio:enable'))
  }, [])

  const disableAudio = useCallback(() => {
    try {
      window.sessionStorage.setItem('audioConsent', 'denied')
      window.sessionStorage.setItem('audioEnabled', 'false')
    } catch {}
    setAudioEnabled(false)
    window.dispatchEvent(new Event('audio:disable'))
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

