import Link from "next/link";

const Form = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center my-20">
      <Link href={"/"} className="bg-cyan-700 px-6 py-2 rounded-md text-white">
        Go to Home
      </Link>
    </div>
  );
};

export default Form;
