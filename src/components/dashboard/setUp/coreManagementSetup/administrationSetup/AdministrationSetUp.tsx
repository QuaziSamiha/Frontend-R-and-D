"use client";

import CustomDialog from "@/components/share/dialog/CustomDialog";
import React, { useState } from "react";
import TableHeading from "@/components/share/table/TableHeading";
import GenericTable from "@/components/share/table/GenericTable";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useAppDispatch } from "@/lib/redux/hooks";
import { useGet } from "@/hooks/useGet";
import { getAdminColumns } from "@/lib/constants/tableColumns";
import { rowValue } from "@/lib/redux/features/user/userSlice";
import { EditDataProps } from "@/types/user/user.types";
import AddSetup from "./AddSetup";
import Edit from "./Edit";

export default function AdministrationSetup() {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});
  const dispatch = useAppDispatch();

  const {
    isLoading,
    data: allAdminUserData,
    refetch,
  } = useGet<[]>("/stakeholders", ["allUserAdminData"]);

  const handleEdit = (rowData: EditDataProps) => {
    dispatch(rowValue(rowData));
    setEditModalOpen(true);
  };

  const columns = getAdminColumns(handleEdit);
  const table = useReactTable({
    data: allAdminUserData ?? [],
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
    <div className="">
      <TableHeading name="Admin Setup" />
      <GenericTable
        table={table}
        isLoading={isLoading}
        filtering={filtering}
        setFiltering={setFiltering}
        filterModalOpen={filterModalOpen}
        setFilterModalOpen={setFilterModalOpen}
        tableData={allAdminUserData ?? []}
        refetch={refetch}
        buttonName="Add"
        headerName="Add User Information"
        userName="User"
        addComponent={
          <AddSetup setOpen={setFilterModalOpen} refetch={refetch} />
        }
      />

      <CustomDialog
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        title="Edit Administration Setup"
      >
        <Edit setEditModalOpen={setEditModalOpen} refetch={refetch} />
      </CustomDialog>
    </div>
  );
}
