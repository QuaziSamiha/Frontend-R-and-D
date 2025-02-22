import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { IconType } from "react-icons/lib";

export interface IInput<
  T extends FieldValues,
  Type extends "text" | "number" | "email"
> {
  labelName?: string;
  inputType?: Type;
  IconComponent?: IconType | undefined;
  placeholderText: string;
  name: keyof T;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  disabled?: boolean;
  isRequired?: boolean;
  defaultValue?: Type extends "number" ? number : string;
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

export interface ISelectOption {
  id: number;
  label: string;
  value: string;
}

export interface ISelectField<T extends FieldValues> {
  label?: string;
  placeholderText?: string;
  name: keyof T;
  control?: Control<T>;
  errors?: FieldErrors<T>;
  data: ISelectOption[];
  labelKey: "label";
  valueKey: "value";
  makeDisable?: boolean;
  isLoading?: boolean;
  onChange?: (value: unknown) => void;
  defaultValue?: string;
  isRequired?: boolean;
}

export interface ITextArea<T extends FieldValues> {
  labelName?: string;
  inputType?: string;
  placeholderText: string;
  rowNo?: number;
  name: keyof T;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  disabled?: boolean;
  isRequired?: boolean;
  defaultValue?: string;
}

export interface ISingleImageInput {
  labelName: string;
  selectedImage: File | null; // Single image file
  setSelectedImage: (image: File | null) => void;
  isRequired?: boolean;
}

export interface IDateInput<T extends FieldValues> {
  labelName?: string;
  placeholderText?: string;
  name: string;
  errors: FieldErrors<T>;
  control: Control<T>;
  setValue: UseFormSetValue<T>;
  isRequired?: boolean;
  dateFormat?: string;
  disabled?: boolean;
  defaultValue?: string;
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

export interface IActiveStatusButton<T extends FieldValues> {
  labelName: string;
  name: keyof T;
  defaultStatus: "active" | "inactive";
  control: Control<T>;
}

export interface ISubmitButton {
  submitTitle: string;
  bgColor?: string;
  hoverBgColor?: string;
}
