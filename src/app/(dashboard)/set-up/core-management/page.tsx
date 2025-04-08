import Loader from "@/components/share/loader/Loader";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Buygenix | Core Management",
};

export default function CoreManagementPage() {
  const DynamicCoreManagementSetup = dynamic(
    () =>
      import(
        "@/components/dashboard/setUp/coreManagementSetUp/CoreManagementSetUp"
      ),
    {
      loading: () => <Loader />,
    }
  );
  return <DynamicCoreManagementSetup />;
}
