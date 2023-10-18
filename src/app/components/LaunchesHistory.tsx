"use client";

import React, { useContext, useEffect, useState } from "react";
import SectionTitle from "@/@core/components/SectionTitle";
import { ListIcon } from "@/@core/components/icons";
import SearchInput from "@/@core/components/SearchInput";
import LaunchesHistoryItem from "@/@core/components/LaunchesHistoryItem";
import { LaunchContext } from "../context/LaunchContext";
import { Pagination } from "@/@core/components/Pagination";
import { ListSkeleton } from "@/@core/components/ListSkeleton";

export default function LaunchesHistory() {
  const { launches, listOptions } = useContext(LaunchContext);

  return (
    <div className="bg-white bg-opacity-5 text-white w-full flex flex-col py-6 px-4 rounded-md">
      <SectionTitle text="HISTÓRICO DE LANÇAMENTOS" icon={<ListIcon />} />
      <div className="mt-6">
        {/* Search */}
        <SearchInput
          onSearch={(val) => {
            listOptions.setSearch(val);
          }}
        />
        {/* List */}
        <div className="mt-4 flex flex-col gap-2">
          {launches.isLoading ? (
            <ListSkeleton numRows={listOptions.limit} />
          ) : (
            launches.data?.results.map((launch: any) => {
              return (
                <LaunchesHistoryItem
                  key={launch.id}
                  missionPatch={launch.missionPatch}
                  name={launch.name}
                  flightNumber={launch.flightNumber}
                  success={launch.success}
                  rocketName={launch.rocket.name}
                  reused={launch.reused}
                  launchDate={launch.launchDate}
                  youtubeId={launch.youtubeId}
                />
              );
            })
          )}
        </div>
        <Pagination
          limit={listOptions.limit}
          currentPage={listOptions.page}
          onPageChange={(newPage) => listOptions.setPage(newPage)}
          hasPrev={launches.data?.hasPrev || false}
          hasNext={launches.data?.hasNext || false}
          totalDocs={launches.data?.totalDocs || 0}
          totalPages={launches.data?.totalPages || 0}
        />
      </div>
    </div>
  );
}
