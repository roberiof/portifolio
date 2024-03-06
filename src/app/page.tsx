"use client";

import Hero from "@Sections/Hero";
import TechnologiesCarousel from "@Sections/TechnologiesCarousel";
import Links from "@Sections/Links";

export default function Home() {
  return (
    <main className="relative m-auto  min-h-screen w-full max-w-[1660px] overflow-x-hidden border-l border-r border-[#15181f] bg-backgroundInternal-100 text-white ">
      <Hero />
      <TechnologiesCarousel />
      <div className="h-screen"></div>
      <Links />
    </main>
  );
}
