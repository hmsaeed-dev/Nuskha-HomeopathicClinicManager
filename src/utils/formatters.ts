/**
 * Currency formatter. The currency must be supplied by the caller from the
 * live clinic settings — `CLINIC_CONFIG` is only the seed for a new database,
 * not the runtime source of truth.
 */
export function formatCurrency(amount: number, currency: string): string {
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
