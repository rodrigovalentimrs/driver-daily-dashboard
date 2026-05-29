import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { X } from "lucide-react";

export function DailyForm({
  formData,
  handleSubmit,
  handleChange,
  editId,
  errors,
  closeModal,
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {editId ? "Editar diária" : "Adicionar diária"}
        </h2>

        <Button
          onClick={closeModal}
          variant="ghost"
          type="button"
        >
          <X size={18} />
        </Button>
      </div>

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
          {errors.earnings && (
            <p className="text-red-500 text-sm">{errors.earnings}</p>
          )}
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
          {errors.expenses && (
            <p className="text-red-500 text-sm">{errors.expenses}</p>
          )}
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
          {errors.workedHours && (
            <p className="text-red-500 text-sm">{errors.workedHours}</p>
          )}
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
          {errors.distanceKm && (
            <p className="text-red-500 text-sm">{errors.distanceKm}</p>
          )}
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="secondary" type="button" onClick={closeModal}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            {editId ? "Salvar" : "Adicionar"}
          </Button>
        </div>
      </form>
    </div>
  );
}
