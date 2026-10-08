"use client";

import { useEffect, useState } from "react";
import { useLanding } from "@/components/landing/i18n";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

/**
 * Bottom bar — appears once the hero is scrolled past, hides near the
 * footer and whenever a form field has focus (mobile keyboard open).
 */
export function StickyBar() {
  const { copy } = useLanding();
  const b = copy.stickyBar;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 520;
      const nearFooter =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 120;
      const el = document.activeElement;
      const typing =
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        el instanceof HTMLSelectElement;
      setVisible(scrolled && !nearFooter && !typing);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("focusin", onScroll);
    window.addEventListener("focusout", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("focusin", onScroll);
      window.removeEventListener("focusout", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 p-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur transition-all duration-300 md:hidden ${
        visible
          ? "pointer-events-auto visible translate-y-0 opacity-100"
          : "pointer-events-none invisible translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <WhatsAppButton
          message={b.waMessage}
          context="sticky-bar"
          className="flex-1 justify-center !py-3"
        >
          {b.whatsapp}
        </WhatsAppButton>
        <a href="#enquiry-form-2" className="btn btn-ghost flex-1 justify-center !py-3">
          {b.enquiry}
        </a>
      </div>
    </div>
  );
}
