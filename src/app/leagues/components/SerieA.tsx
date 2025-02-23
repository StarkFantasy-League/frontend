"use client";

import Image from "next/image";

import { useState } from "react";

export default function Serie() {
  const [user, setUser] = useState({
    isConnected: true,
    walletAddress: "0x1234abcd5678efgh",
  });

  return (
    
    <div className="w-screen   h-[40rem]      md:w-full md:h-screen flex items-center bg-white md:-mt-[2rem] relative">
    
      <div>
        <Image src="/serieimage.png" alt="" fill className=" md:object-cover"/>
      </div>

      <div className=" absolute w-full h-full bg-gradient-to-b from-[rgba(34,29,47,0.82)] via-[rgba(31,27,44,0.31)] to-[rgba(29,24,41,0)]"></div>

      
      {user.isConnected ? (
        <div className=" flex z-90 w-full h-full md:leading-[80px] relative flex-col items-center justify-center text-[#FFFFFF] mt-[9rem]">
          <span className="font-medium text-[20px] sm:text-[20px] tracking-[0.1em] md:tracking-[0.2em] md:text-[32px]">
            Welcome to
          </span>
          <span className="md:text-[80px] lg:text-[75px] sm:text-[75px] text-[50px]">
            Serie A
          </span>
          <span className="md:text-[48px] text-[30px] sm:text-[35px] sm:tracking-[1.2em] tracking-[0.4em] text-center lg:tracking-[1.2em] md:tracking-[1em]">
            Tournament
          </span>


        </div>
      ) : (
        <div className="text-white text-3xl relative mx-auto  bg-black/70 rounded-full w-fit p-5">
          {" "}
          Please Connect wallet
        </div>

      )}
    </div>
  );
}
  
