import PrimaryButton from "@/components/share/button/PrimaryButton";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full max-lg:h-screen max-lg:bg-primaryBlue">
      <Image
        src={"/images/home/Hero Section.png"}
        alt="Background"
        width={1920}
        height={1047}
        className="w-full h-full max-lg:hidden"
      />
      <div className="absolute inset-0 flex justify-center max-lg:h-screen max-lg:items-center">
        <div className="container w-full">
          <div className="w-full flex flex-col justify-center items-center max-xl:gap-4 gap-10">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white text-center uppercase mt-10 md:mt-10 xl:mt-20 2xl:mt-36">
              ATI Procurement <br /> Management System
            </h1>
            <p className="text-center text-xs md:text-xl text-whiteAltSecondary">
              Streamline your purchasing with ATI Procurement Management
              System—enhancing efficiency, <br /> transparency, and control.
            </p>
            <Link href="/login">
              <PrimaryButton label="Log In" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
