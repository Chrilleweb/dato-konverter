import { describe, it, expect } from 'vitest';
import { danishWeekNumber } from '../index';

describe('danishWeekNumber', () => {
  it('returnerer korrekt dansk uge nummer', () => {
    const result = danishWeekNumber('2024-06-15T12:00:00Z');
    expect(result).toBe(24);
  });

  it('returnerer korrekt dansk uge nummer for skudår', () => {
    const result = danishWeekNumber('2024-02-29T00:00:00Z');
    expect(result).toBe(9);
  });

  it('returnerer korrekt dansk uge nummer for vintertid', () => {
    const result = danishWeekNumber('2024-12-15T12:00:00Z');
    expect(result).toBe(50);
  });

  it('returnerer korrekt dansk uge nummer for sommer- og vintertid', () => {
    const result = danishWeekNumber('2024-06-15T12:00:00Z');
    expect(result).toBe(24);
  });
});