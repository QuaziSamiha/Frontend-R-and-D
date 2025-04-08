import Loader from "@/components/share/loader/Loader";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Buygenix | Setup",
};

export default function SetupPage() {
  const DynamicSetup = dynamic(
    () => import("@/components/dashboard/setUp/SetUp"),
    {
      loading: () => <Loader />,
    }
  );
  return <DynamicSetup />;
}
