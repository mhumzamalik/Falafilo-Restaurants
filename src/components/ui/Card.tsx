"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        "bg-neutral-900/70 backdrop-blur-md rounded-lg shadow-lg p-6 border border-neutral-800 hover:border-amber-400 transition-colors",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
