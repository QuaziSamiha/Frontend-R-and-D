// ? 2 May, 25

interface IProps {
  requisition: {
    id: string;
    date: string;
    client: string;
    expectedDate: string;
    priority: string;
  };
}

export default function QuotationInfoPanel({ requisition }: IProps) {
  const { id, date, client, expectedDate, priority } = requisition;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <div className="mb-2">
          <span className="text-gray-500">Date:</span>{" "}
          <span className="font-medium">{date}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-500">Client:</span>{" "}
          <span className="font-medium">{client}</span>
        </div>
        <div>
          <span className="text-gray-500">Priority:</span>{" "}
          <span className="font-medium">
            <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs">
              {priority}
            </span>
          </span>
        </div>
      </div>
      <div className="md:text-right">
        <div className="mb-2">
          <span className="text-gray-500">Req. NO:</span>{" "}
          <span className="font-medium text-darkBlue">{id}</span>
        </div>
        <div>
          <span className="text-gray-500">Expected Date:</span>{" "}
          <span className="font-medium">{expectedDate}</span>
        </div>
      </div>
    </div>
  );
}
