"use client";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const navLinks = [
  { label: "Servicos", href: "#servicos" },
  { label: "Bots", href: "#demos" },
  { label: "Catalogo", href: "#catalogo" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(8,8,18,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(99,102,241,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}
        >
          <div style={{ width: "2.1rem", height: "2.1rem", borderRadius: "0.55rem", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FontAwesomeIcon icon={faRobot} style={{ color: "white", fontSize: "0.85rem" }} />
          </div>
          <span style={{ fontWeight: 800, fontSize: "1rem", color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
            Ariramba<span className="gradient-text">Systemas</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text-primary)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
              className="hidden sm:inline"
            >
              {l.label}
            </Link>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp hidden sm:inline-flex" style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}>
            <FontAwesomeIcon icon={faWhatsapp} />
            Falar no WhatsApp
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)", display: "flex" }} className="sm:hidden" aria-label="Menu">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} style={{ fontSize: "1.1rem" }} />
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border-color)", padding: "1rem 1.5rem 1.5rem" }} className="sm:hidden">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "0.75rem 0", color: "var(--text-secondary)", textDecoration: "none", fontWeight: 500, borderBottom: "1px solid var(--border-color)" }}>{l.label}</Link>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ marginTop: "1rem", width: "100%", justifyContent: "center" }}>
            <FontAwesomeIcon icon={faWhatsapp} /> Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
