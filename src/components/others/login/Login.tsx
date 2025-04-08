"use client";

import Image from "next/image";
import LoginForm from "./LoginForm";

export default function Login() {
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<LoginFormData>({
//     resolver: zodResolver(loginSchema),
//   });

//   const { mutate: login, isPending } = useAuth(() => {
//     reset();
//     router.push("/dashboard");
//   });

//   const onSubmit: SubmitHandler<LoginFormData> = (data) => {
//     login(data);
//   };

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
    <div className="flex h-screen">
      {/* Left Content */}
      <div className="flex-1 flex justify-center items-center bg-white relative">
        <div className="absolute left-0 bottom-0 z-0">
          <Image
            src="/images/login/Exclude.png"
            alt="exclude"
            priority
            width={334}
            height={323}
            className="w-auto h-[323px]"
          />
        </div>
        <div className="z-10">
          <LoginForm />
        </div>
      </div>

      {/* Right Content */}
      <div
        className="hidden xl:flex flex-1 justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/login/rightContent.png')" }}
      >
        <div className="flex flex-col gap-8">
          <div>
            <Image
              src="/images/login/iconsGroup.png"
              width={537}
              height={408}
              priority
              alt="icons"
              className="w-auto h-[408px]"
            />
          </div>
          <p className="text-center text-4xl leading-10 text-whitePrimary font-bold">
            PROCUREMENT <br /> MANAGEMENT SYSTEM
          </p>
        </div>
      </div>

      {/* <ToastContainer /> */}
    </div>
  );
}
