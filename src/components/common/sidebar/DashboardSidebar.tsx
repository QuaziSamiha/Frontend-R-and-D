"use client";

import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
// import { logout } from "@/services/auth.service";
import { ILink } from "@/types/dashboard/dashboard.types";
import { usePathname } from "next/navigation";
import { AiOutlineControl, AiOutlineStock } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { TbSettingsUp } from "react-icons/tb";

export function DashboardSidebar({ children }: { children: React.ReactNode }) {
  const adminDashboard: ILink[] = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LuLayoutDashboard,
    },
    {
      label: "Requisition Form",
      href: "/requisition-form",
      icon: IoNewspaperOutline,
    },
    {
      label: "Product Requisition",
      href: "/requisition/product-requisition",
      icon: IoNewspaperOutline,
    },
    {
      label: "Send Quotation",
      href: "/requisition/send-quotation",
      icon: IoNewspaperOutline,
    },
    {
      label: "Vendor",
      href: "/vendor",
      icon: IoNewspaperOutline,
    },
    {
      label: "Control Unit",
      href: "/control-unit",
      icon: AiOutlineControl,
    },
    {
      label: "Core Management",
      href: "/core-management",
      icon: AiOutlineControl,
    },
    {
      label: "Role Designation",
      href: "/role-designation",
      icon: AiOutlineControl,
    },
    {
      label: "Set Up",
      href: "/set-up",
      icon: TbSettingsUp,
    },
    {
      label: "Users",
      href: "/users",
      icon: FaRegUser,
    },
    {
      label: "Good Receive",
      href: "/good-receive",
      icon: FaPeopleCarryBox,
    },
    {
      label: "Stock",
      href: "/stock",
      icon: AiOutlineStock,
    },
    {
      label: "Delivery",
      href: "/delivery",
      icon: CiDeliveryTruck,
    },
    {
      label: "Payment",
      href: "/payment",
      icon: MdPayments,
    },
  ];

  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  //   const handleLogout = logout();
  return (
    <div className={cn("flex flex-col md:flex-row w-full h-screen")}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 border-r border-greyAltPrimary">
          <div
            className={`flex flex-col flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar`}
          >
            <div>
              <Link
                href="/"
                className="font-normal h-7 flex space-x-2 items-center text-base text-blackSecondary py-1 relative z-20"
              >
                <div className="h-5 w-6 bg-blackSecondary dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
                {open && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-medium text-blackSecondary dark:text-white whitespace-pre"
                  >
                    Buygenix
                  </motion.span>
                )}
              </Link>
            </div>

            <div className="mt-8  flex flex-col gap-2">
              {adminDashboard?.map((link, index) => {
                // console.log(link.href);
                return (
                  <SidebarLink
                    key={index + 1}
                    link={link}
                    className={`${
                      pathname === link.href
                        ? "text-darkBlue font-medium"
                        : `text-blackSecondary`
                    }`}
                  />
                );
              })}

              <div>
                <button
                  className="flex items-center gap-2 text-blackSecondary group"
                  //   onClick={() => logout}
                >
                  <RiLogoutCircleLine
                    fontSize={24}
                    className="group-hover:text-red-600"
                  />
                  {open && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-blackSecondary dark:text-white whitespace-pre group-hover:text-red-600"
                    >
                      <span>Logout</span>
                    </motion.span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* profile */}
          <div className="font-normal flex space-x-2 items-center text-sm text-blackSecondary py-1 relative z-20">
            <Image
              src="/images/user.png"
              className="h-7 w-7 flex-shrink-0 rounded-full"
              width={50}
              height={50}
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
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1">
        <div className="p-2 md:p-10 flex flex-col gap-2 flex-1 w-full h-full overflow-hidden overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
}
