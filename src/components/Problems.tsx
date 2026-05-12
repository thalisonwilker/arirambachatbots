import { PROBLEMS } from "@/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLink, faTable, faChartLine, faCog, faServer } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const iconMap: Record<string, IconDefinition> = {
  "clock": faClock, "link": faLink, "whatsapp": faWhatsapp,
  "table": faTable, "chart-line": faChartLine, "cog": faCog, "server": faServer,
};

export function Problems() {
  return (
    <section id="problemas" style={{ padding: "6rem 0", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", top: "50%", right: "-10%", transform: "translateY(-50%)", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="section-header">
          <div className="section-label">Problemas que resolvemos</div>
          <h2 className="section-title">Sua empresa ainda perde tempo com <span className="gradient-text">isso?</span></h2>
          <p className="section-subtitle">Se voce se identificar com qualquer um desses cenarios, podemos ajudar a automatizar e resolver de vez.</p>
        </div>
        <div className="grid-problems">
          {PROBLEMS.map((p) => (
            <div key={p.title} className="card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div className="icon-wrap" style={{ flexShrink: 0 }}>
                <FontAwesomeIcon icon={iconMap[p.iconName] ?? faClock} style={{ color: "#f87171", fontSize: "1rem" }} />
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.4rem", color: "var(--text-primary)" }}>{p.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{p.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "3rem", textAlign: "center", padding: "1.5rem", background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.15)", borderRadius: "1rem" }}>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
            Se voce tem algum desses problemas, <strong style={{ color: "var(--brand-primary-light)" }}>fale com a Ariramba no WhatsApp</strong> e descobrimos juntos como resolver.
          </p>
        </div>
      </div>
    </section>
  );
}
