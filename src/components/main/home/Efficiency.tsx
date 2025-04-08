import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

export default function Efficiency() {
  return (
    <section className="container">
      <div className="flex justify-center items-center py-32 max-lg:py-12">
        <div className="flex flex-col lg:flex-row-reverse justify-between lg:gap-x-24 xl:gap-x-32 max-w-7xl">
          <div className="basis-1/2">
            <Image
              width={526}
              height={403}
              src="/images/home/Frame 33664.png"
              alt="image"
              className="w-full"
            />
          </div>
          <div className="basis-1/2">
            <div className="py-8 flex flex-col gap-6 md:gap-8 lg:gap-14 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
              <p className="text-primaryBlue text-lg font-semibold">
                Boost Efficiency
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl  font-semibold text-center lg:text-start ">
                Seamless Requisition and <br /> Order Management
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <FaCircleCheck color="#00A88E" />
                  Automated requisition receipt and verification
                </div>
                <div className="flex items-center gap-2">
                  <FaCircleCheck color="#00A88E" />
                  Quick confirmation and approval process
                </div>
                <div className="flex items-center gap-2">
                  <FaCircleCheck color="#00A88E" />
                  Easy generation of purchase and work orders
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
