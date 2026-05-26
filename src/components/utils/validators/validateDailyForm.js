export function validateDailyForm(formData) {
  const errors = {};

  const earnings = Number(formData.earnings);
  const expenses = Number(formData.expenses);
  const workedHours = Number(formData.workedHours);
  const distanceKm = Number(formData.distanceKm);

  // earnings
  if (formData.earnings === "") {
    errors.earnings = "O campo ganhos é obrigatório";
  } else if (isNaN(earnings)) {
    errors.earnings = "Digite um número válido";
  } else if (earnings <= 0) {
    errors.earnings = "Valor deve ser maior que zero";
  }

  // expenses
  if (formData.expenses === "") {
    errors.expenses = "O campo despesas é obrigatório";
  } else if (isNaN(expenses)) {
    errors.expenses = "Digite um número válido";
  } else if (expenses < 0) {
    errors.expenses = "Não pode ser negativo";
  }

  // workedHours
  if (formData.workedHours === "") {
    errors.workedHours = "O campo horas é obrigatório";
  } else if (isNaN(workedHours)) {
    errors.workedHours = "Digite um número válido";
  } else if (workedHours <= 0) {
    errors.workedHours = "Deve ser maior que zero";
  }

  // distanceKm
  if (formData.distanceKm === "") {
    errors.distanceKm = "O campo distância é obrigatório";
  } else if (isNaN(distanceKm)) {
    errors.distanceKm = "Digite um número válido";
  } else if (distanceKm < 0) {
    errors.distanceKm = "Não pode ser negativo";
  }

  return errors;
}