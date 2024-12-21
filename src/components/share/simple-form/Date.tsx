import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IProps {
  labelText?: string;
  fieldName: string;
  placeholderText?: string;
  selectedDate: any;
  formData: any;
  setFormData: Function;
  errors: any;
}
const Date: React.FC<IProps> = ({
  labelText,
  fieldName,
  placeholderText,
  selectedDate,
  fieldValue,
  formData,
  setFormData,
  errors,
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor="" className="pl-6 text-slate-700 font-bold text-base">
        {labelText}
        Birth Date
      </label>
      <DatePicker
        selected={formData.startDate}
        onChange={(date: Date | null) =>
          setFormData({ ...formData, startDate: date || new Date() })
        }
      />
    </div>
  );
};

export default Date;
