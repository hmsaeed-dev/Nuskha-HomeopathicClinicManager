import { useEffect, RefObject } from 'react';

interface KeyboardShortcutsOptions {
  onOpenNewPatient?: () => void;
  onFocusSearch?: () => void;
  onCloseModals?: () => void;
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
  searchInputRef,
}: KeyboardShortcutsOptions) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      const isInputFocused =
        targetTag === 'input' || targetTag === 'textarea' || targetTag === 'select';

      // F2: Open New Patient Registration Walk-in Drawer
      if (e.key === 'F2') {
        e.preventDefault();
        onOpenNewPatient?.();
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
  }, [onOpenNewPatient, onFocusSearch, onCloseModals, searchInputRef]);
}
