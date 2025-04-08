/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { SelectField } from "@/components/share/form";
import { useGet } from "@/hooks/useGet";
import { usePost } from "@/hooks/usePost";
import {
  RolePermissionFormData,
  RolePermissionSchema,
} from "@/schemas/role-permission/role-permission";
import {
  PermissionTypes,
  RoleDesignationTypes,
} from "@/types/controlUnit/ControlUnit.types";
import { IAddComponentProps } from "@/types/global/global.types";
import {
  PermissionDropDown,
  RoleDesignationDropDown,
} from "@/utils/DataForming";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function AddPermission({
  setOpen,
  refetch,
}: IAddComponentProps) {
  // api call
  const { data: allRoleDesginationData } = useGet<RoleDesignationTypes[]>(
    "/role-designation",
    ["allRoleDesgination"]
  );
  const { data: allPermissionData } = useGet<PermissionTypes[]>("/permission", [
    "allPermission",
  ]);

  const RoleDesignation = RoleDesignationDropDown(allRoleDesginationData ?? []);
  const PermissionOptions = PermissionDropDown(allPermissionData ?? []);

  const options = [
    {
      id: 1,
      label: "True",
      value: "true",
    },
    {
      id: 2,
      label: "False",
      value: "false",
    },
  ];

  const {
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    control,
  } = useForm<RolePermissionFormData>({
    resolver: zodResolver(RolePermissionSchema),
  });

  const { mutate: rolePermissionPost, isPending } = usePost(
    "/role-permission",
    (data) => {
      refetch();
      reset();
      setOpen(false);
    }
  );

  const onSubmit = (data: RolePermissionFormData) => {
    // alert(JSON.stringify(data));
    const dataToSend = {
      roleDesignationID: data?.roleDesignationID,
      permissionID: data?.permissionID,
      canRead: data?.canRead === "true",
      canWrite: data?.canWrite === "true",
      canDelete: data?.canDelete === "true",
    };

    rolePermissionPost(dataToSend);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
          <SelectField
            label="Select Role Designation"
            placeholderText="Select Role Designation"
            name="roleDesignationID"
            control={control}
            data={RoleDesignation}
            labelKey="label"
            valueKey="value"
            errors={errors}
            isLoading={false}
            isRequired={true}
          />
          <SelectField
            label="Select Permission"
            placeholderText="Select Permission"
            name="permissionID"
            control={control}
            data={PermissionOptions}
            labelKey="label"
            valueKey="value"
            errors={errors}
            isLoading={false}
            isRequired={true}
          />
          <SelectField
            label="Read"
            placeholderText="Select ..."
            name="canRead"
            control={control}
            data={options}
            labelKey="label"
            valueKey="value"
            errors={errors}
            isLoading={false}
          />
          <SelectField
            label="Write"
            placeholderText="Select ..."
            name="canWrite"
            control={control}
            data={options}
            labelKey="label"
            valueKey="value"
            errors={errors}
            isLoading={false}
          />
          <SelectField
            label="Delete"
            placeholderText="Select ..."
            name="canDelete"
            control={control}
            data={options}
            labelKey="label"
            valueKey="value"
            errors={errors}
            isLoading={false}
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="bg-lightAltBlue/90 hover:bg-lightAltBlue text-whitePrimary text-sm font-medium px-8 py-3 rounded-full mt-6 cursor-pointer"
        >
          {isPending ? "Loading..." : "Add"}
        </button>
      </form>
    </div>
  );
}
