"use client";

import { whyCards } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Why() {
  return (
    <section className="bg-surface-deep py-16 md:py-24">
      <div className="wrap">
        <Reveal direction="left">
          <div className="eyebrow mb-5">Why Dr. Fouzia</div>
        </Reveal>
        <Reveal direction="left" delay={100}>
          <h2
            className="mb-12 font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink"
            style={{ fontSize: "clamp(var(--step-3), 3.8vw, var(--step-4))" }}
          >
            Why patients choose{" "}
            <em>this approach.</em>
          </h2>
        </Reveal>

        {/* Card 1 — full width */}
        <Reveal direction="up" delay={100}>
          <div className="group mb-4 rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:shadow-[var(--shadow-far)] hover:-translate-y-1 md:p-9">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-deep text-blue">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c4-4 8-7.5 8-12a8 8 0 0 0-16 0c0 4.5 4 8 8 12z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <h3 className="mb-2 text-[20px] font-semibold tracking-[-0.01em] text-ink md:text-[24px]">
              {whyCards[0].title}
            </h3>
            <p className="max-w-[600px] text-[15px] leading-[1.7] text-ink-soft">
              {whyCards[0].description}
            </p>
            <div className="mt-5 h-1 w-12 rounded-full bg-blue/20 transition-all duration-300 group-hover:w-20 group-hover:bg-blue/40" />
          </div>
        </Reveal>

        {/* Cards 2 & 3 — side by side */}
        <div className="mb-4 grid gap-4 md:grid-cols-2">
          <Reveal direction="up" delay={200}>
            <div className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:shadow-[var(--shadow-far)] hover:-translate-y-1 md:p-9">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-deep text-blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </span>
              <h3 className="mb-2 text-[18px] font-semibold tracking-[-0.01em] text-ink">
                {whyCards[1].title}
              </h3>
              <p className="text-[14px] leading-[1.65] text-ink-soft">
                {whyCards[1].description}
              </p>
              <div className="mt-auto pt-5 h-1 w-12 rounded-full bg-blue/20 transition-all duration-300 group-hover:w-20 group-hover:bg-blue/40" />
            </div>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <div className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:shadow-[var(--shadow-far)] hover:-translate-y-1 md:p-9">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-deep text-blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 3h6" />
                  <path d="M12 3v7l-5 8.5A2 2 0 0 0 8.5 21h7a2 2 0 0 0 1.5-2.5L12 10V3z" />
                </svg>
              </span>
              <h3 className="mb-2 text-[18px] font-semibold tracking-[-0.01em] text-ink">
                {whyCards[2].title}
              </h3>
              <p className="text-[14px] leading-[1.65] text-ink-soft">
                {whyCards[2].description}
              </p>
              <div className="mt-auto pt-5 h-1 w-12 rounded-full bg-blue/20 transition-all duration-300 group-hover:w-20 group-hover:bg-blue/40" />
            </div>
          </Reveal>
        </div>

        {/* Card 4 — full width */}
        <Reveal direction="up" delay={400}>
          <div className="group rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:shadow-[var(--shadow-far)] hover:-translate-y-1 md:p-9">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
              <div className="flex-1">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-deep text-blue">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 2v6h-6" />
                    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                    <path d="M3 22v-6h6" />
                    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                  </svg>
                </span>
                <h3 className="mb-2 text-[18px] font-semibold tracking-[-0.01em] text-ink md:text-[20px]">
                  {whyCards[3].title}
                </h3>
                <p className="text-[14px] leading-[1.65] text-ink-soft">
                  {whyCards[3].description}
                </p>
              </div>
              <div className="flex items-center gap-3 text-[13px] font-medium text-blue">
                <span className="underline underline-offset-4">Learn more</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
