import { DailyTableRow } from "./DailyTableRow";

export function DailyTable({ list, startEditData, deleteData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Ganhos</th>
          <th>Despesas</th>
          <th>Horas</th>
          <th>Km</th>
          <th>Ganho/Hora</th>
          <th>Ganho/Km</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {list.map((item) => (
          <DailyTableRow
            key={item.id}
            item={item}
            startEditData={startEditData}
            deleteData={deleteData}
          />
        ))}
      </tbody>
    </table>
  );
}
