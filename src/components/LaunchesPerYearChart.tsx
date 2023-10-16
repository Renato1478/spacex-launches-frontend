"use client";

import React from "react";

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
  BarElement,
} from "chart.js";

ChartJS.register(
  PointElement,
  CategoryScale,
  LinearScale,
  LineElement,
  ArcElement,
  BarElement,
  Legend,
  Filler,
  Title,
  Tooltip
);

import { Bar } from "react-chartjs-2"; // Certifique-se de que você tenha instalado o pacote react-chartjs-2

interface LaunchesPerYearChartProps {
  title: string;
  data: {
    labels: string[]; // Anos
    datasets: {
      label: string; // Nome do foguete
      data: number[]; // Quantidade de lançamentos por ano
      backgroundColor: string; // Cor da barra do gráfico
    }[];
  };
}

const LaunchesPerYearChart: React.FC<LaunchesPerYearChartProps> = ({
  title,
  data,
}) => {
  const chartOptions = {
    locale: "pt-br",
    borderColor: "rgba(255,255,255,0)",
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true, // Barras empilhadas horizontalmente
      },
      y: {
        stacked: true, // Barras empilhadas verticalmente
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="h-full pt-8">
      <Bar data={data} options={chartOptions} />
    </div>
  );
};

export default LaunchesPerYearChart;
