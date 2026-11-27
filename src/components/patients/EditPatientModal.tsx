"use client";

import React, { useState } from "react";
import { X, UserCheck, MapPin, Phone, User, Calendar } from "lucide-react";
import { Gender, Patient, RelationType } from "@/types";
import {
  GenderOptions,
  LocalityOptions,
  RelationOptions,
} from "./PatientFormOptions";

interface EditPatientModalProps {
	patient: Patient | null;
	isOpen: boolean;
	onClose: () => void;
	onSave: (updatedPatient: Patient) => Promise<unknown> | unknown;
}

export const EditPatientModal: React.FC<EditPatientModalProps> = ({
	patient,
	isOpen,
	onClose,
	onSave,
}) => {
	if (!isOpen || !patient) return null;

	return (
		<EditPatientForm
			key={patient.id}
			patient={patient}
			onClose={onClose}
			onSave={onSave}
		/>
	);
};

interface EditPatientFormProps {
	patient: Patient;
	onClose: () => void;
	onSave: (updatedPatient: Patient) => Promise<unknown> | unknown;
}

const EditPatientForm: React.FC<EditPatientFormProps> = ({
	patient,
	onClose,
	onSave,
}) => {
	const [fullName, setFullName] = useState(patient.fullName);
	const [relationType, setRelationType] = useState<RelationType>(
		patient.relationType,
	);
	const [relativeName, setRelativeName] = useState(patient.relativeName);
	const [age, setAge] = useState<number>(patient.age);
	const [gender, setGender] = useState<Gender>(patient.gender);
	const [phone, setPhone] = useState(patient.phone);
	const [locality, setLocality] = useState(patient.locality);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [saveError, setSaveError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (isSubmitting || !fullName.trim()) return;

		const updated: Patient = {
			...patient,
			fullName: fullName.trim(),
			relationType,
			relativeName: relativeName.trim(),
			age: Number(age) || patient.age,
			gender,
			phone: phone.trim(),
			locality: locality.trim() || patient.locality,
		};

		setIsSubmitting(true);
		setSaveError(null);
		try {
			await onSave(updated);
			onClose();
		} catch (err) {
			setSaveError(
				err instanceof Error ? err.message : "Failed to save patient updates.",
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
			<div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-border-subtle flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
				{/* Modal Header */}
				<header className="px-6 py-4 bg-brand-surface-subtle flex items-center justify-between gap-4 border-b border-border-subtle">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center font-bold shadow-xs">
							<UserCheck className="w-5 h-5" />
						</div>
						<div className="flex flex-col">
							<div className="flex items-center gap-2">
								<h2 className="font-display text-base font-bold text-content-primary">
									Edit Patient Details
								</h2>
								<span className="font-mono text-xs font-bold text-brand-primary bg-brand-primary-container px-2 py-0.5 rounded-md">
									{patient.mrn}
								</span>
							</div>
							<p className="text-xs text-content-secondary font-medium">
								Update demographic profile &amp; contact info
							</p>
						</div>
					</div>

					<button
						type="button"
						onClick={onClose}
						className="p-1.5 rounded-full text-content-secondary hover:bg-white hover:text-content-primary transition-colors cursor-pointer"
						title="Close (Esc)"
					>
						<X className="w-5 h-5" />
					</button>
				</header>

				{/* Modal Form */}
				<form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
					{/* Full Name */}
					<div className="flex flex-col gap-1.5">
						<label
							htmlFor="edit-fullname"
							className="text-xs font-bold text-content-primary flex items-center gap-1.5"
						>
							<User className="w-3.5 h-3.5 text-content-secondary" />
							Full Name
						</label>
						<input
							id="edit-fullname"
							type="text"
							required
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							className="w-full px-3 py-2 text-xs rounded-xl border border-border-subtle bg-white text-content-primary focus:border-brand-primary focus:outline-none transition-colors"
							placeholder="Patient full name"
						/>
					</div>

					{/* Relation & Relative Name */}
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
						<div className="flex flex-col gap-1.5">
							<label
								htmlFor="edit-relation"
								className="text-xs font-bold text-content-primary"
							>
								Relation
							</label>
							<select
								id="edit-relation"
								value={relationType}
								onChange={(e) =>
									setRelationType(e.target.value as RelationType)
								}
								className="w-full px-3 py-2 text-xs rounded-xl border border-border-subtle bg-white text-content-primary focus:border-brand-primary focus:outline-none transition-colors"
							>
								<RelationOptions />
							</select>
						</div>

						<div className="sm:col-span-2 flex flex-col gap-1.5">
							<label
								htmlFor="edit-relativename"
								className="text-xs font-bold text-content-primary"
							>
								Guardian / Spouse Name
							</label>
							<input
								id="edit-relativename"
								type="text"
								required
								value={relativeName}
								onChange={(e) => setRelativeName(e.target.value)}
								className="w-full px-3 py-2 text-xs rounded-xl border border-border-subtle bg-white text-content-primary focus:border-brand-primary focus:outline-none transition-colors"
								placeholder="Father / Husband name"
							/>
						</div>
					</div>

					{/* Age & Gender */}
					<div className="grid grid-cols-2 gap-3">
						<div className="flex flex-col gap-1.5">
							<label
								htmlFor="edit-age"
								className="text-xs font-bold text-content-primary flex items-center gap-1.5"
							>
								<Calendar className="w-3.5 h-3.5 text-content-secondary" />
								Age (Years)
							</label>
							<input
								id="edit-age"
								type="number"
								min="0"
								max="125"
								required
								value={age}
								onChange={(e) => setAge(Number(e.target.value))}
								className="w-full px-3 py-2 text-xs rounded-xl border border-border-subtle bg-white text-content-primary focus:border-brand-primary focus:outline-none transition-colors font-mono"
							/>
						</div>

						<div className="flex flex-col gap-1.5">
							<label
								htmlFor="edit-gender"
								className="text-xs font-bold text-content-primary"
							>
								Cohort / Gender
							</label>
							<select
								id="edit-gender"
								value={gender}
								onChange={(e) =>
									setGender(e.target.value as Gender)
								}
								className="w-full px-3 py-2 text-xs rounded-xl border border-border-subtle bg-white text-content-primary focus:border-brand-primary focus:outline-none transition-colors"
							>
								<GenderOptions />
							</select>
						</div>
					</div>

					{/* Phone & Locality */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						<div className="flex flex-col gap-1.5">
							<label
								htmlFor="edit-phone"
								className="text-xs font-bold text-content-primary flex items-center gap-1.5"
							>
								<Phone className="w-3.5 h-3.5 text-content-secondary" />
								Phone
							</label>
							<input
								id="edit-phone"
								type="text"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="w-full px-3 py-2 text-xs rounded-xl border border-border-subtle bg-white text-content-primary focus:border-brand-primary focus:outline-none transition-colors font-mono"
								placeholder="03xx-xxxxxxx"
							/>
						</div>

						<div className="flex flex-col gap-1.5">
							<label
								htmlFor="edit-locality"
								className="text-xs font-bold text-content-primary flex items-center gap-1.5"
							>
								<MapPin className="w-3.5 h-3.5 text-content-secondary" />
								Locality / Area
							</label>
							<input
								id="edit-locality"
								type="text"
								list="edit-locality-presets"
								value={locality}
								onChange={(e) => setLocality(e.target.value)}
								className="w-full px-3 py-2 text-xs rounded-xl border border-border-subtle bg-white text-content-primary focus:border-brand-primary focus:outline-none transition-colors"
								placeholder="e.g. Taxila Cantt"
							/>
							<LocalityOptions listId="edit-locality-presets" />
						</div>
					</div>

					{/* Modal Footer Actions */}
					{saveError && (
						<div className="px-3 py-2 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
							{saveError}
						</div>
					)}
					<div className="flex items-center justify-end gap-2.5 pt-4 border-t border-border-subtle">
						<button
							type="button"
							disabled={isSubmitting}
							onClick={onClose}
							className="px-4 py-2 rounded-xl bg-brand-surface hover:bg-brand-surface-subtle text-content-secondary hover:text-content-primary text-xs font-bold transition-all cursor-pointer disabled:opacity-50"
						>
							Cancel
						</button>
						<button
							type="submit"
							disabled={isSubmitting}
							className="px-5 py-2 rounded-xl bg-brand-primary hover:bg-brand-primary-dark text-white text-xs font-bold shadow-xs active:scale-98 transition-all cursor-pointer disabled:opacity-60"
						>
							{isSubmitting ? "Saving..." : "Save Changes"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
