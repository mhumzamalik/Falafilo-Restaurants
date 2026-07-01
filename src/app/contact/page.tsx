"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper>
      <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-12 text-center">
        Contact Us
      </h1>
      <p className="text-neutral-300 text-center max-w-2xl mx-auto mb-16">
        Have a question or want to make a reservation? Send us a message below.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-6 bg-neutral-900/70 backdrop-blur-md p-8 rounded-lg shadow-lg"
        >
          <div>
            <label className="block text-neutral-300 mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:border-amber-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-neutral-300 mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:border-amber-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-neutral-300 mb-2">Message</label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:border-amber-400 focus:outline-none"
            ></textarea>
          </div>
          <Button type="submit" variant="primary" className="w-full">
            Submit
          </Button>
        </form>
      ) : (
        <div className="text-center text-2xl font-semibold text-amber-400">
          Query Sent ✅
        </div>
      )}
    </SectionWrapper>
  );
}
