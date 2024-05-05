"use client";

import Hero from "@Sections/Hero";
import TechnologiesCarousel from "@Sections/TechnologiesCarousel";
import Links from "@Sections/Links";
import About from "@Sections/About";
import Footer from "@Sections/Footer";
import Work from "@Sections/Work";
import UpButton from "@Sections/UpButton";

export default function Home() {
  return (
    <main className="relative m-auto  min-h-screen w-full max-w-[1400px] overflow-x-hidden border-l border-r border-[#15181f] bg-backgroundInternal-100 text-white ">
      <Hero />
      <TechnologiesCarousel />
      <Work />
      <About />
      <Footer />
      <Links />
      <UpButton />
    </main>
  );
}
