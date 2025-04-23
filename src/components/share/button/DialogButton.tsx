import { IDialogButton } from "@/types/common/dialogContainer";

const DialogButton = ({
  buttonLabel,
  ButtonIcon,
  borderColor = "lightAltBlue",
  hoverBorderColor = "lightAltBlue",
  backgroundColor = "lightAltBlue",
  hoverBackgroundColor = "white",
  textColor = "white",
  hoverTextColor = "lightAltBlue",
}: IDialogButton) => {
  return (
    <button
      className={`flex items-center px-6 py-2.5 border border-${borderColor} bg-${backgroundColor} text-${textColor} rounded-md hover:bg-${hoverBackgroundColor} hover:text-${hoverTextColor} hover:border hover:border-${hoverBorderColor} cursor-pointer`}
    >
      {ButtonIcon && <ButtonIcon size={24} />}
      {buttonLabel}
    </button>
  );
};

export default DialogButton;
