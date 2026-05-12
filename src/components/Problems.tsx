"use client";
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
    <section id="problemas" className="problems-section">
      <div className="section-glow"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Problemas que resolvemos</div>
          <h2 className="section-title">Sua empresa ainda perde tempo com <span className="gradient-text">isso?</span></h2>
          <p className="section-subtitle">Se você se identificar com qualquer um desses cenários, podemos ajudar a automatizar e resolver de vez.</p>
        </div>
        
        <div className="grid-responsive problems-grid">
          {PROBLEMS.map((p) => (
            <div key={p.title} className="card problem-card animate-fade-up">
              <div className="problem-icon-wrap">
                <FontAwesomeIcon icon={iconMap[p.iconName] ?? faClock} />
              </div>
              <div className="problem-content">
                <h3 className="problem-title">{p.title}</h3>
                <p className="problem-desc">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-box animate-fade-in">
          <p>
            Se você tem algum desses problemas, <strong className="text-highlight">fale com a Ariramba no WhatsApp</strong> e descobrimos juntos como resolver.
          </p>
        </div>
      </div>

      <style jsx>{`
        .problems-section { padding: 8rem 0; position: relative; overflow: hidden; background: #05050f; }
        .section-glow { position: absolute; top: 50%; right: -10%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(248,113,113,0.03) 0%, transparent 70%); pointer-events: none; }
        
        .grid-responsive { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 1.5rem; 
        }

        .problem-card { 
          display: flex; gap: 1.25rem; align-items: flex-start; padding: 1.75rem;
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s;
        }
        .problem-card:hover { background: rgba(248,113,113,0.04); border-color: rgba(248,113,113,0.2); transform: translateY(-3px); }
        
        .problem-icon-wrap { 
          flex-shrink: 0; width: 2.5rem; height: 2.5rem; border-radius: 0.5rem;
          background: rgba(248,113,113,0.1); color: #f87171;
          display: flex; align-items: center; justify-content: center; font-size: 1rem;
          border: 1px solid rgba(248,113,113,0.2);
        }

        .problem-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 0.5rem; }
        .problem-desc { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; }

        .cta-box { 
          margin-top: 4rem; text-align: center; padding: 2rem; 
          background: rgba(99,102,241,0.05); border: 1px solid rgba(99,102,241,0.1); 
          border-radius: 1.25rem; color: var(--text-secondary); font-size: 1rem;
        }
        .text-highlight { color: var(--brand-primary-light); }

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
