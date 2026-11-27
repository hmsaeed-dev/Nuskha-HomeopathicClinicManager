'use client';

import React from 'react';
import Image from 'next/image';

interface BrandedLoaderProps {
  label?: string;
  compact?: boolean;
}

export const BrandedLoader: React.FC<BrandedLoaderProps> = ({
  label = 'Preparing your clinic workspace…',
  compact = false,
}) => {
  return (
    <div
      className={`flex flex-1 items-center justify-center bg-brand-surface px-6 ${
        compact ? 'min-h-64' : 'min-h-[60vh]'
      }`}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-brand-primary-container blur-xl" />
          <Image
            src="/logos/nuskha-logomark-full-color.svg"
            alt="Nuskha"
            width={76}
            height={76}
            priority
            className="logo-reveal relative drop-shadow-sm"
          />
        </div>

        <Image
          src="/logos/nuskha-wordmark-full-color.svg"
          alt="Nuskha"
          width={148}
          height={43}
          priority
          className="opacity-90"
        />

        <div className="loader-sheen h-1.5 w-52 rounded-full bg-brand-surface-subtle">
          <div className="h-full w-1/3 rounded-full bg-brand-primary/70" />
        </div>

        <p className="text-xs font-medium text-content-secondary">{label}</p>
      </div>
    </div>
  );
};
