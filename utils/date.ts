export const formatDateRange = (
  start: string,
  end: string,
  locale: string,
) => {
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

export const formatDayLabel = (dateStr: string, locale: string) => {
  const date = new Date(dateStr);
  const dayName = new Intl.DateTimeFormat(locale, { weekday: "short" }).format(
    date,
  );
  const dayNumber = date.getDate();
  return { dayName, dayNumber };
};

export const formatTime = (dateStr: string, locale: string) => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
};

export const getMonthsUntil = (dateStr: string): number => {
  const now = new Date();
  const target = new Date(dateStr);
  return (
    (target.getFullYear() - now.getFullYear()) * 12 +
    target.getMonth() -
    now.getMonth()
  );
};
