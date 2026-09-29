"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { T } from "../LanguageProvider";

export function SpeedDial() {
  const [open, setOpen] = useState(false);

  const actions = [
    { label: <T en="Get Screened" yo="Ṣe Ayẹwo" />, icon: "heart" as const, href: "#health-hub", color: "var(--red)" },
    { label: <T en="WhatsApp Us" yo="Kan si wa lori WhatsApp" />, icon: "phone" as const, href: "https://wa.me/234XXXXXXXXXX", color: "#25D366" },
    { label: <T en="Find Care" yo="Wa Itọju" />, icon: "map" as const, href: "#find-phc", color: "var(--blue)" },
  ];

  return (
    <div className={`speed-dial-root ${open ? "is-open" : ""}`}>
      <div className="speed-dial-menu">
        {actions.map((a, i) => (
          <a
            key={i}
            href={a.href}
            className="speed-dial-item"
            style={{ "--delay": `${(actions.length - i) * 0.05}s` } as React.CSSProperties}
            onClick={() => setOpen(false)}
          >
            <span className="speed-dial-label">{a.label}</span>
            <div className="speed-dial-icon" style={{ background: a.color }}>
              <Icon name={a.icon} size={20} />
            </div>
          </a>
        ))}
      </div>
      <button 
        className="speed-dial-fab" 
        onClick={() => setOpen(!open)}
        aria-label="Quick Actions"
        aria-expanded={open}
      >
        <div className="fab-icon-wrapper">
          <Icon name="heart" size={28} />
          <Icon name="close" size={28} className="fab-close" />
        </div>
      </button>
    </div>
  );
}
