"use client";

import { SelectField } from "@/components/share/form";
import DateInput2 from "@/components/share/form/DateInput2";
// import DateInput from "@/components/share/form/DateInput";
import InputField from "@/components/share/form/InputField";
import { ISelectOption } from "@/types/form/form.types";
import { useFormContext } from "react-hook-form";

const allConcern: ISelectOption[] = [
  {
    id: 1,
    value: "unit1",
    label: "Unit 1",
  },
  {
    id: 2,
    value: "unit2",
    label: "Unit 2",
  },
  {
    id: 3,
    value: "unit3",
    label: "Unit 4",
  },
];

const priorities: ISelectOption[] = [
  {
    id: 1,
    value: "normal",
    label: "Normal",
  },
  {
    id: 2,
    value: "urgent",
    label: "Urgent",
  },
];

export default function CompanyInformationForm() {
  // ================= REACT HOOK FORM METHODS =============
  const {
    control,
    // setValue,
    trigger,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="grid max-md:grid-cols-1 grid-cols-2 gap-6">
      <InputField
        labelName="Company"
        placeholderText="Enter company"
        name="companyName"
        defaultValue={"Drug International Ltd."}
        disabled
      />
      <SelectField
        label="Concern"
        placeholderText="Select concern from here"
        name="concern"
        control={control}
        trigger={trigger}
        data={allConcern}
        labelKey="label"
        valueKey="value"
        errors={errors}
        isLoading={false}
        defaultValue="unit2"
        makeDisable={true}
      />
      <DateInput2
        labelName="Survey Date"
        name="surveyDate"
        placeholderText="dd/mm/yyyy"
        errors={errors}
        control={control}
        trigger={trigger}
        isRequired
        requiredMessage="Survey Date is required."
      />
      {/* <DateInput
        labelName="Survey Date"
        name="surveyDate"
        placeholderText="dd/mm/yyyy"
        errors={errors}
        control={control}
        setValue={setValue}
        trigger={trigger}
        isRequired
        requiredMessage="Survey Date is required."
      /> */}
      <SelectField
        label="Priority"
        placeholderText="Select item's priority"
        name="priority"
        control={control}
        trigger={trigger}
        data={priorities}
        labelKey="label"
        valueKey="value"
        errors={errors}
        isLoading={false}
        isRequired
        requiredMessage="Select a Priority"
      />
    </div>
  );
}
