'use client';

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import { CLINIC_CONFIG, ClinicConfig } from '@/config/clinic.config';
import { DOSAGE_MACROS } from '@/constants/clinical';

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
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

const STORAGE_KEYS = {
  CLINIC: 'nuskha_clinic_config',
  MACROS: 'nuskha_dosage_macros',
  AUDIO: 'nuskha_audio_chime',
  SINGLE_KEY: 'nuskha_single_key_shortcuts',
};

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<SettingsTab>('shortcuts');

  const [clinicConfig, setClinicConfig] = useState<ClinicConfig>(() => {
    if (typeof window === 'undefined') return CLINIC_CONFIG;
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.CLINIC);
      return stored ? { ...CLINIC_CONFIG, ...JSON.parse(stored) } : CLINIC_CONFIG;
    } catch {
      return CLINIC_CONFIG;
    }
  });

  const [dosageMacros, setDosageMacros] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [...DOSAGE_MACROS];
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.MACROS);
      return stored ? JSON.parse(stored) : [...DOSAGE_MACROS];
    } catch {
      return [...DOSAGE_MACROS];
    }
  });

  const [audioChimeEnabled, setAudioChimeEnabled] = useState(() => {
    if (typeof window === 'undefined') return true;
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.AUDIO);
      return stored !== null ? stored === 'true' : true;
    } catch {
      return true;
    }
  });

  const [singleKeyShortcutsEnabled, setSingleKeyShortcutsEnabled] = useState(() => {
    if (typeof window === 'undefined') return true;
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SINGLE_KEY);
      return stored !== null ? stored === 'true' : true;
    } catch {
      return true;
    }
  });

  const openSettings = useCallback((tab?: SettingsTab) => {
    if (tab) setActiveTab(tab);
    setIsSettingsOpen(true);
  }, []);

  const closeSettings = useCallback(() => {
    setIsSettingsOpen(false);
  }, []);

  const updateClinicConfig = useCallback((updates: Partial<ClinicConfig>) => {
    setClinicConfig((prev) => {
      const next = { ...prev, ...updates };
      try {
        localStorage.setItem(STORAGE_KEYS.CLINIC, JSON.stringify(next));
      } catch {
        // storage quota fallback
      }
      return next;
    });
  }, []);

  const addDosageMacro = useCallback((macro: string) => {
    const trimmed = macro.trim();
    if (!trimmed) return;
    setDosageMacros((prev) => {
      if (prev.includes(trimmed)) return prev;
      const next = [...prev, trimmed];
      try {
        localStorage.setItem(STORAGE_KEYS.MACROS, JSON.stringify(next));
      } catch {
        // storage quota fallback
      }
      return next;
    });
  }, []);

  const removeDosageMacro = useCallback((macro: string) => {
    setDosageMacros((prev) => {
      const next = prev.filter((m) => m !== macro);
      try {
        localStorage.setItem(STORAGE_KEYS.MACROS, JSON.stringify(next));
      } catch {
        // storage quota fallback
      }
      return next;
    });
  }, []);

  const handleSetAudioChime = useCallback((enabled: boolean) => {
    setAudioChimeEnabled(enabled);
    try {
      localStorage.setItem(STORAGE_KEYS.AUDIO, String(enabled));
    } catch {
      // storage quota fallback
    }
  }, []);

  const handleSetSingleKey = useCallback((enabled: boolean) => {
    setSingleKeyShortcutsEnabled(enabled);
    try {
      localStorage.setItem(STORAGE_KEYS.SINGLE_KEY, String(enabled));
    } catch {
      // storage quota fallback
    }
  }, []);

  const resetToDefaults = useCallback(() => {
    setClinicConfig(CLINIC_CONFIG);
    setDosageMacros([...DOSAGE_MACROS]);
    setAudioChimeEnabled(true);
    setSingleKeyShortcutsEnabled(true);
    try {
      localStorage.removeItem(STORAGE_KEYS.CLINIC);
      localStorage.removeItem(STORAGE_KEYS.MACROS);
      localStorage.removeItem(STORAGE_KEYS.AUDIO);
      localStorage.removeItem(STORAGE_KEYS.SINGLE_KEY);
    } catch {
      // storage quota fallback
    }
  }, []);

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
