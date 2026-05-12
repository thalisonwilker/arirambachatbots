"use client";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faRobot, faCalendar, faStar, faTerminal, 
  faChartPie, faNetworkWired, faMicrochip,
  faPlay, faCheckCircle, faChevronRight,
  faDatabase, faServer, faCodeBranch
} from "@fortawesome/free-solid-svg-icons";
import { WHATSAPP_URL } from "@/lib/constants";

type DemoType = "agendamento" | "astral" | "eliza" | "pipeline" | "dashboard";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
}

export function BotDemo() {
  const [activeTab, setActiveTab] = useState<DemoType>("agendamento");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (["agendamento", "astral", "eliza"].includes(activeTab)) {
      let initialMsg = "";
      if (activeTab === "agendamento") initialMsg = "Olá! Sou o assistente de agendamento da Ariramba Systemas. Como posso ajudar?\n\n1. Consultoria de automação\n2. Demonstração de bot\n3. Orçamento de sistema";
      if (activeTab === "astral") initialMsg = "Saudações estelares! Sou a Estrela Guia. Qual seu signo para que eu possa ler sua frequência tecnológica hoje?";
      if (activeTab === "eliza") initialMsg = "Hello. I am ELIZA. How are you feeling today?";
      
      setMessages([{ id: "1", text: initialMsg, sender: "bot" }]);
    } else {
      setMessages([]);
    }
  }, [activeTab]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || isTyping) return;

    const userMsg = inputText.trim();
    setInputText("");
    setMessages(prev => [...prev, { id: Date.now().toString(), text: userMsg, sender: "user" }]);
    
    setIsTyping(true);
    await new Promise(r => setTimeout(r, 1000 + Math.random() * 800));

    let botResponse = "";
    const input = userMsg.toLowerCase();

    if (activeTab === "agendamento") {
      if (input.includes("1") || input.includes("consultoria")) botResponse = "Ótima escolha! Temos horários amanhã às 10h ou 15h. Qual prefere?";
      else if (input.includes("2") || input.includes("demo")) botResponse = "Demonstração técnica agendada para as 17h. Enviarei o link em breve.";
      else botResponse = "Entendi. Pode informar seu WhatsApp para confirmarmos?";
    } else if (activeTab === "astral") {
      botResponse = "As estrelas dizem que sua infraestrutura está pronta para novos fluxos. O momento é ideal para integrar APIs.";
    } else if (activeTab === "eliza") {
      botResponse = "I see. Does that suggest anything else to you?";
    }

    setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), text: botResponse, sender: "bot" }]);
    setIsTyping(false);
  };

  return (
    <section id="demos" className="demo-section">
      <div className="section">
        <div className="section-header">
          <div className="section-label">
            <FontAwesomeIcon icon={faPlay} /> Live Demos
          </div>
          <h2 className="section-title">
            Experimente em <span className="gradient-text">Tempo Real</span>
          </h2>
          <p className="section-subtitle">
            Interaja com nossos assistentes ou visualize a performance de nossos pipelines e dashboards inteligentes.
          </p>
        </div>

        <div className="demo-container">
          {/* Tabs Sidebar */}
          <div className="demo-sidebar">
            <div className="sidebar-group-label">Inteligência & Atendimento</div>
            {[
              { id: "agendamento", label: "Agendamento", icon: faCalendar },
              { id: "astral", label: "Estrela Guia", icon: faStar },
              { id: "eliza", label: "ELIZA Classic", icon: faTerminal },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as DemoType)}
                className={`demo-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                <FontAwesomeIcon icon={tab.icon} className="tab-icon" />
                <span>{tab.label}</span>
              </button>
            ))}

            <div className="sidebar-group-label" style={{ marginTop: '2rem' }}>Sistemas & Infra</div>
            {[
              { id: "pipeline", label: "Pipeline Visual", icon: faNetworkWired },
              { id: "dashboard", label: "Real-time Metrics", icon: faChartPie },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as DemoType)}
                className={`demo-tab-btn sys ${activeTab === tab.id ? 'active' : ''}`}
              >
                <FontAwesomeIcon icon={tab.icon} className="tab-icon" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Display Area */}
          <div className="demo-display card">
            {["agendamento", "astral", "eliza"].includes(activeTab) ? (
              <div className="chat-interface">
                <div className="chat-header">
                  <div className="icon-box" style={{ width: "2.5rem", height: "2.5rem", fontSize: "1rem", background: "rgba(99,102,241,0.2)", color: "var(--brand-primary-light)" }}>
                    <FontAwesomeIcon icon={faRobot} />
                  </div>
                  <div>
                    <div style={{ fontSize: "1rem", fontWeight: 800 }}>{activeTab === 'agendamento' ? 'Concierge' : activeTab === 'astral' ? 'Oracle' : 'ELIZA'} Bot</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--brand-green)", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.4rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      <span className="online-dot" /> Ativo agora
                    </div>
                  </div>
                </div>

                <div ref={scrollRef} className="chat-messages">
                  {messages.map(m => (
                    <div key={m.id} className={`chat-bubble chat-bubble-${m.sender}`}>
                      {m.text}
                    </div>
                  ))}
                  {isTyping && <div className="chat-typing"><span /><span /><span /></div>}
                </div>

                <form onSubmit={handleSend} className="chat-input-area">
                  <input
                    className="chat-input"
                    placeholder="Envie uma mensagem..."
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                  />
                  <button type="submit" className="chat-send-btn">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </form>
              </div>
            ) : activeTab === "pipeline" ? (
              <div className="pipeline-demo">
                 <div className="pipeline-flow">
                    {[
                      { icon: faMicrochip, label: "Event", color: "#06b6d4" },
                      { icon: faCodeBranch, label: "Logic", color: "#6366f1" },
                      { icon: faServer, label: "API", color: "#8b5cf6" },
                      { icon: faCheckCircle, label: "Done", color: "#10b981" }
                    ].map((step, i, arr) => (
                      <div key={i} className="pipeline-step-item">
                        <div className="pipeline-node-wrapper">
                          <div className="pipeline-node" style={{ borderColor: step.color, color: step.color }}>
                            <FontAwesomeIcon icon={step.icon} />
                          </div>
                          <span className="pipeline-node-label">{step.label}</span>
                        </div>
                        {i < arr.length - 1 && <div className="pipeline-connector-line"><div className="flow-shimmer" /></div>}
                      </div>
                    ))}
                 </div>
                 <div className="pipeline-console">
                    <div className="console-header">System Log</div>
                    <div className="console-body">
                      <code>[14:20:11] TRIGGER: New Order Webhook received</code>
                      <code style={{ color: "#10b981" }}>[14:20:12] SUCCESS: Payload validated with Zod</code>
                      <code style={{ color: "#06b6d4" }}>[14:20:13] INFO: Syncing with PostgreSQL...</code>
                      <code style={{ color: "#8b5cf6" }}>[14:20:14] AUTH: Bearer token refreshed</code>
                    </div>
                 </div>
              </div>
            ) : (
              <div className="dashboard-demo">
                <div className="db-header">
                   <div>
                     <h4 style={{ fontSize: "1.125rem", fontWeight: 800 }}>Infraestutura em Tempo Real</h4>
                     <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>Monitoramento global de automações</p>
                   </div>
                   <div className="badge online">System Normal</div>
                </div>
                <div className="db-stats">
                   {[
                     { label: "Uptime", val: "99.99%", color: "#10b981", icon: faCheckCircle },
                     { label: "Req/s", val: "4.8k", color: "#6366f1", icon: faNetworkWired },
                     { label: "Latency", val: "22ms", color: "#06b6d4", icon: faMicrochip }
                   ].map(stat => (
                     <div key={stat.label} className="db-stat-card">
                        <FontAwesomeIcon icon={stat.icon} style={{ color: stat.color, marginBottom: '0.5rem', opacity: 0.8 }} />
                        <div className="db-stat-label">{stat.label}</div>
                        <div className="db-stat-val" style={{ color: stat.color }}>{stat.val}</div>
                     </div>
                   ))}
                </div>
                <div className="db-chart-container">
                   <div className="db-chart">
                      {[30, 50, 40, 70, 85, 45, 90, 65, 80, 50, 95, 75, 85, 60, 40, 55, 70, 80, 65, 45, 90].map((h, i) => (
                        <div key={i} className="chart-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }} />
                      ))}
                   </div>
                   <div className="chart-labels">
                      <span>00:00</span>
                      <span>06:00</span>
                      <span>12:00</span>
                      <span>18:00</span>
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .demo-section { background: var(--bg-surface); padding: 8rem 0; position: relative; }
        .demo-container { display: grid; grid-template-columns: 320px 1fr; gap: 4rem; min-height: 600px; }
        
        .demo-sidebar { display: flex; flex-direction: column; gap: 0.5rem; }
        .sidebar-group-label { font-size: 0.7rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.15em; padding: 1rem 0.5rem 0.5rem; }
        
        .demo-tab-btn {
          display: flex; align-items: center; gap: 1rem; padding: 1.25rem;
          border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);
          background: rgba(255,255,255,0.02); color: var(--text-secondary);
          cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); text-align: left; font-size: 0.9375rem; font-weight: 700;
        }
        .demo-tab-btn:hover { background: rgba(255,255,255,0.05); transform: translateX(5px); color: var(--text-primary); }
        .demo-tab-btn.active { background: rgba(99,102,241,0.1); border-color: var(--brand-primary); color: var(--text-primary); box-shadow: 0 4px 20px -10px var(--brand-primary); }
        .demo-tab-btn.sys.active { background: rgba(6,182,212,0.1); border-color: var(--brand-secondary); box-shadow: 0 4px 20px -10px var(--brand-secondary); }
        
        .demo-display { padding: 0; display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--border-color); position: relative; }
        .demo-display::after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 100% 0%, rgba(99,102,241,0.05) 0%, transparent 50%); pointer-events: none; }
        
        .chat-interface { display: flex; flex-direction: column; height: 100%; min-height: 500px; }
        .chat-header { padding: 1.5rem; border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; gap: 1rem; background: rgba(255,255,255,0.02); }
        .online-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--brand-green); animation: pulse 2s infinite; }
        
        .chat-messages { flex: 1; overflow-y: auto; padding: 2rem; display: flex; flex-direction: column; gap: 1.25rem; background: rgba(0,0,0,0.2); }
        .chat-input-area { padding: 1.25rem; border-top: 1px solid var(--border-subtle); display: flex; gap: 1rem; background: var(--bg-card); }
        .chat-input { flex: 1; background: rgba(0,0,0,0.3); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.875rem 1.25rem; color: #fff; outline: none; transition: border-color 0.2s; }
        .chat-input:focus { border-color: var(--brand-primary); }
        
        .pipeline-demo { padding: 4rem 3rem; height: 100%; display: flex; flex-direction: column; gap: 4rem; justify-content: center; }
        .pipeline-flow { display: flex; align-items: center; justify-content: space-between; }
        .pipeline-step-item { display: flex; align-items: center; flex: 1; position: relative; }
        .pipeline-step-item:last-child { flex: 0; }
        .pipeline-node-wrapper { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; position: relative; z-index: 2; }
        .pipeline-node { width: 56px; height: 56px; border: 2px solid; border-radius: 16px; display: flex; align-items: center; justify-content: center; background: #0f0f20; font-size: 1.25rem; }
        .pipeline-node-label { font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); }
        .pipeline-connector-line { height: 2px; background: var(--border-subtle); flex: 1; position: relative; overflow: hidden; }
        .flow-shimmer { position: absolute; inset: 0; background: linear-gradient(90deg, transparent, currentColor, transparent); opacity: 0.4; animation: shimmer 2s infinite; }
        
        .pipeline-console { background: #05050f; border: 1px solid var(--border-subtle); border-radius: 12px; overflow: hidden; }
        .console-header { padding: 0.5rem 1rem; background: rgba(255,255,255,0.05); font-size: 0.65rem; font-weight: 800; text-transform: uppercase; border-bottom: 1px solid var(--border-subtle); }
        .console-body { padding: 1.25rem; font-family: 'JetBrains Mono', monospace; font-size: 0.8125rem; display: flex; flex-direction: column; gap: 0.5rem; }

        .dashboard-demo { padding: 3rem; height: 100%; display: flex; flex-direction: column; gap: 2.5rem; }
        .db-header { display: flex; justify-content: space-between; align-items: center; }
        .badge.online { background: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.2); padding: 0.4rem 0.875rem; border-radius: 100px; font-size: 0.7rem; font-weight: 800; }
        .db-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .db-stat-card { background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); padding: 1.5rem; border-radius: 16px; text-align: left; }
        .db-stat-label { font-size: 0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; }
        .db-stat-val { font-size: 1.75rem; font-weight: 900; letter-spacing: -0.02em; }
        .db-chart-container { flex: 1; display: flex; flex-direction: column; gap: 1rem; }
        .db-chart { flex: 1; display: flex; align-items: flex-end; gap: 0.5rem; padding: 1.5rem; background: rgba(0,0,0,0.2); border: 1px solid var(--border-subtle); border-radius: 12px; }
        .chart-bar { flex: 1; background: linear-gradient(to top, var(--brand-primary), var(--brand-secondary)); border-radius: 3px; opacity: 0.6; animation: grow 1s ease-out forwards; transform-origin: bottom; }
        .chart-labels { display: flex; justify-content: space-between; color: var(--text-muted); font-size: 0.65rem; font-weight: 700; padding: 0 0.5rem; }

        @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
        @keyframes grow { from { transform: scaleY(0); } to { transform: scaleY(1); } }

        @media (max-width: 1024px) {
          .demo-container { grid-template-columns: 1fr; gap: 2rem; }
          .demo-sidebar { flex-direction: row; overflow-x: auto; padding-bottom: 1rem; }
          .demo-tab-btn { flex-shrink: 0; padding: 0.875rem 1.25rem; }
          .demo-display { min-height: 500px; }
        }
      `}</style>
    </section>
  );
}
