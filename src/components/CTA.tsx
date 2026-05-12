import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faInfinity } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { WHATSAPP_URL } from "@/lib/constants";

export function CTA() {
  return (
    <section style={{ padding: "5rem 0" }}>
      <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(6,182,212,0.07) 60%, rgba(139,92,246,0.05) 100%)",
            border: "1px solid rgba(99,102,241,0.25)",
            borderRadius: "var(--radius-2xl)",
            padding: "4rem 3rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              top: "-40%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "400px",
              background: "radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div className="section-label" style={{ margin: "0 auto 1.25rem" }}>
            <FontAwesomeIcon icon={faInfinity} />
            Pronto para automatizar?
          </div>

          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Automatize tarefas repetitivas e{" "}
            <span className="gradient-text">foque no crescimento</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: "2rem" }}>
            Fale com a equipe da Ariramba Systemas e descubra como podemos transformar
            seus processos operacionais em vantagem competitiva.
          </p>

          <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ fontSize: "1rem", padding: "0.875rem 1.75rem" }}
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              Falar no WhatsApp agora
            </a>
            <a
              href="mailto:contato@ariramba.com.br"
              className="btn btn-secondary"
              style={{ fontSize: "1rem", padding: "0.875rem 1.75rem" }}
            >
              Enviar um e-mail
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>

          {/* Trust line */}
          <p style={{ marginTop: "1.75rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            Resposta em até 2 horas • Sem compromisso • Diagnóstico gratuito
          </p>
        </div>
      </div>
    </section>
  );
}
