"use client";

import { ReactNode, createContext } from "react";

import { useQuery } from "react-query";

import { fetchLaunchesData, fetchStatsData } from "../services/LaunchService";

interface Props {
  children: ReactNode;
}

interface LaunchContextProps {
  launches: {
    data: any;
    isLoading: boolean;
    error: any;
  };
  launchStats: {
    data: {
      launchesByRocket: {
        [key: string]: number;
      };
      launchesByYear: {
        [key: string]: {
          [key: string]: number;
        };
      };
      launchesBySuccess: {
        success: number;
        failure: number;
      };
    };
    isLoading: boolean;
    error: any;
  };
}

export const LaunchContext = createContext<LaunchContextProps>({
  launches: {
    data: {},
    isLoading: false,
    error: null,
  },
  launchStats: {
    data: {
      launchesByRocket: {},
      launchesByYear: {},
    },
    isLoading: false,
    error: null,
  },
});

export const LaunchContextProvider = ({ children }: Props) => {
  const launchesQuery = useQuery("launches", fetchLaunchesData);
  const launchStatsQuery = useQuery("launchesStats", fetchStatsData);

  return (
    <LaunchContext.Provider
      value={{
        launches: {
          isLoading: launchesQuery.isLoading,
          error: launchesQuery.error,
          data: launchesQuery.data,
        },
        launchStats: {
          isLoading: launchStatsQuery.isLoading,
          error: launchStatsQuery.error,
          data: launchStatsQuery.data,
        },
      }}
    >
      {children}
    </LaunchContext.Provider>
  );
};
