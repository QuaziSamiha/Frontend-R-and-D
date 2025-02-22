import Image from "next/image";
import { ImagesSlider } from "../ui/images-slider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./LoginForm";

const imgData = [
  "/images/login/2.jpeg",
  "/images/login/3.jpg",
  "/images/login/1.jpg",
  "/images/login/4.jpg",
];

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-[65%,35%] h-screen">
        {/* ========= LEFT CONTENT (IMAGE SLIDER) ========== */}
        <div className="hidden xl:flex flex-1 justify-center items-center">
          <ImagesSlider overlay={false} images={imgData} autoplay={true} />
        </div>
        {/* ============ RIGHT CONTENT (LOGIN FORM) ============= */}
        <div className="flex justify-center items-center bg-bgPrimary relative w-full">
          <div className="absolute right-0 bottom-0 z-0 w-full">
            <Image
              src="/images/login/footerImg.png"
              alt="exclude"
              priority
              width={500}
              height={356}
              className="w-full"
            />
          </div>
          <div className="z-10">
            <LoginForm />
          </div>
        <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Home;
