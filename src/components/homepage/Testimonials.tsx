"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";
import testimonials from "@/data/testimonials.json";

export default function Testimonials() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-400 mb-12">
        What Our Guests Say
      </h2>
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-8"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              className="bg-neutral-900/70 backdrop-blur-md rounded-lg p-6 w-[300px] flex-shrink-0 border border-neutral-800 hover:border-amber-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-neutral-300 mb-4">“{t.quote}”</p>
              <h4 className="text-white font-semibold">{t.name}</h4>
              <span className="text-neutral-500 text-sm">{t.role}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
