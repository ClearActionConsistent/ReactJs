import { BarChart, XAxis, YAxis, Bar, ResponsiveContainer, Cell } from 'recharts';

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
    ];

    const colors = ['grey', 'blue', 'green', 'orange', 'red', 'red'];

    return (
        //Chart by John
        <ResponsiveContainer minWidth={700} minHeight={500}>
            <BarChart data={data}>
                <Bar dataKey="qty" label={{ fontSize: 20, position: 'top' }} >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} stroke={colors[index]} fill={colors[index]} />
                        ))
                    }
                </Bar>
                <XAxis dataKey="name" />
                <YAxis dataKey="qty" hide="true" />
            </BarChart>

        </ResponsiveContainer>
    );
}

export default ChartComponent;
