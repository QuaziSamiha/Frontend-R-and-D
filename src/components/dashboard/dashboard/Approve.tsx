import SecondaryButton from "@/components/share/button/SecondaryButton";
import DialogContainer from "@/components/share/dialog/DialogContainer";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const Approve = () => {
  return (
    <div className="border-b border-greyAltTernary pb-8">
      <div className="flex items-center justify-between px-12">
        <p className="text-2xl font-bold text-blackSecondary">
          Product Requisition
        </p>
        <div>
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
                  hoverTextColor="blackSecondary"
                  borderColor="blackSecondary"
                  hoverBorderColor="blackSecondary"
                />
                <SecondaryButton buttonLabel="Confirm" />
              </div>
            </div>
          </DialogContainer>
        </div>
      </div>
    </div>
  );
};

export default Approve;

{
  /* <SecondaryButton
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
    </CustomDialog> */
}
