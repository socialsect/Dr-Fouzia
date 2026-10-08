"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLanding } from "@/components/landing/i18n";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export function SoundFamiliar() {
  const { copy } = useLanding();
  const s = copy.soundFamiliar;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="wrap">
        <Reveal direction="up">
          <h2
            className="mb-10 font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink md:mb-14"
            style={{ fontSize: "clamp(var(--step-3), 3.8vw, var(--step-4))" }}
          >
            {s.heading}
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-3.5 md:grid-cols-3 md:gap-5">
          {s.quotes.map((quote, i) => (
            <Reveal key={quote} direction="up" delay={i * 60}>
              <div className="speech-bubble h-full rounded-2xl border border-line bg-surface-sky p-4 md:p-5">
                <span
                  aria-hidden="true"
                  className="mb-1 block font-display text-[26px] leading-none text-blue/30"
                >
                  &ldquo;
                </span>
                <p className="text-[13.5px] leading-[1.55] text-ink md:text-[15px]">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={150}>
          <div className="mt-12 flex flex-col items-start gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p
              className="max-w-[560px] font-display leading-[1.3] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(18px, 2.2vw, 24px)" }}
            >
              {s.closing}
            </p>
            <WhatsAppButton
              message={s.waMessage}
              context="sound-familiar"
              className="shrink-0"
            >
              {s.cta}
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
