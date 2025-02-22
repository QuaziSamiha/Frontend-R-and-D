import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
  UseFormResetField,
} from "react-hook-form";
import { ISelectOption } from "./form";

// ======================== REGISTRATION INFO ====================
export interface IRegistrationForm<T extends FieldValues> {
  control: Control<T>;
  register: UseFormRegister<T>;
  resetField?: UseFormResetField<T>;
  errors?: FieldErrors<T>;
  isDisable?: boolean;
}

// ======= BUTTON CONFIGURATION TYPE DEFINITION ===========
export interface IButton {
  rowSpan?: string;
  colSpan?: string;
  buttonElement: string | React.ReactNode;
  type?: string;
  department: ISelectOption | string;
}

export interface IButtonInfo {
  id: number;
  data: IButton;
  color?: string;
}

// ============== RECEIPT CONFIGURATION TYPE DEFINITION =============
export interface ILines {
  line: string;
}

export interface IReceiptInfo {
  header: string;
  subHeader: ILines[];
  footer: ILines[];
}

export interface IReceiptForm<T extends FieldValues> {
  control: Control<T>;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  getValues: UseFormGetValues<T>;
  addReceiptSection?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
