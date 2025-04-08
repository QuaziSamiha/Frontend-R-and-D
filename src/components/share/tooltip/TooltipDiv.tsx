import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IoEyeOutline } from "react-icons/io5";
import { BiSolidEdit } from "react-icons/bi";

interface IAdd {
  name: string;
}

export default function TooltipDiv({ name }: IAdd) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <label htmlFor="show data" className="cursor-pointer">
            {name === "Edit" && (
              <BiSolidEdit fontSize={24} className="text-greyTernary" />
            )}
            {name === "View" && (
              <IoEyeOutline fontSize={20} className="text-greyTernary " />
            )}
            {/* {name === "Delete" && (
            <RiDeleteBin5Fill
              fontSize={20}
              className="text-greyTernary font-bold"
            />
          )} */}
          </label>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
