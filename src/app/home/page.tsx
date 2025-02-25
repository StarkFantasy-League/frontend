"use client";
import React from "react";
import MatchPanel from "./components/MatchPanel";
import UserPanel from "./components/UserPanel";
import LeaguesPanel from "./components/LeaguesPanel";
import LeagueCards from "./components/LeagueCards";
import NavBar from "@/components/navBar";
import Image from "next/image";
import EmptyPanel from "./components/EmptyPanel";

function page() {
    const handleViewDetails = () => {
        console.log("View Details clicked");
    };
    return (
        <div className="bg-[#020618] h-full">
            <div className="flex justify-between items-center p-5">
                <div className="flex items-center gap-4">
                    <Image
                        src={"/logo.png"}
                        width={150}
                        height={150}
                        alt="logo"
                    />
                    <p className="text-white text-[24px]">
                        StarkFantasy League
                    </p>
                </div>
                <NavBar active={false} />
                <div className="flex items-center gap-4 bg-[#232323] w-[303px] h-[79px] rounded-full px-4">
                    <div className="bg-[#FE9A00] border-[3px] border-[#372AAC] w-[200px] h-[50px] rounded-[25px] flex items-center justify-center text-center">
                        <p className="text-white text-2xl font-normal font-exo2  ">
                            0.10000 STRK
                        </p>
                    </div>
                    <Image
                        src={"/icons/avatar.png"}
                        width={89}
                        height={49}
                        alt="logo"
                    />
                </div>
            </div>

            <div className="flex gap-8 w-[70%] mx-auto">
                <div className="flex flex-col gap-y-2">
                    <UserPanel />
                    <LeaguesPanel />
                </div>
                <div className="flex flex-col gap-y-2 w-[80%]">
                    <MatchPanel
                        team1Image="/assets/images/team-1.png"
                        team2Image="/assets/images/team-2.png"
                        date={new Date(2025, 1, 19)}
                        time="20:00"
                        onViewDetails={handleViewDetails}
                    />

                    <LeagueCards />
                </div>
                <div>
                    <EmptyPanel />
                </div>
            </div>
        </div>
    );
}

export default page;
