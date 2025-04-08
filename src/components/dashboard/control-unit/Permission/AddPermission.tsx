/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Input, SelectField } from "@/components/share/form";
import { useGet } from "@/hooks/useGet";
import { usePost } from "@/hooks/usePost";
import {
  PermissionFormData,
  PermissionSchema,
} from "@/schemas/permission/permission";
import {
  CoreModuleTypes,
  FeatureTypes,
} from "@/types/controlUnit/ControlUnit.types";
import { IAddComponentProps } from "@/types/global/global.types";
import { CoreModuleDropDown, FeaturesDropDown } from "@/utils/DataForming";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function AddPermission({
  setOpen,
  refetch,
}: IAddComponentProps) {
  // get all core module dropdown api
  const { data: allCoreModuleData } = useGet<CoreModuleTypes[]>(
    "/core-module",
    ["allCoreModuleData"]
  );

  const { data: allFeaturesData } = useGet<FeatureTypes[]>("/feature", [
    "allFeatures",
  ]);

  const moduleDropDown = CoreModuleDropDown(allCoreModuleData ?? []);

  const featuresDropDown = FeaturesDropDown(allFeaturesData ?? []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    control,
  } = useForm<PermissionFormData>({
    resolver: zodResolver(PermissionSchema),
  });

  const { mutate: permissionPost, isPending } = usePost(
    "/permission",
    (data) => {
      refetch();
      reset();
      setOpen(false);
    }
  );

  const onSubmit = (data: PermissionFormData) => {
    // alert(JSON.stringify(data));
    permissionPost(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
          <Input
            inputType="text"
            labelName="Name"
            placeholderText="Enter your name"
            name="name"
            errors={errors}
            register={register}
            isRequired
          />
          <Input
            inputType="text"
            labelName="Description"
            placeholderText="Enter your description"
            name="description"
            errors={errors}
            register={register}
          />
          <SelectField
            label="Select Module"
            placeholderText="Select Module"
            name="moduleID"
            control={control}
            data={moduleDropDown}
            labelKey="label"
            valueKey="value"
            errors={errors}
            isLoading={false}
            isRequired={true}
          />
          <SelectField
            label="Select Feature"
            placeholderText="Select feature"
            name="featureID"
            control={control}
            data={featuresDropDown}
            labelKey="label"
            valueKey="value"
            errors={errors}
            isLoading={false}
            isRequired={true}
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
