"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";
import galleryData from "@/data/gallery.json";

export default function GalleryPreview() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-400 mb-12">
        Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryData.slice(0, 8).map((item) => (
          <motion.img
            key={item.id}
            src={item.image}
            alt={item.alt}
            className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            loading="lazy"
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
