import React from "react";
import CustomLink from "@/@core/components/CustomLink";

interface LaunchesHistoryItemProps {
  name: string;
  flightNumber: number;
  success: boolean;
  rocketName: string;
  reused: boolean;
  launchDate: Date;
  youtubeId: string;
}

export default function LaunchesHistoryItem({
  name,
  flightNumber,
  success,
  rocketName,
  reused,
  launchDate,
  youtubeId,
}: LaunchesHistoryItemProps) {
  return (
    <div className="bg-stone-700 bg-opacity-60 rounded-md p-4 flex gap-6">
      <img
        src="https://images2.imgbox.com/94/f2/NN6Ph45r_o.png"
        alt="Falcon 1"
        className="w-16"
      />
      <div className="w-full">
        <div className="flex justify-between">
          <span className="text-lg">{name}</span>
          <i className="text-stone-400">#{flightNumber}</i>
        </div>
        <div className="mt-2 flex gap-8 items-center">
          {success ? (
            <div className="px-2 bg-green-500 rounded-md">
              <span className="uppercase">Sucesso</span>
            </div>
          ) : (
            <div className="px-2 bg-orange-700 rounded-md">
              <span className="uppercase">Falha</span>
            </div>
          )}
          <span className="text-stone-400">
            <b>Foguete:</b> {reused && <>Used</>} {rocketName}
          </span>
          <span className="text-stone-400">
            <b>Data:</b> {launchDate?.toUTCString()}
          </span>
          <CustomLink
            href={`https://youtube.com/watch?v=${youtubeId}`}
            title="Ver vídeo"
          >
            Ver vídeo
          </CustomLink>
        </div>
      </div>
    </div>
  );
}
