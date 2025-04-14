import Loader from "@/components/share/loader/Loader";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

export const metadata: Metadata = {
  title: "Frontend | Requisition Form",
};
export default function RequisitionFormPage() {
  const DynamicRequisitionForm = dynamic(
    () =>
      import(
        "@/components/dashboard/client/requisition/requisitionForm/RequisitionForm"
      ),
    { loading: () => <Loader /> }
  );
  return <DynamicRequisitionForm />;
}
