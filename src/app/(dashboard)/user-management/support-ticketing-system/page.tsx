import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicSupportTicketingSystem = dynamic(
  () =>
    import(
      "@/components/userManagement/supportTicketingSystem/SupportTicketingSystem"
    ),
  { loading: () => <Loader /> }
);

const SupportTicketingSystemPage = () => {
  return <DynamicSupportTicketingSystem />;
};

export default SupportTicketingSystemPage;
