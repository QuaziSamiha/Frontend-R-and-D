import React from "react";

interface IProps {
  labelText?: string;
  inputType: string;
  fieldName: string;
  placeholderText: string;
  fieldValue: string | number | undefined;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: any;
}
const Input: React.FC<IProps> = ({
  labelText,
  inputType,
  fieldName,
  placeholderText,
  fieldValue,
  handleChange,
  errors,
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor="" className="pl-6 text-slate-700 font-bold text-base">
        {labelText}
      </label>
      <input
        type={inputType}
        name={fieldName}
        value={fieldValue}
        onChange={handleChange}
        className="px-6 py-2 outline-none rounded-md bg-stone-50 text-slate-600 text-base placeholder:text-slate-400 placeholder:text-sm shadow-sm shadow-slate-200"
        placeholder={placeholderText}
        onWheel={(event) =>
          inputType === "number" && event.currentTarget.blur()
        }
      />
      {errors?.[fieldName] && (
        <p className="pl-6 mt-1 text-sm text-red-600">{errors?.[fieldName]}</p>
      )}
    </div>
  );
};

export default Input;
