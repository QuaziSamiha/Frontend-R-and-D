import SimpleForms from "./simple-forms/SimpleForms";

const Forms = () => {
  return (
    <section className="flex justify-center items-center bg-stone-50 ">
      <main className="container max-w-7xl py-20">
        <div className="flex flex-col gap-16 justify-center items-center">
          <SimpleForms />
        </div>
      </main>
    </section>
  );
};

export default Forms;
