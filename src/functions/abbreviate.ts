import * as abbreviations from '../info/numbers.json';

interface AbbreviateOptions {
  display?: 0 | 1 | 2,
  round?: boolean
};

const abbreviate = (input: number, options: AbbreviateOptions = { display: 1, round: false }): string => {
  if (isNaN(input)) throw new TypeError('Parâmentro não é um número.');
  if (!input) return '0';

  let display: 0 | 1 | 2 = 1;
  let round: boolean = false;

  if (typeof options === 'object') {
    if (
      typeof options.display === 'number' &&
      options.display >= 0 &&
      options.display <= 2
    ) display = options.display;

    if (typeof options.round === 'boolean') round = options.round;
  };

  let result: string = String(input);
  let calcDisplay: number = Math.pow(10, display);
  let abbr: string[] = Object.keys(abbreviations);

  for (let i: number = abbr.length - 1; i >= 0; i--) {
    const size: number = Math.pow(10, (i + 1) * 3);
    if (size <= input) {
      if (round)
        result = Math.round(input * calcDisplay / size) / calcDisplay + abbr[i];
      else
        result = Math.floor(input * calcDisplay / size) / calcDisplay + abbr[i];

      break;
    }
  };

  return result;
};

export default abbreviate;
export { AbbreviateOptions };