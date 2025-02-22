"use client";
import { usePostAPI } from "@/hooks/useAPI";
import { useForm } from "react-hook-form";

const Products = () => {
  const addUser = usePostAPI(["addUser"], "/users/register");

  const { handleSubmit } = useForm();

  const onSubmit = (data: unknown) => {
    console.log("Form Data:", data);
    const formData = {
      email: "user.email@domain.com",
      password: "test@123",
      role: "ADMIN",
      username: "doejohn",
    };
    try {
      addUser.mutate(formData, {
        onSuccess: (responseData) => {
          console.log(responseData);
        },
        onError: (error: unknown) => {
          console.log(error);
        },
      });
    } catch (error: unknown) {
      console.error("Error uploading post:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container mx-auto px-3 mt-5 space-y-4 border border-red-500 h-96 w-96"
    >
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none flex justify-center items-center"
      >
        Add
      </button>
    </form>
  );
};

export default Products;
