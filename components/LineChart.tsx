"use client";
// components/SalesPerformanceChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesPerformanceChart: React.FC = () => {
  const salesData: ChartData<"line"> = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40, 70, 75, 85, 90, 100],
        fill: false,
        borderWidth: 2,
        borderColor: "#3626A7",
        tension: 1,
        cubicInterpolationMode: "monotone" as const,
        pointRadius: 0,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // This will hide the legend completely
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: false,
          text: "Sales Amount",
        },
        ticks: {
          display: false, // Hide y-axis labels
          stepSize: 15, // This sets the space between grid lines
        } as any, // Type assertion to avoid TypeScript errors
        max: 100,
        min: 40,
        grid: {
          color: "#F2F3F7", // Changed grid color to light white
        },
      },
      x: {
        title: {
          display: false,
          text: "Month",
        },
        ticks: {
          color: "#7F8492", // Change this to your desired color
        },
        grid: {
          color: "#F2F3F7", // Changed grid color to light white
        },
      },
    },
  };

  return <Line data={salesData} options={options} />;
};

export default SalesPerformanceChart;
