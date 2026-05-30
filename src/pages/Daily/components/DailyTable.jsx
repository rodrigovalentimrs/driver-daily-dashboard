import { DailyTableRow } from "../components/DailyTableRow";

export function DailyTable({ list, startEditData, deleteData }) {
  return (
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
        {list.length === 0 ? (
          <tr>
            <td colSpan={8} className="p-6 text-center text-gray-400">
              Nenhuma diária registrada ainda.
            </td>
          </tr>
        ) : (
          list.map((item) => (
            <DailyTableRow
              key={item.id}
              item={item}
              startEditData={startEditData}
              deleteData={deleteData}
            />
          ))
        )}
      </tbody>
    </table>
  );
}
