import {
  CoreModuleTypes,
  FeatureTypes,
  PermissionTypes,
  RoleDesignationTypes,
} from "@/types/controlUnit/ControlUnit.types";
import {
  RoleDesigAdministrationDropDownTypes,
  RoleDesigClientDropDownTypes,
  RoleDesigVendorDropDownTypes,
} from "@/types/role-designation/roleDesignation";

type DropDownProps = {
  id: string;
  value: string;
  label: string;
};

export const CoreModuleDropDown = (
  data: CoreModuleTypes[]
): DropDownProps[] => {
  return (
    data?.map((coreModule) => ({
      id: coreModule?.coreModuleID,
      value: coreModule?.coreModuleID,
      label: coreModule?.name,
    })) || []
  );
};

// feature
export const FeaturesDropDown = (data: FeatureTypes[]): DropDownProps[] => {
  return (
    data?.map((feature) => ({
      id: feature?.featureID,
      value: feature?.featureID,
      label: feature?.name,
    })) || []
  );
};

// permission
export const PermissionDropDown = (
  data: PermissionTypes[]
): DropDownProps[] => {
  return (
    data?.map((feature) => ({
      id: feature?.permissionID,
      value: feature?.permissionID,
      label: feature?.name,
    })) || []
  );
};

// role designation
export const RoleDesignationDropDown = (
  data: RoleDesignationTypes[]
): DropDownProps[] => {
  return (
    data?.map((feature) => ({
      id: feature?.designationID,
      value: feature?.designationID,
      label: feature?.name,
    })) || []
  );
};

// administration department dropdown list
export const RoleDesigAdministrationDropDown = (
  data: RoleDesigAdministrationDropDownTypes[]
): DropDownProps[] => {
  return (
    data?.map((x) => ({
      id: x?.departmentID,
      value: x?.departmentID,
      label: x?.name,
    })) || []
  );
};

// administration department dropdown list
export const RoleDesigClientDropDown = (
  data: RoleDesigClientDropDownTypes[]
): DropDownProps[] => {
  return (
    data?.map((x) => ({
      id: x?.clientID,
      value: x?.clientID,
      label: x?.name,
    })) || []
  );
};

// administration department dropdown list
export const RoleDesigVendorDropDown = (
  data: RoleDesigVendorDropDownTypes[]
): DropDownProps[] => {
  return (
    data?.map((x) => ({
      id: x?.vendorID,
      value: x?.vendorID,
      label: x?.name,
    })) || []
  );
};
