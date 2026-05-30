export function getCurrentMonthYear() {
  const currentDate = new Date();

  return {
    month: currentDate.toLocaleDateString("pt-BR", {
      month: "long",
    }),
    year: currentDate.getFullYear(),
  };
}