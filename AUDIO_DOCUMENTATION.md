# Audio Files Documentation

This document explains all audio files used throughout the website, where they play, and their purpose in enhancing the storytelling experience.

## Audio Implementation
All audio files are triggered based on **scroll position**, not time delays. They automatically play when the user scrolls to the relevant section, creating an immersive, scroll-driven audio experience.

---

## Blair's Story - "The Architecture of Moving"

### 1. **Cold, High-Pitched Piano Chord** 
- **File:** `/audio/Blair - Cold, High-Pitched Piano Chord .mp3`
- **Location:** Plays when Blair reflects on her gilded cage
- **Context:** After the line "Her world was a gilded cage, a constraining piece of gold strapped around her neck"
- **Purpose:** Creates a moment of emotional tension, emphasizing the coldness and constraint she feels despite material wealth
- **Type:** Single sound effect (non-looping)
- **Volume:** Medium (0.5)

### 2. **Club Music**
- **File:** `/audio/Blair - club music .mp3`
- **Location:** Plays during the club scene where Blair seeks escape
- **Context:** When Blair is at the club with her friend Yanna, trying to escape her constrained home life
- **Purpose:** Ambient background music that immerses the reader in the club atmosphere, representing Blair's search for freedom and rebellion
- **Type:** Ambient music (looping)
- **Volume:** Medium (0.5)
- **Fade In:** Yes (gradually fades in over 2 seconds)

### 3. **Shattering Sound**
- **File:** `/audio/Blair - Shattering Sound.mp3`
- **Location:** Plays at a moment of breaking or realization
- **Context:** Used to emphasize a moment of emotional breakthrough or shattering of illusions
- **Purpose:** Sound effect that creates impact at a pivotal moment in Blair's story
- **Type:** Single sound effect (non-looping)
- **Volume:** Medium (0.5)

### 4. **Melancholic Filipino Ballad**
- **File:** `/audio/Blair - Melancholic Filipino Ballad.mp3`
- **Location:** Plays during emotional or reflective moments
- **Context:** Used to enhance the emotional depth of Blair's journey and her connection to Filipino culture
- **Purpose:** Creates a melancholic, introspective atmosphere that reflects Blair's inner turmoil and longing
- **Type:** Ambient music (looping)
- **Volume:** Medium (0.5)
- **Fade In:** Yes

---

## Elijah's Story - "The Vantage Point"

### 1. **Panalangin Piano**
- **File:** `/audio/Elijah - panalangin piano.mp3`
- **Location:** Plays when Elijah dreams of his ideal home with his wife
- **Context:** After he closes his eyes and imagines his dream home, where he's cooking and playing his favorite Apo Hiking Society song "Panalangin"
- **Purpose:** Represents Elijah's dream of peace, love, and stability - the quiet, beautiful life he longs for
- **Type:** Ambient music (looping)
- **Volume:** Medium (0.5)
- **Fade In:** Yes
- **Note:** "Panalangin" means "prayer" in Filipino, reflecting Elijah's hopes and dreams

### 2. **Streets of Manila**
- **File:** `/audio/Elijah_ Streets of Manila.mp3`
- **Location:** Plays when reality interrupts his dream - the harsh sounds of Manila
- **Context:** After the line "But reality was brighter than the sun" - when he wakes up to his actual living situation in Paco, Manila
- **Purpose:** Creates contrast between his dream and reality. The chaotic street sounds represent the noise and financial precarity of his actual life
- **Type:** Ambient soundscape (looping)
- **Volume:** Medium (0.5)
- **Fade In:** Yes
- **Note:** Includes typical Manila street sounds - jeepneys, tricycles, karaoke, voices

### 3. **Sea Waves**
- **File:** `/audio/Elijah - sea waves.mp3`
- **Location:** Plays during Elijah's beach trip to Batangas
- **Context:** When Elijah visits the beach with friends and finds peace in the ocean
- **Purpose:** Represents the rare moments of peace and escape Elijah finds in nature, away from the noise of the city
- **Type:** Ambient soundscape (looping)
- **Volume:** Medium (0.5)
- **Fade In:** Yes
- **Note:** The sound of waves creates a calming contrast to the urban noise

### 4. **Gentle Heartbeat Fading In**
- **File:** `/audio/Elijah - Gentle Heartbeat Fading In.mp3`
- **Location:** Plays during moments of emotional intensity and reflection
- **Context:** When Elijah reflects on his family's sacrifices and his determination to succeed
- **Purpose:** Creates an intimate, emotional atmosphere - the heartbeat represents life, hope, and the quiet determination that keeps Elijah going
- **Type:** Ambient soundscape (looping)
- **Volume:** Low to Medium (0.4)
- **Fade In:** Yes (gradual fade-in creates a gentle, emotional build-up)

### 5. **Peaceful**
- **File:** `/audio/Elijah_ Peaceful.mp3`
- **Location:** Plays at the end of Elijah's story
- **Context:** When Elijah stands at the mountain's edge, understanding his true vantage point and making a vow to keep climbing
- **Purpose:** Represents the peace and clarity Elijah finds in nature, and his renewed determination. A hopeful, peaceful ending to his story
- **Type:** Ambient music (looping)
- **Volume:** Medium (0.5)
- **Fade In:** Yes

---

## Lala's Story - "The Sculpture of Faith"

### 1. **Heavy Door Slam**
- **File:** `/audio/Lala - Heavy Door Slam .mp3`
- **Location:** Plays when Lala's mother slams the door after telling her she can't come on the family trip
- **Context:** After the line "You won't come with us anymore... If you can't follow rules, then stay here." The door slammed.
- **Purpose:** Creates a jarring, impactful moment that emphasizes the rejection and isolation Lala feels from her family
- **Type:** Single sound effect (non-looping)
- **Volume:** Medium-High (0.6)
- **Fade In:** No (immediate impact)

### 2. **Flipping Page on Book**
- **File:** `/audio/Lala - Flipping page on book.mp3`
- **Location:** Plays when Lala reads "The Lady's Guide to Celestial Mechanics"
- **Context:** When Lala reads the book about two women in love, discovering something that resonates deeply with her
- **Purpose:** Creates an intimate, quiet moment of discovery. The sound of pages turning represents Lala finding herself in literature
- **Type:** Single sound effect (non-looping)
- **Volume:** Low (0.3)
- **Fade In:** No

### 3. **Gentle Ambient Piano**
- **File:** `/audio/Lala - Gentle Ambient Piano.mp3`
- **Location:** Plays at the end of Lala's story, when she finds freedom in her own condo
- **Context:** When Lala lives in her own space, with privacy and freedom - "Privacy finally feels divine"
- **Purpose:** Represents the peace, freedom, and self-acceptance Lala finally finds. A gentle, hopeful ending that contrasts with the earlier tension
- **Type:** Ambient music (looping)
- **Volume:** Medium (0.5)
- **Fade In:** Yes
- **Note:** The gentle piano reflects Lala's journey from constraint to freedom

---

## Technical Implementation Details

### Scroll-Based Triggering
- All audio files are triggered using `IntersectionObserver` API
- Audio starts playing when the user scrolls the relevant section into view
- No time-based delays - everything is driven by scroll position
- Threshold: 20% of the audio element must be visible before triggering
- Root Margin: `-150px` from bottom (audio starts slightly before the section is fully visible)

### Audio Behavior
- **Looping Sounds:** Continue playing as long as the section is in view
- **Non-Looping Sounds:** Play once when scrolled into view
- **Fade In:** Most ambient sounds fade in over 2 seconds for smooth transitions
- **Volume Control:** All audio files are set to 50% volume (0.5) by default to avoid overwhelming the content
- **Auto-Play:** All looping sounds automatically play when scrolled into view (browser permissions permitting)

### Browser Compatibility
- Audio auto-play may be blocked by some browsers until user interaction
- Graceful degradation: If auto-play is blocked, audio won't play but the page remains functional
- Preload: All audio files are preloaded for smooth playback

---

## Audio Placement Strategy

### Storytelling Purpose
Each audio file is strategically placed to:
1. **Enhance Emotional Impact:** Sound effects and music amplify key emotional moments
2. **Create Atmosphere:** Ambient sounds immerse readers in the story's setting
3. **Mark Transitions:** Audio signals shifts between dream and reality, past and present
4. **Reinforce Themes:** Music choices reflect each character's emotional journey

### Narrative Flow
- **Blair:** Audio moves from cold tension → club energy → melancholic reflection
- **Elijah:** Audio contrasts dream (peaceful piano) → reality (street noise) → escape (ocean) → hope (peaceful ending)
- **Lala:** Audio moves from conflict (door slam) → discovery (page turning) → freedom (gentle piano)

---

## Future Enhancements
- Add volume controls for user preference
- Implement audio crossfading between sections
- Add more contextual sound effects
- Consider spatial audio for enhanced immersion

