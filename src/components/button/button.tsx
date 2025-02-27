"use client";

import React from "react";

type ButtonVariant = "primary" | "secondary" | "blank";

interface ButtonProps {
  variant?: ButtonVariant;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  onClick,
  children,
}) => {
  const baseStyles =
    "w-36 h-12 flex items-center justify-center font-bold rounded-md transition-all duration-300";

  const variantStyles = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-400 focus:ring-2 focus:ring-orange-300",
    secondary:
      "bg-purple-600 text-white hover:bg-purple-500 focus:ring-2 focus:ring-purple-300",
    blank:
      "border border-white text-white hover:bg-white hover:text-black focus:ring-2 focus:ring-gray-300",
  };

  const buttonClass = `${baseStyles} ${variantStyles[variant]}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
