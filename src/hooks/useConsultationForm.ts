import { useState, useCallback } from 'react';
import { Patient, ReactionType, PrescriptionItem, DispensingVehicle } from '@/types';
import { CLINIC_CONFIG } from '@/config/clinic.config';
import { DEFAULT_INITIAL_PRESCRIPTIONS } from '@/constants/clinical';

interface UseConsultationFormProps {
  patient: Patient;
}

export function useConsultationForm({ patient }: UseConsultationFormProps) {
  const [reaction, setReaction] = useState<ReactionType>('Improved');
  const [symptoms, setSymptoms] = useState<string>(
    'Migraine 70% better; occasional morning gastric acidity persists after heavy meals.'
  );
  const [durationDays, setDurationDays] = useState<number>(CLINIC_CONFIG.defaultCourseDays);
  const [prescriptions, setPrescriptions] = useState<PrescriptionItem[]>(
    DEFAULT_INITIAL_PRESCRIPTIONS
  );
  const [doctorNotes, setDoctorNotes] = useState<string>(
    'Continue Bryonia 200C for 2 weeks; review if acidity persists.'
  );
  const [fee, setFee] = useState<number>(CLINIC_CONFIG.defaultConsultationFee);
  const [feeStatus, setFeeStatus] = useState<'Paid' | 'Free' | 'Due'>('Paid');
  const [activeRemedySearchIndex, setActiveRemedySearchIndex] = useState<number | null>(null);

  // Repeat Previous Prescription handler
  const handleRepeatLastRx = useCallback(() => {
    if (patient.pastVisits && patient.pastVisits.length > 0) {
      const lastVisit = patient.pastVisits[0];
      if (lastVisit.prescriptions && lastVisit.prescriptions.length > 0) {
        setPrescriptions(
          lastVisit.prescriptions.map((rx, idx) => ({
            ...rx,
            id: `rx-repeat-${Date.now()}-${idx}`,
            isRepeat: true,
          }))
        );
      }
    }
  }, [patient.pastVisits]);

  // Add new remedy row
  const handleAddRemedy = useCallback(() => {
    setPrescriptions((prev) => [
      ...prev,
      {
        id: `rx-${Date.now()}`,
        remedy: '',
        potency: '30C',
        vehicle: 'Drops (Water)' as DispensingVehicle,
        dosage: '3 drops BD in water',
      },
    ]);
  }, []);

  // Remove a remedy row
  const handleRemoveRemedy = useCallback((index: number) => {
    setPrescriptions((prev) => prev.filter((_, i) => i !== index));
  }, []);

  // Update a prescription field
  const handleUpdateRemedy = useCallback(
    (index: number, field: keyof PrescriptionItem, value: string | boolean) => {
      setPrescriptions((prev) =>
        prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
      );
    },
    []
  );

  // Apply quick dosage macro
  const handleApplyDosageMacro = useCallback((index: number, macro: string) => {
    setPrescriptions((prev) =>
      prev.map((item, i) => (i === index ? { ...item, dosage: macro } : item))
    );
  }, []);

  return {
    reaction,
    setReaction,
    symptoms,
    setSymptoms,
    durationDays,
    setDurationDays,
    prescriptions,
    setPrescriptions,
    doctorNotes,
    setDoctorNotes,
    fee,
    setFee,
    feeStatus,
    setFeeStatus,
    activeRemedySearchIndex,
    setActiveRemedySearchIndex,
    handleRepeatLastRx,
    handleAddRemedy,
    handleRemoveRemedy,
    handleUpdateRemedy,
    handleApplyDosageMacro,
  };
}
