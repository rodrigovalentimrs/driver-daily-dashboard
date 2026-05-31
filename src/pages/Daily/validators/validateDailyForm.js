export function validateDailyForm(formData) {
  const errors = {};

  const { earnings, expenses, workedHours, distanceKm } = formData;

  // Valida na ordem certa: vazio → inválido → regra de negócio
  if (earnings === "" || earnings === null) {
    errors.earnings = "O campo ganhos é obrigatório";
  } else if (isNaN(Number(earnings))) {
    errors.earnings = "Digite um número válido";
  } else if (Number(earnings) <= 0) {
    errors.earnings = "Valor deve ser maior que zero";
  }

  if (expenses === "" || expenses === null) {
    errors.expenses = "O campo despesas é obrigatório";
  } else if (isNaN(Number(expenses))) {
    errors.expenses = "Digite um número válido";
  } else if (Number(expenses) < 0) {
    errors.expenses = "Não pode ser negativo";
  }

  if (workedHours === "" || workedHours === null) {
    errors.workedHours = "O campo horas é obrigatório";
  } else if (isNaN(Number(workedHours))) {
    errors.workedHours = "Digite um número válido";
  } else if (Number(workedHours) <= 0) {
    errors.workedHours = "Deve ser maior que zero";
  }

  if (distanceKm === "" || distanceKm === null) {
    errors.distanceKm = "O campo distância é obrigatório";
  } else if (isNaN(Number(distanceKm))) {
    errors.distanceKm = "Digite um número válido";
  } else if (Number(distanceKm) < 0) {
    errors.distanceKm = "Não pode ser negativo";
  }

  return errors;
}
