import { describe, it, expect } from 'vitest';
import { danishTime } from '../index';

describe('danishTime', () => {
  it('returnerer korrekt dansk tid for sommer- og vintertid', () => {
    const sommerTid = danishTime('2024-06-15T12:00:00Z');
    const vinterTid = danishTime('2024-12-15T12:00:00Z');
    expect(sommerTid).toBe('14.00');
    expect(vinterTid).toBe('13.00');
  });

  it('returnerer korrekt dansk tid for skudår', () => {
    const skudaarTid = danishTime('2024-02-29T00:00:00Z');
    expect(skudaarTid).toBe('01.00');
  });

  it('returnerer korrekt aktuel tid i dansk format', () => {
    const currentDate = new Date();
    const currentTime = danishTime(currentDate);
    expect(currentTime).toMatch(/\d{2}\.\d{2}/); // Matcher formatet HH.MM
  });
});