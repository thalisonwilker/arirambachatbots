"use client";
import React, { useState, useEffect } from "react";
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
    { label: "Demos", href: "#demos" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Sobre", href: "#sobre" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <Link href="/" className="logo">
          <div className="logo-icon">
            <FontAwesomeIcon icon={faRobot} />
          </div>
          <span className="logo-text">
            {BRAND.shortName}<span>Systemas</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp-header">
            <FontAwesomeIcon icon={faWhatsapp} />
            <span>Consultoria</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp-mobile">
            <FontAwesomeIcon icon={faWhatsapp} />
            Falar no WhatsApp
          </a>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;
          padding: 1.5rem 0; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .header.scrolled {
          padding: 0.75rem 0; background: rgba(5, 5, 15, 0.85);
          backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .header-container { display: flex; align-items: center; justify-content: space-between; }

        .logo { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; }
        .logo-icon {
          width: 38px; height: 38px; background: var(--brand-gradient);
          border-radius: 10px; display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 1.1rem; box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }
        .logo-text { font-size: 1.25rem; font-weight: 800; color: #fff; letter-spacing: -0.02em; }
        .logo-text span { color: var(--brand-primary-light); }

        .desktop-nav { display: flex; align-items: center; gap: 2rem; }
        .nav-link {
          font-size: 0.875rem; font-weight: 600; color: var(--text-secondary);
          text-decoration: none; transition: color 0.2s;
        }
        .nav-link:hover { color: #fff; }

        .btn-whatsapp-header {
          padding: 0.6rem 1.2rem; background: rgba(37, 211, 102, 0.1);
          border: 1px solid rgba(37, 211, 102, 0.2); color: #25d366;
          font-size: 0.8125rem; font-weight: 700; border-radius: 100px;
          display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;
        }
        .btn-whatsapp-header:hover { background: #25d366; color: #fff; transform: translateY(-2px); }

        .mobile-toggle {
          display: none; background: none; border: none; color: #fff; font-size: 1.5rem; cursor: pointer;
        }

        .mobile-menu {
          position: fixed; top: 0; right: -100%; width: 100%; height: 100vh;
          background: #05050f; z-index: 999; transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex; align-items: center; justify-content: center;
        }
        .mobile-menu.open { right: 0; }
        .mobile-nav { display: flex; flex-direction: column; align-items: center; gap: 2.5rem; }
        .mobile-link { font-size: 1.5rem; font-weight: 700; color: #fff; text-decoration: none; }
        .btn-whatsapp-mobile { padding: 1rem 2rem; font-size: 1.1rem; }

        @media (max-width: 1024px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: block; }
        }
      `}</style>
    </header>
  );
}
