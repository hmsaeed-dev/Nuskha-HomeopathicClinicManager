'use client';

import React from 'react';
import { Search, Sparkles, MapPin } from 'lucide-react';
import { Patient } from '@/types';
import { getDemographicCohort } from '@/utils/demographics';
import { DEMOGRAPHIC_CONFIG } from '@/constants/demographics';

interface PatientSearchRailProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filteredPatients: Patient[];
  selectedPatientId: string;
  onSelectPatient: (patient: Patient) => void;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
}

export const PatientSearchRail: React.FC<PatientSearchRailProps> = ({
  searchQuery,
  onSearchChange,
  filteredPatients,
  selectedPatientId,
  onSelectPatient,
  searchInputRef,
}) => {
  return (
		<aside className="rounded-2xl p-4 flex flex-col gap-5 h-full">
			{/* Search Bar with Alt+S Badge */}
			<div className="flex flex-col gap-2">
				<div className="relative flex items-center">
					<input
						id="patient-search"
						ref={searchInputRef}
						type="search"
						value={searchQuery}
						onChange={(e) => onSearchChange(e.target.value)}
						placeholder="Search by Name"
						className="w-full pl-3 pr-14 py-2.5 rounded-xl bg-white text-sm text-content-primary font-medium placeholder:text-content-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all shadow-2xs border border-border-subtle"
					/>
					<Search className="w-4 h-4 text-content-secondary absolute right-3 pointer-events-none" />
				</div>
			</div>

			{/* Search Results */}
			<section className="flex flex-col gap-2.5 flex-1 min-h-50 overflow-hidden">
				<div className="flex items-center justify-between">
					<h2 className="text-xs font-bold uppercase tracking-wider text-content-secondary">
						Patients ({filteredPatients.length})
					</h2>
					{searchQuery && (
						<span className="text-xs text-brand-primary font-bold flex items-center gap-1">
							<Sparkles className="w-3.5 h-3.5" /> Live
						</span>
					)}
				</div>

				<div className="flex flex-col gap-2 overflow-y-auto pr-1 flex-1">
					{filteredPatients.length === 0 ? (
						<div className="text-center py-8 text-xs text-content-secondary font-medium bg-white rounded-xl p-5 shadow-2xs">
							No patients found.
							<div className="mt-1 text-xs text-brand-primary font-bold">
								Press F2 for New patient entry
							</div>
						</div>
					) : (
						filteredPatients.map((patient) => {
							const isSelected = patient.id === selectedPatientId;
							const cohort = getDemographicCohort(
								patient.age,
								patient.gender,
							);
							const demo = DEMOGRAPHIC_CONFIG[cohort];

							return (
								<div
									key={patient.id}
									role="button"
									tabIndex={0}
									onClick={() => onSelectPatient(patient)}
									className={`p-3 rounded-xl flex items-center gap-2.5 cursor-pointer transition-all duration-150 ${
										isSelected
											? `${demo.selectedCardBg} text-white shadow-md`
											: "bg-white text-content-primary hover:bg-white/95 shadow-2xs"
									}`}
								>
									{/* Demographic Vertical Indicator Bar */}
									<div
										className={`w-1.5 self-stretch rounded-full shrink-0 ${
											isSelected
												? "bg-white"
												: demo.barColor
										}`}
										title={`${demo.label} (${patient.age}y)`}
									/>

									<div className="flex-1 min-w-0 flex flex-col">
										{/* Patient Name & Demographic Age Chip */}
										<div className="flex items-center justify-between">
											<span
												className={`font-display text-lg font-bold truncate ${
													isSelected
														? "text-white"
														: "text-content-primary"
												}`}
											>
												{patient.fullName}
											</span>
											<span
												className={`text-[11px] font-bold px-2 py-0.5 rounded shrink-0 ${
													isSelected
														? "bg-white/25 text-white"
														: `${demo.chipBg} ${demo.chipText}`
												}`}
											>
												{patient.age} Y
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
												{patient.relationType}{" "}
												{patient.relativeName}
											</p>
											<p className="pt-1.5 font-light text-xs flex items-center gap-1">
												<MapPin className="w-4 h-4shrink-0" />
												<span>{patient.locality}</span>
											</p>
										</div>
									</div>
								</div>
							);
						})
					)}
				</div>
			</section>
		</aside>
	);
};
