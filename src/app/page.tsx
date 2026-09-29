import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { ConnectedHealth } from "@/components/sections/ConnectedHealth";
import { Services } from "@/components/sections/Services";
import { Doctor } from "@/components/sections/Doctor";
import { Process } from "@/components/sections/Process";
import { Why } from "@/components/sections/Why";
import { Instagram } from "@/components/sections/Instagram";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <ConnectedHealth />
      <Services />
      <Doctor />
      <Process />
      <Why />
      <Instagram />
      <Contact />
    </main>
  );
}
