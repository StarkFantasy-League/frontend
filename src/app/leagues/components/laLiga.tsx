"use client";

import Image from "next/image";
import { useState } from "react";

export default function LaLiga() {
  const [user, setUser] = useState({
    isConnected: true, 
    walletAddress: "0x1234abcd5678efgh",
  });

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white relative">
      
      <div className="absolute w-full h-full">
        <Image
          src="/laLiga.png" 
          alt="LaLiga Background"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 z-0"
        />
      </div>

      
      <div className="absolute w-full h-full bg-gradient-to-b from-[rgba(34,29,47,0.82)] via-[rgba(31,27,44,0.31)] to-[rgba(29,24,41,0)]"></div>

      {user.isConnected ? (
        <div className="flex z-10 w-full h-full md:leading-[80px] relative flex-col items-center justify-center text-[#FFFFFF] px-1 text-center">
          <span className="font-medium text-[20px] sm:text-[20px] tracking-[0.1em] md:tracking-[0.2em] md:text-[32px]">
            Welcome to
          </span>
          <span className="md:text-[80px] lg:text-[75px] sm:text-[75px] text-[50px]">
            La Liga
          </span>
          <span className="md:text-[48px] text-[30px] sm:text-[35px] sm:tracking-[1.2em] tracking-[0.4em] text-center lg:tracking-[1.2em] md:tracking-[1em]">
            Tournament
          </span>
        </div>
      ) : (
        <div className="text-white text-3xl relative mx-auto bg-black/70 rounded-full w-fit p-5">
          {" "}
          Please Connect Wallet
        </div>
      )}
    </div>
  );
}
