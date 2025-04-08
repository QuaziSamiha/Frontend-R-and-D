"use client";

import { Input, SelectField } from "@/components/share/form";
import { useGet } from "@/hooks/useGet";
import { usePost } from "@/hooks/usePost";
import {
  RoleDesigAdministrationFormData,
  RoleDesigAdministrationSchema,
} from "@/schemas/RoleDesignation-administration/RoleDesignation-Administration";

import { IAddComponentProps } from "@/types/global/global.types";
import { RoleDesigAdministrationDropDown } from "@/utils/DataForming";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function AddAdministration({
  setOpen,
  refetch,
}: IAddComponentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    control,
  } = useForm<RoleDesigAdministrationFormData>({
    resolver: zodResolver(RoleDesigAdministrationSchema),
  });

  // administration department dropdown list
  const { data: allAdminisData } = useGet<[]>("/administration", [
    "allAdministrationData",
  ]);

  const RoleDesigAdministration = RoleDesigAdministrationDropDown(
    allAdminisData ?? []
  );

  const { mutate: createRoleDesigAdministrationPost, isPending } = usePost(
    "/role-designation",
    () => {
      refetch();
      reset();
      setOpen(false);
    }
  );

  const onSubmit = (data: RoleDesigAdministrationFormData) => {
    // alert(JSON.stringify(data));
    const dataToSend = {
      ...data,
      stakeholderID: "STK-1",
    };
    createRoleDesigAdministrationPost(dataToSend);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
          {/* ========== name ======== */}
          <Input
            inputType="text"
            labelName="Name"
            placeholderText="Enter your name"
            name="name"
            errors={errors}
            register={register}
            isRequired
          />
          {/* ======= description ========= */}
          <Input
            inputType="text"
            labelName="Description"
            placeholderText="Enter description"
            name="description"
            errors={errors}
            register={register}
          />
          {/* ============= stakeholderReferenceID / department name ========== */}
          <SelectField
            label="Department Name"
            placeholderText="Select Department Name"
            name="stakeholderReferenceID"
            control={control}
            data={RoleDesigAdministration}
            labelKey="label"
            valueKey="value"
            errors={errors}
            isLoading={false}
            isRequired
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
