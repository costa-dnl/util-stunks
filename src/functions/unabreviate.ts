import abbreviations from "../info/numbers.json";

const abbrMap = Object.fromEntries(
  Object.entries(abbreviations).map(([k, v]) => [k.toLowerCase(), v as number])
);

const sortedUnits = Object.keys(abbrMap).sort((a, b) => b.length - a.length);

export const unabbreviate = (input: string): number => {
  if (typeof input !== "string") {
    throw new TypeError("O parâmetro deve ser do tipo string.");
  }

  const cleaned = input.trim().toLowerCase();
  if (!cleaned) return 0;

  for (const unit of sortedUnits) {
    if (cleaned.endsWith(unit)) {
      const numPart = cleaned.slice(0, -unit.length).trim();
      const num = parseFloat(numPart);

      if (isNaN(num)) {
        throw new TypeError(`Não foi possível extrair um número de "${input}".`);
      }

      return num * abbrMap[unit];
    }
  }

  const pure = parseFloat(cleaned);
  if (isNaN(pure)) {
    throw new TypeError(`Valor inválido: "${input}".`);
  }

  return pure;
};
