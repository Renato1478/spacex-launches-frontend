import React, { useContext } from "react";

import SectionTitle from "@/@core/components/SectionTitle";
import StatsCard from "@/@core/components/StatsCard";
import { RocketIcon } from "@/@core/components/icons";

import LaunchesPerRocketChart from "./LaunchesPerRocketChart";
import { LaunchContext } from "../context/LaunchContext";

export default function LaunchesPerRocket() {
  const {
    launchStats: { data },
  } = useContext(LaunchContext);

  const launchesByRocket = data?.launchesByRocket || {};
  const launchesBySuccess = data?.launchesBySuccess || {};

  const chartLabels = launchesByRocket ? Object.keys(launchesByRocket) : [];
  const chartData = launchesByRocket ? Object.values(launchesByRocket) : [];

  return (
    <div className="bg-white bg-opacity-5 text-white w-full flex flex-col py-6 px-4 rounded-md">
      <SectionTitle text="LANÇAMENTOS POR FOGUETE" icon={<RocketIcon />} />
      <LaunchesPerRocketChart
        data={{
          labels: chartLabels,
          data: chartData,
        }}
      />
      <div className="flex gap-4">
        <StatsCard
          text="Falha"
          statsValue={launchesBySuccess.failure}
          className="bg-orange-800"
        />
        <StatsCard
          text="Sucesso"
          statsValue={launchesBySuccess.success}
          className="bg-green-500"
        />
      </div>
    </div>
  );
}
