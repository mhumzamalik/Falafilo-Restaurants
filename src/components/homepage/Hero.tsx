"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-400 mb-6">
          Falafilo - Best food in Vienna
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-neutral-200 mb-8 leading-relaxed">
          Discover the art of fine dining with modern elegance.
        </p>
        <div className="flex justify-center ">
          <Link href="/menu">
            <Button className="hover:cursor-pointer" variant="primary">View Menu</Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
