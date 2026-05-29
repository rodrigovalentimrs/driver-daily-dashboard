import { useState } from "react";

export function useDailyList() {
  const [list, setList] = useState([]);

  function addData(formData) {
    const newData = {
      id: crypto.randomUUID(),
      ...formData,
    };

    setList((prev) => [...prev, newData]);
  }

  function updateData(editId, formData) {
    setList((prev) =>
      prev.map((data) =>
        data.id === editId
          ? { ...data, ...formData }
          : data
      )
    );
  }

  function deleteData(id) {
    setList((prev) =>
      prev.filter((data) => data.id !== id)
    );
  }

  return {
    list,
    addData,
    updateData,
    deleteData,
  };
}