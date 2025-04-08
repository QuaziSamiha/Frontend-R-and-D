import TooltipDiv from "@/components/share/tooltip/TooltipDiv";
import {
  EditAdministrationProps,
  EditClientProps,
  EditClientUnitsProps,
  EditCoreModuleProps,
  EditDataProps,
  EditFeatureProps,
  EditPermissionProps,
  EditProjectManagementProps,
  EditRoleDesigAdminProps,
  EditRoleDesigClientProps,
  EditRoleDesigVendorProps,
  EditRolePermissionProps,
  EditVendorProps,
} from "@/types/user/user.types";
import { ColumnDef } from "@tanstack/react-table";

export const getUserColumns = (
  handleEdit: (rowData: EditDataProps) => void
): ColumnDef<EditDataProps>[] => [
  {
    header: "ID",
    accessorKey: "id",
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Action",
    accessorKey: "edit",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-3 justify-center items-center w-full">
        <button onClick={() => handleEdit(row.original)} className="flex">
          <TooltipDiv name="Edit" />
        </button>
      </div>
    ),
  },
];

export const getAdminColumns = (
  handleEdit: (rowData: EditDataProps) => void
): ColumnDef<EditDataProps>[] => [
  {
    header: "ID",
    accessorKey: "id",
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Action",
    accessorKey: "edit",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-3 justify-center items-center w-full">
        <button onClick={() => handleEdit(row.original)} className="flex">
          <TooltipDiv name="Edit" />
        </button>
      </div>
    ),
  },
];

// get core module columns
export const getCoreModuleColumns = (
  handleEdit: (rowData: EditCoreModuleProps) => void
): ColumnDef<EditCoreModuleProps>[] => [
  {
    header: "ID",
    accessorKey: "coreModuleID",
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    header: "Module Name",
    accessorKey: "name",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.original.status;
      const statusStyle =
        status === "active"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800";

      return (
        <span
          className={`px-2 py-1 capitalize rounded-full text-sm ${statusStyle}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    header: "Action",
    accessorKey: "edit",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-3 justify-center items-center w-full">
        <button onClick={() => handleEdit(row.original)} className="flex">
          <TooltipDiv name="Edit" />
        </button>
      </div>
    ),
  },
];

// feature columns
export const getFeatureColumns = (
  handleEdit: (rowData: EditFeatureProps) => void
): ColumnDef<EditFeatureProps>[] => [
  {
    header: "ID",
    accessorKey: "featureID",
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    header: "Module Name",
    accessorKey: "moduleName",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.original.status;
      const statusStyle =
        status === "active"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800";

      return (
        <span
          className={`px-2 py-1 capitalize rounded-full text-sm ${statusStyle}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    header: "Action",
    accessorKey: "edit",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-3 justify-center items-center w-full">
        <button onClick={() => handleEdit(row.original)} className="flex">
          <TooltipDiv name="Edit" />
        </button>
      </div>
    ),
  },
];

// permission columns
export const getPermissionColumns = (
  handleEdit: (rowData: EditPermissionProps) => void
): ColumnDef<EditPermissionProps>[] => [
  {
    header: "ID",
    accessorKey: "permissionID",
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Module Name",
    accessorKey: "moduleName",
  },
  {
    header: "Feature Name",
    accessorKey: "featureName",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.original.status;
      const statusStyle =
        status === "active"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800";

      return (
        <span
          className={`px-2 py-1 capitalize rounded-full text-sm ${statusStyle}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    header: "Action",
    accessorKey: "edit",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-3 justify-center items-center w-full">
        <button onClick={() => handleEdit(row.original)} className="flex">
          <TooltipDiv name="Edit" />
        </button>
      </div>
    ),
  },
];

// role permission
export const getRolePermissionColumns = (
  handleEdit: (rowData: EditRolePermissionProps) => void
): ColumnDef<EditRolePermissionProps>[] => [
  {
    header: "ID",
    accessorKey: "rolePermissionID",
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    header: "Designation Name",
    accessorKey: "roleDesignationName",
  },
  {
    header: "Permission Name",
    accessorKey: "permissionName",
  },
  {
    header: "Can Read",
    accessorKey: "canRead",
    cell: ({ row }) => {
      const value = row.original.canRead;
      const statusStyle =
        value === true
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800";

      return (
        <span
          className={`px-3 py-1 capitalize rounded-full text-sm ${statusStyle}`}
        >
          {value === true ? "True" : "False"}
        </span>
      );
    },
  },
  {
    header: "Can Write",
    accessorKey: "canWrite",
    cell: ({ row }) => {
      const value = row.original.canWrite;
      const statusStyle =
        value === true
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800";

      return (
        <span
          className={`px-3 py-1 capitalize rounded-full text-sm ${statusStyle}`}
        >
          {value === true ? "True" : "False"}
        </span>
      );
    },
  },
  {
    header: "Can Delete",
    accessorKey: "canDelete",
    cell: ({ row }) => {
      const value = row.original.canDelete;
      const statusStyle =
        value === true
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800";

      return (
        <span
          className={`px-3 py-1 capitalize rounded-full text-sm ${statusStyle}`}
        >
          {value === true ? "True" : "False"}
        </span>
      );
    },
  },
  {
    header: "Action",
    accessorKey: "edit",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-3 justify-center items-center w-full">
        <button onClick={() => handleEdit(row.original)} className="flex">
          <TooltipDiv name="Edit" />
        </button>
      </div>
    ),
  },
];

// administration columns
export const getAdministrationColumns = (
  handleEdit: (rowData: EditAdministrationProps) => void
): ColumnDef<EditAdministrationProps>[] => [
  {
    header: "ID",
    accessorKey: "departmentID",
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Phone",
    accessorKey: "phone",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.original.status;
      const statusStyle =
        status === "active"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800";

      return (
        <span
          className={`px-2 py-1 capitalize rounded-full text-sm ${statusStyle}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    header: "Action",
    accessorKey: "edit",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-3 justify-center items-center w-full">
        <button onClick={() => handleEdit(row.original)} className="flex">
          <TooltipDiv name="Edit" />
        </button>
      </div>
    ),
  },
];

// vendors columns
export const getVendorsColumns = (
  handleEdit: (rowData: EditVendorProps) => void
): ColumnDef<EditVendorProps>[] => [
  {
    header: "ID",
    accessorKey: "vendorID",
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Phone",
    accessorKey: "phone",
  },
  {
    header: "Type of Business",
    accessorKey: "typeOfBusiness",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.original.status;
      const statusStyle =
        status === "active"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800";

      return (
        <span
          className={`px-2 py-1 capitalize rounded-full text-sm ${statusStyle}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    header: "Action",
    accessorKey: "edit",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-3 justify-center items-center w-full">
        <button onClick={() => handleEdit(row.original)} className="flex">
          <TooltipDiv name="Edit" />
        </button>
      </div>
    ),
  },
];

// client columns
export const getClientColumns = (
  handleEdit: (rowData: EditClientProps) => void
): ColumnDef<EditClientProps>[] => [
  {
    header: "ID",
    accessorKey: "clientID",
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Phone",
    accessorKey: "phone",
  },
  {
    header: "Responsible Person",
    accessorKey: "responsiblePerson",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.original.status;
      const statusStyle =
        status === "active"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800";

      return (
        <span
          className={`px-2 py-1 capitalize rounded-full text-sm ${statusStyle}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    header: "Action",
    accessorKey: "edit",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-3 justify-center items-center w-full">
        <button onClick={() => handleEdit(row.original)} className="flex">
          <TooltipDiv name="Edit" />
        </button>
      </div>
    ),
  },
];

// project management columns
export const getProjectManagementColumns = (
  handleEdit: (rowData: EditProjectManagementProps) => void
): ColumnDef<EditProjectManagementProps>[] => [
  {
    header: "ID",
    accessorKey: "teamID",
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Phone",
    accessorKey: "phone",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.original.status;
      const statusStyle =
        status === "active"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800";

      return (
        <span
          className={`px-2 py-1 capitalize rounded-full text-sm ${statusStyle}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    header: "Action",
    accessorKey: "edit",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-3 justify-center items-center w-full">
        <button onClick={() => handleEdit(row.original)} className="flex">
          <TooltipDiv name="Edit" />
        </button>
      </div>
    ),
  },
];

// client units columns
export const getClientUnitsColumns = (
  handleEdit: (rowData: EditClientUnitsProps) => void
): ColumnDef<EditClientUnitsProps>[] => [
  {
    header: "ID",
    accessorKey: "clientUnitID",
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Client Name",
    accessorKey: "clientName",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.original.status;
      const statusStyle =
        status === "active"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800";

      return (
        <span
          className={`px-2 py-1 capitalize rounded-full text-sm ${statusStyle}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    header: "Action",
    accessorKey: "edit",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-3 justify-center items-center w-full">
        <button onClick={() => handleEdit(row.original)} className="flex">
          <TooltipDiv name="Edit" />
        </button>
      </div>
    ),
  },
];

// role designation administration columns
export const getRoleDesigAdministration = (
  handleEdit: (rowData: EditRoleDesigAdminProps) => void
): ColumnDef<EditRoleDesigAdminProps>[] => [
  {
    header: "ID",
    accessorKey: "designationID",
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Stakeholder Name",
    accessorKey: "stakeholderName",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.original.status;
      const statusStyle =
        status === "active"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800";

      return (
        <span
          className={`px-2 py-1 capitalize rounded-full text-sm ${statusStyle}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    header: "Action",
    accessorKey: "edit",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-3 justify-center items-center w-full">
        <button onClick={() => handleEdit(row.original)} className="flex">
          <TooltipDiv name="Edit" />
        </button>
      </div>
    ),
  },
];

// role designation client columns
export const getRoleDesigClientColumns = (
  handleEdit: (rowData: EditRoleDesigClientProps) => void
): ColumnDef<EditRoleDesigClientProps>[] => [
  {
    header: "ID",
    accessorKey: "designationID",
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Stakeholder Name",
    accessorKey: "stakeholderName",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.original.status;
      const statusStyle =
        status === "active"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800";

      return (
        <span
          className={`px-2 py-1 capitalize rounded-full text-sm ${statusStyle}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    header: "Action",
    accessorKey: "edit",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-3 justify-center items-center w-full">
        <button onClick={() => handleEdit(row.original)} className="flex">
          <TooltipDiv name="Edit" />
        </button>
      </div>
    ),
  },
];

// role designation vendor columns
export const getRoleDesigVendorColumns = (
  handleEdit: (rowData: EditRoleDesigVendorProps) => void
): ColumnDef<EditRoleDesigVendorProps>[] => [
  {
    header: "ID",
    accessorKey: "designationID",
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Stakeholder Name",
    accessorKey: "stakeholderName",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.original.status;
      const statusStyle =
        status === "active"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800";

      return (
        <span
          className={`px-2 py-1 capitalize rounded-full text-sm ${statusStyle}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    header: "Action",
    accessorKey: "edit",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-3 justify-center items-center w-full">
        <button onClick={() => handleEdit(row.original)} className="flex">
          <TooltipDiv name="Edit" />
        </button>
      </div>
    ),
  },
];
