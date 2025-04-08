"use client";

import InputField from "@/components/share/form/InputField";
import PasswordField from "@/components/share/form/PasswordField";
import SubmitButton from "@/components/share/form/SubmitButton";
import { useAuth } from "@/hooks/useAuth";
import { LoginFormData, loginSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdOutlineEmail } from "react-icons/md";

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate: login } = useAuth(() => {
  // const { mutate: login, isPending } = useAuth(() => {
    reset();
    router.push("/dashboard");
  });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    login(data);
  };

  // const onSubmit = (data: LoginFormData) => {
  //     alert(JSON.stringify(data));

  //     fetch(
  //         `http://localhost:3332/nest-b-auth/api/v1/auth/login`,
  //         {
  //             method: "POST",
  //             headers: {
  //                 "content-type": "application/json",
  //             },
  //             body: JSON.stringify(data),
  //         }
  //     )
  //         .then((res) => {
  //             console.log("res", res);

  //             return res.json();
  //         })
  //         .then((data) => {
  //             console.log("data", data);
  //             if (data.success === true) {

  //                 reset();

  //             } else {

  //             }
  //         })
  // };

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground mb-8 hover:text-lightAltBlue transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h1 className=" text-blackAltPrimary text-4xl text-center font-bold">
            Welcome Back
          </h1>
          <p className="text-greyAltPrimary text-base text-center">
            Please Enter Your Details
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-[370px] flex justify-center flex-col gap-6"
        >
          <InputField
            placeholderText="Email Address"
            inputType="email"
            name="email"
            register={register}
            errors={errors}
            IconComponent={MdOutlineEmail}
          />
          <PasswordField
            placeholderText="Enter Password"
            name="password"
            errors={errors}
            register={register}
          />
          <div className="mt-1.5">
            <SubmitButton submitTitle="Log in" />
          </div>
        </form>
        <p className="text-center text-sm font-medium">Forgot Password?</p>
      </div>
    </div>
  );
}
