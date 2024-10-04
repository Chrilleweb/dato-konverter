// Index filen
function konveterDatotilUTC(date) {
    // Hent forskellen i minutter mellem lokal tid og UTC
    const timezoneOffset = date.getTimezoneOffset(); 

    // Juster tiden ved at tilføje timezone-offset til UTC
    const utcDate = new Date(date.getTime() - timezoneOffset * 60000);

    const year = utcDate.getUTCFullYear();
    const month = utcDate.toLocaleString('da-DK', { month: 'short' });
    const day = String(utcDate.getUTCDate()).padStart(2, '0');
    const hours = String(utcDate.getUTCHours()).padStart(2, '0');
    const minutes = String(utcDate.getUTCMinutes()).padStart(2, '0');

    return `${day}. ${month} ${year} kl.${hours}:${minutes}`;
}

module.exports = konveterDatotilUTC;


  