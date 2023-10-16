"use client";

import React from "react";
import SectionTitle from "@/@core/components/SectionTitle";
import { ListIcon } from "@/@core/components/icons";
import SearchInput from "@/@core/components/SearchInput";
import LaunchesHistoryItem from "@/@core/components/LaunchesHistoryItem";

export default function LaunchesHistory() {
  return (
    <div className="bg-white bg-opacity-5 text-white w-full flex flex-col py-6 px-4 rounded-md">
      <SectionTitle text="HISTÓRICO DE LANÇAMENTOS" icon={<ListIcon />} />
      <div className="mt-6">
        {/* Search */}
        <SearchInput
          onSearch={(val) => {
            console.log(val);
          }}
        />
        {/* List */}
        <div className="mt-4">
          <LaunchesHistoryItem />
        </div>
      </div>
    </div>
  );
}
