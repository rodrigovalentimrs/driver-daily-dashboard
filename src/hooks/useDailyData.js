import { useState } from "react";
import validateDailyForm from "../componets/utils/validators/validateDailyForm"

export function useDailyData() {
    const initialFormData = {
        earnings: "",
        expenses: "",
        workedHours: "",
        distanceKm: ""
    };

    const [list, setList] = useState([]);
    const [formData, setformData] = useState(initialFormData)
    const [error, setError] = useState("")
    const [editId, setEditId] = useState(null);

    function resetFormData(){
        setformData(initialFormData);
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

        const errorMessage = validateDailyForm(formData);

        if (errorMessage) {
            setError(errorMessage);
            return
        };
        setError("");

        if (editId !== null) {
            updateData();
        } else {
            addData();
        }
        resetFormData();
    }

    function addData() {
        const newData = {
            id: crypto.randomUUID(),
            earnings: formData.earnings,
            expenses: formData.expenses,
            workedHours: formData.workedHours,
            distanceKm: formData.distanceKm
        }

        setList((prev) => [...prev, newData])

    }

    function startEditData(id) {
        const itemToEdit = list.find((data) => data.id === id);

        if (!itemToEdit) return;

        setformData(itemToEdit)
        setEditId(id);
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
        addData,
        startEditData,
        deleteData,
    }
}