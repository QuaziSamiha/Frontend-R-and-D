import Loader from "@/components/share/loader/Loader";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

export const metadata: Metadata = {
  title: "Send Quotation",
};
export default function SendQuotationPage() {
  const DynamicSendQuotation = dynamic(
    () =>
      import("@/components/dashboard/client/requisition/quotation/Quotation"),
    { loading: () => <Loader /> }
  );
  return <DynamicSendQuotation />;
}

// ? 2 May, 25
