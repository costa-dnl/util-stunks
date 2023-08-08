import abbreviations from '../info/numbers.json';

const unabbreviate = (input: string): number => {
  if (typeof input !== 'string') throw new TypeError('Parâmetro deve ser do tipo string');

  const num: number = parseFloat(input);
  const unit: string = input.substr(-1).toLowerCase();
  const abbr: string[] = Object.keys(abbreviations).map((x: string) => x.toLowerCase());

  if (abbr.indexOf(unit) === -1) return parseFloat(input)

  return num * Object.values(abbreviations)[abbr.indexOf(unit)];
};

export default unabbreviate;