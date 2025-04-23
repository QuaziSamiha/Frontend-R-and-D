"use client";

import { getUserInfo } from "@/services/auth.service";
import Information from "./Information";
import AllRequisitions from "./AllRequisitions";
import Message from "./Message";
import DialogContainer from "@/components/share/dialog/DialogContainer";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import DialogButton from "@/components/share/button/DialogButton";
import { useState } from "react";
import CustomDialog from "@/components/share/dialog/CustomDialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MdAdd } from "react-icons/md";

export default function Dashboard() {
  const { email } = (getUserInfo() as { email?: string }) || {};
  console.log(email);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleConfirmRequisition = () => {
    setOpenModal(false);
  };
  const handleCancelRequisition = () => {
    setOpenModal(false);
  };

  const handleEdit = () => {
    setEditModalOpen(true);
  };

  return (
    <div className="min-h-fit py-12 bg-white rounded-xl">
      <div className="flex flex-col gap-12">
        <div className="border-b border-greyAltTernary pb-8">
          <div className="flex items-center justify-between px-12">
            <p className="text-2xl font-bold text-blackSecondary">
              Product Requisition
            </p>
            <button onClick={() => handleEdit()} className="flex items-center justify-center gap-2 px-6 py-2.5 font-medium border border-lightAltBlue bg-lightAltBlue text-white rounded-md hover:bg-white hover:text-lightAltBlue hover:border hover:border-lightAltBlue transition duration-300 cursor-pointer">
          
          buttonLabel
        </button>

        <CustomDialog
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        title="Edit Client"
      >
        ok
      </CustomDialog>

      <div className="flex items-center gap-2">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
              <div className="bg-blackSecondary cursor-pointer select-none px-5 py-2 rounded-lg font-semibold text-whitePrimary text-base flex justify-center items-center gap-1">
                <MdAdd fontSize={20} />
                Approve
              </div>
            </DialogTrigger>
            <DialogContent className="bg-background sm:max-w-[30vw] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>ii</DialogTitle>
              </DialogHeader>
              kkkkk
            </DialogContent>
          </Dialog>
        </div>
            {/* <div className="">
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
            </div> */}
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
