"use client";

import { useEffect, useState } from "react";
import { useLanding } from "@/components/landing/i18n";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export function StickyHeader() {
  const { copy, lang, setLang } = useLanding();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "border-line shadow-[var(--shadow-near)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-[min(1200px,92%)] items-center justify-between gap-3">
        {/* Brand mark — deliberately not a link: no exits on this page. */}
        <span className="truncate text-[10px] font-semibold uppercase tracking-[0.08em] text-ink md:text-[11px]">
          {copy.header.brand}
        </span>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
            className="rounded-full border border-line px-3.5 py-2 text-[12px] font-medium text-ink transition-colors duration-300 hover:border-blue hover:text-blue md:px-4"
          >
            {lang === "en" ? "عربي" : "English"}
          </button>

          <WhatsAppButton
            message={copy.header.waMessage}
            context="header"
            className="!px-4 !py-2.5 text-[12.5px] md:!px-5 md:text-[13px]"
          >
            {copy.header.whatsapp}
          </WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
