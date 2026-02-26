import { formatDateRange, formatDayLabel, formatTime, getMonthsUntil } from "../date";

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date("2026-02-24"));
});

afterEach(() => {
  jest.useRealTimers();
});

describe("formatDateRange", () => {
  it("shows only start day when same month", () => {
    const result = formatDateRange("2026-06-10", "2026-06-18", "fr-FR");
    expect(result).toBe("10 – 18 juin");
  });

  it("shows full month for both dates when different months", () => {
    const result = formatDateRange("2026-06-28", "2026-07-05", "fr-FR");
    expect(result).toBe("28 juin – 5 juillet");
  });

  it("formats correctly with en-US locale for same month", () => {
    const result = formatDateRange("2026-03-10", "2026-03-20", "en-US");
    expect(result).toBe("10 – March 20");
  });

  it("formats correctly with en-US locale for different months", () => {
    const result = formatDateRange("2026-03-28", "2026-04-05", "en-US");
    expect(result).toBe("March 28 – April 5");
  });

  it("handles year boundary crossing", () => {
    const result = formatDateRange("2026-12-28", "2027-01-04", "fr-FR");
    expect(result).toBe("28 décembre – 4 janvier");
  });
});

describe("formatDayLabel", () => {
  it("returns short day name and day number for fr-FR", () => {
    const result = formatDayLabel("2026-06-10", "fr-FR");
    expect(result).toEqual({ dayName: "mer.", dayNumber: 10 });
  });

  it("returns short day name and day number for en-US", () => {
    const result = formatDayLabel("2026-06-10", "en-US");
    expect(result).toEqual({ dayName: "Wed", dayNumber: 10 });
  });

  it("preserves locale day name format", () => {
    const result = formatDayLabel("2026-06-15", "fr-FR");
    expect(result.dayName).toBe("lun.");
  });

  it("returns correct day number at month boundary", () => {
    const result = formatDayLabel("2026-07-01", "en-US");
    expect(result.dayNumber).toBe(1);
  });
});

describe("formatTime", () => {
  it("formats morning time in en-US with AM", () => {
    const result = formatTime("2026-06-10T09:30:00", "en-US");
    expect(result).toBe("9:30 AM");
  });

  it("formats afternoon time in en-US with PM", () => {
    const result = formatTime("2026-06-10T14:00:00", "en-US");
    expect(result).toBe("2:00 PM");
  });

  it("formats time in fr-FR with 24h format", () => {
    const result = formatTime("2026-06-10T14:00:00", "fr-FR");
    expect(result).toBe("14:00");
  });

  it("formats midnight correctly", () => {
    const result = formatTime("2026-06-10T00:00:00", "en-US");
    expect(result).toBe("12:00 AM");
  });
});

describe("getMonthsUntil", () => {
  it("returns positive months for a future date in the same year", () => {
    expect(getMonthsUntil("2026-06-15")).toBe(4);
  });

  it("returns positive months for a future date in the next year", () => {
    expect(getMonthsUntil("2027-02-01")).toBe(12);
  });

  it("returns 0 for a date in the current month", () => {
    expect(getMonthsUntil("2026-02-28")).toBe(0);
  });

  it("returns negative months for a past date", () => {
    expect(getMonthsUntil("2025-12-01")).toBe(-2);
  });

  it("returns 1 for the next month", () => {
    expect(getMonthsUntil("2026-03-01")).toBe(1);
  });
});
