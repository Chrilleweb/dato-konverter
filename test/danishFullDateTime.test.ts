import { describe, it, expect } from 'vitest';
import { danishFullDateTime } from '../index';

describe('danishFullDateTime', () => {
  it('returnerer korrekt dansk dato og tid', () => {
    const result = danishFullDateTime('2024-06-15T12:00:00Z');
    expect(result).toBe('lør. 15. jun. 2024 kl. 14.00');
  });
  it('returnerer korrekt dansk dato og tid med lang måned', () => {
    const result = danishFullDateTime('2024-06-15T12:00:00Z', { long: true });
    expect(result).toBe('lørdag den 15. juni 2024 kl. 14.00');
  });
  it('returnerer korrekt dansk dato og tid for skudår', () => {
    const result = danishFullDateTime('2024-02-29T00:00:00Z');
    expect(result).toBe('tors. 29. feb. 2024 kl. 01.00');
  });
  it('returnerer korrekt dansk dato og tid for vintertid', () => {
    const result = danishFullDateTime('2024-12-15T12:00:00Z');
    expect(result).toBe('søn. 15. dec. 2024 kl. 13.00');
  });
  it('returnerer korrekt dansk dato og tid for sommer- og vintertid', () => {
    const result = danishFullDateTime('2024-06-15T12:00:00Z');
    expect(result).toBe('lør. 15. jun. 2024 kl. 14.00');
  });
});
