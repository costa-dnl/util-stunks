![](https://img.shields.io/npm/v/util-stunks?color=black&label=version) ![](https://img.shields.io/npm/dt/util-stunks?color=black) ![](https://img.shields.io/bundlephobia/min/util-stunks?color=black) ![](https://img.shields.io/npm/l/util-stunks?color=black)

## Exemplos de código:
```js
const {abbreviate, unabbreviate, relativeTime} = require('util-stunks');

// abbreviate()
abbreviate(100); // 100
abbreviate(1555400); // 1M
abbreviate(1555400, {display:  1}); // 1.5M
abbreviate(1555400, {display:  2}); // 1.55M
abbreviate(1999, {round:  true}) // 2K
  
// unabbreviate()
unabbreviate('100'); // 100
unabbreviate('1M'); // 1000000
unabbreviate('1.5M'); // 1500000
unabbreviate('1.56M'); // 1560000
unabbreviate('1.555M'); // 1555000

// relativeTime() // Nota: os resultados são fictícios;
relativeTime(1601010101010); // 1 mes 15 dias 3 horas 7 minutos 40 segundos 54 milissegundos
relativeTIme(1620202020202); // 1 ano 2 meses 15 dias 2 horas 1 segundo 402 milissegundos

relativeTime(1601010101010, {compact:  true}); // 1me 15d 3h 7m 40s 54ms
relativeTime(1620202020202, {compact:  true}); // 1a 2me 15d 2h 1s 402ms

relativeTime(1601010101010, {display:  3}); // 1 mes 15 dias 3 horas
relativeTime(1620202020202, {display:  2}); // 1 ano 2 meses

relativeTime(1601010101010, {includeMsInSeconds:  true}); // 1 mes 15 dias 3 horas 7 minutos 40 segundos
relativeTime(1620202020202, {includeMsInSeconds:  true}); // 1 ano 2 meses 15 dias 2 horas 1.4 segundo

relativeTime(1601010101010, {removeMs:  true}); // 1 mes 15 dias 3 horas 7 minutos 40 segundos
relativeTime(1620202020202, {removeMs:  true}); // 1 ano 2 meses 15 dias 2 horas 1 segundo

relativeTime(1601010101010, {separated:  true}); // {months: '1', days: '15', hours: '3', minutes: '7', seconds: '40', milliseconds: '54'}
relativeTime(1620202020202, {separated:  true}); // {years: '1', months: '2', days: '15', hours: '2', seconds: '1', milliseconds: '402'}

```

> ### abbreviate(input, format?)
> * **input:**<br>
> Tipe: number | string <br>
>
>* **format?:**<br>
> Tipe: Object<br>
> 
> format| tipo | padrão
> :-: | :-: | :-:
> display | number | 1
> round | boolean | false

> #### relativeTime(ms, format?)
>* **ms**:<br>
> Tipo: number<br>
>
>* **format?:**<br>
> Tipe: Object<br>
> 
> format| tipo | padrão
> :-:|:-:|:-:
> compact | boolean | false
> display | number | 8
> includeMsInSeconds | boolean | false
> removeMs | boolean | false
> separated | boolean | false

  

> #### unabbreviate(input)
>* **input:**<br>
> Type: string<br>

### Changelogs: `v1.1.7` => `v1.1.8`:
 - **Adicionado:**<br>
 **Na `v1.1.7`:** Foi adicioado o `version` apenas para vê a versão do pacote (UaU)<br><br>
 - **Mudanças:**<br>
 **Mudança de nome de opção nas funções:** Agora `displayAtMax` é `display` em todas as funções.<br>
 **Estava perdido?** Agora tem indicações nas funções explicando como usa-las.<br>
 **Mais uma polida:** Foi dada mais um polida na função `relativeTime`.
 **é o fim do durationTime?** durationTime foi marcado como descontinuado e na próxima atualização deixará de existir no pacote.<br><br>
 
 > Querendo que alguma função entre no pacote? Entre em contato comigo no Discord ou no GitHub.<br>
 > [Discord](https://discord.com/@users/418088590334230548)<br>
 > [GitHub](https://github.com/costa-dnl)<br>