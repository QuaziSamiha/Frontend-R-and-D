import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface IDialogContainer {
  buttonLabel: string;
  ButtonIcon?: IconType;
  dialogTitle?: string;
  children: ReactNode;
}

export interface IDialogButton {
  buttonLabel: string;
  ButtonIcon?: IconType;
  borderColor?: string;
  hoverBorderColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}
