import { useDailyData } from "./hooks/useDailyData";
import { DailyForm } from "./componets/DailyForm";

function App() {
  const { handleSubmit, earnings, handleChange } = useDailyData();
  return (
    <main>
      <DailyForm
        handleSubmit={handleSubmit}
        earnings={earnings}
        handleChange={handleChange}
      />
    </main>
  );
}
export default App;
