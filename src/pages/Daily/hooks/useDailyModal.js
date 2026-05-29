import { useState, useEffect } from "react";

export function useDailyModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (!isModalOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        closeModal();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isModalOpen]);

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
}