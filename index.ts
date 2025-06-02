/**
 * Hjælpefunktion til at parse en dato fra forskellige formater (Date, string, number).
 * @param input En dato som Date, string eller timestamp.
 * @throws Fejl hvis datoen er ugyldig.
 * @returns En gyldig Date-objekt.
 */
function parseDate(input: Date | string | number): Date {
  const date = input instanceof Date ? input : new Date(input);
  if (isNaN(date.getTime())) throw new Error("Invalid date");
  return date;
}

/**
 * Returnerer en dansk formateret ugedag, dato og klokkeslæt, fx: "lør. 15. jun. 2024 kl. 14.00".
 * @param input En dato som Date, string eller timestamp.
 * @param opts Valgfrit - brug `{ long: true }` for fulde måneds og ugedagsnavne. F.eks: "lørdag den 15. juni 2024 kl. 14.00".
 * @throws Fejl hvis datoen er ugyldig.
 * @returns En formateret ugedag, dato og klokkeslæt i dansk format.
 * @example
 * danishFullDateTime('2024-06-15T12:00:00Z'); // "lør. 15. jun. 2024 kl. 14.00"
 * danishFullDateTime('2024-06-15T12:00:00Z', { long: true }); // "lørdag den 15. juni 2024 kl. 14.00"
 */
export function danishFullDateTime(
  input: Date | string | number,
  opts?: { long?: boolean }
): string {
  const date = parseDate(input);
  const monthFormat = opts?.long ? "long" : "short";
  const weekdayFormat = opts?.long ? "long" : "short";
  const datePart = date.toLocaleDateString("da-DK", {
    weekday: weekdayFormat,
    day: "2-digit",
    month: monthFormat,
    year: "numeric",
    timeZone: "Europe/Copenhagen",
  });
  const timePart = date.toLocaleTimeString("da-DK", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Copenhagen",
  });
  return `${datePart} kl. ${timePart}`;
}

/**
 * Returnerer en dansk formateret dato og klokkeslæt, fx: "15. okt. 2024 kl. 13.00".
 * @param input En dato som Date, string eller timestamp.
 * @param opts Valgfrit - brug `{ long: true }` for fulde månedsnavne. F.eks: "15. oktober 2024 kl. 13.00".
 * @throws Fejl hvis datoen er ugyldig.
 * @returns En formateret dato og klokkeslæt i dansk format.
 * @example
 * danishDateAndTime('2024-06-15T12:00:00Z'); // "15. jun. 2024 kl. 14.00"
 * danishDateAndTime('2024-06-15T12:00:00Z', { long: true }); // "15. juni 2024 kl. 14.00"
 */
export function danishDateAndTime(
  input: Date | string | number,
  opts?: { long?: boolean }
): string {
  const date = parseDate(input);

  const monthFormat = opts?.long ? "long" : "short";

  const datePart = date.toLocaleDateString("da-DK", {
    day: "2-digit",
    month: monthFormat,
    year: "numeric",
    timeZone: "Europe/Copenhagen",
  });

  const timePart = date.toLocaleTimeString("da-DK", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Copenhagen",
  });

  return `${datePart} kl. ${timePart}`;
}

/**
 * Returnerer en dansk formateret klokkeslæt, fx: "14.00".
 * @param input En dato som Date, string eller timestamp.
 * @throws Fejl hvis datoen er ugyldig.
 * @returns En formateret klokkeslæt i dansk format.
 * @example
 * danishTime('2024-06-15T12:00:00Z'); // "14.00"
 */
export function danishTime(input: Date | string | number): string {
  const date = parseDate(input);

  return date.toLocaleTimeString("da-DK", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Copenhagen",
  });
}

/**
 * Returnerer en dansk formateret dato, fx: "15. jun. 2024".
 * @param input En dato som Date, string eller timestamp.
 * @param opts Valgfrit - brug `{ long: true }` for fulde månedsnavne. F.eks: "15. juni 2024".
 * @throws Fejl hvis datoen er ugyldig.
 * @returns En formateret dato i dansk format.
 * @example
 * danishDate('2024-06-15T12:00:00Z'); // "15. jun. 2024"
 * danishDate('2024-06-15T12:00:00Z', { long: true }); // "15. juni 2024"
 */
export function danishDate(
  input: Date | string | number,
  opts?: { long?: boolean }
): string {
  const date = parseDate(input);

  const monthFormat = opts?.long ? "long" : "short";

  return date.toLocaleDateString("da-DK", {
    day: "2-digit",
    month: monthFormat,
    year: "numeric",
    timeZone: "Europe/Copenhagen",
  });
}

/**
 * Returnerer en dansk formateret ugedag, fx: "lør.".
 * @param input En dato som Date, string eller timestamp.
 * @param opts Valgfrit - brug `{ long: true }` for fulde ugedagsnavne. F.eks: "lørdag".
 * @throws Fejl hvis datoen er ugyldig.
 * @returns En formateret ugedag i dansk format.
 * @example
 * danishWeekday('2024-06-15T12:00:00Z'); // "lør."
 * danishWeekday('2024-06-15T12:00:00Z', { long: true }); // "lørdag"
 */
export function danishWeekday(
  input: Date | string | number,
  opts?: { long?: boolean }
): string {
  const date = parseDate(input);

  return date.toLocaleDateString("da-DK", {
    weekday: opts?.long ? "long" : "short",
    timeZone: "Europe/Copenhagen",
  });
}

/**
 * Returnerer den danske ugenummer for en given dato. F.eks: 24 for 15. juni 2024.
 * @param input En dato som Date, string eller timestamp.
 * @throws Fejl hvis datoen er ugyldig.
 * @returns Et dansk ugenummer (1–53).
 * @example
 * danishWeekNumber('2024-06-15T12:00:00Z'); // 24
 */
export function danishWeekNumber(input: Date | string | number): number {
  const date = parseDate(input);
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

/**
 * Tjekker om en given dato er i weekenden (lørdag eller søndag) i Danmark.
 * @param input En dato som Date, string eller timestamp.
 * @throws Fejl hvis datoen er ugyldig.
 * @returns En boolean der angiver om datoen er i weekenden.
 * @example
 * danishIsWeekend('2024-06-15T12:00:00Z'); // true (lørdag)
 * danishIsWeekend('2024-06-16T12:00:00Z'); // true (søndag)
 * danishIsWeekend('2024-06-17T12:00:00Z'); // false (mandag)
 */
export function danishIsWeekend(input: Date | string | number): boolean {
  const date = parseDate(input);
  const day = date.getDay(); // 0 = søndag, 6 = lørdag
  return day === 0 || day === 6;
}

/**
 * Tjekker om en given dato er i dag.
 * @param input En dato som Date, string eller timestamp.
 * @throws Fejl hvis datoen er ugyldig.
 * @returns En boolean der angiver om datoen er i dag.
 * @example
 * danishIsToday('2024-06-15T12:00:00Z'); // false (hvis i dag er 16. juni 2024)
 * danishIsToday(new Date()); // true (hvis i dag er 16. juni 2024)
 */
export function danishIsToday(input: Date | string | number): boolean {
  const date = parseDate(input);
  const today = new Date();

  const inputStr = date.toLocaleDateString("da-DK", {
    timeZone: "Europe/Copenhagen",
  });
  const todayStr = today.toLocaleDateString("da-DK", {
    timeZone: "Europe/Copenhagen",
  });

  return inputStr === todayStr;
}

/**
 * Tjekker om en given dato er i morgen.
 * @param input En dato som Date, string eller timestamp.
 * @throws Fejl hvis datoen er ugyldig.
 * @returns En boolean der angiver om datoen er i morgen.
 * @example
 * danishIsTomorrow('2024-06-16T12:00:00Z'); // true (hvis i dag er 15. juni 2024)
 * danishIsTomorrow(new Date()); // false (hvis i dag er 16. juni 2024)
 */
export function danishIsTomorrow(input: Date | string | number): boolean {
  const date = parseDate(input);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const inputStr = date.toLocaleDateString("da-DK", {
    timeZone: "Europe/Copenhagen",
  });
  const tomorrowStr = tomorrow.toLocaleDateString("da-DK", {
    timeZone: "Europe/Copenhagen",
  });

  return inputStr === tomorrowStr;
}
