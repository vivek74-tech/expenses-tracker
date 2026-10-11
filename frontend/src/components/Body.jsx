
import Navbar from "./Navbar";
import UpperLayer from "./UpperLayer";
import MiddleLayer from "./MiddleLayer";
import LowerLayer from "./LowerLayer";
import { useExpanses } from "../hooks/expenses.api.js";
import Chart from "../components/Chart.jsx";
import Pie from "./Pie.jsx";
import BaChart from "./BaChart.jsx";
import LineChar from "./LineChar.jsx";

function Body() {
  const {
    expenses,
    createExpanses,
    deleteExpanses,
    summary,
    loading,
    categoryData
  } = useExpanses();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <Navbar />
      </div>

      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <LineChar />
        </div>

        {/* <BaChart/> */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <Chart categoryData={categoryData} />
          </div>

          <div className="min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <Pie />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <UpperLayer summary={summary} loading={loading} />
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <MiddleLayer createExpanses={createExpanses} />
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <LowerLayer
            expenses={expenses}
            deleteExpanses={deleteExpanses}
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
