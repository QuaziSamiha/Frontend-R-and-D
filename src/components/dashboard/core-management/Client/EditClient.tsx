/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, SelectField } from "@/components/share/form";
import TextArea from "@/components/share/form/TextArea";
import { usePatch } from "@/hooks/usePatch";
import { useAppSelector } from "@/lib/redux/hooks";
import { EditClientFormData } from "@/schemas/client/client";
import { EditVendorSchema } from "@/schemas/vendor/vendor";
import { IEditComponentProps } from "@/types/global/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {
  name?: string;
  email?: string;
  clientID?: string;
  phone?: string;
  address?: string;
  bin?: string;
  tin?: string;
  responsiblePersonContact?: string;
  responsiblePerson?: string;
  status?: "active" | "inactive";
};

export default function EditClient({
  setEditModalOpen,
  refetch,
}: IEditComponentProps) {
  const { val: editData } = useAppSelector((state) => state.user) as {
    val: Props;
  };

  const {
    name,
    status,
    email,
    clientID,
    responsiblePersonContact,
    responsiblePerson,
    phone,
    address,
    bin,
    tin,
  } = editData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    control,
  } = useForm<EditClientFormData>({
    resolver: zodResolver(EditVendorSchema),
  });

  const { mutate: updateClient, isPending } = usePatch(
    `/clients/${clientID}`,
    () => {
      refetch();
      reset();
      setEditModalOpen(false);
    }
  );

  const onSubmit = (data: EditClientFormData) => {
    // alert(JSON.stringify(data));

    const dataToSend: Partial<EditClientFormData> = {};
    for (const key in data) {
      if (
        data[key as keyof EditClientFormData] !==
        editData[key as keyof EditClientFormData]
      ) {
        const value = data[key as keyof EditClientFormData];
        if (
          key === "status" &&
          (value === "active" || value === "inactive" || value === undefined)
        ) {
          dataToSend[key as keyof EditClientFormData] = value;
        } else if (key !== "status") {
          dataToSend[key as keyof EditClientFormData] = value as any;
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
          <Input
            inputType="text"
            labelName="Name"
            placeholderText="Enter client name"
            name="name"
            errors={errors}
            register={register}
            defaultValue={name}
          />
          {/* ===== email ===== */}
          <Input
            inputType="email"
            labelName="Email"
            placeholderText="Enter your email"
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
          {/* ====== address ========= */}
          <TextArea
            labelName="Address"
            placeholderText="Enter your address"
            name="address"
            errors={errors}
            register={register}
            defaultValue={address}
          />
          {/* ====== bin ========= */}
          <Input
            inputType="text"
            labelName="BIN"
            placeholderText="01100000000"
            name="bin"
            errors={errors}
            register={register}
            defaultValue={bin}
          />
          {/* ====== tin ========= */}
          <Input
            inputType="text"
            labelName="TIN"
            placeholderText="01100000000"
            name="tin"
            errors={errors}
            register={register}
            defaultValue={tin}
          />
          {/* ====== responsible person ========= */}
          <Input
            inputType="text"
            labelName="Responsible Person"
            placeholderText="Enter person name"
            name="responsiblePerson"
            errors={errors}
            register={register}
            defaultValue={responsiblePerson}
          />
          {/* ====== responsible person contact ========= */}
          <Input
            inputType="text"
            labelName="Responsible Person Contact"
            placeholderText="Enter phone number"
            name="responsiblePersonContact"
            errors={errors}
            register={register}
            defaultValue={responsiblePersonContact}
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
