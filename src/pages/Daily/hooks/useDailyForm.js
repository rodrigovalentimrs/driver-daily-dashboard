import { useState, useEffect } from "react";

const initialFormData = {
  earnings: "",
  expenses: "",
  workedHours: "",
  distanceKm: "",
};

export function useDailyForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function resetFormData() {
    setFormData(initialFormData);
  }

  useEffect(() => {
    if (!errors) return;

    const timer = setTimeout(() => {
      setErrors({});
    }, 2000);

    return () => clearTimeout(timer);
  }, [errors]);

  return {
    formData,
    setFormData,
    handleChange,

    errors,
    setErrors,

    editId,
    setEditId,

    resetFormData,
  };
}