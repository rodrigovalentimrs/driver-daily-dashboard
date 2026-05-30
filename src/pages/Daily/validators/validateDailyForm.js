export function validateDailyForm(formData) {
  const errorMessage = {};

  const earnings = Number(formData.earnings);
  const expenses = Number(formData.expenses);
  const workedHours = Number(formData.workedHours);
  const distanceKm = Number(formData.distanceKm);

  if (!earnings) {
    errorMessage.earnings = "O campo ganhos é obrigatório";
  } else if (isNaN(earnings)) {
    errorMessage.earnings = "Digite um número válido";
  } else if (earnings <= 0) {
    errorMessage.earnings = "Valor deve ser maior que zero";
  }

  if (!expenses) {
    errorMessage.expenses = "O campo despesas é obrigatório";
  } else if (isNaN(expenses)) {
    errorMessage.expenses = "Digite um número válido";
  } else if (expenses < 0) {
    errorMessage.expenses = "Não pode ser negativo";
  }

  if (!workedHours) {
    errorMessage.workedHours = "O campo horas é obrigatório";
  } else if (isNaN(workedHours)) {
    errorMessage.workedHours = "Digite um número válido";
  } else if (workedHours <= 0) {
    errorMessage.workedHours = "Deve ser maior que zero";
  }

  if (!distanceKm) {
    errorMessage.distanceKm = "O campo distância é obrigatório";
  } else if (isNaN(distanceKm)) {
    errorMessage.distanceKm = "Digite um número válido";
  } else if (distanceKm < 0) {
    errorMessage.distanceKm = "Não pode ser negativo";
  }

  return errorMessage;
}