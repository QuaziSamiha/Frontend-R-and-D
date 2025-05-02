"use client";

import { getRequisitionColumns, requisition } from "../data";
import { rowValue } from "@/lib/redux/features/user/userSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { RequisitionDataProps } from "@/types/user/user.types";
import TableContent from "@/components/share/table/TableContent";
import CustomDialog from "@/components/share/dialog/CustomDialog";
import { TbSend } from "react-icons/tb";
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/share/form/SubmitButton";
import GreyButton from "@/components/share/button/GreyButton";
import { CheckboxGroup } from "@/components/share/form/CheckboxField";

// Sample options for the checkbox groups
const categoryOptions = [
  { id: "category-1", label: "Technology", value: "technology" },
  { id: "category-2", label: "Health & Fitness", value: "health" },
  { id: "category-3", label: "Business", value: "business" },
  { id: "category-4", label: "Entertainment", value: "entertainment" },
  { id: "category-5", label: "Science", value: "science" },
];

export default function SendQuotation() {
  const [supplierModalOpen, setSupplierModalOpen] = useState(false);
  const [deadlineModalOpen, setDeadlineModalOpen] = useState(false);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});
  const dispatch = useAppDispatch();

  const handleSendSingleQuotation = (rowData: RequisitionDataProps) => {
    dispatch(rowValue(rowData));
    setSupplierModalOpen(true);
  };

  const handleAllQuotation = () => {
    setSupplierModalOpen(true);
  };

  const methods = useForm();
  const {
    control,
    trigger,
    formState: { errors },
    handleSubmit,
  } = methods;
  const onSupplierSubmit = (data: unknown) => {
    console.log(data);
    setDeadlineModalOpen(true);
    setSupplierModalOpen(false);
  };

  const onDeadlineSubmit = (data: unknown) => {
    console.log(data);
    setDeadlineModalOpen(false);
  };

  const columns = getRequisitionColumns(handleSendSingleQuotation);
  const table = useReactTable({
    data: requisition.items ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
      columnVisibility,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onColumnVisibilityChange: setColumnVisibility,
  });
  return (
    <section className="flex flex-col gap-8">
      <TableContent table={table} />
      <div className="flex justify-between items-center w-full px-6">
        <p className="font-medium">
          Send quotation (
          <span className="text-lightAltBlue">
            Requisition No: {requisition.id}
          </span>
          ) to all enlisted suppliers
        </p>
        <button
          onClick={handleAllQuotation}
          className="flex items-center gap-3 text-sm text-white font-medium bg-lightAltBlue hover:bg-darkBlue border border-lightAltBlue px-4 py-2 rounded-md cursor-pointer"
        >
          <TbSend size={18} />
          Send Quotation
        </button>
      </div>

      <CustomDialog
        open={supplierModalOpen}
        onOpenChange={setSupplierModalOpen}
        dialogWidth="w-[50vw]"
        title="Select Suppliers"
      >
        <form onSubmit={handleSubmit(onSupplierSubmit)}>
          <div className="border-y border-gray-300 py-4 px-6">
            <CheckboxGroup
              name="categories"
              control={control}
              options={categoryOptions}
              description="Select categories youre interested in"
              errors={errors}
              required
              trigger={trigger}
            />
          </div>
          <div className="flex justify-end px-6 py-4">
            <SubmitButton buttonWidth="w-fit" />
          </div>
        </form>
      </CustomDialog>

      <CustomDialog
        open={deadlineModalOpen}
        onOpenChange={setDeadlineModalOpen}
        dialogWidth="w-[30vw]"
        title="Deadline & Comment"
      >
        <form onSubmit={handleSubmit(onDeadlineSubmit)}>
          <div className="border-y border-gray-300 py-4 px-6"></div>
          <div className="flex justify-end items-center gap-3 px-6 py-4">
            <GreyButton
              buttonLabel="Cancel"
              onClickFunction={() => setDeadlineModalOpen(false)}
            />
            <SubmitButton buttonWidth="w-fit" submitTitle="Send" />
          </div>
        </form>
      </CustomDialog>
    </section>
  );
}
