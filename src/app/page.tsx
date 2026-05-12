import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { BotDemo } from "@/components/BotDemo";
import { BotCatalog } from "@/components/BotCatalog";
import { Examples } from "@/components/Examples";
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

      {/* Problems: Agitação do problema e dor do cliente */}
      <Problems />
      
      {/* Services: Categorias de Atuação (Software House) */}
      <Services />

      {/* Benefits: Proposta de valor e resultados reais */}
      <Benefits />

      {/* Demos: Prova Técnica Interativa */}
      <BotDemo />

      {/* Catalog: Soluções Prontas e Orçáveis */}
      <BotCatalog />

      {/* Examples: Cases e demonstração de versatilidade */}
      <Examples />

      {/* How it Works: Transparência e Pipeline de Trabalho */}
      <HowItWorks />

      {/* About: Visão Técnica, Stack e Identidade */}
      <About />

      {/* CTA Final: Conversão Direta */}
      <CTA />

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
