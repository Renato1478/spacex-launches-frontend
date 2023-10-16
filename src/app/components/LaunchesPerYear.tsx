import React, { useContext } from "react";
import SectionTitle from "@/@core/components/SectionTitle";
import { CalendarIcon } from "@/@core/components/icons";
import LaunchesPerYearChart from "./LaunchesPerYearChart";
import { LaunchContext } from "../context/LaunchContext";

export default function LaunchesPerRocket() {
  const {
    launchStats: { data },
  } = useContext(LaunchContext);

  const launchesByYear = data?.launchesByYear || {};

  const chartLabels = launchesByYear ? Object.keys(launchesByYear) : [];

  const chartData: any = [];
  // Obtenha uma lista de todos os foguetes disponíveis
  const rockets = Array.from(
    new Set(
      Object.values(launchesByYear).flatMap((yearData) => Object.keys(yearData))
    )
  );

  // Itere pelos foguetes
  rockets.forEach((rocket, index) => {
    const data = [];

    // Itere pelos anos e preencha os dados para o foguete atual
    for (const year in launchesByYear) {
      const launches = launchesByYear[year];
      data.push(launches[rocket] || 0);
    }

    // Defina a cor do gráfico com base no índice do foguete (pode personalizar as cores conforme desejado)
    const backgroundColors = [
      "rgb(255, 99, 132)",
      "rgb(54, 162, 235)",
      // Adicione mais cores conforme necessário
    ];

    chartData.push({
      label: rocket,
      data: data,
      backgroundColor: backgroundColors[index % backgroundColors.length],
    });
  });

  return (
    <div className="bg-white bg-opacity-5 text-white w-full flex flex-col py-6 px-4 rounded-md">
      <SectionTitle text="LANÇAMENTOS POR FOGUETE" icon={<CalendarIcon />} />
      <LaunchesPerYearChart
        data={{
          labels: chartLabels, // Anos
          datasets: chartData,
        }}
      />
    </div>
  );
}