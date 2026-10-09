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
// console.log(foodAmount);
  const data = [
    { category: "Food", foodAmount },
    { category: "Travel", travelAmount },
    { category: "Shopping", shoppingAmount },
    { category: "Bills", billsAmount },
    { category: "Education", educationAmount },
    { category: "Entertainment", entertainmentAmount }
  ];

  const colors = [
  "#FF6384", // Food
  "#36A2EB", // Travel
  "#FFCE56", // Shopping
  "#4BC0C0", // Bills
  "#9966FF", // Education
  "#FF9F40", // Entertainment
  "#8BC34A"  // Other
];

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="foodAmount" barSize={50} />
          
          <Bar dataKey="travelAmount" barSize={50} />
          <Bar dataKey="shoppingAmount" barSize={50} />
          <Bar dataKey="billsAmount" barSize={50} />
          <Bar dataKey="educationAmount" barSize={50} />
          <Bar dataKey="entertainmentAmount" barSize={50} />
       
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;