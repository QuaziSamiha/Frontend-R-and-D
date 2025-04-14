import { IQuantityField } from "@/types/form/form.types";
import { Controller, FieldValues } from "react-hook-form";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

export default function QuantityField<T extends FieldValues>({
  label,
  name,
  control,
  isRequired = false,
}: IQuantityField<T>) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-blackSecondary text-base font-medium pl-2">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="flex items-center justify-start">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  if (field.value > 1) {
                    field.onChange(field.value - 1);
                  }
                }}
                className="font-medium bg-greyAltTernary text-blackSecondary py-3 px-4 text-2xl rounded flex items-center justify-center cursor-pointer"
              >
                <LuMinus size={16} />
              </button>

              <div className="bg-greyAltTernary text-blackSecondary py-2.5 px-10 text-sm rounded flex items-center justify-center cursor-pointer">
                {field.value < 10 ? (
                  <p>0{field.value}</p>
                ) : (
                  <p>{field.value}</p>
                )}
              </div>

              <button
                type="button"
                onClick={() => field.onChange(field.value + 1)}
                className="font-medium bg-greyAltTernary text-blackSecondary py-3 px-4 rounded flex items-center justify-center cursor-pointer"
              >
                <GoPlus size={16} className="font-medium" />
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
}
