const date = new Date();

console.log('dansk dato og tid');

import { danishDateAndTime } from './index.js';
const danskSommerTid = danishDateAndTime('2024-06-15T12:00:00.000Z'); // 15. jun. 2024 kl. 14:00
const danskVinterTid = danishDateAndTime('2024-12-15T12:00:00.000Z'); // 15. dec. 2024 kl. 13:00
console.log(danskSommerTid);
console.log(danskVinterTid);
const danskSkudaar = danishDateAndTime('2024-02-29T00:00:00.000Z'); // 29. feb. 2024 kl. 01:00
const danskDate = danishDateAndTime(date, { longMonth: true }); // Aktuel dato i dansk format
const danskDateShort = danishDateAndTime(date); // Aktuel dato i dansk format med kort måned
console.log(danskSkudaar);
console.log(danskDate);
console.log(danskDateShort);

console.log('dansk tid');
import { danishTime } from './index.js';
const danskSommerTidTime = danishTime('2024-06-15T12:00:00.000Z'); // 14:00
const danskVinterTidTime = danishTime('2024-12-15T12:00:00.000Z'); // 13:00
const danskSkudaarTime = danishTime('2024-02-29T00:00:00.000Z'); // 01:00
const danskTime = danishTime(date); // Aktuel tid i dansk format
console.log(danskSommerTidTime);
console.log(danskVinterTidTime);
console.log(danskSkudaarTime);
console.log(danskTime);

console.log('dansk dato');
import { danishDate } from './index.js';
const danskSommerTidDate = danishDate('2024-06-15T12:00:00.000Z'); // 15. jun. 2024
const danskVinterTidDate = danishDate('2024-12-15T12:00:00.000Z'); // 15. dec. 2024
const danskSkudaarDate = danishDate('2024-02-29T00:00:00.000Z'); // 29. feb. 2024
const danskDateDate = danishDate(date, { longMonth: true }); // Aktuel dato i dansk format
const danskDateShortDate = danishDate(date); // Aktuel dato i dansk format med kort måned
console.log(danskSommerTidDate);
console.log(danskVinterTidDate);
console.log(danskSkudaarDate);
console.log(danskDateDate);
console.log(danskDateShortDate);