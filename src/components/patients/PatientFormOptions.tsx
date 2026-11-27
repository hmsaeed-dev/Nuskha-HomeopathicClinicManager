import React from "react";
import { LOCALITY_PRESETS } from "@/constants/clinical";
import { GENDERS, RELATIONS } from "@/constants/vocab";

/** Shared <option> lists so registration and editing can never drift apart. */
export const RelationOptions: React.FC = () => (
  <>
    {RELATIONS.map((relation) => (
      <option key={relation.value} value={relation.value}>
        {relation.label} ({relation.longLabel})
      </option>
    ))}
  </>
);

export const GenderOptions: React.FC = () => (
  <>
    {GENDERS.map((gender) => (
      <option key={gender.value} value={gender.value}>
        {gender.longLabel}
      </option>
    ))}
  </>
);

export const LocalityOptions: React.FC<{ listId: string }> = ({ listId }) => (
  <datalist id={listId}>
    {LOCALITY_PRESETS.map((locality) => (
      <option key={locality} value={locality} />
    ))}
  </datalist>
);
