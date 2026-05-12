import { WHATSAPP_URL } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function CTA() {
  return (
    <section id="contato" style={{ padding: "6rem 0", position: "relative", overflow: "hidden" }}>
      <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div style={{ borderRadius: "1.5rem", border: "1px solid rgba(99,102,241,0.25)", background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.08) 50%, rgba(6,182,212,0.06) 100%)", padding: "4rem 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "400px", background: "radial-gradient(ellipse, rgba(99,102,241,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              <FontAwesomeIcon icon={faRocket} /> Proximo passo
            </div>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1.25rem", color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              Quer automatizar uma tarefa ou <span className="gradient-text">integrar seus sistemas?</span>
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "540px", margin: "0 auto 2.5rem", lineHeight: 1.75 }}>
              Fale com a Ariramba Systemas no WhatsApp e nos conte o que voce precisa automatizar. Podemos transformar uma ideia em uma solucao funcional — sem burocracia.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ fontSize: "1.05rem", padding: "1.1rem 2.5rem", display: "inline-flex" }}>
              <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: "1.2rem" }} />
              Solicitar orcamento pelo WhatsApp
            </a>
            <p style={{ marginTop: "1.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              Respondemos em menos de 4 horas durante dias uteis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
