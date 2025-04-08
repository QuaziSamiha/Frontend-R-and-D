import SetUpCard from "./SetUpCard";
import { GrUserSettings } from "react-icons/gr";
import { MdOutlineSell } from "react-icons/md";
import { FaUsersGear, FaUserTie } from "react-icons/fa6";
import { TbSettingsStar } from "react-icons/tb";
import { SiAwsorganizations } from "react-icons/si";

export default function SetUp() {
  // ========= ALL INITIAL SET UP ================
  const allSetups = [
    {
      setUpTitle: "Core Management Set Up",
      icon: SiAwsorganizations,
      path: "/set-up/core-management",
    },
    {
      setUpTitle: "User Set Up",
      icon: GrUserSettings,
      path: "/set-up/user",
    },
    {
      setUpTitle: "Client Set Up",
      icon: FaUserTie,
      path: "/set-up/client",
    },
    {
      setUpTitle: "Vendor Set Up",
      icon: MdOutlineSell,
      path: "/set-up/vendor",
    },
    {
      setUpTitle: "Management Set Up",
      icon: FaUsersGear,
      path: "/set-up/management",
    },
    {
      setUpTitle: "General Set Up",
      icon: TbSettingsStar,
      path: "/set-up/general",
    },
  ];
  
  return (
    <section className="h-full">
      <div className="bg-whitePrimary h-full rounded-2xl p-24 flex items-start w-full">
        <div className="grid grid-cols-3 gap-10 w-full">
          {allSetups.map((setup, index) => {
            return (
              <SetUpCard
                key={index}
                title={setup.setUpTitle}
                IconComponent={setup.icon}
                path={setup.path}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
