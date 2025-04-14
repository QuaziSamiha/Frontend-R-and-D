import { ITextEditor } from "@/types/form/form.types";
import { useState } from "react";
import { FieldValues, Path, PathValue, useController } from "react-hook-form";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
// import "./style.css";

const modules = {
  toolbar: [
    [{ size: [] }],
    ["bold", "underline"],
    // [{ list: "ordered" }, { list: "bullet" }],
  ],
};

const formats = ["size", "bold", "underline", "list"];

export default function TextEditor<T extends FieldValues>({
  labelName,
  placeholderText,
  name,
  control,
  trigger,
  isRequired,
  disabled,
  defaultValue,
  requiredMessage = "This field is required.",
}: ITextEditor<T>) {
  const [value, setValue] = useState<string>(defaultValue || "");

  const { field, fieldState } = useController<T>({
    name: name as Path<T>,
    control,
    rules: isRequired ? { required: requiredMessage } : {},
    defaultValue: defaultValue as PathValue<T, Path<T>>,
  });

  const handleChange = (content: string) => {
    setValue(content);
    field.onChange(content);
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
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder={placeholderText}
        className="overflow-hidden break-words"
        // className="border border-red-500 rounded-md bg-whiteSecondary resize-none text-editor"
      />
      {fieldState?.error && !disabled && (
        <p className="text-red-500 text-sm pl-2 -mt-1">
          {fieldState?.error?.message}
        </p>
      )}
    </div>
  );
}
