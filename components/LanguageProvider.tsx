"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "EN" | "YO";
const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "EN", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function T({ en, yo }: { en: string; yo: string }) {
  const { lang } = useLanguage();
  return <>{lang === "EN" ? en : yo}</>;
}
