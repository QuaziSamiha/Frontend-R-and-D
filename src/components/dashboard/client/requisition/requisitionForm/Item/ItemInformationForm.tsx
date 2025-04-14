"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import ItemView from "./ItemView";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import ItemForm from "./ItemForm";
import { FcOk } from "react-icons/fc";

export default function ItemInformationForm() {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  // ================ REACT HOOK FORM METHODS =============
  const { control, trigger } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  //   ================ ITEM ADD FUNCTION =========
  const handleAddItem = async () => {
    // ========= IF THERE IS MULTIPLE ITEM ========
    if (editingIndex !== null) {
      const isValid = await trigger([
        `items.${editingIndex}.itemName`,
        `items.${editingIndex}.uom`,
      ]);

      if (isValid) {
        setEditingIndex(null);
        append({ quantity: 1 });
      }
    } else {
      // ============ IT THERE IS ONLY ONE ITEM ===============
      const lastIndex = fields.length - 1;
      const isValid = await trigger([
        `items.${lastIndex}.itemName`,
        `items.${lastIndex}.uom`,
      ]);

      if (isValid) {
        append({ quantity: 1 });
      }
    }
  };

  //   ============= ITEM EDIT FUNCTION ========
  const handleEditItem = (index: number) => {
    setEditingIndex(index);
  };

  //   =============== EDIT ITEM SAVE FUNCTION =============
  const handleSaveItem = async (index: number) => {
    const isValid = await trigger([
      `items.${index}.itemName`,
      `items.${index}.uom`,
    ]);

    if (isValid) {
      setEditingIndex(null);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <p className="text-xl font-medium text-blackSecondary">Item</p>
      {fields.map((field, index) => {
        // ========== SHOW FORM OR VIEW ITEM ========
        const showForm =
          editingIndex === index ||
          (editingIndex === null && index === fields.length - 1);

        return (
          <div
            key={index}
            className="flex max-lg:flex-col items-start gap-4 w-full"
          >
            <div className="border border-greySecondary max-md:px-3 px-10 py-8 rounded-md w-full">
              {showForm ? (
                <ItemForm index={index} />
              ) : (
                <ItemView index={index} />
              )}
            </div>

            {!showForm ? (
              <div className="flex lg:flex-col gap-2">
                <div className="group">
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    disabled={fields.length === 1}
                    className={`border border-greyAltPrimary hover:border-red-500 hover:bg-red-500 p-1 rounded-md cursor-pointer disabled:cursor-not-allowed`}
                  >
                    <MdDeleteForever
                      size={30}
                      className="text-greyPrimary group-hover:text-white"
                    />
                  </button>
                </div>
                <div className="group">
                  <button
                    type="button"
                    onClick={() => handleEditItem(index)}
                    className="border border-greyAltPrimary hover:border-greenPrimary hover:bg-greenPrimary p-2.5 rounded-md cursor-pointer"
                  >
                    <FaRegEdit
                      size={20}
                      className="text-greyPrimary group-hover:text-white"
                    />
                  </button>
                </div>
              </div>
            ) : (
              editingIndex === index && (
                <div className="group">
                  <button
                    type="button"
                    onClick={() => handleSaveItem(index)}
                    className="border border-greyAltPrimary hover:border-bluePrimary hover:bg-white p-1.5 rounded-md cursor-pointer"
                  >
                    <FcOk
                      size={30}
                      className="group-hover:text-darkBlue text-darkBlue bg-transparent"
                    />
                  </button>
                </div>
              )
            )}
          </div>
        );
      })}

      <button
        type="button"
        onClick={handleAddItem}
        className="flex items-center gap-3 text-lightAltBlue border border-lightAltBlue rounded w-fit px-6 py-1 cursor-pointer"
      >
        <GoPlus size={20} />
        Add More Item
      </button>
    </div>
  );
}
