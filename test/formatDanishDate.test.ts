import { describe, it, expect } from "vitest";
import { formatDanishDate } from "../index";

describe("formatDanishDate", () => {
  it("returnerer en dato uden ekstra indstillinger", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z");
    expect(result).toBe("15. jun. 2024");
  });

  it("returnerer en dato med ugedag og klokkeslæt", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z", {
      weekday: true,
      time: true,
    });
    expect(result).toBe("lør. 15. jun. 2024 kl. 14.00");
  });

  it("returnerer en dato med lang ugedagsformat", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z", {
      weekday: true,
      weekdayFormat: "long",
    });
    expect(result).toBe("lørdag den 15. jun. 2024");
  });

  it("returnerer en dato med lang månedsformat", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z", {
      monthFormat: "long",
    });
    expect(result).toBe("15. juni 2024");
  });

  it("returnerer en dato med lang ugedagsformat og månedsformat", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z", {
      weekday: true,
      weekdayFormat: "long",
      monthFormat: "long",
    });
    expect(result).toBe("lørdag den 15. juni 2024");
  });

  it("returnerer en dato med klokkeslæt", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z", { time: true });
    expect(result).toBe("15. jun. 2024 kl. 14.00");
  });

  it("returnerer en dato uden år", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z", { year: false });
    expect(result).toBe("15. jun.");
  });

  it("returnerer en dato med alle indstillinger sammen", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z", {
      weekday: true,
      time: true,
      weekdayFormat: "long",
      monthFormat: "long",
    });
    expect(result).toBe("lørdag den 15. juni 2024 kl. 14.00");
  });

  it("returnerer en dato med kort ugedagsformat og kort månedsformat", () => {
    const result = formatDanishDate("2024-06-03T20:04:00Z", {
      weekday: true,
      time: true,
      weekdayFormat: "short",
      monthFormat: "short",
      year: false,
    });
    expect(result).toBe("man. 03. jun. kl. 22.04");
  });

  it("returnerer en dato med kort ugedagsformat og kort månedsformat", () => {
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

  it("virker med timestamp", () => {
    const result = formatDanishDate(1718462400000, {
      weekday: true,
      time: true,
    });
    expect(result).toBe("lør. 15. jun. 2024 kl. 16.40");
  });

  it("virker med Date objekt input", () => {
    const result = formatDanishDate(new Date("2024-06-15T12:00:00Z"), {
      weekday: true,
    });
    expect(result).toBe("lør. 15. jun. 2024");
  });

  it("virker med standardindstillinger når ingen er angivet", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z");
    expect(result).toBe("15. jun. 2024");
  });

  it("skal kaste en fejl ved ugyldig dato input", () => {
    expect(() => formatDanishDate("not-a-date")).toThrow("Invalid date");
  });

  it("skal kaste en fejl med detaljeret fejlmeddelelse", () => {
    expect(() => formatDanishDate("🧠")).toThrow("Invalid date input: 🧠");
  });

  it("skal formatere med klokkeslæt og uden år, uden 'kl.'", () => {
    const result = formatDanishDate("2024-06-15T12:00:00Z", {
      time: true,
      includeKl: false,
      year: false,
    });
    expect(result).toBe("15. jun. 14.00");
  });

  it("skal vise midnat korrekt", () => {
    const result = formatDanishDate("2024-06-15T22:00:00Z", { time: true });
    expect(result).toBe("16. jun. 2024 kl. 00.00");
  });

  it("skal formatere dato uden foranstillet nul", () => {
    const result = formatDanishDate("2024-06-05T12:00:00Z", {
      weekday: true,
      time: true,
      leadingZero: false,
    });
    expect(result).toBe("ons. 5. jun. 2024 kl. 14.00");
  });
});
