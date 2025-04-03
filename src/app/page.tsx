import { Banner } from "@/sections/Banner";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Navbar } from "@/sections/Navbar";

export default function Home() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
    </div>
  );
}
