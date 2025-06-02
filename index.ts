function parseDate(input: Date | string | number): Date {
  const date = input instanceof Date ? input : new Date(input);
  if (isNaN(date.getTime())) throw new Error("Invalid date");
  return date;
}

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

export function danishTime(input: Date | string | number): string {
  const date = parseDate(input);

  return date.toLocaleTimeString("da-DK", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Copenhagen",
  });
}
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

export function danishIsWeekend(input: Date | string | number): boolean {
  const date = parseDate(input);
  const day = date.getDay(); // 0 = søndag, 6 = lørdag
  return day === 0 || day === 6;
}

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
