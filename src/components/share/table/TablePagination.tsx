/* eslint-disable @typescript-eslint/no-explicit-any */

import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";

export default function TablePagination({ table }: any) {
  const pageIndex = table.getState().pagination.pageIndex; // ====== TO GET CURRENT PAGE INDEX (STARTING FROM 0) =======
  const pageCount = table.getPageCount(); // ====== TO GET TOTAL NUMBER OF PAGES ========

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 3;

    // ====== IF pageCount ≤ 3, SHOW ALL PAGE NUMBERS =========
    if (pageCount <= maxPagesToShow) {
      return Array.from({ length: pageCount }, (_, i) => i);
    }

    if (pageIndex <= 1) {
      pages.push(0, 1, 2, "...", pageCount - 1); // IF THE USER IS ON THE FIRST FEW PAGES (0, 1), THEN SHOW: [1, 2, 3, ..., last page]
    } else if (pageIndex >= pageCount - 2) {
      pages.push(0, "...", pageCount - 3, pageCount - 2, pageCount - 1); // IF THE USER IS ON THE LAST FEW PAGES, THEN SHOW: [1, ..., last-2, last-1, last]
    } else {
      pages.push(
        0,
        "...",
        pageIndex - 1,
        pageIndex,
        pageIndex + 1,
        "...",
        pageCount - 1
      ); // IF THE USER IS IN THE MIDDLE, DYNAMICALLY SHOW: [1, ..., prevPage, currentPage, nextPage, ..., last page]
      // Example: If on page 4 out of 10 → [1, ..., 3, 4, 5, ..., 10]
    }

    return pages;
  };

  return (
    <div className="w-full mt-4">
      {table?.getRowModel().rows?.length > 0 && (
        <div className="flex items-center justify-end pagination-container">
          <div className="flex items-center gap-2">
            <button
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
              className="disabled:opacity-60 disabled:cursor-not-allowed rounded-md p-2 border border-greyAltTernary"
            >
              <MdOutlineArrowLeft
                fontSize={30}
                className="text-blackSecondary"
              />
            </button>

            {/* =========== PAGE NUMBER BUTTONS WITH DOTS ============== */}
            {getPageNumbers().map((page, i) =>
              typeof page === "number" ? (
                <button
                  key={i}
                  onClick={() => table.setPageIndex(page)} // ====== SETS THE CURRENT PAGE INDEX ======
                  className={`rounded-md px-5 py-3 border border-greyAltTernary text-sm 
                    ${
                      pageIndex === page
                        ? "bg-black text-white"
                        : "text-blackSecondary"
                    }`}
                >
                  {page + 1}
                </button>
              ) : (
                <span key={i} className="px-5 py-3 text-blackSecondary">
                  ...
                </span>
              )
            )}

            {/* ============= NEXT PAGE BUTTON ============= */}
            <button
              disabled={!table.getCanNextPage()} // ================ CHECKS IF THE 'Next' BUTTON SHOULD BE ENABLED ============
              onClick={() => table.nextPage()} // =========== GOES TO THE NEXT PAGE =============
              className="disabled:opacity-60 disabled:cursor-not-allowed rounded-md p-2 border border-greyAltTernary"
            >
              <MdOutlineArrowRight
                fontSize={30}
                className="text-blackSecondary"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
