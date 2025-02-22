"use client";

import { SidebarLink } from "../sidebar";
import { IModuleProps } from "@/interfaces/dashboard";

const Module: React.FC<IModuleProps> = ({ open, moduleData }) => {
  // console.log(moduleData)
  return (
    <div className="flex flex-col gap-2 first:border-none border-t border-greySecondary px-2 py-2">
      {/* ======== IF MODULE SUBSECTION EXIT THEN SHOW MODULE MAIN TITLE ============== */}
      {moduleData?.moduleTitle && (
        <p
          className={`text-ashPrimary text-sm font-semibold ${
            open ? " opacity-100 " : " opacity-0"
          } text-nowrap`}
        >
          {moduleData.moduleTitle}
        </p>
      )}
      {/* ======== MODULE SUBSECTION'S LINKS ============== */}
      {moduleData?.moduleLinks?.map((link, index) => {
        // console.log(link.href);
        return <SidebarLink key={index} link={link} />;
      })}
    </div>
  );
};

export default Module;
