"use client";
import Image from "next/image";
import { useState } from "react";

export default function Serie() {
  const [user, setUser] = useState({
    isConnected: true,
    walletAddress: "0x1234abcd5678efgh",
  });

  return (
    <div className="flex items-center w-screen md:w-full h-full md:h-screen md:-mt-[2rem] relative">
      <div className="relative w-full h-full">
        <Image src="/nbaimg.png" alt="Background Image" fill className="object-cover" />
      </div>

      <div className="absolute w-full h-full bg-gradient-to-b from-[rgba(34,29,47,0.82)] via-[rgba(31,27,44,0.31)] to-[rgba(29,24,41,0)]"></div>

      {user.isConnected ? (
        <div className="">
          <h1></h1>
        </div>
      ) : (
        <div className="text-white text-3xl relative mx-auto bg-black/70 rounded-full w-fit p-5">
          Please Connect Wallet
        </div>
      )}
    </div>
  );
}
