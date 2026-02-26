/**
 * Formats a date range into a readable string (e.g. "3 – 10 January" or "28 December – 4 January").
 * When both dates fall in the same month, the month name is only displayed once.
 */
export const formatDateRange = (start: string, end: string, locale: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const dayFormatter = new Intl.DateTimeFormat(locale, { day: "numeric" });
  const monthDayFormatter = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
  });

  if (startDate.getMonth() === endDate.getMonth()) {
    return `${dayFormatter.format(startDate)} – ${monthDayFormatter.format(endDate)}`;
  }

  return `${monthDayFormatter.format(startDate)} – ${monthDayFormatter.format(endDate)}`;
};

/**
 * Extracts the abbreviated weekday name and day number from a date string.
 * Returns an object with `dayName` (e.g. "Mon") and `dayNumber` (e.g. 14).
 */
export const formatDayLabel = (dateStr: string, locale: string) => {
  const date = new Date(dateStr);
  const dayName = new Intl.DateTimeFormat(locale, { weekday: "short" }).format(
    date,
  );
  const dayNumber = date.getDate();
  return { dayName, dayNumber };
};

/**
 * Formats a date string into a localized time string (e.g. "3:30 PM" or "15:30").
 */
export const formatTime = (dateStr: string, locale: string) => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
};

/**
 * Calculates the number of months between now and a target date.
 * Returns a positive number for future dates and negative for past dates.
 */
export const getMonthsUntil = (dateStr: string): number => {
  const now = new Date();
  const target = new Date(dateStr);
  return (
    (target.getFullYear() - now.getFullYear()) * 12 +
    target.getMonth() -
    now.getMonth()
  );
};
