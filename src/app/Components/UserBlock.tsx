/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Image from "next/image";

interface UserBlockProps {
  balance?: string;
  connect?: string;
  isConnected?: boolean;
  onConnect?: () => void;
  profile?: string;
}

const UserBlock: React.FC<UserBlockProps> = ({
  balance = "0.00000 STRK",
  connect = "Connect Wallet",
  profile = "/profile.png",
  isConnected = false,
  onConnect,
}) => {
  return (
    
    <div className="flex flex-col gap-10 justify-center items-center min-h-screen bg-gray-700">
    <div
    className=" w-[250px] border p-2 justify-center flex gap-3 items-center  bg-black rounded-full hover:opacity-90 transition-opacity">
  <div className="text-white text-sm px-4 text-center min-w-[150px] py-2 border-[5px] border-blue-950 rounded-full bg-[#FF9500]">
{balance}
  </div>
  <button onClick={onConnect} className="w-fit rounded-full">
  <Image
    className="rounded-full"
    src={profile}
    alt="Profile Logo"
    width={100}
    height={100}
  />
  </button>

</div>
<div
    className="w-[250px] border p-2 justify-center flex gap-3 items-center  bg-black rounded-full hover:opacity-90 transition-opacity">
  <div className="text-white text-sm px-4 text-center min-w-[150px] py-2 border-[5px] border-blue-950 rounded-full bg-[#FF9500]">
{connect}
  </div>
  <button onClick={onConnect} className="w-fit rounded-full">
    
  <Image
    className="rounded-full"
    src={profile}
    alt="Profile Logo"
    width={100}
    height={100}
  />
  </button>

</div>

</div>
  );
};

export default UserBlock;
