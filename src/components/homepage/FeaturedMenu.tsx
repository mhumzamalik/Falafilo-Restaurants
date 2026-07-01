"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import menuData from "@/data/menu.json";

export default function FeaturedMenu() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-400 mb-12">
        Featured Menu
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {menuData.slice(0, 3).map((item) => (
          <Card key={item.id} className="flex flex-col">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 md:h-56 object-cover rounded-md mb-4"
              loading="lazy"
            />
            <h3 className="text-lg md:text-xl font-semibold text-white">
              {item.name}
            </h3>
            <p className="text-neutral-400 text-sm md:text-base mt-2">
              {item.description}
            </p>
            <p className="text-amber-400 font-bold mt-4">${item.price}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
