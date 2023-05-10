import time, {TimeOptions, defaultTimeOptions,  timeSeparated} from "../utils/time";


const msToTime = (input: number, options: TimeOptions = defaultTimeOptions) : string | timeSeparated => {
  return time(input, options);
};

export default msToTime;