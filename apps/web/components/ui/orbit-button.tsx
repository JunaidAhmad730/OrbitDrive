"use client";

import { ButtonHTMLAttributes } from "react";

type OrbitButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function OrbitButton({
  children,
  className = "",
  ...props
}: OrbitButtonProps) {
  return (
    <button
      className={`rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
