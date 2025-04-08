import { Controller, FieldValues, Path, PathValue } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { ICheckboxInput } from "@/types/form/form.types";

const CheckboxInput = <T extends FieldValues>({
  label,
  items,
  control,
  name,
  errors,
  isRequired,
  defaultValue = [],
}: ICheckboxInput<T>) => {
  return (
    <div>
      {label && (
        <label className="font-medium text-blackSecondary text-base">
          {label} {isRequired && <span className="text-red-500 px-0.5">*</span>}
        </label>
      )}
      <div className="mt-2 space-y-3">
        {items.map((item) => (
          <Controller
            key={item.id}
            name={name as Path<T>}
            control={control}
            defaultValue={defaultValue as PathValue<T, Path<T>>}
            rules={{ required: true }}
            render={({
              field,
            }: {
              field: { value: string[]; onChange: (value: string[]) => void };
            }) => (
              <div className="flex items-center gap-2">
                <Checkbox
                  className={`h-6 w-6 rounded-sm border border-lightBlue ${
                    field.value?.includes(item.id)
                      ? "data-[state=checked]:bg-darkBlue data-[state=checked]:text-blackSecondary"
                      : "bg-transparent"
                  }`}
                  checked={field.value?.includes(item.id)}
                  onCheckedChange={(checked) => {
                    const newValue = checked
                      ? [...(field.value || []), item.id]
                      : (field.value || []).filter(
                          (value) => value !== item.id
                        );
                    field.onChange(newValue);
                  }}
                  id={item.id}
                />
                <label
                  htmlFor={item.id}
                  className="cursor-pointer text-sm font-medium text-blackSecondary"
                >
                  {item.label}
                </label>
              </div>
            )}
          />
        ))}
      </div>
      {errors?.[name] && (
        <p className="text-red-500 text-sm mt-2">
          {String(errors?.[name]?.message)}
        </p>
      )}
    </div>
  );
};

export default CheckboxInput;
