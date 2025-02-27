"use client";

import Image from "next/image";
import { useState } from "react";

export default function Bundesliga() {
  const [user, setUser] = useState({
    isConnected: true,
    walletAddress: "0x1234abcd5678efgh",
  });

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col bg-[#1A1A2E] text-white relative">
      {/* Placeholder para Navbar */}
      <div className="w-full">
        <div className="text-center text-yellow-400 py-4">
          Navbar Placeholder
        </div>
      </div>

      <div className="w-full h-full flex bg-[#1A1A2E] text-white">
        {/* Placeholder para Sidebar */}
        <aside className="w-[255px] h-full bg-[#0F1129] border-r-4 border-yellow-400 p-5 shadow-lg z-20">
          <div className="text-center text-yellow-400">
            Sidebar Placeholder
          </div>
        </aside>

        <div className="flex-1 flex items-center justify-center relative overflow-hidden">
          <div className="absolute w-full h-full top-0">
            <Image
              src="/bundesliga-league.png"
              alt="Bundesliga Background"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 z-0 transform translate-y-[1%]"
              unoptimized
              priority
            />
          </div>

          <div className="absolute w-full h-full bg-gradient-to-b from-[rgba(34,29,47,0.82)] via-[rgba(31,27,44,0.31)] to-[rgba(29,24,41,0)]"></div>

          {user.isConnected ? (
            <div className="flex z-10 w-full h-full md:leading-[80px] relative flex-col items-center justify-center text-[#FFFFFF] px-1 text-center -mt-48">
              <span className="font-medium text-[26px] sm:text-[26px] tracking-[0.1em] md:tracking-[0.2em] md:text-[38px]">
                Welcome to
              </span>
              <span className="md:text-[95px] lg:text-[90px] sm:text-[90px] text-[65px] font-bold">
                Bundesliga
              </span>
              <span className="md:text-[56px] text-[38px] sm:text-[43px] sm:tracking-[1.2em] tracking-[0.4em] text-center lg:tracking-[1.2em] md:tracking-[1em]">
                Tournament
              </span>
            </div>
          ) : (
            <div
              className="text-white text-3xl relative mx-auto bg-black/70 rounded-full w-fit p-5"
              aria-live="assertive"
            >
              Please Connect Wallet
            </div>
          )}
        </div>
      </div>

      {/* Placeholder para Footer */}
      <div className="w-full">
        <div className="text-center text-yellow-400 py-4">
          Footer Placeholder
        </div>
      </div>
    </div>
  );
}
