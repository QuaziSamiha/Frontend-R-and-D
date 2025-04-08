const AdminLoader = dynamic(
  () => import("@/components/share/loader/AdminLoader")
);
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Buygenix | Control Unit",
};

export default function Page() {
  const ControlUnit = dynamic(
    () => import("@/components/dashboard/control-unit/ControlUnit"),
    {
      loading: () => <AdminLoader />,
    }
  );
  return <ControlUnit />;
}
