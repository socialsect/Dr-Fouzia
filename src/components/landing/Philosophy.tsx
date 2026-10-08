"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLanding } from "@/components/landing/i18n";

function PillarIcon({ index }: { index: number }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (index === 0) {
    // Medicine first — clinical cross
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    );
  }
  if (index === 1) {
    // The whole picture — connected grid
    return (
      <svg {...common}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    );
  }
  // Practical, not excessive — balance
  return (
    <svg {...common}>
      <path d="M12 4v16M7 8l-3 6h6L7 8zM17 8l-3 6h6l-3-6zM8 20h8" />
    </svg>
  );
}

export function Philosophy() {
  const { copy } = useLanding();
  const p = copy.philosophy;

  return (
    <section className="bg-surface-deep py-16 md:py-24">
      <div className="wrap">
        <Reveal direction="up">
          <div className="eyebrow mb-8">{p.heading}</div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <blockquote className="mb-4 max-w-[900px]">
            <span
              aria-hidden="true"
              className="mb-2 block font-display text-[56px] leading-[0.6] text-line-dark md:text-[72px]"
            >
              &ldquo;
            </span>
            <p
              className="font-display font-normal leading-[1.25] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(var(--step-2), 3vw, var(--step-4))" }}
            >
              {p.quote}
            </p>
            <footer className="mt-5 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-blue text-[12px] font-semibold text-white">
                FA
              </span>
              <cite className="text-[14px] font-semibold not-italic text-ink">
                {p.attribution}
              </cite>
            </footer>
          </blockquote>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {p.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} direction="up" delay={150 + i * 100}>
              <div className="group h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-far)] md:p-7">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-surface-deep text-blue">
                  <PillarIcon index={i} />
                </span>
                <h3 className="mb-2 text-[17px] font-semibold tracking-[-0.01em] text-ink md:text-[18px]">
                  {pillar.title}
                </h3>
                <p className="text-[14px] leading-[1.65] text-ink-soft">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
