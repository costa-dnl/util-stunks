const { version } = require('../package.json');
const abbreviate = require('./func/abbreviate');
const relativeTime = require('./func/relativeTime');
const unabbreviate = require('./func/unabbreviate');

// Olá curioso :P

const index = new class utilStunks{
  constructor() {
    /**
    * * Versão do pacote
    */
    this.version = version;

    /**
    * * Função abreviadora de números
    * @param input O que vai ser transformado em número abreviado
    * @param format Opções para alterar formatação
    * @example
    * abbreviate(100); // 100
    * abbreviate(1555400); // 1M
    * abbreviate(1555400, {display:  1}); // 1.5M
    * abbreviate(1555400, {display:  2}); // 1.55M
    * abbreviate(1999, {round:  true}) // 2K
    */
    this.abbreviate = abbreviate;

    /**
     * * Função de tempo relativo
     * @param ms Será transformado em tempo relativo
     * @example
     * relativeTime(1601010101010); // 1 mes 15 dias 3 horas 7 minutos 40 segundos 54 milissegundos
     * relativeTime(1601010101010, {compact:  true}); // 1me 15d 3h 7m 40s 54ms
     * relativeTime(1601010101010, {displayAtMax:  3}); // 1 mes 15 dias 3 horas
     * relativeTime(1601010101010, {includeMsInSeconds:  true}); // 1 mes 15 dias 3 horas 7 minutos 40 segundos
     * relativeTime(1601010101010, {removeMs:  true}); // 1 mes 15 dias 3 horas 7 minutos 40 segundos
     * relativeTime(1601010101010, {separated:  true}); // {months: '1', days: '15', hours: '3', minutes: '7', seconds: '40', milliseconds: '54'}
     */
    this.relativeTime = relativeTime;

    /**
     * * Função desabreviadora
     * @param input O vai se ser desabreviado
     * @example
     * unabbreviate('100'); // 100
     * unabbreviate('1M'); // 1000000
     * unabbreviate('1.5M'); // 1500000
     * unabbreviate('1.56M'); // 1560000
     * unabbreviate('1.555M'); // 1555000
     */
    this.unabbreviate = unabbreviate;
  }
  
  /**
  * * Função de tempo relativo
  * @deprecated Essa função foi descontinuada e será removida em um futura atualização.
  * @param ms Será transformado em tempo relativo
  * @example
  * relativeTime(1601010101010); // 1 mes 15 dias 3 horas 7 minutos 40 segundos 54 milissegundos
  * relativeTime(1601010101010, {compact:  true}); // 1me 15d 3h 7m 40s 54ms
  * relativeTime(1601010101010, {displayAtMax:  3}); // 1 mes 15 dias 3 horas
  * relativeTime(1601010101010, {includeMsInSeconds:  true}); // 1 mes 15 dias 3 horas 7 minutos 40 segundos
  * relativeTime(1601010101010, {removeMs:  true}); // 1 mes 15 dias 3 horas 7 minutos 40 segundos
  * relativeTime(1601010101010, {separated:  true}); // {months: '1', days: '15', hours: '3', minutes: '7', seconds: '40', milliseconds: '54'}
  */
  durationTime(ms, format) {
    console.warn('--deprecated [#] [utilStunks]: A função "durationTime" foi descontinuada e será removida em alguma futura atualização. Para suprimir essa mensagem, troque a função pela "relativeTime".')
    return relativeTime(ms, format);
  }
};

module.exports = index;