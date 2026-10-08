"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLanding } from "@/components/landing/i18n";

export function Reviews() {
  const { copy } = useLanding();
  const r = copy.reviews;

  // No reviews yet — render nothing rather than inventing testimonials
  // (brief §I: placeholder content must come from the clinic).
  if (!r.reviews.length) return null;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="wrap">
        <div className="mb-10 flex flex-wrap items-center gap-4">
          <Reveal direction="up">
            <h2
              className="font-display font-normal leading-[1.1] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(var(--step-3), 3.6vw, var(--step-4))" }}
            >
              {r.heading}
            </h2>
          </Reveal>
          {r.googleRating ? (
            <Reveal direction="up" delay={80}>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[13px] font-medium text-ink">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-blue" aria-hidden="true">
                  <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                </svg>
                {r.googleRating}
                <span className="font-normal text-muted">{r.googleBadgeLabel}</span>
              </span>
            </Reveal>
          ) : null}
        </div>

        <div className="-mx-6 overflow-x-auto px-6 pb-2 md:mx-0 md:overflow-visible md:px-0">
          <div className="grid grid-flow-col auto-cols-[78%] gap-4 sm:grid-flow-row sm:grid-cols-2 sm:auto-cols-auto lg:grid-cols-3 md:gap-5">
            {r.reviews.map((item, i) => (
              <Reveal key={`${item.name}-${i}`} direction="up" delay={i * 60}>
                <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                  <blockquote className="flex-1 text-[14.5px] leading-[1.65] text-ink">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 border-t border-line pt-4 text-[13px]">
                    <span className="block font-semibold text-ink">{item.name}</span>
                    <span className="block text-muted">{item.service}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
