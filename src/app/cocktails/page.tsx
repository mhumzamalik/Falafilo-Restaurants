"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import cocktailsData from "@/data/cocktails.json";

export default function CocktailsPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-12 text-center">
        Signature Cocktails
      </h1>
      <p className="text-neutral-300 text-center max-w-2xl mx-auto mb-16">
        Experience our handcrafted cocktails, blending premium spirits with fresh ingredients.
      </p>

      {/* Cocktails Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cocktailsData.map((cocktail) => (
          <Card key={cocktail.id} className="flex flex-col">
            <img
              src={cocktail.image}
              alt={cocktail.name}
              className="w-full h-48 md:h-56 object-cover rounded-md mb-4"
              loading="lazy"
            />
            <h3 className="text-lg md:text-xl font-semibold text-white">{cocktail.name}</h3>
            <p className="text-neutral-400 text-sm md:text-base mt-2">{cocktail.description}</p>
            <p className="text-amber-400 font-bold mt-4">${cocktail.price}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
