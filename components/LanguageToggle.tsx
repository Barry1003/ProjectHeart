"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="language" aria-label="Choose language">
      <button className={lang === "EN" ? "active" : ""} onClick={() => setLang("EN")} aria-pressed={lang === "EN"}>EN</button>
      <span>/</span>
      <button className={lang === "YO" ? "active" : ""} onClick={() => setLang("YO")} aria-pressed={lang === "YO"}>YO</button>
    </div>
  );
}
