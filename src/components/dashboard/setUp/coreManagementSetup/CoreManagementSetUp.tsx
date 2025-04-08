"use client";

import NavigationTrail from "@/components/share/navigationTrail/NavigationTrail";
import NavigationTabs from "@/components/share/navigationTabs/NavigationTabs";
import { usePathname } from "next/navigation";
import AdministrationSetup from "./administrationSetUp/AdministrationSetUp";
import ClientSetup from "./clientSetUp/ClientSetUp";
import VendorSetup from "./vendorSetUp/VendorSetUp";
import ProjectManagementSetup from "./projectManagementSetUp/ProjectManagementSetUp";

export default function CoreManagementSetup() {
  const path = usePathname();

  const tabs = [
    {
      tabLabel: "Administration",
      tabValue: "administration",
      tabContent: <AdministrationSetup />,
    },
    {
      tabLabel: "Client",
      tabValue: "client",
      tabContent: <ClientSetup />,
    },
    {
      tabLabel: "Vendor",
      tabValue: "vendor",
      tabContent: <VendorSetup />,
    },
    {
      tabLabel: "Project Management",
      tabValue: "projectManagement",
      tabContent: <ProjectManagementSetup />,
    },
  ];

  return (
    <section className="flex flex-col gap-8">
      <NavigationTrail path={path} />
      <NavigationTabs tabs={tabs} />
    </section>
  );
}
