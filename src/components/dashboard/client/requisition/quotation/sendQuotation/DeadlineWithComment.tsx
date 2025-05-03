"use client";

import GreyButton from "@/components/share/button/GreyButton";
import CustomDialog from "@/components/share/dialog/CustomDialog";
import DateInput from "@/components/share/form/DateInput2";
import SubmitButton from "@/components/share/form/SubmitButton";
import TextArea from "@/components/share/form/TextArea";
import { useFormContext } from "react-hook-form";

interface IProps {
  deadlineModalOpen: boolean;
  setDeadlineModalOpen: (open: boolean) => void;
}

export default function DeadlineWithComment({
  deadlineModalOpen,
  setDeadlineModalOpen,
}: IProps) {
  const {
    control,
    trigger,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <CustomDialog
        open={deadlineModalOpen}
        onOpenChange={setDeadlineModalOpen}
        dialogWidth="w-[30vw]"
        title="Deadline & Comment"
      >
        <div className="border-y border-gray-300 py-4 px-6 space-y-4">
          <DateInput
            labelName="Last Date"
            name="lasDate"
            placeholderText="dd/mm/yyyy"
            errors={errors}
            control={control}
            trigger={trigger}
            isRequired
            requiredMessage="Date is required."
          />
          <TextArea
            labelName="Remark"
            placeholderText="Write remark"
            name="remark"
            control={control}
          />
        </div>
        <div className="flex justify-end items-center gap-3 px-6 py-4">
          <GreyButton
            buttonLabel="Cancel"
            onClickFunction={() => setDeadlineModalOpen(false)}
          />
          <SubmitButton buttonWidth="w-fit" submitTitle="Send" />
        </div>
      </CustomDialog>
    </div>
  );
}
