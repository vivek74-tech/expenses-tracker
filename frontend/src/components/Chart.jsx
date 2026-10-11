
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer
} from "recharts";

function Chart({ categoryData }) {
  const {
    foodAmount,
    travelAmount,
    shoppingAmount,
    billsAmount,
    educationAmount,
    entertainmentAmount
  } = categoryData;

  const data = [
    { category: "Food", foodAmount },
    { category: "Travel", travelAmount },
    { category: "Shopping", shoppingAmount },
    { category: "Bills", billsAmount },
    { category: "Education", educationAmount },
    { category: "Entertainment", entertainmentAmount }
  ];

  const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
    "#8BC34A"
  ];

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-md sm:p-6">
      <p className="mb-5 text-xl font-bold text-gray-800">
        Expenses by Category
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -15, bottom: 5 }}
        >
          <XAxis
            dataKey="category"
            tick={{ fill: "#4B5563", fontSize: 11 }}
            axisLine={{ stroke: "#D1D5DB" }}
            tickLine={false}
            interval={0}
            angle={-15}
            textAnchor="end"
            height={55}
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
          />

          <Bar dataKey="foodAmount" barSize={30} fill={colors[0]} radius={[5, 5, 0, 0]} />
          <Bar dataKey="travelAmount" barSize={30} fill={colors[1]} radius={[5, 5, 0, 0]} />
          <Bar dataKey="shoppingAmount" barSize={30} fill={colors[2]} radius={[5, 5, 0, 0]} />
          <Bar dataKey="billsAmount" barSize={30} fill={colors[3]} radius={[5, 5, 0, 0]} />
          <Bar dataKey="educationAmount" barSize={30} fill={colors[4]} radius={[5, 5, 0, 0]} />
          <Bar dataKey="entertainmentAmount" barSize={30} fill={colors[5]} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
