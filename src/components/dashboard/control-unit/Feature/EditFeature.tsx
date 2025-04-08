/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, SelectField } from "@/components/share/form";
import { usePatch } from "@/hooks/usePatch";
import { useAppSelector } from "@/lib/redux/hooks";
import {
  EditFeatureFormData,
  EditFeatureSchema,
} from "@/schemas/feature/feature";
import { IEditComponentProps } from "@/types/global/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {
  name?: string;
  description?: string;
  featureID: string;
  status?: "active" | "inactive";
};

export default function EditCoreModule({
  setEditModalOpen,
  refetch,
}: IEditComponentProps) {
  const { val: editData } = useAppSelector((state) => state.user) as {
    val: Props;
  };

  const { name, status, description, featureID } = editData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    control,
  } = useForm<EditFeatureFormData>({
    resolver: zodResolver(EditFeatureSchema),
  });

  const { mutate: updateFeature, isPending } = usePatch(
    `/feature/${featureID}`,
    () => {
      refetch();
      reset();
      setEditModalOpen(false);
    }
  );

  const onSubmit = (data: EditFeatureFormData) => {
    // alert(JSON.stringify(data));

    const dataToSend: Partial<EditFeatureFormData> = {};
    for (const key in data) {
      if (
        data[key as keyof EditFeatureFormData] !==
        editData[key as keyof EditFeatureFormData]
      ) {
        const value = data[key as keyof EditFeatureFormData];
        if (
          key === "status" &&
          (value === "active" || value === "inactive" || value === undefined)
        ) {
          dataToSend[key as keyof EditFeatureFormData] = value;
        } else if (key !== "status") {
          dataToSend[key as keyof EditFeatureFormData] = value as any;
        }
      }
    }

    if (Object.keys(dataToSend).length === 0) {
      toast.error("No changes detected!");
      return;
    }

    updateFeature(dataToSend);
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
          disabled={isPending}
          className="bg-lightAltBlue/90 hover:bg-lightAltBlue text-whitePrimary text-sm font-medium px-8 py-3 rounded-full mt-6 cursor-pointer"
        >
          {isPending ? "Loading..." : "Edit"}
        </button>
      </form>
    </div>
  );
}
