import SimpleForms from "./simple-forms/SimpleForms";

const Forms = () => {
  return (
    <>
      <section className="flex justify-center items-center bg-stone-50 ">
        <main className="container max-w-7xl py-20">
          <div className="flex flex-col gap-16 justify-center items-center">
            <SimpleForms />
          </div>
        </main>
      </section>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            {/* <UserPlus className="w-8 h-8 text-teal-400" /> */}
            <h1 className="text-2xl font-bold text-white">
              New Employee & Cashier
            </h1>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-teal-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="Enter full name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="store"
                className="block text-sm font-medium text-teal-300"
              >
                Store
              </label>
              <div className="relative">
                <select
                  id="store"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                >
                  <option value="">Select store</option>
                  <option value="store1">Store 1</option>
                  <option value="store2">Store 2</option>
                </select>
                {/* <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-400 pointer-events-none" /> */}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-teal-300 mb-3">
                Employee Type
              </label>
              <div className="flex gap-4">
                {["Cashier", "Employee", "Admin"].map((type) => (
                  <label key={type} className="flex-1 relative">
                    <input
                      type="radio"
                      name="employeeType"
                      value={type.toLowerCase()}
                      className="peer sr-only"
                    />
                    <div className="w-full text-center px-4 py-3 rounded-xl border border-slate-700 cursor-pointer text-slate-300 hover:bg-slate-800/50 transition-all peer-checked:bg-teal-500/20 peer-checked:border-teal-400 peer-checked:text-white">
                      {type}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium rounded-xl hover:from-teal-600 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 shadow-lg shadow-teal-500/25"
            >
              Save
            </button>
          </form>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-50 rounded-xl">
              {/* <UserPlus className="w-7 h-7 text-blue-600" /> */}
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 text-transparent bg-clip-text">
              New Employee & Cashier
            </h1>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter full name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="store"
                className="block text-sm font-medium text-gray-700"
              >
                Store
              </label>
              <div className="relative">
                <select
                  id="store"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 appearance-none 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select store</option>
                  <option value="store1">Store 1</option>
                  <option value="store2">Store 2</option>
                </select>
                {/* <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" /> */}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Employee Type
              </label>
              <div className="flex gap-3">
                {["Cashier", "Employee", "Admin"].map((type) => (
                  <label key={type} className="flex-1 relative">
                    <input
                      type="radio"
                      name="employeeType"
                      value={type.toLowerCase()}
                      className="peer sr-only"
                    />
                    <div
                      className="w-full text-center px-4 py-3 rounded-xl border border-gray-200 cursor-pointer text-gray-600 
                    bg-gray-50 hover:bg-gray-100 transition-all 
                    peer-checked:bg-blue-50 peer-checked:border-blue-200 peer-checked:text-blue-700"
                    >
                      {type}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium rounded-xl 
              hover:from-blue-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
              transition-all duration-200 shadow-lg shadow-blue-500/25"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forms;
