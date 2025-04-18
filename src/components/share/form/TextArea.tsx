import { Textarea } from "@/components/ui/textarea";
import { ITextArea } from "@/types/form/form.types";
import { FieldValues, Path, PathValue, useController } from "react-hook-form";

const TextArea = <T extends FieldValues>({
  labelName,
  placeholderText,
  name,
  control,
  trigger,
  rowNo = 3,
  isRequired,
  disabled,
  defaultValue,
  requiredMessage = "This field is required.",
}: ITextArea<T>) => {
  const { field, fieldState } = useController<T>({
    name: name as Path<T>,
    control,
    rules: isRequired ? { required: requiredMessage } : {},
    defaultValue: defaultValue as PathValue<T, Path<T>>,
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    field.onChange(e.target.value);
    if (trigger) {
      trigger(field.name);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-blackSecondary font-medium text-base pl-2">
        {labelName}
        {isRequired && !disabled && (
          <span className="text-red-500 px-0.5">*</span>
        )}{" "}
      </label>

      <Textarea
        id={String(name)}
        placeholder={placeholderText}
        disabled={disabled}
        name={field.name}
        value={field.value ?? ""}
        onChange={handleChange}
        rows={rowNo}
        className={`w-full border rounded-md p-2 bg-whiteSecondary resize-none`}
      />
      {fieldState?.error && !disabled && (
        <p className="text-red-500 text-sm pl-2 -mt-1">
          {fieldState?.error?.message}
        </p>
      )}
    </div>
  );
};

export default TextArea;
