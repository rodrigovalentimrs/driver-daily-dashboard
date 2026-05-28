import { useState } from "react";
import { validateDailyForm } from "../components/utils/validators/validateDailyForm"

export function useDailyData() {
    const initialFormData = {
        earnings: "",
        expenses: "",
        workedHours: "",
        distanceKm: ""
    };

    const [list, setList] = useState([]);
    const [formData, setformData] = useState(initialFormData)
    const [error, setError] = useState({})
    const [editId, setEditId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function resetFormData() {
        setformData(initialFormData);
    }

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
        resetFormData();
        setEditId(null);
        setError({});
    }
    function handleChange(e) {
        const { name, value } = e.target;

        setformData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const errors = validateDailyForm(formData);

        if (Object.keys(errors).length > 0) {
            setError(errors);
            return;
        }
        setError({});

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

        setformData({
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
        resetFormData();
        setEditId(null);
    }

    function deleteData(id) {
        setList((prev) => prev.filter((data) => data.id !== id));
    }


    return {
        list,
        formData,
        error,
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