"use client";

import React from "react";
import { TrendingUp, Minus, TrendingDown, Sparkles } from "lucide-react";
import { ReactionType } from "@/types";
import { REACTION_CONFIG } from "@/constants/clinical";

interface ReactionBadgeProps {
  reaction: ReactionType;
  size?: "sm" | "md";
  showIcon?: boolean;
  className?: string;
}

const REACTION_ICONS: Record<ReactionType, React.ComponentType<{ className?: string }>> = {
  Improved: TrendingUp,
  "No Change": Minus,
  Decline: TrendingDown,
  "First Visit": Sparkles,
};

export const ReactionBadge: React.FC<ReactionBadgeProps> = ({
  reaction,
  size = "md",
  showIcon = true,
  className = "",
}) => {
  const meta = REACTION_CONFIG[reaction] || REACTION_CONFIG["First Visit"];
  const Icon = REACTION_ICONS[reaction] || Sparkles;

  const sizeClasses =
    size === "sm"
      ? "text-[11px] px-2 py-0.5 gap-1"
      : "text-xs px-2.5 py-1 gap-1.5";

  const iconSize = size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5";

  return (
    <span
      className={`inline-flex items-center rounded-full font-bold transition-all shadow-2xs ${meta.badgeClass} ${sizeClasses} ${className}`}
    >
      {showIcon && <Icon className={`${iconSize} shrink-0`} />}
      <span>{meta.label}</span>
    </span>
  );
};
