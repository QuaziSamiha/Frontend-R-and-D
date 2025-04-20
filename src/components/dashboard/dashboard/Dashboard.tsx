"use client";

// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import { getUsers } from "@/api/users";
import { getUserInfo } from "@/services/auth.service";
import Information from "./Information";
import AllRequisitions from "./AllRequisitions";
import Message from "./Message";
import CustomDialog from "@/components/share/dialog/CustomDialog";
import { useState } from "react";
import Approve from "./Approve";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import { toast } from "react-toastify";
export default function Dashboard() {
  const [approveModalOpen, setApproveModalOpen] = useState(false);

  const { email } = (getUserInfo() as { email?: string }) || {};
  console.log(email);
  // const [loading, setLoading] = useState(false);

  // const fetchUsers = async () => {
  //   setLoading(true);
  //   try {
  //     const users = await getUsers();
  //     toast.success("Users fetched successfully!");
  //     console.log(users);
  //   } catch (error) {
  //     toast.error("Failed to fetch users!");
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="min-h-fit py-12 bg-white rounded-xl">
      <div className="flex flex-col gap-12">
        <div className="border-b border-greyAltTernary pb-8">
          <div className="flex items-center justify-between px-12">
            <p className="text-2xl font-semibold text-blackSecondary">
              Product Requisition
            </p>
            {/* <Button className="bg-blue-600 hover:bg-blue-700">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check-circle"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </span>
              Approve
            </Button> */}
            <CustomDialog
              open={approveModalOpen}
              onOpenChange={setApproveModalOpen}
              title="hi approve"
            >
              <Approve setApproveModalOpen={setApproveModalOpen} />
              {/* <div></div> */}
              {/* <EditAdminUser
                setEditModalOpen={setEditModalOpen}
                refetch={refetch}
              /> */}
            </CustomDialog>
            <Dialog>
              <DialogContent className="bg-white sm:max-w-[80vw]">
                <DialogHeader>
                  <DialogTitle>hi</DialogTitle>
                </DialogHeader>
                <div>approve</div>
              </DialogContent>
            </Dialog>
            <div>hell</div>
          </div>
        </div>
        <div className="flex flex-col gap-12 px-12">
          <Information />
          <AllRequisitions />
          <Message />
        </div>
      </div>
    </div>
  );
}
