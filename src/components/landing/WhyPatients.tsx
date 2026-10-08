"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLanding } from "@/components/landing/i18n";

export function WhyPatients() {
  const { copy } = useLanding();
  const w = copy.why;

  return (
    <section className="bg-surface-deep py-16 md:py-24">
      <div className="wrap">
        <Reveal direction="up">
          <h2
            className="mb-10 max-w-[760px] font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink md:mb-14"
            style={{ fontSize: "clamp(var(--step-3), 3.6vw, var(--step-5))" }}
          >
            {w.heading}
          </h2>
        </Reveal>

        <div className="grid gap-3.5 sm:grid-cols-2 md:gap-5">
          {w.points.map((point, i) => (
            <Reveal key={point.lead} direction="up" delay={i * 70}>
              <div className="flex h-full items-start gap-3.5 rounded-2xl border border-line bg-white/70 p-5 backdrop-blur-sm">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue text-white">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <p className="text-[15px] leading-[1.6] text-ink-soft">
                  <strong className="font-semibold text-ink">{point.lead}</strong>
                  {point.rest}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
