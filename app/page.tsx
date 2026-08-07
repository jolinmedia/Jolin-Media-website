import { AboutSection } from "@/components/AboutSection";
import { BookingTeaser } from "@/components/BookingTeaser";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { WhatIDo } from "@/components/WhatIDo";

export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <WhatIDo />
      <Portfolio />
      <AboutSection />
      <BookingTeaser />
    </main>
  );
}
