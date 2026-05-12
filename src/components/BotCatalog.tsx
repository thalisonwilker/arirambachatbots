"use client";
import { useState } from "react";
import { BOT_CATALOG } from "@/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faCheckCircle, faClock, faTools, faRobot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faTelegram, faGoogle } from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { WHATSAPP_URL } from "@/lib/constants";

type Platform = "all" | "whatsapp" | "telegram" | "gmail";

const PLATFORM_CONFIG: Record<Exclude<Platform, "all">, { label: string; color: string; icon: IconDefinition }> = {
  whatsapp: { label: "WhatsApp", color: "#25d366", icon: faWhatsapp },
  telegram: { label: "Telegram", color: "#29b6f6", icon: faTelegram },
  gmail: { label: "Gmail", color: "#ea4335", icon: faGoogle },
};

const tabs: Array<{ key: Platform; label: string; icon: IconDefinition; color: string }> = [
  { key: "all", label: "Todos", icon: faLayerGroup, color: "#818cf8" },
  { key: "whatsapp", label: "WhatsApp", icon: faWhatsapp, color: "#25d366" },
  { key: "telegram", label: "Telegram", icon: faTelegram, color: "#29b6f6" },
  { key: "gmail", label: "Gmail", icon: faGoogle, color: "#ea4335" },
];

export function BotCatalog() {
  const [active, setActive] = useState<Platform>("all");
  const filtered = active === "all" ? BOT_CATALOG : BOT_CATALOG.filter((b) => b.platform === active);

  return (
    <section id="catalogo" style={{ padding: "6rem 0", background: "linear-gradient(180deg, transparent, rgba(99,102,241,0.04), transparent)" }}>
      <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="section-header">
          <div className="section-label">
            <FontAwesomeIcon icon={faRobot} /> Catalogo de bots
          </div>
          <h2 className="section-title">
            Bots prontos para{" "}
            <span className="gradient-text">WhatsApp, Telegram e Gmail</span>
          </h2>
          <p className="section-subtitle">
            Solucoes pre-construidas e personalizaveis. Escolha a plataforma e o tipo de bot
            que sua empresa precisa — entregamos em dias, nao semanas.
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "2.5rem" }}>
          {tabs.map(({ key, label, icon, color }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.25rem", borderRadius: "100px", border: active === key ? `1.5px solid ${color}` : "1.5px solid var(--border-color)", background: active === key ? `${color}18` : "var(--bg-card)", color: active === key ? color : "var(--text-secondary)", fontWeight: 600, fontSize: "0.875rem", cursor: "pointer", transition: "all 0.2s" }}
            >
              <FontAwesomeIcon icon={icon} style={{ fontSize: "0.85rem" }} />
              {label}
              <span style={{ fontSize: "0.72rem", padding: "0.1rem 0.45rem", borderRadius: "100px", background: active === key ? `${color}30` : "rgba(255,255,255,0.05)", fontWeight: 700 }}>
                {key === "all" ? BOT_CATALOG.length : BOT_CATALOG.filter((b) => b.platform === key).length}
              </span>
            </button>
          ))}
        </div>

        {/* Bot grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {filtered.map((bot) => {
            const cfg = PLATFORM_CONFIG[bot.platform];
            return (
              <div key={bot.name} className="card" style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                {/* Platform badge */}
                <div style={{ position: "absolute", top: "1rem", right: "1rem", display: "flex", alignItems: "center", gap: "0.35rem", padding: "0.25rem 0.6rem", background: `${cfg.color}18`, border: `1px solid ${cfg.color}40`, borderRadius: "100px", fontSize: "0.7rem", fontWeight: 700, color: cfg.color }}>
                  <FontAwesomeIcon icon={cfg.icon} style={{ fontSize: "0.7rem" }} />
                  {cfg.label}
                </div>

                {/* Bot main icon */}
                <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", background: `${cfg.color}18`, border: `1px solid ${cfg.color}40`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  <FontAwesomeIcon icon={faRobot} style={{ color: cfg.color, fontSize: "1.2rem" }} />
                </div>

                <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem", color: "var(--text-primary)", paddingRight: "5rem" }}>
                  {bot.name}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.65, flex: 1, marginBottom: "1.25rem" }}>
                  {bot.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                  {bot.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>

                {/* Status + CTA */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", borderTop: "1px solid var(--border-color)" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: bot.status === "disponivel" ? "#25d366" : "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    <FontAwesomeIcon icon={bot.status === "disponivel" ? faCheckCircle : faClock} />
                    {bot.status === "disponivel" ? "Disponivel" : "Em breve"}
                  </span>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", fontWeight: 600, color: "var(--brand-primary-light)", textDecoration: "none", padding: "0.4rem 0.75rem", borderRadius: "0.5rem", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", transition: "all 0.2s" }}>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    Solicitar
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: "3rem", textAlign: "center", padding: "2rem", background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "1rem" }}>
          <FontAwesomeIcon icon={faTools} style={{ color: "#818cf8", fontSize: "1.5rem", marginBottom: "1rem", display: "block" }} />
          <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>
            Nao encontrou o bot que precisa?
          </h3>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
            Desenvolvemos bots totalmente customizados para qualquer plataforma e fluxo de trabalho.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ display: "inline-flex" }}>
            <FontAwesomeIcon icon={faWhatsapp} /> Solicitar bot personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
