"use client";

import Hero from "@Sections/Hero";
import TechnologiesCarousel from "@Sections/TechnologiesCarousel";

export default function Home() {
  return (
    <main className="relative m-auto min-h-screen w-full max-w-[1660px] border-l border-r border-[#15181f] bg-backgroundInternal-100 text-white md:w-11/12">
      <Hero />
      <TechnologiesCarousel />
      <div className="h-screen"></div>
    </main>
  );
}
