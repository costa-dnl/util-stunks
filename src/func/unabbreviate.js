const abbreviations = require('../numberAbbreviations.json')

module.exports = (string) => {
  /*
  if(typeof string !== 'string') return new TypeError('Paramentro deve ser do tipo String.');
  let letters = string.replace(/[^A-z]/gi, '').toLowerCase(),
      abbreviate = true,
      abbreviationsEdit = Object.keys(abbreviations).map(x => x.toLowerCase());
  number = Number(string.replace(/[^0-9.]/gi, ''));
  if(!number) return 0;
  if(abbreviationsEdit.indexOf(letters) === -1) abbreviate = false;
  return abbreviate ? number * Object.values(abbreviations)[abbreviationsEdit.indexOf(letters)] : number;
  */
  if(typeof string !== 'string') return new TypeError('Paramentro deve ser do tipo String.');
  let num = parseFloat(string.substr(0, string.length)),
    unit = string.substr(-1).toLowerCase(),
    abbr = Object.keys(abbreviations).map(x => x.toLowerCase());

  return abbr.indexOf(unit) === -1? parseFloat(string) : num * Object.values(abbreviations)[abbr.indexOf(unit)];
}