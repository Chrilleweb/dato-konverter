import { describe, it, expect } from 'vitest';
import { danishIsWeekend } from '../index';

describe('danishIsWeekend', () => {
  it('returnerer korrekt weekend status for lørdag', () => {
    const result = danishIsWeekend('2024-06-15T12:00:00Z');
    expect(result).toBe(true);
  });

  it('returnerer korrekt weekend status for søndag', () => {
    const result = danishIsWeekend('2024-06-16T12:00:00Z');
    expect(result).toBe(true);
  });

  it('returnerer korrekt weekend status for hverdag', () => {
    const result = danishIsWeekend('2024-06-17T12:00:00Z');
    expect(result).toBe(false);
  });
});
