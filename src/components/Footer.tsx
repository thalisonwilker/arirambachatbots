"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faRobot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faGithub, faTelegram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { BRAND, SOCIAL_LINKS, WHATSAPP_URL } from "@/lib/constants";

const FOOTER_LINKS = {
  Serviços: [
    { label: "Automação WhatsApp", href: "#servicos" },
    { label: "Desenvolvimento Web", href: "#servicos" },
    { label: "Pipelines & DevOps", href: "#servicos" },
    { label: "Landing Pages", href: "#servicos" },
    { label: "Web Scraping", href: "#servicos" },
  ],
  Soluções: [
    { label: "Bots Inteligentes", href: "#solucoes" },
    { label: "APIs & Integrações", href: "#solucoes" },
    { label: "Dashboards", href: "#solucoes" },
    { label: "Cloud & Infraestrutura", href: "#solucoes" },
    { label: "ETL & Dados", href: "#solucoes" },
  ],
  Empresa: [
    { label: "Sobre nós", href: "#sobre" },
    { label: "Demos ao vivo", href: "#demos" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Contato", href: WHATSAPP_URL },
  ],
};

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "4rem", paddingBottom: "2rem" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr repeat(3, 1fr)", gap: "3rem", marginBottom: "3rem" }} className="md:grid">
          {/* Brand col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: 34, height: 34, borderRadius: "0.5rem",
                  background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.9rem", color: "#fff",
                }}
              >
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)" }}>
                {BRAND.shortName}<span style={{ color: "var(--brand-primary-light)" }}>Systemas</span>
              </span>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.25rem", maxWidth: "240px" }}>
              {BRAND.tagline}. Software house especializada em automação inteligente e soluções digitais.
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { icon: faWhatsapp, href: WHATSAPP_URL, label: "WhatsApp" },
                { icon: faGithub, href: SOCIAL_LINKS.github, label: "GitHub" },
                { icon: faTelegram, href: SOCIAL_LINKS.telegram, label: "Telegram" },
                { icon: faLinkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon-btn"
                  style={{
                    width: 36, height: 36,
                    borderRadius: "0.5rem",
                    border: "1px solid var(--border-color)",
                    background: "var(--bg-card)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--text-secondary)",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
                {group}
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="footer-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="divider" style={{ marginBottom: "1.5rem" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
          <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.
          </span>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8125rem", color: "var(--text-secondary)", textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "0.75rem" }} />
            {SOCIAL_LINKS.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
