import Input from "@/components/ui/form/Input";
import SelectField from "@/components/ui/form/SelectField";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

interface IRegistrationForm<T extends FieldValues> {
  control: Control<T>;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  isDisable?: boolean;
}

// ========= OPTION TYPE ========
interface IStore {
  id: number;
  value: string;
  label: string;
}

// ============== DEMO OPTIONS =============
const stores: IStore[] = [
  {
    id: 1,
    value: "store_001",
    label: "Downtown Grocery",
  },
  {
    id: 2,
    value: "store_002",
    label: "Sunset Mart",
  },
  {
    id: 3,
    value: "store_003",
    label: "Evergreen Essentials",
  },
  {
    id: 4,
    value: "store_004",
    label: "Mountain View Supplies",
  },
  {
    id: 5,
    value: "store_005",
    label: "Oceanfront Market",
  },
];

const RegistrationForm = <T extends FieldValues>({
  control,
  register,
  errors,
}: IRegistrationForm<T>) => {
  return (
    <div className="flex justify-between gap-20">
      <SelectField
        control={control}
        name="store"
        data={stores}
        label="Store"
        placeholderText="-Select Store-"
        errors={errors}
        labelKey="label"
        valueKey="value"
        isLoading={false}
        isRequired
      />
      <Input
        labelName="Register Name"
        inputType="text"
        placeholderText="Register Name"
        name="registerName"
        register={register}
        isRequired
        // disabled={isDisable}
        errors={errors}
      />
      <Input
        labelName="POS Code"
        inputType="text"
        placeholderText="POS Code"
        name="posCode"
        register={register}
        isRequired
        // disabled={isDisable}
        errors={errors}
      />
    </div>
  );
};

export default RegistrationForm;
