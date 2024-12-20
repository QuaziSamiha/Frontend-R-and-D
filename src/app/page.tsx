// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link href={"/form"}>
          <button className="bg-sky-700 px-6 py-2 rounded-md text-white w-fit">
            See All Forms
          </button>
        </Link>
        <Link href={"/form/simple-forms"}>
          <button className="bg-sky-700 px-6 py-2 rounded-md text-white w-fit">
            Simple Form&apos;s Demos
          </button>
        </Link>
      </main>
    </div>
  );
}
