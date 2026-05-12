import { EXAMPLES } from "@/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faMoneyBillWave, faChartBar, faFileExcel, faRocket } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const solidIconMap: Record<string, IconDefinition> = {
  "code-branch": faCodeBranch, "money-bill-wave": faMoneyBillWave,
  "chart-bar": faChartBar, "file-excel": faFileExcel, "rocket": faRocket,
};
const brandIconMap: Record<string, IconDefinition> = { "whatsapp": faWhatsapp };

function getIcon(prefix: string, name: string): IconDefinition {
  if (prefix === "fab") return brandIconMap[name] ?? faWhatsapp;
  return solidIconMap[name] ?? faCodeBranch;
}

export function Examples() {
  return (
    <section id="exemplos" style={{ padding: "6rem 0" }}>
      <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="section-header">
          <div className="section-label">Cases e exemplos</div>
          <h2 className="section-title">Exemplos de <span className="gradient-text">solucoes que ja entregamos</span></h2>
          <p className="section-subtitle">Cada projeto começa com uma conversa. Esses sao tipos de solucoes que construimos — e que podem ser adaptadas ao seu negocio.</p>
        </div>
        <div className="grid-examples">
          {EXAMPLES.map((example) => (
            <div key={example.title} className="card">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                <div className="icon-wrap">
                  <FontAwesomeIcon icon={getIcon(example.iconPrefix, example.iconName)} style={{ color: "#06b6d4", fontSize: "1.1rem" }} />
                </div>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
                  {example.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.6rem", color: "var(--text-primary)" }}>{example.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{example.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
