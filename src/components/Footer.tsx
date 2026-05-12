"use client";
import { WHATSAPP_URL, SOCIAL_LINKS } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faEnvelope, faChevronRight, faBolt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faTelegram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const footerServices = [
  "WhatsApp Automation com N8N",
  "Bots Inteligentes",
  "Integracoes com APIs",
  "Automacao de Planilhas",
  "DevOps e Deploys",
  "Dashboards e Relatorios",
];

export function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { href: SOCIAL_LINKS.linkedin, icon: faLinkedin, label: "LinkedIn", color: "#818cf8" },
    { href: SOCIAL_LINKS.github, icon: faGithub, label: "GitHub", color: "#818cf8" },
    { href: SOCIAL_LINKS.telegram, icon: faTelegram, label: "Telegram", color: "#29b6f6" },
    { href: WHATSAPP_URL, icon: faWhatsapp, label: "WhatsApp", color: "#25d366" },
  ];

  return (
    <footer style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-color)", padding: "4rem 1.5rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FontAwesomeIcon icon={faRobot} style={{ color: "white", fontSize: "0.75rem" }} />
              </div>
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)" }}>
                Ariramba<span className="gradient-text">Systemas</span>
              </span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Automacao inteligente, bots e integracoes para empresas que querem crescer sem aumentar a equipe.
            </p>
            <div style={{ display: "flex", gap: "0.6rem" }}>
              {socialLinks.map(({ href, icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ width: "2.25rem", height: "2.25rem", borderRadius: "0.5rem", background: "var(--bg-card)", border: "1px solid var(--border-color)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all 0.2s", color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = color; (e.currentTarget as HTMLElement).style.color = color; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)"; (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
                >
                  <FontAwesomeIcon icon={icon} style={{ fontSize: "0.85rem" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-primary)", marginBottom: "1.25rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Servicos</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {footerServices.map((s) => (
                <li key={s}>
                  <a href="#servicos" style={{ fontSize: "0.875rem", color: "var(--text-muted)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--brand-primary-light)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}>
                    <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "0.6rem", opacity: 0.5 }} />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-primary)", marginBottom: "1.25rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Contato</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.875rem", color: "#25d366", textDecoration: "none" }}>
                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
              </a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.875rem", color: "var(--text-muted)", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--brand-primary-light)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}>
                <FontAwesomeIcon icon={faEnvelope} /> {SOCIAL_LINKS.email}
              </a>
              <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.875rem", color: "var(--text-muted)", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#29b6f6")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}>
                <FontAwesomeIcon icon={faTelegram} /> Telegram
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.875rem", color: "var(--text-muted)", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--brand-primary-light)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}>
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "1.5rem", borderTop: "1px solid var(--border-color)", display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>&copy; {year} Ariramba Systemas. Todos os direitos reservados.</p>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <FontAwesomeIcon icon={faBolt} style={{ color: "#6366f1" }} />
            Feito com automacao e muito cafe
          </p>
        </div>
      </div>
    </footer>
  );
}
