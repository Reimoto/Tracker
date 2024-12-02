import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ConsumptionLineGraph = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Cannabis Consumption Over Time',
      },
    },
  };

  const chartData = {
    labels: data.map(entry => entry.date),
    datasets: [
      {
        label: 'Amount Consumed',
        data: data.map(entry => entry.amount),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return <Line options={options} data={chartData} />;
};

export default ConsumptionLineGraph;
