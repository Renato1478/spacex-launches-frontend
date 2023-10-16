import React from "react";

import SectionTitle from "@/@core/components/SectionTitle";
import StatsCard from "@/@core/components/StatsCard";
import { RocketIcon } from "@/@core/components/icons";

import LaunchesPerRocketChart from "./LaunchesPerRocketChart";

const pieChartData = {
  labels: ["Rocket A", "Rocket B", "Rocket C", "Rocket D", "Rocket E"],
  data: [30, 20, 15, 10, 25],
};

export default function LaunchesPerRocket() {
  return (
    <div className="bg-white bg-opacity-5 text-white w-full flex flex-col py-6 px-4 rounded-md">
      <SectionTitle text="LANÇAMENTOS POR FOGUETE" icon={<RocketIcon />} />
      <LaunchesPerRocketChart title="Lançamentos por Foguete" data={pieChartData} />
      <div className="flex gap-4">
        <StatsCard text="Falha" statsValue={6} className="bg-orange-800" />
        <StatsCard text="Sucesso" statsValue={181} className="bg-green-500" />
      </div>
    </div>
  );
}
