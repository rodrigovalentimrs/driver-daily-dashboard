import { useState, useEffect } from "react";
import { saveDailyData, getDailyData } from "@/pages/Daily/services/dailyStorage";
import { getWeekDay } from "@/pages/Daily/utils/formatters/formatWeekDay";

export function useDailyList() {
  const [list, setList] = useState(() => getDailyData() || []);

function addData(formData, dayNumber) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const date = new Date(year, month, dayNumber);

  const newData = {
    id: crypto.randomUUID(),
    earnings: parseFloat(formData.earnings) || 0,
    expenses: parseFloat(formData.expenses) || 0,
    workedHours: parseFloat(formData.workedHours) || 0,
    distanceKm: parseFloat(formData.distanceKm) || 0,
    date: date.toISOString(),
    weekday: getWeekDay(date.toISOString()),
    createdAt: date.toISOString(),
    updatedAt: date.toISOString(),
  };

  setList((prev) => [...prev, newData]);
}

  function updateData(editId, formData) {
    setList((prev) =>
      prev.map((data) =>
        data.id === editId
          ? {
              ...data,
              earnings: parseFloat(formData.earnings) || 0,
              expenses: parseFloat(formData.expenses) || 0,
              workedHours: parseFloat(formData.workedHours) || 0,
              distanceKm: parseFloat(formData.distanceKm) || 0,
              updatedAt: new Date().toISOString(),
            }
          : data
      )
    );
  }

  function deleteData(id) {
    setList((prev) =>
      prev.filter((data) => data.id !== id)
    );
  }

  useEffect(() => {
    try {
      saveDailyData(list);
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  }, [list]);

  return {
    list,
    addData,
    updateData,
    deleteData,
  };
}