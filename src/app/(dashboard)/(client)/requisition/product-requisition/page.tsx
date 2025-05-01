import Loader from "@/components/share/loader/Loader";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

export const metadata: Metadata = {
  title: "Frontend | Product Requisition",
};
export default function ProductRequisitionPage() {
  const DynamicProductRequisition = dynamic(
    () =>
      import(
        "@/components/dashboard/client/requisition/productRequisition/ProductRequisition"
      ),
    { loading: () => <Loader /> }
  );
  return <DynamicProductRequisition />;
}

// ? 1 May, 25
