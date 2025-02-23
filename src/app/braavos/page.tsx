"use client";

import React from "react";
import { BraavosIcon } from "@/components/BraavosIcon";

export default function BraavosPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Connect your wallet</h1>
      <BraavosIcon />
    </div>
  );
}