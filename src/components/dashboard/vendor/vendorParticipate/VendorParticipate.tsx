"use client";
import GreyButton from "@/components/share/button/GreyButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LiaArrowLeftSolid } from "react-icons/lia";
import QuotationPreview from "./QuotationPreview";
import { mockQuotation } from "./data";

export default function VendorParticipate() {
  const router = useRouter();
  // console.log(router);
  const [showPreview, setShowPreview] = useState(false);
  const [quotation, setQuotation] = useState(mockQuotation);
  // console.log(quotation);

  const handleBack = () => {
    if (showPreview) {
      setShowPreview(false);
    } else {
      router.back();
      // router.push("/vendor");
    }
  };
  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white">
        <GreyButton
          onClickFunction={handleBack}
          buttonLabel="Back"
          ButtonIcon={LiaArrowLeftSolid}
        />

        <section>
          {showPreview ? (
            <QuotationPreview
              quotation={quotation}
              onEdit={() => setShowPreview(false)}
            />
          ) : (
            <></>
          )}
        </section>
      </main>
    </div>
  );
}
