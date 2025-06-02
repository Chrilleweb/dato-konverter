import { describe, it, expect } from 'vitest';
import { danishWeekday } from '../index';

describe('danishWeekday', () => {
  it('returnerer korrekt dansk ugedag', () => {
    const result = danishWeekday('2024-06-15T12:00:00Z');
    expect(result).toBe('lør.');
  });

  it('returnerer korrekt dansk ugedag for skudår', () => {
    const result = danishWeekday('2024-02-29T00:00:00Z');
    expect(result).toBe('tors.');
  });

  it('returnerer korrekt dansk ugedag for vintertid', () => {
    const result = danishWeekday('2024-12-15T12:00:00Z');
    expect(result).toBe('søn.');
  });

  it('returnerer korrekt dansk ugedag for sommer- og vintertid', () => {
    const result = danishWeekday('2024-06-15T12:00:00Z');
    expect(result).toBe('lør.');
  });
  it('returnerer korrekt ugedag i lang format', () => {
    const result = danishWeekday('2024-06-15T12:00:00Z', { long: true });
    expect(result).toBe('lørdag');
  });
});
