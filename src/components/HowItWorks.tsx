import { STEPS } from "@/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faFileExcel, faCode, faCheckCircle, faRocket, faLock, faHandshake } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const iconMap: Record<string, IconDefinition> = {
  "comments": faComments, "file-excel": faFileExcel,
  "code": faCode, "check-circle": faCheckCircle,
};

export function HowItWorks() {
  return (
    <section id="como-funciona" style={{ padding: "6rem 0", position: "relative", overflow: "hidden", background: "linear-gradient(180deg, transparent, rgba(99,102,241,0.04), transparent)" }}>
      <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="section-header">
          <div className="section-label">Processo de trabalho</div>
          <h2 className="section-title">Como funciona do <span className="gradient-text">inicio ao fim</span></h2>
          <p className="section-subtitle">Um processo simples, transparente e orientado a resultado. Sem surpresas e sem jargao tecnico.</p>
        </div>

        <div className="grid-steps" style={{ position: "relative" }}>
          <div aria-hidden="true" style={{ position: "absolute", top: "2rem", left: "12.5%", right: "12.5%", height: "1px", background: "linear-gradient(90deg, rgba(99,102,241,0.5), rgba(6,182,212,0.5))", zIndex: 0 }} className="hidden lg:block" />
          {STEPS.map((step) => (
            <div key={step.number} style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 0.5rem" }}>
              <div style={{ width: "4rem", height: "4rem", borderRadius: "50%", background: "var(--bg-card)", border: "2px solid rgba(99,102,241,0.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                <FontAwesomeIcon icon={iconMap[step.iconName] ?? faCode} style={{ color: "#818cf8", fontSize: "1.1rem" }} />
              </div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.5rem" }}>{step.number}</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>{step.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{step.description}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "4rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          {[
            { icon: faRocket, text: "Entrega rapida e sem enrolacao" },
            { icon: faLock, text: "Codigo limpo e documentado" },
            { icon: faHandshake, text: "Comunicacao direta e transparente" },
          ].map((item) => (
            <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1rem 1.25rem", background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "0.75rem" }}>
              <FontAwesomeIcon icon={item.icon} style={{ color: "#818cf8", fontSize: "1rem", flexShrink: 0 }} />
              <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
