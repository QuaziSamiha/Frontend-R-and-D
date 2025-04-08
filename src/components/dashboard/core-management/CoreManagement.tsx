"use client";

import NavigationTabs from "@/components/share/navigationTabs/NavigationTabs";
import NavigationTrail from "@/components/share/navigationTrail/NavigationTrail";
import { usePathname } from "next/navigation";
import Administration from "./Administration/Administration";
import Client from "./Client/Client";
import ProjectManagement from "./ProjectManagement/ProjectManagement";
import Vendor from "./Vendor/Vendor";

export default function CoreManagement() {
  const path = usePathname();

  const tabs = [
    {
      tabLabel: "Administration",
      tabValue: "administration",
      tabContent: <Administration />,
    },
    {
      tabLabel: "Client",
      tabValue: "client",
      tabContent: <Client />,
    },
    {
      tabLabel: "Vendor",
      tabValue: "vendor",
      tabContent: <Vendor />,
    },
    {
      tabLabel: "Project Management",
      tabValue: "projectManagement",
      tabContent: <ProjectManagement />,
    },
  ];

  return (
    <section className="flex flex-col gap-8">
      <NavigationTrail path={path} />
      <NavigationTabs tabs={tabs} />
    </section>
  );
}
