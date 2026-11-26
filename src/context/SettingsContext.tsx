'use client';

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  ReactNode,
} from 'react';
import { CLINIC_CONFIG, ClinicConfig } from '@/config/clinic.config';
import { DOSAGE_MACROS } from '@/constants/clinical';
import { ensureLocalStorageMigrated } from '@/lib/migrateLocalClient';

export type SettingsTab = 'shortcuts' | 'clinic' | 'macros' | 'preferences';

interface SettingsContextValue {
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
  activeTab: SettingsTab;
  setActiveTab: (tab: SettingsTab) => void;
  openSettings: (tab?: SettingsTab) => void;
  closeSettings: () => void;
  clinicConfig: ClinicConfig;
  updateClinicConfig: (updates: Partial<ClinicConfig>) => void;
  dosageMacros: string[];
  addDosageMacro: (macro: string) => void;
  removeDosageMacro: (macro: string) => void;
  audioChimeEnabled: boolean;
  setAudioChimeEnabled: (enabled: boolean) => void;
  singleKeyShortcutsEnabled: boolean;
  setSingleKeyShortcutsEnabled: (enabled: boolean) => void;
  resetToDefaults: () => void;
  settingsError: string | null;
  clearSettingsError: () => void;
  isSavingSettings: boolean;
  showSavedFeedback: boolean;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

async function parseJsonOrThrow<T>(res: Response): Promise<T> {
  const payload = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message =
      (payload as { error?: string })?.error ||
      `Request failed with status ${res.status}`;
    throw new Error(message);
  }
  return payload as T;
}

// Device-level UI preferences stay in localStorage
const PREF_STORAGE_KEYS = {
  AUDIO: 'nuskha_audio_chime',
  SINGLE_KEY: 'nuskha_single_key_shortcuts',
};

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<SettingsTab>('shortcuts');

  const [clinicConfig, setClinicConfig] = useState<ClinicConfig>(CLINIC_CONFIG);
  const [dosageMacros, setDosageMacros] = useState<string[]>([...DOSAGE_MACROS]);

  const [audioChimeEnabled, setAudioChimeEnabled] = useState(() => {
    if (typeof window === 'undefined') return true;
    try {
      const stored = localStorage.getItem(PREF_STORAGE_KEYS.AUDIO);
      return stored !== null ? stored === 'true' : true;
    } catch {
      return true;
    }
  });

  const [singleKeyShortcutsEnabled, setSingleKeyShortcutsEnabled] = useState(() => {
    if (typeof window === 'undefined') return true;
    try {
      const stored = localStorage.getItem(PREF_STORAGE_KEYS.SINGLE_KEY);
      return stored !== null ? stored === 'true' : true;
    } catch {
      return true;
    }
  });

  const [settingsError, setSettingsError] = useState<string | null>(null);
  const [isSavingSettings, setIsSavingSettings] = useState(false);
  const [showSavedFeedback, setShowSavedFeedback] = useState(false);

  const pendingClinicUpdatesRef = useRef<Partial<ClinicConfig>>({});
  const patchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const savedFeedbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const patchChainRef = useRef<Promise<void>>(Promise.resolve());
  const mountedRef = useRef(true);

  const clearSettingsError = useCallback(() => {
    setSettingsError(null);
  }, []);

  const triggerSavedFeedback = useCallback(() => {
    if (!mountedRef.current) return;
    setShowSavedFeedback(true);
    if (savedFeedbackTimerRef.current) {
      clearTimeout(savedFeedbackTimerRef.current);
    }
    savedFeedbackTimerRef.current = setTimeout(() => {
      savedFeedbackTimerRef.current = null;
      if (mountedRef.current) {
        setShowSavedFeedback(false);
      }
    }, 1500);
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    let active = true;
    ensureLocalStorageMigrated()
      .then(() => fetch('/api/settings', { cache: 'no-store' }))
      .then((res) =>
        parseJsonOrThrow<{ clinicConfig?: ClinicConfig; dosageMacros?: string[] }>(res)
      )
      .then((data) => {
        if (!active || !data) return;
        setSettingsError(null);
        if (data.clinicConfig) setClinicConfig(data.clinicConfig);
        if (Array.isArray(data.dosageMacros)) setDosageMacros(data.dosageMacros);
      })
      .catch((err) => {
        if (!active) return;
        const message =
          err instanceof Error ? err.message : 'Failed to load clinic settings from database.';
        setSettingsError(message);
      });
    return () => {
      active = false;
      mountedRef.current = false;
      if (patchTimerRef.current) {
        clearTimeout(patchTimerRef.current);
      }
      if (savedFeedbackTimerRef.current) {
        clearTimeout(savedFeedbackTimerRef.current);
      }
    };
  }, []);

  const openSettings = useCallback((tab?: SettingsTab) => {
    if (tab) setActiveTab(tab);
    setIsSettingsOpen(true);
  }, []);

  const closeSettings = useCallback(() => {
    setIsSettingsOpen(false);
  }, []);

  const flushClinicUpdates = useCallback(() => {
    patchChainRef.current = patchChainRef.current.then(async () => {
      while (Object.keys(pendingClinicUpdatesRef.current).length > 0) {
        const batch = pendingClinicUpdatesRef.current;
        pendingClinicUpdatesRef.current = {};

        if (mountedRef.current) {
          setIsSavingSettings(true);
        }

        try {
          const res = await fetch('/api/settings', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(batch),
          });
          const data = await parseJsonOrThrow<{ clinicConfig?: ClinicConfig }>(res);
          if (!mountedRef.current) return;
          setSettingsError(null);
          triggerSavedFeedback();
          if (data?.clinicConfig && Object.keys(pendingClinicUpdatesRef.current).length === 0) {
            setClinicConfig(data.clinicConfig);
          }
        } catch (err) {
          if (mountedRef.current) {
            setSettingsError(
              err instanceof Error ? err.message : 'Failed to save clinic settings.'
            );
          }
          break;
        } finally {
          if (mountedRef.current) {
            setIsSavingSettings(false);
          }
        }
      }
    });
  }, [triggerSavedFeedback]);

  const updateClinicConfig = useCallback(
    (updates: Partial<ClinicConfig>) => {
      setSettingsError(null);
      setClinicConfig((prev) => ({ ...prev, ...updates }));
      pendingClinicUpdatesRef.current = {
        ...pendingClinicUpdatesRef.current,
        ...updates,
      };

      if (patchTimerRef.current) {
        clearTimeout(patchTimerRef.current);
      }

      patchTimerRef.current = setTimeout(() => {
        patchTimerRef.current = null;
        flushClinicUpdates();
      }, 350);
    },
    [flushClinicUpdates]
  );

  const addDosageMacro = useCallback((macro: string) => {
    const trimmed = macro.trim();
    if (!trimmed) return;
    setSettingsError(null);
    setDosageMacros((prev) => (prev.includes(trimmed) ? prev : [...prev, trimmed]));
    void fetch('/api/settings/macros', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ macro: trimmed }),
    })
      .then((res) => parseJsonOrThrow<{ dosageMacros?: string[] }>(res))
      .then((data) => {
        if (!mountedRef.current) return;
        triggerSavedFeedback();
        if (Array.isArray(data?.dosageMacros)) {
          setDosageMacros(data.dosageMacros);
        }
      })
      .catch((err) => {
        if (!mountedRef.current) return;
        setDosageMacros((prev) => prev.filter((m) => m !== trimmed));
        setSettingsError(
          err instanceof Error ? err.message : 'Failed to add dosage macro.'
        );
      });
  }, [triggerSavedFeedback]);

  const removeDosageMacro = useCallback((macro: string) => {
    setSettingsError(null);
    setDosageMacros((prev) => prev.filter((m) => m !== macro));
    void fetch('/api/settings/macros', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ macro }),
    })
      .then((res) => parseJsonOrThrow<{ dosageMacros?: string[] }>(res))
      .then((data) => {
        if (!mountedRef.current) return;
        triggerSavedFeedback();
        if (Array.isArray(data?.dosageMacros)) {
          setDosageMacros(data.dosageMacros);
        }
      })
      .catch((err) => {
        if (!mountedRef.current) return;
        setDosageMacros((prev) => (prev.includes(macro) ? prev : [...prev, macro]));
        setSettingsError(
          err instanceof Error ? err.message : 'Failed to remove dosage macro.'
        );
      });
  }, [triggerSavedFeedback]);

  const handleSetAudioChime = useCallback((enabled: boolean) => {
    setAudioChimeEnabled(enabled);
    try {
      localStorage.setItem(PREF_STORAGE_KEYS.AUDIO, String(enabled));
    } catch {
      // storage quota fallback
    }
  }, []);

  const handleSetSingleKey = useCallback((enabled: boolean) => {
    setSingleKeyShortcutsEnabled(enabled);
    try {
      localStorage.setItem(PREF_STORAGE_KEYS.SINGLE_KEY, String(enabled));
    } catch {
      // storage quota fallback
    }
  }, []);

  const resetToDefaults = useCallback(() => {
    if (patchTimerRef.current) {
      clearTimeout(patchTimerRef.current);
      patchTimerRef.current = null;
    }
    pendingClinicUpdatesRef.current = {};
    setSettingsError(null);
    setClinicConfig(CLINIC_CONFIG);
    setDosageMacros([...DOSAGE_MACROS]);
    setAudioChimeEnabled(true);
    setSingleKeyShortcutsEnabled(true);
    try {
      localStorage.removeItem(PREF_STORAGE_KEYS.AUDIO);
      localStorage.removeItem(PREF_STORAGE_KEYS.SINGLE_KEY);
    } catch {
      // storage quota fallback
    }
    patchChainRef.current = patchChainRef.current.then(async () => {
      if (mountedRef.current) setIsSavingSettings(true);
      try {
        const res = await fetch('/api/settings', { method: 'DELETE' });
        const data = await parseJsonOrThrow<{
          clinicConfig?: ClinicConfig;
          dosageMacros?: string[];
        }>(res);
        if (!mountedRef.current) return;
        triggerSavedFeedback();
        if (data?.clinicConfig) setClinicConfig(data.clinicConfig);
        if (Array.isArray(data?.dosageMacros)) setDosageMacros(data.dosageMacros);
      } catch (err) {
        if (mountedRef.current) {
          setSettingsError(
            err instanceof Error ? err.message : 'Failed to reset clinic settings.'
          );
        }
      } finally {
        if (mountedRef.current) setIsSavingSettings(false);
      }
    });
  }, [triggerSavedFeedback]);

  return (
    <SettingsContext.Provider
      value={{
        isSettingsOpen,
        setIsSettingsOpen,
        activeTab,
        setActiveTab,
        openSettings,
        closeSettings,
        clinicConfig,
        updateClinicConfig,
        dosageMacros,
        addDosageMacro,
        removeDosageMacro,
        audioChimeEnabled,
        setAudioChimeEnabled: handleSetAudioChime,
        singleKeyShortcutsEnabled,
        setSingleKeyShortcutsEnabled: handleSetSingleKey,
        resetToDefaults,
        settingsError,
        clearSettingsError,
        isSavingSettings,
        showSavedFeedback,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export function useSettingsContext(): SettingsContextValue {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettingsContext must be used within a SettingsProvider');
  }
  return context;
}
