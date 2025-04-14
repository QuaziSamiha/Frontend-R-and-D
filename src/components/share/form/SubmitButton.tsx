export default function SubmitButton({
  submitTitle = "Submit",
  bgColor = "bg-lightAltBlue",
  hoverBgColor = "hover:bg-darkBlue",
  buttonWidth = "w-full",
  isDisable = false,
}) {
  return (
    <div className={`${buttonWidth}`}>
      <input
        type="submit"
        disabled={isDisable}
        value={submitTitle}
        className={`w-full ${bgColor} ${hoverBgColor} rounded-md text-whitePrimary font-medium text-base py-2.5 px-6 cursor-pointer disabled:cursor-not-allowed`}
      />
    </div>
  );
}
