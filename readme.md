

# util-stunks:
![PACKAGE VESION](https://img.shields.io/npm/v/util-stunks?color=red&label=util-stunks&style=for-the-badge) ![PACKAGE DOWNLOADS](https://img.shields.io/npm/dw/util-stunks?color=red&label=Donwload&style=for-the-badge) ![PACKAGE SIZE](https://img.shields.io/bundlephobia/min/util-stunks?color=red&label=Size&style=for-the-badge) ![PACKAGE LICENSE](https://img.shields.io/npm/l/util-stunks?color=red&style=for-the-badge)

## Exemplos de código:
```javascript
const {abbreviate, durationTime, unabbreviate} =  require('util-stunks');

// abbreviate()
abbreviate(100); // 100
abbreviate(1555400); // 1M
abbreviate(1555400, {display:  1}); // 1.5M
abbreviate(1555400, {display:  2}); // 1.55M
abbreviate(1999, {roud:  true}) // 2K

// unabbreviate()
unabbreviate('100'); // 100
unabbreviate('1M'); // 1000000
unabbreviate('1.5M'); // 1500000
unabbreviate('1.56M'); // 1560000
unabbreviate('1.555M'); // 1555000

// durationTime()
durationTime(1635008358383); // 1 mes 15 dias 3 horas 7 minutos 40 segundos 54 milissegundos
durationTime(1642999635317); // 1 ano 2 meses 15 dias 2 horas 1 segundo 402 milisegundos.

durationTime(1635008358383, {compact:  true}); // 1me 15d 3h 7m 40s 54ms
durationTime(1642999635317, {compact:  true}); // 1a 2me 15d 2h 1s 402ms

durationTime(1635008358383, {displayAtMax:  3}); // 1 mes 15 dias 3 horas
durationTime(1642999635317, {displayAtMax:  2}); // 1 ano 2 meses

durationTime(1635008358383, {includeMsInSeconds: true}); // 1 mes 15 dias 3 horas 7 minutos 40 segundos
durationTime(1642999635317, {includeMsInSeconds: true}); // 1 ano 2 meses 15 dias 2 horas 1.4 segundos

durationTime(1635008358383, {removeMs: true}); // 1 mes 15 dias 3 horas 7 minutos 40 segundos
durationTime(1642999635317, {removeMs: true}); // 1 ano 2 meses 15 dias 2 horas 1 segundo

durationTime(1635008358383, {separated: true}); // {months: 1, days: 15, hours: 3, minutes: 7, seconds: 40, milliseconds: 54}
durationTime(1642999635317, {separated: true}); // {years: 1, months: 2, days: 15, hours: 2, seconds: 1, milliseconds: 402}
```

> ### abbreviate(número, opções?)
> * **número:**<br>
> Tipo: number<br>
> Padrão: null<br>
>
> opções | tipo | padrão
> :-: | :-: | :-:
> display | number | 1
> round | boolean | false

  

> #### durationTime(milissegundos, opções?)

>* **milissegundos**:<br>
> Tipo: number<br>
> Padrão: null<br>

> opções | tipo | padrão
> :-:|:-:|:-:
> compact | boolean | false
> displayAtMax | number | 8
> includeMsInSeconds | boolean | false
> removeMs | boolean | false
> separated | boolean | false

  

> #### unabbreviate(abreviação)
>* **abreviação:**<br>
> Tipo: string<br>
> Padrão: null<br>

### Changelogs: `v1.1.0` => `v1.1.1`
* **Mudanças:**<br>
Reformulação geral na função `unabbreviate()`, arrumado o erro em que você poderia colocar a letra na frente dos números, arrumado o erro de colocar qualquer caractere nela e ainda sim funcionar. 