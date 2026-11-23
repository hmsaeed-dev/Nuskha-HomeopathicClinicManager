'use client';

import React from 'react';
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
  const filteredRemedies = COMMON_REMEDIES.filter((remedy) =>
    remedy.toLowerCase().includes(prescription.remedy.toLowerCase())
  ).slice(0, 5);

  return (
    <div className="p-3.5 rounded-xl bg-brand-surface-subtle shadow-2xs flex flex-col gap-2.5">
      {/* Row 1: Remedy + Potency + Vehicle + Delete */}
      <div className="grid grid-cols-12 gap-2 items-center">
        {/* Remedy Name Input with Autocomplete */}
        <div className="col-span-5 relative">
          <div className="flex items-center gap-1.5 px-2.5 py-2 bg-white rounded-lg shadow-2xs focus-within:ring-2 focus-within:ring-brand-primary">
            {prescription.vehicle.includes('Drops') ? (
              <Droplet className="w-4 h-4 text-brand-primary shrink-0" />
            ) : (
              <Pill className="w-4 h-4 text-brand-primary shrink-0" />
            )}
            <input
              type="text"
              value={prescription.remedy}
              onFocus={onOpenSearch}
              onChange={(e) => onUpdateField('remedy', e.target.value)}
              className="w-full text-xs font-semibold text-content-primary bg-transparent border-0 p-0 focus:outline-none"
              placeholder="Medicine Name"
            />
          </div>

          {/* Autocomplete Dropdown */}
          {isSearchActive && filteredRemedies.length > 0 && (
            <div className="absolute z-20 left-0 right-0 top-full mt-1 bg-white rounded-xl shadow-lg max-h-36 overflow-y-auto p-1 border border-border-subtle">
              {filteredRemedies.map((remedyName) => (
                <button
                  key={remedyName}
                  type="button"
                  onMouseDown={() => {
                    onUpdateField('remedy', remedyName);
                    onCloseSearch();
                  }}
                  className="w-full text-left px-3 py-1.5 text-xs hover:bg-brand-primary-container hover:text-brand-primary font-medium rounded-md"
                >
                  {remedyName}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Potency Dropdown */}
        <div className="col-span-3">
          <select
            value={prescription.potency}
            onChange={(e) => onUpdateField('potency', e.target.value)}
            className="w-full px-2 py-2 rounded-lg bg-white shadow-2xs text-xs font-mono font-bold text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
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
            className="w-full px-2 py-2 rounded-lg bg-white shadow-2xs text-[11px] font-medium text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
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
            className="p-1 rounded text-content-muted hover:text-reaction-aggravated hover:bg-white transition-colors"
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
          placeholder="Dosage (e.g. 3 drops BD in water)"
          className="w-full px-2.5 py-1.5 rounded-lg bg-white shadow-2xs text-xs text-content-primary placeholder:text-content-muted focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />

        {/* Presets */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] text-content-muted font-medium">Presets:</span>
          {DOSAGE_MACROS.map((macro) => (
            <button
              key={macro}
              type="button"
              onClick={() => onUpdateField('dosage', macro)}
              className="text-[10px] px-2 py-0.5 rounded-full bg-white hover:bg-brand-primary-container text-brand-primary shadow-2xs transition-colors"
            >
              {macro}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
