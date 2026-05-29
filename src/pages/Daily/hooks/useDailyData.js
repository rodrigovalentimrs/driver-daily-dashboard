import { useState } from "react";
import { validateDailyForm } from "../validators/validateDailyForm";

export function useDailyData() {
    const initialFormData = {
        earnings: "",
        expenses: "",
        workedHours: "",
        distanceKm: ""
    };

    const [list, setList] = useState([]);
    const [formData, setFormData] = useState(initialFormData)
    const [errors, setErrors] = useState({})
    const [editId, setEditId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function resetFormData() {
        setFormData(initialFormData);
    }

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
        resetFormData();
        setEditId(null);
        setErrors({});
    }
    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const errorMessage = validateDailyForm(formData);

        if (Object.keys(errorMessage).length > 0) {
            setErrors(errors);
            return;
        }
        setErrors({});

        if (editId !== null) {
            updateData();
        } else {
            addData();
        }
        closeModal();
    }

    function addData() {
        const newData = {
            id: crypto.randomUUID(),
            ...formData
        }

        setList((prev) => [...prev, newData]);
        resetFormData();


    }

    function startEditData(id) {
        const itemToEdit = list.find((data) => data.id === id);

        if (!itemToEdit) return;

        setFormData({
            earnings: itemToEdit.earnings,
            expenses: itemToEdit.expenses,
            workedHours: itemToEdit.workedHours,
            distanceKm: itemToEdit.distanceKm
        });

        setEditId(id);

        openModal();

    }

    function updateData() {
        setList((prev) =>
            prev.map((data) =>
                data.id === editId
                    ? {
                        ...formData,
                        id: editId

                    }
                    : data
            )
        )
        setEditId(null);
        resetFormData();

    }

    function deleteData(id) {
        setList((prev) => prev.filter((data) => data.id !== id));
    }


    return {
        list,
        formData,
        errors,
        editId,
        handleChange,
        handleSubmit,
        startEditData,
        isModalOpen,
        deleteData,
        openModal,
        closeModal

    }
}