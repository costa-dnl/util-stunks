const abbreviations = require('../abbreviations.json');

/**
 * @param {number | string} input
 * @param {{display?: number; round?: boolean}} format
 * @returns {TypeError | string}
 */

module.exports = (input, format) => {
    if(isNaN(input)) return new TypeError('Paramentro não é um numero');
    if(!input) return '0';

    let display = 1,
        round = false;
        
    if(typeof format === 'object') {
        if(typeof format.display === 'number' && format.display >= 0 && format.display <= 2) display = format.display;
        if(typeof format.round === 'boolean') round = format.round;
    };

    let result = String(input);
    display = Math.pow(10,display);
    let abbr = Object.keys(abbreviations);
    
    for(i=abbr.length-1; i>=0; i--) {
        size = Math.pow(10,(i+1)*3);
        if(size <= input) {
             result = round ? Math.round(input*display/size)/display : Math.floor(input*display/size)/display;
             result += abbr[i];
             break;
        };
    };
    
    return result;
};