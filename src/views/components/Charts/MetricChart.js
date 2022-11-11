import { BarChart, XAxis, YAxis, Bar } from 'recharts';

const ChartComponent = (props) => {
    const data = [
        {
            "name": "8",
            "uv": 8
        },
        {
            "name": "6",
            "uv": 6
        },
        {
            "name": "9",
            "uv": 9
        },
        {
            "name": "0",
            "uv": 0
        },
        {
            "name": "25",
            "uv": 25
        },
        {
            "name": "36",
            "uv": 36
        },
        {
            "name": "8",
            "uv": 8
        }
    ]
    return (
        <BarChart width={530} height={550} data={data}>
            <Bar dataKey="name" fill="#82ca9d" />
            <XAxis dataKey="name" />
            <YAxis dataKey="uv" />
        </BarChart>
    );
}

export default ChartComponent;