import { konveterDatotilUTC } from './index.js';

const date = new Date();

const sommerTid = konveterDatotilUTC('2024-06-15T12:00:00.000Z'); // 15. jun. 2024 kl. 14:00
const vinterTid = konveterDatotilUTC('2024-12-15T12:00:00.000Z'); // 15. dec. 2024 kl. 13:00
console.log(sommerTid);
console.log(vinterTid);

const skudaar = konveterDatotilUTC('2024-02-29T00:00:00.000Z'); // 29. feb. 2024 kl. 01:00
console.log(skudaar);

console.log(konveterDatotilUTC(date));
