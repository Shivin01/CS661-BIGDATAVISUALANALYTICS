import React from 'react';
import {XAxis, YAxis, ResponsiveContainer, BarChart, Bar} from 'recharts';
import data from './data.json';

const BarGraphMain = () => {
    const updatedData = data.filter(d => d.country === "India").map((item) => {
        return {
            year: item['year'],
            lifeExp: item['lifeExp']
        }
    });

    console.log(updatedData);

    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={updatedData}>
                <XAxis
                    dataKey="year"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                />
                <Bar
                    dataKey="lifeExp"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-primary"
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarGraphMain;