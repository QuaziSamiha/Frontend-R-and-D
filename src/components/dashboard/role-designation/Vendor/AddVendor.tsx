"use client";

import { Input, SelectField } from "@/components/share/form";
import { useGet } from "@/hooks/useGet";
import { usePost } from "@/hooks/usePost";
import {
  RoleDesigVendorFormData,
  RoleDesigVendorSchema,
} from "@/schemas/RoleDesignation-vendor/RoleDesignation-vendor";
import { IAddComponentProps } from "@/types/global/global.types";
import { RoleDesigVendorDropDown } from "@/utils/DataForming";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function AddVendor({ setOpen, refetch }: IAddComponentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    control,
  } = useForm<RoleDesigVendorFormData>({
    resolver: zodResolver(RoleDesigVendorSchema),
  });

  // administration department dropdown list
  const { data: allVendorData } = useGet<[]>("/vendors", ["getAllVendorData"]);

  const RoleDesigVendor = RoleDesigVendorDropDown(allVendorData ?? []);

  const { mutate: createRoleDesignationVendorPost, isPending } = usePost(
    "/role-designation",
    () => {
      refetch();
      reset();
      setOpen(false);
    }
  );

  const onSubmit = (data: RoleDesigVendorFormData) => {
    const dataToSend = {
      ...data,
      stakeholderID: "STK-3",
    };
    // alert(JSON.stringify(dataToSend));
    createRoleDesignationVendorPost(dataToSend);
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
            data={RoleDesigVendor}
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
