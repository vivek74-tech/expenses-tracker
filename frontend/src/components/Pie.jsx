import React from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function ExpensePieChart() {

  const categoryData = [
    { category: "Food", amount: 1200 },
    { category: "Travel", amount: 800 },
    { category: "Shopping", amount: 1500 },
    { category: "Bills", amount: 700 },
    { category: "Education", amount: 500 },
    { category: "Entertainment", amount: 900 },
    { category: "Other", amount: 400 }
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
    <div>

      <ResponsiveContainer width="100%" height={300}>

        <PieChart>

          <Pie
            data={categoryData}
            dataKey="amount"
            nameKey="category"
            outerRadius={100}
          >
            {categoryData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default ExpensePieChart;