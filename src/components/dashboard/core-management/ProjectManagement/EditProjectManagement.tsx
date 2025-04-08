/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, SelectField } from "@/components/share/form";
import { usePatch } from "@/hooks/usePatch";
import { useAppSelector } from "@/lib/redux/hooks";
import {
  EditProjectManagementFormData,
  EditProjectManagementSchema,
} from "@/schemas/projectManagement/projectManagement";
import { IEditComponentProps } from "@/types/global/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {
  name?: string;
  email?: string;
  teamID?: string;
  phone?: string;
  status?: "active" | "inactive";
};

export default function EditProjectManagement({
  setEditModalOpen,
  refetch,
}: IEditComponentProps) {
  const { val: editData } = useAppSelector((state) => state.user) as {
    val: Props;
  };

  const { name, status, email, teamID, phone } = editData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    control,
  } = useForm<EditProjectManagementFormData>({
    resolver: zodResolver(EditProjectManagementSchema),
  });

  const { mutate: updateClient, isPending } = usePatch(
    `/project-management/${teamID}`,
    () => {
      refetch();
      reset();
      setEditModalOpen(false);
    }
  );

  const onSubmit = (data: EditProjectManagementFormData) => {
    // alert(JSON.stringify(data));

    const dataToSend: Partial<EditProjectManagementFormData> = {};
    for (const key in data) {
      if (
        data[key as keyof EditProjectManagementFormData] !==
        editData[key as keyof EditProjectManagementFormData]
      ) {
        const value = data[key as keyof EditProjectManagementFormData];
        if (
          key === "status" &&
          (value === "active" || value === "inactive" || value === undefined)
        ) {
          dataToSend[key as keyof EditProjectManagementFormData] = value;
        } else if (key !== "status") {
          dataToSend[key as keyof EditProjectManagementFormData] = value as any;
        }
      }
    }

    if (Object.keys(dataToSend).length === 0) {
      toast.error("No changes detected!");
      return;
    }

    updateClient(dataToSend);
  };

  const statusDropdown = [
    {
      id: 1,
      value: "active",
      label: "Active",
    },
    {
      id: 2,
      value: "inactive",
      label: "Inactive",
    },
  ];

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
            defaultValue={name}
          />
          {/* ===== email ===== */}
          <Input
            inputType="email"
            labelName="Email"
            placeholderText="Enter email"
            name="email"
            errors={errors}
            register={register}
            defaultValue={email}
          />
          {/* === phone number === */}
          <Input
            inputType="text"
            labelName="Phone number"
            placeholderText="01700000000"
            name="phone"
            errors={errors}
            register={register}
            defaultValue={phone}
          />
          {/* ===== status ====== */}
          <SelectField
            label="Status"
            placeholderText="Select Status"
            name="status"
            control={control}
            data={statusDropdown}
            labelKey="label"
            valueKey="value"
            errors={errors}
            isLoading={false}
            defaultValue={status}
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="bg-lightAltBlue/90 hover:bg-lightAltBlue text-whitePrimary text-sm font-medium px-8 py-3 rounded-full mt-6 cursor-pointer disabled:cursor-not-allowed"
        >
          {isPending ? "Loading..." : "Edit"}
        </button>
      </form>
    </div>
  );
}
