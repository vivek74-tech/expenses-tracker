
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function LineChar() {
  const monthlyData = [
    { month: "Jan", amount: 3000 },
    { month: "Feb", amount: 4500 },
    { month: "Mar", amount: 3200 },
    { month: "Apr", amount: 5000 },
    { month: "May", amount: 4200 }
  ];

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-md sm:p-6">
      <p className="mb-5 text-xl font-bold text-gray-800">
        Monthly Expenses
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={monthlyData}
          margin={{ top: 10, right: 15, left: -10, bottom: 5 }}
        >
          <XAxis
            dataKey="month"
            tick={{ fill: "#4B5563", fontSize: 12 }}
            axisLine={{ stroke: "#D1D5DB" }}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#4B5563", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
            }}
            formatter={(value) => [`₹${value}`, "Amount"]}
          />

          <Legend />

          <Line
            type="monotone"
            dataKey="amount"
            stroke="#36A2EB"
            strokeWidth={3}
            dot={{ r: 4, fill: "#36A2EB" }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChar;
