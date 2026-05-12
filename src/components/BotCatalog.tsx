"use client";
import { useState } from "react";
import { CATALOG_ITEMS } from "@/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLayerGroup, faCheckCircle, faClock, faTools, faTerminal, faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faTelegram, faGoogle } from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { WHATSAPP_URL } from "@/lib/constants";

type Filter = "all" | "whatsapp" | "telegram" | "gmail";

const PLATFORM_CONFIG: Record<Exclude<Filter, "all">, { label: string; color: string; icon: IconDefinition }> = {
  whatsapp: { label: "WhatsApp", color: "#25d366", icon: faWhatsapp },
  telegram: { label: "Telegram", color: "#29b6f6", icon: faTelegram },
  gmail: { label: "Gmail", color: "#ea4335", icon: faGoogle },
};

export function BotCatalog() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = active === "all" 
    ? CATALOG_ITEMS 
    : CATALOG_ITEMS.filter((b) => b.platform === active);

  const tabs: Array<{ key: Filter; label: string; icon: IconDefinition; color: string }> = [
    { key: "all", label: "Todas Soluções", icon: faLayerGroup, color: "#818cf8" },
    { key: "whatsapp", label: "WhatsApp", icon: faWhatsapp, color: "#25d366" },
    { key: "telegram", label: "Telegram", icon: faTelegram, color: "#29b6f6" },
    { key: "gmail", label: "Gmail", icon: faGoogle, color: "#ea4335" },
  ];

  return (
    <section id="catalogo" className="catalog-section">
      <div className="section">
        <div className="section-header">
          <div className="section-label">
            <FontAwesomeIcon icon={faTerminal} /> Catálogo de Soluções
          </div>
          <h2 className="section-title">
            Soluções de <span className="gradient-text">Rápida Implementação</span>
          </h2>
          <p className="section-subtitle">
            Acelere sua digitalização com módulos pré-configurados para automação, 
            atendimento e integração de sistemas de alta performance.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="filter-container">
          {tabs.map(({ key, label, icon, color }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`filter-btn ${active === key ? 'active' : ''}`}
              style={{ '--btn-color': color } as React.CSSProperties}
            >
              <FontAwesomeIcon icon={icon} />
              {label}
              <span className="count">
                {key === "all" ? CATALOG_ITEMS.length : CATALOG_ITEMS.filter((b) => b.platform === key).length}
              </span>
            </button>
          ))}
        </div>

        {/* Catalog grid */}
        <div className="grid-responsive catalog-grid">
          {filtered.map((item) => {
            const isBot = ["whatsapp", "telegram", "gmail"].includes(item.platform);
            const cfg = isBot ? PLATFORM_CONFIG[item.platform as Exclude<Filter, "all">] : null;
            
            return (
              <div key={item.name} className="card catalog-card animate-fade-in">
                <div className="catalog-card-header">
                  <div 
                    className="icon-box" 
                    style={{ 
                      background: cfg ? `${cfg.color}15` : "rgba(99,102,241,0.1)", 
                      color: cfg ? cfg.color : "var(--brand-primary-light)",
                      border: `1px solid ${cfg ? cfg.color + '30' : 'rgba(99,102,241,0.2)'}`
                    }}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  
                  {cfg && (
                    <div className="badge" style={{ background: `${cfg.color}15`, color: cfg.color, border: `1px solid ${cfg.color}30` }}>
                      <FontAwesomeIcon icon={cfg.icon} />
                      {cfg.label}
                    </div>
                  )}
                </div>

                <h3 className="catalog-card-title">{item.name}</h3>
                <p className="catalog-card-desc">{item.description}</p>

                <div className="catalog-card-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="catalog-card-footer">
                  <span className={`status-badge ${item.status}`}>
                    <FontAwesomeIcon icon={item.status === "disponivel" ? faCheckCircle : faClock} />
                    {item.status === "disponivel" ? "Disponível" : "Em breve"}
                  </span>
                  
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="request-link">
                    Solicitar <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '0.7rem' }} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Solution CTA */}
        <div className="custom-cta">
          <FontAwesomeIcon icon={faTools} className="cta-icon" />
          <h3 className="cta-title">Precisa de uma Solução Específica?</h3>
          <p className="cta-desc">
            Nossa engenharia de software está pronta para criar integrações complexas, pipelines de dados
            e sistemas web sob medida para o seu fluxo de trabalho exclusivo.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '1rem 2rem' }}>
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> Solicitar Projeto Customizado
          </a>
        </div>
      </div>

      <style jsx>{`
        .catalog-section { padding: 8rem 0; background: linear-gradient(180deg, transparent, rgba(99,102,241,0.02), transparent); }
        .filter-container { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; margin-bottom: 4rem; }
        .filter-btn {
          display: inline-flex; align-items: center; gap: 0.6rem; padding: 0.6rem 1.25rem;
          border-radius: 100px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle);
          color: var(--text-secondary); font-size: 0.875rem; font-weight: 600; transition: all 0.2s; cursor: pointer;
        }
        .filter-btn:hover { background: rgba(255,255,255,0.05); border-color: var(--border-color); color: var(--text-primary); }
        .filter-btn.active { background: var(--btn-color); color: #fff; border-color: var(--btn-color); box-shadow: 0 4px 15px -5px var(--btn-color); }
        .filter-btn .count { font-size: 0.7rem; opacity: 0.6; padding-left: 0.25rem; }
        
        .grid-responsive { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 1.5rem; 
          width: 100%;
        }

        @media (max-width: 1100px) {
          .grid-responsive { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .grid-responsive { grid-template-columns: 1fr; }
        }

        .catalog-grid { gap: 1.5rem; }
        .catalog-card { display: flex; flex-direction: column; padding: 2rem; min-height: 100%; }
        .catalog-card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; }
        .catalog-card-title { font-size: 1.125rem; font-weight: 800; margin-bottom: 0.75rem; letter-spacing: -0.01em; }
        .catalog-card-desc { font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; flex: 1; margin-bottom: 1.5rem; }
        .catalog-card-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 2rem; }
        
        .catalog-card-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle); }
        .status-badge { font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; gap: 0.4rem; }
        .status-badge.disponivel { color: var(--brand-green); }
        .status-badge.em-breve { color: var(--text-muted); }
        .request-link { font-size: 0.875rem; font-weight: 800; color: var(--brand-primary-light); text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: gap 0.2s; }
        .request-link:hover { gap: 0.75rem; }

        .custom-cta {
          margin-top: 6rem; text-align: center; padding: 4rem 2rem;
          background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-2xl);
          position: relative; overflow: hidden;
        }
        .cta-icon { color: var(--brand-primary-light); font-size: 2.5rem; margin-bottom: 1.5rem; }
        .cta-title { font-size: 2rem; font-weight: 900; margin-bottom: 1rem; }
        .cta-desc { color: var(--text-secondary); maxWidth: 600px; margin: 0 auto 2rem; line-height: 1.7; font-size: 1.125rem; }

        @media (max-width: 768px) {
          .catalog-section { padding: 4rem 0; }
          .cta-title { font-size: 1.5rem; }
          .custom-cta { padding: 2.5rem 1.5rem; }
        }
      `}</style>
    </section>
  );
}
