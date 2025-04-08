"use client";

import CustomDialog from "@/components/share/dialog/CustomDialog";
import GenericTable from "@/components/share/table/GenericTable";
import TableHeading from "@/components/share/table/TableHeading";
import { useGet } from "@/hooks/useGet";
import { getPermissionColumns } from "@/lib/constants/tableColumns";
import { rowValue } from "@/lib/redux/features/user/userSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { EditDataProps } from "@/types/user/user.types";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import AddPermission from "./AddPermission";
import EditPermission from "./EditPermission";

export default function PermissionModule() {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});
  const dispatch = useAppDispatch();

  const {
    isLoading,
    data: allPermissionData,
    refetch,
  } = useGet<[]>("/permission", ["allPermission"]);

  const handleEdit = (rowData: EditDataProps) => {
    dispatch(rowValue(rowData));
    setEditModalOpen(true);
  };

  const columns = getPermissionColumns(handleEdit);
  const table = useReactTable({
    data: allPermissionData ?? [],
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
    <div className="px-8 bg-whitePrimary rounded-2xl py-10">
      <TableHeading name="Permission" />
      <GenericTable
        table={table}
        isLoading={isLoading}
        filtering={filtering}
        setFiltering={setFiltering}
        filterModalOpen={filterModalOpen}
        setFilterModalOpen={setFilterModalOpen}
        tableData={allPermissionData ?? []}
        refetch={refetch}
        buttonName="Add"
        headerName="Add Permission"
        userName="Total"
        addComponent={
          <AddPermission setOpen={setFilterModalOpen} refetch={refetch} />
        }
      />

      <CustomDialog
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        title="Edit Permission"
      >
        <EditPermission setEditModalOpen={setEditModalOpen} refetch={refetch} />
      </CustomDialog>
    </div>
  );
}
