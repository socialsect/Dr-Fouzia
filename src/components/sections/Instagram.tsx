"use client";

import { Reveal } from "@/components/ui/Reveal";

export function Instagram() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="wrap">
        <Reveal direction="left">
          <div className="eyebrow mb-5">@drfouziaalali</div>
        </Reveal>
        <Reveal direction="left" delay={100}>
          <h2
            className="mb-4 font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink"
            style={{ fontSize: "clamp(var(--step-3), 3.8vw, var(--step-4))" }}
          >
            Learn more on{" "}
            <em>Instagram.</em>
          </h2>
        </Reveal>
        <Reveal direction="left" delay={200}>
          <p className="mb-10 max-w-[440px] text-ink-soft" style={{ fontSize: "var(--step-0)", lineHeight: 1.65 }}>
            Health education, symptom breakdowns and practical insights from the
            clinic.
          </p>
        </Reveal>

        {/* Fouita Instagram Grid Widget */}
        <Reveal direction="up" delay={300}>
          <div
            className="mb-6 overflow-hidden border border-line"
            style={{ borderRadius: "var(--radius)" }}
          >
            <iframe
              src="https://emb.fouita.com/widget/0x54bf3d/ftwolug0gh"
              title="Grid Instagram Feed"
              width="100%"
              height="500"
              frameBorder="0"
              className="w-full"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal direction="up" delay={400}>
          <a
            href="https://instagram.com/drfouziaalali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue transition-all duration-300 hover:gap-2.5"
          >
            Follow @drfouziaalali &rarr;
          </a>
        </Reveal>
      </div>
    </section>
  );
}
