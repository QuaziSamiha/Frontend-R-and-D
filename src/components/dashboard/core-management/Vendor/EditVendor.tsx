/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, SelectField } from "@/components/share/form";
import TextArea from "@/components/share/form/TextArea";
import { usePatch } from "@/hooks/usePatch";
import { useAppSelector } from "@/lib/redux/hooks";
import { EditVendorFormData, EditVendorSchema } from "@/schemas/vendor/vendor";
import { IEditComponentProps } from "@/types/global/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {
  name?: string;
  email?: string;
  vendorID?: string;
  phone?: string;
  address?: string;
  bin?: string;
  tin?: string;
  acNo?: string;
  ownerName?: string;
  typeOfBusiness?: string;
  status?: "active" | "inactive";
};

export default function EditVendor({
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
    vendorID,
    phone,
    address,
    bin,
    tin,
    acNo,
    ownerName,
    typeOfBusiness,
  } = editData;

  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    control,
  } = useForm<EditVendorFormData>({
    resolver: zodResolver(EditVendorSchema),
  });

  const { mutate: updateVendor, isPending } = usePatch(
    `/vendors/${vendorID}`,
    () => {
      refetch();
      reset();
      setEditModalOpen(false);
    }
  );

  const onSubmit = (data: EditVendorFormData) => {
    // alert(JSON.stringify(data));

    const dataToSend: Partial<EditVendorFormData> = {};
    for (const key in data) {
      if (
        data[key as keyof EditVendorFormData] !==
        editData[key as keyof EditVendorFormData]
      ) {
        const value = data[key as keyof EditVendorFormData];
        if (
          key === "status" &&
          (value === "active" || value === "inactive" || value === undefined)
        ) {
          dataToSend[key as keyof EditVendorFormData] = value;
        } else if (key !== "status") {
          dataToSend[key as keyof EditVendorFormData] = value as any;
        }
      }
    }

    if (Object.keys(dataToSend).length === 0) {
      toast.error("No changes detected!");
      return;
    }

    updateVendor(dataToSend);
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
            placeholderText="Enter your name"
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
          {/* ====== account number ========= */}
          <Input
            inputType="text"
            labelName="Account number"
            placeholderText="Enter your account number"
            name="acNo"
            errors={errors}
            register={register}
            defaultValue={acNo}
          />
          {/* ====== owner name ========= */}
          <Input
            inputType="text"
            labelName="Owner name"
            placeholderText="Enter owner name"
            name="ownerName"
            errors={errors}
            register={register}
            defaultValue={ownerName}
          />
          {/* ====== type of business ========= */}
          <Input
            inputType="text"
            labelName="Type of Business"
            placeholderText="Enter type of business"
            name="typeOfBusiness"
            errors={errors}
            register={register}
            defaultValue={typeOfBusiness}
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
