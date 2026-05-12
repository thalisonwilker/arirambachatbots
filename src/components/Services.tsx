import { SERVICES } from "@/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlug, faFileExcel, faRobot, faServer, faCodeBranch,
  faChartBar, faLayerGroup, faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// Map icon name strings to actual icon objects
const solidIconMap: Record<string, IconDefinition> = {
  "plug": faPlug, "file-excel": faFileExcel, "robot": faRobot,
  "server": faServer, "code-branch": faCodeBranch, "chart-bar": faChartBar,
  "layer-group": faLayerGroup, "project-diagram": faProjectDiagram,
};
const brandIconMap: Record<string, IconDefinition> = { "whatsapp": faWhatsapp };

function getIcon(prefix: string, name: string): IconDefinition {
  if (prefix === "fab") return brandIconMap[name] ?? faRobot;
  return solidIconMap[name] ?? faPlug;
}

export function Services() {
  return (
    <section id="servicos" style={{ padding: "6rem 0" }}>
      <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="section-header">
          <div className="section-label">O que fazemos</div>
          <h2 className="section-title">
            Servicos que{" "}
            <span className="gradient-text">transformam sua operacao</span>
          </h2>
          <p className="section-subtitle">
            Cada solucao e construida sob medida — com N8N, Evolution API, bots inteligentes e integracoes robustas.
          </p>
        </div>

        <div className="grid-services">
          {SERVICES.map((service) => (
            <div key={service.title} className="card" style={service.highlight ? { border: "1px solid rgba(99,102,241,0.4)", background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(6,182,212,0.06))" } : undefined}>
              {service.highlight && (
                <div style={{ position: "absolute", top: "1rem", right: "1rem", padding: "0.2rem 0.6rem", background: "rgba(99,102,241,0.2)", border: "1px solid rgba(99,102,241,0.4)", borderRadius: "100px", fontSize: "0.65rem", fontWeight: 700, color: "var(--brand-primary-light)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Destaque
                </div>
              )}
              <div className="icon-wrap" style={{ marginBottom: "1.25rem", width: "3rem", height: "3rem" }}>
                <FontAwesomeIcon icon={getIcon(service.iconPrefix, service.iconName)} style={{ color: service.highlight ? "#06b6d4" : "#818cf8", fontSize: "1.1rem" }} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem", color: "var(--text-primary)" }}>{service.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
