export function danishDateAndTime(
  input: Date | string | number,
  opts?: { longMonth?: boolean }
): string {
  const date = input instanceof Date ? input : new Date(input);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const monthFormat = opts?.longMonth ? 'long' : 'short';

  const datePart = date.toLocaleDateString('da-DK', {
    day: '2-digit',
    month: monthFormat,
    year: 'numeric',
    timeZone: 'Europe/Copenhagen',
  });

  const timePart = date.toLocaleTimeString('da-DK', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Europe/Copenhagen',
  });

  return `${datePart} kl. ${timePart}`;
}

export function danishTime (
  input: Date | string | number
): string {
  const date = input instanceof Date ? input : new Date(input);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  return date.toLocaleTimeString('da-DK', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Europe/Copenhagen',
  });
}
export function danishDate (
  input: Date | string | number,
  opts?: { longMonth?: boolean }
): string {
  const date = input instanceof Date ? input : new Date(input);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const monthFormat = opts?.longMonth ? 'long' : 'short';

  return date.toLocaleDateString('da-DK', {
    day: '2-digit',
    month: monthFormat,
    year: 'numeric',
    timeZone: 'Europe/Copenhagen',
  });
}
