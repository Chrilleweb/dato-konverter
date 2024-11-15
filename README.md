# Dato Konverter

Dette projekt konverterer en JavaScript dato til UTC-tidszonen og formaterer datoen i et læsbart dansk format som '13. okt. 2024 kl. 15:54'.

## Funktioner

- Konvertering af datoer til UTC-format
- Formatering af datoer i dansk format
- Nem at integrere i eksisterende projekter

## Installation

    ```console
    npm install dato-konverter
    ```

## Brug

For at konvertere en dato, importér pakken og brug den som følger:
```javascript
import convertToUTC from 'dato-konverter';

const date = new Date();
console.log(convertToUTC(date));
