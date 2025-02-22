"use client";

import {
  flexRender,
  HeaderGroup,
  Header,
  Row,
  Cell,
} from "@tanstack/react-table";
import { ITable } from "@/interfaces/table";

const Table = <TData,>({ table }: ITable<TData>) => {
  return (
    <>
      <div className="bg-violetPrimary rounded-b-lg bg-opacity-50 px-14 py-2">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              {table
                .getHeaderGroups()
                .map((headerGroup: HeaderGroup<TData>) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(
                      (header: Header<TData, unknown>) => (
                        <th
                          key={header.id}
                          className="py-4 px-7 bg-bluePrimary first:rounded-l-lg last:rounded-r-lg first:flex first:items-center last:flex last:justify-center"
                        >
                          <div
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            <div className="flex items-center justify-start gap-2 select-none">
                              <div className="text-base text-whitePrimary">
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                              </div>
                            </div>
                          </div>
                        </th>
                      )
                    )}
                  </tr>
                ))}
            </thead>

            <tbody>
              {table
                .getRowModel()
                .rows.map((row: Row<TData>, index: number) => (
                  <tr
                    key={index}
                    className={
                      "hover:bg-blueSecondary"
                    }
                  >
                    {row.getVisibleCells().map((cell: Cell<TData, unknown>) => (
                      <td
                        key={cell.id}
                        className="px-7 py-5 first:rounded-l-lg last:rounded-r-lg text-blackPrimary text-base last:text-center"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
