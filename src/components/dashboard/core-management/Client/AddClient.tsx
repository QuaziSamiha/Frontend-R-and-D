"use client";

import { Input } from "@/components/share/form";
import TextArea from "@/components/share/form/TextArea";
import { usePost } from "@/hooks/usePost";
import { ClientFormData, ClientSchema } from "@/schemas/client/client";
import { IAddComponentProps } from "@/types/global/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function AddClient({ setOpen, refetch }: IAddComponentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    // control,
  } = useForm<ClientFormData>({
    resolver: zodResolver(ClientSchema),
  });

  const { mutate: createClientPost, isPending } = usePost("/clients", () => {
    refetch();
    reset();
    setOpen(false);
  });

  const onSubmit = (data: ClientFormData) => {
    const dataToSend = {
      ...data,
      phone: `+88${data.phone}`,
      responsiblePersonContact: `+88${data.responsiblePersonContact}`,
    };
    // alert(JSON.stringify(dataToSend));
    createClientPost(dataToSend);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
          {/* ===== name ===== */}
          <Input
            inputType="text"
            labelName="Name"
            placeholderText="Enter client name"
            name="name"
            // errors={errors}
            register={register}
            isRequired
          />
          {/* ===== email ===== */}
          <Input
            inputType="email"
            labelName="Email"
            placeholderText="Enter your email"
            name="email"
            // errors={errors}
            register={register}
            isRequired
          />
          {/* === phone number === */}
          <Input
            inputType="text"
            labelName="Phone number"
            placeholderText="01700000000"
            name="phone"
            // errors={errors}
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
          {/* ====== responsible person ========= */}
          <Input
            inputType="text"
            labelName="Responsible Person"
            placeholderText="Enter person name"
            name="responsiblePerson"
            errors={errors}
            register={register}
            isRequired
          />
          {/* ====== responsible person contact ========= */}
          <Input
            inputType="text"
            labelName="Responsible Person Contact"
            placeholderText="Enter phone number"
            name="responsiblePersonContact"
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
