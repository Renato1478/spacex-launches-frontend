import React, { ReactElement } from "react";

export const ListSkeleton = ({ numRows }: { numRows: number }) => {
  const renderListSkeleton = () => {
    const rowsSkeleton: ReactElement[] = [];

    for (let i = 0; i < numRows; i++) {
      rowsSkeleton.push(
        <div className="flex gap-8 w-full p-4">
          <div className="w-16 h-14 rounded-full bg-stone-700"></div>
          <div className="flex items-center justify-between w-full">
            <div>
              <div className="h-2 rounded-full bg-stone-600 w-24 mb-4"></div>
              <div className="flex gap-8">
                <div className="w-32 h-2 rounded-full bg-stone-700"></div>
                <div className="w-32 h-2 rounded-full bg-stone-700 max-md:hidden"></div>
                <div className="w-32 h-2 rounded-full bg-stone-700 max-md:hidden"></div>
              </div>
            </div>
            <div className="h-2 rounded-full bg-stone-700 w-16"></div>
          </div>
        </div>
      );
    }

    return rowsSkeleton;
  };

  return (
    <div className="flex flex-col gap-2 divide-y rounded shadow animate-pulse divide-stone-700 border-stone-700">
      {renderListSkeleton()}
      <span className="sr-only">Loading...</span>
    </div>
  );
};
