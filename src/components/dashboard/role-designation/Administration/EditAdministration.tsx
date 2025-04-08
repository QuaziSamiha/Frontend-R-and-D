/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, SelectField } from "@/components/share/form";
import { usePatch } from "@/hooks/usePatch";
import { useAppSelector } from "@/lib/redux/hooks";
import {
  EditRoleDesigAdministrationFormData,
  EditRoleDesigAdministrationSchema,
} from "@/schemas/RoleDesignation-administration/RoleDesignation-Administration";
import { IEditComponentProps } from "@/types/global/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {
  name?: string;
  description?: string;
  designationID?: string;
  stakeholderReferenceID?: string;
  status?: "active" | "inactive";
};

export default function EditAdministration({
  setEditModalOpen,
  refetch,
}: IEditComponentProps) {
  const { val: editData } = useAppSelector((state) => state.user) as {
    val: Props;
  };

  const { name, status, description, designationID } = editData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    control,
  } = useForm<EditRoleDesigAdministrationFormData>({
    resolver: zodResolver(EditRoleDesigAdministrationSchema),
  });

  // administration department dropdown list
  // const { data: allAdminisData } = useGet<[]>("/administration", [
  //   "allAdministrationData",
  // ]);

  // const RoleDesigAdministration = RoleDesigAdministrationDropDown(
  //   allAdminisData ?? []
  // );

  const { mutate: updateRoleDesigAdministration, isPending } = usePatch(
    `/role-designation/${designationID}`,
    () => {
      refetch();
      reset();
      setEditModalOpen(false);
    }
  );

  const onSubmit = (data: EditRoleDesigAdministrationFormData) => {
    // alert(JSON.stringify(data));

    const dataToSend: Partial<EditRoleDesigAdministrationFormData> = {};
    for (const key in data) {
      if (
        data[key as keyof EditRoleDesigAdministrationFormData] !==
        editData[key as keyof EditRoleDesigAdministrationFormData]
      ) {
        const value = data[key as keyof EditRoleDesigAdministrationFormData];
        if (
          key === "status" &&
          (value === "active" || value === "inactive" || value === undefined)
        ) {
          dataToSend[key as keyof EditRoleDesigAdministrationFormData] = value;
        } else if (key !== "status") {
          dataToSend[key as keyof EditRoleDesigAdministrationFormData] =
            value as any;
        }
      }
    }

    if (Object.keys(dataToSend).length === 0) {
      toast.error("No changes detected!");
      return;
    }
    // console.log("data to send", dataToSend);
    updateRoleDesigAdministration(dataToSend);
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
          {/* ========== name ======== */}
          <Input
            inputType="text"
            labelName="Name"
            placeholderText="Enter your name"
            name="name"
            errors={errors}
            register={register}
            defaultValue={name}
          />
          {/* ======= description ========= */}
          <Input
            inputType="text"
            labelName="Description"
            placeholderText="Enter description"
            name="description"
            errors={errors}
            register={register}
            defaultValue={description}
          />
          {/* ============= stakeholderReferenceID / department name ========== */}
          {/* <SelectField
            label="Department Name"
            placeholderText="Select Department Name"
            name="stakeholderReferenceID"
            control={control}
            data={RoleDesigAdministration}
            labelKey="label"
            valueKey="value"
            errors={errors}
            isLoading={false}
            defaultValue={stakeholderReferenceID}
          /> */}

          {/* ========== status ========= */}
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
