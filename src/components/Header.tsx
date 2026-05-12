"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { BRAND, WHATSAPP_URL } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Demos", href: "#demos" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Sobre", href: "#sobre" },
  ];

  return (
    <header className={`header-main ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="container header-container">
        {/* Logo */}
        <Link href="/" className="logo-group">
          <div className="logo-icon">
            <FontAwesomeIcon icon={faRobot} />
          </div>
          <span className="logo-text">
            {BRAND.shortName}<span className="accent">Systemas</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="nav-item">
                {link.label}
              </Link>
            ))}
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-cta">
            <FontAwesomeIcon icon={faWhatsapp} />
            <span>Orçamento</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${mobileMenuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-content">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="mobile-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-full"
            style={{ marginTop: "1rem" }}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <style jsx>{`
        .header-main {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          height: 90px; display: flex; align-items: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid transparent;
        }
        .header-main.is-scrolled {
          height: 70px; background: rgba(5, 5, 15, 0.8);
          backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .header-container {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%;
        }

        .logo-group {
          display: flex; align-items: center; gap: 0.75rem; text-decoration: none;
        }
        .logo-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: linear-gradient(135deg, var(--brand-primary), var(--brand-secondary));
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(99,102,241,0.3);
        }
        .logo-text { font-size: 1.25rem; font-weight: 800; color: #fff; letter-spacing: -0.02em; }
        .logo-text .accent { color: var(--brand-primary-light); }

        .nav-desktop { display: flex; align-items: center; gap: 2.5rem; }
        .nav-links { display: flex; align-items: center; gap: 1.75rem; }
        .nav-item {
          font-size: 0.875rem; font-weight: 600; color: var(--text-secondary);
          text-decoration: none; transition: color 0.2s;
        }
        .nav-item:hover { color: #fff; }
        
        .btn-cta { padding: 0.6rem 1.25rem; font-size: 0.85rem; border-radius: 12px; }

        .nav-toggle {
          display: none; background: none; border: none; color: #fff;
          font-size: 1.5rem; cursor: pointer; padding: 0.5rem;
        }

        .mobile-overlay {
          position: fixed; inset: 0; background: var(--bg-base); z-index: 999;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          opacity: 0; pointer-events: none; transition: all 0.3s;
        }
        .mobile-overlay.is-open { opacity: 1; pointer-events: auto; }
        .mobile-menu-content {
          display: flex; flex-direction: column; align-items: center; gap: 1.5rem;
          width: 100%; max-width: 300px;
        }
        .mobile-item {
          font-size: 1.5rem; font-weight: 700; color: #fff; text-decoration: none;
        }

        @media (max-width: 1024px) {
          .nav-desktop { display: none; }
          .nav-toggle { display: block; }
        }
      `}</style>
    </header>
  );
}
