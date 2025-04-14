import { useFormContext, useWatch } from "react-hook-form";
import { IItem } from "../requisitionForm/RequisitionForm";
import ViewCard from "./ViewCard";
import { LuFiles } from "react-icons/lu";

export default function ViewRequisition() {
  const { control } = useFormContext();
  const [companyName, concern, surveyDate, priority, items, attachments] =
    useWatch({
      control,
      name: [
        "companyName",
        "concern",
        "surveyDate",
        "priority",
        "items",
        "attachments",
      ],
      defaultValue: {
        concern: "unit2",
      },
    });
  // console.log(object)

  const renderHtmlContent = (htmlString: string) => {
    if (!htmlString) return null;

    const div = document.createElement("div");
    div.innerHTML = htmlString;

    const textContent = div.textContent?.trim();
    if (!textContent) return null;

    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };
  return (
    <div className="mt-6 py-6 bg-whiteSecondary border border-greySecondary rounded-md max-h-screen overflow-y-auto overflow-x-hidden scroll-smooth scrollbar">
      <div className="w-full max-md:px-2 px-6">
        <p className="text-blackSecondary text-center font-medium text-xl pb-4">
          Requisition Details
        </p>
        <div className="flex flex-col gap-4">
          {/* ================== COMPANY'S INFORMATION =========== */}
          <p>
            <span className="text-greyPrimary">Company Name:</span>
            <span className="text-blackSecondary pl-1 font-medium">
              {companyName}
            </span>
          </p>
          <p>
            <span className="text-greyPrimary">Concern:</span>
            <span className="text-blackSecondary pl-1 font-medium capitalize">
              {concern}
            </span>
          </p>
          <ViewCard
            condition={surveyDate}
            title="Survey Date"
            content={surveyDate}
          />
          <ViewCard condition={priority} title="Priority" content={priority} />

          {/* =========== DISPLAY ITEM'S LIST =========== */}
          <div>
            {items?.map((item: IItem, index: number) => {
              return (
                <div key={index} className="my-6">
                  {items.length > 1 && (
                    <div className="flex flex-col gap-2">
                      <p className="text-blackSecondary text-lg font-medium border-b border-greySecondary pb-1">
                        Item {index + 1}
                      </p>
                      <div className="flex flex-col gap-3">
                        <div className="grid max-lg:grid-cols-1 grid-cols-4 gap-6">
                          <div className="col-span-2">
                            <ViewCard
                              condition={item?.itemName}
                              title="Item's Name"
                              content={item.itemName}
                            />
                          </div>

                          <ViewCard
                            condition={item?.uom}
                            title="Item's UOM"
                            content={item?.uom}
                          />

                          <p>
                            {item?.itemName && (
                              <span className="text-greyPrimary">
                                Item&apos;s Quantity:
                              </span>
                            )}
                            {item?.itemName && (
                              <span className="text-blackSecondary pl-1 font-medium">
                                {item?.quantity}
                              </span>
                            )}
                          </p>
                        </div>
                    
                        <div className="flex items-start">
                          {item?.itemDescription && (
                            <span className="text-greyPrimary">
                              Item&apos;s Description:
                            </span>
                          )}
                          {item?.itemDescription && (
                            <span className="text-blackSecondary pl-1">
                              {renderHtmlContent(item.itemDescription)}
                            </span>
                          )}
                        </div>

                        <ViewCard
                          condition={item?.remark}
                          title="Item's Remark"
                          content={item?.remark}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div>
            {attachments?.length > 0 && (
              <div className="flex flex-col gap-4">
                <p className="text-blackSecondary text-lg font-medium pb-1">
                  Attachments:
                </p>
                {attachments?.map((file: File, index: number) => {
                  return (
                    <div
                      key={index}
                      className="relative border border-greyAltPrimary rounded-md p-2 w-full"
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
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
