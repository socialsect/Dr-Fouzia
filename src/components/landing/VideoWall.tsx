"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { useLanding } from "@/components/landing/i18n";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

type FilterId = "all" | "gut" | "womens" | "cbt" | "functional";

export function VideoWall() {
  const { copy } = useLanding();
  const v = copy.videoWall;
  const [filter, setFilter] = useState<FilterId>("all");

  const videos =
    filter === "all" ? v.videos : v.videos.filter((video) => video.category === filter);

  return (
    <section className="bg-surface-sky py-16 md:py-24">
      <div className="wrap">
        <Reveal direction="up">
          <h2
            className="mb-8 max-w-[720px] font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink"
            style={{ fontSize: "clamp(var(--step-3), 3.6vw, var(--step-5))" }}
          >
            {v.heading}
          </h2>
        </Reveal>

        {/* Filter chips */}
        <Reveal direction="up" delay={80}>
          <div
            role="group"
            aria-label={v.heading}
            className="mb-8 flex flex-wrap gap-2"
          >
            {v.filters.map((chip) => {
              const active = filter === chip.id;
              return (
                <button
                  key={chip.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(chip.id as FilterId)}
                  className={`rounded-full border px-4 py-2 text-[13.5px] font-medium transition-all duration-300 ${
                    active
                      ? "border-blue bg-blue text-white shadow-blue"
                      : "border-line bg-white text-ink hover:border-blue hover:text-blue"
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Horizontal swipe on mobile, grid on desktop */}
        <div className="-mx-6 overflow-x-auto px-6 pb-2 md:mx-0 md:overflow-visible md:px-0">
          <div className="grid grid-flow-col auto-cols-[68%] gap-4 sm:grid-flow-row sm:grid-cols-2 sm:auto-cols-auto lg:grid-cols-3 md:gap-5">
            {videos.map((video, i) => (
              <Reveal key={video.id} direction="up" delay={i * 50}>
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-line bg-white">
                  {video.poster ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={video.poster}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : null}

                  {video.src ? (
                    /* TODO(clinic): self-hosted vertical MP4 plays inline */
                    <video
                      src={video.src}
                      poster={video.poster ?? undefined}
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={video.title}
                      className="absolute inset-0 h-full w-full bg-ink object-cover"
                    />
                  ) : (
                    /* TODO(clinic): replace placeholder with the clip */
                    <div className="absolute inset-0 text-start">
                      <VideoTileContent title={video.title} code={video.code} />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal direction="up" delay={200}>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-[15.5px] font-medium text-ink">{v.cta}</p>
            <WhatsAppButton
              message={v.waMessage}
              context="video-wall-cta"
              className="shrink-0"
            >
              {v.ctaButton}
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function VideoTileContent({ title, code }: { title: string; code: string }) {
  const { copy } = useLanding();
  return (
    <span className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-ink/75 via-ink/15 to-ink/10 p-4">
      <span className="self-start rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-ink">
        {code}
      </span>
      <span>
        <span className="mb-3 flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/95 text-blue">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5-11-6.5Z" />
            </svg>
          </span>
          <span className="text-[12px] font-medium text-white/90">
            {copy.videoWall.comingSoon}
          </span>
        </span>
        <span className="block text-[14px] font-semibold leading-[1.4] text-white">
          {title}
        </span>
      </span>
    </span>
  );
}
