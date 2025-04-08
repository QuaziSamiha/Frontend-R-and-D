"use client";

import { useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { FaFileUpload } from "react-icons/fa";
import { LuFiles } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

interface ISingleFileInput<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  isMultiple?: boolean;
  isRequired?: boolean;
  acceptFileType?: string;
  isLoading?: boolean;
  defaultValue?: string;
}

export default function SingleFileInput<T extends FieldValues>({
  label,
  name,
  control,
  isMultiple = false,
  isRequired = false,
  acceptFileType = "image/*",
  isLoading = false,
  defaultValue,
}: ISingleFileInput<T>) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  console.log(isMultiple, isLoading, defaultValue);
  return (
    <div className="h-full flex flex-col gap-2 relative">
      <label className="text-blackSecondary text-base font-medium pl-2">
        {label} {isRequired && <span className="text-red-500 px-0.5">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange }, fieldState: { error } }) => {
          return (
            <div className="flex items-start gap-8 w-full h-96">
              <div className="flex items-center justify-center h-full w-[70%] bg-whiteTernary border border-dashed border-greyAltPrimary rounded-md">
                <div className="flex flex-col justify-center items-center gap-8 w-[60%]">
                  <div className="flex flex-col items-center justify-center">
                    <FaFileUpload fontSize={50} className="text-lightAltBlue" />
                    <div className="flex flex-col">
                      <label
                        htmlFor="fileInput"
                        className="text-link text-base text-lightAltBlue underline font-medium cursor-pointer"
                      >
                        Browse file
                      </label>

                      <input
                        id="fileInput"
                        hidden
                        type="file"
                        accept={acceptFileType}
                        onChange={(e) => {
                          const files = e.target.files
                            ? Array.from(e.target.files)
                            : [];
                          const file = files[0];
                          if (file) {
                            setSelectedFile(file);
                            onChange(file);
                          }
                          onChange(files);
                        }}
                      />
                      <p className="text-center text-greyAltPrimary text-sm">
                        File must be .pdf, .jpg, .png or .docx and not <br />{" "}
                        exceed more than 4MB
                      </p>
                      {error && (
                        <p className="text-red-500 text-sm">{error.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {selectedFile && (
                <div className="h-full w-[40%]">
                  <div className="relative border border-greyAltPrimary rounded-md p-2 w-full">
                    <div className="flex items-center justify-start gap-4">
                      <LuFiles size={50} className="text-lightAltBlue" />
                      <div className="flex flex-col gap-1 w-full">
                        <p className="text-blackSecondary">
                          {selectedFile.name}
                        </p>
                        <p className="text-sm text-greyPrimary">
                          {Math.round(selectedFile.size / 1024)} KB
                        </p>
                        <div className="w-full h-0.5 bg-gradient-to-r from-lightAltBlue to-greenPrimary rounded" />
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedFile(null);
                        onChange(null);
                      }}
                      className="absolute -top-3 -right-3 bg-red-100 rounded-full p-1 cursor-pointer"
                    >
                      <RxCross2 className="text-red-500 font-bold" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
    </div>
  );
}
