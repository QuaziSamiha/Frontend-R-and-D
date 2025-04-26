"use client";

// import { getUserInfo } from "@/services/auth.service";
import Information from "./Information";
import AllRequisitions from "./AllRequisitions";
import Message from "./message/Message";
import Approve from "./Approve";

export default function Dashboard() {
  // const { email } = (getUserInfo() as { email?: string }) || {};
  // console.log(email);
  // const [openModal, setOpenModal] = useState<boolean>(false);
  // const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="min-h-fit py-12 bg-white rounded-xl">
      <div className="flex flex-col gap-12">
        <Approve />
        <div className="flex flex-col gap-12 px-12">
          <Information />
          <AllRequisitions />
          <Message />
        </div>
      </div>
    </div>
  );
}
