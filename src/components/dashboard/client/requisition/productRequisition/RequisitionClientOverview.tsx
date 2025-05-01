interface IProps {
  requisition: {
    id: number;
    company: string;
    address: string;
    phone: string;
    email: string;
    date: string;
    expectedDate: string;
    priority: string;
  };
}

const RequisitionClientOverview = ({ requisition }: IProps) => {
  const { id, company, address, phone, email, date, expectedDate, priority } =
    requisition;
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {/* ==================== COMPANY INFO =================== */}
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold text-blackSecondary">{company}</p>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Address:</span> {address}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Tele No.:</span> {phone},{" "}
              <span className="font-medium">Email:</span> {email}
            </p>
          </div>
        </div>
        {/* ================== REQUISITION INFO ================== */}
        <div className="mt-4 md:mt-0 text-right">
          <div className="inline-block bg-blue-50 text-lightAltBlue px-3 py-1 rounded-md text-sm mb-2">
            Req NO: {id}
          </div>
          <div className="text-sm text-gray-600">{date}</div>
        </div>
      </div>

      {/* ===================== PRIORITY & EXPECTED DATE ====================== */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <span className="font-medium text-sm">Priority:</span>{" "}
          <span className="bg-red-100 text-red-600 font-medium px-2 py-0.5 rounded text-xs">
            {priority}
          </span>
        </div>
        <div className="mt-2 md:mt-0">
          <span className="font-medium text-sm">Expected Date:</span>{" "}
          <span>{expectedDate}</span>
        </div>
      </div>
    </>
  );
};

export default RequisitionClientOverview;
