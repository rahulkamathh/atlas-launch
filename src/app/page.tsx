import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Insight } from "@/components/sections/Insight";
import { AtlasModel } from "@/components/sections/AtlasModel";
import { HumansAndAI } from "@/components/sections/HumansAndAI";
import { Future } from "@/components/sections/Future";
import { Waitlist } from "@/components/sections/Waitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Insight />
      <AtlasModel />
      <HumansAndAI />
      <Future />
      <Waitlist />
      <Footer />
    </main>
  );
}
