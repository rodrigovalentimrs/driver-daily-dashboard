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
    closeModal
  } = useDailyData();

  return (
    <main>
      <button onClick={openModal}>Adicionar diária</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <DailyForm
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
    </main>
  );
}
export default App;
