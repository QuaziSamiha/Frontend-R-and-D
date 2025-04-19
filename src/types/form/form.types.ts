/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  UseFormRegister,
  Control,
  UseFormResetField,
  FieldValues,
  FieldErrors,
  UseFormSetValue,
  Path,
  UseFormTrigger,
} from "react-hook-form";
import { IconType } from "react-icons/lib";

export interface FieldError {
  message?: string;
}

export interface FormErrors {
  [key: string]: FieldError | undefined;
}

export interface IInput<
  T extends FieldValues,
  Type extends "text" | "number" | "email"
> {
  labelName?: string;
  inputType?: Type;
  IconComponent?: IconType | undefined;
  placeholderText: string;
  name: Path<T>;
  control?: Control<T>;
  trigger?: UseFormTrigger<T>;
  disabled?: boolean;
  isRequired?: boolean;
  defaultValue?: Type extends "number" ? number : string;
  requiredMessage?: string;
}

export interface IPassword<T extends FieldValues> {
  labelName?: string;
  placeholderText: string;
  name: keyof T;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  // disabled?: boolean;
  isRequired?: boolean;
  defaultValue?: string;
}

// export interface FieldInfo {
//     inputType: string;
//     placeholderText: string;
//     name: string;
//     errors: FormErrors;
//     labelName: string;
//     register: UseFormRegister<any>;
//     disabled?: boolean;
//     isRequired?: boolean;
//     defaultValue?: string;
// }

export interface IOptions {
  valueId: string;
  valueLabel: string;
}

export interface IRadioFieldProps {
  labelName?: string;
  inputName: string;
  errorMessage?: string;
  register: UseFormRegister<any>;
  disabled?: boolean;
  isRequired?: boolean;
  defaultValue?: string;
  data: IOptions[];
  gridCols?: number;
}

export interface SelectFieldProps<T> {
  control: Control<any>;
  resetField: UseFormResetField<any>;
  name: string;
  data: T[];
  label: string;
  placeholder: string;
  error?: string;
  labelKey: keyof T;
  valueKey: keyof T;
  resetFieldName1: string;
  resetFieldName2: string;
  disabledValue?: string | number;
  makeDisable?: boolean;
  isLoading: boolean;
  onChange?: (value: string) => void;
  defaultValue?: T[keyof T];
}

export interface ICheckboxLabel {
  id: string;
  label: string;
}

export interface ICheckboxInput<T extends FieldValues> {
  label: string;
  name: keyof T;
  items: ReadonlyArray<ICheckboxLabel>;
  control: Control<T>;
  errors?: FieldErrors<T>;
  isRequired?: boolean;
  defaultValue?: string[];
}

export interface IRadioOption {
  valueId: string;
  valueLabel: string;
}

export interface IRadioButton<T extends FieldValues> {
  label: string;
  name: keyof T;
  data: IRadioOption[];
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  disabled?: boolean;
  isRequired?: boolean;
  defaultValue?: string;
  gridCols?: number;
}

export interface IDateInput<T extends FieldValues> {
  labelName?: string;
  placeholderText?: string;
  name: string;
  errors: FieldErrors<T>;
  control: Control<T>;
  setValue?: UseFormSetValue<T>;
  trigger: UseFormTrigger<T>;
  isRequired?: boolean;
  dateFormat?: string;
  disabled?: boolean;
  defaultValue?: string;
  requiredMessage?: string;
}

export interface ITextEditor<T extends FieldValues> {
  labelName?: string;
  inputType?: string;
  placeholderText: string;
  name: Path<T>;
  control: Control<T>;
  trigger?: UseFormTrigger<T>;
  disabled?: boolean;
  isRequired?: boolean;
  defaultValue?: string;
  requiredMessage?: string;
}
export interface ITextArea<T extends FieldValues> {
  labelName?: string;
  inputType?: string;
  placeholderText: string;
  rowNo?: number;
  name: Path<T>;
  control: Control<T>;
  trigger?: UseFormTrigger<T>;
  disabled?: boolean;
  isRequired?: boolean;
  defaultValue?: string;
  requiredMessage?: string;
}

// export interface ITextArea<T extends FieldValues> {
//   labelName?: string;
//   inputType?: string;
//   placeholderText: string;
//   rowNo?: number;
//   name: keyof T;
//   register: UseFormRegister<T>;
//   errors?: FieldErrors<T>;
//   disabled?: boolean;
//   isRequired?: boolean;
//   defaultValue?: string;
// }

export interface ISelectOption {
  id: number | string;
  label: string;
  value: string;
}

export interface ISelectField<T extends FieldValues> {
  label?: string;
  placeholderText?: string;
  name: Path<T>;
  // name: keyof T;
  control?: Control<T>;
  errors?: FieldErrors<T>;
  trigger: UseFormTrigger<T>;
  data?: ISelectOption[];
  labelKey: "label";
  valueKey: "value";
  makeDisable?: boolean;
  isLoading?: boolean;
  onChange?: (value: unknown) => void;
  defaultValue?: string;
  isRequired?: boolean;
  requiredMessage?: string;
}

// export interface ISingleFileInput {
//   labelName?: string;
//   selectedFile: File | string | null; // Single image file
//   setSelectedFile: (file: File | null) => void;
//   defaultValue?: string | null;
//   isLoading?: boolean;
//   isRequired?: boolean;
//   acceptFileType?: string;
// }

export interface IQuantityField<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  isRequired?: boolean;
}

export interface ISingleFileInput<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  isRequired?: boolean;
  acceptFileType?: string;
}
