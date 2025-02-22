import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicTags = dynamic(
  () => import("@/components/storeManagement/tags/Tags"),
  { loading: () => <Loader /> }
);

const TagsPage = () => {
  return <DynamicTags />;
};

export default TagsPage;

// ! THIS SECTION OF THE MODULE IS REMOVED 
