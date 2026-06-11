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
      <Contact />
    </main>
  );
}
