import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface IDialogContainer {
  buttonLabel: string;
  ButtonIcon?: IconType;
  dialogTitle?: string;
  dialogWidth?: string;
  children: ReactNode;
}

export interface ICustomDialog {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
  dialogWidth?: string;
}
