import { TimeOptions, timeSeparated } from './utils/time';
import abbreviate_F, { AbbreviateOptions } from './functions/abbreviate';
import msToTime_F from './functions/msToTime';
import relativeTime_F from './functions/relativeTime';
import unabbreviate_F from './functions/unabbrevaite';

class utilStunks {
  public abbreviate: (input: number, options?: AbbreviateOptions) => string;
  public msToTime: (input: number, options?: TimeOptions) => string | timeSeparated;
  public unabbreviate: (input: string) => number;
  public relativeTime: (input: number, options?: TimeOptions) => string | timeSeparated;

  constructor() {
    this.abbreviate = abbreviate_F;
    this.msToTime = msToTime_F;
    this.unabbreviate = unabbreviate_F;
    this.relativeTime = relativeTime_F;
  }
};

export = new utilStunks();