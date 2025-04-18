import { SelectField } from "@/components/share/form";
import InputField from "@/components/share/form/InputField";
import QuantityField from "@/components/share/form/QuantityField";
import TextArea from "@/components/share/form/TextArea";
import TextEditor from "@/components/share/form/TextEditor";
import { ISelectOption } from "@/types/form/form.types";
import { useFormContext } from "react-hook-form";

interface IProps {
  index: number;
}

// ========== ALL MEASUREMENT UNITS ===========
const allUOM: ISelectOption[] = [
  {
    id: 1,
    value: "piece",
    label: "Piece",
  },
  // {
  //   id: 2,
  //   value: "kg",
  //   label: "Kilogram",
  // },
  // {
  //   id: 3,
  //   value: "litre",
  //   label: "Litre",
  // },
  {
    id: 4,
    value: "box",
    label: "Box",
  },
  {
    id: 5,
    value: "set",
    label: "Set",
  },
  {
    id: 6,
    value: "unit",
    label: "Unit",
  },
];

export default function ItemForm({ index }: IProps) {
  // ================= REACT HOOK FORM METHODS =============
  const {
    register,
    control,
    trigger,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-1 gap-6 w-full">
        <InputField
          labelName="Name"
          placeholderText="Enter item name"
          name={`items.${index}.itemName`}
          control={control}
          trigger={trigger}
          isRequired
          requiredMessage="Item name is required"
        />
        <SelectField
          label="UOM"
          placeholderText="Select item's UOM"
          name={`items.${index}.uom`}
          control={control}
          trigger={trigger}
          data={allUOM}
          labelKey="label"
          valueKey="value"
          errors={errors}
          isLoading={false}
          isRequired
          requiredMessage="UOM is required"
        />
        <QuantityField
          label="Quantity"
          {...register(`items.${index}.quantity`)}
          control={control}
          isRequired
        />
      </div>

      <TextEditor
        labelName="Description"
        placeholderText="Write item description..."
        name={`items.${index}.itemDescription`}
        control={control}
      />

      <TextArea
        labelName="Remark"
        placeholderText="Write remark"
        name={`items.${index}.remark`}
        control={control}
      />
    </div>
  );
}
