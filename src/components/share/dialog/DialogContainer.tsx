import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IDialogContainer } from "@/types/common/dialog";

const DialogContainer = ({
  buttonLabel,
  ButtonIcon,
  dialogTitle,
  dialogWidth = "w-[80vw]",
  children,
}: IDialogContainer) => {
  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger className="flex items-center justify-center gap-2 px-6 py-2.5 font-medium border border-lightAltBlue bg-lightAltBlue text-white rounded-md hover:bg-white hover:text-lightAltBlue hover:border hover:border-lightAltBlue transition duration-300 cursor-pointer">
          {ButtonIcon && <ButtonIcon size={24} />}
          {buttonLabel}
        </DialogTrigger>
        <DialogContent className={`${dialogWidth}`}>
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
