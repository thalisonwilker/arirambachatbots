"use client";
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
    <section id="beneficios" className="benefits-section">
      <div className="section-glow"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Resultados esperados</div>
          <h2 className="section-title">O que você ganha quando <span className="gradient-text">automatiza</span></h2>
          <p className="section-subtitle">Não vendemos tecnologia por si só. Vendemos resultado: tempo de volta, menos erros, mais controle e equipe focada no que importa.</p>
        </div>
        
        <div className="grid-responsive benefits-grid">
          {BENEFITS.map((b) => (
            <div key={b.title} className="card benefit-card animate-fade-up">
              <div className="benefit-header">
                <div className="icon-box benefit-icon">
                  <FontAwesomeIcon icon={iconMap[b.iconName] ?? faClock} />
                </div>
                <h3 className="benefit-title">{b.title}</h3>
              </div>
              <p className="benefit-desc">{b.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .benefits-section { padding: 8rem 0; position: relative; overflow: hidden; background: #05050f; }
        .section-glow { position: absolute; bottom: -20%; left: -10%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%); pointer-events: none; }
        
        .grid-responsive { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 1.5rem; 
        }

        .benefit-card { 
          padding: 2rem; 
          background: rgba(255,255,255,0.02); 
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s;
        }
        .benefit-card:hover { transform: translateY(-5px); background: rgba(99,102,241,0.04); border-color: rgba(99,102,241,0.2); }
        
        .benefit-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem; }
        .benefit-icon { 
          width: 2.5rem; height: 2.5rem; background: rgba(99,102,241,0.1); 
          color: var(--brand-primary-light); font-size: 1rem; border: 1px solid rgba(99,102,241,0.2);
        }
        .benefit-title { font-size: 1.125rem; font-weight: 700; color: #fff; }
        .benefit-desc { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.65; }

        @media (max-width: 1024px) {
          .grid-responsive { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .grid-responsive { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
