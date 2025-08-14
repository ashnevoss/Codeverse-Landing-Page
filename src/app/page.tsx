import { Banner } from "@/sections/Banner";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { FAQs } from "@/sections/FAQs";
import CallToAction from "@/sections/CallToAction"; // ✅ no curly braces
import WaitlistSection from "@/sections/Waitlist";

import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <WaitlistSection />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
