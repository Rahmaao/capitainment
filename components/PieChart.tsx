// components/PieChart.tsx
"use client";
// components/PieChart.tsx
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Title, Tooltip, Legend);

const data = {
  labels: ['Food', 'Fashion', 'Reels', 'Entertainment'],
  datasets: [
    {
      data: [20, 20, 30, 30],
      backgroundColor: ['#F78E4C', '#67BC93', '#6160DC', '#332525'],
      borderWidth: 0,
    },
  ],
};

const options = {
  cutout: '75%', // Adjust the thickness of the doughnut
  plugins: {
    legend: {
      labels: {
        // Custom legend item
        boxWidth: 20, // Width of the legend box
        boxHeight: 20, // Height of the legend box
        usePointStyle: true, // Use a point style for legend items
      },
    },
  },
};

export default function PieChart() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Doughnut data={data} options={options} />
    </div>
  );
}
