import { BENEFITS } from "@/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faShieldAlt, faChartArea, faRocket, faUsers, faEye } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const iconMap: Record<string, IconDefinition> = {
  "clock": faClock, "shield-alt": faShieldAlt, "chart-area": faChartArea,
  "rocket": faRocket, "users": faUsers, "eye": faEye,
};

export function Benefits() {
  return (
    <section id="beneficios" style={{ padding: "6rem 0", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="section-header">
          <div className="section-label">Resultados esperados</div>
          <h2 className="section-title">O que voce ganha quando <span className="gradient-text">automatiza</span></h2>
          <p className="section-subtitle">Nao vendemos tecnologia por si so. Vendemos resultado: tempo de volta, menos erros, mais controle e equipe focada no que importa.</p>
        </div>
        <div className="grid-benefits">
          {BENEFITS.map((b) => (
            <div key={b.title} className="card" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.07) 0%, rgba(6,182,212,0.04) 100%)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "0.875rem" }}>
                <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.65rem", background: "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(6,182,212,0.15))", border: "1px solid rgba(99,102,241,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <FontAwesomeIcon icon={iconMap[b.iconName] ?? faClock} style={{ color: "#818cf8", fontSize: "0.95rem" }} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>{b.title}</h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
