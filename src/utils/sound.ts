/**
 * Web Audio API based auditory confirmation for clinical actions.
 * Zero external asset dependencies - synthesized in real-time.
 *
 * All cues respect the user's audio preference via the `enabled` argument.
 */

export type UiSoundCue = 'save' | 'register' | 'settle' | 'error';

interface Tone {
  frequency: number;
  start: number;
  duration: number;
  gain: number;
  type?: OscillatorType;
}

const CUES: Record<UiSoundCue, Tone[]> = {
  // Consultation saved: familiar two-tone confirmation
  save: [
    { frequency: 523.25, start: 0, duration: 0.16, gain: 0.1 },
    { frequency: 659.25, start: 0.07, duration: 0.21, gain: 0.12 },
  ],
  // Patient registered: short rising triad
  register: [
    { frequency: 523.25, start: 0, duration: 0.14, gain: 0.09 },
    { frequency: 659.25, start: 0.08, duration: 0.14, gain: 0.09 },
    { frequency: 783.99, start: 0.16, duration: 0.2, gain: 0.1 },
  ],
  // Dues settled: brighter, conclusive two-tone
  settle: [
    { frequency: 659.25, start: 0, duration: 0.14, gain: 0.09 },
    { frequency: 880, start: 0.09, duration: 0.24, gain: 0.1 },
  ],
  // Validation / save failure: soft descending pair
  error: [
    { frequency: 392, start: 0, duration: 0.14, gain: 0.07 },
    { frequency: 329.63, start: 0.1, duration: 0.22, gain: 0.07 },
  ],
};

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    if (!audioContext) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return null;
      audioContext = new AudioCtx();
    }
    return audioContext;
  } catch {
    return null;
  }
}

export function playUiCue(cue: UiSoundCue, enabled = true): void {
  if (!enabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    if (ctx.state === 'suspended') void ctx.resume();
    const now = ctx.currentTime;

    for (const tone of CUES[cue]) {
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = tone.type ?? 'sine';
      oscillator.frequency.setValueAtTime(tone.frequency, now + tone.start);
      gain.gain.setValueAtTime(tone.gain, now + tone.start);
      gain.gain.exponentialRampToValueAtTime(0.001, now + tone.start + tone.duration);
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.start(now + tone.start);
      oscillator.stop(now + tone.start + tone.duration + 0.02);
    }
  } catch {
    // Gracefully ignore if autoplay/audio permission is restricted
  }
}

/** Kept for the Settings "Test" button and backwards compatibility. */
export function playSuccessChime(): void {
  playUiCue('save', true);
}
