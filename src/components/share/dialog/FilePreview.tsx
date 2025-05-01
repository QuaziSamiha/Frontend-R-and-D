"use client";

import { useState } from "react";
import { FileIcon, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilePreviewProps {
  fileName: string;
  fileSize: string;
  onClose?: () => void;
}

export default function FilePreview({
  fileName,
  fileSize,
}: //   onClose,
FilePreviewProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 flex flex-col h-[90vh]">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">Document Preview: {fileName}</h2>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-4 bg-gray-100">
            <div className="bg-white shadow-sm rounded-lg p-6 max-w-3xl mx-auto">
              <div className="text-center mb-6">
                <h1 className="text-xl font-bold uppercase">
                  DRUG INTERNATIONAL LIMITED
                </h1>
                <p className="text-sm">
                  13A & 14A, Tejgaon I/A, Shahid Road, Tejgaon, Dhaka,
                  Bangladesh
                </p>
              </div>

              <div className="mb-6">
                <p className="mb-1">To,</p>
                <p className="mb-1">Purchase Dept.</p>
                <p>AJI Limited, Uttara, Dhaka</p>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-lg font-bold underline">
                  Requisition (Unit-2)
                </h2>
                <p className="text-sm">Date: 08 Sept 2024</p>
              </div>

              <table className="w-full border-collapse border mb-6">
                <thead>
                  <tr>
                    <th className="border p-2 text-left">Sl. No</th>
                    <th className="border p-2 text-left">Item</th>
                    <th className="border p-2 text-left">Quantity</th>
                    <th className="border p-2 text-left">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">1.</td>
                    <td className="border p-2">
                      <p>Printer Toner</p>
                      <p className="text-sm">Model: HP Laserjet 2035</p>
                    </td>
                    <td className="border p-2">15 pc.</td>
                    <td className="border p-2"></td>
                  </tr>
                  <tr>
                    <td className="border p-2">2.</td>
                    <td className="border p-2">
                      <p>Printer Toner</p>
                      <p className="text-sm">Model: HP Laserjet M604dn</p>
                    </td>
                    <td className="border p-2">15 pc.</td>
                    <td className="border p-2"></td>
                  </tr>
                  <tr>
                    <td className="border p-2">3.</td>
                    <td className="border p-2">
                      <p>Printer Toner</p>
                      <p className="text-sm">Model: HP Laserjet P1102</p>
                    </td>
                    <td className="border p-2">5 pc.</td>
                    <td className="border p-2"></td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-between mt-16">
                <div className="text-center">
                  <div className="border-t border-black pt-1 w-32">
                    <p className="text-sm">Requisition by</p>
                    <p className="text-sm font-bold">HRD</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="border-t border-black pt-1 w-40">
                    <p className="text-sm">Authorized by</p>
                    <p className="text-sm font-bold">Factory In-charge</p>
                    <p className="text-xs mt-1">08 Sept 2024</p>
                  </div>
                </div>
              </div>

              <div className="text-right mt-4">
                <p className="text-xs">Page 1-1</p>
              </div>
            </div>
          </div>
          <div className="p-4 border-t flex justify-end">
            <Button variant="outline" className="mr-2">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button onClick={toggleFullscreen}>Close</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleFullscreen}
      className="border rounded-lg p-4 flex items-center w-full sm:w-auto hover:bg-gray-50"
    >
      <FileIcon className="h-10 w-10 text-blue-500 mr-3" />
      <div>
        <div className="font-medium">{fileName}</div>
        <div className="text-xs text-gray-500">{fileSize}</div>
      </div>
    </button>
  );
}
