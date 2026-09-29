"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="bg-surface-deep py-16 md:py-24">
      <div className="wrap-narrow text-center">
        <Reveal direction="up">
          <div className="eyebrow justify-center mb-5">Your next step</div>
        </Reveal>
        <Reveal direction="up" delay={100}>
          <h2
            className="mb-5 font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink"
            style={{ fontSize: "clamp(var(--step-3), 3.8vw, var(--step-4))" }}
          >
            A conversation can open up
            <br />a <em className="text-blue">clearer path.</em>
          </h2>
        </Reveal>
        <Reveal direction="up" delay={200}>
          <p className="mx-auto mb-10 max-w-[440px] text-ink-soft" style={{ fontSize: "var(--step-0)", lineHeight: 1.7 }}>
            Ask about the services, consultation options and next steps that may
            be appropriate for you.
          </p>
        </Reveal>
        <Reveal direction="up" delay={300}>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/book-consultation" className="btn btn-primary">
              Book free consult
            </Link>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              WhatsApp us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
