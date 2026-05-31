import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import SelectedWork from "./components/SelectedWork";
import WhatWeDesign from "./components/WhatWeDesign";
import Button from "./components/Button";
import CreativeNetwork from "./components/CreativeNetwork";
import HowWeWork from "./components/HowWeWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <SelectedWork />
      <div className="wrapper py-10 flex justify-center">
        <Button variant="outline">SEE ALL</Button>
      </div>
      <WhatWeDesign />
      <CreativeNetwork />
      <div className="relative" style={{ overflowX: 'hidden' }}>
        <HowWeWork />
        <div
          style={{
            position: 'absolute',
            right: '-100px',
            bottom: '38%',
            width: 'clamp(300px, 35vw, 500px)',
            opacity: 1,
            transform: 'rotate(12deg)',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          <Image
            src="/black-logo.png"
            alt=""
            width={500}
            height={500}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <Contact />
      </div>
    </main>
  );
}
