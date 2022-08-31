module.exports = (ms, format) => {
  if(isNaN(ms)) return new TypeError('Paramentro não é um numero')

  let compact = false,
    displayAtMax = 8,
    separated = false,
    removeMs = false,
    includeMsInSeconds = false;

  if (typeof format === 'object') {
    if (typeof format.compact === 'boolean') compact = format.compact;
    if (typeof format.displayAtMax === 'number' && format.displayAtMax > 0 && format.displayAtMax < 9) displayAtMax = format.displayAtMax;
    if (typeof format.separated === 'boolean') separated = format.separated;
    if (typeof format.removeMs === 'boolean') removeMs = format.removeMs;
    if (typeof format.includeMsInSeconds === 'boolean') {
      includeMsInSeconds = format.includeMsInSeconds;
      removeMs = includeMsInSeconds || removeMs;
    }
  };

  ms = ms > Date.now() ? ms - Date.now() : Date.now() - ms;
  let decades = Math.floor(ms / 1000 / 60 / 60 / 24 / 30 / 12 / 10);
  ms -= decades * 1000 * 60 * 60 * 24 * 30 * 12 * 10;
  let years = Math.floor(ms / 1000 / 60 / 60 / 24 / 30 / 12);
  ms -= years * 1000 * 60 * 60 * 24 * 30 * 12;
  let months = Math.floor(ms / 1000 / 60 / 60 / 24 / 30);
  ms -= months * 1000 * 60 * 60 * 24 * 30;
  let days = Math.floor(ms / 1000 / 60 / 60 / 24);
  ms -= days * 1000 * 60 * 60 * 24;
  let hours = Math.floor(ms / 1000 / 60 / 60);
  ms -= hours * 1000 * 60 * 60;
  let minutes = Math.floor(ms / 1000 / 60);
  ms -= minutes * 1000 * 60;
  let seconds = Math.floor(ms / 1000);
  ms -= seconds * 1000;
  let time = {};
  if (decades && displayAtMax > 0) {
    time.decades = decades;
    displayAtMax--;
  };
  if (years && displayAtMax > 0) {
    time.years = years;
    displayAtMax--;
  };
  if (months && displayAtMax > 0) {
    time.months = months;
    displayAtMax--;
  };
  if (days && displayAtMax > 0) {
    time.days = days;
    displayAtMax--;
  };
  if (hours && displayAtMax > 0) {
    time.hours = hours;
    displayAtMax--;
  };
  if (minutes && displayAtMax > 0) {
    time.minutes = minutes;
    displayAtMax--;
  };
  if (seconds && displayAtMax > 0) {
    time.seconds = seconds;
    displayAtMax--;
  };
  if (ms && displayAtMax > 0 && !removeMs) {
    time.milliseconds = ms;
    displayAtMax--;
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
}