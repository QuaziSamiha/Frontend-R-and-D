import Link from "next/link";
import Form1 from "./form1/Form1";
import Form2 from "./form2/Form2";

const SimpleForms = () => {
  return (
    <>
      <section className="flex flex-col gap-16 w-full">
        <Link
          href={"/"}
          className="bg-sky-700 px-6 py-2 rounded-md text-white w-fit"
        >
          Back to Home
        </Link>
        <p className="text-2xl font-bold text-slate-700 text-center">
          Simple Forms
        </p>
        <Form1 />
        <Form2 />
      </section>
    </>
  );
};

export default SimpleForms;
