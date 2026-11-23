"use client";

import React from "react";
import {
	TrendingUp,
	Minus,
	TrendingDown,
	User,
	type LucideIcon,
} from "lucide-react";
import { ReactionType } from "@/types";
import { REACTION_TYPES, REACTION_CONFIG } from "@/constants/clinical";

interface ReactionSelectorProps {
	currentReaction: ReactionType;
	onSelectReaction: (reaction: ReactionType) => void;
}

const REACTION_ICONS: Record<ReactionType, LucideIcon> = {
	Decline: TrendingDown,
	"No Change": Minus,
	Improved: TrendingUp,
	"First Visit": User,
};

const NODE_STYLES: Record<
	ReactionType,
	{
		nodeActive: string;
		labelActive: string;
		trackColor: string;
	}
> = {
	Decline: {
		nodeActive:
			"bg-rose-600 border-rose-600 text-white ring-4 ring-rose-500/20 shadow-sm",
		labelActive: "text-rose-700",
		trackColor: "bg-rose-500/60",
	},
	"No Change": {
		nodeActive:
			"bg-slate-600 border-slate-600 text-white ring-4 ring-slate-500/20 shadow-sm",
		labelActive: "text-slate-800",
		trackColor: "bg-slate-400/70",
	},
	Improved: {
		nodeActive:
			"bg-emerald-600 border-emerald-600 text-white ring-4 ring-emerald-500/20 shadow-sm",
		labelActive: "text-emerald-700",
		trackColor: "bg-emerald-500/60",
	},
	"First Visit": {
		nodeActive:
			"bg-indigo-600 border-indigo-600 text-white ring-4 ring-indigo-500/20 shadow-sm",
		labelActive: "text-indigo-700",
		trackColor: "bg-indigo-500/60",
	},
};

export const ReactionSelector: React.FC<ReactionSelectorProps> = ({
	currentReaction,
	onSelectReaction,
}) => {
	const activeIndex = Math.max(0, REACTION_TYPES.indexOf(currentReaction));
	const progressPercent =
		REACTION_TYPES.length > 1
			? (activeIndex / (REACTION_TYPES.length - 1)) * 100
			: 0;
	const activeStyle =
		NODE_STYLES[currentReaction] ?? NODE_STYLES["First Visit"];

	return (
		<div className="py-2">
			<div className="relative grid grid-cols-4">
				{/* Continuous hairline track centered across the 4 nodes */}
				<div
					aria-hidden="true"
					className="pointer-events-none absolute top-5 left-[12.5%] right-[12.5%] h-0.5 -translate-y-1/2 rounded-full bg-slate-200 overflow-hidden"
				>
					<div
						className={`h-full transition-all duration-300 ease-out ${activeStyle.trackColor}`}
						style={{ width: `${progressPercent}%` }}
					/>
				</div>

				{REACTION_TYPES.map((reaction) => {
					const config = REACTION_CONFIG[reaction];
					const Icon = REACTION_ICONS[reaction] ?? User;
					const styles =
						NODE_STYLES[reaction] ?? NODE_STYLES["First Visit"];
					const isSelected = currentReaction === reaction;

					return (
						<button
							key={reaction}
							type="button"
							aria-pressed={isSelected}
							onClick={() => onSelectReaction(reaction)}
							className="group relative z-10 flex flex-col items-center gap-2 px-1 cursor-pointer focus:outline-none"
						>
							{/* Circular node */}
							<span
								className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-200 group-focus-visible:ring-2 group-focus-visible:ring-offset-2 group-focus-visible:ring-slate-400 ${
									isSelected
										? `${styles.nodeActive} scale-110`
										: "bg-white border-slate-200 text-slate-500 group-hover:border-slate-300 group-hover:text-slate-700 group-hover:scale-105"
								}`}
							>
								<Icon className="h-4 w-4 shrink-0" />
							</span>

							{/* Label + subtle inline shortcut */}
							<span className="flex items-center gap-1 max-w-full">
								<span
									className={`truncate text-xs font-semibold transition-colors ${
										isSelected
											? styles.labelActive
											: "text-content-secondary group-hover:text-content-primary"
									}`}
								>
									{config.label}
								</span>
								<kbd
									className={`text-[10px] font-mono leading-none px-1 py-0.5 rounded transition-colors ${
										isSelected
											? "bg-slate-100 text-slate-700 font-semibold"
											: "text-slate-400"
									}`}
								>
									{config.shortcut}
								</kbd>
							</span>
						</button>
					);
				})}
			</div>
		</div>
	);
};
