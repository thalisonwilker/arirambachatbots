"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt, faUsers, faStar, faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { TECH_STACK } from "@/lib/data";
import { BRAND, WHATSAPP_URL } from "@/lib/constants";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const HIGHLIGHTS = [
  {
    icon: faShieldAlt,
    title: "Código em Produção",
    description: "Entregamos sistemas reais, robustos e escaláveis. Tudo documentado, testado e pronto para o mercado.",
  },
  {
    icon: faUsers,
    title: "Foco em ROI & Eficiência",
    description: "Medimos o sucesso pelo impacto no seu negócio: horas economizadas e processos otimizados.",
  },
  {
    icon: faStar,
    title: "Stack de Alta Performance",
    description: "Python, Next.js, Docker, N8N, AWS — utilizamos as melhores ferramentas para cada desafio.",
  },
];

export function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="section">
        <div className="about-grid">
          {/* Left Content */}
          <div className="about-content animate-fade-up">
            <div className="section-label">
              <FontAwesomeIcon icon={faRobot} /> Sobre o Studio
            </div>
            <h2 className="section-title text-left">
              Uma software house <br />
              <span className="gradient-text">obcecada por automação</span>
            </h2>
            <p className="about-text">
              A <strong>Ariramba Systemas</strong> é um studio de tecnologia focado em automação inteligente, 
              engenharia de software e soluções digitais modernas.
            </p>
            <p className="about-subtext">
              Desenvolvemos integrações, pipelines de dados, aplicações web e automações 
              capazes de eliminar tarefas manuais e acelerar o crescimento de negócios digitais. 
              Nosso foco é resolver problemas reais com tecnologia de ponta.
            </p>

            {/* Highlights */}
            <div className="highlights-list">
              {HIGHLIGHTS.map((h) => (
                <div key={h.title} className="highlight-item">
                  <div className="icon-box highlight-icon">
                    <FontAwesomeIcon icon={h.icon} />
                  </div>
                  <div>
                    <h4 className="highlight-title">{h.title}</h4>
                    <p className="highlight-desc">{h.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Começar um projeto agora
            </a>
          </div>

          {/* Right — Tech Stack Visual */}
          <div className="about-visual animate-fade-in">
            <div className="stack-container">
              <div className="stack-header">Stack Tecnológica</div>
              <div className="stack-grid">
                {TECH_STACK.map((tech) => (
                  <div key={tech.label} className="tech-tag">
                    <FontAwesomeIcon icon={tech.icon} className="tech-icon" />
                    <span>{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mission-card">
              <div className="mission-label">{BRAND.tagline}</div>
              <p className="mission-text">
                Engenharia de software focada em resolver problemas operacionais reais com tecnologia de ponta.
              </p>
            </div>
            
            {/* Background Decoration */}
            <div className="visual-glow"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section { padding: 8rem 0; position: relative; overflow: hidden; }
        .about-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 6rem; align-items: start; }
        .text-left { text-align: left !important; margin: 0 0 1.5rem 0 !important; }
        .about-text { fontSize: 1.125rem; color: var(--text-primary); line-height: 1.8; margin-bottom: 1.5rem; }
        .about-subtext { fontSize: 0.9375rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 2.5rem; }
        
        .highlights-list { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 1.5rem; 
          margin-top: 2.5rem;
        }
        .highlight-item { 
          display: flex; 
          flex-direction: column;
          gap: 1.25rem; 
          align-items: flex-start; 
          background: rgba(255,255,255,0.02);
          padding: 1.5rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-subtle);
        }
        .highlight-icon { 
          background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2); 
          color: var(--brand-primary-light); width: 2.5rem; height: 2.5rem; fontSize: 1rem;
        }
        .highlight-title { font-size: 1rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.25rem; }
        .highlight-desc { font-size: 0.8125rem; color: var(--text-secondary); line-height: 1.6; }

        @media (max-width: 1100px) {
          .highlights-list { grid-template-columns: 1fr; }
        }
        
        .about-visual { display: flex; flex-direction: column; gap: 1.5rem; position: relative; }
        .stack-container { 
          background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); 
          border-radius: var(--radius-2xl); padding: 2.5rem; position: relative; z-index: 2;
          backdrop-filter: blur(10px);
        }
        .stack-header { font-size: 0.75rem; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 1.5rem; }
        .stack-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
        .tech-tag { 
          background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); 
          padding: 1rem; border-radius: var(--radius-lg); display: flex; align-items: center; gap: 0.75rem;
          transition: all 0.2s;
        }
        .tech-tag:hover { background: rgba(99,102,241,0.05); border-color: var(--brand-primary-light); }
        .tech-icon { color: var(--brand-primary-light); font-size: 1rem; }
        .tech-tag span { font-size: 0.8125rem; font-weight: 700; color: var(--text-secondary); }

        .mission-card {
          background: linear-gradient(135deg, rgba(99,102,241,0.12), rgba(6,182,212,0.08));
          border: 1px solid rgba(99,102,241,0.3); border-radius: var(--radius-xl); padding: 2rem;
          text-align: center; position: relative; z-index: 2;
        }
        .mission-label { font-size: 0.75rem; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; color: var(--brand-primary-light); margin-bottom: 0.75rem; }
        .mission-text { font-size: 1rem; color: var(--text-primary); line-height: 1.7; font-weight: 500; }

        .visual-glow {
          position: absolute; top: 20%; right: -20%; width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%);
          pointer-events: none; z-index: 1;
        }

        @media (max-width: 1100px) {
          .about-grid { grid-template-columns: 1fr; gap: 4rem; }
          .about-content { text-align: center; display: flex; flex-direction: column; align-items: center; }
          .text-left { text-align: center !important; }
          .highlight-item { text-align: left; }
        }
      `}</style>
    </section>
  );
}
