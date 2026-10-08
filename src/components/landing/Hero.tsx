"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLanding } from "@/components/landing/i18n";
import { EnquiryForm } from "@/components/landing/EnquiryForm";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export function Hero() {
  const { copy } = useLanding();
  const h = copy.hero;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-light via-white to-white pt-28 pb-14 md:pt-36 md:pb-20">
      <div className="wrap">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14 lg:gap-20">
          {/* Left — copy */}
          <div>
            <Reveal direction="up">
              <h1
                className="mb-6 font-display font-normal leading-[1.06] tracking-[-0.04em] text-ink"
                style={{ fontSize: "clamp(var(--step-4), 5.5vw, var(--step-6))" }}
              >
                {h.headline1}{" "}
                <em className="text-blue">{h.headlineHighlight}</em>
                {h.headline2 ? <> {h.headline2}</> : null}
              </h1>
            </Reveal>

            <Reveal direction="up" delay={100}>
              <p
                className="mb-8 max-w-[520px] text-ink-soft"
                style={{ fontSize: "var(--step-1)", lineHeight: 1.6 }}
              >
                {h.sub}
              </p>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <WhatsAppButton
                  message={h.waMessage}
                  context="hero-primary"
                  className="justify-center sm:justify-start"
                >
                  {h.primaryCta}
                </WhatsAppButton>
                <a href="#enquiry-form-1" className="btn btn-ghost justify-center md:hidden">
                  {h.secondaryCta}
                </a>
              </div>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <div className="flex max-w-[540px] flex-wrap items-baseline gap-x-3 gap-y-1.5 border-t border-line pt-5 text-[13px] text-muted">
                {h.trust.map((item, i) => (
                  <span key={item} className="flex items-baseline gap-3">
                    {i > 0 ? <span className="text-line-dark" aria-hidden="true">•</span> : null}
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — Form 1 */}
          <Reveal direction="up" delay={150}>
            <EnquiryForm variant={1} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
