export function getCurrentMonthYear() {
  const currentDate = new Date();

  return {
    month: currentDate.toLocaleDateString("pt-BR", {
      month: "long",
    }),
    year: currentDate.getFullYear(),
  };
}

export function getMonthDays() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const totalDays = new Date(year, month + 1, 0).getDate();

  const days = [];

  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(year, month, day);

    const weekday = date
      .toLocaleDateString("pt-BR", { weekday: "long" })
      .replace("-feira", "");

    days.push({
      dayNumber: day,
      weekday,
      isoDate: date.toISOString(),
    });
  }

  return days;
}
