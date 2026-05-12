import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { BRAND } from "@/lib/constants";
import { FAProvider } from "@/components/FAProvider";
import "./globals.css";

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} | Automation & Software Studio`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Software house especializada em automação inteligente, integração de sistemas, bots, APIs, pipelines, DevOps e soluções digitais sob medida para empresas modernas.",
  keywords: BRAND.keywords,
  authors: [{ name: BRAND.name, url: "https://ariramba.com.br" }],
  creator: BRAND.name,
  publisher: BRAND.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ariramba.com.br",
    siteName: BRAND.name,
    title: `${BRAND.name} | Automation & Software Studio`,
    description: BRAND.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} | Automation & Software Studio`,
    description: BRAND.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <FAProvider>{children}</FAProvider>
      </body>
    </html>
  );
}
