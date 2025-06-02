import { describe, it, expect } from 'vitest';
import { formatDanishDate } from '../index';

describe('formatDanishDate', () => {
  it('should format date correctly without options', () => {
    const result = formatDanishDate('2024-06-15T12:00:00Z');
    expect(result).toBe('15. jun. 2024');
  });

  it('should format date correctly with weekday and time options', () => {
    const result = formatDanishDate('2024-06-15T12:00:00Z', { weekday: true, time: true });
    expect(result).toBe('lør. 15. jun. 2024 kl. 14.00');
  });
    it('should format date correctly with long weekdayFormat option', () => {
        const result = formatDanishDate('2024-06-15T12:00:00Z', { weekday: true, weekdayFormat: 'long' });
        expect(result).toBe('lørdag den 15. jun. 2024');
    });
    it('should format date correctly with long month option', () => {
        const result = formatDanishDate('2024-06-15T12:00:00Z', { monthFormat: 'long' });
        expect(result).toBe('15. juni 2024');
    });
    it('should format date correctly with long weekday and month options', () => {
        const result = formatDanishDate('2024-06-15T12:00:00Z', { weekday: true, weekdayFormat: 'long', monthFormat: 'long' });
        expect(result).toBe('lørdag den 15. juni 2024');
    });
    it('should format date with time correctly', () => {
    const result = formatDanishDate('2024-06-15T12:00:00Z', { time: true });
    expect(result).toBe('15. jun. 2024 kl. 14.00');
    });
    it('should format without year', () => {
        const result = formatDanishDate('2024-06-15T12:00:00Z', { year: false });
        expect(result).toBe('15. jun.');
    });
    it('should format all options together', () => {
        const result = formatDanishDate('2024-06-15T12:00:00Z', { weekday: true, time: true, weekdayFormat: 'long', monthFormat: 'long' });
        expect(result).toBe('lørdag den 15. juni 2024 kl. 14.00');
    });
    it('should format man. 3. jun kl. 22.04', () => {
        const result = formatDanishDate('2024-06-03T20:04:00Z', { weekday: true, time: true, weekdayFormat: 'short', monthFormat: 'short', year: false });
        expect(result).toBe('man. 03. jun. kl. 22.04');
    });
    it('should format man. 3. jun 22.04', () => {
        const result = formatDanishDate('2024-06-03T20:04:00Z', { weekday: true, time: true, weekdayFormat: 'short', monthFormat: 'short', year: false, includeKl: false });
        expect(result).toBe('man. 03. jun. 22.04');
    });
});
