import { useDailyData } from "./hooks/useDailyData";
import { DailyForm } from "./components/DailyForm";
import { DailyTable } from "./components/DailyTable";
import { Modal } from "./components/Modal";

function App() {
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
    error
  } = useDailyData();

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <button onClick={openModal}>Adicionar diária</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <DailyForm
            error={error}
            handleSubmit={handleSubmit}
            formData={formData}
            handleChange={handleChange}
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
export default App;
