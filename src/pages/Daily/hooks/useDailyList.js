import { useState, useEffect } from "react";
import { saveDailyData, getDailyData } from "@/pages/Daily/services/dailyStorage";

export function useDailyList() {
  const [list, setList] = useState(() => getDailyData() || []);

  function addData(formData) {
    const now = new Date();

    const newData = {
      id: crypto.randomUUID(),
      ...formData,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
    };

    setList((prev) => [...prev, newData]);
  }

  function updateData(editId, formData) {
    setList((prev) =>
      prev.map((data) =>
        data.id === editId
          ? {
            ...data,
            ...formData,
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