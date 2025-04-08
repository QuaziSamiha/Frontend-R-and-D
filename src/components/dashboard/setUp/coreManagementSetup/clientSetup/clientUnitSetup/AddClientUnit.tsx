"use client";

import { Input, SelectField } from "@/components/share/form";
import { useGet } from "@/hooks/useGet";
import { usePost } from "@/hooks/usePost";
import {
  ClientUnitFormData,
  ClientUnitSchema,
} from "@/schemas/clientUnit/ClientUnit";
import { IAddComponentProps } from "@/types/global/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type clientDropDownType = {
  id: number;
  label: string;
  value: string;
};
type ClientDropDownData = {
  clientID: string;
  name: string;
};

export default function AddClientUnit({
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
  } = useForm<ClientUnitFormData>({
    resolver: zodResolver(ClientUnitSchema),
  });

  // clients dropdown api
  const { data: allClientDropdownData } = useGet<ClientDropDownData[]>(
    "/clients/dropdown",
    ["getAllClientDropdownData"]
  );

  const clientsDropDown: clientDropDownType[] =
    allClientDropdownData?.map((data, index) => {
      return {
        id: index + 1,
        label: data?.name,
        value: data?.clientID,
      };
    }) || [];

  const { mutate: createClientUnitPost, isPending } = usePost(
    "/client-units",
    () => {
      refetch();
      reset();
      setOpen(false);
    }
  );

  const onSubmit = (data: ClientUnitFormData) => {
    // alert(JSON.stringify(data));
    createClientUnitPost(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
          {/* ======== name  ======== */}
          <Input
            inputType="text"
            labelName="Name"
            placeholderText="Enter your name"
            name="name"
            errors={errors}
            register={register}
            isRequired
          />

          {/* ======== descripiton ======== */}
          <Input
            inputType="text"
            labelName="Description"
            placeholderText="Enter your description"
            name="description"
            errors={errors}
            register={register}
          />
          {/* ======== client id selection ========= */}
          <SelectField
            label="Client"
            placeholderText="Select Client"
            name="clientID"
            control={control}
            data={clientsDropDown}
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
