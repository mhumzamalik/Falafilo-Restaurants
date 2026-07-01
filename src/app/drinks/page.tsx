"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import drinksData from "@/data/drinks.json";

export default function DrinksPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-12 text-center">
        Our Drinks
      </h1>
      <p className="text-neutral-300 text-center max-w-2xl mx-auto mb-16">
        Discover our curated selection of cocktails, wines, and refreshing beverages.
      </p>

      {/* Drinks Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {drinksData.map((drink) => (
          <Card key={drink.id} className="flex flex-col">
            <img
              src={drink.image}
              alt={drink.name}
              className="w-full h-48 md:h-56 object-cover rounded-md mb-4"
              loading="lazy"
            />
            <h3 className="text-lg md:text-xl font-semibold text-white">{drink.name}</h3>
            <p className="text-neutral-400 text-sm md:text-base mt-2">{drink.description}</p>
            <p className="text-amber-400 font-bold mt-4">${drink.price}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
