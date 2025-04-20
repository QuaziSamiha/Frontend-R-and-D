import { Badge } from "@/components/ui/badge";
import { FileIcon } from "lucide-react";
import React from "react";

const Information = () => {
  return (
    <div className="bg-gray-50 border-gray-200">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">
                Drug International Ltd. (Unit 03)
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium">Address:</span> House No. 03, Flat
                No. A7, Road - Santi-E-Hawa Avenue
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Tele No.:</span> 88-02-48995178,
                88-02-48995178, <span className="font-medium">Email:</span>{" "}
                morninmorning@yopbd.com
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Priority:</span>
              <Badge className="bg-red-500 hover:bg-red-600 text-white">
                Urgent
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-end">
              <div className="border border-gray-300 rounded px-3 py-1 text-sm">
                <span className="font-medium">Req NO: REQ7823</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 text-right">20 NOV, 2024</p>
            <p className="text-sm text-gray-600 mt-4">
              <span className="font-medium">Expected Date:</span> 23 NOV, 2024
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          <div className="flex items-center gap-2 border rounded p-3 bg-white">
            <FileIcon className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-sm font-medium">Files.pdf</p>
              <p className="text-xs text-gray-500">27 KB</p>
            </div>
          </div>

          <div className="flex items-center gap-2 border rounded p-3 bg-white">
            <FileIcon className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-sm font-medium">Files.pdf</p>
              <p className="text-xs text-gray-500">41 KB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
