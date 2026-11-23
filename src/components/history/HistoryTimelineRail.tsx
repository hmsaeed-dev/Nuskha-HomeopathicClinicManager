'use client';

import React from 'react';
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Sparkles,
  Pill,
  Droplet,
  Edit2,
  Phone,
  MapPin,
  Eye,
} from 'lucide-react';
import { Patient, PastVisit } from '@/types';
import { getDemographicCohort } from '@/utils/demographics';
import { DEMOGRAPHIC_CONFIG } from '@/constants/demographics';
import { REACTION_CONFIG } from '@/constants/clinical';
import { formatCurrency } from '@/utils/formatters';

interface HistoryTimelineRailProps {
  patient: Patient;
  onEditVisit?: (visit: PastVisit) => void;
}

export const HistoryTimelineRail: React.FC<HistoryTimelineRailProps> = ({
  patient,
  onEditVisit,
}) => {
  const cohort = getDemographicCohort(patient.age, patient.gender);
  const demo = DEMOGRAPHIC_CONFIG[cohort];

  return (
		<section className="rounded-2x p-5 shadow-xs flex flex-col gap-5 h-full overflow-hidden">
			{/* Patient Identity Anchor (Demographic Cohort Characteristic Card) */}
			<div
				className={`rounded-2xl ${demo.bannerBg} text-white p-5 shadow-sm flex flex-col gap-4 shrink-0 transition-colors duration-200`}
			>
				<div className="flex items-start justify-between gap-3">
					<div className="flex flex-col gap-1">
						<h1 className="font-display text-2xl font-bold tracking-tight text-white">
							{patient.fullName}
						</h1>

						<div
							className={`text-xs text-white flex items-center gap-2 flex-wrap mt-0.5`}
						>
							<span className="font-semibold text-white">
								{patient.relationType} {patient.relativeName}
							</span>
							<span>·</span>
							<span
								className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${demo.chipDarkBg} ${demo.chipDarkText}`}
								title={demo.label}
							>
								{patient.age} Y
							</span>
						</div>
					</div>
				</div>

				{/* Secondary Contact Bar */}
				<div className="flex items-center gap-4 text-xs text-white font-medium pt-1">
					<span className="flex items-center gap-1.5">
						<MapPin
							className={`w-3.5 h-3.5 ${demo.bannerAccentText}`}
						/>
						{patient.locality}
					</span>
					<span className="flex items-center gap-1.5 font-mono">
						<Phone
							className={`w-3.5 h-3.5 ${demo.bannerAccentText}`}
						/>
						{patient.phone}
					</span>
				</div>


			</div>

			{/* History Timeline */}
			<div className="flex flex-col gap-3 flex-1 overflow-hidden">
				<div className="flex items-center justify-between">
					<h2 className="font-display text-base font-bold text-content-primary">
						History
					</h2>
					<span className="text-xs text-content-secondary font-bold">
						{patient.pastVisits.length} visits
					</span>
				</div>

				<div className="flex-1 overflow-y-auto pr-1">
					{patient.pastVisits.length === 0 ? (
						<div className="text-center py-12 text-xs text-content-secondary bg-brand-surface-subtle rounded-2xl p-6 shadow-2xs">
							No past visits.
							<div className="mt-1 text-xs text-brand-primary font-bold">
								First visit today.
							</div>
						</div>
					) : (
						<div className="flex flex-col gap-3 my-1">
							{patient.pastVisits.map((visit) => {
								const reactionMeta =
									REACTION_CONFIG[visit.reaction] ||
									REACTION_CONFIG["First Visit"];

								return (
									<article
										key={visit.id}
										className="rounded-xl bg-white p-4 shadow-8xs flex flex-col gap-2.5 hover:bg-brand-surface-subtle transition-colors"
									>
										{/* Visit Header */}
										<header className="flex items-center justify-between gap-2">
											<div className="flex items-center gap-2">
												<span
													className={`w-3 h-3 rounded-full shrink-0 shadow-2xs ${
														visit.reaction ===
														"Improved"
															? "bg-reaction-improved"
															: visit.reaction ===
																  "Decline"
																? "bg-reaction-aggravated"
																: visit.reaction ===
																	  "No Change"
																	? "bg-reaction-stable"
																	: "bg-reaction-new"
													}`}
												/>

												<div className="flex items-center gap-2">
													<span
														className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full ${reactionMeta.badgeClass}`}
													>
														{visit.reaction ===
															"Improved" && (
															<TrendingUp className="w-3.5 h-3.5" />
														)}
														{visit.reaction ===
															"No Change" && (
															<Minus className="w-3.5 h-3.5" />
														)}
														{visit.reaction ===
															"Decline" && (
															<TrendingDown className="w-3.5 h-3.5" />
														)}
														{visit.reaction ===
															"First Visit" && (
															<Sparkles className="w-3.5 h-3.5" />
														)}
														{visit.reaction}
													</span>

													{onEditVisit && (
														<button
															type="button"
															onClick={() =>
																onEditVisit(
																	visit,
																)
															}
															className="p-1 rounded text-content-secondary hover:text-brand-primary hover:bg-white transition-colors cursor-pointer"
															title="Edit visit"
														>
															<Edit2 className="w-3.5 h-3.5" />
														</button>
													)}
												</div>

												{visit.durationDays && (
													<span className="text-[11px] px-2 py-0.5 rounded text-content-primary font-bold">
														{visit.durationDays}{" "}
														days
													</span>
												)}

												<span className="text-xs font-bold text-content-primary">
													{visit.date}
												</span>
											</div>
										</header>

										{/* Symptoms Recorded */}
										<p className="text-xs text-content-primary leading-relaxed font-medium">
											<span className="font-bold text-content-primary">
												Symptoms:{" "}
											</span>
											{visit.symptoms}
										</p>

										{/* Prescribed Remedies with Potency and Vehicle */}
										<div className="flex flex-wrap gap-1.5 pt-0.5">
											{visit.prescriptions.map(
												(rx, idx) => (
													<div
														key={idx}
														className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary-container text-brand-primary-dark text-xs font-semibold"
													>
														{rx.vehicle.includes(
															"Drops",
														) ? (
															<Droplet className="w-3.5 h-3.5 text-brand-primary" />
														) : (
															<Pill className="w-3.5 h-3.5 text-brand-primary" />
														)}
														<span className="font-bold">
															{rx.remedy}
														</span>
														<span className="font-mono text-xs font-bold text-brand-primary">
															{rx.potency}
														</span>
														<span className="text-[11px] text-brand-primary-dark pl-0.5 font-medium">
															· {rx.dosage}
														</span>
													</div>
												),
											)}
										</div>

										{/* Doctor Notes & Fee */}
										<footer className="flex items-center justify-between text-xs text-content-secondary font-medium pt-1 border-t border-border-subtle/50">
											<span className="truncate max-w-[240px]">
												{visit.doctorNotes ||
													"No notes"}
											</span>
											<span className="font-mono font-bold text-content-primary">
												{formatCurrency(visit.fee)} (
												{visit.feeStatus})
											</span>
										</footer>
									</article>
								);
							})}
						</div>
					)}
				</div>
			</div>
		</section>
  );
};
