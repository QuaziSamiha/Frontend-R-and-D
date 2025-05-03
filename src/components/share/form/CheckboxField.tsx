import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
  type PathValue,
} from "react-hook-form";

interface ICheckboxOption {
  id: string;
  label: string;
  value: string;
  disabled?: boolean;
}

interface ICheckboxField<T extends FieldValues> {
  label?: string;
  name: Path<T>;
  control: Control<T>;
  options: ICheckboxOption[];
  isLoading?: boolean;
  isRequired?: boolean;
  trigger?: (name?: Path<T> | Path<T>[]) => Promise<boolean>;
  className?: string;
  defaultValue?: PathValue<T, Path<T>>[];
  requiredMessage?: string;
}

const CheckboxField = <T extends FieldValues>({
  label,
  name,
  control,
  options,
  isLoading,
  isRequired,
  trigger,
  className,
  defaultValue = [],
  requiredMessage = "At least one option must be selected",
}: ICheckboxField<T>) => {
  return (
    <div className={cn("flex flex-col gap-3 w-full", className)}>
      {label && (
        <Label className="text-blackSecondary text-base font-medium pl-2">
          {label}
          {isRequired && <span className="text-red-500 px-0.5">*</span>}
        </Label>
      )}

      {isLoading ? (
        <div className="space-y-2">
          <Skeleton className="w-full h-10 bg-gray" />
          <Skeleton className="w-full h-10 bg-gray" />
        </div>
      ) : (
        <Controller
          control={control}
          name={name}
          rules={{ required: requiredMessage }}
          defaultValue={defaultValue as PathValue<T, Path<T>>}
          render={({ field, fieldState }) => {
            const values: string[] = Array.isArray(field.value)
              ? field.value
              : [];
            const allSelected =
              options.length > 0 &&
              options.every((option) => values.includes(option.value));

            const handleSelectAll = (checked: boolean) => {
              const newValue = checked
                ? options.map((option) => option.value)
                : [];
              field.onChange(newValue);
              trigger?.(name);
            };

            const handleChange = (checked: boolean, value: string) => {
              const newValue = checked
                ? [...values, value]
                : values.filter((v) => v !== value);
              field.onChange(newValue);
              trigger?.(name);
            };

            return (
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-end space-x-2 rounded-md p-3 bg-muted/20">
                  <Checkbox
                    id={`${name}-select-all`}
                    checked={allSelected}
                    onCheckedChange={handleSelectAll}
                    className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground cursor-pointer"
                  />
                  <Label
                    htmlFor={`${name}-select-all`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    Select All
                  </Label>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  {options.map((option) => (
                    <Label
                      key={option.id}
                      htmlFor={option.id}
                      className="text-sm text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer rounded-md border border-gray-200 px-3 py-6 transition-colors hover:bg-muted/50"
                    >
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id={option.id}
                          checked={values.includes(option.value)}
                          onCheckedChange={(checked) =>
                            handleChange(!!checked, option.value)
                          }
                          disabled={option.disabled}
                          className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                        />
                        {option.label}
                      </div>
                    </Label>
                  ))}
                </div>

                {fieldState.error && (
                  <p className="text-red-500 text-sm pl-2">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            );
          }}
        />
      )}
    </div>
  );
};

export default CheckboxField;

// "use client";
// import {
//   Controller,
//   type Control,
//   type FieldValues,
//   type FieldPath,
//   // type FieldErrors,
// } from "react-hook-form";
// import { cn } from "@/lib/utils";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";

// export interface CheckboxOption {
//   id: string;
//   label: string;
//   value: string;
//   disabled?: boolean;
// }

// export interface CheckboxGroupProps<
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
// > {
//   name: TName;
//   control: Control<TFieldValues>;
//   options: CheckboxOption[];
//   label?: string;
//   description?: string;
//   className?: string;
//   // errors?: FieldErrors<TFieldValues>;
//   required?: boolean;
//   trigger?: (name?: TName | TName[]) => Promise<boolean>;
// }

// export function CheckboxField<
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
// >({
//   label,
//   name,
//   control,
//   trigger,
//   // errors,
//   options,
//   description,
//   className,
//   required = false,
// }: CheckboxGroupProps<TFieldValues, TName>) {
//   // const errorMessage = errors?.[name]?.message as string | undefined;

//   return (
//     <div className={cn("space-y-3", className)}>
//       {label && (
//         <div className="flex items-baseline justify-between">
//           <Label className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
//             {label} {required && <span className="text-destructive">*</span>}
//           </Label>
//         </div>
//       )}
//       {description && (
//         <p className="text-sm text-muted-foreground">{description}</p>
//       )}

//       <Controller
//         name={name}
//         control={control}
//         render={({ field, fieldState }) => {
//           const errorMessage = fieldState.error?.message;
//           // Ensure field.value is an array
//           const values: string[] = Array.isArray(field.value)
//             ? field.value
//             : [];

//           // Check if all options are selected
//           const allSelected =
//             options.length > 0 &&
//             options.every((option) => values.includes(option.value));

//           // Handle select all
//           const handleSelectAll = (checked: boolean) => {
//             if (checked) {
//               // Select all options
//               const allValues = options.map((option) => option.value);
//               field.onChange(allValues);
//             } else {
//               // Deselect all options
//               field.onChange([]);
//             }
//             if (trigger) trigger(name);
//           };

//           // Handle individual checkbox change
//           const handleCheckboxChange = (checked: boolean, value: string) => {
//             if (checked) {
//               // Add value to array
//               field.onChange([...values, value]);
//             } else {
//               // Remove value from array
//               field.onChange(values.filter((v: string) => v !== value));
//             }
//             if (trigger) trigger(name);
//           };

//           return (
//             <div className="flex flex-col gap-2">
//               <div className="flex items-center justify-end space-x-2 rounded-md p-3 bg-muted/20">
//                 <Checkbox
//                   id={`${name}-select-all`}
//                   checked={allSelected}
//                   onCheckedChange={handleSelectAll}
//                   className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground cursor-pointer"
//                 />
//                 <Label
//                   htmlFor={`${name}-select-all`}
//                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
//                 >
//                   Select All
//                 </Label>
//               </div>

//               <div className="grid grid-cols-4 gap-4">
//                 {options.map((option) => (
//                   <Label
//                     key={option.id}
//                     htmlFor={option.id}
//                     className="text-sm text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer rounded-md border border-gray-200 px-3 py-6 transition-colors hover:bg-muted/50"
//                   >
//                     <div className="flex items-center gap-2">
//                       <Checkbox
//                         id={option.id}
//                         checked={values.includes(option.value)}
//                         onCheckedChange={(checked) =>
//                           handleCheckboxChange(!!checked, option.value)
//                         }
//                         disabled={option.disabled}
//                         className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
//                       />
//                       {option.label}
//                     </div>
//                   </Label>
//                 ))}
//               </div>
//             </div>
//           );
//         }}
//         />
//         {/* {errorMessage && (
//           <p className="text-sm font-medium text-destructive">{errorMessage}</p>
//         )} */}

//     </div>
//   );
// }
