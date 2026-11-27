/**
 * Guards against the vocabulary registry drifting from the database CHECK
 * constraints and from the UI option lists.
 */
import { readFileSync } from 'node:fs';
import {
  FEE_STATUS_VALUES,
  GENDERS,
  RELATIONS,
  REACTIONS,
  SEVERITIES,
  TRENDS,
  VEHICLES,
} from '../src/constants/vocab';

const schema = readFileSync(
  new URL('../src/db/migrations/001_initial_schema.sql', import.meta.url),
  'utf8'
);

const constraints: Array<{
  name: string;
  values: readonly string[];
}> = [
  { name: 'CK_visits_reaction', values: REACTIONS.map((r) => r.value) },
  { name: 'CK_visits_fee_status', values: FEE_STATUS_VALUES },
  { name: 'CK_patients_gender', values: GENDERS.map((g) => g.value) },
  { name: 'CK_patients_relation_type', values: RELATIONS.map((r) => r.value) },
  { name: 'CK_chief_complaints_severity', values: SEVERITIES.map((s) => s.value) },
  { name: 'CK_chief_complaints_trend', values: TRENDS.map((t) => t.value) },
];

let failed = false;
for (const { name, values } of constraints) {
  const line = schema.split(/\r?\n/).find((l) => l.includes(name));
  if (!line) {
    console.error(`[vocab] Missing SQL constraint ${name}`);
    failed = true;
    continue;
  }
  const inClause = line.split(' IN (')[1]?.split(')')[0] ?? '';
  const sqlValues = [...inClause.matchAll(/'([^']+)'/g)].map((m) => m[1]).sort();
  const registryValues = [...values].sort();
  const same =
    sqlValues.length === registryValues.length &&
    sqlValues.every((v, i) => v === registryValues[i]);
  if (!same) {
    console.error(
      `[vocab] ${name} drift: SQL=[${sqlValues.join(', ')}] registry=[${registryValues.join(', ')}]`
    );
    failed = true;
  }
}

if (VEHICLES.length < 1) {
  console.error('[vocab] No dispensing vehicles registered');
  failed = true;
}

if (failed) process.exit(1);
console.log('[vocab] Registry and database constraints are in sync.');
