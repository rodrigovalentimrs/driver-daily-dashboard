export function getWeekDay(value) {
  if (!value) return "";

  const date = new Date(value);

  if (isNaN(date.getTime())) return "";

  return date.toLocaleDateString("pt-BR", {
    weekday: "long",
  })
  .replace("-feira", "");
}
