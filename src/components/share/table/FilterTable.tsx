"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IFilter } from "@/types/table/table.types";
import { MdAdd } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

export default function FilterTable({
  headerName,
  filtering,
  setFiltering,
  buttonName,
  children,
  open,
  setOpen,
  userName,
  usersNumber,
}: IFilter) {
  return (
    <section className="my-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-0.5 border border-greySecondary rounded-md px-4 py-2.5 bg-white">
          <RiSearchLine className="w-4 h-4 text-greyTernary" />
          <input
            type="text"
            placeholder="Search"
            name="search"
            value={filtering || ""}
            onChange={(e) => setFiltering(e.target.value)}
            className="bg-whitePrimary pl-2 pr-6 text-stone-600 text-sm placeholder:text-sm placeholder:text-greyTernary outline-none w-54"
          />
        </div>

        {userName && usersNumber !== undefined && (
          <p className="text-xl">
            {userName} : <span className="font-semibold">{usersNumber}</span>{" "}
          </p>
        )}

        <div className="flex items-center gap-2">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
              <div className="bg-blackSecondary cursor-pointer select-none px-5 py-2 rounded-lg font-semibold text-whitePrimary text-base flex justify-center items-center gap-1">
                <MdAdd fontSize={20} />
                {buttonName}
              </div>
            </DialogTrigger>
            <DialogContent className="bg-background sm:max-w-[80vw] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{headerName}</DialogTitle>
              </DialogHeader>
              {children}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
