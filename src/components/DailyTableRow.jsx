export function DailyTableRow({ item, startEditData, deleteData }) {
  const earnings = Number(item.earnings);
  const expenses = Number(item.expenses);
  const hours = Number(item.workedHours);
  const km = Number(item.distanceKm);

  const profit = earnings - expenses;
  const gainPerHour = hours > 0 ? (earnings / hours).toFixed(2) : 0;
  const gainPerKm = km > 0 ? (earnings / km).toFixed(2) : 0;

  return (
    <tr>
      <td>{item.earnings}</td>
      <td>{item.expenses}</td>
      <td>{item.workedHours}</td>
      <td>{item.distanceKm}</td>
      <td>{gainPerHour}</td>
      <td>{gainPerKm}</td>
      <td>{profit}</td>

      <td>
        <button onClick={() => startEditData(item.id)}>Editar</button>

        <button onClick={() => deleteData(item.id)}>Excluir</button>
      </td>
    </tr>
  );
}
