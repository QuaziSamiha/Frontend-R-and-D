export default function SubmitButton({
  submitTitle = "Submit",
  bgColor = "bg-lightAltBlue",
  hoverBgColor = "hover:bg-darkBlue",
  buttonWidth = "w-full",
}) {
  return (
    <div className={`${buttonWidth}`}>
      <input
        type="submit"
        value={submitTitle}
        className={`w-full ${bgColor} ${hoverBgColor} rounded-md text-whitePrimary font-medium text-base py-2.5 px-6 cursor-pointer`}
      />
    </div>
  );
}
