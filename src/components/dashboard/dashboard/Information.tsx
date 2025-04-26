import CustomDialog from "@/components/share/dialog/CustomDialog";
import { FileIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Information = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleModal = () => {
    setOpenModal(true);
  };
  return (
    <div className="bg-whiteTernary rounded-2xl w-2/3">
      <div className="py-10">
        <div className="flex flex-col gap-6">
          {/* ======== FIRST PART ========= */}
          <div className="px-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-charcaolGray text-3xl font-semibold">
                  Drug International Ltd. (Unit 03)
                </p>
                <div className="border-2 border-darkBlue rounded px-3 py-1 text-sm">
                  <span className="font-medium text-darkBlue">
                    Req NO: REQ7823
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-text-charcaolGray">
                    <span className="font-semibold">Address:</span> House No.
                    03, Flat No. A7, Road - Santi-E-Hawa Avenue
                  </p>
                  <p className="text-sm text-charcaolGray">
                    <span className="font-semibold">Tele No.:</span>{" "}
                    88-02-48995178, 88-02-48995178,{" "}
                    <span className="font-semibold">Email:</span>{" "}
                    morninmorning@yopbd.com
                  </p>
                </div>
                <p className="text-sm text-greyTernary font-medium">
                  20 NOV, 2024
                </p>
              </div>
            </div>
          </div>
          {/* ======== SECOND PART ========= */}
          <div className="px-10 border-y border-greyAltTernary py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="font-medium text-charcaolGray">Priority:</p>
                <div className="text-sm text-redPrimary font-bold border border-redPrimary px-2 py-0.5 rounded bg-red-50">
                  Urgent
                </div>
              </div>
              <p className=" text-blackSecondary font-semibold">
                Expected Date: 23 NOV, 2024
              </p>
            </div>
          </div>
          {/* ======== THIRD PART ========= */}
          <div className="px-10">
            <div className="grid grid-cols-3 gap-6">
              <div
                onClick={handleModal}
                className="cursor-pointer flex items-center gap-2 border border-charcaolGrayPrimary rounded-md p-3 bg-white"
              >
                <FileIcon size={24} className="text-darkBlue" />
                <div>
                  <p className="text-sm font-medium">Files.pdf</p>
                  <p className="text-xs text-gray-500">27 KB</p>
                </div>
              </div>

              <CustomDialog
                open={openModal}
                onOpenChange={setOpenModal}
                dialogWidth="w-[40vw]"
                dialogHeight="h-[80vh]"
              >
                <div>
                  <Image
                    src="/images/modal-img.PNG"
                    alt=""
                    height={500}
                    width={200}
                    className="w-full h-full"
                  />
                </div>
              </CustomDialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
