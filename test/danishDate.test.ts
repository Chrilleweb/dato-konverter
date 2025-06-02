import { describe, it, expect } from 'vitest';
import { danishDate } from '../index';

describe('danishDate', () => {
  it('returnerer korrekt dansk dato', () => {
    const result = danishDate('2024-06-15T12:00:00Z');
    expect(result).toBe('15. jun. 2024');
  });
    it('returnerer korrekt dansk dato med lang måned', () => {
        const result = danishDate('2024-06-15T12:00:00Z', { long: true });
        expect(result).toBe('15. juni 2024');
    });
    it('returnerer korrekt dansk dato for skudår', () => {
        const result = danishDate('2024-02-29T00:00:00Z');
        expect(result).toBe('29. feb. 2024');
    });
    it('returnerer korrekt dansk dato for vintertid', () => {
        const result = danishDate('2024-12-15T12:00:00Z');
        expect(result).toBe('15. dec. 2024');
    });
    it('returnerer korrekt dansk dato for sommer- og vintertid', () => {
        const result = danishDate('2024-06-15T12:00:00Z');
        expect(result).toBe('15. jun. 2024');
    });
});
