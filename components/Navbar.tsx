"use client";

import { useState } from "react";
import { Icon } from "./ui/Icon";
import { Button } from "./ui/Button";
import { Stripe } from "./ui/Stripe";
import { LanguageToggle } from "./LanguageToggle";
import { useLenis } from "lenis/react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  const links = [
    ["About", "#about"], ["The Problem", "#problem"], ["How It Works", "#model"],
    ["Health Hub", "#health-hub"], ["Stewards", "#stewards"], ["Team", "#team"], ["Get Involved", "#get-involved"],
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
        <a className="wordmark" href="#top" aria-label="Project HEART home" onClick={(e) => handleScroll(e, "#top")}><Icon name="heart" size={25} /><span>HEART</span></a>
        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={(e) => handleScroll(e, href)}>{label}</a>
          ))}
          <div className="nav-mobile-actions"><LanguageToggle /><Button>Join the Outreach</Button></div>
        </nav>
        <div className="nav-actions"><LanguageToggle /><Button>Join the Outreach</Button></div>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          <Icon name={open ? "close" : "menu"} size={25} />
        </button>
      </div>
      <Stripe />
    </header>
  );
}
