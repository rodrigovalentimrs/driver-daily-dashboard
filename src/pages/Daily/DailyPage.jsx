import { useDailyData } from "./hooks/useDailyData";
import { DailyForm } from "./components/DailyForm";
import { DailyTable } from "./components/DailyTable";
import { Modal } from "@/components/Modal";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import { getCurrentMonthYear } from "./utils/getCurrentMonthYear";

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

  const { month, year } = getCurrentMonthYear();

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <d className="max-w-5xl mx-auto flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex items-baseline gap-2 px-4">
            <h2 className="text-2xl font-bold capitalize">{month}</h2>
            <span className="text-lg text-gray-500">{year}</span>{" "}
          </div>

          <Button onClick={openModal} className="flex items-center gap-2">
            <Plus className="w-5 h-5 stroke-[2.5]" />
            Adicionar diária
          </Button>
        </div>

{/* 
    =================================
    ====== CARD DE TOTAIS AQUI ======
    ================================= 
*/}

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
