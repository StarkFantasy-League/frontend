"use client";

import React from "react";
import Button from "../../../components/button/button";

const ButtonPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-800 space-y-4">
      <div className="flex space-x-4">
        <Button variant="primary">Primary</Button>
        <Button variant="primary">Primary (H)</Button>
      </div>
      <div className="flex space-x-4">
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary">Secondary (H)</Button>
      </div>
      <div className="flex space-x-4">
        <Button variant="blank">Blank</Button>
        <Button variant="blank">Blank (H)</Button>
      </div>
    </div>
  );
};

export default ButtonPage;