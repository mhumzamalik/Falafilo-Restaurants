"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";

export default function About() {
  return (
    <SectionWrapper>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://plus.unsplash.com/premium_photo-1682097301631-902c29a12a21?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Chef preparing dish"
          className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          loading="lazy"
        />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-6">
            About Us
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Our restaurant blends tradition with innovation, offering a premium
            dining experience crafted by world-class chefs. Every dish is made
            with passion, using the finest locally sourced ingredients.
          </p>
          <p className="text-neutral-400">
            We believe dining is more than food — it’s an experience of
            atmosphere, service, and artistry.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
