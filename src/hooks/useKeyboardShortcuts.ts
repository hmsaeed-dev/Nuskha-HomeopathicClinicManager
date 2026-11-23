import { useEffect, RefObject } from 'react';

interface KeyboardShortcutsOptions {
  onOpenNewPatient?: () => void;
  onFocusSearch?: () => void;
  onCloseModals?: () => void;
  onOpenSettings?: () => void;
  onSelectTab?: (tab: 'opd' | 'analytics' | 'patients') => void;
  searchInputRef?: RefObject<HTMLInputElement | null>;
}

/**
 * Global keyboard shortcuts hook for clinical rapid-entry workflow.
 * Separation of concerns: isolates event listener lifecycle from UI rendering.
 */
export function useKeyboardShortcuts({
  onOpenNewPatient,
  onFocusSearch,
  onCloseModals,
  onOpenSettings,
  onSelectTab,
  searchInputRef,
}: KeyboardShortcutsOptions) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      const isInputFocused =
        targetTag === 'input' || targetTag === 'textarea' || targetTag === 'select';

      // ?: Open Keyboard Shortcuts Cheat Sheet & Settings
      if ((e.key === '?' || (e.shiftKey && e.key === '/')) && !isInputFocused) {
        e.preventDefault();
        onOpenSettings?.();
        return;
      }

      // F1: Switch to OPD Workspace
      if (e.key === 'F1') {
        e.preventDefault();
        onSelectTab?.('opd');
        return;
      }

      // F2: Open New Patient Registration Walk-in Drawer
      if (e.key === 'F2') {
        e.preventDefault();
        onOpenNewPatient?.();
        return;
      }

      // F3: Switch to Daily Register
      if (e.key === 'F3') {
        e.preventDefault();
        onSelectTab?.('analytics');
        return;
      }

      // F4: Switch to Patients Archive
      if (e.key === 'F4') {
        e.preventDefault();
        onSelectTab?.('patients');
        return;
      }

      // Alt + S or '/' (when not already typing): Focus Search Bar
      if (
        (e.altKey && (e.key === 's' || e.key === 'S')) ||
        (!isInputFocused && e.key === '/')
      ) {
        e.preventDefault();
        if (onFocusSearch) {
          onFocusSearch();
        } else if (searchInputRef?.current) {
          searchInputRef.current.focus();
          searchInputRef.current.select();
        }
        return;
      }

      // Escape: Dismiss drawers / modals
      if (e.key === 'Escape') {
        onCloseModals?.();
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenNewPatient, onFocusSearch, onCloseModals, onOpenSettings, onSelectTab, searchInputRef]);
}
