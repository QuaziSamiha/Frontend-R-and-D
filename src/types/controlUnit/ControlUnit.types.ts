export type CoreModuleTypes = {
  coreModuleID: string;
  name: string;
  description: string;
  status: string;
};

export type FeatureTypes = {
  featureID: string;
  name: string;
  description: string;
  moduleID: string;
  status: string;
  moduleName: string;
};

// "designationID": "RD-1",
//       "name": "HR Manager",
//       "stakeholderID": "STK-1",
//       "stakeholderName": "Administration",
//       "description": "Manages HR-related activities",
//       "status": "active",
//       "stakeholderReferenceID": "DEP-1",
//       "stakeholderReferenceName": "administration"

export type RoleDesignationTypes = {
  designationID: string;
  name: string;
  stakeholderID: string;
  stakeholderName: string;
  description: string;
  status: string;
  stakeholderReferenceID: string;
  stakeholderReferenceName: string;
};

export type PermissionTypes = {
  permissionID: string;
  moduleID: string;
  featureID: string;
  moduleName: string;
  featureName: string;
  name: string;
  description: string;
  status: string;
};
