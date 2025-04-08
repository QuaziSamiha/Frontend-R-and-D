"use client";

import { Input } from "@/components/share/form";
import { usePost } from "@/hooks/usePost";
import {
  AdministrationFormData,
  AdministrationSchema,
} from "@/schemas/Administration/administration";
import { IAddComponentProps } from "@/types/global/global.types";
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
    // control,
  } = useForm<AdministrationFormData>({
    resolver: zodResolver(AdministrationSchema),
  });

  const { mutate: createAdministrationPost, isPending } = usePost("/administration", () => {
    refetch();
    reset();
    setOpen(false);
  });

  const onSubmit = (data: AdministrationFormData) => {
    // alert(JSON.stringify(data));
    createAdministrationPost(data);
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
            inputType="email"
            labelName="Email"
            placeholderText="Enter your email"
            name="email"
            errors={errors}
            register={register}
            isRequired
          />
          <Input
            inputType="text"
            labelName="Phone Number"
            placeholderText="+8801000000000"
            name="phone"
            errors={errors}
            register={register}
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
