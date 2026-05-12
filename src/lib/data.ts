// ─── Types ────────────────────────────────────────────────────
export type Service = {
  iconPrefix: "fas" | "fab";
  iconName: string;
  title: string;
  description: string;
  highlight?: boolean;
};

export type Problem = {
  iconName: string;
  title: string;
  description: string;
};

export type Step = {
  number: string;
  iconName: string;
  title: string;
  description: string;
};

export type Example = {
  iconPrefix: "fas" | "fab";
  iconName: string;
  title: string;
  description: string;
  tags: string[];
};

export type Benefit = {
  iconName: string;
  title: string;
  description: string;
};

export type BotCard = {
  platform: "whatsapp" | "telegram" | "gmail";
  iconPrefix: "fas" | "fab";
  iconName: string;
  name: string;
  description: string;
  tags: string[];
  status: "disponivel" | "em breve";
};

// ─── Serviços ────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    iconPrefix: "fab",
    iconName: "whatsapp",
    title: "WhatsApp Automation com N8N",
    description:
      "Automação completa de atendimento, disparo de mensagens, follow-ups e fluxos inteligentes usando N8N + Evolution API + WhatsApp Business.",
    highlight: true,
  },
  {
    iconPrefix: "fas",
    iconName: "project-diagram",
    title: "Fluxos com N8N",
    description:
      "Criação de workflows visuais no N8N para conectar qualquer serviço: CRMs, ERPs, planilhas, e-mails, APIs REST, webhooks e mais.",
  },
  {
    iconPrefix: "fas",
    iconName: "robot",
    title: "Bots Inteligentes",
    description:
      "Desenvolvimento de bots para WhatsApp, Telegram e e-mail com IA, menus interativos, coleta de dados e integração com sistemas.",
    highlight: true,
  },
  {
    iconPrefix: "fas",
    iconName: "plug",
    title: "Integrações com APIs",
    description:
      "Conexão entre sistemas via API REST, GraphQL e webhooks. Faço seu CRM, ERP, e-commerce ou app se comunicar com qualquer serviço.",
  },
  {
    iconPrefix: "fas",
    iconName: "file-excel",
    title: "Automacao de Planilhas",
    description:
      "Scripts que coletam, processam e exportam dados de planilhas Excel e Google Sheets de forma automatica e agendada.",
  },
  {
    iconPrefix: "fas",
    iconName: "server",
    title: "DevOps e Deploys",
    description:
      "Configuracao de servidores, Docker, CI/CD, VPS e automacao de deploys com Evolution API, N8N self-hosted e aplicacoes web.",
  },
  {
    iconPrefix: "fas",
    iconName: "chart-bar",
    title: "Dashboards e Relatorios",
    description:
      "Paineis visuais conectados aos seus dados reais. Relatorios automaticos gerados e enviados por e-mail ou WhatsApp.",
  },
  {
    iconPrefix: "fas",
    iconName: "layer-group",
    title: "Integracao entre Sistemas",
    description:
      "Conectamos sistemas legados, SaaS e internos de forma transparente, eliminando retrabalho e erros de sincronizacao.",
  },
  {
    iconPrefix: "fas",
    iconName: "code-branch",
    title: "Pipelines e ETL",
    description:
      "Pipelines de dados, jobs agendados (cron), transformacao e carga de dados entre bancos e servicos de forma automatizada.",
  },
];

// ─── Problemas que resolvo ────────────────────────────────────
export const PROBLEMS: Problem[] = [
  {
    iconName: "clock",
    title: "Trabalho manual e repetitivo",
    description:
      "Sua equipe gasta horas copiando dados entre sistemas ou preenchendo planilhas que poderiam ser automaticas.",
  },
  {
    iconName: "link",
    title: "Sistemas que nao se comunicam",
    description:
      "Seu CRM nao fala com o financeiro, o e-commerce nao atualiza o estoque. Tudo manual e sujeito a erro.",
  },
  {
    iconName: "whatsapp",
    title: "Atendimento lento no WhatsApp",
    description:
      "Clientes esperando resposta, mensagens perdidas e atendentes sobrecarregados com perguntas repetitivas.",
  },
  {
    iconName: "table",
    title: "Planilhas desorganizadas",
    description:
      "Dados espalhados em multiplas abas, sem padronizacao e dificeis de atualizar ou auditar.",
  },
  {
    iconName: "chart-line",
    title: "Falta de relatorios e visibilidade",
    description:
      "Voce nao sabe o que esta acontecendo na operacao em tempo real porque gerar um relatorio leva horas.",
  },
  {
    iconName: "cog",
    title: "Processos internos demorados",
    description:
      "Aprovacoes, notificacoes e fluxos que dependem de pessoas enviando e-mails manualmente para avancar.",
  },
  {
    iconName: "server",
    title: "Deploy manual e infra confusa",
    description:
      "Cada publicacao e um ritual arriscado. Falta automacao, monitoramento e documentacao do ambiente.",
  },
];

// ─── Como funciona ────────────────────────────────────────────
export const STEPS: Step[] = [
  {
    number: "01",
    iconName: "comments",
    title: "Entendimento da necessidade",
    description:
      "Conversamos pelo WhatsApp ou videochamada. Voce explica o problema, o processo atual e o resultado esperado. Sem jargao tecnico.",
  },
  {
    number: "02",
    iconName: "file-excel",
    title: "Proposta simples e objetiva",
    description:
      "Apresentamos uma proposta clara com escopo, prazo e investimento. Voce decide se avancamos — sem pressao.",
  },
  {
    number: "03",
    iconName: "code",
    title: "Desenvolvimento da solucao",
    description:
      "Desenvolvemos a automacao ou integracao com atualizacoes de progresso. Voce acompanha de perto e pode dar feedback.",
  },
  {
    number: "04",
    iconName: "check-circle",
    title: "Entrega, teste e suporte",
    description:
      "Entregamos juntos, testamos os cenarios reais e ficamos disponiveis para ajustes e duvidas apos a entrega.",
  },
];

// ─── Exemplos de soluções ─────────────────────────────────────
export const EXAMPLES: Example[] = [
  {
    iconPrefix: "fab",
    iconName: "whatsapp",
    title: "Bot de Atendimento no WhatsApp",
    description:
      "Responde perguntas frequentes, coleta dados do cliente, agenda reunioes e transfere para humano quando necessario — com Evolution API e N8N.",
    tags: ["WhatsApp", "N8N", "Evolution API"],
  },
  {
    iconPrefix: "fas",
    iconName: "code-branch",
    title: "Formulario para CRM Automatico",
    description:
      "Leads do seu site vao direto para o CRM, ja categorizados e com notificacao para o vendedor responsavel via WhatsApp.",
    tags: ["Integracao", "CRM", "Webhook"],
  },
  {
    iconPrefix: "fas",
    iconName: "money-bill-wave",
    title: "Automacao de Cobrancas",
    description:
      "Sistema que envia lembretes de vencimento, boletos por e-mail/WhatsApp e atualiza o status no financeiro automaticamente.",
    tags: ["Financeiro", "WhatsApp", "Email"],
  },
  {
    iconPrefix: "fas",
    iconName: "chart-bar",
    title: "Dashboard Financeiro",
    description:
      "Painel com receitas, despesas, inadimplencia e projecoes conectado diretamente ao seu banco de dados ou planilha.",
    tags: ["Dashboard", "Relatorio", "Dados"],
  },
  {
    iconPrefix: "fas",
    iconName: "file-excel",
    title: "Relatorios Automaticos",
    description:
      "Script agendado que coleta dados de multiplas fontes, consolida e envia um relatorio formatado por e-mail toda manha.",
    tags: ["Script", "Agendamento", "Email"],
  },
  {
    iconPrefix: "fas",
    iconName: "rocket",
    title: "Pipeline de Deploy Automatizado",
    description:
      "Cada push no GitHub dispara testes, build e deploy automatico na VPS com N8N monitorando o processo.",
    tags: ["DevOps", "CI/CD", "Docker"],
  },
];

// ─── Benefícios ───────────────────────────────────────────────
export const BENEFITS: Benefit[] = [
  {
    iconName: "clock",
    title: "Economia de tempo",
    description:
      "Horas de trabalho manual transformadas em segundos de execucao automatica.",
  },
  {
    iconName: "shield-alt",
    title: "Menos erros manuais",
    description:
      "Processos automatizados sao consistentes. Chega de dados incorretos por falha humana.",
  },
  {
    iconName: "chart-area",
    title: "Mais produtividade",
    description:
      "Sua equipe foca no que importa. As tarefas chatas ficam por conta das automacoes.",
  },
  {
    iconName: "rocket",
    title: "Processos escalaveis",
    description:
      "Uma automacao bem feita funciona para 10 ou 10.000 registros, sem esforco extra.",
  },
  {
    iconName: "users",
    title: "Melhor atendimento",
    description:
      "Clientes recebem respostas mais rapidas e consistentes, aumentando satisfacao.",
  },
  {
    iconName: "eye",
    title: "Mais controle da operacao",
    description:
      "Visibilidade real do que acontece na sua empresa, em tempo real, sem planilhas.",
  },
];

// ─── Catálogo de Bots ─────────────────────────────────────────
export const BOT_CATALOG: BotCard[] = [
  // WhatsApp bots
  {
    platform: "whatsapp",
    iconPrefix: "fab",
    iconName: "whatsapp",
    name: "Bot de Agendamento",
    description:
      "Agenda consultas, reunioes e servicos diretamente no WhatsApp. Integra com Google Calendar e envia lembretes automaticos.",
    tags: ["Agendamento", "Calendar", "N8N"],
    status: "disponivel",
  },
  {
    platform: "whatsapp",
    iconPrefix: "fab",
    iconName: "whatsapp",
    name: "Bot de Cobranca",
    description:
      "Envia lembretes de vencimento, segunda via de boletos e atualiza status de pagamento automaticamente.",
    tags: ["Financeiro", "Cobranca", "Evolution API"],
    status: "disponivel",
  },
  {
    platform: "whatsapp",
    iconPrefix: "fab",
    iconName: "whatsapp",
    name: "Bot de Atendimento",
    description:
      "Atendimento inicial automatizado com menu interativo, FAQ e transferencia para humano quando necessario.",
    tags: ["Atendimento", "FAQ", "IA"],
    status: "disponivel",
  },
  {
    platform: "whatsapp",
    iconPrefix: "fab",
    iconName: "whatsapp",
    name: "Bot de Vendas",
    description:
      "Qualifica leads, apresenta produtos, envia catalogo e fecha pedidos diretamente no WhatsApp.",
    tags: ["Vendas", "E-commerce", "CRM"],
    status: "disponivel",
  },
  {
    platform: "whatsapp",
    iconPrefix: "fab",
    iconName: "whatsapp",
    name: "Bot de Pesquisa NPS",
    description:
      "Coleta feedback e NPS automaticamente apos atendimentos ou compras, com relatorio consolidado.",
    tags: ["NPS", "Feedback", "Relatorio"],
    status: "disponivel",
  },
  // Telegram bots
  {
    platform: "telegram",
    iconPrefix: "fab",
    iconName: "telegram",
    name: "Bot de Alertas e Monitoramento",
    description:
      "Envia alertas em tempo real de sistemas, servidores, erros de aplicacao e metricas de negocio no Telegram.",
    tags: ["DevOps", "Alertas", "Monitoring"],
    status: "disponivel",
  },
  {
    platform: "telegram",
    iconPrefix: "fab",
    iconName: "telegram",
    name: "Bot de Relatorios Diarios",
    description:
      "Gera e envia relatorios automaticos de vendas, financeiro e operacao todos os dias no horario configurado.",
    tags: ["Relatorio", "Agendamento", "BI"],
    status: "disponivel",
  },
  {
    platform: "telegram",
    iconPrefix: "fab",
    iconName: "telegram",
    name: "Estrela Guia — Assistente Astral",
    description:
      "Bot de orientacao astrologica e tarot com IA. Responde perguntas com simbolismo, intuitivo e envolvente.",
    tags: ["IA", "Entretenimento", "Unico"],
    status: "disponivel",
  },
  {
    platform: "telegram",
    iconPrefix: "fab",
    iconName: "telegram",
    name: "Bot de Noticias e Feeds",
    description:
      "Agrega noticias de RSS feeds, blogs e APIs de noticias e entrega resumos personalizados no Telegram.",
    tags: ["RSS", "Noticias", "Automacao"],
    status: "disponivel",
  },
  // Gmail bots
  {
    platform: "gmail",
    iconPrefix: "fab",
    iconName: "google",
    name: "Classificador de E-mails",
    description:
      "Classifica, rotula e organiza e-mails automaticamente com base em regras inteligentes e IA.",
    tags: ["Gmail", "IA", "Organizacao"],
    status: "disponivel",
  },
  {
    platform: "gmail",
    iconPrefix: "fab",
    iconName: "google",
    name: "Resposta Automatica Inteligente",
    description:
      "Gera rascunhos de resposta com IA para e-mails frequentes, acelerando o atendimento por e-mail.",
    tags: ["IA", "Atendimento", "Gmail"],
    status: "disponivel",
  },
  {
    platform: "gmail",
    iconPrefix: "fab",
    iconName: "google",
    name: "Pipeline de Leads por E-mail",
    description:
      "Extrai dados de e-mails de leads e dispara automaticamente para CRM, planilha e notificacao no WhatsApp.",
    tags: ["CRM", "Leads", "N8N"],
    status: "disponivel",
  },
];
