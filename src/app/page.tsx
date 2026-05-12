import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Problems } from "@/components/Problems";
import { HowItWorks } from "@/components/HowItWorks";
import { Examples } from "@/components/Examples";
import { Benefits } from "@/components/Benefits";
import { BotDemo } from "@/components/BotDemo";
import { BotCatalog } from "@/components/BotCatalog";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main>
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <Hero />
      <div className="divider" />
      <Services />
      <div className="divider" />
      <Problems />
      <div className="divider" />
      <HowItWorks />
      <div className="divider" />
      <BotDemo />
      <div className="divider" />
      <BotCatalog />
      <div className="divider" />
      <Examples />
      <div className="divider" />
      <Benefits />
      <div className="divider" />
      <About />
      <div className="divider" />
      <CTA />
      <Footer />
    </main>
  );
}
