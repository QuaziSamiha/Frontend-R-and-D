"use client";

import { ISingleFileInput } from "@/types/form/form.types";
import { useState } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { FaFileUpload } from "react-icons/fa";
import { LuFiles } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

export default function SingleFileInput<T extends FieldValues>({
  label,
  name,
  control,
  isRequired = false,
  acceptFileType = "image/*",
}: ISingleFileInput<T>) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

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
            <div className="flex items-start gap-8 w-full h-96">
              <div className="flex items-center justify-center h-full w-[70%] bg-whiteTernary border border-dashed border-greyAltPrimary rounded-md">
                <div className="flex flex-col justify-center items-center gap-8 w-[60%]">
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
              <div className="h-full w-[44%] flex flex-col gap-2">
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
                      className="absolute -top-3 -right-3 bg-red-100 rounded-full p-1 cursor-pointer"
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

// "use client";

// import { useState } from "react";
// import { Control, Controller, FieldValues, Path } from "react-hook-form";
// import { FaFileUpload } from "react-icons/fa";
// import { LuFiles } from "react-icons/lu";
// import { RxCross2 } from "react-icons/rx";

// interface ISingleFileInput<T extends FieldValues> {
//   label: string;
//   name: Path<T>;
//   control: Control<T>;
//   isMultiple?: boolean;
//   isRequired?: boolean;
//   acceptFileType?: string;
//   isLoading?: boolean;
//   defaultValue?: string;
// }

// export default function SingleFileInput<T extends FieldValues>({
//   label,
//   name,
//   control,
//   isMultiple = false,
//   isRequired = false,
//   acceptFileType = "image/*",
//   isLoading = false,
//   defaultValue,
// }: ISingleFileInput<T>) {
//   // const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [selectedFiles, setSelectedFiles] = useState<File[]>();

//   console.log(isMultiple, isLoading, defaultValue);
//   return (
//     <div className="h-full flex flex-col gap-2 relative">
//       <label className="text-blackSecondary text-base font-medium pl-2">
//         {label} {isRequired && <span className="text-red-500 px-0.5">*</span>}
//       </label>
//       <Controller
//         name={name}
//         control={control}
//         render={({ field: { onChange }, fieldState: { error } }) => {
//           const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//             const files = e.target.files ? Array.from(e.target.files) : [];
//             if (files.length > 0) {
//               const updatedFiles = isMultiple
//                 ? [...selectedFiles, ...files]
//                 : [files[0]];

//               setSelectedFiles(updatedFiles);
//               onChange(updatedFiles);
//             }
//           };

//           const handleRemoveFile = (index: number) => {
//             const updatedFiles = selectedFiles?.filter((_, i) => i !== index);
//             setSelectedFiles(updatedFiles);
//             onChange(updatedFiles);
//           };
//           return (
//             <div className="flex items-start gap-8 w-full h-96">
//               <div className="flex items-center justify-center h-full w-[70%] bg-whiteTernary border border-dashed border-greyAltPrimary rounded-md">
//                 <div className="flex flex-col justify-center items-center gap-8 w-[60%]">
//                   <div className="flex flex-col items-center justify-center">
//                     <FaFileUpload fontSize={50} className="text-lightAltBlue" />
//                     <div className="flex flex-col">
//                       <label
//                         htmlFor="fileInput"
//                         className="text-link text-base text-lightAltBlue underline font-medium cursor-pointer"
//                       >
//                         Browse file
//                       </label>

//                       <input
//                         id="fileInput"
//                         hidden
//                         type="file"
//                         accept={acceptFileType}
//                         multiple={isMultiple}
//                         onChange={handleFileChange}
//                       />
//                       <p className="text-center text-greyAltPrimary text-sm">
//                         File must be .pdf, .jpg, .png or .docx and not <br />{" "}
//                         exceed more than 4MB
//                       </p>
//                       {error && (
//                         <p className="text-red-500 text-sm">{error.message}</p>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {selectedFiles?.length && (
//                 <div className="h-full w-[40%]">
//                   <div>
//                     {selectedFiles.map((file, index) => (
//                       <div className="relative border border-greyAltPrimary rounded-md p-2 w-full">
//                         <div className="flex items-center justify-start gap-4">
//                           <LuFiles size={50} className="text-lightAltBlue" />
//                           <div className="flex flex-col gap-1 w-full">
//                             <p className="text-blackSecondary">{file.name}</p>
//                             <p className="text-sm text-greyPrimary">
//                               {Math.round(file.size / 1024)} KB
//                             </p>
//                             <div className="w-full h-0.5 bg-gradient-to-r from-lightAltBlue to-greenPrimary rounded" />
//                           </div>
//                         </div>
//                         <button
//                           type="button"
//                           onClick={() => handleRemoveFile(index)}
//                           className="absolute -top-3 -right-3 bg-red-100 rounded-full p-1 cursor-pointer"
//                         >
//                           <RxCross2 className="text-red-500 font-bold" />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         }}
//       />
//     </div>
//   );
// }

// // "use client";

// // import { ChangeEvent, useState } from "react";
// // import { RxCross2 } from "react-icons/rx";
// // import { ISingleFileInput } from "@/types/form/form.types";
// // import { LuFiles } from "react-icons/lu";
// // import { FaFileUpload } from "react-icons/fa";

// // export default function SingleFileInput({
// //   labelName,
// //   selectedFile,
// //   setSelectedFile,
// //   defaultValue,
// //   isLoading,
// //   isRequired = false,
// //   acceptFileType = "image/*",
// // }: ISingleFileInput) {
// //   const [, setFileSource] = useState<string | null>(defaultValue || null);

// //   const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
// //     if (e.target.files && e.target.files.length > 0) {
// //       const file = e.target.files[0];
// //       setSelectedFile(file);

// //       const reader = new FileReader();
// //       reader.readAsDataURL(file);
// //       reader.onload = () => setFileSource(reader.result as string);
// //     }
// //   };

// //   const removeSelectedFile = () => {
// //     setSelectedFile(null);
// //     setFileSource(null);
// //   };

// //   console.log(selectedFile);
// //   if (selectedFile instanceof File) {
// //     // console.log(selectedFile.name);
// //     console.log(Math.round(selectedFile.size / 1024));
// //   }
// //   return (
// //     <div className="h-full flex flex-col gap-2 relative">
// //       <label className="text-blackSecondary text-base font-medium pl-2">
// //         {labelName}{" "}
// //         {isRequired && <span className="text-red-500 px-0.5">*</span>}
// //       </label>
// //       <div className="flex items-start gap-8 w-full h-96">
// //         <div className="flex items-center justify-center h-full w-full bg-whiteTernary border border-dashed border-greyAltPrimary rounded-md">
// //           <div className="flex flex-col justify-center items-center gap-8 w-[60%]">
// //             <div className="flex flex-col items-center justify-center">
// //               <FaFileUpload fontSize={50} className="text-lightAltBlue" />

// //               <div className="text-center text-slate-700 text-sm">
// //                 <label
// //                   htmlFor="fileInput"
// //                   className="text-link text-base text-lightAltBlue underline font-medium cursor-pointer"
// //                 >
// //                   Browse file
// //                 </label>
// //                 <input
// //                   id="fileInput"
// //                   hidden
// //                   type="file"
// //                   accept={acceptFileType}
// //                   onChange={selectFile}
// //                 />
// //               </div>
// //             </div>
// //             <p className="text-center text-greyAltPrimary text-sm">
// //               File must be .pdf, .jpg, .png or .docx and not <br /> exceed more
// //               than 4MB
// //             </p>
// //           </div>
// //         </div>

// //         <div className="h-full w-[40%]">
// //           <div>
// //             {" "}
// //             {isLoading ? (
// //               <div>Loading...</div>
// //             ) : (
// //               <>
// //                 {selectedFile instanceof File && (
// //                   <div className="relative border border-greyAltPrimary rounded-md p-2 w-full">
// //                     <div className="flex items-center justify-start gap-4">
// //                       <LuFiles size={50} className="text-lightAltBlue" />
// //                       <div className="flex flex-col gap-1 w-full">
// //                         <p>{selectedFile.name}</p>
// //                         <p className="text-sm text-greyPrimary">
// //                           {Math.round(selectedFile?.size / 1024)} KB
// //                         </p>
// //                         <div className="w-full h-0.5 bg-linear-to-r from-lightAltBlue to-greenPrimary rounded" />
// //                       </div>
// //                     </div>
// //                     <button
// //                       onClick={removeSelectedFile}
// //                       className="absolute -top-3 -right-3 bg-red-100 rounded-full p-1 cursor-pointer"
// //                     >
// //                       <RxCross2 className="text-red-500 font-bold" />
// //                     </button>
// //                   </div>
// //                 )}
// //                 {/* {selectedFile instanceof File && (
// //                   <div className="relative border border-greyAltPrimary rounded-md p-2 w-full">
// //                     <div className="flex items-center justify-start gap-4">
// //                       <LuFiles size={50} className="text-lightAltBlue" />
// //                       <div className="flex flex-col gap-1 w-full">
// //                         <p>{selectedFile.name}</p>
// //                         <p className="text-sm text-greyPrimary">
// //                           {Math.round(selectedFile?.size / 1024)} KB
// //                         </p>
// //                         <div className="w-full h-0.5 bg-linear-to-r from-lightAltBlue to-greenPrimary rounded" />
// //                       </div>
// //                     </div>
// //                     <button
// //                       onClick={removeSelectedFile}
// //                       className="absolute -top-3 -right-3 bg-red-100 rounded-full p-1 cursor-pointer"
// //                     >
// //                       <RxCross2 className="text-red-500 font-bold" />
// //                     </button>
// //                   </div>
// //                 )} */}
// //               </>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
