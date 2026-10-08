"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLanding } from "@/components/landing/i18n";

export function DoctorProfile() {
  const { copy } = useLanding();
  const d = copy.doctor;

  return (
    <section className="bg-surface-deep py-16 md:py-24">
      <div className="wrap">
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal direction="up">
            <div className="relative mx-auto max-w-[340px] md:max-w-none">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-white/70">
                <img
                  src="/images/dr-fouzia/dr-fouzia-portrait.jpg"
                  alt="Dr. Fouzia Al Ali"
                  width={939}
                  height={1675}
                  loading="lazy"
                  className="h-full w-full object-cover object-[center_20%]"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal direction="up" delay={80}>
              <h2
                className="mb-4 font-display font-normal leading-[1.1] tracking-[-0.03em] text-ink"
                style={{ fontSize: "clamp(var(--step-3), 3.4vw, var(--step-4))" }}
              >
                {d.heading}
              </h2>
            </Reveal>

            <Reveal direction="up" delay={140}>
              <p className="mb-5 text-[15px] font-semibold tracking-[-0.01em] text-blue">
                {d.title}
              </p>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <p className="max-w-[620px] text-[15.5px] leading-[1.75] text-ink-soft">
                {d.bio}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
