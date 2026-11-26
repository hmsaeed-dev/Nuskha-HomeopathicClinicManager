const DEFAULT_TIMEZONE = 'Asia/Karachi';

const MONTHS: Record<string, string> = {
  jan: '01',
  feb: '02',
  mar: '03',
  apr: '04',
  may: '05',
  jun: '06',
  jul: '07',
  aug: '08',
  sep: '09',
  oct: '10',
  nov: '11',
  dec: '12',
};

/**
 * Parses clinic display dates like "24 Nov 2026" or "Today" into YYYY-MM-DD without UTC shift.
 */
export function parseDisplayDateToClinicDate(
  raw: string,
  timeZone: string = DEFAULT_TIMEZONE
): string {
  const trimmed = raw.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return trimmed;
  }

  if (trimmed.toLowerCase() === 'today') {
    return getClinicDateString(new Date(), timeZone);
  }

  const match = /^(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})$/.exec(trimmed);
  if (match) {
    const day = match[1].padStart(2, '0');
    const month = MONTHS[match[2].toLowerCase()];
    const year = match[3];
    if (month) {
      return `${year}-${month}-${day}`;
    }
  }

  const parsed = new Date(trimmed);
  if (!Number.isNaN(parsed.getTime())) {
    return getClinicDateString(parsed, timeZone);
  }

  return getClinicDateString(new Date(), timeZone);
}

/**
 * Builds a deterministic clinic-local ISO timestamp from a clinic_date and token number.
 */
export function buildVisitedAtIso(clinicDate: string, tokenNo: number): string {
  const totalMinutes = 9 * 60 + Math.min(Math.max(tokenNo - 1, 0), 120) * 5;
  const hh = String(Math.floor(totalMinutes / 60)).padStart(2, '0');
  const mm = String(totalMinutes % 60).padStart(2, '0');
  return `${clinicDate}T${hh}:${mm}:00+05:00`;
}

/**
 * Formats a Date into YYYY-MM-DD in the clinic's local IANA timezone.
 */
export function getClinicDateString(
  date: Date = new Date(),
  timeZone: string = DEFAULT_TIMEZONE
): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

/**
 * Formats a Date or clinic_date (YYYY-MM-DD) into "24 Nov 2026".
 */
export function formatClinicDisplayDate(
  input: Date | string,
  timeZone: string = DEFAULT_TIMEZONE
): string {
  let date: Date;
  if (typeof input === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(input)) {
    const [y, m, d] = input.split('-').map(Number);
    date = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
  } else {
    date = typeof input === 'string' ? new Date(input) : input;
  }

  return new Intl.DateTimeFormat('en-GB', {
    timeZone,
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

/**
 * Formats a clinic_date as "Today" if it matches the clinic's current date,
 * otherwise "24 Nov 2026".
 */
export function formatLastVisitLabel(
  clinicDateStr: string,
  timeZone: string = DEFAULT_TIMEZONE
): string {
  const todayStr = getClinicDateString(new Date(), timeZone);
  if (clinicDateStr === todayStr) {
    return 'Today';
  }
  return formatClinicDisplayDate(clinicDateStr, timeZone);
}
