"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 100,
        width: "60px",
        height: "60px",
        background: "var(--brand-green)",
        color: "#fff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.75rem",
        boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4), 0 0 0 4px rgba(16, 185, 129, 0.1)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      <FontAwesomeIcon icon={faWhatsapp} />
      <span 
        style={{
          position: "absolute",
          top: "-5px",
          right: "-5px",
          width: "14px",
          height: "14px",
          background: "#fff",
          borderRadius: "50%",
          border: "3px solid var(--brand-green)",
          animation: "pulse 2s infinite"
        }}
      />
    </a>
  );
}
