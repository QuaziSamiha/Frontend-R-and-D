import Loader from "@/components/share/loader/Loader";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

export const metadata: Metadata = {
  title: "Frontend | Vendor",
};
export default function VendorPage() {
  const DynamicVendor = dynamic(
    () =>
      import(
        "@/components/dashboard/vendor/vendorParticipate/VendorParticipate"
      ),
    { loading: () => <Loader /> }
  );
  return <DynamicVendor />;
}
