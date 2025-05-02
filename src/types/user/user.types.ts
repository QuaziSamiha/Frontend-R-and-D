export interface IUserTableProps {
  table: object;
  isLoading: boolean;
  filtering: string;
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
  filterModalOpen: boolean;
  setFilterModalOpen: (value: boolean) => void;
  allUserData: [];
  refetch: () => void;
}

export interface IGenericTableProps {
  table: object;
  isLoading: boolean;
  filtering: string;
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
  filterModalOpen: boolean;
  setFilterModalOpen: (value: boolean) => void;
  tableData: [];
  refetch: () => void;
  buttonName: string;
  headerName: string;
  userName: string;
  addComponent: React.ReactNode;
}

export interface EditDataProps {
  name: string;
}
export interface RequisitionDataProps {
  id: string;
  name: string;
  model: string;
  quantity: string;
}

export type EditCoreModuleProps = {
  name: string;
  description: string;
  status: string;
};

export type EditFeatureProps = {
  moduleName: string;
  featureID: string;
  name: string;
  description: string;
  status: string;
};

export type EditPermissionProps = {
  permissionID: string;
  moduleName: string;
  name: string;
  status: string;
};

export type EditRolePermissionProps = {
  rolePermissionID: string;
  permissionName: string;
  roleDesignationNames: string;
  canRead: boolean;
  canWrite: boolean;
  canDelete: boolean;
};

export type EditAdministrationProps = {
  departmentID: string;
  name: string;
  email: string;
  phone: string;
  status: string;
};

export type EditVendorProps = {
  vendorID: string;
  name: string;
  email: string;
  phone: string;
  typeOfBusiness: string;
  status: string;
};

export type EditClientProps = {
  clientID: string;
  name: string;
  email: string;
  phone: string;
  responsiblePerson: string;
  status: string;
};

export type EditProjectManagementProps = {
  teamID: string;
  name: string;
  email: string;
  phone: string;
  status: string;
};

export type EditClientUnitsProps = {
  clientUnitID: string;
  name: string;
  clientName: string;
  description: string;
  status: string;
};

export type EditRoleDesigAdminProps = {
  designationID: string;
  name: string;
  stakeholderName: string;
  status: string;
};

export type EditRoleDesigClientProps = {
  designationID: string;
  name: string;
  stakeholderName: string;
  status: string;
};

export type EditRoleDesigVendorProps = {
  designationID: string;
  name: string;
  stakeholderName: string;
  status: string;
};

// export interface IFilter {
//     headerName: string;
//     filtering: string;
//     setFiltering: React.Dispatch<React.SetStateAction<string>>;
//     table: object;
//     data: [];
//     children: ReactNode;
//     buttonName: string;
//     open: boolean;
//     setOpen: (open: boolean) => void;
//     userName?: string;
//     usersNumber?: number;
// }
