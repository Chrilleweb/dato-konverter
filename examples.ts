// Dette er kun til manuelle eksempler og visuel test – ikke automatiseret test

const date = new Date();

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

const timestamp = 1718462400000;
const date1 = new Date(timestamp);

console.log(date1.toISOString()); // UTC tid
console.log(date1.toLocaleString("da-DK", { timeZone: "Europe/Copenhagen" })); // Dansk tid
