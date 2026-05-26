export function DailyForm({ formData, handleSubmit, handleChange, editId }) {
  return (
    <div>
      <h2>{editId ? "Editar diária" : "Adicionar diária"}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="earnings">Ganhos</label>
        <input
          type="number"
          name="earnings"
          id="earnings"
          value={formData.earnings}
          onChange={handleChange}
        />

        <label htmlFor="expenses">Despesas</label>
        <input
          type="number"
          name="expenses"
          id="expenses"
          value={formData.expenses}
          onChange={handleChange}
        />

        <label htmlFor="workedHours">Horas trabalhadas</label>
        <input
          type="number"
          name="workedHours"
          id="workedHours"
          value={formData.workedHours}
          onChange={handleChange}
        />

        <label htmlFor="distanceKm">Quilômetros rodados</label>
        <input
          type="number"
          name="distanceKm"
          id="distanceKm"
          value={formData.distanceKm}
          onChange={handleChange}
        />

        <button type="submit">{editId ? "Salvar" : "Adicionar"}</button>
      </form>
    </div>
  );
}
