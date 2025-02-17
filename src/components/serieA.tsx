"use client"

import { useState } from "react"
import Image from "next/image"

interface User {
  isConnected: boolean;
  walletAddress: string;
}

export default function SerieA() {
  // Simulated wallet connection state
  const [user] = useState<User>({
    isConnected: true,
    walletAddress: "0x1234abcd5678efgh",
  })

  return (
    <div className="relative h-screen bg-gray-900">
      {/* Background Image */}
      <Image
        src="/soccer-field-background.png"
        alt="Serie A Stadium"
        fill
        className="object-cover"
        priority
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        {user.isConnected ? (
          <>
            <h1 className="text-2xl font-light mb-4">Welcome to</h1>
            <h2 className="text-8xl font-bold mb-8">Serie A</h2>
            <p className="text-xl tracking-widest uppercase">Tournament</p>
            <p className="mt-4 text-sm opacity-70">Connected: {user.walletAddress}</p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-light mb-4">Please connect your wallet</h1>
            <h2 className="text-8xl font-bold mb-8">Serie A</h2>
            <p className="text-xl tracking-widest uppercase">Tournament</p>
          </>
        )}
      </div>

      {/* Serie A Trophy - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20">
        <Image
          src="/trophy.png"
          alt="Serie A Trophy"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
    </div>
  )
}
