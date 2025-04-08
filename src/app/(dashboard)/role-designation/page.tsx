const AdminLoader = dynamic(
  () => import("@/components/share/loader/AdminLoader")
);

import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Buygenix | Role Designation",
};

export default function Page() {
  const RoleDesignation = dynamic(
    () => import("@/components/dashboard/role-designation/RoleDesignation"),
    {
      loading: () => <AdminLoader />,
    }
  );
  return <RoleDesignation />;
}
