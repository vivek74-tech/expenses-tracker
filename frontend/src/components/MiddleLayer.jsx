
import { useState } from "react";

function MiddleLayer({ createExpanses }) {
 
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      amount,
      category,
      type,
      date
    }
    
    createExpanses(formData);
  }

  return (
    <div className="px-4 pb-8 pt-5 sm:px-6">
      <p className="mb-6 ml-1 text-2xl font-bold text-gray-800 sm:text-3xl">
        Add Transaction
      </p>

      <div>
        <form
          onSubmit={submitHandler}
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-5 gap-y-2 rounded-xl border border-gray-200 bg-white p-5 shadow-md sm:grid-cols-2 sm:p-7"
        >
          <label className="self-center text-sm font-semibold text-gray-700">
            Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
            className="m-2 rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <label className="self-center text-sm font-semibold text-gray-700">
            Description
          </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            value={description}
            className="m-2 rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <label className="self-center text-sm font-semibold text-gray-700">
            Amount
          </label>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            className="m-2 rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <label className="self-center text-sm font-semibold text-gray-700">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="m-2 rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Education</option>
            <option>Entertainment</option>
            <option>Other</option>
          </select>

          <label className="self-center text-sm font-semibold text-gray-700">
            Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="m-2 rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option>Income</option>
            <option>Expense</option>
          </select>

          <label className="self-center text-sm font-semibold text-gray-700">
            Date
          </label>
          <input
            onChange={(e) => setDate(e.target.value)}
            text="date"
            value={date}
            className="m-2 rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <button
            type="submit"
            className="m-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-700 hover:shadow-md active:scale-95 sm:col-span-2"
          >
            Add Transaction +
          </button>
        </form>
      </div>
    </div>
  )
}

export default MiddleLayer
