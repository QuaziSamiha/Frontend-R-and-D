import { IconType } from "react-icons";

export interface ISecondaryButton {
  buttonLabel: string;
  ButtonIcon?: IconType;
  onClickFunction?: () => void;
  borderColor?: string;
  hoverBorderColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}
