import {
  Table,
  TableBody,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TProps = {
  data: Record<string, unknown>[]; // array of objects
  caption?: string;
  footerTotalKey?: string; // optional key to calculate total (used in footer)
};

export function DataTable({
  data,
}: // caption,
// footerTotalKey,
TProps) {
  if (data.length === 0) {
    return <p>No data available</p>;
  }

  const columns = Object.keys(data[0]);

  return (
    <Table className="overflow-x-auto w-full">
      {/* {caption && <TableCaption>{caption}hello</TableCaption>} */}
      <TableHeader>
        <TableRow className="bg-gray-50 ">
          {columns.map((col) => (
            <TableHead key={col} className="capitalize py-4 px-4">
              {col}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={i} className="">
            {columns.map((col) => (
              <TableCell key={col} className="p-4">
                {String(row[col])}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      {/* {footerTotalKey && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={columns.length - 1}>Total</TableCell>
              <TableCell className="text-right">
                {calculateTotal(data, footerTotalKey)}
              </TableCell>
            </TableRow>
          </TableFooter>
        )} */}
    </Table>
  );
}

// Helper to calculate total for a given key (only works with $-prefixed amounts)
// function calculateTotal(data: Record<string, unknown>[], key: string) {
//   const total = data.reduce((sum, item) => {
//     const value = item[key];
//     if (typeof value === "string" && value.startsWith("$")) {
//       return sum + parseFloat(value.replace("$", ""));
//     }
//     return sum;
//   }, 0);

//   return `$${total.toFixed(2)}`;
// }
