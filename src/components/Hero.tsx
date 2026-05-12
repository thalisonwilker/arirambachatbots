import { WHATSAPP_URL } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function Hero() {
  return (
    <section
      id="inicio"
      style={{ minHeight: "calc(100vh - 4rem)", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}
    >
      <div aria-hidden="true" style={{ position: "absolute", top: "-10%", left: "-5%", width: "700px", height: "700px", background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div className="bg-grid" aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.6, pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 1.5rem", position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 1rem", background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.25)", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 600, color: "#25d366", marginBottom: "2rem" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#25d366", display: "inline-block", animation: "pulse-green 2s infinite" }} />
          Disponivel para novos projetos
        </div>

        <h1 style={{ fontSize: "clamp(2rem, 5.5vw, 3.75rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1.5rem", maxWidth: "860px", letterSpacing: "-0.02em" }}>
          Automatizamos processos e integramos sistemas{" "}
          <span className="gradient-text">para sua empresa crescer sem aumentar a equipe</span>
        </h1>

        <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "var(--text-secondary)", maxWidth: "640px", lineHeight: 1.75, marginBottom: "2.5rem" }}>
          Bots inteligentes para WhatsApp e Telegram, fluxos com{" "}
          <strong style={{ color: "var(--text-primary)" }}>N8N e Evolution API</strong>,
          integracoes com APIs e solucoes sob medida — sem trabalho manual, sem erro humano.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "4rem" }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
            <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: "1.1rem" }} />
            Falar no WhatsApp
          </a>
          <a href="#servicos" className="btn-outline" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
            Ver servicos
            <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "0.85rem" }} />
          </a>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem" }}>
          {[
            { value: "N8N", label: "Automacao visual" },
            { value: "Evolution API", label: "WhatsApp oficial" },
            { value: "100%", label: "Suporte pos-entrega" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, background: "var(--gradient-text)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1, marginBottom: "0.25rem" }}>
                {s.value}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div aria-hidden="true" style={{ position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)", display: "none", width: "360px", background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "1rem", overflow: "hidden", animation: "float 4s ease-in-out infinite" }} className="lg:block">
          <div style={{ background: "#1a1a35", padding: "0.75rem 1rem", display: "flex", gap: "0.4rem", alignItems: "center", borderBottom: "1px solid var(--border-color)" }}>
            {["#ff5f57","#ffbd2e","#28c840"].map((c) => <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, display: "block" }} />)}
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", color: "var(--text-muted)", marginLeft: "0.5rem" }}>n8n-workflow.json</span>
          </div>
          <div style={{ padding: "1.25rem", fontFamily: "JetBrains Mono, monospace", fontSize: "0.8rem", lineHeight: 1.7 }}>
            <div style={{ color: "#6366f1" }}># N8N + Evolution API rodando...</div>
            <div style={{ color: "#94a3b8" }}>&gt; Webhook recebido</div>
            <div style={{ color: "#25d366" }}>&#x2713; Mensagem processada</div>
            <div style={{ color: "#94a3b8" }}>&gt; Consultando CRM...</div>
            <div style={{ color: "#25d366" }}>&#x2713; 38 leads sincronizados</div>
            <div style={{ color: "#94a3b8" }}>&gt; Enviando WhatsApp...</div>
            <div style={{ color: "#8b5cf6", marginTop: "0.5rem" }}>&#x26A1; Bot respondeu em 0.3s</div>
          </div>
        </div>
      </div>

      <a href="#servicos" aria-label="Ver servicos" style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", color: "var(--text-muted)", animation: "float 2s ease-in-out infinite", textDecoration: "none" }}>
        <FontAwesomeIcon icon={faArrowDown} />
      </a>
    </section>
  );
}
