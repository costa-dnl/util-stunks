import abbreviations from "../info/numbers.json";

const abbrMap: Record<string, number> = {};
for (const key of Object.keys(abbreviations)) {
  abbrMap[key.toLowerCase()] = Number(
    (abbreviations as Record<string, number>)[key]
  );
}

const sortedUnits = Object.keys(abbrMap).sort((a, b) => b.length - a.length);

export const unabbreviate = (input: string): number => {
  if (typeof input !== "string") {
    throw new TypeError("O parâmetro deve ser do tipo string.");
  }

  const cleaned = input.trim().toLowerCase();
  if (!cleaned) {
    throw new TypeError(`Valor inválido: "${input}".`);
  }

  for (const unit of sortedUnits) {
    if (cleaned.endsWith(unit)) {
      const numPart = cleaned.slice(0, -unit.length).trim();
      const num = parseFloat(numPart);

      if (isNaN(num)) {
        throw new TypeError(`Não foi possível extrair um número de "${input}".`);
      }

      const multiplier = abbrMap[unit];
      if (multiplier === undefined) {
        continue;
      }

      return num * multiplier;
    }
  }

  const pure = parseFloat(cleaned);
  if (isNaN(pure)) {
    throw new TypeError(`Valor inválido: "${input}".`);
  }

  return pure;
};
