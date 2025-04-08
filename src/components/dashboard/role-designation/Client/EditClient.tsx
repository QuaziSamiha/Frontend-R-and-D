/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, SelectField } from "@/components/share/form";
import { usePatch } from "@/hooks/usePatch";
import { useAppSelector } from "@/lib/redux/hooks";
import {
  EditRoleDesigClientFormData,
  EditRoleDesigClientSchema,
} from "@/schemas/RoleDesignation-client/RoleDesignation-client";
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

export default function EditClient({
  setEditModalOpen,
  refetch,
}: IEditComponentProps) {
  const { val: editData } = useAppSelector((state) => state.user) as {
    val: Props;
  };

  const { name, status, description, designationID } = editData;

  console.log("edit data", designationID);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    control,
  } = useForm<EditRoleDesigClientFormData>({
    resolver: zodResolver(EditRoleDesigClientSchema),
  });

  // administration department dropdown list
  // const { data: allClientData } = useGet<[]>("/clients", ["getAllClientData"]);
  // const RoleDesigClient = RoleDesigClientDropDown(allClientData ?? []);

  const { mutate: updateRoleDesigClient, isPending } = usePatch(
    `/role-designation/${designationID}`,
    () => {
      refetch();
      reset();
      setEditModalOpen(false);
    }
  );

  const onSubmit = (data: EditRoleDesigClientFormData) => {
    // alert(JSON.stringify(data));

    const dataToSend: Partial<EditRoleDesigClientFormData> = {};
    for (const key in data) {
      if (
        data[key as keyof EditRoleDesigClientFormData] !==
        editData[key as keyof EditRoleDesigClientFormData]
      ) {
        const value = data[key as keyof EditRoleDesigClientFormData];
        if (
          key === "status" &&
          (value === "active" || value === "inactive" || value === undefined)
        ) {
          dataToSend[key as keyof EditRoleDesigClientFormData] = value;
        } else if (key !== "status") {
          dataToSend[key as keyof EditRoleDesigClientFormData] = value as any;
        }
      }
    }

    if (Object.keys(dataToSend).length === 0) {
      toast.error("No changes detected!");
      return;
    }

    updateRoleDesigClient(dataToSend);
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
            label="Client Name"
            placeholderText="Select Client Name"
            name="stakeholderReferenceID"
            control={control}
            data={RoleDesigClient}
            labelKey="label"
            valueKey="value"
            errors={errors}
            isLoading={false}
            defaultValue={stakeholderReferenceID}
          /> */}

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
