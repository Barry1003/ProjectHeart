"use client";

import { useState } from "react";
import { Icon } from "./ui/Icon";
import { Button } from "./ui/Button";
import { Stripe } from "./ui/Stripe";
import { LanguageToggle } from "./LanguageToggle";
import { T } from "./LanguageProvider";
import { useLenis } from "lenis/react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  const links: [React.ReactNode, string][] = [
    [<T en="About" yo="Nipa" key="about"/>, "#about"], [<T en="The Problem" yo="Iṣoro Naa" key="prob"/>, "#problem"], [<T en="How It Works" yo="Bawo ni O Ṣe N Ṣiṣẹ" key="model"/>, "#model"],
    [<T en="Health Hub" yo="Agbegbe Ilera" key="hub"/>, "#health-hub"], [<T en="Stewards" yo="Awọn Olutọju" key="stewards"/>, "#stewards"], [<T en="Team" yo="Ẹgbẹ" key="team"/>, "#team"], [<T en="Get Involved" yo="Kopa" key="get"/>, "#get-involved"],
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (lenis && href.startsWith("#")) {
      e.preventDefault();
      lenis.scrollTo(href, { offset: -76 });
      setOpen(false);
    }
  };

  return (
    <header className="navbar">
      <div className="nav-shell">
        <a className="wordmark" href="#top" aria-label="Project HEART home" onClick={(e) => handleScroll(e, "#top")}><img src="/image-2.png" alt="Project HEART Logo" style={{ width: 32, height: 32, objectFit: 'contain' }} /><span>HEART</span></a>
        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={(e) => handleScroll(e, href)}>{label}</a>
          ))}
          <div className="nav-mobile-actions"><LanguageToggle /><Button><T en="Join the Outreach" yo="Darapọ mọ Eto Itọju"/></Button></div>
        </nav>
        <div className="nav-actions"><LanguageToggle /><Button><T en="Join the Outreach" yo="Darapọ mọ Eto Itọju"/></Button></div>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          <Icon name={open ? "close" : "menu"} size={25} />
        </button>
      </div>
      <Stripe />
    </header>
  );
}
