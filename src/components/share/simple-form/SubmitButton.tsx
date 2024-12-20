import React from "react";

interface IProps {
  submitTitle?: string;
  bgColor?: string;
  bgHoverColor?: string;
  textColor?: string;
}
const SubmitButton: React.FC<IProps> = ({
  submitTitle = "Submit",
  bgColor = "bg-sky-800",
  bgHoverColor = "hover:bg-sky-700",
  textColor = "text-stone-100",
}) => {
  return (
    <div className="w-full">
      <input
        type="submit"
        value={submitTitle}
        className={`font-semibold ${textColor} w-full ${bgColor} ${bgHoverColor} rounded-lg py-2 cursor-pointer`}
      />
    </div>
  );
};

export default SubmitButton;
