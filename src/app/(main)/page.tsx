import Loader from "@/components/share/loader/Loader";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Buygenix | Home",
};
export default function HomePage() {
  const DynamicHome = dynamic(() => import("@/components/main/home/Home"), {
    loading: () => <Loader />,
  });
  return <DynamicHome />;
}
