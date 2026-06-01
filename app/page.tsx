import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import SelectedWork from "./components/SelectedWork";
import WhatWeDesign from "./components/WhatWeDesign";
import Button from "./components/Button";
import CreativeNetwork from "./components/CreativeNetwork";
import HowWeWork from "./components/HowWeWork";
import Contact from "./components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <SelectedWork />
      <div className="wrapper py-10 flex justify-center">
        <Button variant="outline" href="/projects">SEE ALL</Button>
      </div>
      <WhatWeDesign />
      <CreativeNetwork />
      <HowWeWork />
      <div className="relative overflow-hidden">
        <Contact />
        <div
          className="hidden md:block"
          style={{
            position: 'absolute',
            right: 'clamp(24px, 6vw, 110px)',
            top: '50%',
            width: 'clamp(180px, 22vw, 340px)',
            transform: 'translateY(-50%) rotate(12deg)',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          <Image
            src="/unfold-logo-black.svg"
            alt=""
            width={340}
            height={340}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </main>
  );
}
