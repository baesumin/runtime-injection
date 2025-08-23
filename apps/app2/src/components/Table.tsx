import { ReactNode } from "react";

interface Column<D> {
  key: string;
  title: string;
  render?: (value: any, data: D) => ReactNode;
}

interface TableProps<D = any> {
  columns: Column<D>[];
  datas: D[];
  rowKey: (data: D) => string;
  onRowClick: (data: D) => void;
}

export default function Table<D>({
  columns,
  datas,
  rowKey,
  onRowClick,
}: TableProps<D>) {
  return (
    <table className="min-w-full">
      <thead className="bg-gray-100 px-4 py-4">
        <tr>
          {columns.map((column) => (
            <th className="border-r py-4" key={column.key}>
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="border">
        {datas.map((data) => (
          <tr
            key={rowKey(data)}
            onClick={() => onRowClick(data)}
            className="hover:bg-gray-50 cursor-pointer"
          >
            {columns.map(({ key, render }) => {
              const value = data[`${key}` as keyof typeof data];
              const res = (render ? render(value, data) : value) as ReactNode;
              return (
                <td className="px-2 py-2 text-center" key={key}>
                  {res}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
