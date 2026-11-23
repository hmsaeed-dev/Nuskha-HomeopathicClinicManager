import { CLINIC_CONFIG } from '@/config/clinic.config';

/**
 * Currency formatter using the single source of truth clinic currency symbol.
 */
export function formatCurrency(amount: number, currency: string = CLINIC_CONFIG.currency): string {
  return `${currency} ${amount.toLocaleString()}`;
}

/**
 * Date formatter for clinic sessions.
 */
export function formatDate(date: Date = new Date()): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
