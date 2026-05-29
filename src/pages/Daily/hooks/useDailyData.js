import { validateDailyForm } from "../validators/validateDailyForm";
import { useDailyModal } from "./useDailyModal";
import { useDailyForm } from "./useDailyForm";
import { useDailyList } from "./useDailyList";

export function useDailyData() {
  const {
    formData,
    setFormData,
    handleChange,

    errors,
    setErrors,

    editId,
    setEditId,

    resetFormData,
  } = useDailyForm();

  const {
    list,
    addData,
    updateData,
    deleteData,
  } = useDailyList();

  const {
    isModalOpen,
    openModal,
    closeModal: closeModalState,
  } = useDailyModal();

  function closeModal() {
    closeModalState();

    resetFormData();
    setEditId(null);
    setErrors({});
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors =
      validateDailyForm(formData);

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    if (editId !== null) {
      updateData(editId, formData);
    } else {
      addData(formData);
    }

    closeModal();
  }

  function startEditData(id) {
    const itemToEdit = list.find(
      (data) => data.id === id
    );

    if (!itemToEdit) return;

    setFormData({
      earnings: itemToEdit.earnings,
      expenses: itemToEdit.expenses,
      workedHours: itemToEdit.workedHours,
      distanceKm: itemToEdit.distanceKm,
    });

    setEditId(id);

    openModal();
  }

  return {
    handleSubmit,

    formData,
    handleChange,

    list,

    startEditData,
    deleteData,

    openModal,
    closeModal,
    isModalOpen,

    errors,
    editId,
  };
}