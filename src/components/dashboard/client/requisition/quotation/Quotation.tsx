"use client";

import { requisition } from "./data";
import QuotationInfoPanel from "./QuotationInfoPanel";
import SendQuotation from "./sendQuotation/SendQuotation";

export default function Quotation() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <main className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col gap-16 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {/* ========  STATIC TITLE ========= */}
          <p className="text-2xl font-bold">Send Quotation</p>
          {/* ============== REQUISITION & CLIENT BASIC INFORMATION ============= */}
          <QuotationInfoPanel requisition={requisition} />
          {/* ================ QUOTATION TABLE ============== */}
          <SendQuotation />
        </div>
      </main>
    </div>
  );
}
