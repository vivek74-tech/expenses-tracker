
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function LowerLayer({ expenses, deleteExpanses }) {
  const [search, setSearch] = useState("");
  const [allData, setData] = useState([]);

  const navigate = useNavigate();

  const filterdata = expenses?.filter((item) =>
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
      <p className="mb-6 ml-1 text-2xl font-black text-gray-800 sm:ml-7 sm:text-3xl">
        Transactions
      </p>

      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <label className="px-2 py-2 text-base font-semibold text-gray-700 sm:m-4 sm:text-lg">
          Category
        </label>

        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          value={search}
          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-medium text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:mr-3 sm:w-80"
        />
      </div>

      {filterdata?.map((item) => {
        return (
          <div
            key={item._id}
            className="mx-auto mb-4 grid max-w-6xl grid-cols-1 items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:grid-cols-2 lg:grid-cols-7 lg:gap-4"
          >
            <div className="break-words font-semibold text-gray-800">
              {item.title}
            </div>

            <div className="font-bold text-gray-800">
              ₹{item.amount}
            </div>

            <div>
              <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                {item.category}
              </span>
            </div>

            <div
              className={`font-semibold ${
                item.type === "Income"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {item.type}
            </div>

            <p className="text-sm text-gray-500">
              {new Date(item.date).toLocaleDateString("en-IN", {
                timeZone: "UTC",
              })}
            </p>

            <div className="break-words text-sm text-gray-600">
              {item.description}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  navigate(`/view/${item._id}`);
                }}
                className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white transition hover:bg-green-700 active:scale-95"
              >
                View
              </button>

              <button
                onClick={() => {
                  deleteExpanses(item._id);
                }}
                className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600 active:scale-95"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LowerLayer;
