import BlackButton from "@/components/share/button/BlackButton";
import CustomDialog from "@/components/share/dialog/CustomDialog";
import { FileIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface IProps {
  fileName: string;
  fileSize: string;
}

export default function FilePreview({ fileName, fileSize }: IProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setOpenModal(true)}
        className="cursor-pointer flex items-center gap-2 border border-charcaolGrayPrimary rounded-md p-3 bg-white"
      >
        <FileIcon size={24} className="text-darkBlue" />
        <div>
          <p className="text-sm font-medium">{fileName || "Files.pdf"}</p>
          <p className="text-xs text-gray-500">{fileSize || "27 KB"}</p>
        </div>
      </div>

      <CustomDialog
        open={openModal}
        onOpenChange={setOpenModal}
        title="Document Preview"
        dialogWidth="w-[40vw]"
        dialogHeight="h-[80vh]"
      >
        <div>
          <div className=" border-y border-gray-500 bg-gray-100 my-6 p-6 h-[60vh] overflow-y-auto">
            <div className="flex justify-center items-center ">
              <Image
                src="/images/modal-img.PNG"
                alt=""
                height={500}
                width={200}
                className="w-auto h-[60vh]"
              />
            </div>
          </div>
          <div className="flex justify-end px-6 mb-6">
            <BlackButton
              onClickFunction={() => setOpenModal(false)}
              buttonLabel="Close"
            />
          </div>
        </div>
      </CustomDialog>
    </>
  );
}
