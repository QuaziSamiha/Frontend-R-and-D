"use client";

import CustomDialog from "@/components/share/dialog/CustomDialog";
import GenericTable from "@/components/share/table/GenericTable";
import TableHeading from "@/components/share/table/TableHeading";
import { useGet } from "@/hooks/useGet";
import {
  getProjectManagementColumns
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
import AddProjectManagement from "./AddProjectManagement";
import EditProjectManagement from "./EditProjectManagement";

export default function ProjectManagement() {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});
  const dispatch = useAppDispatch();

  const {
    isLoading,
    data: allProjectManagementData,
    refetch,
  } = useGet<[]>("/project-management", ["getAllProjectManagement"]);

  const handleEdit = (rowData: EditDataProps) => {
    dispatch(rowValue(rowData));
    setEditModalOpen(true);
  };

  const columns = getProjectManagementColumns(handleEdit);
  const table = useReactTable({
    data: allProjectManagementData ?? [],
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
      <TableHeading name="Project Management" />
      <GenericTable
        table={table}
        isLoading={isLoading}
        filtering={filtering}
        setFiltering={setFiltering}
        filterModalOpen={filterModalOpen}
        setFilterModalOpen={setFilterModalOpen}
        tableData={allProjectManagementData ?? []}
        refetch={refetch}
        buttonName="Add"
        headerName="Add Project Management"
        userName="Total"
        addComponent={
          <AddProjectManagement
            setOpen={setFilterModalOpen}
            refetch={refetch}
          />
        }
      />

      <CustomDialog
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        title="Edit Project Management"
      >
        <EditProjectManagement
          setEditModalOpen={setEditModalOpen}
          refetch={refetch}
        />
      </CustomDialog>
    </div>
  );
}
