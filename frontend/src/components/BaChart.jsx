
import {
    BarChart,
    Bar,
    Tooltip,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from "recharts";

function BaChart() {
    const data = [
        { category: "Food", total: 800 },
        { category: "Pizza", total: 800 },
    ];

    return (
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-md sm:p-6">
            <p className="mb-5 text-xl font-bold text-gray-800">
                Category Comparison
            </p>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={data}
                    margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
                >
                    <XAxis
                        dataKey="category"
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
                            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        }}
                    />
                    <Bar
                        dataKey="total"
                        barSize={30}
                        fill="#3B82F6"
                        radius={[6, 6, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BaChart;
