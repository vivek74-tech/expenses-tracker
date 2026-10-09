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
        <div>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip/>
                    <Bar dataKey="total" barSize={30} />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}

export default BaChart

