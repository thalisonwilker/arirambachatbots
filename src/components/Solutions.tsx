"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { SOLUTION_CARDS } from "@/lib/data";
import { WHATSAPP_URL } from "@/lib/constants";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function Solutions() {
  return (
    <section id="solucoes" className="solutions-section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <FontAwesomeIcon icon={faLayerGroup} /> Catálogo de Soluções
          </div>
          <h2 className="section-title">
            Soluções digitais <span className="gradient-text">sob medida</span>
          </h2>
          <p className="section-subtitle">
            Um portfólio completo de tecnologias e capacidades para transformar
            qualquer processo operacional em vantagem competitiva.
          </p>
        </div>

        <div className="grid-responsive solutions-grid">
          {SOLUTION_CARDS.map((sol) => (
            <a
              key={sol.title}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card solution-card animate-fade-up"
            >
              <div
                className="icon-box solution-icon"
                style={{
                  background: `${sol.color}15`,
                  border: `1px solid ${sol.color}30`,
                  color: sol.color,
                }}
              >
                <FontAwesomeIcon icon={sol.icon} />
              </div>
              <div className="solution-content">
                <h3 className="solution-title">{sol.title}</h3>
                <p className="solution-desc">{sol.description}</p>
              </div>
              <div className="solution-footer" style={{ color: sol.color }}>
                Solicitar <span>→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="custom-request-box">
          <div className="request-text">
            <h4>Não encontrou o que precisa?</h4>
            <p>Desenvolvemos qualquer solução digital personalizada sob demanda.</p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} />
            Solicitar solução personalizada
          </a>
        </div>
      </div>

      <style jsx>{`
        .solutions-section { padding: 6rem 0; background: #05050f; }
        
        .grid-responsive { 
          display: grid; 
          grid-template-columns: repeat(4, 1fr); 
          gap: 1.5rem; 
        }

        .solution-card { 
          display: flex; flex-direction: column; gap: 1rem; 
          padding: 1.75rem; text-decoration: none; transition: all 0.3s;
        }
        .solution-card:hover { transform: translateY(-5px); border-color: rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); }
        
        .solution-icon { width: 2.75rem; height: 2.75rem; font-size: 1.1rem; }
        .solution-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 0.4rem; }
        .solution-desc { font-size: 0.8125rem; color: var(--text-secondary); line-height: 1.55; }
        
        .solution-footer { font-size: 0.75rem; font-weight: 600; display: flex; align-items: center; gap: 0.3rem; margin-top: auto; }

        .custom-request-box { 
          margin-top: 4rem; padding: 2rem; background: rgba(255,255,255,0.02); 
          border: 1px solid var(--border-subtle); border-radius: 1.25rem;
          display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap;
        }
        .request-text h4 { font-size: 1.125rem; color: #fff; margin-bottom: 0.25rem; }
        .request-text p { font-size: 0.875rem; color: var(--text-secondary); }

        @media (max-width: 1200px) {
          .grid-responsive { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .grid-responsive { grid-template-columns: repeat(2, 1fr); }
          .custom-request-box { text-align: center; justify-content: center; }
        }
        @media (max-width: 480px) {
          .grid-responsive { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
