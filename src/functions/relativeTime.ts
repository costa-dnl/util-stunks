import { TimeOptions } from "../interface";
import time from "../utils/time";

export const relativeTime = (input: number, options?: TimeOptions): string => {
  if (isNaN(input)) throw new TypeError("Parâmetro não é um número");
  const ms = input > Date.now() ? input - Date.now() : Date.now() - input;

  return time(ms, options);
};
