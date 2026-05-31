import { formatCurrency } from "../utils/formatters/formatCurrency";
import { Button } from "@/components/ui/Button";
import { Trash2, Pencil } from "lucide-react";

export function DailyTableRow({ day, record, startEditData, deleteData }) {
  if (!record) {
    return (
      <tr className="border-b text-gray-400">
        <td className="p-3">{String(day.dayNumber).padStart(2, "0")}</td>
        <td className="p-3 capitalize">{day.weekday}</td>
        <td className="p-3">—</td>
        <td className="p-3">—</td>
        <td className="p-3">—</td>
        <td className="p-3">—</td>
        <td className="p-3">—</td>
        <td className="p-3">—</td>
        <td className="p-3">—</td>
        <td className="p-3">—</td>
      </tr>
    );
  }

  const earnings = Number(record.earnings);
  const expenses = Number(record.expenses);
  const workedHours = Number(record.workedHours);
  const distanceKm = Number(record.distanceKm);

  const profit = earnings - expenses;
  const gainPerHour = workedHours > 0 ? earnings / workedHours : 0;
  const gainPerKm = distanceKm > 0 ? earnings / distanceKm : 0;

  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="p-3">{String(day.dayNumber).padStart(2, "0")}</td>
      <td className="p-3 capitalize">{day.weekday}</td>
      <td className="p-3">{formatCurrency(earnings)}</td>
      <td className="p-3">{formatCurrency(expenses)}</td>
      <td className="p-3">{workedHours}h</td>
      <td className="p-3">{distanceKm} km</td>
      <td className="p-3">{formatCurrency(profit)}</td>
      <td className="p-3">{formatCurrency(gainPerHour)}</td>
      <td className="p-3">{formatCurrency(gainPerKm)}</td>
      <td className="p-3 flex gap-2">
        <Button variant="secondary" onClick={() => startEditData(record.id)}>
          <Pencil size={18} />
        </Button>
        <Button variant="danger" onClick={() => deleteData(record.id)}>
          <Trash2 size={18} />
        </Button>
      </td>
    </tr>
  );
}
