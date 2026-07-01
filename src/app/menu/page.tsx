"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import menuData from "@/data/menu.json";

export default function MenuPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-12 text-center">
        Our Menu
      </h1>
      <p className="text-neutral-300 text-center max-w-2xl mx-auto mb-16">
        Explore our curated selection of dishes crafted with passion and the finest ingredients.
      </p>

      {/* Menu Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {menuData.map((item) => (
          <Card key={item.id} className="flex flex-col">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 md:h-56 object-cover rounded-md mb-4"
              loading="lazy"
            />
            <h3 className="text-lg md:text-xl font-semibold text-white">{item.name}</h3>
            <p className="text-neutral-400 text-sm md:text-base mt-2">{item.description}</p>
            <p className="text-amber-400 font-bold mt-4">${item.price}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
