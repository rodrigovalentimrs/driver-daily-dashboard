import { useState } from "react";

export function useDailyModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
}