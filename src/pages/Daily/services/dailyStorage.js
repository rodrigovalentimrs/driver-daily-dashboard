const STORAGE_KEY = "driver-daily-list";

export function saveDailyData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getDailyData() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Erro ao ler localStorage:", error);
    return [];
  }
}