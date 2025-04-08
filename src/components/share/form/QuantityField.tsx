import { IQuantityField } from "@/types/form/form.types";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
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
        {label} {isRequired && <span className="text-red-500 px-0.5">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  if (field.value > 1) {
                    field.onChange(field.value - 1);
                  }
                }}
                className="font-medium bg-greyAltTernary text-greyPrimary py-2 px-3 text-2xl rounded flex items-center justify-center cursor-pointer"
              >
                <LuMinus />
              </button>

              <div className="bg-greyAltTernary text-greyPrimary font-medium py-1.5 px-3.5 text-lg rounded flex items-center justify-center cursor-pointer">
                {field.value < 10 ? (
                  <p>0{field.value}</p>
                ) : (
                  <p>{field.value}</p>
                )}
              </div>

              <button
                type="button"
                onClick={() => field.onChange(field.value + 1)}
                className="font-medium bg-greyAltTernary text-greyPrimary py-2 px-3 rounded flex items-center justify-center cursor-pointer"
              >
                <GoPlus size={24} className="font-medium" />
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
}
