/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, SelectField } from "@/components/share/form";
import { useGet } from "@/hooks/useGet";
import { usePatch } from "@/hooks/usePatch";
import { useAppSelector } from "@/lib/redux/hooks";
import { EditAdministrationSchema } from "@/schemas/Administration/administration";
import { EditClientUnitFormData } from "@/schemas/clientUnit/ClientUnit";
import { IEditComponentProps } from "@/types/global/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {
  clientUnitID?: string;
  name?: string;
  description?: string;
  clientID?: string;
  clientName?: string;
  status?: "active" | "inactive";
};

type clientDropDownType = {
  id: number;
  label: string;
  value: string;
};
type ClientDropDownData = {
  clientID: string;
  name: string;
};

export default function EditClientUnit({
  setEditModalOpen,
  refetch,
}: IEditComponentProps) {
  const { val: editData } = useAppSelector((state) => state.user) as {
    val: Props;
  };

  const { name, status, clientID, clientUnitID, description } = editData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    control,
  } = useForm<EditClientUnitFormData>({
    resolver: zodResolver(EditAdministrationSchema),
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

  // update client unit api
  const { mutate: updateClientUnit, isPending } = usePatch(
    `/client-units/${clientUnitID}`,
    () => {
      refetch();
      reset();
      setEditModalOpen(false);
    }
  );

  const onSubmit = (data: EditClientUnitFormData) => {
    // alert(JSON.stringify(data));

    const dataToSend: Partial<EditClientUnitFormData> = {};
    for (const key in data) {
      if (
        data[key as keyof EditClientUnitFormData] !==
        editData[key as keyof EditClientUnitFormData]
      ) {
        const value = data[key as keyof EditClientUnitFormData];
        if (
          key === "status" &&
          (value === "active" || value === "inactive" || value === undefined)
        ) {
          dataToSend[key as keyof EditClientUnitFormData] = value;
        } else if (key !== "status") {
          dataToSend[key as keyof EditClientUnitFormData] = value as any;
        }
      }
    }

    if (Object.keys(dataToSend).length === 0) {
      toast.error("No changes detected!");
      return;
    }
    // console.log("data to send", dataToSend);
    updateClientUnit(dataToSend);
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
          {/* ========== name ======= */}
          <Input
            inputType="text"
            labelName="Name"
            placeholderText="Enter your name"
            name="name"
            errors={errors}
            register={register}
            defaultValue={name}
          />
          {/* ======== client id ======== */}
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
            defaultValue={clientID}
          />
          {/* ======== description ======== */}
          <Input
            inputType="text"
            labelName="Description"
            placeholderText="Enter your description"
            name="description"
            errors={errors}
            register={register}
            defaultValue={description}
          />
          {/* ==== status ===== */}
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
