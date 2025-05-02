import { RequisitionDataProps } from "@/types/user/user.types";
import { ColumnDef } from "@tanstack/react-table";
import { TbSend } from "react-icons/tb";

export const requisition = {
  id: "REQ109877",
  date: "20.11.2024",
  client: "Drug International Ltd.",
  expectedDate: "23.11.2024",
  priority: "Urgent",
  items: [
    {
      id: "01",
      name: "Printer Toner",
      model: "HP Laser Jet 2035",
      quantity: "15 pc.",
    },
    {
      id: "02",
      name: "Printer Toner",
      model: "HP Laser Jet 2035",
      quantity: "12 pc.",
    },
    {
      id: "03",
      name: "Printer Toner",
      model: "HP Laser Jet 2035",
      quantity: "10 pc.",
    },
    {
      id: "04",
      name: "Printer Toner",
      model: "HP Laser Jet 2035",
      quantity: "07 pc.",
    },
  ],
};

export const getRequisitionColumns = (
  handleSendSingleQuotation: (rowData: RequisitionDataProps) => void
): ColumnDef<RequisitionDataProps>[] => [
  {
    header: "SL",
    accessorKey: "id",
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    header: "Item",
    accessorKey: "item",
    cell: ({ row }) => (
      <div className="py-1.5 text-gray-500">
        <p>{row.original.name}</p>
        <p>Model: {row.original.model}</p>
      </div>
    ),
  },
  {
    header: "Quantity",
    accessorKey: "quantity",
    cell: ({ row }) => (
      <p className="py-1.5 text-gray-500">
        <p>{row.original.quantity}</p>
      </p>
    ),
  },
  {
    header: "Action",
    accessorKey: "edit",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex justify-center items-center w-full">
        <button
          onClick={() => handleSendSingleQuotation(row.original)}
          className="flex items-center gap-3 text-sm text-lightAltBlue hover:text-darkBlue font-medium hover:bg-blue-50 border border-lightAltBlue px-4 py-2 rounded-md cursor-pointer"
        >
          <TbSend size={18} />
          Send Quotation
        </button>
      </div>
    ),
  },
];
