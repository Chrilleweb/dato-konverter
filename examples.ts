// Dette er kun til manuelle eksempler og visuel test – ikke automatiseret test

const date = new Date();

console.log('dansk dato, tid og ugedag');
import { danishFullDateTime } from './index.js';
const danskSommerTidWithWeekday = danishFullDateTime('2024-06-15T12:00:00.000Z'); // lørdag 15. jun. 2024 kl. 14:00
const danskVinterTidWithWeekday = danishFullDateTime('2024-12-15T12:00:00.000Z'); // søndag 15. dec. 2024 kl. 13:00
const danskSkudaarWithWeekday = danishFullDateTime('2024-02-29T00:00:00.000Z'); // torsdag 29. feb. 2024 kl. 01:00
const danskDateAndTimeWithWeekday = danishFullDateTime(date, { long: true }); // Aktuel dato, tid og ugedag i dansk format
console.log(danskSommerTidWithWeekday);
console.log(danskVinterTidWithWeekday);
console.log(danskSkudaarWithWeekday);
console.log(danskDateAndTimeWithWeekday);

console.log('dansk dato og tid');

import { danishDateAndTime } from './index.js';
const danskSommerTid = danishDateAndTime('2024-06-15T12:00:00.000Z'); // 15. jun. 2024 kl. 14:00
const danskVinterTid = danishDateAndTime('2024-12-15T12:00:00.000Z'); // 15. dec. 2024 kl. 13:00
console.log(danskSommerTid);
console.log(danskVinterTid);
const danskSkudaar = danishDateAndTime('2024-02-29T00:00:00.000Z'); // 29. feb. 2024 kl. 01:00
const danskDate = danishDateAndTime(date, { long: true }); // Aktuel dato i dansk format
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
const danskDateDate = danishDate(date, { long: true }); // Aktuel dato i dansk format
const danskDateShortDate = danishDate(date); // Aktuel dato i dansk format med kort måned
console.log(danskSommerTidDate);
console.log(danskVinterTidDate);
console.log(danskSkudaarDate);
console.log(danskDateDate);
console.log(danskDateShortDate);

console.log('dansk ugedag');
import { danishWeekday } from './index.js';
const danskSommerTidWeekday = danishWeekday('2024-06-15T12:00:00.000Z'); // lørdag
const danskVinterTidWeekday = danishWeekday('2024-12-15T12:00:00.000Z'); // søndag
const danskSkudaarWeekday = danishWeekday('2024-02-29T00:00:00.000Z', {long: true}); // torsdag
const danskWeekday = danishWeekday(date); // Aktuel ugedag i dansk format
console.log(danskSommerTidWeekday);
console.log(danskVinterTidWeekday);
console.log(danskSkudaarWeekday);
console.log(danskWeekday);

console.log('dansk ugenummer');
import { danishWeekNumber } from './index.js';
const danskSommerTidWeekNumber = danishWeekNumber('2024-06-15T12:00:00.000Z'); // 24
const danskVinterTidWeekNumber = danishWeekNumber('2024-12-15T12:00:00.000Z'); // 50
const danskSkudaarWeekNumber = danishWeekNumber('2024-02-29T00:00:00.000Z'); // 9
const danskWeekNumber = danishWeekNumber(date); // Aktuel ugenummer i dansk format
console.log(danskSommerTidWeekNumber);
console.log(danskVinterTidWeekNumber);
console.log(danskSkudaarWeekNumber);
console.log(danskWeekNumber);

console.log('dansk er det weekend?');
import { danishIsWeekend } from './index.js';
const danskSommerTidIsWeekend = danishIsWeekend('2024-06-15T12:00:00.000Z'); // true
const danskVinterTidIsWeekend = danishIsWeekend('2024-12-15T12:00:00.000Z'); // true
const danskSkudaarIsWeekend = danishIsWeekend('2024-02-29T00:00:00.000Z'); // false
const danskIsWeekend = danishIsWeekend(date); // Aktuel dato er weekend?
console.log(danskSommerTidIsWeekend);
console.log(danskVinterTidIsWeekend);
console.log(danskSkudaarIsWeekend);
console.log(danskIsWeekend);

console.log('er det i dag?');
import { danishIsToday } from './index.js';
const danskSommerTidIsToday = danishIsToday('2024-06-15T12:00:00.000Z'); // false
const danskVinterTidIsToday = danishIsToday('2024-12-15T12:00:00.000Z'); // false
const danskSkudaarIsToday = danishIsToday('2024-02-29T00:00:00.000Z'); // false
const danskIsToday = danishIsToday(date); // true 
console.log(danskSommerTidIsToday);
console.log(danskVinterTidIsToday);
console.log(danskSkudaarIsToday);
console.log(danskIsToday);

console.log('Er det i morgen?');
import { danishIsTomorrow } from './index.js';
const isItTomorrow = danishIsTomorrow(date); // false
const isItTomorrowTrue = danishIsTomorrow(new Date(Date.now() + 24 * 60 * 60 * 1000)); // true, hvis det er i morgen
console.log(isItTomorrow); // false, da det ikke er i morgen
console.log(isItTomorrowTrue); // true, hvis det er i morgen

console.log('Formatér dansk dato med valgfri ugedag og tid');
import { formatDanishDate } from './index.js';
const formattedDate = formatDanishDate('2024-06-15T12:00:00.000Z');
const formattedDateLong = formatDanishDate('2024-06-15T12:00:00.000Z', { weekday: true, weekdayFormat: 'long', monthFormat: 'long', time: true });
console.log(formattedDate);
console.log(formattedDateLong);