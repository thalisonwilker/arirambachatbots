import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { SOLUTION_CARDS } from "@/lib/data";
import { WHATSAPP_URL } from "@/lib/constants";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function Solutions() {
  return (
    <section id="solucoes" style={{ padding: "6rem 0", background: "linear-gradient(180deg, transparent, rgba(99,102,241,0.03) 50%, transparent)" }}>
      <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="section-header">
          <div className="section-label">
            <FontAwesomeIcon icon={faLayerGroup} /> Catálogo de Soluções
          </div>
          <h2 className="section-title">
            Soluções digitais{" "}
            <span className="gradient-text">sob medida</span>
          </h2>
          <p className="section-subtitle">
            Um portfólio completo de tecnologias e capacidades para transformar
            qualquer processo operacional em vantagem competitiva.
          </p>
        </div>

        {/* Solutions grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {SOLUTION_CARDS.map((sol) => (
            <a
              key={sol.title}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <div
                className="icon-box"
                style={{
                  background: `${sol.color}15`,
                  border: `1px solid ${sol.color}30`,
                  color: sol.color,
                }}
              >
                <FontAwesomeIcon icon={sol.icon} />
              </div>
              <div>
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.3rem" }}>
                  {sol.title}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  {sol.description}
                </p>
              </div>
              <div style={{ fontSize: "0.75rem", color: sol.color, fontWeight: 600, display: "flex", alignItems: "center", gap: "0.3rem", marginTop: "auto" }}>
                Solicitar
                <span style={{ fontSize: "0.625rem" }}>→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom strip */}
        <div
          style={{
            marginTop: "3rem",
            padding: "1.25rem 1.75rem",
            background: "var(--bg-card)",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-lg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.2rem" }}>
              Não encontrou o que precisa?
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>
              Desenvolvemos qualquer solução digital personalizada.
            </div>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ flexShrink: 0 }}>
            <FontAwesomeIcon icon={faWhatsapp} />
            Solicitar solução personalizada
          </a>
        </div>
      </div>
    </section>
  );
}
