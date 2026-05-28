import { useDailyData } from "./hooks/useDailyData";
import { DailyForm } from "./components/DailyForm";
import { DailyTable } from "./components/DailyTable";
import { Modal } from "../../components/Modal";
import { Button } from "../../components/ui/Button";

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
    error,
    editId,
  } = useDailyData();

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-2">
        <div className="flex justify-end">
          <Button variant="primary" onClick={openModal}>
            Adicionar diária
          </Button>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <DailyForm
            error={error}
            handleSubmit={handleSubmit}
            formData={formData}
            handleChange={handleChange}
            editId={editId}
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
