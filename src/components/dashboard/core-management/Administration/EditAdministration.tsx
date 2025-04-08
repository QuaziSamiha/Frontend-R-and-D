/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, SelectField } from "@/components/share/form";
import { usePatch } from "@/hooks/usePatch";
import { useAppSelector } from "@/lib/redux/hooks";
import {
  EditAdministrationFormData,
  EditAdministrationSchema,
} from "@/schemas/Administration/administration";
import { IEditComponentProps } from "@/types/global/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {
  name?: string;
  phone?: string;
  departmentID?: string;
  status?: "active" | "inactive";
};

export default function EditAdministration({
  setEditModalOpen,
  refetch,
}: IEditComponentProps) {
  const { val: editData } = useAppSelector((state) => state.user) as {
    val: Props;
  };

  const { name, status, phone, departmentID } = editData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    control,
  } = useForm<EditAdministrationFormData>({
    resolver: zodResolver(EditAdministrationSchema),
  });

  const { mutate: updateAdministration, isPending } = usePatch(
    `/administration/${departmentID}`,
    () => {
      refetch();
      reset();
      setEditModalOpen(false);
    }
  );

  const onSubmit = (data: EditAdministrationFormData) => {
    // alert(JSON.stringify(data));

    const dataToSend: Partial<EditAdministrationFormData> = {};
    for (const key in data) {
      if (
        data[key as keyof EditAdministrationFormData] !==
        editData[key as keyof EditAdministrationFormData]
      ) {
        const value = data[key as keyof EditAdministrationFormData];
        if (
          key === "status" &&
          (value === "active" || value === "inactive" || value === undefined)
        ) {
          dataToSend[key as keyof EditAdministrationFormData] = value;
        } else if (key !== "status") {
          dataToSend[key as keyof EditAdministrationFormData] = value as any;
        }
      }
    }

    if (Object.keys(dataToSend).length === 0) {
      toast.error("No changes detected!");
      return;
    }
    // console.log("data to send", dataToSend);
    updateAdministration(dataToSend);
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
            labelName="Phone Number"
            placeholderText="+8801000000000"
            name="phone"
            errors={errors}
            register={register}
            defaultValue={phone}
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
          className="bg-lightAltBlue/90 hover:bg-lightAltBlue text-whitePrimary text-sm font-medium px-8 py-3 rounded-full mt-6 cursor-pointer disabled:cursor-not-allowed"
        >
          {isPending ? "Loading..." : "Edit"}
        </button>
      </form>
    </div>
  );
}
