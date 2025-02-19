import { Exo_2 } from "next/font/google";
import { leagues } from "../../../../data";
import LeagueCard from "./LeagueCard";

const exo2 = Exo_2({
  subsets: ["latin"],
});

export default function PersonalLeaguesPanel() {
  return (
    <section
      className={`flex flex-col items-center h-[345] w-[280px] rounded-[20px] bg-slate-900 ${exo2.className}`}
    >
      <h1 className="text-orange-500 w-full font-medium text-[40px] pt-[17px] px-[15px] mb-5">
        My leagues
      </h1>
      <ul className="overflow-y-auto no-scrollbar">
        {leagues.map((league) => (
          <LeagueCard key={league.name} league={league} />
        ))}
      </ul>
    </section>
  );
}
