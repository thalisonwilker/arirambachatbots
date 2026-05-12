"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { SERVICE_GROUPS } from "@/lib/data";
import { WHATSAPP_URL } from "@/lib/constants";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function Services() {
  return (
    <section id="servicos" className="services-section">
      {/* Background Decorative Lines */}
      <div className="bg-flow-line" style={{ top: '10%', right: '0%', width: '100%', opacity: 0.1, animationDuration: '15s' }}></div>
      <div className="bg-flow-line" style={{ bottom: '15%', left: '0%', width: '100%', opacity: 0.1, animationDuration: '20s', animationDirection: 'reverse' }}></div>

      <div className="section">
        <div className="section-header">
          <div className="section-label">
            <FontAwesomeIcon icon={faCogs} /> Serviços
          </div>
          <h2 className="section-title">
            Tudo que sua empresa precisa{" "}
            <span className="gradient-text">em um só lugar</span>
          </h2>
          <p className="section-subtitle">
            Do bot ao sistema completo — desenvolvemos soluções digitais sob medida
            para automatizar processos, reduzir custos e acelerar o crescimento.
          </p>
        </div>

        <div className="services-groups-container">
          {SERVICE_GROUPS.map((group, gi) => (
            <div key={group.category} className="service-group animate-fade-up" style={{ animationDelay: `${gi * 0.15}s` }}>
              <div className="service-group-header">
                <div
                  className="icon-box"
                  style={{
                    background: `${group.color}15`,
                    border: `1px solid ${group.color}30`,
                    color: group.color,
                  }}
                >
                  <FontAwesomeIcon icon={group.icon} />
                </div>
                <div className="service-group-info">
                  <div className="service-group-label" style={{ color: group.color }}>
                    {group.label}
                  </div>
                  <h3 className="service-group-title">
                    {group.title}
                  </h3>
                </div>
                <p className="service-group-desc">
                  {group.description}
                </p>
              </div>

              <div className="grid-responsive" style={{ gap: '1.5rem' }}>
                {group.items.map((item) => (
                  <div key={item.title} className="card service-card">
                    <div
                      className="icon-box"
                      style={{
                        background: `${group.color}12`,
                        border: `1px solid ${group.color}25`,
                        color: group.color,
                        marginBottom: '1.25rem',
                        width: '2.5rem',
                        height: '2.5rem',
                        fontSize: '1rem'
                      }}
                    >
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <div className="service-card-content">
                      <h4 className="service-card-title">
                        {item.title}
                      </h4>
                      <p className="service-card-desc">
                        {item.description}
                      </p>
                    </div>
                    <div className="service-card-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="tag" style={{ fontSize: '0.65rem' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="services-bottom-cta">
          <div className="cta-icon">
            <i className="fas fa-rocket text-indigo-400 text-3xl"></i>
          </div>
          <h3 className="cta-title">
            Precisa de uma solução que não está aqui?
          </h3>
          <p className="cta-desc">
            Desenvolvemos soluções completamente personalizadas. Conte seu problema e construímos juntos a ferramenta ideal para o seu negócio.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
            Falar com um especialista
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .services-section { padding: 4rem 0; position: relative; overflow: hidden; }
        .services-groups-container { display: flex; flex-direction: column; gap: 6rem; }
        .service-group { position: relative; }
        .service-group-header { 
          display: flex; 
          align-items: center; 
          gap: 1.5rem; 
          margin-bottom: 2.5rem; 
          padding-bottom: 1.5rem; 
          border-bottom: 1px solid var(--border-subtle);
          flex-wrap: wrap;
        }
        .service-group-info { flex: 1; }
        .service-group-label { font-size: 0.75rem; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 0.25rem; }
        .service-group-title { font-size: 1.75rem; font-weight: 900; color: var(--text-primary); letter-spacing: -0.02em; }
        .service-group-desc { width: 100%; font-size: 1rem; color: var(--text-secondary); max-width: 700px; line-height: 1.7; margin-top: 1rem; }
        
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
        
        .service-card { display: flex; flex-direction: column; padding: 2rem; min-height: 100%; }
        .service-card-title { font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem; }
        .service-card-desc { font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem; flex: 1; }
        .service-card-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        
        .services-bottom-cta {
          margin-top: 8rem;
          padding: 4rem 2rem;
          background: rgba(99, 102, 241, 0.03);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-2xl);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          position: relative;
          overflow: hidden;
        }
        .services-bottom-cta::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-icon { margin-bottom: 1rem; }
        .cta-title { font-size: 2rem; font-weight: 900; color: var(--text-primary); letter-spacing: -0.02em; }
        .cta-desc { font-size: 1.125rem; color: var(--text-secondary); max-width: 600px; line-height: 1.7; }

        @media (max-width: 768px) {
          .services-groups-container { gap: 4rem; }
          .service-group-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .service-group-desc { max-width: 100%; }
          .service-group-title { font-size: 1.5rem; }
          .cta-title { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  );
}
