"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PageEnquirySection } from "@/components/layout/PageEnquirySection";

interface ServicePageProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  bullets?: string[];
  cta?: { label: string; href: string };
  secondCta?: { label: string; href: string };
  relatedLinks?: { label: string; href: string }[];
  faqs?: { question: string; answer: string }[];
  showEnquiryForm?: boolean;
}

export function ServicePage({
  eyebrow,
  title,
  highlight,
  description,
  bullets,
  cta = { label: "Book a consultation", href: "/contact" },
  secondCta,
  relatedLinks,
  faqs,
  showEnquiryForm = false,
}: ServicePageProps) {
  return (
    <>
    <main className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="wrap">
        <Reveal direction="left">
          <div className="eyebrow mb-5">{eyebrow}</div>
        </Reveal>

        <Reveal direction="left" delay={100}>
          <h1
            className="mb-6 max-w-[700px] font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink"
            style={{ fontSize: "clamp(var(--step-4), 5vw, var(--step-6))" }}
          >
            {title}
            {highlight && (
              <>
                <br />
                <em className="text-blue">{highlight}</em>
              </>
            )}
          </h1>
        </Reveal>

        <Reveal direction="left" delay={200}>
          <p
            className="mb-10 max-w-[560px] text-ink-soft"
            style={{ fontSize: "var(--step-1)", lineHeight: 1.65 }}
          >
            {description}
          </p>
        </Reveal>

        {bullets && bullets.length > 0 && (
          <Reveal direction="up" delay={300}>
            <div className="mb-12 grid gap-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <div
                  key={b}
                  className="flex items-start gap-3 rounded-xl border border-line p-4 text-[14px] text-ink-soft transition-colors hover:border-blue/30 hover:bg-sky-light"
                >
                  <span className="mt-0.5 text-blue">&#10003;</span>
                  {b}
                </div>
              ))}
            </div>
          </Reveal>
        )}

        <Reveal direction="up" delay={400}>
          <div className="flex flex-wrap gap-3">
            <Link href={cta.href} className="btn btn-primary">
              {cta.label}
            </Link>
            {secondCta && (
              <Link href={secondCta.href} className="btn btn-ghost">
                {secondCta.label}
              </Link>
            )}
          </div>
        </Reveal>

        {relatedLinks && relatedLinks.length > 0 && (
          <Reveal direction="up" delay={500}>
            <div className="mt-16 border-t border-line pt-10">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                Related services
              </p>
              <div className="flex flex-wrap gap-2">
                {relatedLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-full border border-line px-4 py-2 text-[13px] font-medium text-ink-soft transition-all hover:border-blue hover:text-blue"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </main>
    {faqs && faqs.length > 0 && (
      <section className="bg-surface-deep py-16 md:py-24">
        <div className="wrap-narrow">
          <Reveal direction="up">
            <div className="mb-6">
              <div className="eyebrow mb-4">A few helpful answers</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Frequently asked <em className="text-blue">questions.</em>
              </h2>
            </div>
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-semibold text-ink marker:content-none">
                  {faq.question}
                  <span
                    className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-line text-blue transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[760px] pt-4 pr-10 text-[15px] leading-[1.75] text-ink-soft">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    )}
    {showEnquiryForm && <PageEnquirySection />}
    </>
  );
}
