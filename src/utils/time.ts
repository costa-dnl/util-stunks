import * as times from '../info/time.json';

export interface TimeOptions {
  compact?: boolean;
  display?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  removeMs?: boolean;
  includeMsInSeconds?: boolean;
}

export const defaultTimeOptions: TimeOptions = {
  compact: false,
  display: 7,
  removeMs: false,
  includeMsInSeconds: false,
};

export interface TimeSeparated {
  years?: number;
  months?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
}

function replace(inputString: string): string {
  const lastIndex = inputString.lastIndexOf(',');
  if (lastIndex === -1) {
    return inputString;
  }

  const beforeLastComma = inputString.slice(0, lastIndex);
  const afterLastComma = inputString.slice(lastIndex + 1);

  return beforeLastComma + " e" + afterLastComma;
}

export default (input: number, options: TimeOptions = defaultTimeOptions): string => {
  if (isNaN(input)) throw new TypeError('Parâmetro input deve ser do tipo numérico');
  const userOption: TimeOptions = { ...defaultTimeOptions, ...options };

  const intervalsInMilliseconds: Record<string, number> = {
    years: 1000 * 60 * 60 * 24 * 365.25,
    months: 1000 * 60 * 60 * 24 * 30.4375,
    days: 1000 * 60 * 60 * 24,
    hours: 1000 * 60 * 60,
    minutes: 1000 * 60,
    seconds: 1000,
    milliseconds: 1,
  };

  let timeIntervals: Record<string, number | undefined> = {};
  let ms: number = input;

  for (const interval in intervalsInMilliseconds) {
    if (ms >= intervalsInMilliseconds[interval]) {
      const val: number = Math.floor(ms / intervalsInMilliseconds[interval]);
      timeIntervals[interval] = val;
      ms -= val * intervalsInMilliseconds[interval];
    }
  }

  const time: TimeSeparated = {};

  for (const interval in timeIntervals) {
    const val: number | undefined = timeIntervals[interval];

    if (val && userOption.display) {
      if (interval === 'milliseconds') {
        if (userOption.removeMs) continue;
        if (userOption.includeMsInSeconds && time.seconds) {
          time.seconds = Number(time.seconds + '.' + String(val).padStart(3, '0').slice(0, 1));
        } else {
          time.milliseconds = val;
        }
      } else {
        time[interval as keyof TimeSeparated] = val;
      }

      userOption.display--;
    }
  }

  let result = '';
  let isFirst = true;

  for (const interval in times) {
    const val: {
      plural: string;
      unique: string;
      compact: string;
    } = times[interval as keyof typeof times];
    const value = time[interval as keyof TimeSeparated];

    if (value !== undefined) {
      result += !isFirst && !userOption.compact ? ", " : " ";

      if (userOption.compact) {
        result += `${value}${val.compact}`;
      } else if (value > 1) {
        result += `${value} ${val.plural}`;
      } else {
        result += `${value} ${val.unique}`;
      }

      isFirst = false;
    }
  }
  result = replace(result);

  return result.trim() || "";
};
