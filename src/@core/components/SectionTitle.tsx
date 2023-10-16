import React, { ReactElement } from "react";
import { jura } from "../fonts";

interface Props {
  text: string;
  position?: "start" | "center";
  icon?: ReactElement | null;
}

export default function SectionTitle({ text, icon = null }: Props) {
  return (
    <div className={`flex items-center content-start w-fit gap-2`}>
      {icon}
      <span className={`${jura.className} text-xl uppercase font-bold`}>
        {text}
      </span>
    </div>
  );
}
