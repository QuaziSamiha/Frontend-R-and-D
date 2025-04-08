import PrimaryButton from "@/components/share/button/PrimaryButton";
import Link from "next/link";

export default function Simplify() {
  return (
    <section className="flex flex-col items-center py-10 lg:py-20 bg-blackSecondary">
      <div className="flex flex-col items-center gap-10">
        <h1 className=" text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-lightAltBlue">
          Ready to Simplify Your Procurement Process?
        </h1>
        <p className="text-white text-center">
          Join countless businesses in optimizing their procurement workflow
          with our cutting-edge system. Streamline, automate, <br /> and gain
          full control over your entire procurement cycle.
        </p>
        <Link href="/login">
          <PrimaryButton label="Get Start Now" />
        </Link>
      </div>
    </section>
  );
}
