import { TimeLabelUnit, TimeLabels, TimeOptions, TimeSeparated, TimeTypes } from "../interface/";
import times from "../info/time.json";

export const defaultTimeOptions: TimeOptions = {
  compact: false,
  display: 7,
  removeMs: false,
  includeMsInSeconds: false,
};

const defaultSeparator = "e";

function isValidLabelUnit(value: unknown): value is TimeLabelUnit {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    typeof (value as TimeLabelUnit).plural === "string" &&
    (value as TimeLabelUnit).plural.length > 0 &&
    typeof (value as TimeLabelUnit).unique === "string" &&
    (value as TimeLabelUnit).unique.length > 0
  );
}

function resolveLabels(labels?: TimeLabels): {
  units: typeof times;
  separator: string;
} {
  const units = { ...times } as typeof times;

  if (labels && typeof labels === "object") {
    for (const key of Object.keys(times) as (keyof typeof times)[]) {
      const candidate = labels[key as keyof TimeLabels];
      if (isValidLabelUnit(candidate)) {
        units[key] = {
          ...units[key],
          plural: candidate.plural,
          unique: candidate.unique,
        };
      }
    }
  }

  const separator =
    labels && typeof labels.separator === "string" && labels.separator.length > 0
      ? labels.separator
      : defaultSeparator;

  return { units, separator };
}

function replace(inputString: string, separator: string): string {
  const lastIndex = inputString.lastIndexOf(",");
  if (lastIndex === -1) {
    return inputString;
  }

  const beforeLastComma = inputString.slice(0, lastIndex);
  const afterLastComma = inputString.slice(lastIndex + 1);

  return beforeLastComma + " " + separator + afterLastComma;
}

export default (
  input: number,
  options: TimeOptions = defaultTimeOptions,
  labels?: TimeLabels
): string => {
  if (isNaN(input))
    throw new TypeError("Parâmetro input deve ser do tipo numérico");
  const userOption: TimeOptions = { ...defaultTimeOptions, ...options };

  const intervalsInMilliseconds = {
    years: 315576e5,
    months: 26298e5,
    days: 864e5,
    hours: 36e5,
    minutes: 6e4,
    seconds: 1e3,
    milliseconds: 1,
  };

  let timeIntervals: Record<string, number | undefined> = {};
  let ms: number = input;

  for (const interval in intervalsInMilliseconds) {
    if (!intervalsInMilliseconds[interval as keyof TimeSeparated]) continue;
    if (ms >= intervalsInMilliseconds[interval as keyof TimeSeparated]) {
      const val: number = Math.floor(ms / intervalsInMilliseconds[interval as keyof TimeSeparated]);
      timeIntervals[interval] = val;
      ms -= val * intervalsInMilliseconds[interval as keyof TimeSeparated];
    }
  }

  const time: TimeSeparated = {};

  for (const interval in timeIntervals) {
    const val: number | undefined = timeIntervals[interval];

    if (val && userOption.display) {
      if (interval === "milliseconds") {
        if (userOption.removeMs) continue;
        if (userOption.includeMsInSeconds && time.seconds) {
          time.seconds = Number(
            time.seconds + "." + String(val).padStart(3, "0").slice(0, 1)
          );
        } else {
          time.milliseconds = val;
        }
      } else {
        time[interval as keyof TimeSeparated] = val;
      }

      userOption.display--;
    }
  }

  const { units, separator } = resolveLabels(labels);

  let result = "";
  let isFirst = true;

  for (const interval in times) {
    const val: TimeTypes = userOption.compact
      ? times[interval as keyof typeof times]
      : units[interval as keyof typeof units];
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
  result = replace(result, separator);

  return result.trim() || "";
};
