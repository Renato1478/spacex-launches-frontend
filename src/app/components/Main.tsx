"use client";

import { QueryClient, QueryClientProvider } from "react-query";

// ** Components
import LaunchesPerYear from "@/app/components/LaunchesPerYear";
import LaunchesHistory from "@/app/components/LaunchesHistory";
import LaunchesPerRocket from "@/app/components/LaunchesPerRocket";

// ** Launch Context
import { LaunchContextProvider } from "../context/LaunchContext";

const queryClient = new QueryClient();

export default function Main() {
  return (
    <div className="wrapper mt-4">
      <div className="flex flex-col gap-4">
        <QueryClientProvider client={queryClient}>
          <LaunchContextProvider>
            <div className="flex gap-4 max-md:flex-col">
              <LaunchesPerRocket />
              <LaunchesPerYear />
            </div>
            <LaunchesHistory />
          </LaunchContextProvider>
        </QueryClientProvider>
      </div>
    </div>
  );
}
