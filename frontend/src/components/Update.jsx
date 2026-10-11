import { useState } from "react";
import { useExpansesById } from "../hooks/expenses.api.js";
import { Link, useParams } from "react-router-dom";
import { useExpanses } from "../hooks/expenses.api.js";

function Update() {
  const { changeExpanses } = useExpansesById();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const { id } = useParams();
  const { getSummary } = useExpanses();

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      amount,
      category,
      type,
      date
    };
    changeExpanses(id, formData);
    getSummary();
  };

  return (
    <div className="min-h-screen border-t border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-8 sm:px-6 lg:py-12">
      <p className="mx-auto mb-6 max-w-2xl text-2xl font-bold text-slate-800 sm:text-3xl">
        Update Transaction
        <span className="mt-2 block text-sm font-normal text-slate-500">
          Edit your transaction details below
        </span>
      </p>

      <div>
        <form
          onSubmit={submitHandler}
          className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-x-5 gap-y-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-indigo-100/50 sm:grid-cols-2 sm:p-8"
        >
          <label className="self-center text-sm font-semibold text-slate-700">
            Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
            placeholder="Enter transaction title"
            className="m-1 min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />

          <label className="self-center text-sm font-semibold text-slate-700">
            Description
          </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            value={description}
            placeholder="Add a description"
            rows="3"
            className="m-1 min-w-0 resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />

          <label className="self-center text-sm font-semibold text-slate-700">
            Amount (₹)
          </label>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            placeholder="Enter amount"
            className="m-1 min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />

          <label className="self-center text-sm font-semibold text-slate-700">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="m-1 min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          >
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Education</option>
            <option>Entertainment</option>
            <option>Other</option>
          </select>

          <label className="self-center text-sm font-semibold text-slate-700">
            Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="m-1 min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          >
            <option>Income</option>
            <option>Expense</option>
          </select>

          <label className="self-center text-sm font-semibold text-slate-700">
            Date
          </label>
          <input
            onChange={(e) => setDate(e.target.value)}
            text="date"
            value={date}
            className="m-1 min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />

          <div className="mt-3 flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:w-auto"
            >
              Update Transaction
            </button>

            <span className="text-center text-sm font-medium text-indigo-600 transition hover:text-indigo-800 sm:ml-auto">
              <Link to={`/view/${id}`} className="inline-block rounded-lg px-3 py-2">
                ← Back to view page
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;