"use client";

import type { ITextEditor } from "@/types/form/form.types";
import { useEffect } from "react";
import {
  type FieldValues,
  type Path,
  type PathValue,
  useController,
} from "react-hook-form";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import "./text-editor.css";

const modules = {
  toolbar: [
    // [{ size: [] }],
    ["bold", "underline"],
    // [{ list: "ordered" }, { list: "bullet" }],
  ],
};

const formats = ["size", "bold", "underline", "list"];

export function TextEditor2<T extends FieldValues>({
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
  const { field, fieldState } = useController<T>({
    name: name as Path<T>,
    control,
    rules: isRequired ? { required: requiredMessage } : {},
    defaultValue: defaultValue as PathValue<T, Path<T>>,
  });

  useEffect(() => {
    if (field.value !== undefined) {
      field.onChange(field.value);
    }
  }, [field, field.value]);

  const handleChange = (content: string) => {
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
      <div className="quill-container">
        <ReactQuill
          theme="snow"
          value={field.value || ""}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          placeholder={placeholderText}
          className="text-editor"
        />
      </div>
      {fieldState?.error && !disabled && (
        <p className="text-red-500 text-sm pl-2 -mt-1">
          {fieldState?.error?.message}
        </p>
      )}
    </div>
  );
}
