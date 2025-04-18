"use client";

import SingleFileInput from "@/components/share/form/SingleFileInput";
import { useState } from "react";
import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import Stepper from "../../../../share/Stepper/Stepper";
import SubmitButton from "@/components/share/form/SubmitButton";
import CompanyInformationForm from "./CompanyInformationForm";
import ItemInformationForm from "./Item/ItemInformationForm";
import ViewRequisition from "../ViewRequisition/ViewRequisition";

// ================= STEPPER STEPS DEFINITION ==================
type TStep = "company" | "item" | "document";

export interface IItem {
  itemName?: string;
  itemId?: string;
  itemDescription?: string;
  uom?: string; // UNIT OF MEASUREMENT
  remark?: string;
  quantity?: number;
}

interface IFormData {
  companyName: string;
  concern: string;
  surveyDate: string;
  priority: string;
  items: IItem[];
  attachments: File[];
}

export default function RequisitionForm() {
  // ============= STEPPER STEPS =========
  const steps: TStep[] = ["company", "item", "document"];
  // ============= STEPPER INITIAL STATE =============
  const [currentStep, setCurrentStep] = useState<TStep>(steps[0]);

  // ============== STEPPER FUNCTIONALITIES =============
  const getStepNumber = (step: TStep) => steps.indexOf(step) + 1;
  const getStepTitle = (step: TStep) => {
    switch (step) {
      case "company":
        return "Company Information";
      case "item":
        return "Item Details";
      case "document":
        return "Document Submission";
    }
  };

  // ============ REACT HOOK FORM METHODS =========
  const methods = useForm<IFormData>({
    defaultValues: {
      companyName: "Drug International Ltd.",
      items: [{ quantity: 1 }], // ======= TO SHOW AN ITEM FORM INITIALLY =========
    },
    mode: "onChange",
  });

  const { handleSubmit, control, trigger } = methods;

  const {} = useFieldArray({
    control,
    name: "items",
  });

  const handleNextStep = async () => {
    let isValid = false;
    const currentFields = methods.getValues().items || [];

    if (currentStep === "company") {
      isValid = await trigger(["surveyDate", "priority"]);
    } else if (currentStep === "item") {
      const validationResults = await Promise.all(
        currentFields.map((_, index) =>
          trigger([`items.${index}.itemName`, `items.${index}.uom`])
        )
      );
      isValid = validationResults.every(Boolean);
    }

    if (isValid) {
      const currentIndex = steps.indexOf(currentStep);
      if (currentIndex < steps.length - 1) {
        setCurrentStep(steps[currentIndex + 1]);
      }
    }
  };

  // =============== SUBMIT FUNCTIONALITY =============
  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-fit py-8 bg-white rounded-xl">
      <div className="w-full">
        {/* ======= TITLE ========= */}
        <div className="mb-8 border-b border-greyAltPrimary">
          <div className="py-6 px-12">
            <p className="text-2xl font-semibold text-gray-800">
              Product Requisition Form ({getStepNumber(currentStep)}/
              {steps.length})
            </p>
            <p className="text-gray-500 mt-1">Fill information bellow to add</p>
          </div>
        </div>

        {/* ================ FORM PROVIDER FOR NESTED FORM ===================== */}
        <FormProvider {...methods}>
          <div className="flex max-xl:flex-col items-start gap-6">
            {/* =================== LEFT SIDE (FORM PART) =============== */}
            <div className="max-xl:w-full w-1/2 max-md:px-6 px-12">
              {/* ==================== STEPPER PARTS =================== */}
              <div className="relative">
                <Stepper
                  steps={steps}
                  currentStep={currentStep}
                  setCurrentStep={(prev: TStep) => setCurrentStep(prev)}
                  getStepTitle={getStepTitle as (step: string) => string}
                  onNextStep={handleNextStep}
                >
                  {/* =============== FORM PARTS ============== */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-6">
                      {/* ================== FORM 1ST PORTION ================== */}
                      {currentStep === "company" && <CompanyInformationForm />}

                      {/* =================== FORM 2ND PORTION ================= */}
                      {currentStep === "item" && <ItemInformationForm />}

                      {/* ==================== FORM 3RD PORTION ============== */}
                      {currentStep === "document" && (
                        <div className="w-full">
                          <SingleFileInput
                            label="Browse file"
                            name="attachments"
                            control={control}
                            acceptFileType=".pdf, .jpg, .jpeg, .png, .docx"
                            isRequired
                          />
                        </div>
                      )}
                    </div>

                    {/* ============ SUBMIT BUTTON ============ */}
                    <div className="absolute bottom-0 right-0">
                      {steps.indexOf(currentStep) === steps.length - 1 && (
                        <SubmitButton
                          submitTitle="Submit"
                          buttonWidth="w-fit"
                        />
                      )}
                    </div>
                  </form>
                </Stepper>
              </div>
            </div>
            {/* ================= RIGHT SIDE (VIEW PART) ============== */}
            <div className="max-xl:w-full w-1/2 max-md:px-6 px-12">
              <ViewRequisition />
            </div>
          </div>
        </FormProvider>
      </div>
    </div>
  );
}
