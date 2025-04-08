"use client";

import { Input } from "@/components/share/form";
import TextArea from "@/components/share/form/TextArea";
import { usePost } from "@/hooks/usePost";
import { VendorFormData, VendorSchema } from "@/schemas/vendor/vendor";
import { IAddComponentProps } from "@/types/global/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function AddVendor({ setOpen, refetch }: IAddComponentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    // control,
  } = useForm<VendorFormData>({
    resolver: zodResolver(VendorSchema),
  });

  const { mutate: createVendorPost, isPending } = usePost("/vendors", () => {
    refetch();
    reset();
    setOpen(false);
  });

  const onSubmit = (data: VendorFormData) => {
    const dataToSend = {
      ...data,
      phone: `+88${data.phone}`,
    };
    alert(JSON.stringify(dataToSend));
    createVendorPost(dataToSend);
  };

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
            isRequired
          />
          {/* ===== email ===== */}
          <Input
            inputType="email"
            labelName="Email"
            placeholderText="Enter your email"
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
          {/* ====== address ========= */}
          <TextArea
            labelName="Address"
            placeholderText="Enter your address"
            name="address"
            errors={errors}
            register={register}
            isRequired
          />
          {/* ====== bin ========= */}
          <Input
            inputType="text"
            labelName="BIN"
            placeholderText="01100000000"
            name="bin"
            errors={errors}
            register={register}
            isRequired
          />
          {/* ====== tin ========= */}
          <Input
            inputType="text"
            labelName="TIN"
            placeholderText="01100000000"
            name="tin"
            errors={errors}
            register={register}
            isRequired
          />
          {/* ====== account number ========= */}
          <Input
            inputType="text"
            labelName="Account number"
            placeholderText="Enter your account number"
            name="acNo"
            errors={errors}
            register={register}
            isRequired
          />
          {/* ====== owner name ========= */}
          <Input
            inputType="text"
            labelName="Owner name"
            placeholderText="Enter owner name"
            name="ownerName"
            errors={errors}
            register={register}
            isRequired
          />
          {/* ====== type of business ========= */}
          <Input
            inputType="text"
            labelName="Type of Business"
            placeholderText="Enter type of business"
            name="typeOfBusiness"
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
