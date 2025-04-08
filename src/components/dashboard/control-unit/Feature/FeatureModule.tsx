"use client";

import CustomDialog from "@/components/share/dialog/CustomDialog";
import GenericTable from "@/components/share/table/GenericTable";
import TableHeading from "@/components/share/table/TableHeading";
import { useGet } from "@/hooks/useGet";
import { getFeatureColumns } from "@/lib/constants/tableColumns";
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
import AddFeature from "./AddFeature";
import EditFeature from "./EditFeature";

export default function FeatureModule() {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});
  const dispatch = useAppDispatch();

  const {
    isLoading,
    data: allFeatureData,
    refetch,
  } = useGet<[]>("/feature", ["allFeaturesData"]);

  const handleEdit = (rowData: EditDataProps) => {
    dispatch(rowValue(rowData));
    setEditModalOpen(true);
  };

  const columns = getFeatureColumns(handleEdit);
  const table = useReactTable({
    data: allFeatureData ?? [],
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
      <TableHeading name="Feature" />
      <GenericTable
        table={table}
        isLoading={isLoading}
        filtering={filtering}
        setFiltering={setFiltering}
        filterModalOpen={filterModalOpen}
        setFilterModalOpen={setFilterModalOpen}
        tableData={allFeatureData ?? []}
        refetch={refetch}
        buttonName="Add"
        headerName="Add Feature"
        userName="Total"
        addComponent={
          <AddFeature setOpen={setFilterModalOpen} refetch={refetch} />
        }
      />

      <CustomDialog
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        title="Edit Feature"
      >
        <EditFeature setEditModalOpen={setEditModalOpen} refetch={refetch} />
      </CustomDialog>
    </div>
  );
}
