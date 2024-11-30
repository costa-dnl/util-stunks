enum AbbreviateDisplay {
  None = 0,
  Compact = 1,
  Detailed = 2
}

export interface AbbreviateOptions {
  display?: AbbreviateDisplay
  round?: boolean;
}

enum TimeDisplay {
  One = 1,
  Two = 2,
  Tree = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7
}

export interface TimeOptions {
  compact?: boolean;
  display?: TimeDisplay;
  removeMs: boolean;
  includeMsInSeconds?: boolean;
}

export interface TimeSeparated {
  years?: number;
  months?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
}

export interface TimeTypes {
  plural: string;
  unique: string;
  compact: string;
}

export interface OptionsRandomArray {
  quantity?: number;
  removeSelectItem?: boolean;
}