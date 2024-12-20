"use client";
import Input from "@/components/share/simple-form/Input";
import SubmitButton from "@/components/share/simple-form/SubmitButton";
import React, { useState } from "react";

interface IForm {
  firstName: string;
}
const Form = () => {
  // ================== DECLARING ALL STATES =============
  const [formData, setFormData] = useState<IForm>({
    firstName: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // =============== HANDLE CHANGE FUNCTION =============
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("Event", event);
    const { name, value } = event.target;
    // console.log(name, " : ", value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // =============== FORM SUBMIT FUNCTION ===============
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // PREVENT RESET FORMS AND MAKE EMPTY INPUT FIELDS
    setIsSubmitting(true);
    setErrors({});
    const newErrors: any = {};

    if (!formData.firstName) newErrors.firstName = "First name is required"; // SETTING ERROR MESSAGE
    if (Object.keys(newErrors).length > 0) {
      // IF ERROR OCCURS
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    alert(`First Name: ${formData.firstName}`);
    console.log(formData);
  };

  return (
    <section className="w-full bg-sky-50 rounded-lg shadow-lg shadow-slate-300 p-8">
      <p className="text-center text-slate-700 text-xl font-bold pb-6">
        Add User
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          labelText="First Name"
          inputType="text"
          fieldName="firstName"
          placeholderText="Enter Your First Name..."
          fieldValue={formData.firstName}
          handleChange={handleChange}
          errors={errors}
        />
        <SubmitButton submitTitle="Add User" />
      </form>
      {isSubmitting && (
        <p className="text-green-800 font-semibold text-sm text-center mt-4">
          User Added Successfully
        </p>
      )}
    </section>
  );
};

export default Form;
