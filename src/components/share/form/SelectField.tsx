import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { ISelectField, ISelectOption } from "@/types/form/form.types";
import { Controller, FieldValues, Path, PathValue } from "react-hook-form";

const SelectField = <T extends FieldValues>({
  label,
  placeholderText,
  name,
  control,
  // errors,
  data,
  labelKey,
  valueKey,
  isLoading,
  onChange,
  isRequired,
  defaultValue,
  makeDisable = false,
  requiredMessage = "Select an option",
}: ISelectField<T>) => {
  // console.log(errors);
  // console.log(requiredMessage);
  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-blackSecondary text-base font-medium pl-2">
        {label}
        {isRequired && !makeDisable && (
          <span className="text-red-500 px-0.5">*</span>
        )}
      </label>

      {isLoading ? (
        <Skeleton className="w-full h-11 bg-gray" />
      ) : (
        <div className="flex flex-col gap-2">
          <Controller
            control={control}
            name={name as Path<T>}
            rules={{ required: requiredMessage }}
            defaultValue={defaultValue as PathValue<T, Path<T>> | undefined}
            render={({ field, fieldState }) => (
              <>
                <Select
                  {...field}
                  onValueChange={(value) => {
                    field.onChange(value);
                    if (onChange) onChange(value);
                  }}
                  disabled={makeDisable}
                >
                  <SelectTrigger className="outline-hidden text-blackSecondary text-sm bg-whiteSecondary py-5 pl-4 rounded-md w-full flex cursor-pointer">
                    <SelectValue
                      className="text-sm"
                      placeholder={placeholderText}
                      defaultValue={defaultValue}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {data?.map((item, index: number) => (
                      <SelectItem
                        key={index}
                        value={item[valueKey as keyof ISelectOption] as string}
                        className="cursor-pointer"
                      >
                        {String(item[labelKey as keyof ISelectOption])}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.error && (
                  <p className="text-red-500 text-sm pl-2">
                    {fieldState.error.message}
                  </p>
                )}
              </>
            )}
          />
          {/* {errors?.[name] && (
            <p className="text-red-500 text-sm pl-2">
              {typeof errors?.[name]?.message === "string" &&
                errors?.[name]?.message}
            </p>
          )} */}
        </div>
      )}
    </div>
  );
};

export default SelectField;

// import { Controller, FieldValues, Path, PathValue } from "react-hook-form";
// import { Skeleton } from "../skeleton";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../select";
// import { ISelectField } from "@/types/form";

// const SelectField = <T extends FieldValues, U>({
//   label,
//   placeholderText,
//   control,
//   name,
//   data,
//   resetField,
//   resetFieldName1,
//   resetFieldName2,
//   errors,
//   labelKey,
//   valueKey,
//   // disabledValue,
//   makeDisable,
//   isLoading,
//   onChange,
//   defaultValue,
//   isRequired,
// }: ISelectField<T, U>) => {
//   return (
//     <div className="flex flex-col gap-3 w-full">
//       <label className="text-blackSecondary text-base pl-2">
//         {label}
//         {isRequired && !makeDisable && (
//           <span className="text-red-500 px-0.5">*</span>
//         )}
//       </label>

//       {isLoading ? (
//         <Skeleton className="w-full h-11 bg-gray-300" />
//       ) : (
//         <div>
//           <Controller
//             control={control}
//             name={name as Path<T>}
//             rules={{ required: true }}
//             defaultValue={defaultValue as PathValue<T, Path<T>> | undefined}
//             render={({ field }) => (
//               <Select
//                 {...field}
//                 onValueChange={(value) => {
//                   field.onChange(value);
//                   if (onChange) onChange(value);
//                   if (resetField) {
//                     if (resetFieldName1) resetField(resetFieldName1 as Path<T>);
//                     if (resetFieldName2) resetField(resetFieldName2 as Path<T>);
//                   }
//                 }}
//                 disabled={makeDisable}
//               >
//                 <SelectTrigger className="outline-none focus:ring-1 focus:ring-darkBlue text-blackSecondary text-sm bg-whiteSecondary py-5 pl-4 rounded-md w-full flex">
//                   <SelectValue
//                     className="text-sm"
//                     placeholder={placeholderText}
//                     defaultValue={defaultValue}
//                   />
//                 </SelectTrigger>
//                 <SelectContent className="">
//                   {data?.map((item, index: number) => (
//                     <SelectItem
//                       key={index}
//                       className="bg-whitePrimary hover:bg-lightAltBlue rounded text-sm text-blackSecondary hover:text-whitePrimary"
//                       value={item[valueKey as keyof U] as string}
//                     >
//                       {String(item[labelKey as keyof U])}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             )}
//           />
//           {errors?.[name] && (
//             <p className="text-red-500 text-sm mt-3.5 pl-3">
//               {typeof errors?.[name]?.message === "string" &&
//                 errors?.[name]?.message}
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SelectField;
