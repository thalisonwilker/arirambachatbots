"use client";
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
    <section id="exemplos" className="examples-section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Cases e exemplos</div>
          <h2 className="section-title">Exemplos de <span className="gradient-text">soluções que já entregamos</span></h2>
          <p className="section-subtitle">Cada projeto começa com uma conversa. Esses são tipos de soluções que construímos — e que podem ser adaptadas ao seu negócio.</p>
        </div>
        
        <div className="grid-responsive examples-grid">
          {EXAMPLES.map((example) => (
            <div key={example.title} className="card example-card animate-fade-up">
              <div className="example-header">
                <div className="icon-wrap example-icon">
                  <FontAwesomeIcon icon={getIcon(example.iconPrefix, example.iconName)} />
                </div>
                <div className="tag-group">
                  {example.tags.map((tag) => <span key={tag} className="tag-mini">{tag}</span>)}
                </div>
              </div>
              <h3 className="example-title">{example.title}</h3>
              <p className="example-desc">{example.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .examples-section { padding: 6rem 0; background: #05050f; }
        
        .grid-responsive { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 1.5rem; 
        }

        .example-card { 
          padding: 2rem; 
          background: rgba(255,255,255,0.02); 
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s;
        }
        .example-card:hover { border-color: var(--brand-cyan); transform: translateY(-5px); background: rgba(6,182,212,0.04); }
        
        .example-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
        .example-icon { 
          width: 2.5rem; height: 2.5rem; background: rgba(6,182,212,0.1); 
          color: var(--brand-cyan); display: flex; alignItems: center; justifyContent: center;
          border-radius: 0.65rem; border: 1px solid rgba(6,182,212,0.2);
        }
        
        .tag-group { display: flex; gap: 0.4rem; flex-wrap: wrap; justify-content: flex-end; }
        .tag-mini { 
          font-size: 0.65rem; padding: 0.2rem 0.6rem; background: rgba(255,255,255,0.05); 
          border-radius: 2rem; color: var(--text-secondary); border: 1px solid rgba(255,255,255,0.1);
        }

        .example-title { font-size: 1.125rem; font-weight: 700; color: #fff; margin-bottom: 0.75rem; }
        .example-desc { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; }

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
