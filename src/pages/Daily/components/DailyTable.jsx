import { DailyTableRow } from "../components/DailyTableRow";

export function DailyTable({ days, list, startEditData, deleteData }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-xl overflow-hidden shadow">
        <thead className="bg-gray-200">
          <tr className="text-left">
            <th className="p-3">Dia</th>
            <th className="p-3">Semana</th>
            <th className="p-3">Ganhos</th>
            <th className="p-3">Despesas</th>
            <th className="p-3">Horas</th>
            <th className="p-3">Km</th>
            <th className="p-3">Lucro</th>
            <th className="p-3">R$/Hr</th>
            <th className="p-3">R$/Km</th>
            <th className="p-3">Ações</th>
          </tr>
        </thead>

        <tbody>
          {days.map((day) => {
            // Busca se existe um registro salvo para este dia
            const record = list.find(
              (item) => new Date(item.date).getDate() === day.dayNumber
            );

            return (
              <DailyTableRow
                key={day.dayNumber}
                day={day}
                record={record}
                startEditData={startEditData}
                deleteData={deleteData}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
