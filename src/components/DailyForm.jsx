import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export function DailyForm({ formData, handleSubmit, handleChange, editId }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">
        {editId ? "Editar diária" : "Adicionar diária"}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="earnings">Ganhos</label>
          <Input
            type="number"
            name="earnings"
            id="earnings"
            step="0.01"
            min="0"
            value={formData.earnings}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="expenses">Despesas</label>
          <Input
            type="number"
            name="expenses"
            id="expenses"
            step="0.01"
            min="0"
            value={formData.expenses}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="workedHours">Horas trabalhadas</label>
          <Input
            type="number"
            name="workedHours"
            id="workedHours"
            step="0.01"
            min="0"
            value={formData.workedHours}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="distanceKm">Quilômetros rodados</label>
          <Input
            type="number"
            name="distanceKm"
            id="distanceKm"
            step="0.01"
            min="0"
            value={formData.distanceKm}
            onChange={handleChange}
          />
        </div>

        <Button type="submit">{editId ? "Salvar" : "Adicionar"}</Button>
      </form>
    </div>
  );
}
