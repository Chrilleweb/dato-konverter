# dato-konverter

Dansk datoformat til JavaScript med korrekt tidszone (Europe/Copenhagen) og tager højde for sommer- vintertid.

[![npm version (shields.io)](https://img.shields.io/npm/v/dato-konverter.svg)](https://www.npmjs.com/package/dato-konverter)
[![npm downloads](https://img.shields.io/npm/dt/dato-konverter.svg)](https://www.npmjs.com/package/dato-konverter)


---

## Installation

```bash
# npm
npm install dato-konverter

# yarn
yarn add dato-konverter

# pnpm
pnpm add dato-konverter
```

## Brug

```js
import { formatDanishDate } from "dato-konverter";

const date = formatDanishDate("2024-06-15T12:00:00Z");
// -> 15. jun. 2024

```

## Avanceret brug

```js
import { formatDanishDate } from "dato-konverter";

const date = formatDanishDate("2024-06-03T20:04:00Z", {
  weekday: true,
  time: true,
  weekdayFormat: "short",
  monthFormat: "short",
  year: false,
  includeKl: false,
  leadingZero: false,
});
// -> man. 3. jun. 22.04
```

## Øvrige funktioner

Pakken inkluderer også:

- `formatRelativeDanishDate`
- `danishWeekday`
- `danishWeekNumber`
- `danishIsWeekend`
- `danishIsToday`
- `danishIsTomorrow`

Alle funktioner understøtter `Date`, `string` og `timestamp` som input.  
Se JSDoc-kommentarer i koden for detaljer og eksempler.

## 🤝 Bidrag

Bidrag er meget velkomne!

## License

MIT

### Lavet af [chrilleweb](https://github.com/chrilleweb)
