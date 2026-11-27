"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
	Search,
	MapPin,
	Calendar,
	ArrowRight,
	ArrowUpRight,
	Clock,
	Activity,
	CheckCircle2,
	Pill,
	FileText,
	UserCheck,
	Phone,
	Edit3,
	Trash2,
} from "lucide-react";
import { Patient } from "@/types";
import { usePatientsContext } from "@/context/PatientsContext";
import { EditPatientModal } from "@/components/patients/EditPatientModal";
import { REACTION_CONFIG } from "@/constants/clinical";
import { formatCurrency } from "@/utils/formatters";
import { playSuccessChime } from "@/utils/sound";
import { HistoryVisitCard } from "@/components/ui/clinical";

interface PatientsViewProps {
	patients: Patient[];
	onSelectPatientForOPD: (patient: Patient) => void;
	onOpenVisit?: (patientId: string, visitId: string) => void;
}

type FilterTab = "all" | "chronic" | "recent" | "dues";

export const PatientsView: React.FC<PatientsViewProps> = ({
	patients,
	onSelectPatientForOPD,
	onOpenVisit,
}) => {
	const { updatePatient, deletePatient, settlePatientDues } = usePatientsContext();
	const [searchQuery, setSearchQuery] = useState("");
	const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
	const [selectedPatientId, setSelectedPatientId] = useState<string>(
		patients[0]?.id || "",
	);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

	// Compute stats and filtered patient list
	const filteredPatients = useMemo(() => {
		return patients.filter((patient) => {
			// 1. Filter Tab
			if (activeFilter === "chronic" && patient.totalVisits < 3)
				return false;
			if (
				activeFilter === "recent" &&
				!patient.lastVisitDate.toLowerCase().includes("nov") &&
				patient.lastVisitDate !== "Today"
			)
				return false;
			if (
				activeFilter === "dues" &&
				!patient.pastVisits.some((v) => v.feeStatus === "Due")
			)
				return false;

			// 2. Search Query
			const q = searchQuery.toLowerCase().trim();
			if (!q) return true;

			const matchesName = patient.fullName.toLowerCase().includes(q);
			const matchesRelative = patient.relativeName
				.toLowerCase()
				.includes(q);
			const matchesPhone = patient.phone.includes(q);
			const matchesLocality = patient.locality.toLowerCase().includes(q);
			const matchesComplaint = patient.chiefComplaints?.some((c) =>
				c.name.toLowerCase().includes(q),
			);

			return (
				matchesName ||
				matchesRelative ||
				matchesPhone ||
				matchesLocality ||
				matchesComplaint
			);
		});
	}, [patients, searchQuery, activeFilter]);

	// Selected patient for dossier view
	const selectedPatient = useMemo(() => {
		return (
			patients.find((p) => p.id === selectedPatientId) ||
			filteredPatients[0] ||
			patients[0]
		);
	}, [patients, selectedPatientId, filteredPatients]);

	// Calculate lifetime financial ledger for selected patient
	const totalPaid = useMemo(() => {
		if (!selectedPatient) return 0;
		return selectedPatient.pastVisits
			.filter((v) => v.feeStatus === "Paid")
			.reduce((sum, v) => sum + v.fee, 0);
	}, [selectedPatient]);

	const totalDue = useMemo(() => {
		if (!selectedPatient) return 0;
		return selectedPatient.pastVisits
			.filter((v) => v.feeStatus === "Due")
			.reduce((sum, v) => sum + v.fee, 0);
	}, [selectedPatient]);

	// Unique remedies prescribed across lifetime
	const lifetimeRemedies = useMemo(() => {
		if (!selectedPatient) return [];
		const remedySet = new Set<string>();
		selectedPatient.pastVisits.forEach((v) => {
			v.prescriptions.forEach((rx) => {
				remedySet.add(`${rx.remedy} ${rx.potency}`);
			});
		});
		return Array.from(remedySet);
	}, [selectedPatient]);

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch h-[calc(100vh-100px)]">
			{/* ============================================================== */}
			{/* LEFT PANE (40% width / 5 cols): Master Patient Directory Roster */}
			{/* ============================================================== */}
			<aside className="lg:col-span-5 rounded-2xl p-4 flex flex-col gap-4 h-full overflow-hidden">
				{/* Top Search & Filter Bar */}
				<div className="flex flex-col gap-2.5 shrink-0">
					<div className="flex items-center justify-between">
						<h2 className="font-display text-base font-bold text-content-primary">
							Patient Archive
						</h2>
						<span className="text-xs text-content-secondary font-bold">
							{filteredPatients.length} of {patients.length}{" "}
							patients
						</span>
					</div>

					<div className="relative flex items-center">
						<Search className="w-4 h-4 text-content-secondary absolute left-3 pointer-events-none" />
						<input
							type="search"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder="Search by name, phone, or locality..."
							className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-border-subtle text-sm text-content-primary placeholder:text-content-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all shadow-2xs"
						/>
					</div>

					{/* Filter Pills */}
					<div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 text-xs">
						<button
							type="button"
							onClick={() => setActiveFilter("all")}
							className={`px-3 py-1 rounded-full font-bold transition-all shrink-0 cursor-pointer ${
								activeFilter === "all"
									? "bg-brand-primary text-white shadow-2xs"
									: "bg-white text-content-secondary hover:bg-white/90"
							}`}
						>
							All ({patients.length})
						</button>
						<button
							type="button"
							onClick={() => setActiveFilter("chronic")}
							className={`px-3 py-1 rounded-full font-bold transition-all shrink-0 cursor-pointer ${
								activeFilter === "chronic"
									? "bg-brand-primary text-white shadow-2xs"
									: "bg-white text-content-secondary hover:bg-white/90"
							}`}
						>
							Chronic (3+ visits)
						</button>
						<button
							type="button"
							onClick={() => setActiveFilter("recent")}
							className={`px-3 py-1 rounded-full font-bold transition-all shrink-0 cursor-pointer ${
								activeFilter === "recent"
									? "bg-brand-primary text-white shadow-2xs"
									: "bg-white text-content-secondary hover:bg-white/90"
							}`}
						>
							Recent Visits
						</button>
						<button
							type="button"
							onClick={() => setActiveFilter("dues")}
							className={`px-3 py-1 rounded-full font-bold transition-all shrink-0 cursor-pointer ${
								activeFilter === "dues"
									? "bg-reaction-aggravated text-white shadow-2xs"
									: "bg-white text-content-secondary hover:bg-white/90"
							}`}
						>
							With Dues
						</button>
					</div>
				</div>

				{/* Patients Roster List */}
				<div className="flex flex-col gap-2 overflow-y-auto pr-1 flex-1">
					{filteredPatients.length === 0 ? (
						<div className="text-center py-12 text-xs text-content-secondary font-medium bg-white rounded-xl p-5 shadow-2xs">
							No patient records found matching your filter.
						</div>
					) : (
						filteredPatients.map((patientItem) => {
							const isSelected =
								patientItem.id === selectedPatient?.id;

							return (
								<div
									key={patientItem.id}
									role="button"
									tabIndex={0}
									onClick={() =>
										setSelectedPatientId(patientItem.id)
									}
									onKeyDown={(event) => {
										if (event.key === "Enter" || event.key === " ") {
											event.preventDefault();
											setSelectedPatientId(patientItem.id);
										}
									}}
									className={`group p-3 rounded-xl flex items-center gap-2.5 cursor-pointer transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
										isSelected
											? "bg-brand-primary text-white shadow-md"
											: "bg-white text-content-primary hover:bg-white/95 shadow-2xs"
									}`}
								>
									{/* Vertical Brand Accent Indicator Bar */}
									<div
										className={`w-1.5 self-stretch rounded-full shrink-0 ${
											isSelected
												? "bg-white"
												: "bg-brand-primary"
										}`}
									/>

									<button
										type="button"
										onClick={(event) => {
											event.stopPropagation();
											onSelectPatientForOPD(patientItem);
										}}
										title="Open in OPD"
										aria-label={`Open ${patientItem.fullName} in OPD`}
										className={`shrink-0 p-1 rounded-lg opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity ${
											isSelected
												? "text-white hover:bg-white/20"
												: "text-brand-primary hover:bg-brand-primary-container"
										}`}
									>
										<ArrowUpRight className="w-4 h-4" />
									</button>

									<div className="flex-1 min-w-0 flex flex-col">
										{/* Patient Name & Age Chip */}
										<div className="flex items-center justify-between">
											<span
												className={`font-display text-lg font-bold truncate ${
													isSelected
														? "text-white"
														: "text-content-primary"
												}`}
											>
												{patientItem.fullName}
											</span>
											<span
												className={`text-[11px] font-bold px-2 py-0.5 rounded shrink-0 ${
													isSelected
														? "bg-white/25 text-white"
														: "bg-brand-primary-container text-brand-primary-dark"
												}`}
											>
												{patientItem.age} Y
											</span>
										</div>

										{/* Relation & Locality */}
										<div
											className={`text-sm font-medium ${
												isSelected
													? "text-white"
													: "text-content-secondary"
											}`}
										>
											<p className="font-bold">
												{patientItem.relationType}{" "}
												{patientItem.relativeName}
											</p>
											<p className="pt-1.5 font-light text-xs flex items-center gap-1">
												<MapPin className="w-4 h-4 shrink-0" />
												<span>{patientItem.locality}</span>
											</p>
										</div>
									</div>
								</div>
							);
						})
					)}
				</div>
			</aside>

			{/* ============================================================== */}
			{/* RIGHT PANE (60% width / 7 cols): Patient Dossier & Case Archive */}
			{/* ============================================================== */}
			<main className="lg:col-span-7 rounded-2xl bg-white p-5 sm:p-6 shadow-xs flex flex-col gap-5 h-full overflow-y-auto">
				{selectedPatient ? (
					<>
						{/* 1. Header Card (Patient Identity in Brand Hero Dark Green) */}
						<div
							className="rounded-2xl bg-brand-primary-dark text-white p-5 shadow-sm flex flex-col gap-4 shrink-0 transition-colors duration-200"
						>
							<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
								<div className="flex flex-col gap-1">
									<div className="flex items-center gap-2.5 flex-wrap">
										<h1 className="font-display text-2xl font-bold tracking-tight text-white">
											{selectedPatient.fullName}
										</h1>
										<span
											className="px-2 py-0.5 rounded-md font-mono text-xs font-bold bg-white/20 border border-white/25 text-white"
										>
											{selectedPatient.age} yrs
										</span>
									</div>

									<p
										className="text-xs text-white/80 flex items-center gap-2 flex-wrap font-medium"
									>
										<span className="font-bold text-white">
											{selectedPatient.relationType}{" "}
											{selectedPatient.relativeName}
										</span>
										<span>·</span>
										<span className="flex items-center gap-1 font-semibold">
											<MapPin
												className="w-3.5 h-3.5 text-brand-primary-light"
											/>
											{selectedPatient.locality}
										</span>
										<span>·</span>
										<span className="flex items-center gap-1 font-mono font-bold">
											<Phone
												className="w-3.5 h-3.5 text-brand-primary-light"
											/>
											{selectedPatient.phone}
										</span>
									</p>
								</div>

								<div className="flex items-center gap-2 shrink-0 flex-wrap">
									{/* 1-Click Settle Dues Action */}
									{totalDue > 0 && (
										<button
											type="button"
											onClick={async () => {
												try {
													await settlePatientDues(selectedPatient.id);
													playSuccessChime();
												} catch (err) {
													console.error("Failed to settle patient dues:", err);
												}
											}}
											className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-white text-xs font-bold shadow-md transition-all active:scale-98 cursor-pointer animate-in fade-in"
											title={`Click to settle outstanding dues of ${formatCurrency(totalDue)}`}
										>
											<CheckCircle2 className="w-3.5 h-3.5" />
											<span>Settle Due: {formatCurrency(totalDue)}</span>
										</button>
									)}

									{/* Edit Button */}
									<button
										type="button"
										onClick={() => setIsEditModalOpen(true)}
										className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-all active:scale-98 cursor-pointer"
										title="Edit Patient Information"
									>
										<Edit3 className="w-3.5 h-3.5" />
										<span>Edit</span>
									</button>

									{/* Delete Button */}
									<button
										type="button"
										onClick={() => setIsDeleteConfirmOpen(true)}
										className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/20 hover:bg-rose-600 text-white text-xs font-bold transition-all active:scale-98 cursor-pointer"
										title="Delete Patient Record"
									>
										<Trash2 className="w-3.5 h-3.5" />
									</button>

									{/* Direct Action: Start OPD Consultation */}
									<button
										type="button"
										onClick={() =>
											onSelectPatientForOPD(selectedPatient)
										}
										className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-content-primary hover:bg-brand-surface text-xs font-bold shadow-md transition-all active:scale-98 shrink-0 cursor-pointer"
									>
										<UserCheck className="w-4 h-4 text-brand-primary" />
										<span>Consultation</span>
										<ArrowRight className="w-3.5 h-3.5 text-brand-primary" />
									</button>
								</div>
							</div>

							{/* Active Chronic Complaints Badges */}
							{selectedPatient.chiefComplaints &&
								selectedPatient.chiefComplaints.length > 0 && (
									<div className="flex items-center gap-2 flex-wrap pt-2">
										<span
											className="text-[11px] font-bold text-brand-primary-light"
										>
											Active Complaints:
										</span>
										{selectedPatient.chiefComplaints.map(
											(cc) => (
												<span
													key={cc.id}
													className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/15 text-xs text-white"
												>
													<span className="font-bold">
														{cc.name}
													</span>
													{cc.duration && (
														<span
															className="text-[10px] font-medium text-brand-primary-light"
														>
															({cc.duration})
														</span>
													)}
													<span
														className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${
															cc.trend ===
															"Improving"
																? "bg-reaction-improved text-white"
																: cc.trend ===
																	  "Declining"
																	? "bg-reaction-aggravated text-white"
																	: "bg-white/30 text-white"
														}`}
													>
														{cc.trend}
													</span>
												</span>
											),
										)}
									</div>
								)}
						</div>

						{/* 2. Lifetime Case Summary Ribbon */}
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 items-stretch">
							<div className="p-3.5 rounded-xl bg-brand-surface-subtle flex flex-col justify-between gap-1 shadow-2xs">
								<span className="text-[11px] font-bold text-content-secondary flex items-center gap-1">
									<Calendar className="w-3.5 h-3.5 text-brand-primary" />{" "}
									First Visit
								</span>
								<span className="font-mono text-sm font-bold text-content-primary">
									{selectedPatient.pastVisits.length > 0
										? selectedPatient.pastVisits[
												selectedPatient.pastVisits
													.length - 1
											].date
										: "Today"}
								</span>
							</div>

							<div className="p-3.5 rounded-xl bg-brand-surface-subtle flex flex-col justify-between gap-1 shadow-2xs">
								<span className="text-[11px] font-bold text-content-secondary flex items-center gap-1">
									<Activity className="w-3.5 h-3.5 text-brand-primary" />{" "}
									Total Consultations
								</span>
								<span className="font-mono text-sm font-bold text-content-primary">
									{selectedPatient.totalVisits} Visits
								</span>
							</div>

							<div className="p-3.5 rounded-xl bg-brand-surface-subtle flex flex-col justify-between gap-1 shadow-2xs">
								<span className="text-[11px] font-bold text-content-secondary flex items-center gap-1">
									<Clock className="w-3.5 h-3.5 text-brand-primary" />{" "}
									Last Visit
								</span>
								<span className="font-mono text-sm font-bold text-content-primary">
									{selectedPatient.lastVisitDate}
								</span>
							</div>

							<div className="p-3.5 rounded-xl bg-brand-surface-subtle flex flex-col justify-between gap-1 shadow-2xs">
								<span className="text-[11px] font-bold text-content-secondary flex items-center gap-1">
									<CheckCircle2 className="w-3.5 h-3.5 text-reaction-improved" />{" "}
									Total Fees Paid
								</span>
								<div className="flex items-center justify-between">
									<span className="font-mono text-sm font-bold text-content-primary">
										{formatCurrency(totalPaid)}
									</span>
									{totalDue > 0 && (
										<span className="text-[10px] font-bold text-white bg-reaction-aggravated px-1.5 py-0.5 rounded shadow-2xs">
											Due: {formatCurrency(totalDue)}
										</span>
									)}
								</div>
							</div>
						</div>

						{/* 3. Constitutional Remedies Favored */}
						{lifetimeRemedies.length > 0 && (
							<div className="flex flex-col gap-2 p-4 rounded-xl bg-brand-surface-subtle">
								<span className="text-xs font-bold text-content-primary flex items-center gap-1.5">
									<Pill className="w-3.5 h-3.5 text-brand-primary" />
									Remedies (
									{lifetimeRemedies.length})
								</span>
								<div className="flex flex-wrap gap-1.5">
									{lifetimeRemedies.map((rem, idx) => (
										<span
											key={idx}
											className="px-2.5 py-1 rounded-lg bg-white text-brand-primary-dark font-bold text-xs shadow-2xs"
										>
											{rem}
										</span>
									))}
								</div>
							</div>
						)}

						{/* 4. Complete Lifetime Visit History Feed */}
						<div className="flex flex-col gap-3 flex-1">
							<div className="flex items-center justify-between pt-1">
								<h3 className="font-display text-sm font-bold text-content-primary flex items-center gap-1.5">
									<FileText className="w-4 h-4 text-brand-primary" />
									History (
									{selectedPatient.pastVisits.length}{" "})
								</h3>
							</div>

							{selectedPatient.pastVisits.length === 0 ? (
								<div className="text-center py-10 text-xs text-content-secondary font-medium bg-brand-surface-subtle rounded-xl p-6">
									No historical consultations recorded yet.
								</div>
							) : (
								<div className="flex flex-col gap-3">
									{selectedPatient.pastVisits.map(
										(visit, index) => (
											<HistoryVisitCard
												key={visit.id}
												visit={visit}
												consultationNumber={
													selectedPatient.pastVisits
														.length - index
												}
												isLatest={index === 0}
												onOpen={
													onOpenVisit
														? (visit) =>
																onOpenVisit(
																	selectedPatient.id,
																	visit.id
																)
														: undefined
												}
											/>
										),
									)}
								</div>
							)}
						</div>
					</>
				) : (
					<div className="flex flex-col items-center justify-center py-24 text-xs text-content-secondary font-medium gap-3">
						<Image
							src="/logos/nuskha-logomark-full-color.svg"
							alt="Nuskha"
							width={48}
							height={48}
							className="w-12 h-12 object-contain opacity-35"
						/>
						<p>Select a patient from the left roster to view their complete dossier.</p>
					</div>
				)}
			</main>

			{/* Edit Patient Modal */}
			<EditPatientModal
				patient={selectedPatient}
				isOpen={isEditModalOpen}
				onClose={() => setIsEditModalOpen(false)}
				onSave={(updated) => updatePatient(updated)}
			/>

			{/* Delete Confirmation Dialog */}
			{isDeleteConfirmOpen && selectedPatient && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
					<div className="w-full max-w-sm bg-white rounded-2xl p-5 shadow-2xl border border-border-subtle flex flex-col gap-4 animate-in zoom-in-95 duration-150">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 font-bold">
								<Trash2 className="w-5 h-5" />
							</div>
							<div className="flex flex-col">
								<h3 className="font-display text-sm font-bold text-content-primary">
									Delete Patient Record?
								</h3>
								<p className="text-xs text-content-secondary font-medium">
									{selectedPatient.fullName} ({selectedPatient.mrn})
								</p>
							</div>
						</div>
						<p className="text-xs text-content-secondary leading-relaxed">
							Are you sure you want to remove this patient record? This will permanently delete the patient dossier and consultation history from the current session.
						</p>
						<div className="flex items-center justify-end gap-2 pt-2 border-t border-border-subtle">
							<button
								type="button"
								onClick={() => setIsDeleteConfirmOpen(false)}
								className="px-3.5 py-2 rounded-xl bg-brand-surface hover:bg-brand-surface-subtle text-content-secondary hover:text-content-primary text-xs font-bold transition-all cursor-pointer"
							>
								Cancel
							</button>
							<button
								type="button"
								onClick={async () => {
									try {
										await deletePatient(selectedPatient.id);
										setIsDeleteConfirmOpen(false);
									} catch (err) {
										console.error("Failed to archive patient:", err);
									}
								}}
								className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-xs active:scale-98 transition-all cursor-pointer"
							>
								Confirm Delete
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
