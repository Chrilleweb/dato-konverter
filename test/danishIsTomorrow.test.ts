import { describe, it, expect } from "vitest";
import { danishIsTomorrow } from "../index";

describe('danishIsTomorrow', () => {
  it('returnerer korrekt status for i morgen', () => {
    const result = danishIsTomorrow(new Date(Date.now() + 86400000));
    expect(result).toBe(true);
  });

  it('returnerer korrekt status for ikke i morgen', () => {
    const result = danishIsTomorrow(new Date());
    expect(result).toBe(false);
  });
});
