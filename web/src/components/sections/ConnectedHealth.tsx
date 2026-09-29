"use client";

import { useState } from "react";
import { healthFactors, type HealthFactor } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function ConnectedHealth() {
  const [active, setActive] = useState<HealthFactor | null>(null);

  return (
    <section id="approach" className="bg-surface-deep py-16 md:py-20">
      <div className="wrap">
        <Reveal direction="left">
          <div className="eyebrow mb-5">A connected approach</div>
        </Reveal>
        <Reveal direction="left" delay={100}>
          <h2
            className="mb-5 font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink"
            style={{ fontSize: "clamp(var(--step-3), 3.8vw, var(--step-4))" }}
          >
            Your health is one story,
            <br />
            not separate symptoms.
          </h2>
        </Reveal>
        <Reveal direction="left" delay={200}>
          <p className="mb-14 max-w-[480px] text-ink-soft" style={{ fontSize: "var(--step-0)", lineHeight: 1.65 }}>
            Select a factor below to explore how it may form part of a wider
            health assessment. Each area connects to others in ways that
            influence how you feel.
          </p>
        </Reveal>

        {/* Factor selector */}
        <Reveal direction="up" delay={300}>
          <div className="mb-10 flex gap-2 overflow-x-auto scrollbar-thin">
            {healthFactors.map((factor) => (
              <button
                key={factor.id}
                onClick={() =>
                  setActive(active?.id === factor.id ? null : factor)
                }
                className={`flex-shrink-0 rounded-full border px-5 py-2.5 text-[13px] font-medium transition-all duration-300 ${
                  active?.id === factor.id
                    ? "border-blue bg-blue text-white shadow-blue"
                    : "border-line bg-white text-ink hover:border-blue hover:text-blue"
                }`}
              >
                {factor.title}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Content panel */}
        <Reveal direction="up" delay={400}>
          <div
            className="border border-line bg-white transition-all duration-300"
            style={{ borderRadius: "var(--radius)" }}
          >
            {active ? (
              <div className="grid md:grid-cols-[1fr_1fr]">
                {/* Left — description */}
                <div className="p-6 md:p-8">
                  <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-blue">
                    Explore a factor
                  </div>
                  <h3 className="mb-3 text-[20px] font-semibold tracking-[-0.02em] text-ink">
                    {active.title}
                  </h3>
                  <p className="text-[14px] leading-[1.65] text-ink-soft">
                    {active.description}
                  </p>
                </div>

                {/* Right — connections */}
                <div className="border-t border-line p-6 md:border-t-0 md:border-l md:p-8">
                  <div className="mb-5">
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                      Connects to
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {active.connections.map((c) => (
                        <span
                          key={c}
                          className="rounded-full bg-sky px-3 py-1 text-[12px] font-medium text-blue"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                      Relevant services
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {active.relatedServices.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-line px-3 py-1 text-[12px] font-medium text-ink-soft"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                <p className="text-[14px] leading-[1.65] text-ink-soft">
                  Select a factor above to explore how that area may form part of
                  a wider health assessment. This interaction is educational, not
                  diagnostic.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
