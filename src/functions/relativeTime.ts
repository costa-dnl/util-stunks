import { TimeLabels, TimeOptions } from "../interface";
import time from "../utils/time";

export const relativeTime = (
  input: number,
  options?: TimeOptions,
  labels?: TimeLabels
): string => {
  if (isNaN(input)) {
    throw new TypeError("O parâmetro deve ser um número válido.");
  }
  const ms = input > Date.now() ? input - Date.now() : Date.now() - input;

  return time(ms, options, labels);
};
