import { Link, useParams } from "react-router-dom";
import { useExpansesById } from "../hooks/expenses.api.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function View() {
   const navigate = useNavigate();
  const { expense, getByIdExpanses, deleteByIdExpanses, loading } = useExpansesById();

  const { id } = useParams();

  useEffect(() => {
    getByIdExpanses(id)
  }, []);

  const deleteHandler = () => {
    deleteByIdExpanses(id);
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-8 sm:px-6'>
      {
        loading ? (
          <div className="flex flex-col items-center gap-3 text-indigo-600">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600"></div>
            <p className="font-medium">Loading...</p>
          </div>
        ) : <div key={id} className='flex w-full max-w-md flex-col justify-center rounded-2xl border border-slate-200 bg-white p-5 shadow-xl transition duration-300 hover:shadow-2xl sm:p-7'>
          <div className="m-2 break-words text-2xl font-bold text-slate-800 sm:text-3xl">
            {expense?.title}
          </div>

          <div className="m-2 rounded-xl bg-indigo-50 p-4 text-2xl font-bold text-indigo-700">
            ₹{expense?.amount}
          </div>

          <div className="m-2 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-100 p-3">
            <span className="text-sm text-slate-500">Category</span>
            <span className="break-words font-semibold text-slate-800">
              {expense?.category}
            </span>
          </div>

          <div className="m-2 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-100 p-3">
            <span className="text-sm text-slate-500">Type</span>
            <span className={`rounded-full px-3 py-1 text-sm font-semibold ${expense?.type === "Income" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
              {expense?.type}
            </span>
          </div>

          <p className="m-2 rounded-lg border border-slate-100 p-3 text-base text-slate-700">
            <span className="mb-1 block text-sm text-slate-500">Date</span>
            {new Date(expense?.date).toLocaleDateString("en-IN", {
              timeZone: "UTC",
            })}
          </p>

          <div className="m-2 rounded-lg border border-slate-100 p-3">
            <p className="mb-2 text-sm text-slate-500">Description</p>
            <p className="break-words whitespace-pre-wrap text-base leading-6 text-slate-700">
              {expense?.description}
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button onClick={()=>{
              navigate(`/update/${id}`)
            }} className='w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 sm:w-auto'>Update</button>

            <button onClick={deleteHandler}
              className='w-full rounded-xl bg-red-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 sm:w-auto'>Delete</button>

            <div className="w-full sm:ml-auto sm:w-auto">
              <Link to="/" className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-100 sm:w-auto">
                ← Back Home
              </Link>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default View;