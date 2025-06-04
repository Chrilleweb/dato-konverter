/**
 * Hjælpefunktion til at parse en dato fra forskellige formater (Date, string, number).
 * @param input En dato som Date, string eller timestamp.
 * @throws Fejl hvis datoen er ugyldig.
 * @returns En gyldig Date-objekt.
 */
function parseDate(input: Date | string | number): Date {
  const date = input instanceof Date ? input : new Date(input);
  if (isNaN(date.getTime())) throw new Error(`Invalid date input: ${input}`);
  return date;
}

/**
 * Returnerer en dansk formateret dato med fleksible valg.
 * @param input En dato som Date, string eller timestamp.
 * @param opts Indstillinger for visning.
 * - weekday: true/false — skal ugedag vises?
 * - weekdayFormat: "short"/"long"
 * - monthFormat: "short"/"long"
 * - year: true/false — skal år vises? (default: true)
 * - time: true/false — skal klokkeslæt vises?
 * - includeKl: true/false — skal "kl." inkluderes i tidsformatet? (default: true)
 * - leadingZero: true/false — skal dag have foranstillet nul? (default: true)
 * @throws Fejl hvis datoen er ugyldig.
 * @example
 * formatDanishDate('2024-06-15T12:00:00Z', { weekday: true, year: false, time: true, includeKl: false });
 * // => "lør. 15. jun. 14.00"
 */
export function formatDanishDate(
  input: Date | string | number,
  opts?: {
    weekday?: boolean;
    weekdayFormat?: "short" | "long";
    monthFormat?: "short" | "long";
    year?: boolean;
    time?: boolean;
    includeKl?: boolean;
    leadingZero?: boolean;
  }
): string {
  const date = parseDate(input);
  const options: Intl.DateTimeFormatOptions = {
    weekday: opts?.weekday ? opts.weekdayFormat || "short" : undefined,
    day: opts?.leadingZero === false ? "numeric" : "2-digit",
    month: opts?.monthFormat || "short",
    year: opts?.year !== false ? "numeric" : undefined,
    timeZone: "Europe/Copenhagen",
  };

  const datePart = date.toLocaleDateString("da-DK", options);
  const timePart = opts?.time
    ? date.toLocaleTimeString("da-DK", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Europe/Copenhagen",
      })
    : "";

  const spacer = timePart
    ? opts?.includeKl === false
      ? ` ${timePart}`
      : ` kl. ${timePart}`
    : "";

  return `${datePart}${spacer}`;
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

/**
 * Formaterer en dato til en relativ dansk dato-streng.
 * @param input En dato som Date, string eller timestamp.
 * @throws Fejl hvis datoen er ugyldig.
 * @returns En formateret relativ dato-streng i dansk format.
 * @example
 * formatRelativeDanishDate('2024-06-12T07:58:00Z'); // "09.58"
 * formatRelativeDanishDate('2024-06-11T07:58:00Z'); // "i går 09.58"
 * formatRelativeDanishDate('2024-06-10T07:00:00Z'); // "mandag 10.06"
 * formatRelativeDanishDate('2024-05-27T08:41:00Z'); // "27.05 10.41"
 */
export function formatRelativeDanishDate(
  input: Date | string | number
): string {
  const date = parseDate(input);
  const now = new Date();

  const cphOpts = { timeZone: "Europe/Copenhagen" };

  const todayStr = now.toLocaleDateString("da-DK", cphOpts);
  const inputStr = date.toLocaleDateString("da-DK", cphOpts);

  const time = date
    .toLocaleTimeString("da-DK", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      ...cphOpts,
    })
    .replace(":", ".");

  // I dag
  if (inputStr === todayStr) return time;

  // I går
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const yesterdayStr = yesterday.toLocaleDateString("da-DK", cphOpts);

  if (inputStr === yesterdayStr) return `i går ${time}`;

  // Dato-forskel i dage
  const startOfNow = new Date(now);
  startOfNow.setHours(0, 0, 0, 0);

  const startOfDate = new Date(date);
  startOfDate.setHours(0, 0, 0, 0);

  const diffInMs = startOfNow.getTime() - startOfDate.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays > 0 && diffInDays <= 6) {
    const weekday = danishWeekday(date);
    const dayMonth = date.toLocaleDateString("da-DK", {
      day: "2-digit",
      month: "2-digit",
      timeZone: "Europe/Copenhagen",
    });
    return `${weekday} ${dayMonth}`;
  }

  // Ældre end 7 dage – vis dag.måned klokkeslæt
  return date
    .toLocaleString("da-DK", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      ...cphOpts,
    })
    .replace(",", "")
    .replace(":", ".");
}
