import Image from "next/image";
import { leagues } from "../../../../data";

type League = {
  league: (typeof leagues)[0];
};

export default function LeagueCard({ league }: League) {
  return (
    <li className="bg-neutral-900 w-60 h-[60px] flex gap-[11px] items-center justify-center mb-4 rounded-[30px] border border-white">
      <div className="h-10 w-10 bg-white rounded-[20px] flex items-center justify-center overflow-hidden">
        <Image
          src="/image1.png"
          alt={`${league.name} logo`}
          width={40}
          height={40}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-40">
        <h2 className="truncate text-[20px] font-normal py-[5px]">
          {league.name}
        </h2>
      </div>
    </li>
  );
}
