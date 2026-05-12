import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { BotDemo } from "@/components/BotDemo";
import { BotCatalog } from "@/components/BotCatalog";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero: Posicionamento e Impacto Imediato */}
      <Hero />
      
      {/* Services: Categorias de Atuação (Software House) */}
      <Services />

      {/* Demos: Prova Social e Técnica Interativa */}
      <BotDemo />

      {/* Catalog: Itens Prontos (Bots, Integrações, APIs) */}
      <BotCatalog />

      {/* How it Works: Transparência no Processo */}
      <HowItWorks />

      {/* About: Visão, Stack e Identidade */}
      <About />

      {/* CTA Final: Conversão para WhatsApp/Email */}
      <CTA />

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
