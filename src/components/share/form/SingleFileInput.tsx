"use client";

import { ISingleFileInput } from "@/types/form/form.types";
import { useEffect, useState } from "react";
import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { FaFileUpload } from "react-icons/fa";
import { LuFiles } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

export default function SingleFileInput<T extends FieldValues>({
  label,
  name,
  control,
  isRequired = false,
  acceptFileType = "image/*",
}: ISingleFileInput<T>) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { getValues } = useFormContext();
  const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB in bytes

  useEffect(() => {
    const formValue = getValues(name);
    if (formValue && Array.isArray(formValue)) {
      setSelectedFiles(formValue);
    }
  }, [name, getValues]);
  return (
    <div className="h-full flex flex-col gap-2 relative">
      <label className="text-blackSecondary text-base font-medium pl-2">
        {label} {isRequired && <span className="text-red-500 px-0.5">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <>
            <div className="flex max-lg:flex-col items-start gap-8 w-full xl:h-96">
              <div className="flex items-center justify-center h-full max-lg:w-full max-xl:w-[50%] w-[70%] bg-whiteTernary border border-dashed border-greyAltPrimary rounded-md">
                <div className="flex flex-col justify-center items-center gap-8 w-[60%] max-xl:py-6">
                  <FaFileUpload fontSize={50} className="text-lightAltBlue" />
                  <div className="flex flex-col">
                    <label
                      htmlFor="fileInput"
                      className="text-center text-base text-lightAltBlue underline font-medium cursor-pointer"
                    >
                      {label}
                    </label>
                    <input
                      id="fileInput"
                      hidden
                      type="file"
                      accept={acceptFileType}
                      onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          const newFile = e.target.files[0];
                          if (newFile.size > MAX_FILE_SIZE) {
                            toast.error("File size exceeds 4MB limit");
                            return; // Don't proceed with the upload
                          }
                          setSelectedFiles((prev) => [...prev, newFile]);
                          onChange([...selectedFiles, newFile]);
                        }
                      }}
                    />
                    <p className="text-center text-greyAltPrimary text-sm">
                      File must be .pdf, .jpg, .png, or .docx and not exceed
                      more than 4MB
                    </p>
                    {error && (
                      <p className="text-red-500 text-sm">{error.message}</p>
                    )}
                  </div>
                </div>
              </div>
              {/* Selected Files List */}
              <div className="h-full max-lg:w-full w-[44%] flex flex-col gap-2">
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="relative border border-greyAltPrimary rounded-md p-2 w-full overflow-y-auto overflow-x-hidden scroll-smooth scrollbar"
                  >
                    <div className="flex items-center justify-start gap-4">
                      <LuFiles size={50} className="text-lightAltBlue" />
                      <div className="flex flex-col gap-1 w-full">
                        <p className="text-blackSecondary">{file.name}</p>
                        <p className="text-sm text-greyPrimary">
                          {Math.round(file.size / 1024)} KB
                        </p>
                        <div className="w-full h-0.5 bg-gradient-to-r from-lightAltBlue to-greenPrimary rounded" />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const updatedFiles = selectedFiles.filter(
                          (_, i) => i !== index
                        );
                        setSelectedFiles(updatedFiles);
                        onChange(updatedFiles);
                      }}
                      className="absolute top-1 right-1 bg-red-100 rounded-full p-1 cursor-pointer"
                    >
                      <RxCross2 className="text-red-500 font-bold" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      />
    </div>
  );
}
