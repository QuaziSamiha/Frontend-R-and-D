import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicRegister = dynamic(
  () => import("@/components/storeManagement/register/Register"),
  { loading: () => <Loader /> }
);

const RegisterPage = () => {
  return <DynamicRegister />;
};

export default RegisterPage;
