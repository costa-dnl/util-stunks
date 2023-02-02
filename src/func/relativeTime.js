/**
 * @param {number} ms 
 * @param {{compact: boolean; display: number; separated: boolean; removeMs: boolean; includeMsInSeconds: boolean}} format 
 * @returns {TypeError | string | {decades: string; years: string; months: string; days: string; hours: string; minutes: string; seconds: string; milliseconds: string}}
 */

module.exports = (ms, format) => {
  if(isNaN(ms)) return new TypeError('Paramentro não é um numero')

  let compact = false,
    display = 8,
    separated = false,
    removeMs = false,
    includeMsInSeconds = false;

  if (typeof format === 'object') {
    if (typeof format.compact === 'boolean') compact = format.compact;
    if (typeof format.display === 'number' && format.display > 0 && format.display < 9) display = format.display;
    if (typeof format.separated === 'boolean') separated = format.separated;
    if (typeof format.removeMs === 'boolean') removeMs = format.removeMs;
    if (typeof format.includeMsInSeconds === 'boolean') {
      includeMsInSeconds = format.includeMsInSeconds;
      removeMs = includeMsInSeconds || removeMs;
    }
  };

  ms = ms > Date.now() ? ms - Date.now() : Date.now() - ms;
  let decades = Math.floor(ms / 1000 / 60 / 60 / 24 / 30.5 / 12 / 10);
  ms -= decades * 1000 * 60 * 60 * 24 * 30.5 * 12 * 10;
  let years = Math.floor(ms / 1000 / 60 / 60 / 24 / 30.5 / 12);
  ms -= years * 1000 * 60 * 60 * 24 * 30.5 * 12;
  let months = Math.floor(ms / 1000 / 60 / 60 / 24 / 30.5);
  ms -= months * 1000 * 60 * 60 * 24 * 30.5;
  let days = Math.floor(ms / 1000 / 60 / 60 / 24);
  ms -= days * 1000 * 60 * 60 * 24;
  let hours = Math.floor(ms / 1000 / 60 / 60);
  ms -= hours * 1000 * 60 * 60;
  let minutes = Math.floor(ms / 1000 / 60);
  ms -= minutes * 1000 * 60;
  let seconds = Math.floor(ms / 1000);
  ms -= seconds * 1000;
  let time = {};
  if (decades && display > 0) {
    time.decades = decades;
    display--;
  };
  if (years && display > 0) {
    time.years = years;
    display--;
  };
  if (months && display > 0) {
    time.months = months;
    display--;
  };
  if (days && display > 0) {
    time.days = days;
    display--;
  };
  if (hours && display > 0) {
    time.hours = hours;
    display--;
  };
  if (minutes && display > 0) {
    time.minutes = minutes;
    display--;
  };
  if (seconds && display > 0) {
    time.seconds = seconds;
    display--;
  };
  if (ms && display > 0 && !removeMs) {
    time.milliseconds = ms;
    display--;
  } else if (String(ms).length > 2 && time.seconds && includeMsInSeconds) {
    time.seconds = Number(time.seconds + '.' + String(ms)[0]);
  };
  if (separated) return time;

  time.decades ? (compact ? time.decades = time.decades + 'dec' : (time.decades > 1 ? time.decades = time.decades + ' décadas' : time.decades = time.decades + ' década')) : '';
  time.years ? (compact ? time.years = time.years + 'a' : (time.years > 1 ? time.years = time.years + ' anos' : time.years = time.years + ' ano')) : '';
  time.months ? (compact ? time.months = time.months + 'me' : (time.months > 1 ? time.months = time.months + ' meses' : time.months = time.months + ' mes')) : '';
  time.days ? (compact ? time.days = time.days + 'd' : (time.days > 1 ? time.days = time.days + ' dias' : time.days = time.days + ' dia')) : '';
  time.hours ? (compact ? time.hours = time.hours + 'h' : (time.hours > 1 ? time.hours = time.hours + ' horas' : time.hours = time.hours + ' hora')) : '';
  time.minutes ? (compact ? time.minutes = time.minutes + 'm' : (time.minutes > 1 ? time.minutes = time.minutes + ' minutos' : time.minutes = time.minutes + ' minuto')) : '';
  time.seconds ? (compact ? time.seconds = time.seconds + 's' : (time.seconds >= 2 ? time.seconds = time.seconds + ' segundos' : time.seconds = time.seconds + ' segundo')) : '';
  time.milliseconds ? (compact ? time.milliseconds = time.milliseconds + 'ms' : (time.milliseconds > 1 ? time.milliseconds = time.milliseconds + ' milissegundos' : time.milliseconds = time.milliseconds + ' milissegundo')) : '';
  
  return Object.values(time).join(' ')
};