import Loader from "@/components/share/loader/Loader";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

export const metadata: Metadata = {
  title: "Frontend | Vendor Portal",
};
export default function VendorPortalPage() {
  const DynamicVendorPortal = dynamic(
    () => import("@/components/dashboard/vendor/vendorPortal/VendorPortal"),
    { loading: () => <Loader /> }
  );
  return <DynamicVendorPortal />;
}
