import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { formatRelativeDanishDate } from "../index";

// Fast "nu"-dato for test: onsdag 12. juni 2024 kl. 10:30 dansk tid (08:30 UTC)
const FIXED_NOW = new Date("2024-06-12T08:30:00Z"); // DK: 10:30

describe("formatRelativeDanishDate", () => {
  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(FIXED_NOW);
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("smider fejl ved ugyldig dato", () => {
    expect(() => formatRelativeDanishDate("🍌")).toThrow("Invalid date input");
  });

  it("returnerer kun klokkeslæt hvis datoen er i dag", () => {
    const result = formatRelativeDanishDate("2024-06-12T07:58:00Z"); // DK: 09:58
    expect(result).toBe("09.58");
  });

  it('returnerer "i går" og klokkeslæt hvis datoen er i går', () => {
    const result = formatRelativeDanishDate("2024-06-11T07:58:00Z"); // DK: 09:58
    expect(result).toBe("i går 09.58");
  });

  it("returnerer ugedag og dato hvis det er inden for de seneste 7 dage", () => {
    const result = formatRelativeDanishDate("2024-06-10T07:00:00Z"); // DK: mandag 10.06
    expect(result).toBe("man. 10.06");
  });

  it("returnerer dag-måned og klokkeslæt hvis det er ældre end 7 dage", () => {
    const result = formatRelativeDanishDate("2024-05-27T08:41:00Z"); // DK: 27-05 10.41
    expect(result).toBe("27.05 10.41");
  });

  it("returnerer korrekt klokkeslæt også for midnat", () => {
    const result = formatRelativeDanishDate("2024-06-11T22:00:00Z"); // DK: 00.00 den 12/6
    expect(result).toBe("00.00");
  });
});
