"use client";

import { getUserInfo } from "@/services/auth.service";
import Information from "./Information";
import AllRequisitions from "./AllRequisitions";
import Message from "./Message";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { useState } from "react";
import CustomDialog from "@/components/share/dialog/CustomDialog";
import SecondaryButton from "@/components/share/button/SecondaryButton";
import DialogContainer from "@/components/share/dialog/DialogContainer";

export default function Dashboard() {
  const { email } = (getUserInfo() as { email?: string }) || {};
  console.log(email);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [approveModalOpen, setApproveModalOpen] = useState(false);

  const handleConfirmRequisition = () => {
    setOpenModal(false);
  };
  const handleCancelRequisition = () => {
    setOpenModal(false);
  };

  const handleApprove = () => {
    setApproveModalOpen(true);
  };

  return (
    <div className="min-h-fit py-12 bg-white rounded-xl">
      <div className="flex flex-col gap-12 border border-red-500">
        <div className="border-b border-greyAltTernary pb-8">
          <div className="flex items-center justify-between px-12">
            <p className="text-2xl font-bold text-blackSecondary">
              Product Requisition
            </p>
            {/* <SecondaryButton
              buttonLabel="Confirm"
              ButtonIcon={IoCheckmarkDoneCircleSharp}
              onClickFunction={handleApprove}
            />
            <CustomDialog
              open={approveModalOpen}
              onOpenChange={setApproveModalOpen}
              title="Are You Sure?"
            >
              <div className="flex flex-col gap-4">
                ok
              </div>
            </CustomDialog> */}

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
                    <SecondaryButton
                      buttonLabel="Cancel"
                      backgroundColor="white"
                      textColor="blackSecondary"
                      borderColor="blackSecondary"
                    />
                    <SecondaryButton buttonLabel="Confirm" />
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
