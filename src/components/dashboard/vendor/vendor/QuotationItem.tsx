"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import BlueButton from "@/components/share/button/BlueButton";
import GreyButton from "@/components/share/button/GreyButton";

interface QuotationItemProps {
  quotation: {
    id: string;
    itemName: string;
    model: string;
    resolution: string;
    processor: string;
    memory: string;
    quantity: string;
    remainingDays: string;
    sentDate: string;
    participationDate: string;
    hasFile: boolean;
  };
  onCancel: () => void;
}

export default function QuotationItem({
  quotation,
}: // onCancel,
QuotationItemProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold mb-2">{quotation.itemName}</h2>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Model:</span> {quotation.model}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Resolution:</span>{" "}
            {quotation.resolution}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Processor:</span>{" "}
            {quotation.processor}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Memory:</span> {quotation.memory}
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Sent:</span> {quotation.sentDate}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Participation:</span>{" "}
            {quotation.participationDate}
          </p>
          {quotation.hasFile && (
            <Button variant="outline" className="mt-2" size="sm">
              <FileText className="mr-2 h-4 w-4" /> File
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 pt-4 border-t border-gray-200">
        <div>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Quantity:</span> {quotation.quantity}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Remaining Date:</span>{" "}
            {quotation.remainingDays}
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          {/* <Button
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-50 cursor-pointer"
            onClick={onCancel}
          >
            Cancel
          </Button> */}
          <GreyButton
            buttonLabel="Cancel"
            // textColor="red-500"
            // borderColor="red-500"
            // hoverBorderColor="hover:text-red-800"
            // onClickFunction={oncancel}
          />
          <Link href={`/vendor/participate/${quotation.id}`}>
            {/* <Button className="bg-blue-600 hover:bg-blue-700">
              Participate
            </Button> */}
            <BlueButton buttonLabel="Participate" />
          </Link>
        </div>
      </div>
    </div>
  );
}
