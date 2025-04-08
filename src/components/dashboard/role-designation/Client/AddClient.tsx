"use client";

import { Input, SelectField } from "@/components/share/form";
import { useGet } from "@/hooks/useGet";
import { usePost } from "@/hooks/usePost";
import {
  RoleDesigClientFormData,
  RoleDesigClientSchema,
} from "@/schemas/RoleDesignation-client/RoleDesignation-client";
import { IAddComponentProps } from "@/types/global/global.types";
import { RoleDesigClientDropDown } from "@/utils/DataForming";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function AddClient({ setOpen, refetch }: IAddComponentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    control,
  } = useForm<RoleDesigClientFormData>({
    resolver: zodResolver(RoleDesigClientSchema),
  });

  // administration department dropdown list
  const { data: allClientData } = useGet<[]>("/clients/dropdown", [
    "getAllClientData",
  ]);

  const RoleDesigClient = RoleDesigClientDropDown(allClientData ?? []);

  console.log("i am client dropdown", RoleDesigClient);

  const { mutate: createClientPost, isPending } = usePost(
    "/role-designation",
    () => {
      refetch();
      reset();
      setOpen(false);
    }
  );

  const onSubmit = (data: RoleDesigClientFormData) => {
    const dataToSend = {
      ...data,
      stakeholderID: "STK-2",
    };
    // alert(JSON.stringify(dataToSend));
    createClientPost(dataToSend);
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
            label="Client Name"
            placeholderText="Select Client Name"
            name="stakeholderReferenceID"
            control={control}
            data={RoleDesigClient}
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
