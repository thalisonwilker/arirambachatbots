// ============================================================
// CONFIGURAÇÕES DO SITE — EDITE AQUI
// ============================================================

// Número do WhatsApp com código do país e DDD, sem espaços ou símbolos
export const WHATSAPP_NUMBER = "5511999999999"; // ← SUBSTITUA pelo seu número

// Mensagem padrão pré-preenchida no WhatsApp
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, quero saber mais sobre os serviços da Ariramba Systemas"
);

// URL completa do WhatsApp
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// Links de redes sociais
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/ariramba-systemas", // ← SUBSTITUA
  github: "https://github.com/ariramba-systemas",             // ← SUBSTITUA
  email: "contato@ariramba.com.br",                           // ← SUBSTITUA
  telegram: "https://t.me/ariramba",                          // ← SUBSTITUA
};

// Informações da empresa
export const BRAND = {
  name: "Ariramba Systemas",
  shortName: "Ariramba",
  tagline: "Automação Inteligente & Integração de Sistemas",
  description:
    "Especialistas em automação de processos, bots inteligentes, integrações com N8N, Evolution API e soluções sob medida para empresas que querem crescer sem aumentar a equipe.",
};
