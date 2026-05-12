"use client";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faStar, faTerminal, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

// ─── Types ────────────────────────────────────────────────────
type Message = { role: "bot" | "user"; text: string };
type BotType = "agendamento" | "astral" | "eliza";

// ─── ELIZA classic pattern matcher ───────────────────────────
const elizaPatterns: Array<{ re: RegExp; responses: string[] }> = [
  {
    re: /\b(oi|ola|bom dia|boa tarde|boa noite|hello|hi)\b/i,
    responses: [
      "Ola! Sou ELIZA, como voce se sente hoje?",
      "Ola! O que esta passando pela sua mente?",
    ],
  },
  {
    re: /\bpreciso\b/i,
    responses: [
      "Por que voce precisa disso?",
      "O que aconteceria se voce nao conseguisse?",
      "Voce realmente precisa disso?",
    ],
  },
  {
    re: /\bsinto\b|\bme sinto\b|\bsinto-me\b/i,
    responses: [
      "Por que voce se sente assim?",
      "Ha quanto tempo voce sente isso?",
      "Isso te incomoda muito?",
    ],
  },
  {
    re: /\btriste\b|\bdeprimido\b|\bmal\b/i,
    responses: [
      "Sinto muito ouvir isso. O que te deixou assim?",
      "Voce quer falar sobre o que esta sentindo?",
    ],
  },
  {
    re: /\bfeliz\b|\bcontente\b|\bbem\b/i,
    responses: [
      "Que bom! O que te faz se sentir assim?",
      "Por que voce se sente feliz?",
    ],
  },
  {
    re: /\bminha mae\b|\bmeu pai\b|\bfamilia\b/i,
    responses: [
      "Fale mais sobre sua familia.",
      "Como e sua relacao com ela(e)?",
    ],
  },
  {
    re: /\bvoc[eê]\b/i,
    responses: [
      "Nao falemos de mim, falemos de voce.",
      "Por que voce esta me perguntando isso?",
    ],
  },
  {
    re: /\bporque\b|\bpor que\b/i,
    responses: [
      "Essa e uma boa pergunta. O que voce acha?",
      "Por que voce quer saber?",
    ],
  },
  {
    re: /.+/,
    responses: [
      "Continue...",
      "Interessante. Pode me contar mais?",
      "E como isso te afeta?",
      "O que mais?",
      "Voce pode elaborar sobre isso?",
    ],
  },
];

function elizaReply(input: string): string {
  for (const { re, responses } of elizaPatterns) {
    if (re.test(input)) {
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }
  return "Interessante. Continue...";
}

// ─── Agendamento bot ──────────────────────────────────────────
const scheduleFlow: Array<{ ask: string; key: string }> = [
  { ask: "Ola! Sou o assistente de agendamento da Ariramba Systemas.\n\nQual servico voce gostaria de agendar?\n\n1. Consultoria de automacao\n2. Demonstracao de bot\n3. Reuniao tecnica", key: "servico" },
  { ask: "Perfeito! Qual o seu nome completo?", key: "nome" },
  { ask: "Qual data prefere? (ex: 15/06, semana que vem, qualquer dia)", key: "data" },
  { ask: "Qual horario prefere?\n\n1. Manha (9h-12h)\n2. Tarde (13h-17h)\n3. Noite (18h-20h)", key: "horario" },
  { ask: "Agendamento confirmado! Voce recebera uma confirmacao no WhatsApp em breve.\n\nAgradecemos o contato com a Ariramba Systemas!", key: "done" },
];

// ─── Astral bot ───────────────────────────────────────────────
const astralResponses: Record<string, string[]> = {
  signo: [
    "Os astros revelam que Aries traz forca e coragem neste ciclo.",
    "Touro esta sob a influencia de Venus — amor e prosperidade se aproximam.",
    "Gemeos sente a dualidade de Mercurio — comunicacao e novos caminhos.",
    "Cancer recebe a protecao da Lua — intuicao aguçada e emocoes profundas.",
    "Leao brilla sob o Sol — lideranca e criatividade em alta.",
    "Virgem recebe clareza de Mercurio — detalhes e analise sao seus aliados.",
    "Libra busca equilibrio com Venus — relacionamentos em foco.",
    "Escorpiao mergulha nas profundezas de Plutao — transformacao poderosa.",
    "Sagitario expande com Jupiter — novos horizontes te chamam.",
    "Capricornio ascende com Saturno — disciplina gera grandes frutos.",
    "Aquario inova com Urano — ideias revolucionarias surgem.",
    "Peixes flutua com Netuno — sonhos e intuicao guiam seu caminho.",
  ],
  tarot: [
    "O Louco aparece — coragem para novos comecos. A jornada esta adiante.",
    "A Sacerdotisa fala — confie na sua intuicao interior. A resposta ja esta em voce.",
    "A Estrela surge — esperança e renovacao. Tempos melhores se aproximam.",
    "O Sol brilha em sua leitura — alegria, sucesso e clareza te esperam.",
    "A Torre aparece — uma mudança necessaria, ainda que disruptiva. Confie no processo.",
    "A Roda da Fortuna gira — o destino esta em movimento. Esteja aberto.",
  ],
  default: [
    "Percebo uma energia forte ao seu redor. Os astros estao alinhados para mudancas.",
    "Vejo que Mercurio esta em posicao favoravel para voce agora. E hora de agir.",
    "Os planetas indicam um periodo de reflexao profunda. Ouça sua intuicao.",
    "A Lua Nova traz novas sementes. Plante seus desejos com intencao clara.",
    "Energia de Jupiter expande seus horizontes — oportunidades se abrem.",
    "Saturno nos lembra: crescimento real exige paciencia e disciplina.",
  ],
};

function astralReply(input: string): string {
  const lower = input.toLowerCase();
  if (/signo|aries|touro|gemeos|cancer|leao|virgem|libra|escorpiao|sagitario|capricornio|aquario|peixes/i.test(lower)) {
    return astralResponses.signo[Math.floor(Math.random() * astralResponses.signo.length)];
  }
  if (/tarot|carta/i.test(lower)) {
    return astralResponses.tarot[Math.floor(Math.random() * astralResponses.tarot.length)];
  }
  return astralResponses.default[Math.floor(Math.random() * astralResponses.default.length)];
}

// ─── Chat UI Component ────────────────────────────────────────
function ChatWindow({ messages, onSend, placeholder, themeColor, typing }: {
  messages: Message[];
  onSend: (msg: string) => void;
  placeholder: string;
  themeColor: string;
  typing: boolean;
}) {
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    onSend(input.trim());
    setInput("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "420px", background: "var(--bg-card)", border: `1px solid ${themeColor}40`, borderRadius: "1rem", overflow: "hidden" }}>
      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
            <div style={{
              maxWidth: "80%",
              padding: "0.65rem 1rem",
              borderRadius: msg.role === "user" ? "1rem 1rem 0 1rem" : "1rem 1rem 1rem 0",
              background: msg.role === "user" ? `linear-gradient(135deg, ${themeColor}, ${themeColor}cc)` : "rgba(255,255,255,0.06)",
              color: "var(--text-primary)",
              fontSize: "0.875rem",
              lineHeight: 1.6,
              whiteSpace: "pre-wrap",
              border: msg.role === "bot" ? "1px solid rgba(255,255,255,0.08)" : "none",
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        {typing && (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{ padding: "0.65rem 1rem", borderRadius: "1rem 1rem 1rem 0", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", gap: "4px", alignItems: "center" }}>
              {[0, 1, 2].map((n) => (
                <span key={n} style={{ width: "6px", height: "6px", borderRadius: "50%", background: themeColor, animation: `typing-dot 1.2s ${n * 0.2}s infinite` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{ padding: "0.75rem 1rem", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: "0.5rem" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder={placeholder}
          style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.5rem", padding: "0.6rem 0.875rem", color: "var(--text-primary)", fontSize: "0.875rem", outline: "none", fontFamily: "Inter, sans-serif" }}
        />
        <button
          onClick={send}
          style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.5rem", background: `linear-gradient(135deg, ${themeColor}, ${themeColor}cc)`, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
        >
          <FontAwesomeIcon icon={faPaperPlane} style={{ color: "white", fontSize: "0.8rem" }} />
        </button>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────
export function BotDemo() {
  const [active, setActive] = useState<BotType>("agendamento");

  // Agendamento state
  const [schedMsgs, setSchedMsgs] = useState<Message[]>([
    { role: "bot", text: scheduleFlow[0].ask },
  ]);
  const [schedStep, setSchedStep] = useState(1);
  const [schedTyping, setSchedTyping] = useState(false);

  // Astral state
  const [astralMsgs, setAstralMsgs] = useState<Message[]>([
    { role: "bot", text: "Bem-vindo ao Estrela Guia — seu assistente astral.\n\nPergunte sobre seu signo, peça uma leitura de tarot, ou simplesmente compartilhe o que esta sentindo. Os astros estao ouvindo." },
  ]);
  const [astralTyping, setAstralTyping] = useState(false);

  // ELIZA state
  const [elizaMsgs, setElizaMsgs] = useState<Message[]>([
    { role: "bot", text: "Ola. Sou ELIZA, um dos primeiros chatbots da historia (MIT, 1966). Como voce se sente hoje?" },
  ]);
  const [elizaTyping, setElizaTyping] = useState(false);

  const delay = (fn: () => void, ms = 900) => setTimeout(fn, ms);

  const sendSchedule = (msg: string) => {
    setSchedMsgs((prev) => [...prev, { role: "user", text: msg }]);
    if (schedStep < scheduleFlow.length) {
      setSchedTyping(true);
      delay(() => {
        setSchedTyping(false);
        setSchedMsgs((prev) => [...prev, { role: "bot", text: scheduleFlow[schedStep].ask }]);
        setSchedStep((s) => s + 1);
      }, 1200);
    }
  };

  const sendAstral = (msg: string) => {
    setAstralMsgs((prev) => [...prev, { role: "user", text: msg }]);
    setAstralTyping(true);
    delay(() => {
      setAstralTyping(false);
      setAstralMsgs((prev) => [...prev, { role: "bot", text: astralReply(msg) }]);
    }, 1400);
  };

  const sendEliza = (msg: string) => {
    setElizaMsgs((prev) => [...prev, { role: "user", text: msg }]);
    setElizaTyping(true);
    delay(() => {
      setElizaTyping(false);
      setElizaMsgs((prev) => [...prev, { role: "bot", text: elizaReply(msg) }]);
    }, 1000);
  };

  const bots = [
    { key: "agendamento" as BotType, label: "Bot de Agendamento", icon: faCalendarAlt, color: "#6366f1", subtitle: "Agende servicos via chat" },
    { key: "astral" as BotType, label: "Estrela Guia", icon: faStar, color: "#f59e0b", subtitle: "Assistente astral com IA" },
    { key: "eliza" as BotType, label: "ELIZA Classic", icon: faTerminal, color: "#06b6d4", subtitle: "O bot pioneiro de 1966" },
  ];

  return (
    <section id="demos" style={{ padding: "6rem 0", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="section-header">
          <div className="section-label">
            <FontAwesomeIcon icon={faCalendarAlt} /> Demonstracoes ao vivo
          </div>
          <h2 className="section-title">
            Experimente nossos{" "}
            <span className="gradient-text">bots agora mesmo</span>
          </h2>
          <p className="section-subtitle">
            Interaja com tres bots diferentes diretamente aqui na pagina. Cada um demonstra
            uma capacidade real que entregamos em producao.
          </p>
        </div>

        {/* Tab selector */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", marginBottom: "2.5rem" }}>
          {bots.map(({ key, label, icon, color, subtitle }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.4rem",
                padding: "1rem 1.5rem",
                borderRadius: "0.875rem",
                border: active === key ? `2px solid ${color}` : "2px solid transparent",
                background: active === key ? `${color}18` : "var(--bg-card)",
                cursor: "pointer",
                transition: "all 0.2s",
                minWidth: "160px",
              }}
            >
              <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: active === key ? `${color}30` : "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FontAwesomeIcon icon={icon} style={{ color: active === key ? color : "var(--text-muted)", fontSize: "1rem" }} />
              </div>
              <span style={{ fontWeight: 700, fontSize: "0.875rem", color: active === key ? "var(--text-primary)" : "var(--text-secondary)" }}>{label}</span>
              <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{subtitle}</span>
            </button>
          ))}
        </div>

        {/* Chat windows */}
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          {/* Bot header */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.875rem 1.25rem", background: "var(--bg-card)", border: "1px solid var(--border-color)", borderBottom: "none", borderRadius: "1rem 1rem 0 0" }}>
            <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: `${bots.find(b => b.key === active)?.color}30`, border: `1px solid ${bots.find(b => b.key === active)?.color}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FontAwesomeIcon icon={bots.find(b => b.key === active)?.icon ?? faCalendarAlt} style={{ color: bots.find(b => b.key === active)?.color, fontSize: "0.8rem" }} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-primary)" }}>{bots.find(b => b.key === active)?.label}</div>
              <div style={{ fontSize: "0.72rem", color: "#25d366", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#25d366", display: "inline-block" }} />
                Online agora
              </div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <span className="tag">Demo interativa</span>
            </div>
          </div>

          {active === "agendamento" && (
            <ChatWindow messages={schedMsgs} onSend={sendSchedule} placeholder="Digite uma resposta..." themeColor="#6366f1" typing={schedTyping} />
          )}
          {active === "astral" && (
            <ChatWindow messages={astralMsgs} onSend={sendAstral} placeholder="Pergunte sobre seu signo ou tarot..." themeColor="#f59e0b" typing={astralTyping} />
          )}
          {active === "eliza" && (
            <ChatWindow messages={elizaMsgs} onSend={sendEliza} placeholder="Fale com ELIZA..." themeColor="#06b6d4" typing={elizaTyping} />
          )}
        </div>

        <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
          Demos simplificadas para ilustracao. Os bots em producao incluem integracao com WhatsApp/Telegram, banco de dados e IA avancada.
        </p>
      </div>

      <style>{`
        @keyframes typing-dot {
          0%, 60%, 100% { opacity: 0.2; transform: scale(0.8); }
          30% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
}
