import { describe, it, expect } from 'vitest';
import { danishDateAndTime } from '../index';

describe('danishDateAndTime', () => {
  it('returnerer korrekt dansk dato og tid', () => {
    const result = danishDateAndTime('2024-06-15T12:00:00Z');
    expect(result).toBe('15. jun. 2024 kl. 14.00');
  });

  it('returnerer korrekt dansk dato og tid med lang måned', () => {
    const result = danishDateAndTime('2024-06-15T12:00:00Z', { long: true });
    expect(result).toBe('15. juni 2024 kl. 14.00');
  });

  it('returnerer korrekt dansk dato og tid for skudår', () => {
    const result = danishDateAndTime('2024-02-29T00:00:00Z');
    expect(result).toBe('29. feb. 2024 kl. 01.00');
  });

  it('returnerer korrekt dansk dato og tid for vintertid', () => {
    const result = danishDateAndTime('2024-12-15T12:00:00Z');
    expect(result).toBe('15. dec. 2024 kl. 13.00');
  });

  it('returnerer korrekt dansk dato og tid for sommer- og vintertid', () => {
    const result = danishDateAndTime('2024-06-15T12:00:00Z');
    expect(result).toBe('15. jun. 2024 kl. 14.00');
  });
});