export function konveterDatotilUTC(input: Date | string | number): string {
    // Sørg for, at input er et Date-objekt
    const date = input instanceof Date ? input : new Date(input);

    // Hvis datoen stadig er ugyldig, kast en fejl
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date provided to konveterDatotilUTC');
    }

    // Hent forskellen i minutter mellem lokal tid og UTC
    const timezoneOffset = date.getTimezoneOffset();

    // Juster tiden ved at tilføje timezone-offset til UTC
    const utcDate = new Date(date.getTime() - timezoneOffset * 60000);

    const year = utcDate.getUTCFullYear();
    const month = utcDate.toLocaleString('da-DK', { month: 'short' });
    const day = String(utcDate.getUTCDate()).padStart(2, '0');
    const hours = String(utcDate.getUTCHours()).padStart(2, '0');
    const minutes = String(utcDate.getUTCMinutes()).padStart(2, '0');

    return `${day}. ${month} ${year} kl. ${hours}:${minutes}`;
}
