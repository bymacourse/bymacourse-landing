import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Habel } from "@/components/sections/Habel";
import { Activities } from "@/components/sections/Activities";
import { WhyByma } from "@/components/sections/WhyByma";
import { VisionMission } from "@/components/sections/VisionMission";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Habel />
        <Activities />
        <WhyByma />
        <VisionMission />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
