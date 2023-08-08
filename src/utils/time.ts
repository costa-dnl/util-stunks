import * as times from '../info/time.json';

export interface TimeOptions {
  compact?: boolean;
  display?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  separated?: boolean;
  removeMs?: boolean;
  includeMsInSeconds?: boolean;
};

export const defaultTimeOptions: TimeOptions = {
  compact: false,
  display: 7,
  separated: false,
  removeMs: false,
  includeMsInSeconds: false
};

export interface timeSeparated {
  years?: number;
  months?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
}

export default (input: number, options: TimeOptions = defaultTimeOptions): string | timeSeparated => {
  if (isNaN(input)) throw new TypeError('Parâmentro input deve ser do tipo númerico');
  let userOption: TimeOptions = { ...defaultTimeOptions, ...options };

  if (typeof options === 'object') {
    if (typeof options.compact === 'boolean') userOption.compact = options.compact;
    if (
      typeof options.display === 'number' &&
      options.display >= 1 &&
      options.display <= 7
    ) userOption.display = options.display;
    if (typeof options.separated === 'boolean') userOption.separated = options.separated;
    if (typeof options.removeMs === 'boolean') userOption.removeMs = options.removeMs;
    if (typeof options.includeMsInSeconds === 'boolean') userOption.includeMsInSeconds = options.includeMsInSeconds;
  };

  const intervals: { [interval: string]: number } = {
    years: 1000 * 60 * 60 * 24 * 30.5 * 12,
    months: 1000 * 60 * 60 * 24 * 30.5,
    days: 1000 * 60 * 60 * 24,
    hours: 1000 * 60 * 60,
    minutes: 1000 * 60,
    seconds: 1000,
    milliseconds: 1
  };

  let timeIntervals: { [interval: string]: number | undefined } = {};

  let ms: number = input;

  for (const interval in intervals) {
    if (ms >= intervals[interval as keyof typeof intervals]) {
      const val: number = Math.floor(ms / intervals[interval as keyof typeof intervals]);
      timeIntervals[interval as keyof typeof timeIntervals] = val;
      ms -= val * intervals[interval as keyof typeof intervals];
    }
  };

  const time: {
    years?: number;
    months?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number
    milliseconds?: number
  } = {}

  for (const interval in timeIntervals) {
    const val: number | undefined = timeIntervals[interval as keyof typeof timeIntervals];

    if (val && userOption.display > 0) {
      if (interval === 'milliseconds') {
        if (userOption.removeMs) continue;
        if (userOption.includeMsInSeconds && time.seconds) {
          time.seconds = Number(time.seconds + '.' + String(val).padStart(3, '0').slice(0, 1));
        } else {
          time.milliseconds = val;
        }
      } else {
        time[interval as keyof typeof time] = val;
        userOption.display--;
      }
    }
  };

  if (userOption.separated) return time;

  let result = '';
  for (const interval in times) {
    const val: {
      plural: string;
      unique: string;
      compact: string
    } = times[interval as keyof typeof times];
    const value = time[interval as keyof typeof time];
    if (value) {
      if (userOption.compact) {
        result += value + val.compact + ' ';
      } else if (value && value > 1) {
        result += value + ' ' + val.plural + ' '
      } else {
        result += value + ' ' + val.unique + ' '
      };
    }
  };
  return result.trim();
}