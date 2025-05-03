"use client";

import { Paperclip } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  UseFormSetValue,
} from "react-hook-form";
import {
  FaFileUpload,
  FaFilePdf,
  FaFileImage,
  FaFileAlt,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

interface SingleFileInputProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  accept?: string;
  maxSize?: number; // in bytes
  isRequired?: boolean;
  defaultValue?: File | string | null;
  control: Control<T>;
  setValue: UseFormSetValue<T>;
}

const getFileIcon = (fileType: string) => {
  if (fileType.includes("pdf"))
    return <FaFilePdf className="text-red-500" size={40} />;
  if (fileType.includes("image"))
    return <FaFileImage className="text-blue-500" size={40} />;
  return <FaFileAlt className="text-gray-500" size={40} />;
};

const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

export const SingleFile = <T extends FieldValues>({
  name,
  label,
  accept = "image/*,.pdf,.txt",
  maxSize = 4 * 1024 * 1024, // Default 4MB
  isRequired = false,
  defaultValue = null,
  control,
  setValue,
}: SingleFileInputProps<T>) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  //   const { control, setValue } = useFormContext<T>();

  useEffect(() => {
    if (defaultValue) {
      if (typeof defaultValue === "string") {
        // Handle case where default value is a URL string
        setPreview(defaultValue);
      } else if (defaultValue instanceof File) {
        // Handle case where default value is a File object
        handleFile(defaultValue);
      }
    }
  }, [defaultValue]);

  const handleFile = (newFile: File) => {
    if (newFile.size > maxSize) {
      toast.error(`File size exceeds ${formatFileSize(maxSize)} limit`);
      return;
    }

    setFile(newFile);
    setValue(name, newFile as any);

    // Create preview for images
    if (newFile.type.includes("image")) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(newFile);
    } else {
      setPreview(null);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
    setValue(name, null as any);
  };

  return (
    <div className="space-y-2 w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ fieldState: { error } }) => (
          <>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Upload Area */}
              <div className="flex-1">
                <div className="">
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Paperclip className="h-5 w-5 text-gray-500" />
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept={accept}
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          handleFile(e.target.files[0]);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Preview Area */}
              <div className="flex-1">
                {file && (
                  <div className="border border-gray-200 rounded-lg p-4 relative">
                    <button
                      type="button"
                      onClick={handleRemove}
                      className="absolute top-2 right-2 bg-red-100 rounded-full p-1 hover:bg-red-200"
                    >
                      <RxCross2 className="text-red-500" size={16} />
                    </button>

                    <div className="flex items-center space-x-4">
                      {preview ? (
                        <img
                          src={preview}
                          alt="Preview"
                          className="h-20 w-20 object-cover rounded"
                        />
                      ) : (
                        getFileIcon(file.type)
                      )}
                      <div>
                        <p className="font-medium truncate max-w-xs">
                          {file.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {formatFileSize(file.size)}
                        </p>
                        <p className="text-xs text-gray-400">{file.type}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {error && <p className="text-sm text-red-500">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};
