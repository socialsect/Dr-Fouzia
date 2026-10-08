"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLanding } from "@/components/landing/i18n";
import { EnquiryForm } from "@/components/landing/EnquiryForm";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export function FinalCta() {
  const { copy } = useLanding();
  const c = copy.finalCta;

  return (
    <section className="bg-gradient-to-br from-sky-light via-white to-white py-16 md:py-24">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:gap-14 lg:gap-20">
          <div>
            <Reveal direction="up">
              <h2
                className="mb-5 font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink"
                style={{ fontSize: "clamp(var(--step-3), 3.8vw, var(--step-5))" }}
              >
                {c.heading}
              </h2>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <p className="mb-8 max-w-[520px] text-[16px] leading-[1.65] text-ink-soft">
                {c.sub}
              </p>
            </Reveal>
            <Reveal direction="up" delay={180}>
              <WhatsAppButton
                message={c.waMessage}
                context="final-cta"
                className="justify-center sm:justify-start"
              >
                {c.whatsappCta}
              </WhatsAppButton>
            </Reveal>
          </div>

          <Reveal direction="up" delay={150}>
            <EnquiryForm variant={2} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
