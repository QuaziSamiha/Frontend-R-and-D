"use client";
import { useForm } from "react-hook-form";
import RegistrationForm from "./registrationForm/RegistrationForm";
import TouchConfiguration from "./touchConfiguration/TouchConfiguration";
import SubmitButton from "@/components/ui/form/SubmitButton";
import { yupResolver } from "@hookform/resolvers/yup";
import ReceiptConfiguration from "./receiptConfiguration/ReceiptConfiguration";
import { RegistrationSchema } from "./schema";

interface IProps {
  handleOpen?: () => void;
  refetch?: () => void;
  isDisable?: boolean | undefined;
}

const NewRegistration: React.FC<IProps> = ({
  handleOpen,
  // refetch,
  // isDisable,
}) => {
  const resolver = yupResolver(RegistrationSchema);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // resetField,
    control,
    getValues,
  } = useForm({ resolver });

  // ============ SUBMIT FUNCTION ==========
  const onSubmit = (data: { [key: string]: unknown }) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <RegistrationForm
            control={control}
            register={register}
            errors={errors}
          />
          <TouchConfiguration />
          <ReceiptConfiguration
            control={control}
            register={register}
            errors={errors}
            getValues={getValues}
          />
          <div className="sticky -bottom-10 left-0 right-0 flex justify-center items-center gap-5 bg-white z-10 h-20">
            <button
              onClick={handleOpen}
              type="button"
              className="font-semibold text-textPrimary rounded py-1 px-10 h-10 bg-whitePrimary border border-textPrimary w-full"
            >
              Cancel
            </button>

            <SubmitButton submitTitle="Save" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewRegistration;
