import { SelectField } from "@/components/share/form";
import InputField from "@/components/share/form/InputField";
import QuantityField from "@/components/share/form/QuantityField";
import { ISelectOption } from "@/types/form/form.types";
import { useFormContext } from "react-hook-form";

interface IProps {
  index: number;
}


// ========== ALL MEASUREMENT UNITS ===========
const allUOM: ISelectOption[] = [
  {
    id: 1,
    value: "piece",
    label: "Piece",
  },
  {
    id: 2,
    value: "kg",
    label: "Kilogram",
  },
  {
    id: 3,
    value: "litre",
    label: "Litre",
  },
  {
    id: 4,
    value: "box",
    label: "Box",
  },
  {
    id: 5,
    value: "set",
    label: "Set",
  },
  {
    id: 6,
    value: "unit",
    label: "Unit",
  },
];

export default function ItemForm({ index }: IProps) {
  // ================= REACT HOOK FORM METHODS =============
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  
  return (
    <div className="grid grid-cols-3 gap-6 w-[600px]">
      <InputField
        labelName="Name"
        placeholderText="Enter item name"
        name={`items.${index}.itemName`}
        register={register}
        // errors={errors?.items?.[index]?.itemName as string}
        isRequired
        requiredMessage="Item name is required"
      />
      <InputField
        labelName="Item ID"
        placeholderText="Enter item ID"
        name={`items.${index}.itemId`}
        register={register}
        errors={errors}
      />
      <InputField
        labelName="Item Description"
        placeholderText="Enter item description"
        name={`items.${index}.itemDescription`}
        register={register}
        errors={errors}
      />
      <SelectField
        label="UOM"
        placeholderText="Select item's UOM"
        name={`items.${index}.uom`}
        control={control}
        data={allUOM}
        labelKey="label"
        valueKey="value"
        errors={errors}
        isLoading={false}
        isRequired
        requiredMessage="UOM is required"
      />
      <QuantityField
        label="Quantity"
        {...register(`items.${index}.quantity`)}
        control={control}
        isRequired
      />
      <InputField
        labelName="Remark"
        placeholderText="Write remark"
        name={`items.${index}.remark`}
        register={register}
        errors={errors}
      />
    </div>
  );
}

// "use client";

// import { useFieldArray, useFormContext } from "react-hook-form";
// import ItemView from "./ItemView";
// import InputField from "@/components/share/form/InputField";
// import { SelectField } from "@/components/share/form";
// import QuantityField from "@/components/share/form/QuantityField";
// import { MdDeleteForever } from "react-icons/md";
// import { FaRegEdit } from "react-icons/fa";
// import { GoPlus } from "react-icons/go";
// import { ISelectOption } from "@/types/form/form.types";
// import { useState } from "react";

// interface IItem {
//   itemName?: string;
//   itemId?: string;
//   itemDescription?: string;
//   uom?: string; // UNIT OF MEASUREMENT
//   remark?: string;
//   quantity?: number;
// }

// // ========== ALL MEASUREMENT UNITS ===========
// const allUOM: ISelectOption[] = [
//   {
//     id: 1,
//     value: "piece",
//     label: "Piece",
//   },
//   {
//     id: 2,
//     value: "kg",
//     label: "Kilogram",
//   },
//   {
//     id: 3,
//     value: "litre",
//     label: "Litre",
//   },
//   {
//     id: 4,
//     value: "box",
//     label: "Box",
//   },
//   {
//     id: 5,
//     value: "set",
//     label: "Set",
//   },
//   {
//     id: 6,
//     value: "unit",
//     label: "Unit",
//   },
// ];

// export default function ItemForm() {
//   const [completedItemIndexes, setCompletedItemIndexes] = useState<number[]>(
//     []
//   );

//   const {
//     register,
//     control,
//     trigger,
//     formState: { errors },
//   } = useFormContext();
//   const { fields, append, remove, update } = useFieldArray({
//     control,
//     name: "items",
//   });

//   const handleAddItem = async () => {
//     const lastIndex = fields.length - 1;
//     const isValid = await trigger([
//       `items.${lastIndex}.itemName`,
//       `items.${lastIndex}.uom`,
//       // `items.${lastIndex}.quantity`,
//     ]);

//     if (isValid) {
//       setCompletedItemIndexes((prev) => [...prev, lastIndex]);
//       append({ quantity: 1 });
//     }
//   };

//   const handleEditItem = (index: number) => {
//     // () => update(index, fields[index])
//   };
//   return (
//     <div>
//       <div className="flex flex-col gap-6">
//         <p className="text-xl font-medium text-blackSecondary">Item</p>
//         {fields.map((field, index) => {
//           const isReadOnly = completedItemIndexes.includes(index);
//           return (
//             <div key={index} className="flex items-start gap-4 w-full">
//               <div
//                 key={field.id}
//                 className="border border-greySecondary px-10 py-8 rounded-md"
//               >
//                 {isReadOnly || index !== fields.length - 1 ? (
//                   <ItemView
//                     itemName={(field as IItem).itemName}
//                     itemId={(field as IItem).itemId}
//                     itemDescription={(field as IItem).itemDescription}
//                     uom={(field as IItem).uom}
//                     quantity={(field as IItem).quantity}
//                     remark={(field as IItem).remark}
//                   />
//                 ) : (
//                   <div className="grid grid-cols-3 gap-6 w-[600px]">
//                     <InputField
//                       labelName="Name"
//                       placeholderText="Enter item name"
//                       name={`items.${index}.itemName`}
//                       register={register}
//                       // errors={errors?.items?.[index]?.itemName as string}
//                       isRequired
//                       requiredMessage="Item name is required"
//                     />
//                     <InputField
//                       labelName="Item ID"
//                       placeholderText="Enter item ID"
//                       name={`items.${index}.itemId`}
//                       register={register}
//                       errors={errors}
//                     />
//                     <InputField
//                       labelName="Item Description"
//                       placeholderText="Enter item description"
//                       name={`items.${index}.itemDescription`}
//                       register={register}
//                       errors={errors}
//                     />
//                     <SelectField
//                       label="UOM"
//                       placeholderText="Select item's UOM"
//                       name={`items.${index}.uom`}
//                       control={control}
//                       data={allUOM}
//                       labelKey="label"
//                       valueKey="value"
//                       errors={errors}
//                       isLoading={false}
//                       isRequired
//                       requiredMessage="UOM is required"
//                     />
//                     <QuantityField
//                       label="Quantity"
//                       {...register(`items.${index}.quantity`)}
//                       control={control}
//                       isRequired
//                     />
//                     <InputField
//                       labelName="Remark"
//                       placeholderText="Write remark"
//                       name={`items.${index}.remark`}
//                       register={register}
//                       errors={errors}
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* <div className="flex flex-col gap-2"> */}
//               {isReadOnly && (
//                 <div className="flex flex-col gap-2">
//                   <div className="group">
//                     <button
//                       type="button"
//                       onClick={() => remove(index)}
//                       disabled={fields.length === 1}
//                       className={`border border-greyAltPrimary hover:border-red-500 hover:bg-red-500 p-1 rounded-md cursor-pointer disabled:cursor-not-allowed`}
//                     >
//                       <MdDeleteForever
//                         size={30}
//                         className="text-greyPrimary group-hover:text-white"
//                       />
//                     </button>
//                   </div>
//                   <div className="group">
//                     <button
//                       type="button"
//                       onClick={() => handleEditItem(index)}
//                       // onClick={() => update(index, fields[index])}
//                       disabled={fields.length === 1}
//                       className="border border-greyAltPrimary hover:border-greenPrimary hover:bg-greenPrimary p-2.5 rounded-md cursor-pointer disabled:cursor-not-allowed"
//                     >
//                       <FaRegEdit
//                         size={20}
//                         className="text-greyPrimary group-hover:text-white"
//                       />
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         })}

//         <button
//           type="button"
//           onClick={handleAddItem}
//           // onClick={() => append({ quantity: 1 })}
//           className="flex items-center gap-3 text-lightAltBlue border border-lightAltBlue rounded w-fit px-6 py-1 cursor-pointer"
//         >
//           <GoPlus size={20} />
//           Add More Item
//         </button>
//       </div>
//     </div>
//   );
// }
