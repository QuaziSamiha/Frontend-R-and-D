import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ICustomDialog } from "@/types/common/dialog";

export default function CustomDialog({
  open,
  onOpenChange,
  title,
  children,
  dialogWidth = "sm:max-w-[80vw]",
  dialogHeight,
}: ICustomDialog) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`bg-white ${dialogWidth} ${dialogHeight}`}>
        <DialogHeader>
          <DialogTitle className="text-2xl text-blackSecondary font-bold px-6 mt-6">
            {title}
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
