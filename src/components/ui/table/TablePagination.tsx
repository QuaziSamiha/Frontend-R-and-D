import { ITable } from "@/interfaces/table";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const TablePagination = <TData,>({ table }: ITable<TData>) => {
  const pageIndex = table.getState().pagination.pageIndex;
  return (
    <div className="w-full">
      {table?.getRowModel().rows?.length > 0 && (
        <div className="py-3 pagination-container">
          <div className="flex items-center gap-2">
            <button
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
              className="disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <MdOutlineKeyboardArrowLeft
                fontSize={24}
                className="text-blackPrimary disabled:text-opacity-30"
              />
            </button>
            <div className="flex justify-center items-center gap-2">
              <div className="px-1.5 w-6 h-6 text-whitePrimary bg-bluePrimary rounded text-center">
                {pageIndex + 1}
              </div>{" "}
              <div className="px-1.5 w-6 h-6 text-whitePrimary bg-bluePrimary rounded text-center">
                {pageIndex + 2}
              </div>
            </div>
            <button
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
              className="disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <MdOutlineKeyboardArrowRight
                fontSize={24}
                className="text-blackPrimary disabled:text-opacity-40"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TablePagination;
