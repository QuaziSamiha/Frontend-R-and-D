import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicHome = dynamic(() => import("@/components/home/Home"), {
  loading: () => <Loader />,
});

const HomePage = () => {
  return <DynamicHome />;
};

export default HomePage;

