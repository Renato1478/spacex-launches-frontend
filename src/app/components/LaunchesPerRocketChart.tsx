"use client";

import React from "react";

// 1. Import controllers, elements, etc. which you'll use
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from "chart.js";

ChartJS.register(
  PointElement,
  CategoryScale,
  LinearScale,
  LineElement,
  ArcElement,
  Legend,
  Filler,
  Title,
  Tooltip
);

import { Pie } from "react-chartjs-2";

type LaunchesPerRocketChart = {
  data: { labels: string[]; datasets: any[] };
};

const LaunchesPerRocketChart: React.FC<LaunchesPerRocketChart> = ({ data }) => {

  const chartOptions: any = {
    locale: "pt-br",
    borderColor: "rgba(255,255,255,0)",
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  };

  return (
    <div className="h-96">
      <Pie data={data} options={chartOptions} />
    </div>
  );
};

export default LaunchesPerRocketChart;
