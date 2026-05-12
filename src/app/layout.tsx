import type { Metadata } from "next";
import "@/lib/fa"; // register on server side
import "./globals.css";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FAProvider } from "@/components/FAProvider";

export const metadata: Metadata = {
  title: "Ariramba Systemas | Automacao, Bots e Integracoes com N8N",
  description:
    "Especializados em automacao de processos com N8N, Evolution API, bots para WhatsApp e Telegram, integracao de sistemas e DevOps para empresas que querem crescer com eficiencia.",
  keywords: [
    "automacao de processos",
    "N8N",
    "Evolution API",
    "bots WhatsApp",
    "bots Telegram",
    "integracao de sistemas",
    "API",
    "DevOps",
    "Ariramba Systemas",
  ],
  openGraph: {
    title: "Ariramba Systemas | Automacao e Bots Inteligentes",
    description:
      "Automatizamos processos e integramos sistemas para sua empresa crescer sem aumentar a equipe.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <FAProvider>
          {children}
          <WhatsAppFloat />
        </FAProvider>
      </body>
    </html>
  );
}
