"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody } from "../sidebar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// ======================= ALL REQUIRED ICONS ========================
import { LuLayoutDashboard } from "react-icons/lu";
import { TbReportAnalytics } from "react-icons/tb";
import {
  MdInventory,
  MdOutlineAnalytics,
  MdOutlineFeedback,
} from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TiChartPieOutline, TiTicket } from "react-icons/ti";
import { BsClipboard2Check } from "react-icons/bs";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { LuTag } from "react-icons/lu";
import { IoTicketOutline } from "react-icons/io5";
import { TbFileDescription } from "react-icons/tb";
import { TbFileInvoice } from "react-icons/tb";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAccountTree } from "react-icons/md";
// ================== INTERFACE ====================
import { IModuleData } from "@/interfaces/dashboard";
// ================= REQUIRED MODULE ===============
import Module from "./Module";

const DashboardSidebar = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);

  // ============ ALL SIDEBAR LINKS ==============
  const dashboardModuleData: IModuleData = {
    moduleLinks: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LuLayoutDashboard,
      },
    ],
  };

  const reportModuleData: IModuleData = {
    moduleTitle: "Reports",
    moduleLinks: [
      {
        label: "KPI Reports",
        href: "/kpi-reports",
        icon: MdOutlineAnalytics,
      },
      {
        label: "Department Reports",
        href: "/department-reports",
        icon: MdOutlineAccountTree,
      },
      {
        label: "Product Reports",
        href: "/product-reports",
        icon: TbReportAnalytics,
      },
      {
        label: "Tax Reports",
        href: "/tax-reports",
        icon: RiMoneyDollarCircleLine,
      },
      {
        label: "Not Found SKUs Reports",
        href: "/not-found-skus-reports",
        icon: TiChartPieOutline,
      },
    ],
  };

  const managementModuleData: IModuleData = {
    moduleTitle: "Store Management",
    moduleLinks: [
      {
        label: "Register",
        href: "/store-management/register",
        icon: BsClipboard2Check,
      },
      {
        label: "Employees & Cashiers",
        href: "/store-management/employees-cashiers",
        icon: MdOutlineAccountBalanceWallet,
      },
      {
        label: "Departments",
        href: "/store-management/departments",
        icon: MdOutlineAccountTree,
      },
      {
        label: "Products",
        href: "/store-management/products",
        icon: RiShoppingCartLine,
      },
      {
        label: "Tax Setup",
        href: "/store-management/tax-setup",
        icon: RiMoneyDollarCircleLine,
      },
      {
        label: "Promotions",
        href: "/store-management/promotions",
        icon: LuTag,
      },
    ],
  };

  const inventoryModuleData: IModuleData = {
    moduleTitle: "Inventory & Financial",
    moduleLinks: [
      {
        label: "Inventory Count",
        href: "/inventory-financial/inventory-count",
        icon: MdOutlineInventory2,
      },
      {
        label: "Invoices by Vendor",
        href: "/inventory-financial/invoices-vendor",
        icon: TbFileInvoice,
      },
      {
        label: "Inventory Audit",
        href: "/inventory-financial/inventory-audit",
        icon: BsClipboard2Check,
      },
      {
        label: "Lottery Booklist",
        href: "/inventory-financial/lottery-booklist",
        icon: IoTicketOutline,
      },
      {
        label: "Re-order Report",
        href: "/inventory-financial/reorder-report",
        icon: TbFileDescription,
      },
    ],
  };

  const lossPreventionModuleData: IModuleData = {
    moduleLinks: [
      {
        label: "Loss Prevention",
        href: "/loss-prevention",
        icon: MdOutlineVideoCameraBack,
      },
    ],
  };

  const userManagementModuleData: IModuleData = {
    moduleTitle: "User Management",
    moduleLinks: [
      {
        label: "Administrator",
        href: "/user-management/administrator",
        icon: FaRegUser,
      },
      {
        label: "Inventory Management",
        href: "/user-management/inventory-management",
        icon: MdInventory,
      },
      {
        label: "Support Ticketing System",
        href: "/user-management/support-ticketing-system",
        icon: TiTicket,
      },
      {
        label: "Feedback and Survey Management",
        href: "/user-management/feedback-survey-management",
        icon: MdOutlineFeedback,
      },
    ],
  };

  return (
    <div className={cn("flex flex-col md:flex-row w-full h-screen flex-1")}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between">
          <div className="overflow-y-auto overflow-x-hidden scroll-smooth scrollbar">
            {/* ============= LOGO & COMPANY NAME =============== */}
            <div className="px-2 py-2">
              <Link
                href="/"
                className="font-normal flex space-x-2 items-center text-sm text-blackSecondary py-1 relative z-20"
              >
                <div className="h-5 w-6 bg-blackSecondary dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
                {open && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-medium text-blackSecondary dark:text-white whitespace-pre"
                  >
                    LAAN POS USA
                  </motion.span>
                )}
              </Link>
            </div>
            {/* ============== LINKS ================ */}
            <div className="flex flex-col flex-1">
              <Module open={open} moduleData={dashboardModuleData} />
              <Module open={open} moduleData={reportModuleData} />
              <Module open={open} moduleData={managementModuleData} />
              <Module open={open} moduleData={inventoryModuleData} />
              <Module open={open} moduleData={lossPreventionModuleData} />
              <Module open={open} moduleData={userManagementModuleData} />
            </div>
            {/* ============== USER NAME & PROFILE PICTURE ================ */}
            <div className="px-2 py-2 flex items-center gap-2">
              <Image
                src="/images/sidebar/mahfuz.jpg"
                className="h-7 w-7 flex-shrink-0 rounded-full"
                width={75}
                height={75}
                alt="Avatar"
              />
              {open && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-blackSecondary dark:text-white whitespace-pre"
                >
                  <span>Mahfuz Islam</span>
                </motion.span>
              )}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      {/* ====================== DASHBOARD CONTENT ================== */}
      <div className="flex flex-1">
        <div className="p-2 md:p-10 border border-Tertiary bg-bg flex flex-col gap-2 flex-1 w-full h-full overflow-hidden overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
