import React from "react";
import CustomLink from "@/@core/components/CustomLink";

export default function LaunchesHistoryItem() {
  return (
    <div className="bg-stone-700 rounded-md p-3 flex gap-2">
      <img
        src="https://images2.imgbox.com/94/f2/NN6Ph45r_o.png"
        alt="Falcon 1"
        className="w-16"
      />
      <div className="w-full">
        <div className="flex justify-between">
          <span className="text-lg">Starlink 4-27 (v1.5)</span>
          <i className="text-stone-400">#180</i>
        </div>
        <div className="mt-2 flex gap-4 items-center">
          <div className="px-2 bg-green-500 rounded-md">
            <span className="uppercase">Sucesso</span>
          </div>
          <span className="text-stone-400">Used Falcon 9</span>
          <span className="text-stone-400">25/09/2021</span>
          <CustomLink href={"https://youtube.com"} title="Ver vídeo">
            Ver vídeo
          </CustomLink>
        </div>
      </div>
    </div>
  );
}
