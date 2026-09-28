"use client";

import { useState } from "react";

export function LanguageToggle() {
  const [language, setLanguage] = useState<"EN" | "YO">("EN");
  return (
    <div className="language" aria-label="Choose language">
      <button className={language === "EN" ? "active" : ""} onClick={() => setLanguage("EN")} aria-pressed={language === "EN"}>EN</button>
      <span>/</span>
      <button className={language === "YO" ? "active" : ""} onClick={() => setLanguage("YO")} aria-pressed={language === "YO"}>YO</button>
    </div>
  );
}
