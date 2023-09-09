# util-stunks

<div align="center">

  ![Versão](https://img.shields.io/npm/v/util-stunks?color=black&label=version)
  ![Downloads](https://img.shields.io/npm/dt/util-stunks?color=black)
  ![Tamanho](https://img.shields.io/bundlephobia/min/util-stunks?color=black)
  ![Licença](https://img.shields.io/npm/l/util-stunks?color=black)
</div>
  
## **abbreviate(input, [options]);**

*Retorna uma versão abreviada do mesmo com sufixos de unidade (mil, milhão, bilhão, etc).*<br />
> **Parâmentros:**
>
> * **input:**<br />
> type: number
>
> * **options:**<br />
> type: object
>
> options | type | default
> :-:|:-:|:-:
> display | number | 1
> round | boolean | false
 
### **Exemplos:**

```js
import { abbreviate } from "util-stunks";

abbreviate(100) // 100
abbreviate(1555400) // 1.5M
abbreviate(1555400, { display: 0 }); // 1M
abbreviate(1555400, { display: 2 }); // 1.55m
abbreviate(1555400, { round: true }); // 2M
```

## **relativeTime(input, [options]);**

*Retorna a diferença de tempo entre o tempo atual e o tempo de entrada.*
> **Parâmentros:**
> * **input:**<br />
> type: number
>
> * **options:**<br />
> type: object<br />
>
> options | type | default
> :-: | :-: | :-:
> compact | boolean | false
> display | number<sup>[1-7]</sup> | 7
> separated | boolean | false
> removeMs | boolean | false
> includeMsInSeconds | boolean | false

### **Exemplos:**

```js
import { relativeTime } from "util-stunks";

relativeTime(1679522572066); // 2 anos, 1 mês, 15 dias, 3 horas, 7 minutos, 1 segundo e 234 milissegundos
relativeTime(1679522572066, { compact: true }) // 2a 1me 15d 3h 7m 1s 234ms
relativeTime(1679522572066, { display: 3 }) // 2 anos, 1 mês e 15 dias
relativeTime(1679522572066, { includeMsInSeconds: true }) // 2 anos, 1 mês, 15 dias, 3 horas, 7 minutos e 1.2 segundo
relativeTime(1679522572066, { removeMs: true }); // 2 anos. 1 mês, 15 dias, 3 horas, 7 minutos e 1 segundo
```

## **unabbreviate(input);**

*Converte uma string abreviada que representa um número (por exemplo, "1K" para 1000) em sua forma completa.*
> **Parâmentros:**
> * **input:**<br />
> type: string

### **Exemplos:**

```js
import { unabbreviate } from "util-stunks";

unabbreviate("100"); // 100
unabbreviate("1M"); // 1000000
unabbreviate("1.5M"); // 1500000
unabbreviate("1.56M"); // 1560000
unabbreviate("1.555M"); // 1555000
```