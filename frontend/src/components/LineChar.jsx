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
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={monthlyData}>

        <XAxis dataKey="month" />
        <YAxis />

        <Tooltip />
        <Legend />

        <Line
          type="monotone"
          dataKey="amount"
          stroke="#36A2EB"
          strokeWidth={3}
        />

      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChar;