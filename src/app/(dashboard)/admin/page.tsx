import Loader from "@/components/share/loader/Loader";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Buygenix | Admin",
};

export default function AdminPage() {
  const DynamicAdmin = dynamic(
    () => import("@/components/dashboard/admin/Admin"),
    {
      loading: () => <Loader />,
    }
  );
  return <DynamicAdmin />;
}
