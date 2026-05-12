import { WHATSAPP_URL } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 9999,
        width: "3.5rem",
        height: "3.5rem",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #25d366, #128c7e)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 24px rgba(37,211,102,0.45)",
        textDecoration: "none",
        animation: "pulse-green 2.5s infinite",
      }}
    >
      <FontAwesomeIcon icon={faWhatsapp} style={{ color: "white", fontSize: "1.5rem" }} />
    </a>
  );
}
