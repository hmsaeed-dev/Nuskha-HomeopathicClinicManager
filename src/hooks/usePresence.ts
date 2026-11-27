'use client';

import { useEffect, useState } from 'react';

/**
 * Keeps a dialog mounted for the length of its exit transition.
 * `isVisible` drives opacity/scale classes; `isMounted` controls rendering.
 */
export function usePresence(isOpen: boolean, durationMs = 160) {
  const [keepMounted, setKeepMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(isOpen);

  // React-approved render-time state adjustment: the dialog must be mounted
  // on the first open render, but start hidden so it can transition in.
  if (isOpen && !keepMounted) {
    setKeepMounted(true);
    setIsVisible(false);
  }

  useEffect(() => {
    if (isOpen) {
      const frame = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const frame = requestAnimationFrame(() => setIsVisible(false));
    const timeout = setTimeout(() => setKeepMounted(false), durationMs);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
    };
  }, [isOpen, durationMs]);

  return { isMounted: isOpen || keepMounted, isVisible };
}
