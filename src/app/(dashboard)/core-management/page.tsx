const AdminLoader = dynamic(
  () => import("@/components/share/loader/AdminLoader")
);

import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Buygenix | Core Management",
};

export default function Page() {
  const CoreManagement = dynamic(
    () => import("@/components/dashboard/core-management/CoreManagement"),
    {
      loading: () => <AdminLoader />,
    }
  );
  return <CoreManagement />;
}
