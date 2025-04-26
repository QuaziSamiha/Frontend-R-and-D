// interface RequisitionItem {
//   sl: string;
//   item: string;
//   itemId: string;
//   quantity: string;
//   description: string;
//   remarks: string;
// }
const AllRequisitions = () => {
  // const items: RequisitionItem[] = [
  //   {
  //     sl: "01",
  //     item: "Printer Toner",
  //     itemId: "10863786",
  //     quantity: "15 pc.",
  //     description: "Model: HP Laser Jet 2035",
  //     remarks: "5 qty",
  //   },
  //   {
  //     sl: "02",
  //     item: "Printer Toner",
  //     itemId: "10863786",
  //     quantity: "15 pc.",
  //     description: "Model: HP Laser Jet 2035",
  //     remarks: "5 qty",
  //   },
  //   {
  //     sl: "03",
  //     item: "Printer Toner",
  //     itemId: "10863786",
  //     quantity: "15 pc.",
  //     description: "Model: HP Laser Jet 2035",
  //     remarks: "5 qty",
  //   },
  //   {
  //     sl: "04",
  //     item: "Printer Toner",
  //     itemId: "10863786",
  //     quantity: "15 pc.",
  //     description: "Model: HP Laser Jet 2035",
  //     remarks: "5 qty",
  //   },
  // ];
  return (
    <div>
      <div className="overflow-x-auto scroll-smooth scrollbar rounded-lg border border-greyAltTernary w-2/3 max-md:w-full">
        <table className="min-w-full divide-y divide-greyAltTernary">
          <thead className="bg-whiteTernary">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                SL
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Remarks
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-greyAltTernary">
            {[1, 2, 3, 4].map((num) => (
              <tr key={num}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {String(num).padStart(2, "0")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Printer Toner
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  10863786
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  15 pc.
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Model: HP Laser Jet 2035
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  5 gb
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <Card className="overflow-x-auto scroll-smooth scrollbar border-gray-200">
        <Table className="bg-whiteTernary">
          <TableHeader className="bg-whiteTernary py-4">
            <TableRow>
              <TableHead className="w-16 font-semibold">SL</TableHead>
              <TableHead className="font-semibold">Item</TableHead>
              <TableHead className="font-semibold">Item ID</TableHead>
              <TableHead className="font-semibold">Quantity</TableHead>
              <TableHead className="font-semibold">Description</TableHead>
              <TableHead className="font-semibold">Remarks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white">
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
      </Card> */}
    </div>
  );
};

export default AllRequisitions;
