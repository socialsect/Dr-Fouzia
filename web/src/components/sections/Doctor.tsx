"use client";

import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function Doctor() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const [sectionRef] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="doctor" ref={sectionRef} className="bg-surface-deep py-16 md:py-24">
      <div className="wrap">
        <div className="grid items-center gap-12 md:grid-cols-[0.42fr_0.58fr] md:gap-20">
          {/* Left */}
          <div>
            <Reveal direction="left">
              <span className="mb-1 block font-display text-[72px] leading-[0.8] text-line-dark">
                &ldquo;
              </span>
            </Reveal>

            <Reveal direction="left" delay={100}>
              <blockquote
                className="mb-6 font-display font-normal leading-[1.25] tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(var(--step-1), 2.6vw, var(--step-2))" }}
              >
                Every person has a story that explains their health.{" "}
                <em className="text-blue">I listen</em> to that story
                before I treat anything.
              </blockquote>
            </Reveal>

            <Reveal direction="left" delay={200}>
              <div className="mb-6 flex items-center gap-3.5">
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-blue text-[15px] font-semibold text-white">
                  FA
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-ink">
                    Dr. Fouzia Al Ali
                  </div>
                  <div className="text-[12px] text-muted">
                    Consultant Family Physician
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={300}>
              <div className="mb-6 flex flex-wrap gap-2">
                {["Functional Medicine", "Lifestyle Medicine", "CBT"].map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-line px-3 py-1.5 text-[11px] font-medium text-muted transition-colors duration-300 hover:border-blue hover:text-blue"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal direction="left" delay={400}>
              <p className="mb-3 text-[14px] leading-[1.7] text-ink-soft">
                Dr. Fouzia brings together medical knowledge, evidence-based care,
                lifestyle medicine and behavioral change. Her approach is shaped by
                one belief: that understanding the whole person leads to better
                outcomes than treating symptoms alone.
              </p>
            </Reveal>

            <Reveal direction="left" delay={500}>
              <p className="mb-6 text-[14px] leading-[1.7] text-ink-soft">
                With more than 26 years in primary healthcare, she works with
                patients dealing with hormonal imbalances, digestive concerns,
                metabolic challenges, stress-related conditions and the
                complexities of healthy aging.
              </p>
            </Reveal>

            <Reveal direction="left" delay={600}>
              <a
                href="/about-dr-fouzia"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue transition-all duration-300 hover:gap-2.5"
              >
                Read her story &rarr;
              </a>
            </Reveal>
          </div>

          {/* Right — portrait with parallax */}
          <Reveal direction="right" delay={200}>
            <div
              ref={portraitRef}
              className="relative overflow-hidden border border-line bg-surface-sky transition-transform duration-700 ease-out"
              style={{ borderRadius: "var(--radius)", aspectRatio: "4/5" }}
            >
              {/* Placeholder — replace with <img> when real photo is supplied */}
              <div className="absolute inset-0 grid place-items-center transition-transform duration-700 ease-out hover:scale-105">
                <div className="text-center">
                  <span className="block font-display text-[72px] font-normal leading-[1] text-blue/15">
                    FA
                  </span>
                  <span className="mt-2 block text-[12px] font-medium tracking-[0.06em] uppercase text-blue/30">
                    Photo
                  </span>
                </div>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-blue/5" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
