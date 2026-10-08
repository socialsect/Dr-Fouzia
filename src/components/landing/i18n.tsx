"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getCopy, type LandingCopy } from "@/lib/landing-content";

export type Lang = "en" | "ar";

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  copy: LandingCopy;
}

const I18nContext = createContext<I18nValue | null>(null);

export function LandingProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Honour ?lang=ar on arrival (default stays English).
  // Runs after hydration by design: SSR must render the same default ("en")
  // as the first client render, then this one-time read applies the URL
  // choice. Any other pattern (lazy useState, useSearchParams) either
  // breaks hydration or forces a Suspense fallback that blanks the page.
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- post-hydration URL read, see comment above
      if (params.get("lang") === "ar") setLangState("ar");
    } catch {
      // no-op
    }
  }, []);

  // Apply direction + language to the document while mounted.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    return () => {
      // Leave the rest of the site in LTR/English when navigating away.
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    };
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      const url = new URL(window.location.href);
      if (next === "ar") url.searchParams.set("lang", "ar");
      else url.searchParams.delete("lang");
      window.history.replaceState(null, "", url);
    } catch {
      // no-op
    }
  }, []);

  const copy = useMemo(() => getCopy(lang), [lang]);

  const value = useMemo(() => ({ lang, setLang, copy }), [lang, setLang, copy]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useLanding(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLanding must be used within LandingProvider");
  return ctx;
}
