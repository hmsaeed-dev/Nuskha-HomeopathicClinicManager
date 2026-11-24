'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  X,
  Keyboard,
  Building2,
  Pill,
  Sliders,
  Search,
  Printer,
  Volume2,
  Plus,
  Trash2,
  RotateCcw,
  Download,
  CheckCircle2,
} from 'lucide-react';
import { useSettingsContext } from '@/context/SettingsContext';
import { usePatientsContext } from '@/context/PatientsContext';
import { playSuccessChime } from '@/utils/sound';

interface ShortcutItem {
  id: string;
  category: 'Navigation' | 'Search' | 'Consultation' | 'Autocomplete';
  keys: string[];
  description: string;
  context: string;
}

const SHORTCUT_LIST: ShortcutItem[] = [
  // Navigation
  {
    id: 'f1',
    category: 'Navigation',
    keys: ['F1'],
    description: 'Switch to OPD Workspace',
    context: 'Global',
  },
  {
    id: 'f2',
    category: 'Navigation',
    keys: ['F2'],
    description: 'Register New Walk-in Patient (Open Drawer)',
    context: 'Global',
  },
  {
    id: 'f3',
    category: 'Navigation',
    keys: ['F3'],
    description: 'Switch to Daily Register (Session Log)',
    context: 'Global',
  },
  {
    id: 'f4',
    category: 'Navigation',
    keys: ['F4'],
    description: 'Switch to Patients Archive (Full Dossier)',
    context: 'Global',
  },
  {
    id: 'help',
    category: 'Navigation',
    keys: ['?'],
    description: 'Open this Shortcuts Guide & Settings',
    context: 'Global',
  },
  {
    id: 'esc',
    category: 'Navigation',
    keys: ['Esc'],
    description: 'Dismiss Drawer / Modal / Dropdown',
    context: 'Global',
  },

  // Search
  {
    id: 'search-alt-s',
    category: 'Search',
    keys: ['Alt', 'S'],
    description: 'Jump to & select Patient Search input',
    context: 'OPD Workspace',
  },
  {
    id: 'search-slash',
    category: 'Search',
    keys: ['/'],
    description: 'Quick-focus search bar (when not typing)',
    context: 'OPD Workspace',
  },

  // Consultation
  {
    id: 'save-next',
    category: 'Consultation',
    keys: ['Ctrl', '↵'],
    description: 'Save Consultation & Refocus Search for next patient',
    context: 'OPD Workspace',
  },
  {
    id: 'repeat-last',
    category: 'Consultation',
    keys: ['Alt', 'R'],
    description: 'Repeat Previous Visit Prescription',
    context: 'OPD Workspace',
  },
  {
    id: 'add-row',
    category: 'Consultation',
    keys: ['Alt', 'A'],
    description: 'Add new medicine row to prescription table',
    context: 'OPD Workspace',
  },
  {
    id: 'rx-1',
    category: 'Consultation',
    keys: ['1'],
    description: 'Mark Remedy Reaction: "Decline"',
    context: 'OPD Workspace',
  },
  {
    id: 'rx-2',
    category: 'Consultation',
    keys: ['2'],
    description: 'Mark Remedy Reaction: "No Change / Stable"',
    context: 'OPD Workspace',
  },
  {
    id: 'rx-3',
    category: 'Consultation',
    keys: ['3'],
    description: 'Mark Remedy Reaction: "Improved"',
    context: 'OPD Workspace',
  },
  {
    id: 'rx-4',
    category: 'Consultation',
    keys: ['4'],
    description: 'Mark Remedy Reaction: "First Visit"',
    context: 'OPD Workspace',
  },

  // Autocomplete
  {
    id: 'auto-down',
    category: 'Autocomplete',
    keys: ['↓', '↑'],
    description: 'Browse medicine suggestions in autocomplete dropdown',
    context: 'Medicine Input',
  },
  {
    id: 'auto-enter',
    category: 'Autocomplete',
    keys: ['Enter'],
    description: 'Select highlighted remedy from dropdown',
    context: 'Medicine Input',
  },
];

export const SettingsModal: React.FC = () => {
  const {
    isSettingsOpen,
    closeSettings,
    activeTab,
    setActiveTab,
    clinicConfig,
    updateClinicConfig,
    dosageMacros,
    addDosageMacro,
    removeDosageMacro,
    audioChimeEnabled,
    setAudioChimeEnabled,
    singleKeyShortcutsEnabled,
    setSingleKeyShortcutsEnabled,
    resetToDefaults,
  } = useSettingsContext();

  const { patients } = usePatientsContext();

  const [shortcutSearch, setShortcutSearch] = useState('');
  const [lastPressedKey, setLastPressedKey] = useState<string | null>(null);
  const [newMacroText, setNewMacroText] = useState('');
  const [showSavedFeedback, setShowSavedFeedback] = useState(false);

  // Live shortcut key detection to test keys interactively
  useEffect(() => {
    if (!isSettingsOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      let keyName = e.key;
      if (e.key === 'Escape') {
        closeSettings();
        return;
      }
      if (e.key === 'Enter') keyName = '↵';
      if (e.ctrlKey) keyName = `Ctrl+${keyName}`;
      if (e.altKey) keyName = `Alt+${keyName}`;
      setLastPressedKey(keyName);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSettingsOpen, closeSettings]);

  if (!isSettingsOpen) return null;

  // Filter shortcuts
  const filteredShortcuts = SHORTCUT_LIST.filter(
    (item) =>
      item.description.toLowerCase().includes(shortcutSearch.toLowerCase()) ||
      item.keys.some((k) => k.toLowerCase().includes(shortcutSearch.toLowerCase())) ||
      item.category.toLowerCase().includes(shortcutSearch.toLowerCase())
  );

  const handlePrintDeskCard = () => {
    window.print();
  };

  const handleTestAudio = () => {
    playSuccessChime();
  };

  const handleAddMacroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMacroText.trim()) {
      addDosageMacro(newMacroText.trim());
      setNewMacroText('');
    }
  };

  const handleExportCSV = () => {
    const rows = [
      ['Patient Name', 'Relation', 'Locality', 'Phone', 'Date', 'Token', 'Result', 'Fee', 'Status'],
    ];

    patients.forEach((p) => {
      p.pastVisits.forEach((v) => {
        rows.push([
          p.fullName,
          `${p.relationType} ${p.relativeName}`,
          p.locality,
          p.phone,
          v.date,
          String(v.tokenNo),
          v.reaction,
          String(v.fee),
          v.feeStatus,
        ]);
      });
    });

    const csvContent =
      'data:text/csv;charset=utf-8,' + rows.map((e) => e.map((val) => `"${val}"`).join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `nuskha-opd-register-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-3 sm:p-5 transition-opacity duration-150">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-border-subtle flex flex-col h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Top Header */}
        <header className="px-6 py-4 bg-brand-surface-subtle flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center font-bold shadow-xs">
              <Sliders className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h2 className="font-display text-lg font-bold text-content-primary">
                  Settings
                </h2>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">

            <button
              type="button"
              onClick={closeSettings}
              className="p-1.5 rounded-full text-content-secondary hover:bg-brand-primary-container hover:text-content-primary transition-colors cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Modal Body: Left Tab Sidebar + Right Content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          {/* Left Navigation Sidebar */}
          <aside className="md:col-span-4 bg-brand-surface-subtle border-r border-border-subtle p-3 sm:p-4 flex flex-col justify-between gap-4 overflow-y-auto">
            <nav className="flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => setActiveTab('shortcuts')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'shortcuts'
                    ? 'bg-brand-primary text-white shadow-xs'
                    : 'text-content-secondary hover:bg-white hover:text-content-primary border border-transparent hover:border-border-subtle'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Keyboard className="w-4 h-4" />
                  <span>Shortcuts</span>
                </span>
                <kbd
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    activeTab === 'shortcuts' ? 'bg-white/25 text-white' : 'bg-white text-content-primary border'
                  }`}
                >
                  ?
                </kbd>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('clinic')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'clinic'
                    ? 'bg-brand-primary text-white shadow-xs'
                    : 'text-content-secondary hover:bg-white hover:text-content-primary border border-transparent hover:border-border-subtle'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4" />
                  <span>Clinic Profile &amp; Fee</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('macros')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'macros'
                    ? 'bg-brand-primary text-white shadow-xs'
                    : 'text-content-secondary hover:bg-white hover:text-content-primary border border-transparent hover:border-border-subtle'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Pill className="w-4 h-4" />
                  <span>Presets &amp; Macros</span>
                </span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    activeTab === 'macros'
                      ? 'bg-white/20 text-white'
                      : 'bg-brand-primary-container text-brand-primary-dark'
                  }`}
                >
                  {dosageMacros.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('preferences')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'preferences'
                    ? 'bg-brand-primary text-white shadow-xs'
                    : 'text-content-secondary hover:bg-white hover:text-content-primary border border-transparent hover:border-border-subtle'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Sliders className="w-4 h-4" />
                  <span>Experience &amp; Data</span>
                </span>
              </button>
            </nav>

            <div className="pt-3 border-t border-border-subtle flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  if (confirm('Reset clinic settings, dosage macros, and audio to defaults?')) {
                    resetToDefaults();
                    setShowSavedFeedback(true);
                    setTimeout(() => setShowSavedFeedback(false), 2000);
                  }
                }}
                className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold text-content-secondary hover:text-reaction-aggravated hover:bg-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Defaults</span>
              </button>
            </div>
          </aside>

          {/* Right Main Content Panel */}
          <main className="md:col-span-8 p-5 sm:p-6 overflow-y-auto flex flex-col gap-5">
            {/* ========================================================= */}
            {/* TAB 1: KEYBOARD SHORTCUTS GUIDE */}
            {/* ========================================================= */}
            {activeTab === 'shortcuts' && (
              <div className="flex flex-col gap-4">
                {/* Search Bar + Live Key Indicator */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="relative flex items-center flex-1">
                    <Search className="w-4 h-4 text-content-secondary absolute left-3 pointer-events-none" />
                    <input
                      type="search"
                      value={shortcutSearch}
                      onChange={(e) => setShortcutSearch(e.target.value)}
                      placeholder="Filter shortcuts (e.g. F2, save, repeat, search)..."
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle text-xs text-content-primary font-medium placeholder:text-content-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>
                </div>

                {/* Shortcuts Grid by Categories */}
                <div className="flex flex-col gap-4">
                  {(['Navigation', 'Search', 'Consultation', 'Autocomplete'] as const).map((cat) => {
                    const itemsInCat = filteredShortcuts.filter((s) => s.category === cat);
                    if (itemsInCat.length === 0) return null;

                    return (
                      <div key={cat} className="flex flex-col gap-2">

                        <div className="grid grid-cols-1 gap-2">
                          {itemsInCat.map((item) => (
                            <div
                              key={item.id}
                              className="p-3 flex items-center justify-between gap-2 hover:bg-brand-surface transition-colors"
                            >
                              <div className="flex flex-col min-w-0">
                                <span className="text-xs font-bold text-content-primary truncate">
                                  {item.description}
                                </span>
                                <span className="text-[10px] text-content-secondary font-medium">
                                  Scope: {item.context}
                                </span>
                              </div>

                              <div className="flex items-center gap-1 shrink-0">
                                {item.keys.map((k, kIdx) => (
                                  <React.Fragment key={kIdx}>
                                    <kbd className="px-2 py-1 rounded-md text-xs font-mono font-bold bg-white text-content-primary min-w-7 text-center">
                                      {k}
                                    </kbd>
                                    {kIdx < item.keys.length - 1 && (
                                      <span className="text-xs text-content-secondary font-bold">+</span>
                                    )}
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ========================================================= */}
            {/* TAB 2: CLINIC PROFILE & BILLING */}
            {/* ========================================================= */}
            {activeTab === 'clinic' && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-brand-surface-subtle border border-border-subtle">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-border-subtle flex items-center justify-center p-1.5 shadow-2xs shrink-0">
                      <Image
                        src="/logos/nuskha-logomark-full-color.svg"
                        alt={clinicConfig.name}
                        width={36}
                        height={36}
                        className="w-9 h-9 object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display text-sm font-bold text-content-primary">
                        {clinicConfig.name}
                      </span>
                      <span className="text-xs text-content-secondary">
                        {clinicConfig.doctorName} · {clinicConfig.subtitle}
                      </span>
                    </div>
                  </div>
                  {showSavedFeedback && (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-reaction-improved bg-reaction-improved-container px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Saved
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-content-primary">Clinic Title</label>
                    <input
                      type="text"
                      value={clinicConfig.name}
                      onChange={(e) => {
                        updateClinicConfig({ name: e.target.value });
                        setShowSavedFeedback(true);
                        setTimeout(() => setShowSavedFeedback(false), 1500);
                      }}
                      className="px-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle text-xs font-semibold text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-content-primary">Doctor Name</label>
                    <input
                      type="text"
                      value={clinicConfig.doctorName}
                      onChange={(e) => {
                        updateClinicConfig({ doctorName: e.target.value });
                        setShowSavedFeedback(true);
                        setTimeout(() => setShowSavedFeedback(false), 1500);
                      }}
                      className="px-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle text-xs font-semibold text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-content-primary">Subtitle / Specialties</label>
                    <input
                      type="text"
                      value={clinicConfig.subtitle}
                      onChange={(e) => {
                        updateClinicConfig({ subtitle: e.target.value });
                        setShowSavedFeedback(true);
                        setTimeout(() => setShowSavedFeedback(false), 1500);
                      }}
                      className="px-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle text-xs font-semibold text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-content-primary">License / Registration</label>
                    <input
                      type="text"
                      value={clinicConfig.licenseNumber || ''}
                      onChange={(e) => {
                        updateClinicConfig({ licenseNumber: e.target.value });
                        setShowSavedFeedback(true);
                        setTimeout(() => setShowSavedFeedback(false), 1500);
                      }}
                      className="px-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle text-xs font-semibold text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-content-primary">Contact Phone</label>
                    <input
                      type="text"
                      value={clinicConfig.phone || ''}
                      onChange={(e) => {
                        updateClinicConfig({ phone: e.target.value });
                        setShowSavedFeedback(true);
                        setTimeout(() => setShowSavedFeedback(false), 1500);
                      }}
                      className="px-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle text-xs font-mono font-semibold text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-content-primary">Clinic Address</label>
                    <input
                      type="text"
                      value={clinicConfig.address || ''}
                      onChange={(e) => {
                        updateClinicConfig({ address: e.target.value });
                        setShowSavedFeedback(true);
                        setTimeout(() => setShowSavedFeedback(false), 1500);
                      }}
                      className="px-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle text-xs font-semibold text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-content-primary">
                        Default Fee
                      </label>
                      <input
                        type="number"
                        value={clinicConfig.defaultConsultationFee}
                        onChange={(e) => {
                          updateClinicConfig({ defaultConsultationFee: Number(e.target.value) });
                          setShowSavedFeedback(true);
                          setTimeout(() => setShowSavedFeedback(false), 1500);
                        }}
                        className="px-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle text-xs font-mono font-bold text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-content-primary">Currency Symbol</label>
                      <input
                        type="text"
                        value={clinicConfig.currency}
                        onChange={(e) => {
                          updateClinicConfig({ currency: e.target.value });
                          setShowSavedFeedback(true);
                          setTimeout(() => setShowSavedFeedback(false), 1500);
                        }}
                        className="px-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle text-xs font-bold text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-content-primary">
                        Default Course (Days)
                      </label>
                      <input
                        type="number"
                        value={clinicConfig.defaultCourseDays}
                        onChange={(e) => {
                          updateClinicConfig({ defaultCourseDays: Number(e.target.value) });
                          setShowSavedFeedback(true);
                          setTimeout(() => setShowSavedFeedback(false), 1500);
                        }}
                        className="px-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle text-xs font-mono font-bold text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================= */}
            {/* TAB 3: PRESETS & MACROS */}
            {/* ========================================================= */}
            {activeTab === 'macros' && (
              <div className="flex flex-col gap-4">

                {/* Add new macro */}
                <form onSubmit={handleAddMacroSubmit} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newMacroText}
                    onChange={(e) => setNewMacroText(e.target.value)}
                    placeholder="Enter new dosage macro (e.g. 5 drops BD in warm water)..."
                    className="flex-1 px-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle text-xs font-semibold text-content-primary placeholder:text-content-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-brand-primary text-white text-xs font-bold shadow-xs hover:bg-brand-primary-hover transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Preset</span>
                  </button>
                </form>

                {/* Macro List */}
                <div className="flex flex-col gap-2 pt-1">
                  <span className="text-xs font-bold text-content-secondary uppercase tracking-wider">
                    Active Macros ({dosageMacros.length})
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {dosageMacros.map((macro, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-brand-surface-subtle flex items-center justify-between gap-2"
                      >
                        <span className="text-xs font-bold text-content-primary truncate">
                          {macro}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeDosageMacro(macro)}
                          className="p-1 rounded text-content-secondary hover:text-reaction-aggravated hover:bg-white transition-colors cursor-pointer"
                          title="Remove macro"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================= */}
            {/* TAB 4: EXPERIENCE & PREFERENCES */}
            {/* ========================================================= */}
            {activeTab === 'preferences' && (
              <div className="flex flex-col gap-5">
                <div>
                  <h3 className="font-display text-sm font-bold text-content-primary">
                    Experience &amp; Data Management
                  </h3>
                  <p className="text-xs text-content-secondary">
                    Configure sensory feedback and export clinical records
                  </p>
                </div>

                {/* Audio Feedback Toggle */}
                <div className="p-4 rounded-xl bg-brand-surface-subtle flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white border border-border-subtle flex items-center justify-center text-brand-primary">
                      <Volume2 className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-content-primary">
                        Auditory Confirmation Chime
                      </span>
                      <span className="text-[11px] text-content-secondary font-medium">
                        Play subtle tone when pressing <kbd className="font-mono font-bold bg-white px-1 border rounded">Ctrl+Enter</kbd> to save
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleTestAudio}
                      className="px-2.5 py-1 rounded-lg bg-white border border-border-subtle text-xs font-bold text-content-primary hover:bg-brand-surface cursor-pointer"
                    >
                      Test
                    </button>
                    <input
                      type="checkbox"
                      checked={audioChimeEnabled}
                      onChange={(e) => setAudioChimeEnabled(e.target.checked)}
                      className="w-4 h-4 accent-brand-primary cursor-pointer"
                    />
                  </div>
                </div>

                {/* Single-Key Hotkeys Toggle */}
                <div className="p-4 rounded-xl bg-brand-surface-subtle flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white border border-border-subtle flex items-center justify-center text-brand-primary">
                      <Keyboard className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-content-primary">
                        Single-Key Reaction Selection
                      </span>
                      <span className="text-[11px] text-content-secondary font-medium">
                        Allow keys <kbd className="font-mono font-bold bg-white px-1 border rounded">1</kbd> to <kbd className="font-mono font-bold bg-white px-1 border rounded">5</kbd> to set remedy reaction without Alt key
                      </span>
                    </div>
                  </div>

                  <input
                    type="checkbox"
                    checked={singleKeyShortcutsEnabled}
                    onChange={(e) => setSingleKeyShortcutsEnabled(e.target.checked)}
                    className="w-4 h-4 accent-brand-primary cursor-pointer"
                  />
                </div>

                {/* Data Export Strip */}
                <div className="p-4 rounded-xl bg-brand-surface-subtle flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white border border-border-subtle flex items-center justify-center text-brand-primary">
                      <Download className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-content-primary">
                        Export Session Register (CSV)
                      </span>
                      <span className="text-[11px] text-content-secondary font-medium">
                        Download all recorded patient visits as a spreadsheet
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleExportCSV}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-primary text-white text-xs font-bold shadow-xs hover:bg-brand-primary-hover transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export CSV</span>
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
