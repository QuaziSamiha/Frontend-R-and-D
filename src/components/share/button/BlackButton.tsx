import { IconType } from "react-icons";

interface IButton {
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

export default function BlackButton({
  buttonLabel,
  ButtonIcon,
  onClickFunction,
  borderColor = "",
  hoverBorderColor = "",
  backgroundColor = "black",
  hoverBackgroundColor = "",
  textColor = "white",
  hoverTextColor = "",
}: IButton) {
  return (
    <button
      onClick={onClickFunction}
      className={`flex items-center gap-2 font-medium px-6 py-2.5 border border-${borderColor} bg-${backgroundColor} text-${textColor} rounded-md ${hoverBackgroundColor} ${hoverTextColor} hover:border hover:border-${hoverBorderColor} cursor-pointer`}
    >
      {ButtonIcon && <ButtonIcon size={20} />}
      {buttonLabel}
    </button>
  );
}
