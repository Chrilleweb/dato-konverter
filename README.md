# dato-konverter

Dansk datoformat til JavaScript med korrekt tidszone (Europe/Copenhagen).  
Understøtter formater som `15. okt. 2024 kl. 13.00`, ugedag, ugenummer, weekend-detektion m.m.

[![npm version](https://badge.fury.io/js/dato-konverter.svg)](https://www.npmjs.com/package/dato-konverter)

---

## Installation

```bash
npm install dato-konverter
```

## Brug

```js
import { formatDanishDate } from "dato-konverter";

const newDate = formatDanishDate("2024-06-03T20:04:00Z");
// -> 03. jun. 2024

```

## Brug med fleksibel opsætning

```js
import { formatDanishDate } from "dato-konverter";

formatDanishDate("2024-06-03T20:04:00Z", {
  weekday: true,
  time: true,
  weekdayFormat: "short",
  monthFormat: "short",
  year: false,
  includeKl: false,
  leadingZero: false,
});
// -> "man. 3. jun. 22.04"
```

## API Reference

### formatDanishDate(input, options?)

### Formatterer en dato til dansk format.

| Option          | Type      | Default  | Beskrivelse                 |                      |
| --------------- | --------- | -------- | --------------------------- | -------------------- |
| `weekday`       | `boolean` | `false`  | Vis ugedag                  |                      |
| `weekdayFormat` | \`"short" | "long"\` | `"short"`                   | Kort/fuld ugedag     |
| `monthFormat`   | \`"short" | "long"\` | `"short"`                   | Kort/fuld månedsnavn |
| `year`          | `boolean` | `true`   | Vis årstal                  |                      |
| `time`          | `boolean` | `false`  | Tilføj klokkeslæt           |                      |
| `includeKl`     | `boolean` | `true`   | Om `kl.` skal vises ved tid |                      |

### Eksempel:

```bash
formatDanishDate("2024-06-15T12:00:00Z", {
  weekday: true,
  time: true,
  weekdayFormat: "long",
  monthFormat: "long"
});
// -> "lørdag den 15. juni 2024 kl. 14.00"
```

## License

MIT
