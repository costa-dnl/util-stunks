import { TimeOptions } from "../interface";
import time from "../utils/time";

export const msToTime = (input: number, options?: TimeOptions): string => {
  return time(input, options);
};
