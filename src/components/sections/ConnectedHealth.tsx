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
          <div className="eyebrow mb-5">How a holistic doctor in Dubai works</div>
        </Reveal>
        <Reveal direction="left" delay={100}>
          <h2
            className="mb-5 font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink"
            style={{ fontSize: "clamp(var(--step-3), 3.8vw, var(--step-4))" }}
          >
            Symptoms rarely come alone, so neither does the{" "}
            <em className="text-blue">assessment.</em>
          </h2>
        </Reveal>
        <Reveal direction="left" delay={200}>
          <p className="mb-14 max-w-[480px] text-ink-soft" style={{ fontSize: "var(--step-0)", lineHeight: 1.65 }}>
            Tiredness, poor sleep, bloating and low mood often share a root.
            Choose an area to see what Dr Fouzia reviews and why it matters.
          </p>
        </Reveal>

        {/* Factor selector */}
        <Reveal direction="up" delay={300}>
          <div className="mb-8 flex gap-2 overflow-x-auto scrollbar-thin">
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
            <div className="p-6 md:p-8">
              {active ? (
                <>
                  <h3 className="mb-3 text-[20px] font-semibold tracking-[-0.02em] text-ink">
                    {active.title}
                  </h3>
                  <p className="mb-6 max-w-[760px] text-[14px] leading-[1.7] text-ink-soft">
                    {active.description}
                  </p>
                </>
              ) : (
                <p className="mb-6 text-[14px] leading-[1.65] text-ink-soft">
                  Select an area above to see what Dr Fouzia reviews and why it
                  matters.
                </p>
              )}
              <p className="border-t border-line pt-4 text-[13px] leading-[1.6] text-muted">
                This tool is for education. It is not a diagnosis. A proper
                assessment needs a consultation.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
