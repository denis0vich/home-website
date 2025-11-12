import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import {
  StoryAtmosphereProvider,
  useStoryAtmosphere,
} from '@/components/StoryAtmosphereProvider'

export const metadata: Metadata = {
  title: 'Story - The Haven',
  description: 'An immersive storytelling experience.',
}

type AtmosphereConfig = {
  backgroundLayers: string[]
  auroraColors: [string, string, string]
  auroraOpacity: number
  auroraScale: number
  glowColor: string
  glowOpacity: number
  beamColor: string
  beamOpacity: number
  beamTilt: number
  beamWidth: number
  beamOffset: number
  beamFade: number
  vignetteColor: string
  vignetteOpacity: number
  vignetteFeather: number
  noiseOpacity: number
}

const DEFAULT_ATMOSPHERE: AtmosphereConfig = {
  backgroundLayers: [
    'radial-gradient(130% 110% at 0% -10%, rgba(137,49,114,0.35), rgba(5,11,34,0.92))',
    'radial-gradient(120% 120% at 100% -5%, rgba(33,56,133,0.32), rgba(5,11,34,0.95))',
    'linear-gradient(180deg, rgba(236,223,210,0.12) 0%, rgba(8,24,73,0.65) 55%, rgba(5,11,34,0.9) 100%)',
  ],
  auroraColors: [
    'rgba(236,223,210,0.48)',
    'rgba(137,49,114,0.42)',
    'rgba(33,56,133,0.4)',
  ],
  auroraOpacity: 0.65,
  auroraScale: 1.18,
  glowColor: 'rgba(236,223,210,0.28)',
  glowOpacity: 0.32,
  beamColor: 'rgba(236,223,210,0.22)',
  beamOpacity: 0.18,
  beamTilt: -12,
  beamWidth: 34,
  beamOffset: 0,
  beamFade: 0.32,
  vignetteColor: 'rgba(5,11,34,0.85)',
  vignetteOpacity: 0.58,
  vignetteFeather: 0.66,
  noiseOpacity: 0.1,
}

const ATMOSPHERE_PRESETS: Record<string, Partial<AtmosphereConfig>> = {
  default: {},

  // Blair – The Architecture of Moving
  'blair-opening': {
    auroraColors: [
      'rgba(236,223,210,0.68)',
      'rgba(137,49,114,0.5)',
      'rgba(33,56,133,0.55)',
    ],
    auroraOpacity: 0.8,
    beamOpacity: 0.22,
    glowOpacity: 0.38,
  },
  'blair-school': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 0% -10%, rgba(255,158,69,0.35), rgba(25,0,30,0.92))',
      'radial-gradient(120% 120% at 100% -5%, rgba(255,205,128,0.28), rgba(5,11,34,0.95))',
      'linear-gradient(180deg, rgba(255,205,128,0.12) 0%, rgba(8,24,73,0.7) 55%, rgba(20,8,35,0.92) 100%)',
    ],
    auroraColors: [
      'rgba(255,158,69,0.6)',
      'rgba(255,205,128,0.45)',
      'rgba(255,224,178,0.35)',
    ],
    glowColor: 'rgba(255,205,128,0.36)',
    glowOpacity: 0.42,
    beamColor: 'rgba(255,224,178,0.32)',
    beamOpacity: 0.38,
    beamTilt: -18,
  },
  'blair-mansion': {
    auroraColors: [
      'rgba(95,52,117,0.68)',
      'rgba(204,224,255,0.45)',
      'rgba(236,223,210,0.35)',
    ],
    glowColor: 'rgba(204,224,255,0.42)',
    glowOpacity: 0.46,
    vignetteOpacity: 0.68,
  },
  'blair-club': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 10% -10%, rgba(255,107,155,0.32), rgba(12,0,18,0.92))',
      'radial-gradient(120% 120% at 100% -10%, rgba(78,205,196,0.3), rgba(12,0,18,0.95))',
      'linear-gradient(180deg, rgba(255,230,109,0.18) 0%, rgba(18,0,34,0.82) 60%, rgba(10,0,20,0.95) 100%)',
    ],
    auroraColors: [
      'rgba(255,107,155,0.82)',
      'rgba(78,205,196,0.6)',
      'rgba(255,230,109,0.55)',
    ],
    auroraOpacity: 1,
    glowColor: 'rgba(255,107,155,0.42)',
    glowOpacity: 0.6,
    beamColor: 'rgba(78,205,196,0.48)',
    beamOpacity: 0.72,
    beamTilt: 24,
    beamWidth: 42,
    beamOffset: -8,
    noiseOpacity: 0.18,
  },
  'blair-church': {
    auroraColors: [
      'rgba(236,223,210,0.5)',
      'rgba(95,52,117,0.45)',
      'rgba(33,56,133,0.48)',
    ],
    glowOpacity: 0.34,
    beamColor: 'rgba(236,223,210,0.32)',
    beamOpacity: 0.3,
  },
  'blair-religion': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 5% -10%, rgba(137,49,114,0.32), rgba(12,6,28,0.95))',
      'radial-gradient(120% 120% at 100% -5%, rgba(236,223,210,0.25), rgba(8,11,40,0.95))',
      'linear-gradient(180deg, rgba(137,49,114,0.25) 0%, rgba(33,15,55,0.85) 55%, rgba(5,5,24,0.96) 100%)',
    ],
    auroraColors: [
      'rgba(236,223,210,0.62)',
      'rgba(137,49,114,0.55)',
      'rgba(33,56,133,0.55)',
    ],
    auroraOpacity: 0.9,
    glowColor: 'rgba(236,223,210,0.38)',
    glowOpacity: 0.45,
    beamColor: 'rgba(236,223,210,0.28)',
    beamOpacity: 0.28,
    beamTilt: -6,
    vignetteOpacity: 0.7,
  },
  'blair-cinema': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 15% -10%, rgba(255,140,66,0.32), rgba(24,8,12,0.9))',
      'radial-gradient(120% 120% at 100% -5%, rgba(236,223,210,0.26), rgba(12,8,30,0.94))',
      'linear-gradient(180deg, rgba(255,178,102,0.22) 0%, rgba(33,15,55,0.78) 60%, rgba(10,6,24,0.92) 100%)',
    ],
    auroraColors: [
      'rgba(255,178,102,0.65)',
      'rgba(236,223,210,0.5)',
      'rgba(95,52,117,0.42)',
    ],
    glowColor: 'rgba(255,178,102,0.35)',
    glowOpacity: 0.45,
    beamColor: 'rgba(236,223,210,0.28)',
    beamOpacity: 0.32,
    beamTilt: 8,
  },
  'blair-abuse': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 0% -10%, rgba(255,32,67,0.32), rgba(15,0,5,0.96))',
      'radial-gradient(120% 120% at 100% -5%, rgba(139,0,0,0.4), rgba(5,0,0,0.96))',
      'linear-gradient(180deg, rgba(139,0,0,0.28) 0%, rgba(20,0,6,0.88) 65%, rgba(0,0,0,0.96) 100%)',
    ],
    auroraColors: [
      'rgba(255,32,67,0.68)',
      'rgba(139,0,0,0.72)',
      'rgba(56,4,10,0.74)',
    ],
    glowColor: 'rgba(139,0,0,0.52)',
    glowOpacity: 0.5,
    vignetteColor: 'rgba(6,0,6,0.95)',
    vignetteOpacity: 0.82,
    noiseOpacity: 0.22,
    beamOpacity: 0.18,
  },
  'blair-isolation': {
    backgroundLayers: [
      'radial-gradient(120% 100% at 5% -15%, rgba(33,56,133,0.32), rgba(4,10,26,0.95))',
      'radial-gradient(120% 120% at 95% -10%, rgba(0,151,167,0.22), rgba(2,6,18,0.95))',
      'linear-gradient(180deg, rgba(33,56,133,0.25) 0%, rgba(5,11,34,0.9) 60%, rgba(2,5,14,0.96) 100%)',
    ],
    auroraColors: [
      'rgba(33,56,133,0.62)',
      'rgba(0,151,167,0.46)',
      'rgba(5,24,73,0.52)',
    ],
    glowColor: 'rgba(33,56,133,0.35)',
    glowOpacity: 0.48,
    beamColor: 'rgba(0,151,167,0.28)',
    beamOpacity: 0.34,
    beamTilt: -16,
    noiseOpacity: 0.14,
  },
  'blair-death': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 0% -10%, rgba(120,132,158,0.3), rgba(8,10,18,0.95))',
      'radial-gradient(120% 120% at 100% -5%, rgba(200,210,220,0.22), rgba(12,16,28,0.95))',
      'linear-gradient(180deg, rgba(120,132,158,0.2) 0%, rgba(35,44,62,0.82) 65%, rgba(8,10,18,0.95) 100%)',
    ],
    auroraColors: [
      'rgba(200,210,220,0.4)',
      'rgba(120,132,158,0.5)',
      'rgba(45,54,76,0.55)',
    ],
    glowColor: 'rgba(200,210,220,0.28)',
    glowOpacity: 0.38,
    beamColor: 'rgba(120,132,158,0.25)',
    beamOpacity: 0.22,
    beamTilt: -4,
    vignetteOpacity: 0.72,
  },
  'blair-hope': {
    auroraColors: [
      'rgba(255,140,66,0.6)',
      'rgba(236,223,210,0.5)',
      'rgba(95,52,117,0.45)',
    ],
    auroraOpacity: 0.82,
    glowColor: 'rgba(255,188,150,0.42)',
    glowOpacity: 0.52,
    beamColor: 'rgba(255,223,186,0.4)',
    beamOpacity: 0.48,
    beamTilt: -10,
    beamWidth: 40,
  },
  'blair-conclusion': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 15% -10%, rgba(255,215,128,0.42), rgba(35,0,25,0.92))',
      'radial-gradient(120% 120% at 100% -5%, rgba(255,188,141,0.38), rgba(20,0,15,0.95))',
      'linear-gradient(180deg, rgba(255,215,128,0.24) 0%, rgba(35,0,25,0.82) 60%, rgba(12,0,10,0.94) 100%)',
    ],
    auroraColors: [
      'rgba(255,215,128,0.72)',
      'rgba(255,235,155,0.6)',
      'rgba(255,188,141,0.52)',
    ],
    auroraOpacity: 0.94,
    glowColor: 'rgba(255,235,180,0.55)',
    glowOpacity: 0.6,
    beamColor: 'rgba(255,214,165,0.42)',
    beamOpacity: 0.46,
    beamTilt: 18,
    vignetteOpacity: 0.42,
  },

  // Elijah – The Vantage Point
  'elijah-dream': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 10% -10%, rgba(163,208,255,0.45), rgba(12,30,64,0.9))',
      'radial-gradient(120% 130% at 90% -10%, rgba(224,242,255,0.45), rgba(18,52,102,0.92))',
      'linear-gradient(180deg, rgba(163,208,255,0.3) 0%, rgba(21,84,132,0.65) 55%, rgba(8,24,73,0.9) 100%)',
    ],
    auroraColors: [
      'rgba(163,208,255,0.68)',
      'rgba(224,242,255,0.55)',
      'rgba(90,129,180,0.5)',
    ],
    auroraOpacity: 0.88,
    glowColor: 'rgba(163,208,255,0.4)',
    glowOpacity: 0.48,
    beamColor: 'rgba(224,242,255,0.32)',
    beamOpacity: 0.36,
    beamTilt: -14,
  },
  'elijah-reality': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 10% -10%, rgba(255,152,0,0.22), rgba(20,18,24,0.95))',
      'radial-gradient(120% 120% at 95% -10%, rgba(96,125,139,0.35), rgba(12,12,18,0.96))',
      'linear-gradient(180deg, rgba(96,125,139,0.28) 0%, rgba(33,33,33,0.88) 65%, rgba(12,12,16,0.96) 100%)',
    ],
    auroraColors: [
      'rgba(255,152,0,0.45)',
      'rgba(96,125,139,0.55)',
      'rgba(33,33,33,0.6)',
    ],
    glowColor: 'rgba(255,152,0,0.32)',
    glowOpacity: 0.38,
    beamColor: 'rgba(255,183,77,0.28)',
    beamOpacity: 0.24,
    beamTilt: -6,
    vignetteOpacity: 0.7,
  },
  'elijah-anxiety': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 5% -10%, rgba(48,63,159,0.45), rgba(5,12,40,0.96))',
      'radial-gradient(120% 120% at 95% -10%, rgba(26,35,126,0.42), rgba(3,8,30,0.96))',
      'linear-gradient(180deg, rgba(48,63,159,0.35) 0%, rgba(13,27,80,0.88) 60%, rgba(4,10,28,0.96) 100%)',
    ],
    auroraColors: [
      'rgba(63,81,181,0.6)',
      'rgba(26,35,126,0.55)',
      'rgba(2,119,189,0.4)',
    ],
    glowColor: 'rgba(63,81,181,0.38)',
    glowOpacity: 0.5,
    beamColor: 'rgba(2,119,189,0.32)',
    beamOpacity: 0.34,
    beamTilt: -20,
    noiseOpacity: 0.18,
  },
  'elijah-beach': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 10% -10%, rgba(3,169,244,0.4), rgba(0,51,102,0.92))',
      'radial-gradient(120% 120% at 95% -10%, rgba(0,188,212,0.32), rgba(0,45,98,0.94))',
      'linear-gradient(180deg, rgba(3,169,244,0.28) 0%, rgba(0,96,153,0.78) 65%, rgba(0,43,92,0.94) 100%)',
    ],
    auroraColors: [
      'rgba(3,169,244,0.6)',
      'rgba(0,188,212,0.55)',
      'rgba(129,212,250,0.45)',
    ],
    glowColor: 'rgba(3,169,244,0.4)',
    glowOpacity: 0.52,
    beamColor: 'rgba(0,188,212,0.32)',
    beamOpacity: 0.4,
    beamTilt: -12,
    noiseOpacity: 0.14,
  },
  'elijah-drowning': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 10% -10%, rgba(0,87,155,0.35), rgba(1,2,16,0.95))',
      'radial-gradient(120% 120% at 95% -10%, rgba(0,121,140,0.3), rgba(0,4,18,0.96))',
      'linear-gradient(180deg, rgba(0,87,155,0.3) 0%, rgba(0,40,80,0.92) 70%, rgba(0,6,16,0.98) 100%)',
    ],
    auroraColors: [
      'rgba(0,151,167,0.6)',
      'rgba(0,87,155,0.65)',
      'rgba(0,40,80,0.75)',
    ],
    auroraOpacity: 1,
    glowColor: 'rgba(0,151,167,0.4)',
    glowOpacity: 0.52,
    beamColor: 'rgba(0,172,193,0.3)',
    beamOpacity: 0.34,
    beamTilt: 20,
    noiseOpacity: 0.22,
    vignetteOpacity: 0.86,
  },
  'elijah-dating': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 5% -10%, rgba(120,144,156,0.32), rgba(18,18,22,0.95))',
      'radial-gradient(120% 120% at 95% -10%, rgba(69,90,100,0.35), rgba(12,12,18,0.96))',
      'linear-gradient(180deg, rgba(120,144,156,0.26) 0%, rgba(33,33,39,0.86) 60%, rgba(12,12,18,0.95) 100%)',
    ],
    auroraColors: [
      'rgba(120,144,156,0.55)',
      'rgba(84,110,122,0.5)',
      'rgba(38,50,56,0.6)',
    ],
    glowColor: 'rgba(120,144,156,0.32)',
    glowOpacity: 0.42,
    beamColor: 'rgba(207,216,220,0.22)',
    beamOpacity: 0.24,
    beamTilt: -8,
  },
  'elijah-mother': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 10% -10%, rgba(255,214,102,0.38), rgba(24,12,4,0.9))',
      'radial-gradient(120% 120% at 95% -10%, rgba(255,239,170,0.32), rgba(28,14,6,0.92))',
      'linear-gradient(180deg, rgba(255,214,102,0.28) 0%, rgba(94,63,28,0.8) 65%, rgba(35,18,6,0.92) 100%)',
    ],
    auroraColors: [
      'rgba(255,214,102,0.7)',
      'rgba(255,239,170,0.58)',
      'rgba(255,202,128,0.48)',
    ],
    glowColor: 'rgba(255,214,102,0.42)',
    glowOpacity: 0.55,
    beamColor: 'rgba(255,239,170,0.36)',
    beamOpacity: 0.48,
    beamTilt: -6,
    noiseOpacity: 0.12,
  },
  'elijah-dream-home': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 10% -10%, rgba(179,229,252,0.45), rgba(8,24,73,0.88))',
      'radial-gradient(120% 120% at 90% -5%, rgba(144,202,249,0.4), rgba(12,36,84,0.9))',
      'linear-gradient(180deg, rgba(179,229,252,0.3) 0%, rgba(41,121,255,0.6) 55%, rgba(13,71,161,0.88) 100%)',
    ],
    auroraColors: [
      'rgba(144,202,249,0.65)',
      'rgba(179,229,252,0.58)',
      'rgba(100,181,246,0.5)',
    ],
    glowColor: 'rgba(144,202,249,0.38)',
    glowOpacity: 0.5,
    beamColor: 'rgba(100,181,246,0.32)',
    beamOpacity: 0.36,
    beamTilt: -12,
  },
  'elijah-hope': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 15% -10%, rgba(255,241,118,0.4), rgba(24,20,4,0.9))',
      'radial-gradient(120% 120% at 100% -5%, rgba(255,224,130,0.34), rgba(35,28,6,0.9))',
      'linear-gradient(180deg, rgba(255,241,118,0.3) 0%, rgba(255,213,79,0.62) 55%, rgba(121,85,72,0.88) 100%)',
    ],
    auroraColors: [
      'rgba(255,241,118,0.7)',
      'rgba(255,224,130,0.62)',
      'rgba(255,213,79,0.52)',
    ],
    glowColor: 'rgba(255,241,118,0.48)',
    glowOpacity: 0.64,
    beamColor: 'rgba(255,224,130,0.38)',
    beamOpacity: 0.5,
    beamTilt: -4,
    noiseOpacity: 0.12,
  },

  // Lala – The Sculpture of Faith
  'lala-opening': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 15% -10%, rgba(245,237,220,0.45), rgba(48,36,20,0.85))',
      'radial-gradient(120% 120% at 95% -10%, rgba(220,200,170,0.32), rgba(32,26,18,0.9))',
      'linear-gradient(180deg, rgba(245,237,220,0.28) 0%, rgba(121,85,72,0.65) 55%, rgba(40,30,24,0.9) 100%)',
    ],
    auroraColors: [
      'rgba(245,237,220,0.65)',
      'rgba(174,142,104,0.52)',
      'rgba(121,85,72,0.48)',
    ],
    glowColor: 'rgba(245,237,220,0.42)',
    glowOpacity: 0.5,
    beamColor: 'rgba(203,175,134,0.28)',
    beamOpacity: 0.3,
    beamTilt: -8,
  },
  'lala-judgment': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 5% -10%, rgba(84,84,84,0.32), rgba(15,14,14,0.95))',
      'radial-gradient(120% 120% at 95% -10%, rgba(66,66,66,0.28), rgba(8,8,10,0.95))',
      'linear-gradient(180deg, rgba(84,84,84,0.25) 0%, rgba(33,33,33,0.85) 60%, rgba(10,10,12,0.96) 100%)',
    ],
    auroraColors: [
      'rgba(84,84,84,0.45)',
      'rgba(117,117,117,0.4)',
      'rgba(33,33,33,0.55)',
    ],
    glowColor: 'rgba(117,117,117,0.28)',
    glowOpacity: 0.36,
    beamColor: 'rgba(189,189,189,0.18)',
    beamOpacity: 0.18,
    beamTilt: -4,
    vignetteOpacity: 0.72,
  },
  'lala-friends': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 10% -10%, rgba(255,213,79,0.38), rgba(34,24,6,0.85))',
      'radial-gradient(120% 120% at 95% -10%, rgba(255,245,157,0.3), rgba(40,26,4,0.88))',
      'linear-gradient(180deg, rgba(255,213,79,0.28) 0%, rgba(255,183,77,0.58) 60%, rgba(121,85,72,0.9) 100%)',
    ],
    auroraColors: [
      'rgba(255,213,79,0.65)',
      'rgba(255,245,157,0.55)',
      'rgba(255,183,77,0.5)',
    ],
    glowColor: 'rgba(255,213,79,0.4)',
    glowOpacity: 0.5,
    beamColor: 'rgba(255,245,157,0.32)',
    beamOpacity: 0.38,
    beamTilt: -6,
  },
  'lala-rejection': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 10% -10%, rgba(221,44,0,0.4), rgba(35,0,0,0.95))',
      'radial-gradient(120% 120% at 95% -10%, rgba(183,28,28,0.35), rgba(18,0,0,0.96))',
      'linear-gradient(180deg, rgba(221,44,0,0.28) 0%, rgba(136,14,79,0.78) 60%, rgba(35,0,0,0.96) 100%)',
    ],
    auroraColors: [
      'rgba(221,44,0,0.7)',
      'rgba(183,28,28,0.6)',
      'rgba(136,14,79,0.55)',
    ],
    auroraOpacity: 0.95,
    glowColor: 'rgba(221,44,0,0.45)',
    glowOpacity: 0.58,
    beamColor: 'rgba(255,82,82,0.32)',
    beamOpacity: 0.42,
    beamTilt: 16,
    noiseOpacity: 0.18,
    vignetteOpacity: 0.84,
  },
  'lala-faith-history': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 15% -10%, rgba(215,204,184,0.38), rgba(40,30,18,0.88))',
      'radial-gradient(120% 120% at 95% -10%, rgba(188,170,164,0.32), rgba(33,24,18,0.9))',
      'linear-gradient(180deg, rgba(215,204,184,0.3) 0%, rgba(141,110,99,0.72) 60%, rgba(62,39,35,0.9) 100%)',
    ],
    auroraColors: [
      'rgba(215,204,184,0.6)',
      'rgba(188,170,164,0.55)',
      'rgba(141,110,99,0.48)',
    ],
    glowColor: 'rgba(215,204,184,0.4)',
    glowOpacity: 0.48,
    beamColor: 'rgba(188,170,164,0.28)',
    beamOpacity: 0.3,
    beamTilt: -6,
  },
  'lala-play': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 10% -10%, rgba(255,179,71,0.4), rgba(40,20,6,0.88))',
      'radial-gradient(120% 120% at 95% -10%, rgba(255,224,178,0.32), rgba(24,12,6,0.9))',
      'linear-gradient(180deg, rgba(255,179,71,0.28) 0%, rgba(255,138,101,0.58) 60%, rgba(93,64,55,0.9) 100%)',
    ],
    auroraColors: [
      'rgba(255,179,71,0.65)',
      'rgba(255,204,128,0.55)',
      'rgba(255,138,101,0.48)',
    ],
    glowColor: 'rgba(255,179,71,0.42)',
    glowOpacity: 0.5,
    beamColor: 'rgba(255,224,178,0.3)',
    beamOpacity: 0.34,
    beamTilt: 12,
  },
  'lala-confession': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 10% -10%, rgba(60,0,60,0.3), rgba(0,0,0,0.98))',
      'radial-gradient(120% 120% at 95% -10%, rgba(28,0,28,0.3), rgba(0,0,0,1))',
      'linear-gradient(180deg, rgba(60,0,60,0.25) 0%, rgba(10,0,10,0.92) 65%, rgba(0,0,0,1) 100%)',
    ],
    auroraColors: [
      'rgba(136,14,79,0.52)',
      'rgba(74,20,140,0.45)',
      'rgba(33,33,33,0.6)',
    ],
    glowColor: 'rgba(136,14,79,0.32)',
    glowOpacity: 0.42,
    beamColor: 'rgba(213,0,249,0.22)',
    beamOpacity: 0.26,
    beamTilt: -4,
    vignetteOpacity: 0.88,
    noiseOpacity: 0.2,
  },
  'lala-prayer-group': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 5% -10%, rgba(140,110,90,0.28), rgba(20,14,10,0.9))',
      'radial-gradient(120% 120% at 95% -10%, rgba(121,85,72,0.28), rgba(15,10,8,0.92))',
      'linear-gradient(180deg, rgba(140,110,90,0.24) 0%, rgba(78,52,46,0.78) 60%, rgba(32,20,16,0.9) 100%)',
    ],
    auroraColors: [
      'rgba(140,110,90,0.52)',
      'rgba(121,85,72,0.5)',
      'rgba(93,64,55,0.45)',
    ],
    glowColor: 'rgba(140,110,90,0.32)',
    glowOpacity: 0.4,
    beamColor: 'rgba(224,197,145,0.22)',
    beamOpacity: 0.22,
    beamTilt: -8,
  },
  'lala-christa': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 10% -10%, rgba(174,213,129,0.4), rgba(20,40,24,0.85))',
      'radial-gradient(120% 120% at 95% -10%, rgba(129,199,132,0.32), rgba(18,40,24,0.88))',
      'linear-gradient(180deg, rgba(174,213,129,0.3) 0%, rgba(102,187,106,0.55) 60%, rgba(46,125,50,0.88) 100%)',
    ],
    auroraColors: [
      'rgba(174,213,129,0.65)',
      'rgba(129,199,132,0.55)',
      'rgba(102,187,106,0.48)',
    ],
    glowColor: 'rgba(174,213,129,0.36)',
    glowOpacity: 0.48,
    beamColor: 'rgba(200,230,201,0.28)',
    beamOpacity: 0.34,
    beamTilt: -12,
  },
  'lala-context': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 5% -10%, rgba(84,110,122,0.32), rgba(18,24,24,0.94))',
      'radial-gradient(120% 120% at 95% -10%, rgba(69,90,100,0.32), rgba(12,16,20,0.94))',
      'linear-gradient(180deg, rgba(84,110,122,0.26) 0%, rgba(38,50,56,0.84) 60%, rgba(16,20,24,0.94) 100%)',
    ],
    auroraColors: [
      'rgba(84,110,122,0.5)',
      'rgba(55,71,79,0.48)',
      'rgba(33,33,33,0.55)',
    ],
    glowColor: 'rgba(120,144,156,0.28)',
    glowOpacity: 0.38,
    beamColor: 'rgba(176,190,197,0.2)',
    beamOpacity: 0.2,
    beamTilt: -6,
  },
  'lala-freedom': {
    backgroundLayers: [
      'radial-gradient(130% 110% at 10% -10%, rgba(200,230,201,0.4), rgba(20,36,18,0.85))',
      'radial-gradient(120% 120% at 95% -10%, rgba(197,225,165,0.35), rgba(18,40,22,0.88))',
      'linear-gradient(180deg, rgba(200,230,201,0.32) 0%, rgba(156,204,101,0.6) 60%, rgba(85,139,47,0.88) 100%)',
    ],
    auroraColors: [
      'rgba(200,230,201,0.68)',
      'rgba(197,225,165,0.6)',
      'rgba(156,204,101,0.55)',
    ],
    auroraOpacity: 0.92,
    glowColor: 'rgba(200,230,201,0.42)',
    glowOpacity: 0.56,
    beamColor: 'rgba(255,241,118,0.35)',
    beamOpacity: 0.46,
    beamTilt: -10,
    noiseOpacity: 0.12,
  },
}

function GlobalAtmosphereLayers() {
  const { sectionId } = useStoryAtmosphere()
  const preset = ATMOSPHERE_PRESETS[sectionId] ?? {}
  const config: AtmosphereConfig = {
    ...DEFAULT_ATMOSPHERE,
    ...preset,
    backgroundLayers:
      preset.backgroundLayers ?? DEFAULT_ATMOSPHERE.backgroundLayers,
    auroraColors: (preset.auroraColors ??
      DEFAULT_ATMOSPHERE.auroraColors) as AtmosphereConfig['auroraColors'],
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {config.backgroundLayers.map((background, index) => (
        <div
          key={index}
          className="absolute inset-0 opacity-100 transition-opacity duration-700 ease-out"
          style={{ background }}
        />
      ))}

      <div
        className="story-aurora-layer absolute inset-0 transition-opacity duration-700 ease-out"
        style={{
          opacity: config.auroraOpacity,
          transform: `scale(${config.auroraScale})`,
          '--story-aurora-color-1': config.auroraColors[0],
          '--story-aurora-color-2': config.auroraColors[1],
          '--story-aurora-color-3': config.auroraColors[2],
        } as CSSProperties}
      />

      <div
        className="story-beam-layer absolute inset-0 transition-opacity duration-700 ease-out"
        style={{
          opacity: config.beamOpacity,
          '--story-beam-color': config.beamColor,
          '--story-beam-tilt': `${config.beamTilt}deg`,
          '--story-beam-width': `${config.beamWidth}vw`,
          '--story-beam-offset': `${config.beamOffset}vw`,
          '--story-beam-fade': `${config.beamFade}`,
        } as CSSProperties}
      />

      <div
        className="story-glow-layer absolute inset-0 transition-opacity duration-700 ease-out"
        style={{
          opacity: config.glowOpacity,
          '--story-glow-color': config.glowColor,
        } as CSSProperties}
      />

      <div
        className="story-noise-layer absolute inset-0 transition-opacity duration-700 ease-out"
        style={{ opacity: config.noiseOpacity }}
      />

      <div
        className="story-vignette-layer absolute inset-0 transition-opacity duration-700 ease-out"
        style={{
          opacity: config.vignetteOpacity,
          '--story-vignette-color': config.vignetteColor,
          '--story-vignette-feather': `${config.vignetteFeather}`,
        } as CSSProperties}
      />
    </div>
  )
}

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoryAtmosphereProvider initialSectionId="default">
      <div className="relative min-h-screen overflow-hidden bg-[#050b22] text-white">
        <GlobalAtmosphereLayers />

        <div className="relative z-10 font-eb-garamond">
          {children}
        </div>
      </div>
    </StoryAtmosphereProvider>
  )
}

