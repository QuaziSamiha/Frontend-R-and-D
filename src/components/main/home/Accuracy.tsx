import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

export default function Accuracy() {
  return (
    <section className="bg-greyAltTernary">
      <div className="container">
        <div className="flex justify-center items-center py-32 max-lg:py-12">
          <div className="flex flex-col lg:flex-row justify-between lg:gap-x-24 xl:gap-x-32 max-w-7xl">
            <div className="basis-1/2">
              <Image
                width={526}
                height={403}
                src="/images/home/Frame 427320603.png"
                alt="image"
                className="w-full"
              />
            </div>
            <div className="basis-1/2 py-8 flex flex-col gap-6 md:gap-8 lg:gap-14  max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
              <p className="text-primaryBlue text-lg font-semibold">
                Enhance Accuracy
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center lg:text-start ">
                Efficient Delivery & Invoice <br /> Handling
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <FaCircleCheck color="#00A88E" />
                  Real-time tracking of product deliveries
                </div>
                <div className="flex items-center gap-2">
                  <FaCircleCheck color="#00A88E" />
                  Streamlined management of invoices and challans
                </div>
                <div className="flex items-center gap-2">
                  <FaCircleCheck color="#00A88E" />
                  Ensures all billing documents are accurately recorded
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
