"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-amber-500/20 to-red-500/20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-6">
          Ready for an unforgettable evening?
        </h2>
        <p className="text-neutral-200 mb-8">
          Reserve your table today and indulge in a premium dining experience.
        </p>
        <Link href="/menu">
        <Button className="hover:cursor-pointer" variant="secondary">View Menu</Button></Link>
      </motion.div>
    </section>
  );
}
