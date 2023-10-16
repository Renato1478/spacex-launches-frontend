import React from "react";
import SectionTitle from "@/@core/components/SectionTitle";
import { CalendarIcon } from "@/@core/components/icons";
import LaunchesPerYearChart from "./LaunchesPerYearChart";

const barChartData = {
  labels: ["2021", "2022", "2023"], // Anos
  datasets: [
    {
      label: "Rocket A",
      data: [10, 15, 12], // Quantidade de lançamentos por ano para Rocket A
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Rocket B",
      data: [8, 12, 14], // Quantidade de lançamentos por ano para Rocket B
      backgroundColor: "rgb(54, 162, 235)",
    },
    // Adicione os outros foguetes com seus respectivos dados
  ],
};

export default function LaunchesPerRocket() {
  return (
    <div className="bg-white bg-opacity-5 text-white w-full flex flex-col py-6 px-4 rounded-md">
      <SectionTitle text="LANÇAMENTOS POR FOGUETE" icon={<CalendarIcon />} />
      <LaunchesPerYearChart title="Lançamentos por Ano" data={barChartData} />
    </div>
  );
}
