"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PROCESS_STEPS, STATS } from "@/lib/data";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="how-it-works-section">
      <div className="section">
        {/* Stats strip */}
        <div className="stats-strip animate-fade-in">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="section-header">
          <div className="section-label">Pipeline de Entrega</div>
          <h2 className="section-title">
            Do diagnóstico à <br />
            <span className="gradient-text">automação em produção</span>
          </h2>
          <p className="section-subtitle">
            Um processo claro, técnico e focado em converter seus problemas operacionais em fluxos eficientes.
          </p>
        </div>

        {/* Process Steps */}
        <div className="process-grid">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.number} className="process-step animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="step-top">
                <div className="icon-box step-icon">
                  <FontAwesomeIcon icon={step.icon} />
                </div>
                <span className="step-number">{step.number}</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .how-it-works-section { padding: 8rem 0; position: relative; }
        
        .stats-strip { 
          display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); 
          gap: 1px; background: var(--border-color); border: 1px solid var(--border-color); 
          border-radius: var(--radius-2xl); overflow: hidden; margin-bottom: 8rem;
          box-shadow: 0 20px 40px -20px rgba(99, 102, 241, 0.15);
        }
        .stat-card { 
          padding: 3rem 2rem; background: var(--bg-card); text-align: center; 
          transition: background 0.3s;
        }
        .stat-card:hover { background: var(--bg-card-hover); }
        .stat-value { font-size: 3rem; font-weight: 900; letter-spacing: -0.04em; background: var(--gradient-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 0.25rem; }
        .stat-label { font-size: 0.75rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; }

        .process-grid { 
          display: grid; 
          grid-template-columns: repeat(4, 1fr); 
          gap: 1.5rem; margin-top: 4rem;
        }

        @media (max-width: 1200px) {
          .process-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .process-grid { grid-template-columns: 1fr; }
        }
        .process-step { 
          padding: 2.5rem; background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); 
          border-radius: var(--radius-xl); transition: all 0.3s; position: relative; overflow: hidden;
        }
        .process-step:hover { background: rgba(99,102,241,0.04); border-color: var(--brand-primary-light); transform: translateY(-5px); }
        .process-step::after {
          content: ''; position: absolute; top: 0; right: 0; width: 60px; height: 60px;
          background: radial-gradient(circle at 100% 0%, rgba(99, 102, 241, 0.1), transparent 70%);
        }

        .step-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; }
        .step-icon { 
          background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.25); 
          color: var(--brand-primary-light); width: 3rem; height: 3rem; fontSize: 1.125rem;
        }
        .step-number { 
          font-size: 2.5rem; font-weight: 900; color: rgba(255,255,255,0.03); 
          font-family: 'JetBrains Mono', monospace; letter-spacing: -0.05em; 
        }

        .step-title { font-size: 1.125rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.75rem; }
        .step-desc { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.7; }

        @media (max-width: 768px) {
          .stats-strip { margin-bottom: 4rem; grid-template-columns: 1fr 1fr; }
          .process-grid { gap: 1rem; }
          .process-step { padding: 1.5rem; }
        }
      `}</style>
    </section>
  );
}
