"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import RequisitionClientOverview from "./RequisitionClientOverview";
import { requisition } from "./data";
import ChatInterface from "@/components/share/message/ChatInterface";
import BlueButton from "@/components/share/button/BlueButton";
import CustomDialog from "@/components/share/dialog/CustomDialog";
import GreyButton from "@/components/share/button/GreyButton";
import FilePreview from "./FilePreview";
import { DataTable } from "@/components/share/table/DataTable";

const ProductRequisition = () => {
  const [isApproved, setIsApproved] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleApprove = () => {
    setShowConfirmation(true);
  };

  const confirmApproval = () => {
    setIsApproved(true);
    setShowConfirmation(false);
  };

  const cancelApproval = () => {
    setShowConfirmation(false);
  };
  return (
    <div className="max-w-7xl mx-auto w-full">
      <main className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col gap-16 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {/* ============ INFO, APPROVAL, FILE PREVIEW ==================== */}
          <section className="flex flex-col gap-8">
            {/* ======== BUTTON & STATIC TITLE ========= */}
            <div className="flex justify-between items-center">
              {/* ============ TITLE =============== */}
              <h1 className="text-2xl font-bold">Product Requisition</h1>
              {/* ============ APPROVE BUTTON & MODAL ========= */}
              {!isApproved ? (
                <div>
                  <BlueButton
                    onClickFunction={handleApprove}
                    buttonLabel="Approve"
                    ButtonIcon={CheckCircle}
                  />
                  <CustomDialog
                    title="Are You Sure?"
                    open={showConfirmation}
                    onOpenChange={setShowConfirmation}
                    dialogWidth="w-[25vw]"
                  >
                    <div className="flex flex-col gap-4">
                      <p className="px-6 border-y border-greyAltTernary text-greyPrimary py-6">
                        Are you sure approve for this requisition?
                      </p>
                      <div className="flex justify-end gap-3 px-6 mb-3">
                        <GreyButton
                          buttonLabel="Cancel"
                          onClickFunction={cancelApproval}
                        />
                        <BlueButton
                          onClickFunction={confirmApproval}
                          buttonLabel="Confirm"
                        />
                      </div>
                    </div>
                  </CustomDialog>
                </div>
              ) : (
                <div className="flex items-center text-greenPrimary">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  <span className="font-medium">Approved</span>
                </div>
              )}
            </div>
            {/* ============== REQUISITION & CLIENT BASIC INFORMATION ============= */}
            <RequisitionClientOverview requisition={requisition} />
            {/* ================ FILE PREVIEW ============== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-1/2">
              {requisition.files.map((file, index) => (
                <FilePreview
                  key={index}
                  fileName={file.name}
                  fileSize={file.size}
                />
              ))}
            </div>
          </section>
          <DataTable data={requisition.items} />
          <ChatInterface />
        </div>
      </main>
    </div>
  );
};

export default ProductRequisition;
