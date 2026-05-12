"use client";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBolt, faArrowRight, faCloudDownloadAlt, faBrain, 
  faProjectDiagram, faPaperPlane, faCheckCircle, faMicrochip 
} from "@fortawesome/free-solid-svg-icons";
import { WHATSAPP_URL } from '@/lib/constants';

export function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const pipelineSteps = [
    { label: 'Ingestion', icon: faCloudDownloadAlt, color: '#818cf8' },
    { label: 'AI Process', icon: faBrain, color: '#c084fc' },
    { label: 'Integration', icon: faProjectDiagram, color: '#38bdf8' },
    { label: 'Delivery', icon: faPaperPlane, color: '#34d399' },
  ];

  return (
    <section className="hero">
      <div className="hero-glow"></div>
      
      <div className="container">
        <div className="hero-grid">
          {/* Content Left */}
          <div className="hero-content animate-fade-up">
            <span className="hero-tag">
              <FontAwesomeIcon icon={faBolt} className="mr-2" /> Automation Studio
            </span>
            
            <h1 className="hero-title">
              Automação Inteligente & <br />
              <span className="gradient-text">Soluções Digitais</span>
            </h1>

            <p className="hero-desc">
              Transformamos operações manuais em fluxos de alta performance. 
              Da engenharia de software ao DevOps, entregamos tecnologia que escala sua empresa.
            </p>

            <div className="hero-actions">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Começar agora <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
              <a href="#servicos" className="btn btn-secondary">
                Ver serviços
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="hero-metrics-row">
              <div className="metric-box">
                <div className="metric-value">100%</div>
                <div className="metric-label">Uptime</div>
              </div>
              <div className="metric-box">
                <div className="metric-value">350k+</div>
                <div className="metric-label">Requests/Dia</div>
              </div>
              <div className="metric-box">
                <div className="metric-value">40%</div>
                <div className="metric-label">Efficiency</div>
              </div>
            </div>
          </div>

          {/* Visual Right */}
          <div className="hero-visual">
            <div className="main-display-card animate-fade-in">
              <div className="card-header">
                <div className="window-controls">
                  <span></span><span></span><span></span>
                </div>
                <div className="card-title-tab">System Pipeline Monitor</div>
              </div>
              
              <div className="card-content">
                {/* Horizontal Pipeline Steps */}
                <div className="horizontal-pipeline">
                  {pipelineSteps.map((step, idx) => (
                    <div key={idx} className={`pipe-step ${activeStep === idx ? 'active' : ''}`}>
                      <div className="step-icon-wrap" style={{ color: activeStep === idx ? step.color : 'rgba(255,255,255,0.2)' }}>
                        <FontAwesomeIcon icon={step.icon} />
                      </div>
                      <div className="step-tag">{step.label}</div>
                      {idx < pipelineSteps.length - 1 && (
                        <div className={`pipe-connector ${activeStep > idx ? 'completed' : ''}`}></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* System Status Row */}
                <div className="status-grid">
                  <div className="status-item health">
                    <div className="status-icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                    <div className="status-info">
                      <div className="status-label">Network</div>
                      <div className="status-val">Stable</div>
                    </div>
                  </div>
                  <div className="status-item intel">
                    <div className="status-icon"><FontAwesomeIcon icon={faMicrochip} /></div>
                    <div className="status-info">
                      <div className="status-label">Engine</div>
                      <div className="status-val">AI-Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="visual-deco-glow"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero { position: relative; min-height: 100vh; display: flex; align-items: center; padding: 120px 0 80px; overflow: hidden; background: #05050f; }
        .hero-glow { position: absolute; top: -10%; right: -10%; width: 60%; height: 60%; background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%); pointer-events: none; }
        
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; position: relative; z-index: 2; }
        
        .hero-tag { display: inline-flex; align-items: center; padding: 0.5rem 1rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 100px; color: var(--brand-primary-light); font-size: 0.75rem; font-weight: 800; margin-bottom: 2rem; letter-spacing: 0.05em; text-transform: uppercase; }
        .hero-title { font-size: 4rem; line-height: 1.1; font-weight: 900; letter-spacing: -0.04em; margin-bottom: 2rem; color: #fff; }
        .hero-desc { font-size: 1.25rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 3rem; max-width: 580px; }
        .hero-actions { display: flex; gap: 1.25rem; margin-bottom: 4rem; }
        
        .hero-metrics-row { display: flex; gap: 1.5rem; }
        .metric-box { 
          flex: 1; padding: 1.5rem; background: rgba(255,255,255,0.02); 
          border: 1px solid rgba(255,255,255,0.05); border-radius: 1.25rem;
          transition: all 0.3s;
        }
        .metric-box:hover { background: rgba(99,102,241,0.05); border-color: rgba(99,102,241,0.2); transform: translateY(-3px); }
        .metric-value { font-size: 1.75rem; font-weight: 900; color: #fff; margin-bottom: 0.25rem; }
        .metric-label { font-size: 0.7rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; }

        .hero-visual { position: relative; width: 100%; }
        .main-display-card { 
          background: rgba(15, 15, 35, 0.6); backdrop-filter: blur(20px); 
          border: 1px solid rgba(255,255,255,0.1); border-radius: 2rem; 
          box-shadow: 0 50px 100px -20px rgba(0,0,0,0.8); overflow: hidden; 
        }
        .card-header { padding: 1.25rem 1.5rem; background: rgba(255,255,255,0.03); display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .window-controls { display: flex; gap: 8px; }
        .window-controls span { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.1); }
        .card-title-tab { font-size: 0.65rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-muted); font-family: 'JetBrains Mono', monospace; }
        
        .card-content { padding: 2.5rem; display: flex; flex-direction: column; gap: 3rem; }

        .horizontal-pipeline { display: flex; align-items: center; justify-content: space-between; position: relative; }
        .pipe-step { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; position: relative; z-index: 2; flex: 1; }
        .step-icon-wrap { 
          width: 50px; height: 50px; border-radius: 14px; 
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: center; font-size: 1.25rem;
          transition: all 0.5s;
        }
        .pipe-step.active .step-icon-wrap { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); transform: scale(1.1); box-shadow: 0 0 20px rgba(99,102,241,0.2); }
        .step-tag { font-size: 0.65rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; }
        
        .pipe-connector { 
          position: absolute; top: 25px; left: calc(50% + 30px); width: calc(100% - 60px); 
          height: 2px; background: rgba(255,255,255,0.05); z-index: 1;
        }
        .pipe-connector.completed { background: linear-gradient(90deg, var(--brand-primary), transparent); }

        .status-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .status-item { 
          display: flex; align-items: center; gap: 1rem; padding: 1.25rem; 
          border-radius: 1.25rem; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);
        }
        .status-icon { font-size: 1.25rem; }
        .health .status-icon { color: #34d399; }
        .intel .status-icon { color: #818cf8; }
        .status-label { font-size: 0.6rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; }
        .status-val { font-size: 0.875rem; font-weight: 700; color: #fff; }

        .visual-deco-glow { position: absolute; bottom: -10%; left: 10%; width: 300px; height: 300px; background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%); filter: blur(40px); pointer-events: none; }

        @media (max-width: 1200px) {
          .hero-title { font-size: 3rem; }
          .hero-grid { gap: 4rem; }
        }
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr; text-align: center; }
          .hero-content { display: flex; flex-direction: column; align-items: center; }
          .hero-metrics-row { width: 100%; max-width: 500px; }
          .hero-actions { justify-content: center; }
        }
        @media (max-width: 640px) {
          .hero-title { font-size: 2.5rem; }
          .hero-metrics-row { flex-direction: column; gap: 1rem; }
          .hero-actions { flex-direction: column; width: 100%; }
          .status-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
