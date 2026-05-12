import {
  faRobot, faBolt, faCode, faServer, faCloud, faDatabase,
  faGlobe, faChartLine, faTools, faShieldAlt, faCogs,
  faLayerGroup, faNetworkWired, faTerminal, faInfinity,
  faCheckCircle, faClock, faStar, faCalendar, faArrowRight,
  faLaptopCode, faProjectDiagram, faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp, faTelegram, faDocker, faGithub, faAws,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// ─── Tipos ────────────────────────────────────────────────────
export type ServiceCategory =
  | "automacao"
  | "desenvolvimento"
  | "devops"
  | "sites"
  | "dados";

export type BotPlatform = "whatsapp" | "telegram" | "gmail";
export type CatalogPlatform = BotPlatform | "web" | "api";
export type CatalogStatus = "disponivel" | "em-breve";

export interface ServiceItem {
  icon: IconDefinition;
  title: string;
  description: string;
  tags: string[];
}

export interface ServiceGroup {
  category: ServiceCategory;
  icon: IconDefinition;
  color: string;
  label: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface CatalogItem {
  name: string;
  description: string;
  platform: CatalogPlatform;
  tags: string[];
  status: CatalogStatus;
  icon: IconDefinition;
}

export interface SolutionCard {
  icon: IconDefinition;
  color: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  icon: IconDefinition;
  number: string;
  title: string;
  description: string;
}

export interface TechItem {
  icon: IconDefinition;
  label: string;
}

// ─── Grupos de Serviços ───────────────────────────────────────
export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    category: "automacao",
    icon: faRobot,
    color: "#6366f1",
    label: "Automação Inteligente",
    title: "Automatize processos e ganhe escala",
    description:
      "Eliminamos tarefas repetitivas com fluxos automatizados, bots e integrações entre sistemas.",
    items: [
      {
        icon: faWhatsapp,
        title: "WhatsApp Automation",
        description:
          "Bots de atendimento, agendamento e vendas via WhatsApp com N8N e Evolution API.",
        tags: ["N8N", "Evolution API", "WhatsApp Business"],
      },
      {
        icon: faNetworkWired,
        title: "Integrações de Sistemas",
        description:
          "Conectamos ERPs, CRMs, planilhas, APIs externas e plataformas SaaS em um único fluxo.",
        tags: ["REST API", "Webhooks", "N8N", "Zapier"],
      },
      {
        icon: faRobot,
        title: "Bots Inteligentes",
        description:
          "Bots com IA para Telegram, WhatsApp e Gmail. Atendimento 24/7 sem equipe dedicada.",
        tags: ["IA", "NLP", "Telegram", "Gmail"],
      },
      {
        icon: faInfinity,
        title: "Fluxos & Pipelines",
        description:
          "Pipelines de dados e automação de processos operacionais de ponta a ponta.",
        tags: ["N8N", "Apache Airflow", "Triggers"],
      },
    ],
  },
  {
    category: "desenvolvimento",
    icon: faLaptopCode,
    color: "#06b6d4",
    label: "Desenvolvimento de Sistemas",
    title: "Sistemas que escalam com seu negócio",
    description:
      "Desenvolvemos aplicações web robustas, APIs escaláveis e plataformas SaaS prontas para produção.",
    items: [
      {
        icon: faGlobe,
        title: "Aplicações Web",
        description:
          "Sistemas administrativos, plataformas SaaS e painéis com React, Next.js e TypeScript.",
        tags: ["Next.js", "React", "TypeScript"],
      },
      {
        icon: faDatabase,
        title: "APIs Escaláveis",
        description:
          "APIs REST e GraphQL performáticas, documentadas e seguras com autenticação JWT.",
        tags: ["FastAPI", "Node.js", "GraphQL", "JWT"],
      },
      {
        icon: faChartLine,
        title: "Dashboards & Analytics",
        description:
          "Painéis de controle com dados em tempo real, gráficos interativos e relatórios automáticos.",
        tags: ["Charts", "Realtime", "PostgreSQL"],
      },
      {
        icon: faServer,
        title: "Sistemas Internos",
        description:
          "Ferramentas internas sob medida que substituem planilhas e processos manuais.",
        tags: ["ERP", "CRM", "Automação"],
      },
    ],
  },
  {
    category: "devops",
    icon: faDocker,
    color: "#8b5cf6",
    label: "Pipelines & DevOps",
    title: "Infraestrutura moderna e confiável",
    description:
      "Deploy automatizado, infraestrutura escalável e observabilidade para sistemas em produção.",
    items: [
      {
        icon: faDocker,
        title: "Containerização",
        description:
          "Docker e Kubernetes para aplicações isoladas, reproduzíveis e escaláveis em produção.",
        tags: ["Docker", "Kubernetes", "Compose"],
      },
      {
        icon: faCloud,
        title: "Cloud & Infraestrutura",
        description:
          "Deploy e gestão em AWS, GCP e VPS com IaC via Terraform e automação completa.",
        tags: ["AWS", "GCP", "Terraform", "VPS"],
      },
      {
        icon: faGithub,
        title: "CI/CD Automatizado",
        description:
          "Pipelines de entrega contínua com GitHub Actions, testes automatizados e deploys zero-downtime.",
        tags: ["GitHub Actions", "CI/CD", "Jest"],
      },
      {
        icon: faShieldAlt,
        title: "Observabilidade",
        description:
          "Monitoramento, logs centralizados e alertas para aplicações em produção 24/7.",
        tags: ["Grafana", "Prometheus", "Sentry"],
      },
    ],
  },
  {
    category: "sites",
    icon: faGlobe,
    color: "#f59e0b",
    label: "Sites & Landing Pages",
    title: "Presença digital que converte",
    description:
      "Landing pages de alta conversão, sites institucionais e interfaces modernas com foco em performance.",
    items: [
      {
        icon: faBolt,
        title: "Landing Pages Premium",
        description:
          "Páginas de conversão com design moderno, animações e CTAs estratégicos para maximizar leads.",
        tags: ["Conversão", "SEO", "Performance"],
      },
      {
        icon: faCode,
        title: "Sites Institucionais",
        description:
          "Websites profissionais com design responsivo, SEO on-page e integração com analytics.",
        tags: ["Next.js", "SEO", "Analytics"],
      },
      {
        icon: faChartLine,
        title: "Interfaces Modernas",
        description:
          "UI/UX premium com Tailwind CSS, animações suaves e experiências de usuário excepcionais.",
        tags: ["UI/UX", "Tailwind", "Animações"],
      },
      {
        icon: faCogs,
        title: "Integração com Marketing",
        description:
          "Landing pages com pixels, automações de lead, CRM e funis de vendas integrados.",
        tags: ["Meta Pixel", "GTM", "Hotjar"],
      },
    ],
  },
  {
    category: "dados",
    icon: faSearch,
    color: "#ec4899",
    label: "Dados & Web Scraping",
    title: "Dados como vantagem competitiva",
    description:
      "Coleta automatizada, processamento e visualização de dados para decisões mais rápidas e inteligentes.",
    items: [
      {
        icon: faSearch,
        title: "Web Scraping Inteligente",
        description:
          "Coleta automatizada de dados de qualquer site com Python, Playwright e anti-detecção.",
        tags: ["Python", "Playwright", "Scrapy"],
      },
      {
        icon: faDatabase,
        title: "Pipelines de Dados",
        description:
          "ETL automatizado, processamento e armazenamento de grandes volumes de dados estruturados.",
        tags: ["ETL", "PostgreSQL", "Redis"],
      },
      {
        icon: faChartLine,
        title: "Relatórios Automáticos",
        description:
          "Geração automática de relatórios em PDF/Excel com dados atualizados e distribuídos por e-mail.",
        tags: ["Automação", "PDF", "Excel"],
      },
      {
        icon: faShieldAlt,
        title: "Monitoramento de Dados",
        description:
          "Alertas automáticos quando preços, estoques ou métricas críticas mudam no mercado.",
        tags: ["Alertas", "Monitoramento", "API"],
      },
    ],
  },
];

// ─── Cartões de Soluções ──────────────────────────────────────
export const SOLUTION_CARDS: SolutionCard[] = [
  { icon: faRobot, color: "#6366f1", title: "Bots Inteligentes", description: "WhatsApp, Telegram e Gmail com IA e NLP" },
  { icon: faGlobe, color: "#06b6d4", title: "Sistemas Web", description: "Plataformas SaaS e aplicações escaláveis" },
  { icon: faChartLine, color: "#8b5cf6", title: "Dashboards", description: "Analytics e painéis em tempo real" },
  { icon: faNetworkWired, color: "#f59e0b", title: "Integrações API", description: "Conectando sistemas e plataformas" },
  { icon: faBolt, color: "#ec4899", title: "Landing Pages", description: "Alta conversão com design premium" },
  { icon: faInfinity, color: "#10b981", title: "Pipelines", description: "Automação de fluxos e processos" },
  { icon: faDocker, color: "#3b82f6", title: "DevOps & Cloud", description: "Docker, CI/CD e infraestrutura moderna" },
  { icon: faSearch, color: "#f97316", title: "Web Scraping", description: "Coleta inteligente de dados automática" },
  { icon: faDatabase, color: "#14b8a6", title: "Dados & ETL", description: "Pipelines de dados e relatórios automáticos" },
  { icon: faWhatsapp, color: "#25d366", title: "WhatsApp Automation", description: "N8N, Evolution API e bots de vendas" },
];

// ─── Catálogo de Soluções ─────────────────────────────────────
export const CATALOG_ITEMS: CatalogItem[] = [
  // WhatsApp
  {
    name: "Bot de Agendamento",
    description: "Agenda consultas, reuniões e serviços diretamente no WhatsApp com integração ao Google Calendar e lembretes automáticos.",
    platform: "whatsapp",
    tags: ["Agendamento", "Calendar", "N8N"],
    status: "disponivel",
    icon: faCalendar,
  },
  {
    name: "Bot de Cobrança",
    description: "Envia lembretes de vencimento, segunda via de boletos e atualiza status de pagamento automaticamente.",
    platform: "whatsapp",
    tags: ["Financeiro", "Cobrança", "Evolution API"],
    status: "disponivel",
    icon: faBolt,
  },
  {
    name: "Bot de Atendimento",
    description: "Atendimento inicial automatizado com menu interativo, FAQ e transferência para humano quando necessário.",
    platform: "whatsapp",
    tags: ["Atendimento", "FAQ", "IA"],
    status: "disponivel",
    icon: faRobot,
  },
  {
    name: "Bot de Vendas",
    description: "Apresenta catálogo de produtos, coleta dados do lead e fecha pedidos via WhatsApp com integração ao CRM.",
    platform: "whatsapp",
    tags: ["E-commerce", "CRM", "Vendas"],
    status: "disponivel",
    icon: faChartLine,
  },
  {
    name: "Bot de Pesquisa NPS",
    description: "Coleta satisfação dos clientes automaticamente após atendimento e gera relatórios de NPS mensais.",
    platform: "whatsapp",
    tags: ["NPS", "Pesquisa", "Analytics"],
    status: "em-breve",
    icon: faStar,
  },
  // Telegram
  {
    name: "Bot de Alertas",
    description: "Monitora sistemas, servidores e APIs e envia alertas instantâneos no Telegram quando algo falha.",
    platform: "telegram",
    tags: ["DevOps", "Monitoramento", "Alertas"],
    status: "disponivel",
    icon: faBolt,
  },
  {
    name: "Bot de Gestão de Grupos",
    description: "Modera grupos, aplica regras, bane usuários e gerencia permissões automaticamente.",
    platform: "telegram",
    tags: ["Moderação", "Automação", "Comunidade"],
    status: "disponivel",
    icon: faShieldAlt,
  },
  {
    name: "Bot de Notícias",
    description: "Monitora fontes RSS, sites e APIs e dispara resumos automáticos de notícias para grupos.",
    platform: "telegram",
    tags: ["RSS", "Scraping", "Conteúdo"],
    status: "disponivel",
    icon: faSearch,
  },
  {
    name: "Bot de Preços",
    description: "Monitora preços de produtos em e-commerces e notifica quando há queda ou variação significativa.",
    platform: "telegram",
    tags: ["Scraping", "E-commerce", "Preços"],
    status: "em-breve",
    icon: faChartLine,
  },
  // Gmail
  {
    name: "Triagem Automática",
    description: "Classifica e-mails por categoria, prioridade e cliente usando IA e aplica labels automaticamente.",
    platform: "gmail",
    tags: ["IA", "Classificação", "Produtividade"],
    status: "disponivel",
    icon: faRobot,
  },
  {
    name: "Respostas Automáticas",
    description: "Responde e-mails comuns com templates inteligentes baseados no contexto e histórico do remetente.",
    platform: "gmail",
    tags: ["NLP", "Templates", "Automação"],
    status: "disponivel",
    icon: faCogs,
  },
  {
    name: "Extração de Dados",
    description: "Extrai dados de e-mails (notas fiscais, pedidos, contratos) e alimenta planilhas e CRMs automaticamente.",
    platform: "gmail",
    tags: ["ETL", "CRM", "Planilhas"],
    status: "disponivel",
    icon: faDatabase,
  },
];

// ─── Como Funciona ─────────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: faProjectDiagram,
    number: "01",
    title: "Diagnóstico",
    description: "Mapeamos seus processos, identificamos gargalos e definimos a solução mais eficiente para sua realidade.",
  },
  {
    icon: faCode,
    number: "02",
    title: "Desenvolvimento",
    description: "Construímos a solução com a stack ideal — seja um bot, sistema web, pipeline ou automação completa.",
  },
  {
    icon: faTools,
    number: "03",
    title: "Integração",
    description: "Conectamos a solução aos seus sistemas existentes, com testes rigorosos e documentação completa.",
  },
  {
    icon: faChartLine,
    number: "04",
    title: "Monitoramento",
    description: "Acompanhamos o desempenho em produção, ajustamos e entregamos suporte para garantir resultados reais.",
  },
];

// ─── Tech Stack ────────────────────────────────────────────────
export const TECH_STACK: TechItem[] = [
  { icon: faCode, label: "Next.js / React" },
  { icon: faCode, label: "Python / FastAPI" },
  { icon: faDocker, label: "Docker / K8s" },
  { icon: faAws, label: "AWS / GCP" },
  { icon: faNetworkWired, label: "N8N / Zapier" },
  { icon: faDatabase, label: "PostgreSQL / Redis" },
  { icon: faRobot, label: "IA / NLP" },
  { icon: faShieldAlt, label: "Auth / Security" },
];

// ─── Stats ─────────────────────────────────────────────────────
export const STATS = [
  { value: "50+", label: "Projetos entregues" },
  { value: "200h+", label: "Economizadas por mês por cliente" },
  { value: "99.9%", label: "Uptime dos sistemas" },
  { value: "48h", label: "Tempo médio de entrega de MVPs" },
];
// ─── Benefícios ─────────────────────────────────────────────
export const BENEFITS = [
  { iconName: "clock", title: "Recuperação de Tempo", description: "Sua equipe deixa de fazer tarefas manuais repetitivas e foca no que realmente traz lucro." },
  { iconName: "shield-alt", title: "Redução de Erros", description: "Processos automatizados não esquecem passos nem cometem erros de digitação ou cálculo." },
  { iconName: "chart-area", title: "Escalabilidade Real", description: "Aumente seu volume de operações sem precisar contratar mais pessoas para tarefas básicas." },
  { iconName: "rocket", title: "Velocidade de Entrega", description: "Sistemas e bots respondem em milissegundos, garantindo agilidade para o cliente final." },
  { iconName: "users", title: "Foco no Cliente", description: "Libere seu time para o atendimento consultivo e estratégico, enquanto o bot resolve o trivial." },
  { iconName: "eye", title: "Observabilidade Total", description: "Tenha logs e métricas de cada passo do seu negócio em dashboards de tempo real." },
];
// ─── Exemplos ───────────────────────────────────────────────
export const EXAMPLES = [
  {
    iconPrefix: "fas",
    iconName: "code-branch",
    title: "Integração CRM x WhatsApp",
    description: "Sincronização bidirecional de contatos e conversas entre HubSpot e WhatsApp Business.",
    tags: ["HubSpot", "N8N", "API"]
  },
  {
    iconPrefix: "fas",
    iconName: "money-bill-wave",
    title: "Checkout de Pagamentos",
    description: "Sistema de pagamento customizado com split e emissão automática de NF-e via Webhook.",
    tags: ["Stripe", "Asaas", "Financeiro"]
  },
  {
    iconPrefix: "fas",
    iconName: "chart-bar",
    title: "Dashboard de Performance",
    description: "Painel administrativo em Next.js monitorando 40+ métricas de bots em tempo real.",
    tags: ["Dashboard", "PostgreSQL", "Next.js"]
  },
  {
    iconPrefix: "fas",
    iconName: "file-excel",
    title: "Automação de Planilhas",
    description: "Processamento de 10k+ linhas diárias de dados brutos para relatórios BI automatizados.",
    tags: ["Python", "Pandas", "ETL"]
  },
  {
    iconPrefix: "fas",
    iconName: "rocket",
    title: "MVP de Software House",
    description: "Desenvolvimento rápido de plataforma de cursos online com área de membros e gestão.",
    tags: ["SaaS", "LXP", "EdTech"]
  }
];
// ─── Problemas ──────────────────────────────────────────────
export const PROBLEMS = [
  { iconName: "clock", title: "Tarefas Manuais Repetitivas", description: "Perda de tempo precioso preenchendo planilhas, enviando e-mails padrão ou copiando dados entre sistemas." },
  { iconName: "link", title: "Sistemas Desconectados", description: "Informações espalhadas por várias ferramentas que não se conversam, gerando retrabalho e erros." },
  { iconName: "whatsapp", title: "Atendimento Lento", description: "Clientes esperando horas por uma resposta simples no WhatsApp que poderia ser automatizada com IA." },
  { iconName: "table", title: "Caos nas Planilhas", description: "Planilhas gigantescas, lentas e propensas a erros humanos que travam a operação do seu negócio." },
  { iconName: "chart-line", title: "Falta de Dados", description: "Dificuldade em visualizar o desempenho real da sua empresa por falta de relatórios automatizados." },
  { iconName: "cog", title: "Processos Engessados", description: "Fluxos de trabalho que dependem de poucas pessoas e não escalam quando o volume de pedidos aumenta." },
];
