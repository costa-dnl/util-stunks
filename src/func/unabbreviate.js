const abbreviations = require('../abbreviations.json')

/**
 * @param {string} input 
 * @returns {TypeError | number}
 */

module.exports = (input) => {
  if(typeof input !== 'string') return new TypeError('Paramentro deve ser do tipo String.');
  let num = parseFloat(input.substr(0, input.length)),
    unit = input.substr(-1).toLowerCase(),
    abbr = Object.keys(abbreviations).map(x => x.toLowerCase());

  return abbr.indexOf(unit) === -1? parseFloat(input) : num * Object.values(abbreviations)[abbr.indexOf(unit)];
};