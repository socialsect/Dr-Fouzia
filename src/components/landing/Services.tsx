"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLanding } from "@/components/landing/i18n";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

const cardIcons = [
  // gut — digest path
  <path key="gut" d="M6 4v5a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v3M6 4a2 2 0 0 0-2 2 2 2 0 0 0 2 2M18 20a2 2 0 0 0 2-2 2 2 0 0 0-2-2" />,
  // women's health — balance
  <path key="women" d="M12 3v18M7 7l5-4 5 4M7 17l5 4 5-4" />,
  // cbt — head + spark
  <path key="cbt" d="M15 20a5 5 0 0 0 5-5V9a6 6 0 1 0-12 0v2H5.5A2.5 2.5 0 0 0 3 13.5V15a5 5 0 0 0 4 4.9M9 11h.01M14 12h2" />,
  // fatigue — battery low
  <path key="fatigue" d="M3 8h14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1ZM21 11v2M5 11v2" />,
  // aging — leaf/growth
  <path key="aging" d="M12 21V9M12 9C12 6 14 3 18 3c0 4-2 6-6 6ZM12 12c0-2.5-1.7-5-5-5 0 3.5 1.7 5 5 5Z" />,
  // supplements — capsule
  <path key="supp" d="M8.5 4.5a4 4 0 0 1 5.7 5.7l5 5a4 4 0 0 1-5.7 5.7l-5-5a4 4 0 0 1 0-5.7ZM9.5 14.5l5-5" />,
];

export function Services() {
  const { copy } = useLanding();
  const s = copy.services;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="wrap">
        <Reveal direction="up">
          <h2
            className="mb-4 max-w-[760px] font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink"
            style={{ fontSize: "clamp(var(--step-3), 3.6vw, var(--step-5))" }}
          >
            {s.heading}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {s.cards.map((card, i) => (
            <Reveal key={card.num} direction="up" delay={i * 60}>
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue hover:shadow-[var(--shadow-far)] md:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-blue shadow-[var(--shadow-near)] transition-transform duration-300 group-hover:scale-105">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {cardIcons[i % cardIcons.length]}
                    </svg>
                  </span>
                  <span className="text-[13px] font-semibold tracking-[0.06em] text-muted">
                    {card.num}
                  </span>
                </div>

                <h3 className="mb-3 text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink md:text-[18.5px]">
                  {card.title}
                </h3>

                <p className="mb-3 text-[13.5px] font-medium leading-[1.55] text-blue">
                  {card.who}
                </p>

                <p className="mb-5 flex-1 text-[14.5px] leading-[1.65] text-ink-soft">
                  {card.approach}
                </p>

                <WhatsAppButton
                  message={s.waTemplate(card.waService)}
                  context={`service-${card.num}`}
                  variant="inline"
                  className="self-start"
                >
                  {s.askLabel}
                </WhatsAppButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
