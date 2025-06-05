import { describe, it, expect } from "vitest";
import { formatDanishRange } from "../index";

describe("formatDanishRange", () => {
  it("skal returnere et datointerval på samme dag", () => {
    const from = new Date("2024-06-01T10:00");
    const to = new Date("2024-06-01T14:30");
    expect(formatDanishRange(from, to)).toBe("1. jun. 10.00 – 14.30");
  });

  it("skal returnere et datointerval over flere dage", () => {
    const from = new Date("2024-06-01");
    const to = new Date("2024-06-03");
    expect(formatDanishRange(from, to)).toBe("1. – 3. jun.");
  });

    it("skal returnere et datointerval over flere år", () => {
        const from = new Date("2024-06-01");
        const to = new Date("2025-06-01");
        expect(formatDanishRange(from, to)).toBe("1. jun. 2024 – 1. jun. 2025");
    });
});
