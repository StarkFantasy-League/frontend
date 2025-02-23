"use client";

import Image from "next/image";
import { useState } from "react";

const MxLeaguePage = () => {
  const [user, setUser] = useState({
    isConnected: true,
    walletAddress: "0x1234abcd5678efgh",
  });

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-white">
      <Image
        src="/mx-league.png"
        alt="MX League Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      <div className="relative z-20 flex flex-col items-center text-center p-4 mt-40">
        <h2 className="text-lg md:text-2xl font-light uppercase">Welcome to</h2>
        <h1 className="text-4xl md:text-6xl font-bold mt-2">MX League</h1>
        <h3 className="text-lg md:text-2xl font-light tracking-widest mt-2">
          Tournament
        </h3>
        {user.isConnected && (
          <p className="mt-4 text-sm md:text-base">
            Connected as: {user.walletAddress}
          </p>
        )}
      </div>
      <div className="relative z-20 text-center mt-4 p-4 max-w-2xl">
        <p className="text-sm md:text-base">
          Explore the different leagues in the world and compete with your
          friends.
        </p>
      </div>
    </div>
  );
};

export default MxLeaguePage;
