"use client";
import Input from "@/components/share/simple-form/Input";
import Select from "@/components/share/simple-form/Select";
import SubmitButton from "@/components/share/simple-form/SubmitButton";
import React, { useState } from "react";

interface IOptions {
  name: string;
  value: string;
}

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  age: number | undefined;
  gender: string;
}

const genderOptions: IOptions[] = [
  {
    value: "male",
    name: "Male",
  },
  {
    value: "female",
    name: "Female",
  },
  {
    value: "other",
    name: "Other",
  },
];

const Form = () => {
  // ================== DECLARING ALL STATES =============
  const [formData, setFormData] = useState<IForm>({
    firstName: "",
    lastName: "",
    email: "",
    age: undefined,
    gender: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // =============== HANDLE CHANGE FUNCTION =============
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // console.log("Event", event);
    const { name, value } = event.target;
    // console.log(name, " : ", value);
    setFormData({
      ...formData,
      //   [name]: value,
      [name]: name === "age" ? Number(value) : value, // Ensure age is a number
    });
  };

  // =============== FORM SUBMIT FUNCTION ===============
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // PREVENT RESET FORMS AND MAKE EMPTY INPUT FIELDS
    setIsSubmitting(true);
    setErrors({});
    const newErrors: any = {};

    // VALIDATION
    if (!formData.firstName) newErrors.firstName = "First name is required"; // SETTING ERROR MESSAGE
    if (!formData.lastName) newErrors.lastName = "Last name is required"; // SETTING ERROR MESSAGE
    if (!formData.email) newErrors.email = "Email is required"; // SETTING ERROR MESSAGE
    if (formData.age === undefined || formData.age < 18) {
      newErrors.age = "You must be at least 18 years old";
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    // IF ERROR OCCURS
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    console.log(formData);
  };

  return (
    <section className="w-full bg-emerald-50 rounded-lg shadow-lg shadow-slate-300 p-8">
      <p className="text-center text-slate-700 text-xl font-bold pb-6">
        Add User
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-10">
          <Input
            labelText="First Name"
            inputType="text"
            fieldName="firstName"
            placeholderText="Enter Your First Name..."
            fieldValue={formData.firstName}
            handleChange={handleChange}
            errors={errors}
          />
          <Input
            labelText="Last Name"
            inputType="text"
            fieldName="lastName"
            placeholderText="Enter Your Last Name..."
            fieldValue={formData.lastName}
            handleChange={handleChange}
            errors={errors}
          />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <Input
            labelText="Email"
            inputType="email"
            fieldName="email"
            placeholderText="Enter Your Email Address..."
            fieldValue={formData.email}
            handleChange={handleChange}
            errors={errors}
          />
          <Input
            labelText="Age"
            inputType="number"
            fieldName="age"
            placeholderText="Enter Your Age..."
            fieldValue={formData.age}
            handleChange={handleChange}
            errors={errors}
          />
        </div>
        <Select
          labelText="Gender"
          fieldName="gender"
          placeholderText="Select your gender..."
          handleChange={handleChange}
          fieldValue={formData.gender}
          options={genderOptions}
          errors={errors}
        />
        <SubmitButton
          submitTitle="Add User"
          bgColor="bg-emerald-900"
          bgHoverColor="hover:bg-emerald-800"
        />
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
