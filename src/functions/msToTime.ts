import time, { TimeOptions, defaultTimeOptions } from "../utils/time";


const msToTime = (input: number, options: TimeOptions = defaultTimeOptions): string => {
  return time(input, options);
};

export default msToTime;