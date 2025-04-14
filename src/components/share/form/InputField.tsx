import { IInput } from "@/types/form/form.types";
import { FieldValues, Path, PathValue, useController } from "react-hook-form";

export default function InputField<
  T extends FieldValues,
  Type extends "text" | "number" | "email"
>({
  labelName,
  inputType = "text" as Type,
  IconComponent,
  placeholderText,
  name,
  control,
  trigger,
  disabled,
  isRequired,
  defaultValue,
  requiredMessage = "This field is required.",
}: IInput<T, Type>) {
  // ================ REACT HOOK FORM METHODS =============
  const { field, fieldState } = useController<T>({
    name,
    control,
    rules: { required: requiredMessage },
    defaultValue: defaultValue as PathValue<T, Path<T>>,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e.target.value);
    trigger?.(field.name);
  };
  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-blackSecondary text-base font-medium pl-2">
        {labelName}
        {isRequired && !disabled && (
          <span className="text-red-500 px-0.5">*</span>
        )}
      </label>
      <div className="flex items-center gap-2 bg-whiteSecondary border border-greySecondary py-2.5 px-3 rounded-md w-full">
        {IconComponent && <IconComponent fontSize={20} />}
        <input
          className="outline-none font-normal text-charcaolGray placeholder:text-greyTernary text-sm w-full disabled:cursor-not-allowed [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type={inputType}
          placeholder={placeholderText}
          value={field.value ?? ""}
          onChange={handleChange}
          name={field.name}
          disabled={disabled}
          onWheel={(e) => e.currentTarget.blur()}
        />
      </div>
      {fieldState.error && !disabled && (
        <p className="text-red-500 text-sm pl-2 -mt-1">
          {fieldState.error.message}
        </p>
      )}
    </div>
  );
}

// import { IInput } from "@/types/form/form.types";
// import { FieldValues, Path } from "react-hook-form";

// export default function InputField<
//   T extends FieldValues,
//   Type extends "text" | "number" | "email"
// >({
//   labelName,
//   inputType = "text" as Type,
//   IconComponent,
//   placeholderText,
//   name,
//   errors,
//   register,
//   disabled,
//   isRequired,
//   defaultValue,
//   requiredMessage = "This field is required.",
// }: IInput<T, Type>) {
//   console.log(errors);
//   return (
//     <div className="flex flex-col gap-3 w-full">
//       <label className="text-blackSecondary text-base font-medium pl-2">
//         {labelName}
//         {isRequired && !disabled && (
//           <span className="text-red-500 px-0.5">*</span>
//         )}
//       </label>
//       <div className="flex items-center gap-2 bg-whiteSecondary border border-greySecondary py-2.5 px-3 rounded-md w-full">
//         {IconComponent && <IconComponent fontSize={20} />}
//         <input
//           className="outline-none font-normal text-charcaolGray placeholder:text-greyTernary text-sm w-full disabled:cursor-not-allowed [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
//           type={inputType}
//           placeholder={placeholderText}
//           defaultValue={defaultValue}
//           {...register(name as Path<T>, { required: requiredMessage })}
//           disabled={disabled}
//           onWheel={(e) => e.currentTarget.blur()}
//         />
//       </div>
//       {errors?.[name] && !disabled && (
//         <p className="text-red-500 text-sm mt-1 pl-2">
//           {errors[name]?.message as string}
//           {/* {typeof errors[name]?.message === "string" && errors[name]?.message} */}
//         </p>
//       )}
//     </div>
//   );
// }
