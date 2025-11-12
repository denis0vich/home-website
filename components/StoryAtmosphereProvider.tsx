'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from 'react'

type AtmosphereState = {
  sectionId: string
  intensity: number
}

type StoryAtmosphereContextValue = AtmosphereState & {
  updateSection: (sectionId: string, intensity?: number) => void
}

const StoryAtmosphereContext =
  createContext<StoryAtmosphereContextValue | null>(null)

interface StoryAtmosphereProviderProps {
  children: ReactNode
  initialSectionId?: string
}

export function StoryAtmosphereProvider({
  children,
  initialSectionId = 'intro',
}: StoryAtmosphereProviderProps) {
  const [state, setState] = useState<AtmosphereState>({
    sectionId: initialSectionId,
    intensity: 1,
  })

  const updateSection = useCallback((sectionId: string, intensity = 1) => {
    setState((prev) => {
      if (prev.sectionId === sectionId && intensity <= prev.intensity) {
        return prev
      }
      return { sectionId, intensity }
    })
  }, [])

  const value = useMemo(
    () => ({
      sectionId: state.sectionId,
      intensity: state.intensity,
      updateSection,
    }),
    [state, updateSection]
  )

  return (
    <StoryAtmosphereContext.Provider value={value}>
      {children}
    </StoryAtmosphereContext.Provider>
  )
}

export function useStoryAtmosphere() {
  const context = useContext(StoryAtmosphereContext)
  if (!context) {
    throw new Error(
      'useStoryAtmosphere must be used within a StoryAtmosphereProvider'
    )
  }
  return context
}

export function useOptionalStoryAtmosphere() {
  return useContext(StoryAtmosphereContext)
}

