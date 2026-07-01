"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const baseStyles =
    "px-6 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400";

  const variants = {
    primary: "bg-amber-400 text-black hover:bg-amber-500",
    secondary: "bg-neutral-800 text-white hover:bg-neutral-700",
    ghost: "bg-transparent text-white hover:text-amber-400",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
