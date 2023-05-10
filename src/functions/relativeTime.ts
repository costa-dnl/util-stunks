import time, { TimeOptions, defaultTimeOptions } from "../utils/time";

const relativeTime = (input: number, options: TimeOptions = defaultTimeOptions) => {
  if(isNaN(input)) throw new TypeError('Parâmetro não é um número');
  const ms = input > Date.now() ? input - Date.now() : Date.now() - input;

  return time(ms, options);
};

export default relativeTime;