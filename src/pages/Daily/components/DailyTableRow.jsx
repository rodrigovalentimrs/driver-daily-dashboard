import {formatDate} from "../utils/formatters/formatDate";
import {getWeekDay} from "../utils/formatters/formatWeekDay";
import { formatCurrency } from "../utils/formatters/formatCurrency";
import { Button } from "@/components/ui/Button";
import { Trash2, Pencil } from "lucide-react";

export function DailyTableRow({ item, startEditData, deleteData }) {
  const date = formatDate(item.date);
  const weekday = getWeekDay(item.date);
  const earnings = Number(item.earnings);
  const expenses = Number(item.expenses);
  const workedHours = Number(item.workedHours);
  const distanceKm = Number(item.distanceKm);

  const profit = earnings - expenses;
  const gainPerHour = workedHours > 0 ? (earnings / workedHours).toFixed(2) : 0;
  const gainPerKm = distanceKm > 0 ? (earnings / distanceKm).toFixed(2) : 0;

  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="p-3">{date}</td>
      <td className="p-3">{weekday}</td>
      <td className="p-3">{formatCurrency(earnings)}</td>
      <td className="p-3">{formatCurrency(expenses)}</td>
      <td className="p-3">{workedHours}</td>
      <td className="p-3">{distanceKm}</td>
      <td className="p-3">{formatCurrency(gainPerHour)}</td>
      <td className="p-3">{formatCurrency(gainPerKm)}</td>
      <td className="p-3">{formatCurrency(profit)}</td>

      <td className="p-3 flex gap-2">
        <Button variant="secondary" onClick={() => startEditData(item.id)}><Pencil size={18} /></Button>

        <Button variant="danger" onClick={() => deleteData(item.id)}><Trash2 size={18} /></Button>
      </td>
    </tr>
  );
}
