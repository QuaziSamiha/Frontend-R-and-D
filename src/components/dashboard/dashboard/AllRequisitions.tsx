import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

interface RequisitionItem {
  sl: string;
  item: string;
  itemId: string;
  quantity: string;
  description: string;
  remarks: string;
}
const AllRequisitions = () => {
  const items: RequisitionItem[] = [
    {
      sl: "01",
      item: "Printer Toner",
      itemId: "10863786",
      quantity: "15 pc.",
      description: "Model: HP Laser Jet 2035",
      remarks: "5 qty",
    },
    {
      sl: "02",
      item: "Printer Toner",
      itemId: "10863786",
      quantity: "15 pc.",
      description: "Model: HP Laser Jet 2035",
      remarks: "5 qty",
    },
    {
      sl: "03",
      item: "Printer Toner",
      itemId: "10863786",
      quantity: "15 pc.",
      description: "Model: HP Laser Jet 2035",
      remarks: "5 qty",
    },
    {
      sl: "04",
      item: "Printer Toner",
      itemId: "10863786",
      quantity: "15 pc.",
      description: "Model: HP Laser Jet 2035",
      remarks: "5 qty",
    },
  ];
  return (
    <div>
      <Card className="overflow-hidden border-gray-200">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-16 font-semibold">SL</TableHead>
              <TableHead className="font-semibold">Item</TableHead>
              <TableHead className="font-semibold">Item ID</TableHead>
              <TableHead className="font-semibold">Quantity</TableHead>
              <TableHead className="font-semibold">Description</TableHead>
              <TableHead className="font-semibold">Remarks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.sl}>
                <TableCell className="font-medium">{item.sl}</TableCell>
                <TableCell>{item.item}</TableCell>
                <TableCell>{item.itemId}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.remarks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default AllRequisitions;
