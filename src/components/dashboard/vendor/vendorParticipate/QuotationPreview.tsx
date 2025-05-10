import GreyButton from "@/components/share/button/GreyButton";
import { ArrowLeft } from "lucide-react";

interface IQuotation {
  hasFile: boolean;
  id: string;
  itemName: string;
  memory: string;
  model: string;
  participationDate: string;
  processor: string;
  quantity: string;
  remainingDays: string;
  resolution: string;
  sentDate: string;
}

interface IProps {
  quotation: IQuotation;
  onEdit: () => void;
}

export default function QuotationPreview({ quotation, onEdit }: IProps) {
  console.log(quotation);
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold">Review Your Quotation</h1>
        <p className="text-gray-500">
          Please review your quotation details before final submission
        </p>
      </div>

      {/* ============= BUTTONS ================== */}
      <div className="p-6 border-t bg-gray-50 flex justify-between items-center">
        {/* <Button type="button" variant="outline" onClick={onEdit}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Edit Quotation
        </Button> */}
        <GreyButton
          buttonLabel="Edit Quotation"
          ButtonIcon={ArrowLeft}
          onClickFunction={onEdit}
        />
        {/* <Button onClick={onSubmit} className="bg-blue-600 hover:bg-blue-700">
          <Check className="mr-2 h-4 w-4" /> Submit Quotation
        </Button> */}
      </div>
    </div>
  );
}
