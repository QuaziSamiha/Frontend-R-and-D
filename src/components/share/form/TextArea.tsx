
import { Textarea } from "@/components/ui/textarea";
import { ITextArea } from "@/types/form/form.types";
import { FieldValues, Path } from "react-hook-form";

const TextArea = <T extends FieldValues>({
  labelName,
  placeholderText,
  name,
  register,
  errors,
  isRequired,
  disabled,
  defaultValue, 
}: ITextArea<T>) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-blackSecondary text-base pl-2">
        {labelName}
        {isRequired && !disabled && (
          <span className="text-red-500 px-0.5">*</span>
        )}{" "}
      </label>
      <Textarea
        id={String(name)}
        placeholder={placeholderText}
        disabled={disabled}
        defaultValue={defaultValue}
        {...register(name as Path<T>)}
        rows={6}
        className={`w-full border rounded-md p-2 bg-whiteSecondary resize-none`}
      />
      {errors?.[name] && !disabled && (
        <p className="text-red-500 text-sm mt-1 pl-3">
          {typeof errors[name]?.message === "string" && errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default TextArea;
