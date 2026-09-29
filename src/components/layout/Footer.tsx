"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Dr. Fouzia", href: "/about-dr-fouzia" },
  { label: "Services", href: "/#services" },
  { label: "Your Journey", href: "/#journey" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Functional Medicine", href: "/functional-medicine" },
  { label: "Hormones & Lifestyle", href: "/womens-hormonal-health" },
  { label: "Gut Health", href: "/gut-digestive-health" },
  { label: "CBT", href: "/cbt" },
  { label: "Aesthetic Medicine", href: "/aesthetic-medicine" },
];

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/", external: true },
  { label: "@drfouziaalali", href: "https://instagram.com/drfouziaalali", external: true },
  { label: "Book Consultation", href: "/book-consultation", external: false },
];

/* ── Intersection reveal (safe: starts visible) ── */
function useReveal<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ── Reveal wrapper ── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.08);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Editorial link with underline sweep ── */
function EditorialLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative inline-block py-1 text-[14px] text-ink-soft transition-colors duration-300 hover:text-ink"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-blue transition-transform duration-500 ease-out group-hover:scale-x-100" />
    </Link>
  );
}

/* ── Numbered column label (matches nav) ── */
function ColumnLabel({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <span className="text-[10px] font-medium tracking-[0.1em] text-muted">{num}</span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
        {children}
      </span>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface-deep pt-20 pb-10 md:pt-28 md:pb-12">
      {/* Very subtle ambient wash — matches hero, not techy */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(90,150,200,0.05), transparent 70%)",
        }}
      />

      <div className="wrap relative">
        {/* ── Closing statement ── */}
        <Reveal delay={0}>
          <div className="border-b border-line pb-14 md:pb-20">
            <div className="eyebrow mb-6">Ready when you are</div>

            <p
              className="font-display font-normal leading-[1.12] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(var(--step-3), 4.2vw, var(--step-4))" }}
            >
              Your health is personal.
              <br />
              <em className="text-blue">Your care should be too.</em>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/book-consultation" className="btn btn-primary">
                Book free consult
              </Link>
              <Link
                href="/contact"
                className="btn btn-ghost"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </Reveal>

        {/* ── Main grid ── */}
        <div className="grid gap-12 border-b border-line py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-10">
          {/* Brand */}
          <Reveal delay={100}>
            <div>
              <div className="mb-4 text-[11px] font-semibold tracking-[0.08em] uppercase text-ink">
                Dr. Fouzia Al Ali
              </div>
              <p className="max-w-[300px] text-[14px] leading-[1.7] text-ink-soft">
                Holistic, root-cause care for health and wellbeing. Consultant
                Family Physician. Dubai, UAE.
              </p>
              <div className="mt-5 flex items-center gap-2.5 text-[12px] text-muted">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue" />
                </span>
                Accepting new patients
              </div>
            </div>
          </Reveal>

          {/* Navigate */}
          <Reveal delay={200}>
            <div>
              <ColumnLabel num="01">Navigate</ColumnLabel>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <EditorialLink key={link.label} href={link.href}>
                    {link.label}
                  </EditorialLink>
                ))}
              </nav>
            </div>
          </Reveal>

          {/* Services */}
          <Reveal delay={300}>
            <div>
              <ColumnLabel num="02">Services</ColumnLabel>
              <nav className="flex flex-col gap-1">
                {serviceLinks.map((link) => (
                  <EditorialLink key={link.label} href={link.href}>
                    {link.label}
                  </EditorialLink>
                ))}
              </nav>
            </div>
          </Reveal>

          {/* Connect */}
          <Reveal delay={400}>
            <div>
              <ColumnLabel num="03">Connect</ColumnLabel>
              <nav className="flex flex-col gap-1">
                {socialLinks.map((link) => (
                  <EditorialLink
                    key={link.label}
                    href={link.href}
                    external={link.external}
                  >
                    {link.label}
                  </EditorialLink>
                ))}
              </nav>
            </div>
          </Reveal>
        </div>

        {/* ── Closing line ── */}
        <Reveal delay={500}>
          <div className="border-b border-line py-12 md:py-14">
            <p
              className="font-display font-normal italic tracking-[-0.01em] text-ink-soft"
              style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
            >
              “Every person has a story that explains their health. I listen to
              that story before I treat anything.”
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-blue text-[12px] font-semibold text-white">
                FA
              </div>
              <div>
                <div className="text-[13px] font-semibold text-ink">
                  Dr. Fouzia Al Ali
                </div>
                <div className="text-[11px] text-muted">
                  Consultant Family Physician
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Bottom bar ── */}
        <Reveal delay={600}>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-8 text-[11px] text-muted">
            <span>
              &copy; {new Date().getFullYear()} Dr. Fouzia Al Ali. All rights
              reserved.
            </span>
            <span className="max-w-[420px]">
              Information here is educational. Always consult a qualified
              clinician for medical advice.
            </span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}