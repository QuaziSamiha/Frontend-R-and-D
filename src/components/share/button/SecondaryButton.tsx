import { ISecondaryButton } from "@/types/common/button";

const SecondaryButton = ({
  buttonLabel,
  ButtonIcon,
  onClickFunction,
  borderColor = "lightAltBlue",
  hoverBorderColor = "lightAltBlue",
  backgroundColor = "lightAltBlue",
  hoverBackgroundColor = "white",
  textColor = "white",
  hoverTextColor = "lightAltBlue",
}: ISecondaryButton) => {
  return (
    <button
      onClick={onClickFunction}
      className={`flex items-center gap-1 font-medium px-6 py-2.5 border border-${borderColor} bg-${backgroundColor} text-${textColor} rounded-md hover:bg-${hoverBackgroundColor} hover:text-${hoverTextColor} hover:border hover:border-${hoverBorderColor} cursor-pointer`}
    >
      {ButtonIcon && <ButtonIcon size={24} />}
      {buttonLabel}
    </button>
  );
};

export default SecondaryButton;
