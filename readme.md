# util-stunks

Utilitários pequenos para abreviar números, expandir abreviações, formatar
durações e selecionar itens aleatórios. O pacote é escrito em TypeScript e
inclui declarações de tipos.

[![npm](https://img.shields.io/npm/v/util-stunks?label=vers%C3%A3o)](https://www.npmjs.com/package/util-stunks)
[![CI](https://github.com/costa-dnl/util-stunks/actions/workflows/ci.yml/badge.svg)](https://github.com/costa-dnl/util-stunks/actions/workflows/ci.yml)
[![licença](https://img.shields.io/npm/l/util-stunks)](LICENSE)

## Instalação

```bash
npm install util-stunks
```

## Uso

```ts
import {
  abbreviate,
  msToTime,
  randomArray,
  relativeTime,
  unabbreviate,
} from "util-stunks";

abbreviate(1_500); // "1.5K"
unabbreviate("1.5K"); // 1500
msToTime(61_000, { display: 2, removeMs: true });
// "1 minuto e 1 segundo"

const items = ["a", "b", "c"];
randomArray(items, { quantity: 2, removeSelectItem: false });
```

### Tempo relativo e rótulos

`relativeTime` recebe um timestamp, opções de exibição e, opcionalmente,
rótulos personalizados:

```ts
relativeTime(
  Date.now() - 3_660_000,
  { display: 2, removeMs: true },
  {
    hours: { unique: "hour", plural: "hours" },
    minutes: { unique: "minute", plural: "minutes" },
    separator: "and",
  },
);
// "1 hour and 1 minute"
```

Rótulos omitidos usam os valores padrão em português. Quando `compact` é
`true`, os sufixos compactos originais (`h`, `m`, `s`) são mantidos.

## API

| Função | Finalidade |
| --- | --- |
| `abbreviate(number, options?)` | Converte números para formatos como `1.5K` |
| `unabbreviate(string)` | Converte formatos como `1.5K` para `1500` |
| `msToTime(milliseconds, options?)` | Formata uma duração em texto |
| `relativeTime(timestamp, options?, labels?)` | Calcula e formata a distância até um timestamp |
| `randomArray(array, options?)` | Seleciona itens aleatórios, opcionalmente removendo-os |

Os tipos públicos de opções e rótulos também podem ser importados do pacote.

## Desenvolvimento

Requer Node.js 24 e npm:

```bash
npm ci
npm run typecheck
npm test
npm run build
npm run test:dist
npm pack --dry-run
```

O build é gravado em `dist`; `test:dist` valida a mesma entrada JavaScript usada
pelos consumidores do pacote. Consulte [CONTRIBUTING.md](CONTRIBUTING.md) antes
de enviar mudanças e [SECURITY.md](SECURITY.md) para relatar vulnerabilidades.

## Licença

[MIT](LICENSE)
