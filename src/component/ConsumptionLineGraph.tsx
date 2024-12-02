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

interface Entry {
  id: number;
  menge: number;
  datum: string;
  uhrzeit: string;
  sorte: string;
  stimmung: string;
  wer: string;
  konsumform: string;
}

interface ConsumptionLineGraphProps {
  data: Entry[];
}

const ConsumptionLineGraph: React.FC<ConsumptionLineGraphProps> = ({ data }) => {
  // Sort entries by date
  const sortedData = [...data].sort((a, b) => new Date(a.datum).getTime() - new Date(b.datum).getTime());

  // Group entries by date and sum up the amounts
  const dailyConsumption = sortedData.reduce((acc, entry) => {
    const date = entry.datum;
    if (!acc[date]) {
      acc[date] = 0;
    }
    acc[date] += entry.menge;
    return acc;
  }, {} as Record<string, number>);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Daily Cannabis Consumption',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Amount (g)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      }
    }
  };

  const chartData = {
    labels: Object.keys(dailyConsumption),
    datasets: [
      {
        label: 'Daily Consumption (g)',
        data: Object.values(dailyConsumption),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3
      },
    ],
  };

  return <Line options={options} data={chartData} />;
};

export default ConsumptionLineGraph;
