/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, SelectField } from "@/components/share/form";
import { usePatch } from "@/hooks/usePatch";
import { useAppSelector } from "@/lib/redux/hooks";
import {
  EditCoreModuleFormData,
  EditCoreModuleSchema,
} from "@/schemas/core-module/coreModule";
import { IEditComponentProps } from "@/types/global/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {
  name?: string;
  description?: string;
  coreModuleID?: string;
  status?: "active" | "inactive";
};

export default function EditCoreModule({
  setEditModalOpen,
  refetch,
}: IEditComponentProps) {
  const { val: editData } = useAppSelector((state) => state.user) as {
    val: Props;
  };

  const { name, status, description, coreModuleID } = editData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    control,
  } = useForm<EditCoreModuleFormData>({
    resolver: zodResolver(EditCoreModuleSchema),
  });

  const { mutate: updateCoreModule, isPending } = usePatch(
    `/core-module/${coreModuleID}`,
    () => {
      refetch();
      reset();
      setEditModalOpen(false);
    }
  );

  const onSubmit = (data: EditCoreModuleFormData) => {
    // alert(JSON.stringify(data));

    const dataToSend: Partial<EditCoreModuleFormData> = {};
    for (const key in data) {
      if (
        data[key as keyof EditCoreModuleFormData] !==
        editData[key as keyof EditCoreModuleFormData]
      ) {
        const value = data[key as keyof EditCoreModuleFormData];
        if (
          key === "status" &&
          (value === "active" || value === "inactive" || value === undefined)
        ) {
          dataToSend[key as keyof EditCoreModuleFormData] = value;
        } else if (key !== "status") {
          dataToSend[key as keyof EditCoreModuleFormData] = value as any;
        }
      }
    }

    if (Object.keys(dataToSend).length === 0) {
      toast.error("No changes detected!");
      return;
    }

    updateCoreModule(dataToSend);
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
          <Input
            inputType="text"
            labelName="Name"
            placeholderText="Enter your name"
            name="name"
            errors={errors}
            register={register}
            defaultValue={name}
          />
          <Input
            inputType="text"
            labelName="Description"
            placeholderText="Enter your description"
            name="description"
            errors={errors}
            register={register}
            defaultValue={description}
          />
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
          disabled={true}
          className="bg-lightAltBlue/90 hover:bg-lightAltBlue text-whitePrimary text-sm font-medium px-8 py-3 rounded-full mt-6 cursor-pointer disabled:cursor-not-allowed"
        >
          {isPending ? "Loading..." : "Edit"}
        </button>
      </form>
    </div>
  );
}
