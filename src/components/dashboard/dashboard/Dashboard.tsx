"use client";

import { getUserInfo } from "@/services/auth.service";
import Information from "./Information";
import AllRequisitions from "./AllRequisitions";
import Message from "./Message";
import DialogContainer from "@/components/share/dialog/DialogContainer";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import DialogButton from "@/components/share/button/DialogButton";
import { useState } from "react";

export default function Dashboard() {
  const { email } = (getUserInfo() as { email?: string }) || {};
  console.log(email);
  const [openModal, setOpenModal] = useState<boolean>();
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
  const handleConfirmRequisition = () => {
    setOpenModal(false);
  };
  const handleCancelRequisition = () => {
    setOpenModal(false);
  };

  return (
    <div className="min-h-fit py-12 bg-white rounded-xl">
      <div className="flex flex-col gap-12">
        <div className="border-b border-greyAltTernary pb-8">
          <div className="flex items-center justify-between px-12">
            <p className="text-2xl font-bold text-blackSecondary">
              Product Requisition
            </p>
            <div className="">
              <DialogContainer
                buttonLabel="Approve"
                ButtonIcon={IoCheckmarkDoneCircleSharp}
                dialogTitle="Are You Sure?"
              >
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-greyAltSecondary py-8">
                      Are you sure approve this requisition
                    </p>
                  </div>
                  <div className="flex justify-end gap-3 pt-4 border-t border-greyAltPrimary">
                    <DialogButton
                      buttonLabel="Cancel"
                      backgroundColor="white"
                      textColor="blackSecondary"
                      borderColor="blackSecondary"
                    />
                    <DialogButton buttonLabel="Confirm" />
                  </div>
                </div>
              </DialogContainer>
            </div>
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
