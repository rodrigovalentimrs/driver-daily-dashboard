import { Button } from "./ui/Button";
import { formatCurrency } from "./ui/formatters/formatCurrency";

export function DailyTableRow({ item, startEditData, deleteData }) {
  const earnings = Number(item.earnings);
  const expenses = Number(item.expenses);
  const hours = Number(item.workedHours);
  const km = Number(item.distanceKm);

  const profit = earnings - expenses;
  const gainPerHour = hours > 0 ? (earnings / hours).toFixed(2) : 0;
  const gainPerKm = km > 0 ? (earnings / km).toFixed(2) : 0;

  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="p-3">{formatCurrency(item.earnings)}</td>
      <td className="p-3">{formatCurrency(item.expenses)}</td>
      <td className="p-3">{item.workedHours}</td>
      <td className="p-3">{item.distanceKm}</td>
      <td className="p-3">{formatCurrency(gainPerHour)}</td>
      <td className="p-3">{formatCurrency(gainPerKm)}</td>
      <td className="p-3">{formatCurrency(profit)}</td>

      <td className="p-3">
        <Button variant="secondary" onClick={() => startEditData(item.id)}>Editar</Button>

        <Button variant="danger" onClick={() => deleteData(item.id)}>Excluir</Button>
      </td>
    </tr>
  );
}
