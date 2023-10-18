"use client";

import { ReactNode, createContext, useState } from "react";

import { useQuery } from "react-query";

import { fetchLaunchesData, fetchStatsData } from "../services/LaunchService";

interface Props {
  children: ReactNode;
}

interface LaunchContextProps {
  launches: any;
  launchStats: any;
  rocketColors: RocketColorProps;
  paginationOptions: {
    limit: number;
    setLimit: (limit: number) => void;
    page: number;
    setPage: (page: number) => void;
  };
}

interface RocketColorProps {
  [rocketName: string]: string;
}

export const LaunchContext = createContext<LaunchContextProps>({
  launches: {
    data: {
      results: [],
    },
    isLoading: false,
    error: null,
    currentPage: 1,
    itemsPerPage: 10,
  },
  launchStats: {
    data: {
      launchesByRocket: {},
      launchesByYear: {},
      launchesBySuccess: {
        success: 0,
        failure: 0,
      },
    },
    isLoading: false,
    error: null,
  },
  rocketColors: {},
  paginationOptions: {
    limit: 10,
    setLimit: (limit) => {},
    page: 1,
    setPage: (page) => {},
  },
});

export const LaunchContextProvider = ({ children }: Props) => {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const launchesQuery = useQuery(
    ["launches", { page, limit }],
    fetchLaunchesData
  );
  const launchStatsQuery = useQuery("launchesStats", fetchStatsData);

  let rockets: string[] = [];
  if (launchStatsQuery.data?.launchesByRocket)
    rockets = Object.keys(launchStatsQuery.data.launchesByRocket).sort();

  const possibleColors = [
    "#F2F2F2",
    "#894D23",
    "#828282",
    "#BE682C",
    "#4C220A",
    "#a38787",
  ];
  let rocketColors: RocketColorProps = {};
  rockets?.map((rocketName, index) => {
    rocketColors[rocketName] = possibleColors[index % possibleColors.length];
  });

  return (
    <LaunchContext.Provider
      value={{
        launches: launchesQuery,
        launchStats: launchStatsQuery,
        rocketColors,
        paginationOptions: {
          limit,
          setLimit,
          page,
          setPage,
        },
      }}
    >
      {children}
    </LaunchContext.Provider>
  );
};
