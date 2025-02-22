"use client";
import Input from "@/components/ui/form/Input";
import { FieldValues, 
  // Path
 } from "react-hook-form";
import { useState } from "react";
import { IReceiptForm, IReceiptInfo } from "@/interfaces/register";
import Wave from "@/components/ui/svg/Wave";
import Receipt from "./Receipt";
// import Header from "./Header";

const ReceiptConfiguration = <T extends FieldValues>({
  // control,
  register,
  errors,
  // getValues,
}: IReceiptForm<T>) => {
  const [data, 
    // setData
  ] = useState<IReceiptInfo>({
    header: "$EchoMart",
    subHeader: [
      { line: "Store #1234" },
      { line: "123 Main Street" },
      { line: "City, State, ZIP" },
      { line: "Phone: (123) 456-7890" },
    ],
    footer: [
      { line: "Thank You" },
      { line: "LAAN TECH USA!" },
      { line: "Customer Service: (123) 456-7890" },
    ],
  });

  // =========== RECEIPT HEADER =============
  // const addReceiptHeader = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   const headerValue = getValues("header" as Path<T>);
  //   const subHeaderValue = getValues("subHeader" as Path<T>);

  //   setData((prev) => ({
  //     ...prev,
  //     header: headerValue,
  //     subHeader: subHeaderValue,
  //   }));
  // };

  return (
    <div className="flex flex-col gap-5">
      <p className="text-xl font-bold text-textPrimary">
        Receipt Configuration
      </p>
      <div className="min-h-screen flex flex-col  bg-whiteAltPrimary rounded-xl p-8">
        <Input
          labelName="Header Text"
          inputType="text"
          placeholderText="Header Text"
          name="header"
          register={register}
          errors={errors}
          isRequired
        />
        <div className="flex gap-10">
          <div className="basis-7/12">
            <div className="px-6 py-8 h-fit">
              {/* <Header
                register={register}
                control={control}
                getValues={getValues}
                addReceiptSection={addReceiptHeader}
              /> */}
            </div>
            {/* <div className="px-6 py-8 h-fit">
              <Footer
                register={register}
                control={control}
                getValues={getValues}
                addFooter={addFooter}
              />
            </div> */}
          </div>

          <div className="basis-5/12 p-10">
            <div className="h-full flex flex-col justify-between">
              <Wave />
              <div className="h-full">
                <Receipt data={data} />
              </div>

              <div className="rotate-180">
                <Wave />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptConfiguration;
