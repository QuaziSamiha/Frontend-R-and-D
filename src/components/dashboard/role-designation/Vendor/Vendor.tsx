"use client";

import CustomDialog from "@/components/share/dialog/CustomDialog";
import GenericTable from "@/components/share/table/GenericTable";
import TableHeading from "@/components/share/table/TableHeading";
import { useGet } from "@/hooks/useGet";
import {
  getRoleDesigVendorColumns
} from "@/lib/constants/tableColumns";
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
import AddVendor from "./AddVendor";
import EditVendor from "./EditVendor";

export default function Vendor() {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});
  const dispatch = useAppDispatch();

  const {
    isLoading,
    data: allRoleDesignationVendorsData,
    refetch,
  } = useGet<[]>("/role-designation?stakeholderID=STK-3", [
    "getAllRoleDesignationVendors",
  ]);

  const handleEdit = (rowData: EditDataProps) => {
    dispatch(rowValue(rowData));
    setEditModalOpen(true);
  };

  const columns = getRoleDesigVendorColumns(handleEdit);
  const table = useReactTable({
    data: allRoleDesignationVendorsData ?? [],
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
      <TableHeading name="Vendor" />
      <GenericTable
        table={table}
        isLoading={isLoading}
        filtering={filtering}
        setFiltering={setFiltering}
        filterModalOpen={filterModalOpen}
        setFilterModalOpen={setFilterModalOpen}
        tableData={allRoleDesignationVendorsData ?? []}
        refetch={refetch}
        buttonName="Add"
        headerName="Add Vendor"
        userName="Total"
        addComponent={
          <AddVendor setOpen={setFilterModalOpen} refetch={refetch} />
        }
      />

      <CustomDialog
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        title="Edit Vendor"
      >
        <EditVendor setEditModalOpen={setEditModalOpen} refetch={refetch} />
      </CustomDialog>
    </div>
  );
}
