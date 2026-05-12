"use client";
import { WHATSAPP_URL, BRAND } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faPlug, faBolt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faDocker, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Inline FA icon component for skills list
const skills = [
  { icon: faRobot, label: "N8N — Automacao visual de fluxos" },
  { icon: faWhatsapp, label: "Evolution API — WhatsApp Business" },
  { icon: faRobot, label: "Bots inteligentes com IA" },
  { icon: faPlug, label: "Integracoes REST, GraphQL e Webhooks" },
  { icon: faDocker, label: "Docker, DevOps e infra self-hosted" },
];

export function About() {
  return (
    <section id="sobre" style={{ padding: "6rem 0", position: "relative", overflow: "hidden" }}>
      <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="section-header">
          <div className="section-label">Sobre nos</div>
          <h2 className="section-title">Quem e a <span className="gradient-text">Ariramba Systemas</span></h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center" }}>
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text-primary)" }}>{BRAND.name}</h3>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.75rem" }}>
              Somos uma equipe especializada em <strong style={{ color: "var(--text-primary)" }}>automacao de processos, bots inteligentes e integracao de sistemas</strong>. Usamos N8N, Evolution API, IA e desenvolvimento customizado para transformar operacoes manuais em maquinas digitais eficientes.
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Atendemos startups, pequenas e medias empresas e profissionais autonomos que precisam de tecnologia que funciona — sem overhead, sem projetos infinitos.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
              {skills.map(({ icon, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  <div style={{ width: "1.75rem", height: "1.75rem", borderRadius: "0.4rem", background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <FontAwesomeIcon icon={icon} style={{ color: "#818cf8", fontSize: "0.75rem" }} />
                  </div>
                  {label}
                </div>
              ))}
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} /> Falar com a equipe
            </a>
          </div>

          <div>
            <div className="card" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.08))" }}>
              <div style={{ width: "5rem", height: "5rem", borderRadius: "1rem", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <FontAwesomeIcon icon={faRobot} style={{ color: "white", fontSize: "2rem" }} />
              </div>
              <h4 style={{ fontWeight: 700, marginBottom: "0.25rem", color: "var(--text-primary)" }}>Ariramba Systemas</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--brand-primary-light)", marginBottom: "1.25rem" }}>{BRAND.tagline}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border-color)" }}>
                {[
                  { label: "N8N + Evolution API", value: "Stack principal" },
                  { label: "Bots entregues", value: "50+" },
                  { label: "Tempo de resposta", value: "< 4h" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem" }}>
                    <span style={{ color: "var(--text-secondary)" }}>{item.label}</span>
                    <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
