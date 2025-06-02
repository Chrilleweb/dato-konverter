import { describe, it, expect } from 'vitest';
import { danishIsToday } from '../index';

describe('danishIsToday', () => {
  it('returnerer korrekt status for i dag', () => {
    const result = danishIsToday(new Date());
    expect(result).toBe(true);
  });

  it('returnerer korrekt status for ikke i dag', () => {
    const result = danishIsToday(new Date('2024-06-14T12:00:00Z'));
    expect(result).toBe(false);
  });
});
