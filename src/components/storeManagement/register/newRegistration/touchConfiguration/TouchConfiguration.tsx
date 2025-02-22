"use client";

import { useState } from "react";
import { VscTriangleRight } from "react-icons/vsc";
import styles from "@/styles/Drag.module.css";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ButtonConfiguration from "./buttonConfiguration/ButtonConfiguration";
import { info } from "./info";
import { IButtonInfo } from "@/interfaces/register";

const TouchConfiguration = () => {
  // ========= STORING BUTTON INFO TO STATE ===========
  const [data, setData] = useState<IButtonInfo[]>(info);
  // console.log(data);
  const [draggedItem, setDraggedItem] = useState<IButtonInfo>();
  // console.log(draggedItem);
  const [, setSelectedItem] = useState<number | null>(null);
  // const [selectedItem, setSelectedItem] = useState<number | null>(null); //! ====== UNUSED VARIABLE ==========
  // console.log(selectedItem);

  // =============== DRAG START ==========
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    item: IButtonInfo
  ) => {
    // console.log("Drag start: ", item);
    setDraggedItem(item);
    (e.target as HTMLDivElement).style.opacity = "0.5";
    e.dataTransfer.effectAllowed = "move";
  };

  // =============== DRAG END ============
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    (e.target as HTMLDivElement).style.opacity = "1";
  };

  // =============== HANDLE DRAG OVER ==========
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // ============ HANDLE DROP ============
  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    targetItem: IButtonInfo
  ) => {
    e.preventDefault();

    if (draggedItem && targetItem.data.type !== "fixed") {
      const updatedData = data.map((d) => {
        if (d.id === draggedItem.id) {
          return {
            ...d,
            // Only swap the `data` part of dragged item with the targetItem
            data: { ...targetItem.data },
          };
        }
        if (d.id === targetItem.id) {
          return {
            ...d,
            // Only swap the `data` part of target item with the dragged item
            data: { ...draggedItem.data },
          };
        }
        return d;
      });

      setData(updatedData);
    }
  };
  // console.log(data);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-bold text-textPrimary">
        Receipt Configuration
      </h1>
      <div className="grid grid-cols-8 grid-rows-8 gap-1 p-4 rounded-xl h-screen bg-bgPrimary">
        {data.map((item) => (
          // ============================== BUTTON PLATE ========================
          <div
            className={`${
              item.color === "firstBlock"
                ? `bg-violetQuaternary text-primary` // NOTIFICATION BUTTON
                : item.color === "lastBlock"
                ? `bg-primary  text-bgPrimary` // MORE BUTTON
                : item.color === "blue"
                ? "bg-violetAltSecondary text-primary" // VIOLET DARK BACKGROUND
                : item.color === "white"
                ? "bg-primary text-textPrimary" // WHITE BACKGROUND
                : item.color === "red"
                ? "bg-redSecondary text-primary" // RED BACKGROUND
                : "bg-bgPrimary"
            } 
            ${item.data.colSpan} 
            ${item.data.rowSpan} 
            ${item.color === "black" ? "" : "p-3 hover:p-0"} 
            ${
              item.color === "lastBlock"
                ? styles.outerLastDivShadow
                : item.color === "firstBlock"
                ? styles.outerFirstDivShadow
                : styles.outerDivShadow
            }
            m-1 flex justify-center items-center rounded font-semibold cursor-pointer`}
            key={item.id}
            draggable={item.data.type !== "fixed"}
            onDragStart={(e) => handleDragStart(e, item)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, item)}
          >
            {/* =========================== BUTTON ========================== */}
            <div
              className={`${
                item.color === "firstBlock" || item.color === "lastBlock" // NOTIFICATION & MORE BUTTON
                  ? ""
                  : item.color === "blue"
                  ? `bg-violetQuaternary ${styles.innerBlueDivShadow}` // VIOLET BUTTON
                  : item.color === "white"
                  ? `bg-whiteSecondary ${styles.innerWhiteDivShadow}` // WHITE BUTTON
                  : item.color === "red"
                  ? `bg-redTernary ${styles.innerRedDivShadow}` // RED BUTTON
                  : ""
              } w-full h-full rounded`}
            >
              {/* ========================= BUTTON MODAL ==================== */}
              {/* ============= EDIT BUTTON IF NOT FIXED (DRAG BUTTON) =============== */}
              {item?.data.type !== "fixed" ? (
                <Dialog>
                  <DialogTrigger
                    className="w-full h-full z-50 text-nowrap"
                    onClick={() => setSelectedItem(item.id)}
                  >
                    {/* ========= BUTTON TITLE ============== */}
                    {item?.data.buttonElement}

                    {/* ========== IF MORE BUTTON, THEN ADD A ICON ============== */}
                    {item?.data.buttonElement === "More" && (
                      <VscTriangleRight size={20} />
                    )}
                  </DialogTrigger>
                  {/* =================== BUTTON CONFIGURATION ====================== */}
                  <ButtonConfiguration
                    id={item.id}
                    color={item.color}
                    data={item.data}
                  />
                </Dialog>
              ) : (
                // ========== FIXED BUTTON =========
                <div className="w-full h-full flex justify-center items-center text-nowrap">
                  {/* ========= BUTTON TITLE ============== */}
                  {item?.data.buttonElement}

                  {/* ========== IF MORE BUTTON, THEN ADD A ICON ============== */}
                  {item?.data.buttonElement === "More" && (
                    <VscTriangleRight size={20} />
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouchConfiguration;
