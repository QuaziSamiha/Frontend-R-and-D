"use client";
import { useState } from "react";
import { quotations } from "./data";
import QuotationItem from "./QuotationItem";

const Vendor = () => {
  const [, setShowConfirmationModal] = useState(false);
  // const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [, setCurrentQuotation] = useState<unknown>(null);
  // const [currentQuotation, setCurrentQuotation] = useState<unknown>(null);

  const handleCancel = (quotation: unknown) => {
    setCurrentQuotation(quotation);
    setShowConfirmationModal(true);
  };

  // const confirmCancel = () => {
  //   console.log("Cancelling quotation:", currentQuotation?.id);
  //   setShowConfirmationModal(false);
  // };
  return (
    <section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-2xl font-bold mb-6">Quotations</p>

        <div className="space-y-6">
          {quotations.map((quotation) => (
            <QuotationItem
              key={quotation.id}
              quotation={quotation}
              onCancel={() => handleCancel(quotation)}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Vendor;
