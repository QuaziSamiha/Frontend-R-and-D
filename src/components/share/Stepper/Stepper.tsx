"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode } from "react";

type TStep = string;

interface IStepperProps {
  steps: TStep[];
  currentStep: TStep;
  setCurrentStep(step: TStep): void;
  getStepTitle: (step: TStep) => string;
  onNextStep(): void;
  children: ReactNode;
}

export default function Stepper({
  steps,
  currentStep,
  setCurrentStep,
  getStepTitle,
  onNextStep,
  children,
}: IStepperProps) {

  const handlePrevious = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  return (
    <div>
      <div className="w-1/2 px-12">
        <div className="relative mb-12 max-w-5xl">
          {/* =======  STEPPER LINE ====== */}
          {/* ===== GREY STATIC LINE ==== */}
          <div className="absolute top-1/2 w-full h-0.5 bg-greyAltPrimary -translate-y-1/2" />
          {/* ===== GREEN MOVING LINE ==== */}
          <div
            className="absolute top-1/2 h-0.5 bg-greenPrimary -translate-y-1/2 transition-all duration-300"
            style={{
              width: `${
                ((steps.indexOf(currentStep) + 1) / steps.length) * 100
              }%`,
              maxWidth: "100%",
            }}
          />
          {/* ======= STEPPER LINE ====== */}

          {/* ========== STEPPER NUMBER AND TITLE =========== */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center z-10 
                    ${
                      index <= steps.indexOf(currentStep)
                        ? "bg-greenPrimary text-white"
                        : "bg-greyTernary text-gray-100"
                    }`}
                >
                  {index <= steps.indexOf(currentStep) ? "✓" : index + 1}
                </div>
                <span
                  className={`mt-2 text-sm ${
                    index <= steps.indexOf(currentStep)
                      ? "text-greenPrimary"
                      : "text-gray-400"
                  }`}
                >
                  {getStepTitle(step)}
                </span>
              </div>
            ))}
          </div>
          {/* ========== STEPPER NUMBER AND TITLE =========== */}
        </div>
      </div>
      {/* =========== CHILDREN ================ */}
      <div>{children}</div>

      {/* ============ THREE DOTS =============== */}
      <div className="flex justify-center space-x-2 max-w-5xl mt-8">
        <div className="flex space-x-1">
          {steps.map((step, index) => (
            <div
              key={step}
              className={`w-2 h-2 rounded-full ${
                index === steps.indexOf(currentStep)
                  ? "bg-lightAltBlue"
                  : "bg-greyTernary"
              }`}
            />
          ))}
        </div>
      </div>
      {/* ============== BUTTONS =========== */}
      <div className="flex justify-between mt-12 max-w-5xl px-12">
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentStep === steps[0]}
          className={`flex items-center px-6 py-2.5 rounded-md ${
            currentStep === steps[0]
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-lightAltBlue hover:bg-white text-white hover:text-lightAltBlue hover:border hover:border-lightAltBlue cursor-pointer"
          }`}
        >
          <ChevronLeft size={20} className="mr-2" />
          Previous
        </button>

        {steps.indexOf(currentStep) !== steps.length - 1 && (
          <button
            type="button"
            onClick={onNextStep}
            className="flex items-center px-6 py-2.5 bg-lightAltBlue text-white rounded-md hover:bg-white hover:text-lightAltBlue hover:border hover:border-lightAltBlue cursor-pointer"
          >
            Next
            <ChevronRight size={20} className="ml-2" />
          </button>
        )}
      </div>
    </div>
  );
}
