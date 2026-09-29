"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Dr. Fouzia", href: "/about-dr-fouzia" },
  { label: "Services", href: "/services", hasSubmenu: true },
  { label: "Programs", href: "/integrated-functional-medicine-cbt" },
  { label: "Aesthetic Medicine", href: "/aesthetic-medicine" },
  { label: "CBT", href: "/cbt" },
  { label: "Contact", href: "/contact" },
];

const servicesSubmenu = [
  { label: "Functional Medicine", href: "/functional-medicine" },
  { label: "Women's Hormonal Health", href: "/womens-hormonal-health" },
  { label: "Gut & Digestive Health", href: "/gut-digestive-health" },
  { label: "Stress, Sleep & Energy", href: "/stress-sleep-nervous-system-health" },
  { label: "Metabolic Health", href: "/metabolic-health-weight-management" },
  { label: "Healthy Aging", href: "/healthy-aging-longevity" },
  { label: "Skin & Hair Health", href: "/skin-hair-health" },
  { label: "CBT", href: "/cbt" },
  { label: "Aesthetic Medicine", href: "/aesthetic-medicine" },
  { label: "All Services →", href: "/services" },
];

const concerns = [
  { label: "Hormones", href: "/womens-hormonal-health" },
  { label: "Gut & Digestion", href: "/gut-digestive-health" },
  { label: "Stress & Sleep", href: "/stress-sleep-nervous-system-health" },
  { label: "Metabolic Health", href: "/metabolic-health-weight-management" },
  { label: "Healthy Aging", href: "/healthy-aging-longevity" },
  { label: "Skin & Hair", href: "/skin-hair-health" },
  { label: "Emotional Wellbeing", href: "/cbt" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuReady, setMenuReady] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => setMenuReady(true));
  }, []);

  const closeMenu = useCallback(() => {
    setMenuReady(false);
    setServicesOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => setMenuOpen(false), 400);
  }, []);

  const toggleServices = useCallback(() => {
    setServicesOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (servicesOpen) {
          setServicesOpen(false);
        } else if (menuReady) {
          closeMenu();
        }
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuReady, closeMenu, servicesOpen]);

  return (
    <>
      {/* ── Top bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-6 py-5 md:px-10 md:py-6">
          {/* Brand */}
          <Link
            href="/"
            className="text-[11px] font-semibold tracking-[0.08em] uppercase text-ink no-underline"
          >
            Dr. Fouzia Al Ali
          </Link>

          {/* Menu trigger */}
          <button
            onClick={menuOpen ? closeMenu : openMenu}
            className="group flex items-center gap-3 text-[11px] font-semibold tracking-[0.08em] uppercase text-ink"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="hidden md:inline">
              {menuOpen ? "Close" : "Menu"}
            </span>
            {/* Hamburger / Close icon */}
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 h-[1.5px] bg-ink transition-all duration-300 ${
                  menuOpen
                    ? "top-1/2 w-5 -translate-y-1/2 rotate-45"
                    : "top-0 w-5"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[1.5px] w-5 bg-ink transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "-translate-y-1/2"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] bg-ink transition-all duration-300 ${
                  menuOpen
                    ? "top-1/2 w-5 -translate-y-1/2 -rotate-45"
                    : "bottom-0 w-3"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* ── Full-screen menu ── */}
      {menuOpen && (
        <div
          className="menu-backdrop"
          data-open={menuReady ? "true" : "false"}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              menuReady ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMenu}
          />

          {/* Panel */}
          <div
            className={`absolute inset-0 overflow-y-auto bg-white transition-all duration-500 ${
              menuReady
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            {/* Close button */}
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="fixed top-5 right-6 z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-blue hover:text-blue md:top-6 md:right-10"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M4 4l10 10M14 4L4 14" />
              </svg>
            </button>

            <div className="wrap flex min-h-screen flex-col justify-between py-28 md:py-32">
              {/* Top area — two columns */}
              <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr] md:gap-24">
                {/* Main navigation */}
                <div>
                  <div
                    className={`mb-8 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted transition-all duration-500 delay-100 ${
                      menuReady ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Navigation
                  </div>
                  <nav className="flex flex-col">
                    {mainNav.map((item, i) => (
                      <div key={item.label}>
                        {item.hasSubmenu ? (
                          <>
                            <button
                              onClick={toggleServices}
                              className={`group flex w-full items-center justify-between border-b border-line-light py-4 text-left font-normal tracking-[-0.02em] text-ink transition-all duration-500 hover:text-blue ${
                                menuReady
                                  ? "opacity-100 translate-y-0"
                                  : "opacity-0 translate-y-4"
                              }`}
                              style={{ fontSize: "clamp(var(--step-1), 3.5vw, var(--step-2))", transitionDelay: menuReady ? `${120 + i * 40}ms` : "0ms" }}
                            >
                              <span className="inline-flex items-baseline gap-4">
                                <span className="text-[12px] font-medium text-muted transition-colors group-hover:text-blue">
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                {item.label}
                              </span>
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`text-muted transition-transform duration-300 ${
                                  servicesOpen ? "rotate-180" : ""
                                }`}
                              >
                                <path d="M3 5l4 4 4-4" />
                              </svg>
                            </button>

                            {/* Services submenu */}
                            <div
                              className={`overflow-hidden transition-all duration-400 ${
                                servicesOpen
                                  ? "max-h-[500px] opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <div className="pl-8 pb-2 pt-1">
                                {servicesSubmenu.map((s, j) => (
                                  <Link
                                    key={s.href}
                                    href={s.href}
                                    onClick={closeMenu}
                                    className="block py-2 text-[14px] text-ink-soft transition-colors hover:text-blue"
                                    style={{
                                      transitionDelay: servicesOpen ? `${j * 30}ms` : "0ms",
                                    }}
                                  >
                                    {s.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className={`group border-b border-line-light py-4 font-normal tracking-[-0.02em] text-ink transition-all duration-500 hover:text-blue ${
                              menuReady
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            }`}
                            style={{ fontSize: "clamp(var(--step-1), 3.5vw, var(--step-2))", transitionDelay: menuReady ? `${120 + i * 40}ms` : "0ms" }}
                          >
                            <span className="inline-flex items-baseline gap-4">
                              <span className="text-[12px] font-medium text-muted transition-colors group-hover:text-blue">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              {item.label}
                            </span>
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Right column — explore by concern + info */}
                <div className="flex flex-col gap-12">
                  {/* Explore by concern */}
                  <div>
                    <div
                      className={`mb-6 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted transition-all duration-500 delay-300 ${
                        menuReady ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Explore by concern
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {concerns.map((item, i) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={closeMenu}
                          className={`text-[15px] text-ink-soft transition-all duration-400 hover:text-blue ${
                            menuReady ? "opacity-100" : "opacity-0"
                          }`}
                          style={{ transitionDelay: menuReady ? `${300 + i * 30}ms` : "0ms" }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-line" />

                  {/* Contact info */}
                  <div
                    className={`transition-all duration-500 delay-500 ${
                      menuReady ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                      Get in touch
                    </div>
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-2 block text-[15px] font-medium text-ink transition-colors hover:text-blue"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="https://instagram.com/drfouziaalali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-6 block text-[15px] font-medium text-ink transition-colors hover:text-blue"
                    >
                      Instagram
                    </a>

                    {/* CTA */}
                    <Link
                      href="/book-consultation"
                      onClick={closeMenu}
                      className="btn btn-primary inline-flex"
                    >
                      Book a consultation
                    </Link>
                  </div>

                  {/* Language */}
                  <div
                    className={`transition-all duration-500 delay-600 ${
                      menuReady ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button className="rounded-full border border-line px-4 py-2 text-[12px] font-medium text-ink transition-colors hover:border-blue hover:text-blue">
                      عربي
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom — closing line */}
              <div
                className={`mt-16 border-t border-line pt-8 transition-all duration-500 delay-700 ${
                  menuReady ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="font-display text-[clamp(18px,2.5vw,24px)] font-normal italic tracking-[-0.01em] text-ink-soft">
                  Your health is personal. Your care should be too.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
