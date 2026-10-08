"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { useLanding } from "@/components/landing/i18n";

export function Faq() {
  const { copy } = useLanding();
  const q = copy.faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="wrap">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <Reveal direction="up">
              <h2
                className="font-display font-normal leading-[1.1] tracking-[-0.03em] text-ink"
                style={{ fontSize: "clamp(var(--step-3), 3.4vw, var(--step-4))" }}
              >
                {q.heading}
              </h2>
            </Reveal>
          </div>

          <div className="border-t border-line">
            {q.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} direction="up" delay={i * 50}>
                  <div className="border-b border-line">
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-5 py-5 text-start text-[15.5px] font-semibold leading-[1.4] text-ink transition-colors duration-300 hover:text-blue md:text-[16.5px]"
                      >
                        {item.q}
                        <span
                          aria-hidden="true"
                          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                            isOpen
                              ? "rotate-45 border-blue bg-blue text-white"
                              : "border-line text-blue"
                          }`}
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${i}`}
                      hidden={!isOpen}
                      className="pb-6 pe-10 text-[14.5px] leading-[1.7] text-ink-soft"
                    >
                      {item.a}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
