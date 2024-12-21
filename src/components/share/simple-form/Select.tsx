import React from "react";

interface IOptions {
  name: string;
  value: string;
}

interface IProps {
  labelText?: string;
  fieldName: string;
  placeholderText: string;
  fieldValue: string | undefined;
  options: IOptions[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  errors: any;
}

const Select: React.FC<IProps> = ({
  labelText,
  fieldName,
  placeholderText,
  fieldValue,
  options,
  handleChange,
  errors,
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor="" className="pl-6 text-slate-700 font-bold text-base">
        {labelText}
      </label>
      <select
        name={fieldName}
        value={fieldValue}
        onChange={handleChange}
        className="px-6 py-2 outline-none rounded-md bg-stone-50 text-slate-600 text-base placeholder:text-slate-400 placeholder:text-sm shadow-sm shadow-slate-200"
      >
        <option value="" disabled>
          {placeholderText}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      {errors?.[fieldName] && (
        <p className="pl-6 mt-1 text-sm text-red-600">{errors?.[fieldName]}</p>
      )}
    </div>
  );
};

export default Select;
