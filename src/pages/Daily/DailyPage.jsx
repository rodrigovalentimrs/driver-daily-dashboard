import { useDailyData } from "./hooks/useDailyData";
import { DailyForm } from "./components/DailyForm";
import { DailyTable } from "./components/DailyTable";
import { Modal } from "@/components/Modal";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

export function DailyPage() {
  const {
    handleSubmit,
    formData,
    handleChange,
    list,
    startEditData,
    deleteData,
    openModal,
    isModalOpen,
    closeModal,
    errors,
    editId,
  } = useDailyData();

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-2">
        <div className="flex justify-end">
          <Button onClick={openModal} className="flex items-center gap-2 px-4">
            <Plus className="w-5 h-5 stroke-[2.5]"/>Adicionar diária 
          </Button>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <DailyForm
            errors={errors}
            handleSubmit={handleSubmit}
            formData={formData}
            handleChange={handleChange}
            editId={editId}
            closeModal={closeModal}
          />
        </Modal>

        <DailyTable
          list={list}
          startEditData={startEditData}
          deleteData={deleteData}
        />
      </div>
    </main>
  );
}
export default DailyPage;
