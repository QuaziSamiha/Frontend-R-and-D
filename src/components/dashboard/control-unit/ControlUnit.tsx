"use client";

import NavigationTabs from "@/components/share/navigationTabs/NavigationTabs";
import NavigationTrail from "@/components/share/navigationTrail/NavigationTrail";
import { usePathname } from "next/navigation";
import CoreModule from "./CoreModule/CoreModule";
import FeatureModule from "./Feature/FeatureModule";
import PermissionModule from "./Permission/PermissionModule";
import RolePermissionModule from "./RolePermission/RolePermissionModule";

export default function ControlUnit() {
  const path = usePathname();

  const tabs = [
    {
      tabLabel: "Core Module",
      tabValue: "coreModule",
      tabContent: <CoreModule />,
    },
    {
      tabLabel: "Feature",
      tabValue: "feature",
      tabContent: <FeatureModule />,
    },
    {
      tabLabel: "Permission",
      tabValue: "permission",
      tabContent: <PermissionModule />,
    },
    {
      tabLabel: "Role Permission",
      tabValue: "rolePermission",
      tabContent: <RolePermissionModule />,
    },
  ];

  return (
    <section className="flex flex-col gap-8">
      <NavigationTrail path={path} />
      <NavigationTabs tabs={tabs} />
    </section>
  );
}
