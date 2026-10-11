import axios from "axios";
// import {useExpanses} from "../hooks/expenses.api.js"
// agar components ko rerender karna chahate hai to hamesa data or state parent ke through bhej naho ga
function UpperLayer({summary,loading}) {
   
  const {totalIncome,totalExpenses,balance} = summary;

  return (
    <div className="border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {
      loading?<h1 className="mx-auto max-w-2xl animate-pulse text-center text-xl font-semibold text-indigo-600 sm:text-3xl">Loading.....</h1>:<div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-md shadow-green-100/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-2xl text-green-700">
              ↗
            </div>
            <h2 className="text-sm font-semibold text-slate-500 sm:text-base">
              Total Income
            </h2>
          </div>
          <p className="break-words text-2xl font-bold text-green-600 sm:text-3xl">
            ₹{totalIncome}
          </p>
          <p className="mt-2 text-sm text-slate-400">Your total earnings</p>
        </div>

        <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-md shadow-red-100/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-2xl text-red-700">
              ↘
            </div>
            <h2 className="text-sm font-semibold text-slate-500 sm:text-base">
              Total Expense
            </h2>
          </div>
          <p className="break-words text-2xl font-bold text-red-600 sm:text-3xl">
            ₹{totalExpenses}
          </p>
          <p className="mt-2 text-sm text-slate-400">Your total spending</p>
        </div>

        <div className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-md shadow-indigo-100/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:col-span-2 sm:p-6 lg:col-span-1">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-2xl text-indigo-700">
              ₹
            </div>
            <h2 className="text-sm font-semibold text-slate-500 sm:text-base">
              Balance
            </h2>
          </div>
          <p className={`break-words text-2xl font-bold sm:text-3xl ${balance >= 0 ? "text-indigo-600" : "text-red-600"}`}>
            ₹{balance}
          </p>
          <p className="mt-2 text-sm text-slate-400">Your available balance</p>
        </div>
      </div>}

    </div>
  )
}

export default UpperLayer;