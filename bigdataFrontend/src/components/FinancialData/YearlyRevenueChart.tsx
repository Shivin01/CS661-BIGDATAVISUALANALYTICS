import React from 'react';
import { Line } from 'react-chartjs-2';
import revenues from './Data/Yearly_Revenues.json';

const YearlyRevenueChart = () => {
  const data = {
    labels: revenues.map((item) => item.Year.toString()),
    datasets: [
      {
        label: 'Indigo',
        data: revenues.map((item) => item.Indigo),
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'SpiceJet',
        data: revenues.map((item) => item.SpiceJet),
        fill: true,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'Yearly Revenue of Airlines',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} />;
};

export default YearlyRevenueChart;
