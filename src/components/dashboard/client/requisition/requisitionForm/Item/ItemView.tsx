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

  const renderHtmlContent = (htmlString: string) => {
    if (!htmlString) return null;

    const div = document.createElement("div");
    div.innerHTML = htmlString;

    const textContent = div.textContent?.trim();
    if (!textContent) return null;

    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="grid max-lg:grid-cols-1 grid-cols-4 gap-3 w-[600px]">
        <div className="col-span-2">
          <span className="text-greyPrimary">Name:</span>
          <span className="text-blackSecondary pl-1 font-medium">
            {item?.itemName}
          </span>
        </div>
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
      </div>
      <div className="flex items-start">
        {item?.itemDescription && (
          <span className="text-greyPrimary">Item&apos;s Description:</span>
        )}
        {item?.itemDescription && (
          <span className="text-blackSecondary pl-1">
            {renderHtmlContent(item.itemDescription)}
          </span>
        )}
      </div>
      <p>
        <span className="text-greyPrimary">Remark:</span>
        <span className="text-blackSecondary pl-1 font-medium">
          {item?.remark}
        </span>
      </p>
    </div>
  );
}
