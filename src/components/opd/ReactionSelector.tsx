'use client';

import React from 'react';
import { TrendingUp, Minus, TrendingDown, Sparkles, User } from 'lucide-react';
import { ReactionType } from '@/types';
import { REACTION_TYPES, REACTION_CONFIG } from '@/constants/clinical';

interface ReactionSelectorProps {
  currentReaction: ReactionType;
  onSelectReaction: (reaction: ReactionType) => void;
}

export const ReactionSelector: React.FC<ReactionSelectorProps> = ({
  currentReaction,
  onSelectReaction,
}) => {
  const getReactionIcon = (reaction: ReactionType) => {
    switch (reaction) {
      case 'Improved':
        return <TrendingUp className="w-3.5 h-3.5" />;
      case 'No Change':
        return <Minus className="w-3.5 h-3.5" />;
      case 'Aggravated':
        return <TrendingDown className="w-3.5 h-3.5" />;
      case 'New':
        return <Sparkles className="w-3.5 h-3.5" />;
      case 'First Visit':
      default:
        return <User className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold text-content-primary">
          Medicine Effect
        </label>
        <span className="text-[10px] text-content-muted font-mono">
          Keys [1] to [5]
        </span>
      </div>

      <div className="grid grid-cols-5 gap-1.5 bg-brand-surface-subtle p-1.5 rounded-xl">
        {REACTION_TYPES.map((reaction) => {
          const config = REACTION_CONFIG[reaction];
          const isSelected = currentReaction === reaction;

          return (
            <button
              key={reaction}
              type="button"
              onClick={() => onSelectReaction(reaction)}
              className={`py-2 px-1 rounded-lg flex flex-col items-center gap-1 text-[11px] font-semibold transition-all ${
                isSelected ? config.activeButtonClass : config.idleButtonClass
              }`}
            >
              <span className="flex items-center gap-1">
                {getReactionIcon(reaction)}
                <span className="truncate">{config.label}</span>
              </span>
              <kbd
                className={`px-1 rounded text-[9px] font-mono ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-black/5 text-content-muted'
                }`}
              >
                {config.shortcut}
              </kbd>
            </button>
          );
        })}
      </div>
    </div>
  );
};
