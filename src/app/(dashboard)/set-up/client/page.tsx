import AdminLoader from "@/components/share/loader/AdminLoader";
import { Metadata } from "next";
import dynamic from "next/dynamic";
export const metadata: Metadata = {
  title: "Buygenix | Client Setup",
};

export default function ClientSetUpPage() {
  const DynamicClientSetup = dynamic(
    () =>
      import(
        "@/components/dashboard/setUp/coreManagementSetUp/clientSetUp/ClientSetUp"
      ),
    {
      loading: () => <AdminLoader />,
    }
  );

  return <DynamicClientSetup />;
}
