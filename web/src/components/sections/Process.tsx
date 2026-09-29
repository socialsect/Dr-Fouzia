"use client";

import { processSteps } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function Process() {
  const [lineRef, lineVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="journey" className="bg-white py-16 md:py-24">
      <div className="wrap">
        <Reveal direction="left">
          <div className="eyebrow mb-4">Our process</div>
        </Reveal>
        <Reveal direction="left" delay={100}>
          <h2
            className="mb-3 font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink"
            style={{ fontSize: "clamp(var(--step-3), 3.8vw, var(--step-4))" }}
          >
            Your journey, <em>step by step.</em>
          </h2>
        </Reveal>
        <Reveal direction="left" delay={200}>
          <p className="mb-16 max-w-[480px] text-ink-soft" style={{ fontSize: "var(--step-0)", lineHeight: 1.65 }}>
            No rushed appointments. No unnecessary tests. Just a clear path from
            conversation to action.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            ref={lineRef}
            className="absolute left-4 top-0 bottom-0 w-px bg-line md:left-1/2 md:-translate-x-px"
            style={{
              transform: lineVisible ? "scaleY(1)" : "scaleY(0)",
              transformOrigin: "top",
              transition: "transform 1s cubic-bezier(0.16,1,0.3,1)",
            }}
          />

          {processSteps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={step.num}
                className={`relative mb-12 flex items-start gap-8 md:mb-20 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-4 top-1 z-10 -translate-x-1/2 md:left-1/2">
                  <Reveal direction="up" delay={200 + i * 150}>
                    <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-blue bg-white text-[13px] font-semibold text-blue shadow-sm">
                      {step.num}
                    </div>
                  </Reveal>
                </div>

                {/* Content card */}
                <div className={`ml-16 flex-1 md:ml-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <Reveal direction={isLeft ? "right" : "left"} delay={300 + i * 150}>
                    <div className="rounded-2xl border border-line bg-surface-sky p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-far)] md:p-8">
                      <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-muted">
                        {step.time}
                      </p>
                      <h3 className="mb-3 text-[18px] font-semibold tracking-[-0.01em] text-ink md:text-[20px]">
                        {step.title}
                      </h3>
                      <p className="text-[14px] leading-[1.7] text-ink-soft">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden flex-1 md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
