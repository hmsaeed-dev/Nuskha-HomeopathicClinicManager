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
import { getReactionMeta, REACTIONS } from "@/constants/vocab";

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

export const ReactionSelector: React.FC<ReactionSelectorProps> = ({
	currentReaction,
	onSelectReaction,
}) => {
	const reactionCount = Math.max(REACTIONS.length, 1);
	const activeIndex = Math.max(
		0,
		REACTIONS.findIndex((r) => r.value === currentReaction)
	);
	const progressPercent =
		REACTIONS.length > 1 ? (activeIndex / (REACTIONS.length - 1)) * 100 : 0;
	const activeMeta = getReactionMeta(currentReaction);
	const trackInset = `${50 / reactionCount}%`;

	return (
		<div className="py-2">
			<div className="relative grid" style={{ gridTemplateColumns: `repeat(${reactionCount}, minmax(0, 1fr))` }}>
				{/* Continuous hairline track centered across the reaction nodes */}
				<div
					aria-hidden="true"
					className="pointer-events-none absolute top-5 h-0.5 -translate-y-1/2 rounded-full bg-border-subtle overflow-hidden"
					style={{ left: trackInset, right: trackInset }}
				>
					<div
						className={`h-full transition-all duration-300 ease-out ${activeMeta.trackClass}`}
						style={{ width: `${progressPercent}%` }}
					/>
				</div>

				{REACTIONS.map((meta) => {
					const reaction = meta.value as ReactionType;
					const Icon = REACTION_ICONS[reaction] ?? User;
					const isSelected = currentReaction === reaction;

					return (
						<button
							key={reaction}
							type="button"
							aria-pressed={isSelected}
							onClick={() => onSelectReaction(reaction)}
							className="group relative z-10 flex flex-col items-center gap-2 px-1 cursor-pointer focus:outline-none"
						>
							<span
								className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-200 group-focus-visible:ring-2 group-focus-visible:ring-offset-2 group-focus-visible:ring-brand-primary/60 ${
									isSelected
										? `${meta.nodeActiveClass} scale-110`
										: "bg-white border-border-subtle text-content-secondary group-hover:border-brand-primary/50 group-hover:text-brand-primary group-hover:scale-105"
								}`}
							>
								<Icon className="h-4 w-4 shrink-0" />
							</span>

							<span className="flex items-center gap-1 max-w-full">
								<span
									className={`truncate text-xs font-semibold transition-colors ${
										isSelected
											? meta.labelActiveClass
											: "text-content-secondary group-hover:text-content-primary"
									}`}
								>
									{meta.label}
								</span>
								<kbd
									className={`label-micro rounded ${
										isSelected
											? "bg-brand-surface text-content-primary"
											: "text-content-secondary/70"
									}`}
								>
									{meta.shortcut}
								</kbd>
							</span>
						</button>
					);
				})}
			</div>
		</div>
	);
};
