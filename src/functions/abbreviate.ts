import { AbbreviateOptions } from "../interface";
import abbreviations from "../info/numbers.json";

export const abbreviate = (
  input: number,
  options: AbbreviateOptions = { display: 1, round: false }
): string => {
  if (typeof input !== "number" || !Number.isFinite(input)) {
    throw new TypeError("O parâmetro deve ser um número válido.");
  }

  if (input === 0) return "0";

  const isNegative = input < 0;
  const absInput = Math.abs(input);

  let display = 1;
  let round = false;

  if (typeof options === "object" && options !== null) {
    if (
      typeof options.display === "number" &&
      options.display >= 0 &&
      options.display <= 2
    ) {
      display = options.display;
    }
    if (typeof options.round === "boolean") {
      round = options.round;
    }
  }

  const calcDisplay = Math.pow(10, display);
  const abbr = Object.keys(abbreviations);

  let result = String(absInput);

  for (let i = abbr.length - 1; i >= 0; i--) {
    const size = Math.pow(10, (i + 1) * 3);
    if (size <= absInput) {
      const scaled = (absInput / size) * calcDisplay;
      const value = round
        ? Math.round(scaled) / calcDisplay
        : Math.floor(scaled) / calcDisplay;

      result = value + abbr[i];
      break;
    }
  }

  return isNegative ? `-${result}` : result;
};
