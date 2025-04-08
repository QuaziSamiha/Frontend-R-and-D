"use client";

import { Input } from "@/components/share/form";
import { usePost } from "@/hooks/usePost";
import {
  CoreModuleFormData,
  CoreModuleSchema,
} from "@/schemas/core-module/coreModule";
import { IAddComponentProps } from "@/types/global/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function AddUser({ setOpen, refetch }: IAddComponentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    // control,
  } = useForm<CoreModuleFormData>({
    resolver: zodResolver(CoreModuleSchema),
  });

  const { mutate: coreModulePost, isPending } = usePost("/core-module", () => {
    refetch();
    reset();
    setOpen(false);
  });

  const onSubmit = (data: CoreModuleFormData) => {
    // alert(JSON.stringify(data));
    coreModulePost(data);
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
