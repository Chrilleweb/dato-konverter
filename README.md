# 🕒 Dato Konverter

Et simpelt værktøj der konverterer en JavaScript-dato til UTC og formaterer den i dansk format, fx:  
**`13. okt. 2024 kl. 15:54`**

## ✨ Funktioner

- ✅ Konverterer datoer til UTC-format
- 🇩🇰 Viser dato i dansk formatering
- 🧩 Let at integrere i ethvert projekt
- 📦 TypeScript support

## 📦 Installation

```bash
npm install dato-konverter
```

## 🚀 Brug

For at konvertere en dato, importér pakken og brug den som følger:

```bash
import { konveterDatotilUTC } from 'dato-konverter';

const date = new Date();
console.log(konveterDatotilUTC(dato));
// Output: fx "01. jun. 2025 kl. 14:12"
```

## License 
MIT
