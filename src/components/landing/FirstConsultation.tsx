"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLanding } from "@/components/landing/i18n";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export function FirstConsultation() {
  const { copy } = useLanding();
  const p = copy.process;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="wrap">
        <Reveal direction="up">
          <h2
            className="mb-12 max-w-[720px] font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink md:mb-16"
            style={{ fontSize: "clamp(var(--step-3), 3.6vw, var(--step-5))" }}
          >
            {p.heading}
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {p.steps.map((step, i) => (
            <Reveal key={step.num} direction="up" delay={i * 100}>
              <div className="relative">
                <span className="mb-5 grid h-[52px] w-[52px] place-items-center rounded-2xl bg-blue text-[20px] font-semibold text-white">
                  {step.num}
                </span>
                <h3 className="mb-2 text-[18px] font-semibold tracking-[-0.01em] text-ink md:text-[19px]">
                  {step.title}
                </h3>
                <p className="text-[14.5px] leading-[1.65] text-ink-soft">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={250}>
          <div className="mt-12 flex flex-col items-start gap-5 rounded-2xl border border-blue/20 bg-sky-light p-6 md:mt-16 md:flex-row md:items-center md:justify-between md:p-8">
            <p className="max-w-[600px] text-[14.5px] leading-[1.65] text-ink">{p.tip}</p>
            <WhatsAppButton
              message={p.waMessage}
              context="process-cta"
              className="shrink-0"
            >
              {p.cta}
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
