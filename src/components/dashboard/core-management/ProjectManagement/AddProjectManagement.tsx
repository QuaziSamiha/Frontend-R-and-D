"use client";

import { Input } from "@/components/share/form";
import { usePost } from "@/hooks/usePost";
import {
  ProjectManagementFormData,
  ProjectManagementSchema,
} from "@/schemas/projectManagement/projectManagement";
import { IAddComponentProps } from "@/types/global/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function AddProjectManagement({
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
  } = useForm<ProjectManagementFormData>({
    resolver: zodResolver(ProjectManagementSchema),
  });

  const { mutate: createProjectManagementPost, isPending } = usePost(
    "/project-management",
    () => {
      refetch();
      reset();
      setOpen(false);
    }
  );

  const onSubmit = (data: ProjectManagementFormData) => {
    const dataToSend = {
      ...data,
      phone: `+88${data.phone}`,
    };
    // alert(JSON.stringify(dataToSend));
    createProjectManagementPost(dataToSend);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
          {/* ===== name ===== */}
          <Input
            inputType="text"
            labelName="Name"
            placeholderText="Enter name"
            name="name"
            errors={errors}
            register={register}
            isRequired
          />
          {/* ===== email ===== */}
          <Input
            inputType="email"
            labelName="Email"
            placeholderText="Enter email"
            name="email"
            errors={errors}
            register={register}
            isRequired
          />
          {/* === phone number === */}
          <Input
            inputType="text"
            labelName="Phone number"
            placeholderText="01700000000"
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
