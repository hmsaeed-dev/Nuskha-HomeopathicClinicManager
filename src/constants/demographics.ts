import { DemographicCohort, DemographicStyle } from '@/types';

/**
 * Unified Brand Hero Theme (Single Source of Truth)
 * Eliminates artificial gender color-switching in favor of a cohesive, professional brand green.
 */
const BRAND_HERO_STYLE: Omit<DemographicStyle, 'label'> = {
  barColor: 'bg-brand-primary',
  chipBg: 'bg-brand-primary-container',
  chipText: 'text-brand-primary-dark font-bold',
  chipDarkBg: 'bg-white/20 border border-white/25',
  chipDarkText: 'text-white font-bold',
  dotColor: 'bg-brand-primary',
  selectedCardBg: 'bg-brand-primary',
  selectedCardSubtext: 'text-white font-medium',
  bannerBg: 'bg-brand-primary-dark',
  bannerAccentText: 'text-brand-primary-light',
  bannerTokenBg: 'bg-brand-primary',
  bannerStroke: 'var(--color-brand-primary)',
  actionButtonBg: 'bg-brand-primary hover:bg-brand-primary-hover',
  lightTintBg: 'bg-brand-primary-container text-brand-primary-dark',
};

export const DEMOGRAPHIC_CONFIG: Record<DemographicCohort, DemographicStyle> = {
  Male: {
    label: 'Adult Male',
    ...BRAND_HERO_STYLE,
  },
  Female: {
    label: 'Adult Female',
    ...BRAND_HERO_STYLE,
  },
  Child: {
    label: 'Child',
    ...BRAND_HERO_STYLE,
  },
  Senior: {
    label: 'Senior',
    ...BRAND_HERO_STYLE,
  },
};
