"use client";

import { useWatch, useFormContext } from "react-hook-form";

interface IProps {
  index: number;
}

export default function ItemView({ index }: IProps) {
  //   ================ REACT HOOK FORM METHODS =============
  const { control } = useFormContext();

  const item = useWatch({
    control,
    name: `items.${index}`,
  });

  return (
    <div className="grid grid-cols-2 gap-6 w-[600px] h-[150px]">
      <p>
        <span className="text-greyPrimary">Name:</span>
        <span className="text-blackSecondary pl-1 font-medium">
          {item?.itemName}
        </span>
      </p>
      <p>
        <span className="text-greyPrimary">Item ID:</span>{" "}
        <span className="text-blackSecondary pl-1 font-medium">
          {item?.itemId}
        </span>
      </p>
      <p>
        <span className="text-greyPrimary">Description:</span>{" "}
        <span className="text-blackSecondary pl-1 font-medium">
          {item?.itemDescription}
        </span>
      </p>
      <p>
        <span className="text-greyPrimary">UOM:</span>
        <span className="text-blackSecondary pl-1 font-medium">
          {item?.uom}
        </span>
      </p>
      <p>
        <span className="text-greyPrimary">Quantity:</span>{" "}
        <span className="text-blackSecondary pl-1 font-medium">
          {item?.quantity}
        </span>
      </p>
      <p>
        <span className="text-greyPrimary">Remark:</span>
        <span className="text-blackSecondary pl-1 font-medium">
          {item?.remark}
        </span>
      </p>
    </div>
  );
}
