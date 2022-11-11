import { BarChart, XAxis, YAxis, Bar, ResponsiveContainer } from 'recharts';

const ChartComponent = () => {
    const data = [
        {
            'name': 'Calories',
            'qty': 3
        },
        {
            'name': 'Splat Points',
            'qty': 10
        },
        {
            'name': 'AVG. Heart Rate',
            'qty': 90
        },
        {
            'name': 'MAX Heart Rate',
            'qty': 116
        },
        {
            'name': 'Steps',
            'qty': 20
        },
        {
            'name': 'Miles',
            'qty': 36
        }
    ]
    return (
        <ResponsiveContainer minWidth={700} minHeight={500}>
            <BarChart data={data}>
                <Bar dataKey='qty' fill='#82ca9d' label={{ fill: 'red', fontSize: 20 }} />
                <XAxis dataKey='name' />
                <YAxis dataKey='qty' hide='true' />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default ChartComponent;