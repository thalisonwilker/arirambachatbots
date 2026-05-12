# 🦜 Ariramba Systemas — Automação & Bots

![Ariramba Systemas Preview](https://img.shields.io/badge/Status-Produção-success?style=for-the-badge)
![Next.js](https://img.shields.into/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)

A **Ariramba Systemas** é uma plataforma profissional de portfólio e serviços focada em automação de processos, integração de sistemas (APIs) e desenvolvimento de chatbots inteligentes. 

O site foi projetado com um design **high-end**, tecnológico e otimizado para conversão de leads (WhatsApp), utilizando as melhores práticas de desenvolvimento web moderno.

---

## 🚀 Proposta de Valor
A Ariramba Systemas ajuda pequenas empresas, startups e profissionais autônomos a:
- **Ganhar Tempo:** Automatizando tarefas repetitivas.
- **Vender Mais:** Atendimento 24/7 via chatbots inteligentes.
- **Reduzir Erros:** Sincronização automatizada entre CRMs, planilhas e APIs.

---

## 🛠️ Stack Tecnológica
- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Type-safe)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS para micro-animações.
- **Ícones:** [FontAwesome v5](https://fontawesome.com/) (Implementação via Direct Component Imports).
- **Animações:** CSS Keyframes customizados para efeitos de glassmorphism e pulsação.

---

## ✨ Funcionalidades Principais

### 1. 🤖 Demonstrações ao Vivo (Interativas)
O site possui um simulador de chat real onde o usuário pode testar três tipos de inteligência:
- **Bot de Agendamento:** Fluxo lógico para reserva de serviços.
- **Estrela Guia:** Assistente astral baseado em IA para engajamento.
- **ELIZA Classic:** Simulador do primeiro bot de processamento de linguagem natural da história.

### 2. 📁 Catálogo de Bots Prontos
Uma seção filtrável com soluções pré-configuradas para:
- **WhatsApp:** Bots de cobrança, suporte e vendas.
- **Telegram:** Bots de alertas e gestão de grupos.
- **Gmail:** Automação de triagem e resposta de e-mails.

### 3. ⚙️ Hub de Serviços
Detalhamento de especialidades técnicas:
- Integrações com **N8N** e **Evolution API**.
- Dashboards de dados e automação de planilhas.
- Infraestrutura DevOps para bots (Docker, Cloud).

---

## 🏗️ Estrutura do Projeto

```text
src/
├── app/              # Rotas e Layouts (Next.js App Router)
├── components/       # Componentes de UI (Hero, Services, BotCatalog, etc.)
├── lib/
│   ├── data.ts       # Centralização de conteúdo e textos
│   ├── constants.ts  # Configurações de marca e links (WhatsApp, Redes)
│   └── FAProvider.tsx# Provedor de ícones para evitar flashes de conteúdo
└── styles/           # Globals.css com sistema de design
```

---

## 🔧 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Rodar em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Gerar build de produção:**
   ```bash
   npm run build
   ```

---

## 📧 Contato & Leads
O site é focado em direcionar o tráfego para conversas reais via WhatsApp. Todas as variáveis de contato podem ser editadas em `src/lib/constants.ts`.

---
*Desenvolvido com foco em alta performance e design premium por Ariramba Systemas.*
