"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { loginSchema } from "./schema";
import { usePostAPI } from "@/hooks/useAPI";
import { toast } from "react-toastify";
import { url } from "@/api/api";
import { useAuth } from "@/hooks/useAuth";

// ========= INPUTS TYPE DEFINITION ===========
interface IFormInputs {
  userName: string;
  password: string;
}

const LoginForm = () => {
  // ============= YUP VALIDATION SCHEMA ===============
  const resolver = yupResolver(loginSchema);
  console.log("base url", url);
  //  =========== REACT HOOK FORM'S REQUIRED METHOD ===========
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver,
  });

  //  ======= ROUTE ==========
  const router = useRouter();

  // ======== USING HOOK TO POST LOGIN DATA =================
  const { authData, loading } = useAuth();
  // const userLogin = usePostAPI(["login"], "user/login");
  
  //  =========== SUBMISSION FUNCTION ============
  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    if (loading) {
      return <p>loading ....</p>;
    }
  
    console.log(authData)
    // try {
    //   userLogin.mutate(data, {
    //     onSuccess: (response) => {
    //       console.log("response : ", response);
    //       toast.success("login Successfully");
    //       reset();
    //       router.push("/dashboard");
    //     },
    //     onError: (error: unknown) => {
    //       toast.error("Failed to login");
    //       console.log(error);
    //     },
    //   });
    // } catch (error: unknown) {
    //   console.error(error);
    // }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 justify-center items-center">
        {/* =============== FORM WELCOME MESSAGE & ICON ===================== */}
        <Image
          src="/images/login/Logo.png"
          width={80}
          height={77}
          priority
          className="w-20"
          alt="login form"
        />
        <h1 className="text-white text-4xl text-center font-bold">
          Welcome Back
        </h1>
      </div>
      {/* =========== FORM ========= */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[370px] flex justify-center flex-col gap-4"
      >
        {/* ============== USER NAME FIELD & ERROR MESSAGE =============== */}
        <input
          type="text"
          placeholder="User Name"
          {...register("userName")}
          className="flex-1 p-2 rounded-md outline-none font-medium text-textPrimary bg-greySecondary opacity-50 placeholder:text-textPrimary"
        />
        <p className="text-red-500 text-sm">{errors.userName?.message}</p>

        {/* =========== PASSWORD FIELD & ERROR MESSAGE ============= */}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="flex-1 p-2 rounded-md outline-none font-medium text-textPrimary bg-greySecondary opacity-50 placeholder:text-textPrimary"
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>

        {/* ============ FORM SUBMISSION =============== */}
        <div className="flex justify-center">
          <input
            type="submit"
            className="bg-blueAltSecondary font-semibold py-2 px-12 rounded-md cursor-pointer text-white"
            value={"Log in"}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
