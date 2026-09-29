"use client";

import { useRef } from "react";
import { services } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: -1 | 1) {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  }

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="wrap">
        {/* Header */}
        <Reveal direction="left">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow mb-5">Explore services</div>
              <h2
                className="font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink"
                style={{ fontSize: "clamp(var(--step-3), 3.8vw, var(--step-4))" }}
              >
                Different ways to support
                <br />
                your <em className="text-blue">health goals.</em>
              </h2>
            </div>
            <div className="hidden gap-2 md:flex">
              <button
                onClick={() => scroll(-1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink transition-all hover:border-blue hover:text-blue"
                aria-label="Previous"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                onClick={() => scroll(1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink transition-all hover:border-blue hover:text-blue"
                aria-label="Next"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={100}>
          <p className="mb-10 max-w-[440px] text-ink-soft" style={{ fontSize: "var(--step-0)", lineHeight: 1.65 }}>
            Each service is shaped around you&mdash;your history, your goals, your
            pace.
          </p>
        </Reveal>

        {/* Editorial service list — horizontal scroll */}
        <Reveal direction="up" delay={200}>
          <div
            ref={scrollRef}
            className="flex gap-0 overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {services.map((s) => (
              <article
                key={s.num}
                className="group flex min-w-[280px] max-w-[300px] flex-shrink-0 flex-col border-r border-line px-6 py-4 transition-colors hover:bg-sky-light"
                style={{ scrollSnapAlign: "start" }}
              >
                <span className="mb-3 block font-display text-[40px] font-normal leading-[1] tracking-[-0.03em] text-blue/25">
                  {s.num}
                </span>
                <h3 className="mb-2 text-[16px] font-semibold tracking-[-0.01em] text-ink">
                  {s.title}
                </h3>
                <p className="mb-4 flex-1 text-[13px] leading-[1.55] text-ink-soft">
                  {s.description}
                </p>
                <span className="text-[12px] font-medium text-blue transition-all group-hover:tracking-[0.02em]">
                  Read overview &nearr;
                </span>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
