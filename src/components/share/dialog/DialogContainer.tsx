import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IDialogContainer } from "@/types/common/dialogContainer";

const DialogContainer = ({
  buttonLabel,
  ButtonIcon,
  dialogTitle,
  children,
}: IDialogContainer) => {
  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger className="flex items-center justify-center gap-2 px-6 py-2.5 font-medium border border-lightAltBlue bg-lightAltBlue text-white rounded-md hover:bg-white hover:text-lightAltBlue hover:border hover:border-lightAltBlue transition duration-300 cursor-pointer">
          {ButtonIcon && <ButtonIcon size={24} />}
          {buttonLabel}
        </DialogTrigger>
        <DialogContent className="w-[80vw]">
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{children}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogContainer;
