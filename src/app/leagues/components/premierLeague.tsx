"use client";

import Image from "next/image";
import { useState } from "react";

const PremierLeague = () => {
  const [user, setUser] = useState({
    isConnected: true,
    walletAddress: "0x1234abcd5678efgh",
  });

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-white">
      <Image
        src="/premier-league.png"
        alt="Premier League Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#221D2F]/[0.82] via-[#1F1B2C]/[0.31] to-[#1D1829]/[0] z-10"></div>
      <div className="relative z-20 flex flex-col items-center leading-[70px] text-center p-4 mt-10 ">
     
        {user.isConnected ? (
          <>
            <h2 className="text-lg md:text-2xl tracking-[0.2em]  uppercase">Welcome to</h2>
            <h1 className="text-[40px] sm:text-[70px] md:text-[95px] lg:[120px] font-black mt-2">Premier League</h1>
            <h3 className="text-xl sm:text-2xl font-medium tracking-[1.2em] md:text-3xl md:tracking-[2.2em] lg:text-4xl lg:tracking-[1.9em] md:mt-5 sm:tracking-[2em] mt-2">
              Tournament
            </h3>
          </>
        ) :(
          <p className="mt-4 text-sm md:text-base">
            Connect your wallet to join the tournament
          </p>
        )}
      </div>
    </div>
  );
};

export default PremierLeague;
