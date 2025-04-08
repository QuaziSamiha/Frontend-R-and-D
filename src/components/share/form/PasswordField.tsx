import { IPassword } from "@/types/form/form.types";
import React, { useState } from "react";
import { FieldValues, Path } from "react-hook-form";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";

export default function PasswordField<T extends FieldValues>({
  labelName,
  placeholderText,
  name,
  errors,
  register,
  isRequired,
  defaultValue,
}: IPassword<T>) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-blackSecondary text-base pl-2">
        {labelName}
        {isRequired && <span className="text-red-500 px-0.5">*</span>}
      </label>
      <div className="flex items-center gap-2 bg-whiteSecondary border border-greySecondary text-greyPrimary focus:ring-1 focus:ring-lightAltBlue py-2.5 px-3 rounded-md w-full">
        <IoLockClosed className="text-greyPrimary" fontSize={20} />
        <input
          className="outline-none font-normal placeholder:text-greyTernary text-sm w-full pr-3"
          type={`${showPassword ? "text" : "password"}`}
          placeholder={placeholderText}
          defaultValue={defaultValue}
          {...register(name as Path<T>)}
          //   disabled={disabled}
          onWheel={(e) => e.currentTarget.blur()}
        />
        {showPassword ? (
          <BsFillEyeSlashFill
            onClick={() => setShowPassword(false)}
            className="text-greyPrimary cursor-pointer"
            fontSize={20}
          />
        ) : (
          <FaEye
            onClick={() => setShowPassword(true)}
            className="text-greyPrimary cursor-pointer"
            fontSize={20}
          />
        )}
      </div>
      {errors?.[name] && (
        <p className="text-red-500 text-sm mt-1 pl-2">
          {typeof errors[name]?.message === "string" && errors[name]?.message}
        </p>
      )}
    </div>
  );
}
