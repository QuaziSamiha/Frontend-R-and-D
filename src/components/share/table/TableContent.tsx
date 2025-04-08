/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { flexRender } from "@tanstack/react-table";
import { ITable } from "@/types/table/table.types";

export default function TableContent({ table }: ITable) {
  return (
    <div className="max-w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          {table
            .getHeaderGroups()
            .map((headerGroup: { id: string; headers: any[] }) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-4 px-7 bg-whiteTernary first:rounded-l first:flex first:items-center last:rounded-r last:flex last:justify-center"
                  >
                    <div onClick={header.column.getToggleSortingHandler()}>
                      <div className="flex items-center justify-start gap-2 select-none">
                        <div className="text-base font-semibold text-blackSecondary">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
        </thead>

        <tbody>
          {table
            .getRowModel()
            .rows.map((row: { id: string; getVisibleCells: () => any[] }) => (
              <tr
                key={row.id}
                className={`cursor-pointer border-b border-greyAltTernary`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-7 py-2 text-blackSecondary text-base last:text-center"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
