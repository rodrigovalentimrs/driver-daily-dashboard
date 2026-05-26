import { useState } from "react";

export function useDailyData() {
    const [formData, setformData] = useState({
        earnings: "",
        expenses: "",
        workedHours: "",
        distanceKm: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;

        setformData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return {
        formData,
        handleChange,
        handleSubmit
    }
}