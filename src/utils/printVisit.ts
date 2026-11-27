import { PastVisit } from '@/types';

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (ch) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      }[ch] ?? ch)
  );
}

/** Copy the visit's prescription as plain text for quick hand-off. */
export async function copyVisitPrescription(visit: PastVisit): Promise<boolean> {
  if (typeof navigator === 'undefined' || visit.prescriptions.length === 0) {
    return false;
  }
  const text = [
    `Consultation ${visit.date} — ${visit.reaction}`,
    visit.symptoms ? `Symptoms: ${visit.symptoms}` : null,
    ...visit.prescriptions.map(
      (rx, i) =>
        `${i + 1}. ${rx.remedy} ${rx.potency} — ${rx.dosage} (${rx.vehicle})`
    ),
    visit.doctorNotes ? `Notes: ${visit.doctorNotes}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Clipboard API can be unavailable in some embedded contexts.
    if (typeof document === 'undefined') return false;
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    textarea.remove();
    return ok;
  }
}

/** Print a single consultation without shipping a separate print route. */
export function printVisit(
  visit: PastVisit,
  patientName?: string,
  currency?: string
): void {
  if (typeof document === 'undefined') return;

  document.getElementById('nuskha-print-root')?.remove();
  const root = document.createElement('div');
  root.id = 'nuskha-print-root';
  const remedies = visit.prescriptions
    .map(
      (rx) =>
        `<li>${escapeHtml(rx.remedy)} ${escapeHtml(rx.potency)} — ${escapeHtml(
          rx.dosage
        )} (${escapeHtml(rx.vehicle)})</li>`
    )
    .join('');

  root.innerHTML = `
    <h1>Nuskha — Consultation Record</h1>
    <p><strong>Patient:</strong> ${escapeHtml(patientName ?? 'Patient')}</p>
    <p><strong>Date:</strong> ${escapeHtml(visit.date)} &nbsp; <strong>Token:</strong> #${visit.tokenNo} &nbsp; <strong>Outcome:</strong> ${escapeHtml(visit.reaction)}</p>
    <h2>Symptoms</h2>
    <p>${escapeHtml(visit.symptoms || '—')}</p>
    <h2>Prescription</h2>
    <ol>${remedies || '<li>—</li>'}</ol>
    <h2>Notes</h2>
    <p>${escapeHtml(visit.doctorNotes || '—')}</p>
    <p><strong>Fee:</strong> ${currency ? `${escapeHtml(currency)} ` : ''}${visit.fee} (${escapeHtml(visit.feeStatus)})</p>
  `;
  document.body.appendChild(root);

  const cleanup = () => {
    root.remove();
    window.removeEventListener('afterprint', cleanup);
  };
  window.addEventListener('afterprint', cleanup);
  window.print();
  // Some Electron/webview implementations never emit afterprint.
  window.setTimeout(cleanup, 10000);
}
