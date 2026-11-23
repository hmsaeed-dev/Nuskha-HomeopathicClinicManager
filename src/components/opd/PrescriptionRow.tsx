'use client';

import React, { useState } from 'react';
import { Droplet, Pill, Trash2 } from 'lucide-react';
import { PrescriptionItem, DispensingVehicle } from '@/types';
import {
  COMMON_REMEDIES,
  COMMON_POTENCIES,
  DISPENSING_VEHICLES,
  DOSAGE_MACROS,
} from '@/constants/clinical';

interface PrescriptionRowProps {
  prescription: PrescriptionItem;
  isSearchActive: boolean;
  onOpenSearch: () => void;
  onCloseSearch: () => void;
  onUpdateField: (field: keyof PrescriptionItem, value: string | boolean) => void;
  onRemove: () => void;
}

export const PrescriptionRow: React.FC<PrescriptionRowProps> = ({
  prescription,
  isSearchActive,
  onOpenSearch,
  onCloseSearch,
  onUpdateField,
  onRemove,
}) => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const filteredRemedies = COMMON_REMEDIES.filter((remedy) =>
    remedy.toLowerCase().includes(prescription.remedy.toLowerCase())
  ).slice(0, 6);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateField('remedy', e.target.value);
    setHighlightedIndex(0);
    if (!isSearchActive) onOpenSearch();
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isSearchActive || filteredRemedies.length === 0) {
      if (e.key === 'ArrowDown') {
        onOpenSearch();
      }
      return;
    }

    // Keyboard navigation through remedy suggestions
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % filteredRemedies.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev - 1 + filteredRemedies.length) % filteredRemedies.length);
    } else if (e.key === 'Enter' || e.key === 'Tab') {
      if (filteredRemedies[highlightedIndex]) {
        e.preventDefault();
        onUpdateField('remedy', filteredRemedies[highlightedIndex]);
        onCloseSearch();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onCloseSearch();
    }
  };

  return (
    <div className="p-3.5 rounded-xl bg-brand-surface-subtle shadow-2xs flex flex-col gap-2.5 border border-border-subtle">
      {/* Row 1: Remedy + Potency + Vehicle + Delete */}
      <div className="grid grid-cols-12 gap-2 items-center">
        {/* Remedy Name Input with Autocomplete */}
        <div className="col-span-5 relative">
          <div className="flex items-center gap-1.5 px-2.5 py-2 bg-white rounded-lg shadow-2xs border border-border-subtle focus-within:ring-2 focus-within:ring-brand-primary focus-within:border-brand-primary">
            {prescription.vehicle.includes('Drops') ? (
              <Droplet className="w-4 h-4 text-brand-primary shrink-0" />
            ) : (
              <Pill className="w-4 h-4 text-brand-primary shrink-0" />
            )}
            <input
              type="text"
              value={prescription.remedy}
              onFocus={onOpenSearch}
              onKeyDown={handleInputKeyDown}
              onChange={handleInputChange}
              className="w-full text-xs font-bold text-content-primary bg-transparent border-0 p-0 focus:outline-none placeholder:text-content-secondary placeholder:font-normal"
              placeholder="Medicine Name (↓ browse)"
            />
          </div>

          {/* Autocomplete Dropdown with Keyboard Highlight */}
          {isSearchActive && filteredRemedies.length > 0 && (
            <div className="absolute z-20 left-0 right-0 top-full mt-1 bg-white rounded-xl shadow-xl max-h-48 overflow-y-auto p-1 border-2 border-border-strong">
              {filteredRemedies.map((remedyName, index) => {
                const isHighlighted = index === highlightedIndex;

                return (
                  <button
                    key={remedyName}
                    type="button"
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onMouseDown={() => {
                      onUpdateField('remedy', remedyName);
                      onCloseSearch();
                    }}
                    className={`w-full text-left px-3 py-2 text-xs font-bold rounded-md transition-colors cursor-pointer flex items-center justify-between ${
                      isHighlighted
                        ? 'bg-brand-primary-container text-brand-primary-dark'
                        : 'text-content-primary hover:bg-brand-surface-subtle'
                    }`}
                  >
                    <span>{remedyName}</span>
                    {isHighlighted && (
                      <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-brand-primary text-white font-bold">
                        ↵ select
                      </kbd>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Potency Dropdown */}
        <div className="col-span-3">
          <select
            value={prescription.potency}
            onChange={(e) => onUpdateField('potency', e.target.value)}
            className="w-full px-2 py-2 rounded-lg bg-white shadow-2xs text-xs font-mono font-bold text-brand-primary border border-border-subtle focus:outline-none focus:ring-2 focus:ring-brand-primary cursor-pointer"
          >
            {COMMON_POTENCIES.map((potency) => (
              <option key={potency} value={potency}>
                {potency}
              </option>
            ))}
          </select>
        </div>

        {/* Vehicle Selector */}
        <div className="col-span-3">
          <select
            value={prescription.vehicle}
            onChange={(e) => onUpdateField('vehicle', e.target.value as DispensingVehicle)}
            className="w-full px-2 py-2 rounded-lg bg-white shadow-2xs text-[11px] font-bold text-content-primary border border-border-subtle focus:outline-none focus:ring-2 focus:ring-brand-primary cursor-pointer"
          >
            {DISPENSING_VEHICLES.map((vehicle) => (
              <option key={vehicle} value={vehicle}>
                {vehicle}
              </option>
            ))}
          </select>
        </div>

        {/* Remove Remedy */}
        <div className="col-span-1 flex justify-end">
          <button
            type="button"
            onClick={onRemove}
            className="p-1 rounded text-content-secondary hover:text-reaction-aggravated hover:bg-white transition-colors cursor-pointer"
            title="Remove medicine"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Row 2: Dosage Input + Presets */}
      <div className="flex flex-col gap-1.5">
        <input
          type="text"
          value={prescription.dosage}
          onChange={(e) => onUpdateField('dosage', e.target.value)}
          placeholder="Dosage instructions (e.g. 3 drops BD in water)"
          className="w-full px-3 py-1.5 rounded-lg bg-white shadow-2xs text-xs font-semibold text-content-primary placeholder:text-content-secondary placeholder:font-normal border border-border-subtle focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />

        {/* Presets */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] text-content-primary font-bold">Presets:</span>
          {DOSAGE_MACROS.map((macro) => (
            <button
              key={macro}
              type="button"
              onClick={() => onUpdateField('dosage', macro)}
              className="text-[11px] px-2.5 py-0.5 rounded-full bg-white hover:bg-brand-primary-container text-brand-primary-dark font-bold shadow-2xs transition-colors border border-border-subtle cursor-pointer"
            >
              {macro}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
