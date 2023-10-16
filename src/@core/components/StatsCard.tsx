import React from "react";

import classNames from "classnames";

import { jura } from "../fonts";

interface Props {
  text: string;
  statsValue: number;
  className: string;
}

export default function StatsCard({ text, statsValue, className }: Props) {
  return (
    <div
      className={classNames(
        "flex flex-col w-full rounded-md text-center items-center py-2",
        className,
        jura.className
      )}
    >
      <span className="text-lg">{text}</span>
      <span className="text-2xl">{statsValue}</span>
    </div>
  );
}
