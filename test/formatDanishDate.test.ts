import { describe, it, expect } from "vitest";
import { formatDanishDate } from "../index";

describe("formatDanishDate", () => {
  it("should format date correctly without options", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z");
    expect(result).toBe("15. jun. 2024");
  });

  it("should format date correctly with weekday and time options", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z", {
      weekday: true,
      time: true,
    });
    expect(result).toBe("lør. 15. jun. 2024 kl. 14.00");
  });

  it("should format date correctly with long weekdayFormat option", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z", {
      weekday: true,
      weekdayFormat: "long",
    });
    expect(result).toBe("lørdag den 15. jun. 2024");
  });

  it("should format date correctly with long month option", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z", {
      monthFormat: "long",
    });
    expect(result).toBe("15. juni 2024");
  });

  it("should format date correctly with long weekday and month options", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z", {
      weekday: true,
      weekdayFormat: "long",
      monthFormat: "long",
    });
    expect(result).toBe("lørdag den 15. juni 2024");
  });

  it("should format date with time correctly", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z", { time: true });
    expect(result).toBe("15. jun. 2024 kl. 14.00");
  });

  it("should format without year", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z", { year: false });
    expect(result).toBe("15. jun.");
  });

  it("should format all options together", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z", {
      weekday: true,
      time: true,
      weekdayFormat: "long",
      monthFormat: "long",
    });
    expect(result).toBe("lørdag den 15. juni 2024 kl. 14.00");
  });

  it("should format man. 3. jun kl. 22.04", () => {
    const result = formatDanishDate("2024-06-03T20:04:00Z", {
      weekday: true,
      time: true,
      weekdayFormat: "short",
      monthFormat: "short",
      year: false,
    });
    expect(result).toBe("man. 03. jun. kl. 22.04");
  });

  it("should format man. 3. jun 22.04", () => {
    const result = formatDanishDate("2024-06-03T20:04:00Z", {
      weekday: true,
      time: true,
      weekdayFormat: "short",
      monthFormat: "short",
      year: false,
      includeKl: false,
    });
    expect(result).toBe("man. 03. jun. 22.04");
  });

  it("should work with timestamp", () => {
    const result = formatDanishDate(1718462400000, {
      weekday: true,
      time: true,
    });
    expect(result).toBe("lør. 15. jun. 2024 kl. 16.40");
  });

  it("should work with Date object input", () => {
    const result = formatDanishDate(new Date("2024-06-15T12:00:00Z"), {
      weekday: true,
    });
    expect(result).toBe("lør. 15. jun. 2024");
  });

  it("should use default options when none are provided", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z");
    expect(result).toBe("15. jun. 2024");
  });

  it("should throw an error on invalid date input", () => {
    expect(() => formatDanishDate("not-a-date")).toThrow("Invalid date");
  });

  it("should throw with detailed error message", () => {
    expect(() => formatDanishDate("🧠")).toThrow("Invalid date input: 🧠");
  });

  it('should format with time and no year, without "kl."', () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z", {
      time: true,
      includeKl: false,
      year: false,
    });
    expect(result).toBe("15. jun. 14.00");
  });

  it("should correctly show midnight time", () => {
    const result = formatDanishDate("2024-06-15T22:00:00Z", { time: true }); // 00:00 DK
    expect(result).toBe("16. jun. 2024 kl. 00.00");
  });
});
