const abbreviations = require('../numberAbbreviations.json');

module.exports = (number, format) => {
    if(isNaN(number)) return new TypeError('Paramentro não é um numero');

    let displayAtMax = 0,
        round = false;
        
    if(typeof format === 'object') {
        if(typeof format.displayAtMax === 'number' && format.displayAtMax >= 0 && format.displayAtMax <= 2) displayAtMax = format.displayAtMax;
        if(typeof format.round === 'boolean') round = format.round;
    };
    if(!number) return 0;
    displayAtMax = Math.pow(10,displayAtMax);
    let abbr = Object.keys(abbreviations);
    
    for(i=abbr.length-1; i>=0; i--) {
        size = Math.pow(10,(i+1)*3);
        if(size <= number) {
             number = round ? Math.round(number*displayAtMax/size)/displayAtMax : Math.floor(number*displayAtMax/size)/displayAtMax;
             number += abbr[i];
             break;
        };
    };
    
    return number;
};